# Celatone (2022-2024) :: Smart Contract Developer and Block Explorer

Category: Developer Tools
Date: August 1, 2022
My Role: UX/UI Designer
Company: Alles Labs
Device: Desktop, Mobile
Project Duration: 1st Release: 4 months
Upgrade and Maintain: 2 years
Tools & Methodologies: Acceptance Testing, Contextual Inquiry, Hi-Fidelity Design, Information Architecture, Interactive Prototypes, Usability Testing, User Flow Diagram, User Interview, User Journey Map, User Stories, Wireframes
Working Team: 2x UX/UI Designer (Me)
3x Front-End Developers
2x Back-End Developers
1x Product Manager

<aside>

### **Celatone Case Study Summary**

- **Celatone** is a developer tool designed to simplify smart contract workflows for CosmWasm-supported networks. It allows developers to **deploy contracts, query and execute functions, and explore network data** through an intuitive interface. The project emerged from challenges observed while working on Nebula Protocol in the Terra ecosystem, where developers struggled with **fragmented tools and poor usability.**
- To address these issues, Celatone streamlined processes like uploading and instantiating contracts, querying and executing functions, and monitoring network states. It also included quality-of-life features such as bookmarking contracts and managing upgrades.
- **Usability tests** showed a **94%** task completion rate and **high satisfaction (4.48/5),** validating the product’s simplicity and efficiency. Celatone’s successful launch led to its adoption as a default block explorer for multiple networks, eventually supporting 15 networks. Its success culminated in an acquisition by Initia Labs, solidifying its impact in the blockchain space.
</aside>

![The screenshot of Celatone on Contract Details page, which is the fundamental of the products to allow users deploy, interact, and organize the smart contracts easily.](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/image.png)

### **Background**

**Celatone** is a smart-contract developer tools which allow users to deploy their smart contracts through intuitive user interfaces, interact with deployed contracts to query and execute the contract functions, and also able to explore the network blocks, contracts, validators, transactions, etc.

### Project Links:

