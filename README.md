# About me
I build cutting-edge ML solution | NLP with LLM | Data Scientist | Machine Learning Engineer |

[Publications](/publication.html) | [Short Resume](/resume.html) | [Projects](/projects.html) | [Contact](/contact.html) | [Blogs and Tutorials](/blogs_and_tutorials.html)

<p align="center">
  <img src="/docs/images/piash.jpg" width="20%">
</p>


<p style="color: blue;"> Wanna talk idea, tech, ML, NLP or just a coffee ? Feel free to shoot me an email! <b>sadat.shahriar.03@gmail.com</b>  </p>

## Updates

<p><strong><span style="color: green;">11-18-2024:</span></strong> <span style="font-family:Comic Sans MS, cursive; font-weight: bold;"><span style="color: purple;">🎉 🎉 🎉 Amazing News!!</span></span> I accepted a full-time offer to join Aamazon (AWS) from next summer as an Applied Scientist (L5)!!</p>

**<span style="color: green;">11-03-2024:</span>** Officially a PhD candidate ! Passed my PhD proposal defense. Thanks to my supervisor Dr. Arjun Mukherjee and the amazing committee :) 

**<span style="color: green;">10-24-2024:</span>** Part of my internship work with Amazon Web Services (AWS) is available here: [Inference Time LLM Alignment for Single and Multi Domain Preference Spectrum](https://arxiv.org/pdf/2410.19206)

**<span style="color: green;">02-16-2024:</span>** I wrote a detailed blog about my experience at AWS [here](https://medium.com/@shahriarsadat71_26111/internship-at-aws-as-an-applied-scientist-1105204726a2).


<p><strong><span style="color: green;">05-13-2024:</span></strong> <span style="font-family:Comic Sans MS, cursive; font-weight: bold;"><span style="color: red;">🎉 Great News!!</span></span> I joined Amazon (AWS) as an applied scientist intern !!</p>

**<span style="color: green;">02-16-2024:</span>** I gave a talk to the research-info session organized by [Cougar AI](https://www.cougarai.org/). Click [here](/talk_02_22_24.html) to see the details.


**<span style="color: green;">02-16-2024:</span>** I am invited to a talk organized by [Cougar AI](https://www.cougarai.org/). Click [here](https://www.linkedin.com/posts/activity-7164369186528460800-r1Mi?utm_source=share&utm_medium=member_desktop) to see the details.

**<span style="color: green;">02-09-2024:</span>** Published a two-part medium article on crafting custom dataset for instruction fine-tuning with LLama2. [part 1](https://medium.com/p/1127002ecf0b) and [part 2](https://medium.com/p/8059a063b5e0)

**<span style="color: green;">01-16-2024:</span>** I will be teaching (as instructional assistant of Dr. Mukherjee) a graduate [Machine Learning](https://www2.cs.uh.edu/~arjun/courses/ml/) course in Spring'24

**<span style="color: green;">12-11-2023:</span>** I received the *Outstanding Reviewer Award* from [BLP '23](https://blp-workshop.github.io/awards), co-located with EMNLP '23

**<span style="color: green;">06-30-2023:</span>** Two of my papers got accepted in RANLP '23 !  The paper on [Domain Transfer](https://aclanthology.org/2023.ranlp-1.115.pdf) and the Cryptocurrency-based [Collusion Scam](https://aclanthology.org/2023.ranlp-1.114.pdf) paper


## Projects

**<span style="color: purple;">This is not an updated list of projects. Please find my project details as recent publications in my [google scholar](https://scholar.google.com/citations?user=8whkcEsAAAAJ&hl=en)</span>**

(Last Update 01-10-2024)

### LLM for Mental Health Support (Ongoing)
– Traditional Large Language Model (LLMs), although skilled in various tasks, do not possess the necessary specialization to offer effective mental health support. In response to the critical need for mental health support, particularly for individuals facing distressful situations and heightened risks to their well-being, and posting to various online support groups, the initiative aims to develop a specialized LLM. 

–The objective is to develop an LLM program specifically designed to assist individuals facing mental health challenges. Designing a system that can analyze the patient's personality, the level of risk, and provide appropriate answers/comments is a significant challenge.

– Orchastreated a comprehensive step-by-step solution design. Performed intelligent prompt engineering with several SOTA LLMs (Llama2, GPT-3, Mistral-7b), supervised fine-tuning, and fine-tuning with Reinforcement Learning with Human and AI feedback. 

– While the initiative is still in progress, early results show positive progress toward the creation of an LLM specifically designed for mental health support. The coordinated use of prompt engineering and fine-tuning approaches is resulting in a more complex understanding of users' mental states, allowing the model to provide intelligent and empathic replies.

<p align="center">
  <img src="/docs/images/robot_support.png" width="30%">
</p>

### Deceptive Domain Transfer
– The web being a fertile ground for deceptive text in different domains like Fake News, Phishing Emails, Fake Reviews, and Rumors, the SOTA detection methods are domain-specific, and as such, detection model in one domain doesnot work for the other. However, a major discrepancy in the data distribution in these domains requires a method of deceptive knowledge transfer.

– Conducted several in-depth ML-based analyses for a successful domain transfer that includes intermediate-layer concatenation, holistic training, and multi-task learning. Used cutting-edge techniques like BERT, character-level CNN, Sentence-BERT, and attention-based LSTM. 

– Built a sophisticated domain-transfer technique, which was the first in the field, and improved performance over the self-domain training strategy by up to 18% in F1-score. Published results in three conferences: RANLP ’21, and ‘23, and SOCINFO’ 22. 

<p align="center">
  <img src="/docs/images/domtransfer.png" width="60%">
</p>


### Phishing Emails and Psychological Traits

– Despite numerous attempts of phishing email detection, attackers are ever-evolving, often outsmarting the efforts. The project aimed to improve phishing email detection by detecting and utilizing unique psychological traits present in phishing emails.

– Identified and quantified three dominant psychological traits in phishing emails (PPT): A Sense of Urgency, Inducing Fear by Threatening, and Enticement with Desire, using BERT, Sentence-BERT, Character-level-CNN. Also employed GPT-2 for balanced training.

– Achieved a significant performance improvement of 4.54% in F1-score by using the PPT scores in phishing email detection over the SOTA approaches, with Fear being the most prominent PPT. Published result in WBC ‘22, and won the best paper award. 

<p align="center">
  <img src="/docs/images/PPT.png" width="60%">
</p>

### Collusion Scam in YouTube Comments

– The YouTube comment section has long been plagued by scammers, despite efforts to curb their activities, and now, a new type of scam, known as the "Collusion Scam," has emerged as a prominent threat within YouTube comments, particularly in the context of the cryptocurrency market. 

– Performed data collection using YouTube API, and conducted analysis and detection of collusion scams using tf-idf, logistic regression, BERT, and zero-shot LLM training. 

– Built the first dataset for collusion scam, developed deep learning techniques for successful collusion scam detection, and demonstrated the efficacy of leveraging metadata like the timespan, like count, and age of the channel in the detection process. Published one conference paper in RANLP ‘23.

<p align="center">
  <img src="/docs/images/colscam.png" width="70%">
</p>

### Disagreements in Hate Speech Annotation

– Preserving the difference of opinion while labeling derogatory textual content can help us capture many important social phenomena like diversity of viewpoints. In this project, we aim to model subjectivity in the annotation of hate speech. 

– Leveraged four datasets from SemEval-2023 Task 11 to explore and handle disagreement in the annotation process effectively. Performed training by fine-tuning a BERT model and compared a post-aggregation and disagreement-targeted learning approach. 

– Demonstrated the effectiveness of individual annotator modeling and the importance of metadata association. Achieved a top ten spot in terms of cross-entropy score, and published in SemEval ‘23 conference. 

<p align="center">
  <img src="/docs/images/hate.png" width="60%">
</p>

### Emotion Forecasting in Dyadic Conversation

– Emotion forecasting is a novel task, aiming to predict a speaker's future emotional state based on their past and current audiovisual cues. Unlike traditional emotion recognition, it involves predicting emotions in advance and demands innovative problem formulations and modeling techniques.

– Explored two distinct forecasting windows: utterance forecasting and time forecasting. Assessed the impact of incorporating both past and current audiovisual cues in the emotion forecasting process. Compared three deep networks: FCDNN, D-BLSTM, D-LSTM.

– Demonstrated the superiority of dynamic models in the forecasting process by an improvement of 3% on average. Published the work in the prestigious FG ‘19 conference. 

<p align="center">
  <img src="/docs/images/emo.png" width="60%">
</p>


