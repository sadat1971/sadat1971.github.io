(function () {
  "use strict";
  var form = document.getElementById("compound-form");
  if (!form) return;
  var mode = document.getElementById("compound-mode");
  var errorBox = document.getElementById("compound-error");
  var resultLabel = document.getElementById("compound-result-label");
  var resultValue = document.getElementById("compound-result");
  var summary = document.getElementById("compound-summary");
  var breakdown = document.getElementById("compound-breakdown");

  function number(id) { return Number(document.getElementById(id).value); }
  function money(value) { return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }); }
  function futureValue(initial, monthly, annualRate, months) {
    var r = annualRate / 100 / 12;
    if (r === 0) return initial + monthly * months;
    var growth = Math.pow(1 + r, months);
    return initial * growth + monthly * (growth - 1) / r;
  }
  function addRow(label, value) {
    var li = document.createElement("li"), span = document.createElement("span"), strong = document.createElement("strong");
    span.textContent = label; strong.textContent = value; li.appendChild(span); li.appendChild(strong); breakdown.appendChild(li);
  }
  function showFields() {
    document.querySelectorAll(".conditional-field").forEach(function (field) { field.hidden = field.getAttribute("data-modes").split(" ").indexOf(mode.value) === -1; });
  }
  function calculate(event) {
    if (event) event.preventDefault();
    errorBox.hidden = true; breakdown.innerHTML = "";
    var initial = number("initial-investment"), monthly = number("monthly-contribution"), goal = number("savings-goal"), rate = number("annual-return"), years = number("investment-years");
    if (rate < 0 || !Number.isFinite(rate)) return fail("Expected return must be zero or greater.");
    var months = Math.round(years * 12), r = rate / 100 / 12, growth, value, contributed, earnings;

    if (mode.value === "future") {
      if (initial < 0 || monthly < 0 || !(years > 0)) return fail("Enter non-negative investments and an investment period greater than zero.");
      value = futureValue(initial, monthly, rate, months); contributed = initial + monthly * months; earnings = value - contributed;
      resultLabel.textContent = "Projected final amount"; resultValue.textContent = money(value); summary.textContent = "After " + (months / 12).toLocaleString() + " years at an assumed " + rate + "% annual return.";
      addRow("Total contributions", money(contributed)); addRow("Estimated investment growth", money(earnings)); addRow("Monthly contributions", months.toLocaleString() + " deposits");
    } else if (mode.value === "monthly") {
      if (initial < 0 || !(goal > 0) || !(years > 0)) return fail("Enter a positive goal and period, with a non-negative initial investment.");
      growth = Math.pow(1 + r, months);
      var initialFuture = initial * growth;
      if (initialFuture >= goal) monthly = 0;
      else monthly = r === 0 ? (goal - initial) / months : (goal - initialFuture) * r / (growth - 1);
      contributed = initial + monthly * months; earnings = goal - contributed;
      resultLabel.textContent = "Required monthly contribution"; resultValue.textContent = money(monthly); summary.textContent = "Estimated month-end contribution to reach " + money(goal) + " in " + (months / 12).toLocaleString() + " years.";
      addRow("Initial investment", money(initial)); addRow("Total contributions", money(contributed)); addRow("Estimated investment growth", money(earnings));
    } else if (mode.value === "initial") {
      if (monthly < 0 || !(goal > 0) || !(years > 0)) return fail("Enter a positive goal and period, with a non-negative monthly contribution.");
      growth = Math.pow(1 + r, months);
      var monthlyFuture = r === 0 ? monthly * months : monthly * (growth - 1) / r;
      initial = Math.max(0, (goal - monthlyFuture) / growth); value = futureValue(initial, monthly, rate, months); contributed = initial + monthly * months;
      resultLabel.textContent = "Required initial investment"; resultValue.textContent = money(initial); summary.textContent = initial === 0 ? "Your monthly contributions alone are projected to meet the goal." : "Estimated starting amount needed to reach " + money(goal) + ".";
      addRow("Monthly contribution", money(monthly)); addRow("Total contributions", money(contributed)); addRow("Estimated investment growth", money(value - contributed));
    } else {
      if (initial < 0 || monthly < 0 || !(goal > 0)) return fail("Enter a positive goal and non-negative contribution amounts.");
      if (initial >= goal) months = 0;
      else if (monthly === 0 && rate === 0) return fail("With no return or monthly contributions, this goal cannot be reached.");
      else {
        var low = 0, high = 1200;
        if (futureValue(initial, monthly, rate, high) < goal) return fail("This goal takes more than 100 years under these assumptions. Increase contributions or expected return.");
        while (low < high) { var mid = Math.floor((low + high) / 2); if (futureValue(initial, monthly, rate, mid) >= goal) high = mid; else low = mid + 1; }
        months = low;
      }
      value = futureValue(initial, monthly, rate, months); contributed = initial + monthly * months;
      var yearPart = Math.floor(months / 12), monthPart = months % 12;
      var duration = (yearPart ? yearPart + (yearPart === 1 ? " year" : " years") : "") + (yearPart && monthPart ? ", " : "") + (monthPart ? monthPart + (monthPart === 1 ? " month" : " months") : "");
      if (!duration) duration = "Already reached";
      resultLabel.textContent = "Estimated time to goal"; resultValue.textContent = duration; summary.textContent = "Time needed to reach at least " + money(goal) + ".";
      addRow("Projected balance", money(value)); addRow("Total contributions", money(contributed)); addRow("Estimated investment growth", money(value - contributed));
    }
  }
  function fail(message) { errorBox.textContent = message; errorBox.hidden = false; resultLabel.textContent = "Unable to calculate"; resultValue.textContent = "—"; summary.textContent = "Review the scenario inputs and try again."; }
  mode.addEventListener("change", function () { showFields(); calculate(); });
  form.addEventListener("submit", calculate);
  form.addEventListener("reset", function () { window.setTimeout(function () { showFields(); calculate(); }, 0); });
  showFields(); calculate();
}());
