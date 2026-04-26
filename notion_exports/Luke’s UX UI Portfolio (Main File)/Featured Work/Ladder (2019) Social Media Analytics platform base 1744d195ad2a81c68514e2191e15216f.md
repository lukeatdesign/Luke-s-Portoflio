# Ladder (2019) :: Social Media Analytics platform based on language model

Category: Data Analytics Platform
Date: March 1, 2019
My Role: UX/UI Designer
Company: Backyard
Device: Desktop
Project Duration: 2 years & 11 months
Tools & Methodologies: Activity-Centered Design, Contextual Inquiry, Heuristic Evaluation, Information Architecture, Interactive Prototypes, Sketch, Usability Testing, User Interview, Wireframes
Working Team: 1x UX/UI Designer (Me)
1x Product Owner
3x Back-End Developers
1x Front-End Developer
1x Data Scientist
4x Data Analysts (Users)

![Picture1.png](Ladder%20(2019)%20Social%20Media%20Analytics%20platform%20base/Picture1.png)

# Project Overview

## Problem Statement

> **“People’s voices are louder and bigger than ever. How could we earn some insights from this big data?”**
> 

We are in the age of social media, in which anyone's voices matter to any brands or organizations. These media often generate massive information that exceeds the capacity of human to analyze. Then how might we **simplify these data into meaningful insights**?

## Proposed Solution

We created a product called Ladder, a product which is able to parse the data from global social media and new portals, use them as input for the NLP processing model for **sentiment result and relevant analysis**, then **visualized the information through charts**.

<aside>

## My Role

- I worked on both **UX and UI processes**, creating information architecture, user flow, wireframe, visual design. Both on data visualization and back-office settings.
- I need to talk a lot about technical feasibilities with the data scientist and developers to let them apply their magic to implement the project.
</aside>

---

# Design Process

## Discovering Problems

### 🗣️ User Interview

We have data analysts who use Ladder to create social analytics report and deliver them to the clients.
I conducted interviews regularly with them so we could learn more about their needs to use.

### 🧑‍💼 Stakeholder Interview

The company initiated this product to be their flagship. Their aim is to **fulfill data analyst’s needs and scale this product** to other users such as marketers, data analysts, and social media managers, so that they can gain social insights on their own.

### Key Insights

<aside>

**Lots of effort required to use**

“We need to fill in 100+ ‘relevant keywords’ to the back-office system to find relevant documents in the collected data. The product was implemented without any UX concerns, so it provided bad learnability and required a lot of effort from users.”

</aside>

<aside>

**Meaningless chart**

“The old design was developed without any data visualization knowledge; the charts available in the dashboard were not meaningful.”

</aside>

<aside>

**Unrecognizable navigation**

“I spent a lot of time figuring out how to navigate through features and trying to recall the functions of the software, when in fact the system should be able to offer the recognition needed in the first place.”

</aside>

## **Identify and decompose user problems**

![Picture2.png](Ladder%20(2019)%20Social%20Media%20Analytics%20platform%20base/Picture2.png)

I was assigned as a **UX/UI designer** for this product after it had been being developed for around 2 years without proper UX considerations. We went through **the heuristic evaluation** of the software and listed all the issues in the spreadsheet.

Working with the Product Owner, we **identified and decomposed those problems to solutions**, creating the user story and making it a task for developers.

## Ideation

### **Design Sprint: UX/UI Designer as a member of Scrum team**

![image.png](Ladder%20(2019)%20Social%20Media%20Analytics%20platform%20base/image.png)

I worked in a scrum team under agile software development. Design sprint **started ahead of the development sprint by a sprint**. This is my daily routine as a UX/UI designer during a sprint.

### **Information Architecture Changes**

![Picture3.jpg](Ladder%20(2019)%20Social%20Media%20Analytics%20platform%20base/Picture3.jpg)

Since this product had been developed through the **Scrum process**, we never had a completely solid information architecture. There were a lot of changes all the time, and we needed to embrace them all.

I usually updated my diagram to make it **comply with new user stories and roadmaps.**

### **Design Studio to let everyone join the design process**

![Picture4.png](Ladder%20(2019)%20Social%20Media%20Analytics%20platform%20base/Picture4.png)

Sometimes the user story wasn’t well decomposed, and I could not figure out what they wanted.

I conducted a **‘Design Studio’** session to let them propose their ideas with roughly sketched designs and explain their thoughts about the solution. This session was beneficial for ideation and **led to the final design.**

### Define new user flow

![User flow for “Keyword Setting” in back-office mode](Ladder%20(2019)%20Social%20Media%20Analytics%20platform%20base/Picture5.png)

User flow for “Keyword Setting” in back-office mode

