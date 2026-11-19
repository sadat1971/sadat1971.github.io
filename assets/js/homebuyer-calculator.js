(function () {
  "use strict";

  var form = document.getElementById("mortgage-form");
  if (!form) return;

  var mode = document.getElementById("mortgage-mode");
  var errorBox = document.getElementById("mortgage-error");
  var resultLabel = document.getElementById("mortgage-result-label");
  var resultValue = document.getElementById("mortgage-result");
  var summary = document.getElementById("mortgage-summary");
  var breakdown = document.getElementById("mortgage-breakdown");

  function number(id) { return Number(document.getElementById(id).value); }
  function money(value, digits) { return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: digits || 0 }); }
  function percent(value) { return value.toLocaleString("en-US", { maximumFractionDigits: 3 }) + "%"; }
  function paymentFactor(annualRate, years) {
    var months = years * 12;
    var monthlyRate = annualRate / 100 / 12;
    return monthlyRate === 0 ? 1 / months : monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  }
  function ownership(price, taxRate, maintenanceRate, insurance, hoa) {
    return price * (taxRate + maintenanceRate) / 100 / 12 + insurance / 12 + hoa;
  }
  function addRow(label, value) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var strong = document.createElement("strong");
    span.textContent = label;
    strong.textContent = value;
    li.appendChild(span); li.appendChild(strong); breakdown.appendChild(li);
  }
  function showFields() {
    document.querySelectorAll(".conditional-field").forEach(function (field) {
      field.hidden = field.getAttribute("data-modes").split(" ").indexOf(mode.value) === -1;
    });
  }
  function calculate(event) {
    if (event) event.preventDefault();
    errorBox.hidden = true;
    breakdown.innerHTML = "";

    var price = number("home-price");
    var down = number("down-payment");
    var rate = number("mortgage-rate");
    var budget = number("monthly-budget");
    var years = number("loan-term");
    var tax = number("property-tax");
    var insurance = number("insurance");
    var hoa = number("hoa");
    var maintenance = number("maintenance");
    var closing = number("closing-cost");
    var inputs = [years, tax, insurance, hoa, maintenance, closing];

    if (inputs.some(function (value) { return !Number.isFinite(value) || value < 0; })) return fail("Please enter valid, non-negative values in every visible field.");

    var factor, loan, principalPayment, otherCosts, total, cash;
    if (mode.value === "payment") {
      if (!(price > 0) || down < 0 || down >= price || rate < 0) return fail("Home price must be positive, and the down payment must be between $0 and the home price.");
      loan = price - down; factor = paymentFactor(rate, years); principalPayment = loan * factor;
      otherCosts = ownership(price, tax, maintenance, insurance, hoa); total = principalPayment + otherCosts; cash = down + price * closing / 100;
      resultLabel.textContent = "Estimated monthly housing cost"; resultValue.textContent = money(total);
      summary.textContent = "For a " + money(price) + " home with " + money(down) + " down.";
      addRow("Principal & interest", money(principalPayment)); addRow("Property tax", money(price * tax / 100 / 12)); addRow("Home insurance", money(insurance / 12)); addRow("HOA", money(hoa)); addRow("Maintenance reserve", money(price * maintenance / 100 / 12)); addRow("Loan amount", money(loan)); addRow("Estimated cash at closing", money(cash));
    } else if (mode.value === "price") {
      if (!(budget > 0) || down < 0 || rate < 0) return fail("Budget must be positive, and down payment and rate cannot be negative.");
      factor = paymentFactor(rate, years);
      var priceCoefficient = factor + (tax + maintenance) / 100 / 12;
      price = (budget - insurance / 12 - hoa + down * factor) / priceCoefficient;
      if (!(price > down)) return fail("This budget does not support a loan with the entered fixed costs. Increase the budget or reduce HOA and insurance.");
      loan = price - down; principalPayment = loan * factor; otherCosts = ownership(price, tax, maintenance, insurance, hoa); cash = down + price * closing / 100;
      resultLabel.textContent = "Estimated affordable home price"; resultValue.textContent = money(price);
      summary.textContent = "Keeps the estimated housing cost near " + money(budget) + " per month.";
      addRow("Loan amount", money(loan)); addRow("Principal & interest", money(principalPayment)); addRow("Other monthly costs", money(otherCosts)); addRow("Down payment", money(down)); addRow("Estimated cash at closing", money(cash));
    } else if (mode.value === "downPayment") {
      if (!(price > 0) || !(budget > 0) || rate < 0) return fail("Home price and budget must be positive, and the rate cannot be negative.");
      otherCosts = ownership(price, tax, maintenance, insurance, hoa); factor = paymentFactor(rate, years);
      var affordableLoan = (budget - otherCosts) / factor;
      if (affordableLoan < 0) return fail("The non-mortgage ownership costs already exceed your monthly budget.");
      down = Math.max(0, price - affordableLoan);
      if (down > price) return fail("The entered budget cannot support this purchase.");
      loan = price - down; principalPayment = loan * factor; cash = down + price * closing / 100;
      resultLabel.textContent = "Estimated required down payment"; resultValue.textContent = money(down);
      summary.textContent = "To target a total housing cost of " + money(budget) + " per month.";
      addRow("Down payment percentage", percent(down / price * 100)); addRow("Loan amount", money(loan)); addRow("Principal & interest", money(principalPayment)); addRow("Other monthly costs", money(otherCosts)); addRow("Estimated cash at closing", money(cash));
    } else {
      if (!(price > 0) || down < 0 || down >= price || !(budget > 0)) return fail("Enter a positive price and budget, with a down payment below the home price.");
      loan = price - down; otherCosts = ownership(price, tax, maintenance, insurance, hoa);
      var available = budget - otherCosts;
      if (available <= 0) return fail("The non-mortgage ownership costs already exceed your monthly budget.");
      var zeroPayment = loan / (years * 12);
      if (available < zeroPayment) return fail("Even a 0% mortgage would exceed this budget. Increase the down payment or monthly budget.");
      var low = 0, high = 30;
      if (loan * paymentFactor(high, years) <= available) return fail("This budget supports a rate above 30%. Check your inputs or use 30% as a conservative upper bound.");
      for (var i = 0; i < 80; i++) { var mid = (low + high) / 2; if (loan * paymentFactor(mid, years) <= available) low = mid; else high = mid; }
      rate = low; principalPayment = loan * paymentFactor(rate, years); cash = down + price * closing / 100;
      resultLabel.textContent = "Highest estimated affordable rate"; resultValue.textContent = percent(rate);
      summary.textContent = "At this rate, the estimated monthly housing cost is " + money(principalPayment + otherCosts) + ".";
      addRow("Principal & interest", money(principalPayment)); addRow("Other monthly costs", money(otherCosts)); addRow("Loan amount", money(loan)); addRow("Estimated cash at closing", money(cash));
    }
  }
  function fail(message) { errorBox.textContent = message; errorBox.hidden = false; resultLabel.textContent = "Unable to calculate"; resultValue.textContent = "—"; summary.textContent = "Review the highlighted scenario inputs and try again."; }

  mode.addEventListener("change", function () { showFields(); calculate(); });
  form.addEventListener("submit", calculate);
  form.addEventListener("reset", function () { window.setTimeout(function () { showFields(); calculate(); }, 0); });
  showFields(); calculate();
}());
