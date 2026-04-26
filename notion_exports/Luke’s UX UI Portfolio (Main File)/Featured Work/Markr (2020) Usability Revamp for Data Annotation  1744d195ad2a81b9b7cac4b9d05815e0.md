# Markr (2020): Usability Revamp for Data Annotation Tool

Category: Data Annotation Tool
Date: December 1, 2020
My Role: UX Design
Company: Backyard
Device: Desktop
Project Duration: 2 Months
Tools & Methodologies: Activity-Centered Design, Usability Testing, Wireframes
Working Team: 1x UX Designer (Me)
1x Product Owner (acting)
2x Front-End Developers
1x Back-End Developer
1x Data Scientist
1x User Tester
1x Visual Designer

![Picture10.png](Markr%20(2020)%20Usability%20Revamp%20for%20Data%20Annotation%20/Picture10.png)

# Problem Statement

> **Data Labelling is not an Engineering Challenge, But It Requires Effort and Solid Output Structure**
> 

Text data are the food of machine learning training. But labeling them manually without any tool is difficult, tedious, and prone to error. How might we ease off this unwanted burden of the laborer?

# Proposed Solution

We created our product called “Markr,” which marks words or sentences in the text through many tags that users can build independently.

<aside>

### My Role

- I got involved in this product after it had been developed for months**.** Its interfaces were messed up. I was assigned **to revamp them.**
- This project was my first time performing as **a supervisor for a visual designer**. This opportunity became a great challenge, as I always do my best to improve my leadership.
- I worked on UX processes and **collaborated with the visual designer** to create hi-fi prototypes that comply with my wireframes and interaction ideas.
- I also **supervised** the other member to be an acting **Product Owner.**
- I needed to talk a lot about technical feasibilities with the data scientist and developers.
</aside>

# Research Phase

### 🗣️ User Interview

I conducted interviews regularly with the labeler to learn how they think and annotate data through spreadsheet tools such as Google Sheet or Excel.
I tried to imitate their workflow and micro-interactions to user flow and wireframes.

### 🔬 Data Scientist Interview

Data scientist knows well how **preferable and comfortable** the result should look like for them to transform the outcome as **inputs** for their machine learning model.

I learned a lot about how the machine learning model works and how the data scientist utilizes the data.

### Key Insights

**🧠 Recalling issues**

"Sometimes, when we are labeling the data in the spreadsheet, we have 30+ tags to label, and many times we forget which tags we have. We would like to see all tags available all the time.“

**🔠 Imperfect Word Tokenization**

“We have our word tokenization model for tokenizing text into words. But the Thai language is tricky. Many new terms and rearranged sentences are used by anyone. We don't expect the model to cut those sentences into words correctly, but we need a better way to tokenize them."

---

# **Identify and Decompose User Problems and Use Cases**

![image.png](Markr%20(2020)%20Usability%20Revamp%20for%20Data%20Annotation%20/image.png)

**This tool was developed a while ago** before I got involved, and we had **only two months** to finish this product, so we needed to rush. I observed their implementation and learned quickly what they thought and **rapidly drew user flows, IA, and wireframes** to satisfy their needs.

These processes took only a week to finalize. Every deliverable was used to **create a feature list** for the Scrum process and visual designer to **create hi-fi prototypes**.

---

# The Old Design

![Picture1.png](Markr%20(2020)%20Usability%20Revamp%20for%20Data%20Annotation%20/Picture1.png)

## **Labeling Method Problems**

- The design’s layout was not **promoting a labeling** area. This hindered the user from skimming through the texts.
- The design tried to bring all the tags to the user’s perception. This became a backlash instead, as human vision can pay **attention to only one or two tags** at a time.
- The design **color palettes are not helpful** for users to distinguish between tags, which became problematic when users needed to find their tags.

---

# Key Design Principles

After studying the nature of the product, users, and expected results. I found that Markr is the software that relatable with the discipline of two design concepts, which are activity oriented design, and design for extreme users.

## **Activity-Centered Design (ACD)**

Markr is designed around the principles of **Activity-Centered Design (ACD)** because it focuses on supporting a specific task—labeling text data—rather than addressing broad or holistic user needs. The tool prioritizes **speed, accuracy, and efficiency** of text annotation to produce high-quality labeled data for machine learning models.

It emphasizes the **activity of labeling itself**, simplifying workflows and removing unnecessary friction to achieve optimal results. By centering on the labeling process, Markr enables users to focus exclusively on their goal: producing precise, structured data efficiently.

<aside>

**💯T ask Optimization**

Every interaction, from tagging words to reviewing the labeled text, is streamlined for maximum speed and accuracy.

</aside>

<aside>

**💁‍♂️ Workflow Support**

The design mirrors existing user behaviors from spreadsheet tools, such as shortcuts and bulk actions, to reduce cognitive load.

</aside>

<aside>

**📃 Results-Oriented Approach**

The interface is tailored for generating clean, actionable output for data scientists, prioritizing outcome over user satisfaction beyond the task.

</aside>

## Design Support for Extreme Users

Markr’s design balances the needs of two extreme user groups—**novice users** unfamiliar with advanced tools and **expert users** who rely on efficiency and hotkeys for rapid execution.