Since there is no such thing as the best design practices for social analytic tools, every feature has its unique user flows. After empathizing with users and the PO, we tried to **create the diagrams** to ensure our solid mental model before getting to the wireframing.

## Prototyping

### **Lo-Fi Wireframes for Dissection**

![Picture6.png](Ladder%20(2019)%20Social%20Media%20Analytics%20platform%20base/Picture6.png)

I usually spent one or two days creating wireframes and discussing all the screen interactions through the **UX Dissect session** with PO and developers to make sure that every element was feasible. Sometimes they needed to spike some information to learn more if it can be implemented.

### **Hi-Fi Interactive Prototype**

![Picture7.png](Ladder%20(2019)%20Social%20Media%20Analytics%20platform%20base/Picture7.png)

Fully-interactive high-fidelity prototypes brought the entire team to a mutual understanding of how the feature would work.

We conducted **usability tests** through this prototype to determine if users’ behavior would comply with our imagined user flows. Then, developers would have their solid **exit criteria** on the front-ends

# Final Design Showcase

---

![Picture8.png](Ladder%20(2019)%20Social%20Media%20Analytics%20platform%20base/Picture8.png)

## Keyword Settings

### Problems

- Users needed to fill in relevant keywords they would like to search in the entire database.
- There were many irrelevant documents found from search keywords, as many words have many meanings.
- This feature requires **a lot of user workload** to **routinely** put all the keywords into the system.

### Solutions

- We distinguished this feature into three sections: ‘search keywords’, ‘included keywords’ and ‘excluded keywords’ to filter only relevant documents.
- I used **Keystroke Level Modelling (KLM)** as a reference since it played a strong role in this feature in bringing out the best experience for users.

---

## Dashboard Design

### Problems

- Users needed to visualize their relevant issues on the dashboard to gain social analytic insights such as top mentioned keywords, top channels, voices in certain period, its sentiment results, etc.

### Solutions

- We created a dashboard that complies with the **information foraging** theory, so that users can see insights’ overview (keywords, channels, and sentiment) before focusing on more in-depth visualizations.
- **Dynamic filter** was available for users to drill-down and narrow down their interests, filtering them into specific social media or keywords.

![Picture9.png](Ladder%20(2019)%20Social%20Media%20Analytics%20platform%20base/Picture9.png)

---

![Picture10.png](Ladder%20(2019)%20Social%20Media%20Analytics%20platform%20base/Picture10.png)

## **View Posts Design**

### Problems

- User would like to see the **most relevant posts** from their keyword and channel settings.
- Posts from different social media had their **unique characteristics** such as Facebook likes, comments and shares, or Twitter tweets, retweets, quote tweets.

### Solutions

- I designed the view post section using the same interface idea as the **social media feed** since users were already familiar with those patterns
- Different social media posts required their **unique design**, thus I relied on the consistency of the interface yet made each one distinguishable through social media badges and icon.
- Sentiment chips are essential for users. I put it on the top right area with filled bright color.

---

# Key Takeaways

**⌚ Iterations Over Time For 3 Years**

Since joining this company, I have been dedicated to this product. The Product Owner and I spent considerable time refining the core concept of the product, facing numerous challenges over the years and working under tight deadlines.

Throughout this process, we engaged in multiple design iterations, continually evolving and improving our approach until we achieved a feasible and user-friendly product.

**🤯 Recall and Recognize; Familiarity takes time**

We delivered new interfaces for the users, but they struggled with them because they were **already familiar with the old interfaces by recalling their daily patterns**. This required some amount of time for them to recognize new designs on the first uses to prove better usability.

There was a time that a new data analyst joined our team. It was an excellent opportunity for us to conduct a usability test with old and new interfaces. The result was fruitful as the **accomplished rate is 30% higher while the time used rate were reduced by 40%**

**❌ We Cannot Assume the User Behavior on Our Own.**

I was often put into a very tight deadline and had to deliver hi-fi prototypes without any iteration process. I must figure out the design on my own, which led to a lot of **design and technical debts.**

I just hoped that many users would recognize my design with mutual understandings, but they generally didn’t. This became a very solid proof that we **cannot design and test on our own**, and the most crucial fact: **good design needs time.**

---

# **📉 High, Low and The Exit**

![Picture12.png](Ladder%20(2019)%20Social%20Media%20Analytics%20platform%20base/Picture12.png)

Social Analytics sounds cool at first and attracts many clients on the early days along with the Big Data and AI hypes. But this product is already become **inactive after 3 years of its release.**

This product taught me a lot of **lessons about market validations.** We underestimated the research phase and didn't prioritize the design phase, while focusing more on the time used for implementation. Lesson learned, research time could reduce implementation cost a lot, maybe 100 times, by finding the **product-market fit.**