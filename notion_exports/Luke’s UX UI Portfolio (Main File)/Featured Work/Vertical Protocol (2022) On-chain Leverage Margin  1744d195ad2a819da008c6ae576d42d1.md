# Vertical Protocol (2022) :: On-chain Leverage Margin Trading Tools

Category: DeFi
Date: September 1, 2022
My Role: UX/UI Designer
Company: Alles Labs
Device: Desktop, Mobile
Project Duration: Design to Implement: 2 months
(Project is transferred)
Working Team: 2x UX/UI Designer (Me)
1x UX Intern
3x Front-End Developers
3x Smart Contract Developers
1x Engineering Manager
1x Product Manager

![image.png](Vertical%20Protocol%20(2022)%20On-chain%20Leverage%20Margin%20/image.png)

# Background

**Vertical Protocol** is an on-chain **margin trading and liquidity provision** platform designed for decentralized applications (dApps). It empowers users to trade and invest with leverage directly on-chain. By introducing **sub-accounts** linked to users' Web3 wallets, the protocol enables seamless lending and borrowing to **support diverse trading and investment strategies.**

In addition to **margin trading,** Vertical Protocol allows users to participate in **leveraged liquidity providing**, where they can borrow liquidity pool (LP) tokens to maximize their returns while maintaining full control over their positions. 

This unique combination of features offers users the flexibility and efficiency of centralized finance within a decentralized framework, merging leverage with the core principles of decentralized finance (DeFi).

<aside>

## My Role

- I was involved in this project from the beginning as the lead designer, working alongside the team defining solutions in smart contracts. My role required creating designs that effectively **conveyed complex technical mechanisms in a user-friendly manner.** This involved developing the information architecture, defining constraints for use cases, and creating high-fidelity prototypes.
- We created the fully **organized design system with atomic design principle** that allow scalability and reusable in the most convenient way.
- I frequently **discussed technical feasibilities** with developers and worked to align prioritized **user stories** with the Product Manager.
- I was responsible for **creating tickets for developers**, complete with user stories and acceptance criteria, and conducted **acceptance tests** to ensure that every task was thoroughly completed.
</aside>

# Protocol’s Mechanic

![image.png](Vertical%20Protocol%20(2022)%20On-chain%20Leverage%20Margin%20/image%201.png)

- **Sub-Accounts**: Users can create sub-accounts linked to their Web3 wallet, enabling efficient segregation of funds and strategies without needing multiple wallets.
- **CEX-Like Behavior**: The protocol mimics centralized exchange (CEX) functionalities, allowing users to manage leverage and margin in a familiar environment.
- **Borrowing Power**: The borrowing power is calculated using a mathematical formula that considers the value and risk factors of the user's holding assets. Holdings of **high-credibility assets** (e.g.,BTC, ETH, or stablecoins) contribute more significantly to borrowing power, while **higher-risk assets** provide proportionally less borrowing power. This dynamic approach ensures a balance between user flexibility and system security, enabling users to optimize their positions responsibly while maintaining overall protocol stability.

# Main Features

![image.png](Vertical%20Protocol%20(2022)%20On-chain%20Leverage%20Margin%20/image%202.png)

- **Deposit**: Users can transfer assets from their Web3 wallet to their sub-account, enabling them to utilize these assets for trading or liquidity providing.

![image.png](Vertical%20Protocol%20(2022)%20On-chain%20Leverage%20Margin%20/image%203.png)

- **Withdraw**: Users can withdraw assets from their sub-account back to their wallet. This includes the ability to borrow and withdraw assets they do not currently hold, mimicking short or long positions.

![image.png](Vertical%20Protocol%20(2022)%20On-chain%20Leverage%20Margin%20/image%204.png)

- **Trade**: Users can execute trades with their existing holdings or borrow assets to trade as short/long positions. For instance, a user can use BTC to increase borrowing power and trade USDC by borrowing it, effectively leveraging to acquire more BTC in a long position.

![image.png](Vertical%20Protocol%20(2022)%20On-chain%20Leverage%20Margin%20/image%205.png)

- **Liquidity Providing**: Users can provide liquidity to pools without owning the required assets by borrowing them, as long as their borrowing power supports the transaction. This allows for flexible and leveraged liquidity provision strategies.

# Technical Challenges that cause the major changes for design

The smart contract cannot dynamically **calculate the maximum allowable amount of assets** for trading or borrowing upfront due to the constraints of the math formula. The formula requires users to input an amount first to determine its impact on borrowing power. 

![image.png](Vertical%20Protocol%20(2022)%20On-chain%20Leverage%20Margin%20/image%206.png)

### Before

The original design is intended to use the text input with the slider to signify how much of the asset amount they can borrow to ensure that users would able to do the action without facing any “not enough borrowing power” error case as we can provide the “good constraint” to the users.

![image.png](Vertical%20Protocol%20(2022)%20On-chain%20Leverage%20Margin%20/image%207.png)

### After

Due to mentioned issue, we need to change this design from using the slider to rely on only text input. This means users must manually enter amounts and rely on the feedback from the borrowing power display to verify if their transaction is permitted, which is not preferable.

# Design Solution

To address these challenges, we focused on clarity, feedback, and intuitive design:

1. **Immediate Feedback**: Real-time updates on borrowing power, margin levels, and account status ensure users always understand their position.
2. **Dynamic Visibility of Borrowing Power Status**: Clear indicators show account health, liquidation risks, and active loans, keeping users informed of critical changes.
3. **Color as Signifiers**: Strategic use of colors communicates risks (e.g., green for safe margins, red for liquidation risks) and simplifies decision-making.

# Usability Tests

Initial usability tests showed users could complete tasks, but with notable friction points:

- **Feedback Loops**: Some users found the system's constraints unclear, leading to confusion about borrowing limits.
- **Understanding Risks**: While color signifiers helped, users new to DeFi required additional guidance on margin risks and liquidation thresholds.

Despite these challenges, users expressed high confidence in the protocol’s potential, with iterative improvements planned to further simplify the experience.

# Project transfer

Due to **strategic business reasons**, the entire Vertical Protocol project was transferred to Terra. Unfortunately, the project was suspended several months later, despite its immense potential. We strongly believed in its rich feature set and intuitive user interfaces, which we designed with the **vision of setting new best practices for DeFi protocols.**