**Landing Site:** [Home – Celatone](https://celat.one/)

** Required the Cosmos-network wallet **

### Our Motivation as a Product

After the time at Terra, working on Nebula Protocol. We’ve been **watching how painful our smart contract developers have to suffer** due to the bad developer experience using the available software to deploy and interact with their contracts. 

Instead of adapting to usability problems, we came up with this **side project to tackle these problem** by ourselves with the belief that these complicated works can be simplified through intuitive user interfaces.

<aside>

## My Role

- I involved in this project from scratch as the lead designer with the full-loop of works from user interview, contextual inquiry, create as-is journey and to-be journey, craft the app’s information architecture, wireframing, to hi-fi prototypes.

- We created the fully **organized design system** that allow scalability and reusable in the most convenient way that even a new designer join the team can get used to it in just a week.

- I frequently **discussed technical feasibilities** with developers and worked to align prioritized **user stories** with the Product Manager

- I was responsible for **creating tickets for developers**, complete with user stories and acceptance criteria, and conducted **acceptance tests** to ensure that every task was thoroughly completed.

</aside>

---

# Talk about pain points with our developers

### **How We Researched Within**

We began by conducting comprehensive user research, which actually with our smart contract developers, to understand the pain points of individuals interacting with current available software. This included:

![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/image%201.png)

> We’ve done the user interview and contextual inquiry to define the current user journey, which **involving several apps so it is very fractured flow** for users to do.
> 

- **Interviews** with both technical and non-technical users to identify common challenges.
    
    > “If I want to deploy my smart contracts, there are several features I need to use in the **same manner for every single time**. I wonder if there are any ways to get through these features without switch context between many apps and features.
    > 
    
    > “Development tool should help things to go smoothly. I found them become the things that **devs need to handle** instead.”
    > 
- **Contextual Inquiry** to observe how were their daily lives would be as a smart contract developer. After several inquiries, **we can define the common users journey** that they will need to doing things in sequential. However, there were no such software that allow them to
- **Competitor Analysis** to study existing solutions and identify opportunities for improvement. Through this research, we discovered that most users struggled with non-intuitive user interfaces such as less findability for each use cases, or the information is not visualized in the shape that the users can understand easily what they should do next.

# Pain Points in Depth

Basically to deploy smart contract and check out if it works properly, they need to

<aside>

### 1. Dev Mode: Findability and Discoverability Issue.

Users must download Terra Station to deploy a smart contract to the Terra network. However, the **contracts section remains hidden** until users discover how to enable the **"Developer Mode," which is not easily found. Even the developers aware that the feature exists.** Additionally, there is no mention in the documentation about how to activate this feature.

![enable dev mode.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/enable_dev_mode.png)

</aside>

<aside>

![contract use cases.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/contract_use_cases.png)

### 2. Providing use cases without guiding the steps

For the new users, they might not understand that the need to upload the file first and instantiate the stored file. UI provides only options to **“Upload” or “Instantiate”** which is not self-explanatory enough and does not indicate the steps.

</aside>

<aside>

![finderissue.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/finderissue.png)

### 3. Fractioned and not smoothened experience

See the transaction in the **Terra Finder** (need to open another app) and **find the code ID** in the event section, which require a lot of scrolling and hard to find as the user interface require users to do **conjunctive-based search.**

This issue has been voted the most annoying touchpoint by our users, as **it unnecessarily increases interactions** without any intentional resolution through design.

</aside>

<aside>

![instantiate.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/instantiate.png)

### 4. Non-specific UX writings and improvable input validation

Both new and advanced users find the **lack of guidance** for each input field problematic, as there is insufficient information on how to fill them in correctly. Additionally, there is no validation feedback for the inputs, and the error messages provided are non-specific and unhelpful for correcting mistakes. Furthermore, required fields are not clearly marked as such, adding to the confusion.

</aside>

<aside>

![Query.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/Query.png)

### 5. Non-specific UX writings and improvable input validation

After instantiating the contract, developers typically try to query information from the contract to verify its functionality. However, the UI **does not guide them towards querying or other actions,** resulting in users having to navigate to Terra Finder to copy the address and then paste it on the Contract page to **access the “Query” button.** Additionally, the query functions are not automatically retrieved, forcing users to rely on memory ("**recall**") rather than visual recognition ("**recognize**") to identify available functions.

</aside>

---

### The smart contract developer journey

After gaining sufficient insights from users, we moved to ideation, where we defined the current ("as-is") journey and the desired ("to-be") journey to clearly outline screen flows. 

![Celatone Journey.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/Celatone_Journey.png)

### The sensible sitemap that disclose main use cases

We have carefully designed the sitemap of Celatone to ensure that users can easily locate and engage with key functionalities. 

For example, the **"Deploy Contract"** feature guides users through the process of **uploading a Wasm file and instantiating the contract** from the recently uploaded code. 

Following this, users are seamlessly guided to the **query page and other available actions**, enhancing user experience by making essential tasks accessible and straightforward.

![Celatone Sitempa.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/Celatone_Sitempa.png)

---

## **Understanding Blockchain Mechanics and Delivering Solutions**

To design effectively, we also tried our hardest effort to learn the mechanics of smart contract developers who works with CosmWasm-supported networks must follow a structured process to deploy and manage their contracts, and create the appropriate solutions below:

<aside>

### 1. Make a clear high-level navigation and main use cases are highly visible

The design of **Celatone** focuses on making navigation simple and ensuring key features like **"Deploy Contract"** and **"Query"** are easy to find. These tools are placed prominently in the **Developer Tools** section and as shortcuts on the dashboard for quick access.

For deploying contracts, we offer two flexible options:

1. **Upload a new WASM file**: For adding new code to the network.
2. **Use existing Code IDs**: To reuse code that’s already stored on the network.

These options cover the most common use cases, making the process smooth and efficient for all users.

![1.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/ba46a0f5-6b31-4aa4-89e6-b79bb2482e8b.png)

</aside>

<aside>

![2.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/df5e415e-ec1d-4ad0-aae7-f2407fdbed80.png)

### 2. Provide the stepper and smoothen the experience from upload to instantiate

The **Upload WASM File** interface is designed to be simple and intuitive, guiding users step-by-step through the process with a clear **stepper**. The interface ensures users understand what actions they need to take and what the **next steps are** in the contract deployment process.

After successfully uploading the WASM file, we provide additional options that enhance interaction with the deployed contract such as **Verify Code or Attach JSON Schema** to let them interact with the contract easier in the future uses.

For users who **prefer to move forward quickly,** we offer the option to **skip directly to instantiation** with a single click. This balance between additional functionality and streamlined actions ensures flexibility without adding unnecessary complexity.

</aside>

<aside>

![3.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/cc0f832c-29c9-4532-9ba4-a03b3331a29b.png)

### 3. Clarity for each input and provide good validation notices

The **Instantiate Contract** section is designed to streamline the process by automatically selecting the recently stored code for instantiation. This ensures users can move forward quickly **without needing to manually search for the code,** though they still have the option to switch to another code if needed.

Each input field includes **specific validations**, such as ensuring the correct format for JSON or required fields like the label and admin address. These validations help users identify and fix errors early.

To further enhance reliability, we provide a **network simulation** that checks the input data before the user proceeds. This simulation highlights potential issues, allowing users to **make adjustments to their input as necessary.** 

</aside>

<aside>

### **4.Seamless Post-Instantiation Workflow with Immediate Contract Interaction**

After a contract is successfully instantiated, the design seamlessly navigates users to the **Query** section, enabling them to **interact with the deployed contract immediately.** This eliminates any guesswork and ensures users can verify and use their contract right away.

In the **Query** interface, the system automatically **retrieves and displays the available functions** from the deployed contract. These functions, which the user defined in their code, are clearly listed as suggestions. This allows users to qu**ickly recognize and select the appropriate function**s without needing to reference their code manually.

![4.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/c7edfa04-54ff-42e2-929b-8fe687c1db61.png)

</aside>

---

## **Usability Ensuring and Tests**

The purpose of this usability test was to evaluate the usability of **Celatone** features which are **Deploy new contracts, Query, Execute, and Save new contract**

- A total of **5** participants were recruited for the study, which **3** of the participants are our smart contract developer (who have not polluted with the software development), and the other 2 developers are working for other companies.
    
    ![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/image%202.png)
    

- Task completion rates:
    - Overall, the participants were able to complete most tasks successfully.
    - The average task completion rate was **94%**.
    - With **46** Subtasks
        - ✅ **24** subtasks are completed smoothly
        - ⚠️ **9** subtasks are completed with frictions
        - 🙈 **10** subtasks are ignored without any issues or complete with alternative ways
- Error rates:
    - ❌ **3** out of the 46 subtasks were not completed due to misunderstandings between the participants and the tasks. The average error rate was **6%**.
- Satisfaction:
    - Overall, the participants reported high levels of satisfaction with the product, with an average satisfaction rating of **4.48** on a scale of 1 to 5. (4.75 / 4.375 / 4.3 / 4.5)
- Users Key Behavior:
    - It was observed that during the usability testing, participants tended to **devote minimal time to reading the tasks and instead proceeded to take action immediately.** This resulted in some participants **ignoring or failing to fully comprehend the provided tasks** or primed scenarios. Despite this, the test results were highly informative and verified several hypotheses.

---

# Product Development

![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/image%203.png)

### Pre-launch, Launch, and Post-Launch

After gaining key insights from usability tests, we made minor adjustments to Celatone before launching its first version, which supported four networks. The launch was **highly successful,** with users commending the interface for its **accessibility and clarity.**

Several months post-launch, we regularly added new features and pages to Celatone. Thanks to its all-in-one nature, it became the default block explorer for several supported networks. We attracted numerous clients and expanded Celatone to support a total of **15** networks across various types of virtual machines (VMs).

### Receptions on Social Media

![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/image%204.png)

![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/image%205.png)

![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/image%206.png)

![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/image%207.png)

---

# Contract Interactions made even easier

After launched, we strive for the improvement of existing features. Before the introduction of JSON Schema in Celatone, querying smart contracts through JSON required users to engage in considerable **guesswork regarding each function's parameter types and values.** This manual interpretation process was error-prone and inefficient, leading to a steep learning curve and potential for mistakes in contract interaction. It discouraged broader adoption and increased the risk of incorrect transactions, highlighting the need for clearer, more structured input guidance to enhance user experience and security.

<aside>

![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/b2d9b8db-8b83-4500-947b-cb6daef55355.png)

### **Code Verification**

Code verification in Celatone enhances the transparency and credibility of smart contracts by allowing users to view and audit the linked source code of deployed contracts. This visibility confirms that the **contract operates as intended,** building trust and security within the community.

</aside>

<aside>

![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/99ee7f1d-aff0-4329-98e7-496fede0db05.png)

### **JSON Schema Integration**

The JSON Schema feature simplifies interactions with smart contracts by providing a user-friendly interface that outlines the expected input types for contract functions. This reduces guesswork and error, making it easier for users to interact accurately with contracts.

</aside>

![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/6c35fe42-8105-4a9e-af59-610b78d1dfcd.png)

### Easier, Verifiable, and Trustworthy,

The ultimate goal of integrating features like **code verification and JSON Schema** in Celatone is to make blockchain and smart contract technologies more **accessible, reliable, and user-friendly.** By reducing complexity and increasing transparency, these features help lower the barrier to entry for new users and developers in the blockchain space. 

> Each function within the interface is **labeled and includes clear fields for parameter inputs,** specifying both the type and the label for each parameter. This structured approach helps users **understand exactly what information they need to provide** for each query. For instance, in the displayed function `get_owner`, the user is required to input a `name` with a string type.
> 

> Furthermore, the **results from each query are also structured clearly,** displaying outputs with labels and types. This ensures that users not only input the correct data but also **interpret the output easily**. This interface design significantly enhances user experience by making contract interactions more intuitive and efficient.
> 

The code verification feature is also ensure a higher standard of **security and credibility**, as well-documented and **verifiable code is less likely to contain vulnerabilities or malicious elements.** Together, these features foster a safer and more efficient environment for all network participants.

---

# Fully-developed as Blockchain Explorer

After launching the comprehensive feature set for smart contract developers, we received **positive feedback about our well-structured information and effective visualizations.** Motivated by this response, we decided to prioritize the development of features that **cater to more general use cases from typical blockchain user**s. Below are some of the notable features we've introduced:

<aside>

🔗 You can click on the image or header text to see the example of each page without requiring of any Web3 wallets.

</aside>

![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/95a3f3fd-5697-46a4-80ea-a3fbb2811fb8.png)

### [Proposal Details](https://dev.celat.one/osmosis-1/proposals)

Provides clear and detailed information about each proposal, including its purpose, current status, and real-time vote results, ensuring users can track its progress effectively.

![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/45c59231-9a82-4078-a8db-b4d3d5569eed.png)

### [Validator Details](https://dev.celat.one/osmosis-1/validators)

Enables users to monitor network validator performance, identify potential malicious activities, and make informed decisions when delegating assets to earn rewards.

![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/4cba74ed-e6b8-4740-82ad-5c133259b0d4.png)

### [Osmosis Pool Details](https://dev.celat.one/osmosis-1/pools/1)

Offers specific visualizations for Osmosis liquidity pools, displaying pool details, related transactions, and use cases for delegating positions to validators.

![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/image%208.png)

### [NFT Details](https://dev.celat.one/initiation-2/nft-collections)

Displays comprehensive information about NFT collections, including recent activities such as mutations, transfers, and burns, to keep users updated on asset changes.

---

![image.png](Celatone%20(2022-2024)%20Smart%20Contract%20Developer%20and%20/image%209.png)

# Product Successfulness leads to the acquisition

With our support for the MOVE-based Cosmos network, we captured the **interest of Initia Labs—a blockchain company** aiming to launch an ecosystem that allows developers to create new networks with various VM types and integrate them with Optimistic rollups. **We developed InitiaScan,** enhancing it with additional features to ensure a seamless developer experience. This **led to the acquisition of our product and Alles Labs,** with our entire team joining the initiative.

### **What We Learned**

Here are some key takeaways from our experience with Celatone that have really shaped how we approach creating products:

<aside>

**📖 Back to Basics:** 

We focused on the **Double Diamond Design Principle,** which is all about having a clear method to tackle the specific problems and come up with converged ideas. This helped us stay on track and be more effective in our design process.

</aside>

<aside>

**💭 New use cases, same old problem**

We discovered that new technologies like blockchain don't necessarily have to be overly complex. By taking the time to **understand their nature and mapping** them to familiar problems and solutions, we found that they can be effectively integrated and work well.

</aside>

<aside>

**⛏️ Usability as a Feature**

We learned that making our product easy to use is as crucial as any other feature. **Good usability can make our product stand out** and attract more users, all without the need for overly complex designs.

</aside>

<aside>

**🧪 The Importance of Usability Tests** 

Nothing beats actual usability testing with real users. Watching how people use our product teaches us what works well and what needs improvement, ensuring we deliver a product that people can use easily and happily.

</aside>

These lessons not only helped us improve Celatone but also gave us valuable insights for future projects, making sure we keep getting better at what we do.