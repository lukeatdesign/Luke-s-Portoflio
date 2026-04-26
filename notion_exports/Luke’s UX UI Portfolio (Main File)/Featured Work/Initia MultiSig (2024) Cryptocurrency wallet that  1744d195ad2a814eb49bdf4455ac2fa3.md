# Initia MultiSig (2024) :: Cryptocurrency wallet that requires two or more signatures to confirm

Category: Multiple Signature Contract
Date: October 1, 2024
My Role: UX/UI Designer
Company: Initia Labs
Device: Desktop, Mobile
Project Duration: 2 months
Tools & Methodologies: Acceptance Testing, Guerrilla Test, Hi-Fidelity Design, Information Architecture, Interactive Prototypes, User Flow Diagram, User Interview, User Journey Map, User Stories
Working Team: 2x UX/UI Designer (Me)
2x Front-End Developers
1x Back-End Developers
1x Product Manager

![image.png](Initia%20MultiSig%20(2024)%20Cryptocurrency%20wallet%20that%20/image.png)

# **Background**

**Initia Multisig i**s designed as a core tool for Web3 users, allowing them to create accounts with **multiple owners, similar to juristic or collaborative accounts.**

As Initia prepared for its mainnet launch, providing a multisig option became essential to meet the expectations of users familiar with similar solutions on other blockchain networks.

By supporting shared account management, Initia Multisig enables secure, decentralized decision-making for organizations, DAOs, or collaborative projects.

---

<aside>

## My Role

- I was involved in the Initia Multisig project from the start, leading the **initial phases** to align with stakeholder expectations and define key requirements. During the first few weeks, I worked closely with stakeholders and the other designer to shape the project direction and **set up the foundational design framework**.
- After securing approval, I **transitioned the project ownership to a new designer**, stepping back into a **mentorship role.** From there, I provided guidance and support, allowing the new designer to take **full charge and grow through the process.**
</aside>

# Only a week for the first iteration

![image.png](Initia%20MultiSig%20(2024)%20Cryptocurrency%20wallet%20that%20/image%201.png)

This project originated from the core team, starting with smart contract development. Due to stakeholder requirements, we needed to create functional and user-friendly mockups within **just one week.**

We **quickly developed the initial set of mockups without compromising quality or standards**. By incorporating all UI elements into the design system and clearly defining the states of each flow, we maintained a high level of quality. 

Although the UI design was not overly complex, we are proud to have delivered such **high-quality work in a very short time.**

# Common User Journey

![image.png](Initia%20MultiSig%20(2024)%20Cryptocurrency%20wallet%20that%20/image%202.png)

- **Create and Assign Accounts**: Users can create a multisig account, assign members, and set a voting threshold. This ensures that only approved decisions are executed, based on the specified number of votes required.
    
    During setup, they assign members who will participate in the account’s decision-making process and define a **voting threshold**—the minimum number of approvals required for a proposal to pass. For example, in a five-member account, the voting threshold might be set to three approvals. This ensures that no single member can act unilaterally, adding a layer of security and collaborative control.
    

![image.png](Initia%20MultiSig%20(2024)%20Cryptocurrency%20wallet%20that%20/image%203.png)

- **Propose Transactions**: Once the account is established, any member can create and submit proposals for actions the group needs to approve. For the first release of the product, these proposals may include:
    - **Sending Assets**: Transferring funds to other wallets or accounts.
    - **Executing MOVE Custom Messages**: Submitting custom instructions related to the MOVE module.
    - **Interacting by Execute function with Modules**: Performing specific actions within modules, such as invoking functions or updating module states. This flexibility allows the multisig account to handle a wide range of operations while keeping all members involved in the decision-making process.

![image.png](Initia%20MultiSig%20(2024)%20Cryptocurrency%20wallet%20that%20/image%204.png)

- **Cast Votes**: When a proposal is submitted, all members of the multisig account are notified to review it. Members can then cast their votes directly within the interface. The proposal page provides a detailed breakdown of the proposed action, the required voting threshold, and the current voting status. This transparency ensures that all members are fully informed and can make decisions with confidence.

![image.png](Initia%20MultiSig%20(2024)%20Cryptocurrency%20wallet%20that%20/image%205.png)

- **Execute Approved Proposals**: Once a proposal receives the required number of votes, any member of the multisig account can execute the transaction securely and efficiently. This ensures flexibility within the group, as members can take the initiative to finalize approved actions.
- If the proposal fails to reach the voting threshold within a specified period, it expires, preserving the integrity and security of the multisig account.

---

# **Design Decisions**

![image.png](Initia%20MultiSig%20(2024)%20Cryptocurrency%20wallet%20that%20/image%206.png)

Multisig accounts are a widely understood concept with clear mechanisms. Our design approach focused on:

- **Clarity of Information**: Visuals were used to convey the mechanics and processes clearly, ensuring users can understand the system at a glance, whether they are advanced or entirely new to Web3 multisig solutions.
- **Streamlined Interactions**: We avoided complex or flashy designs, prioritizing straightforward interactions that align with user expectations and ensure a smooth experience.
- **Accessibility for All Users**: By adhering to familiar patterns from other multisig solutions, the design bridges the gap for users transitioning from other networks while still being approachable for newcomers.

---