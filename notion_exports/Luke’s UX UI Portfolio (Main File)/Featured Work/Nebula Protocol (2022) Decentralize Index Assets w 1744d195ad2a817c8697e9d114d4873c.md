# Nebula Protocol (2022) :: Decentralize Index Assets with Rebalance Mechanics

Category: DeFi
Date: March 1, 2022
My Role: UX/UI Designer
Company: Alles Labs
Device: Desktop, Mobile
Project Duration: Design & Development: 3 months
** Project is not released due to Terra’s LUNA and UST mechanic failure.
Tools & Methodologies: Figma, Guerrilla Test, Hi-Fidelity Design, Information Architecture, Interactive Prototypes
Working Team: 1x UX/UI Designer (Me)
1x Front-End Developer
3x Smart Contract Developer
1x Product Manager

![image.png](Nebula%20Protocol%20(2022)%20Decentralize%20Index%20Assets%20w/image.png)

# Problem Statement

> Many users want to hold cryptocurrencies but avoid excessive risk and complexity. Nebula Protocol’s **automatically rebalancing indexed assets** offer a simplified, balanced solution, providing peace of mind by aligning portfolios with manageable risk/reward profiles.
> 

# Background

**Nebula Protocol** is a decentralized finance (DeFi) application that introduces indexed assets managed algorithmically through a concept called **clusters**. These clusters are collections of cryptocurrencies or on-chain assets bundled into a **single investable unit, providing users with simplified exposure to specific market trends or investment strategies**. 

By incorporating dynamic rebalancing mechanics, Nebula Protocol ensures that each cluster remains aligned with its predefined objectives, reducing manual oversight and offering a novel approach to decentralized asset management.

# My Motivation

I decided to join **Alles Labs to work on Nebula Protocol** because it addresses a critical need for individual investors who lack the time or resources to deeply analyze each cryptocurrency before investing. Nebula Protocol operates similarly to **traditional indexed assets,** providing a simple and efficient way for users to invest in diversified baskets of assets that automatically rebalance. 

This helps **reduce value fluctuations,** making it a practical solution for users who want exposure to cryptocurrencies but find the market's volatility overwhelming. By offering this balanced and user-friendly approach, Nebula Protocol solves a significant pain point for many potential investors.

<aside>

## My Role

- I joined this project by inheriting the original design from other designers. I noticed that many design decisions were focused solely on functionality, which **did not aid user comprehension and often led to confusion.**
- We created the fully **organized design system** that allow scalability and reusable in the most convenient way that even a new designer join the team can get used to it in just a week.
- I frequently **discussed technical feasibilities** with developers and worked to align prioritized **user stories** with the Product Manager
</aside>

# **Key Features**

1. **Clusters**:
    
    Clusters are **algorithmically managed baskets of assets.** Each cluster follows a predefined set of rules, such as tracking a specific index or thematic trend. For example, a “DeFi Blue-Chip Cluster” might include AAVE, UNI, COMP, and 1INCH tokens.
    
    - Automatically rebalances to maintain its intended composition.
    - Reduces the complexity of managing individual assets for users.
        
        ![image.png](Nebula%20Protocol%20(2022)%20Decentralize%20Index%20Assets%20w/image%201.png)
        
2. **Get and Redeem Mechanics**:
    - We designed a simplified system where users can easily "Get" or "Redeem" cluster tokens without needing to understand the underlying methods (Mint/Buy or Burn/Redeem).
    - Users simply input the asset they wish to trade for the cluster, and the system automatically selects the most favorable option based on market conditions.
    - For those who prefer manual control, the protocol also allows users to choose their preferred method (e.g., Mint or Buy, Burn or Redeem).
        
        ![The UI should select the better option for user automatically, calcluated by more amount of cluster token.](Nebula%20Protocol%20(2022)%20Decentralize%20Index%20Assets%20w/image%202.png)
        
        The UI should select the better option for user automatically, calcluated by more amount of cluster token.
        
3. **Dynamic Rebalancing**:
    - Clusters automatically adjust weights or replace assets based on performance or predefined metrics, such as price or market cap.
    - To maintain alignment with target allocations, users can **burn and mint cluster tokens**, helping the cluster and its underlying assets move closer to the desired composition.
    - Users who rebalance in a way that benefits the cluster are rewarded with **NEB tokens**, incentivizing proper management. Conversely, users whose actions negatively impact the cluster’s balance may receive unfavorable asset allocations, discouraging detrimental behavior.
        
        ![image.png](Nebula%20Protocol%20(2022)%20Decentralize%20Index%20Assets%20w/image%203.png)
        
4. **Room for Arbitrage**:
    - The difference between a cluster's market price (on AMMs) and its intrinsic value (for minting or burning) creates opportunities for arbitrage. This mechanism incentivizes traders to balance prices across the market and the protocol, ensuring efficiency and stability.
        
        ![image.png](Nebula%20Protocol%20(2022)%20Decentralize%20Index%20Assets%20w/image%204.png)
        

# Design Considerations

![image.png](Nebula%20Protocol%20(2022)%20Decentralize%20Index%20Assets%20w/image%205.png)

**Good microcopy**

Due to the DeFi nature, there are many industry-related words that are uncommon for new users. We try to find out the way to convey the information about each action through simple wording but not trying to oversimplify them.

![image.png](Nebula%20Protocol%20(2022)%20Decentralize%20Index%20Assets%20w/image%206.png)

**Proactive help**

As the product has many specific use cases that came up due to the rebalancing mechanics, the proactive helps like tooltips or small right panel help can provide enough information to aid users to do the proper actions.

**Information Visualization**

As the nature of cluster asset, the visualizing of underlying assets or price changings are very important. We try to find the best way to convey the information visually 

---

# Project Falldown

Nebula Protocol was suspended due to the **collapse of Terra’s ecosystem,** which occurred when its algorithmic stablecoin, **UST**, lost its $1 peg. UST relied on a burn-and-mint mechanism with Terra’s native token, **LUNA**, to maintain stability. 

During a market downturn, massive UST sell-offs triggered a hyperinflation of LUNA, causing both assets to plummet in value and eroding trust in the network. Since **Nebula Protocol** was built on Terra’s infrastructure, the collapse made the project unsustainable, leading to its **suspension before release.**