![Picture9.png](Markr%20(2020)%20Usability%20Revamp%20for%20Data%20Annotation%20/Picture9.png)

Ref: [Extreme users - Wikipedia](https://en.wikipedia.org/wiki/Extreme_users)

### **👶 Novice Users**:

- **Guided Interactions**: Clear visual indicators and simple workflows guide novice users through the labeling process without requiring prior expertise.
- **Error Prevention**: Features like undo, tooltips, and inline help systems reduce mistakes and build confidence.

### **🧓 Advanced Users**:

- **Hotkey Integration**: Power users can take full advantage of **hotkeys and shortcuts** to minimize reliance on the interface, enabling faster labeling with minimal effort.
- **Customizable Workflows**: Options for personalizing tag layouts and tokenization methods allow advanced users to optimize the tool for their specific needs.
- **Efficiency-Oriented Features**: Bulk labeling let experienced users handle large datasets seamlessly.

---

# Proposing New Design

## 4 Main Actions

We provide 4 main actions for doing the labelling

<aside>

![Picture2.png](Markr%20(2020)%20Usability%20Revamp%20for%20Data%20Annotation%20/Picture2.png)

**Tag**
Users can label selected tags to words. Ex. User label “Positive Sentiment” to “delicious.”

</aside>

<aside>

![Picture3.png](Markr%20(2020)%20Usability%20Revamp%20for%20Data%20Annotation%20/Picture3.png)

**Undo Tag**
Users undo their labeling.

</aside>

<aside>

![Picture4.png](Markr%20(2020)%20Usability%20Revamp%20for%20Data%20Annotation%20/Picture4.png)

**Split**

Users split a sentence or a phrase to separate words

</aside>

<aside>

![Picture5.png](Markr%20(2020)%20Usability%20Revamp%20for%20Data%20Annotation%20/Picture5.png)

**Merge**

Users merge some words into a phrase or sentence.

</aside>

### Revamped Ideas

![Picture6.png](Markr%20(2020)%20Usability%20Revamp%20for%20Data%20Annotation%20/Picture6.png)

## Tag Selectors

**Problem 1: Too many Options**

- The old design tried to provide every tag to the user. This came with a good intention but far from being a solution **as it required a lot of effort to fixate to every button**.
- I revamped this into a left side **“Tagbox”** for the users, which show a **selected tag** at the top and put all tags in the **scrollable list** to provide enough tags option for user’s vision.

**Problem 2: Indistinguishable Tags**

- The old design used border colors to signify to users its difference. But it led instead to a **user frustration**, as they couldn't remember and distinguish such bright colors, which **decreased users’ readability.**
- I revamped a tag button with the color bar at the left. Only the selected tag was filled

**Problem 3: Difficult to use hotkeys**

- The old design tried to provide a hotkey for users by signifying it in front of the tag name**. This hindered users from finding their tags** in need.
- I **moved the hotkey to the right side** instead and kept it straight in a **vertical line**. Users now sweep their eyes over the hotkeys with only vertical eye fixation changes.
- The old design used alphabets as hotkeys when it ran out of 1-digit numbers. This is difficult to use as **not every user can remember** where the **alphabet button is located** on the keyboard.
- I changed them **to 2-digit numbers** and let the user press two buttons within the 0.5-second interval. (press “1” and “2” within 0.5 seconds for “12”)
- This proved to be more comfortable as users were familiar with num pads, and the 0.5-second interval was long enough to let them get through it.

![Picture7.png](Markr%20(2020)%20Usability%20Revamp%20for%20Data%20Annotation%20/Picture7.png)

---

# Result & Impact

![Picture8.png](Markr%20(2020)%20Usability%20Revamp%20for%20Data%20Annotation%20/Picture8.png)

- The new design resolved most of the old design problems, both for **first-time users and advanced users.**
- First-time users could quickly understand the interface—They only need to spend a **short amount of time learning** what they need to do after being introduced to the software. The interface was **self-explanatory enough** for them to know what to do.
- Advanced users could do their works **more efficiently after we offered them more accessible hotkeys**. We did not conduct any usability tests as it needed to deliver fast. But we received very positive feedback from them.

---

# Key Takeaways

<aside>

**💭 There Are UX Designers For a Reason.**

- When I joined the project, the tool was a mess, and the team was frustrated and under pressure with an approaching deadline. This situation highlighted the **consequences of skipping UX research and proper design processes.**
- Adding to the challenge was the stigma that designers are only focused on making things visually appealing. **This project proved otherwise**—by prioritizing user workflows and needs, I transformed Markr into a tool that wasn’t just better looking but **highly efficient and effective.** It’s a clear example of how **thoughtful design can solve real problems** and deliver impactful results.
</aside>

<aside>

**😊 A good process not only ensures successful outcomes but also fosters team engagement.**

- The software development process isn’t just about achieving results; it’s also about keeping the team **engaged and motivated.** Initially, the tool was developed using an unstructured approach, which negatively impacted both the outcome and team morale, leading to frustration and despair.
- Implementing the **Scrum** process broke tasks into manageable, measurable pieces, resulting in better execution and **fostering a more trusting and collaborative environment** among team members.
</aside>