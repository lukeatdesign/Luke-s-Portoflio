# Alpha Homora V2 (2021) :: Usability Revamp for DeFi Leverage Liquidity Providing Protocol

Category: DeFi
Date: September 1, 2021
My Role: UX/UI Designer
Device: Desktop
Project Duration: 1 month
Tools & Methodologies: Figma, Guerrilla Test, Hi-Fidelity Design, Information Architecture, Interactive Prototypes, Usability Testing, User Flow Diagram, User Interview, User Journey Map
Working Team: Only Me

![Picture2.png](Alpha%20Homora%20V2%20(2021)%20Usability%20Revamp%20for%20DeFi%20L/Picture2.png)

# Background

Alpha Finance Lab is opening a position for UI & Graphic Designer. My friend referred me to this position, but they told me they are looking for a designer who has strong visual design sense as they don’t have UX problems. 

However, they looked at my portfolio and were interested in my portfolio, so they decided to give me the assignment to evaluate their flagship product called “Alpha Homora V2”, the leveraged yield farming platform.

I’m familiar with some defi products and see their product possesses a lot of UX problems, especially usability issues. So, I evaluated it on my own and did some usability tests to confirm the issues. I presented them with more than 30 validated underlying problem issues. 

They never thought of hiring UX Designer, so I’m the first for them, joined Sep 1st, 2021. During a month I joined, they brought my suggestions to work with developers to improve their product user experience and usability.

# Product Background

> For any crypto investors who are not satisfied with available investing options.
> 
> 
> **Alpha Homora v2** offers **‘leveraged yield farming’** to let them **take higher risks** and expect to **gain maximize profits**
> 

Cryptocurrency became an option for investment and yield farming is one of the popular method to invest.

Leveraged yield farming is on another level for taking risk by borrowing tokens for providing liquidity. Alpha Homora v2 aims to be the best product to let them expect to gain maximize profits.

# Defining Current User Journey

|  | Pool Selection | Supply Token | Borrow Token | Confirm Strategy |
| --- | --- | --- | --- | --- |
| Task List | •  Land on Alpha Homora v2 Dashboard
• See the pool list on the dashboard
• Select pool | • Supply token either a side or both
• Decide about the amount of token to supply
•  | • Put in desired leverage
• Exercise gained borrow power to allocate borrow tokens | • Check the summarized details and try to understand everything
• Approve spending token
• Confirm strategy and proceed on leveraged yield farming |
| Feeling Adjective | • Being very analytical in the  selection process
• Profit calculation (Greed)
• Evaluate the risk (Fear) | • Calculate how much they want to invest
• Attention to details
• May invest in the percentage of balance (50% of ETH in the wallet) | • Try to understand the leverage
• Get confused about the borrow power and debt ratio
• Might feel insecure and decide to drop-off | • Confused about every single detail
• Another profit and risk calculation for the last time
• Emotional Investment |
| Thinking | • What is this APR and this strikeout?
• How many TVLs are in this pool? Where could I find it? Ah, it’s on the ‘Pool TVL’.
• Should I check more pool at ‘Yield Farming?’ … Oh nothing here.
• Compare them to other investing options | • Oh, so this is the traditional liquidity providing
• So, I must apply both side of the tokens in equivalent value | • Oh, so there’s a leverage option here.
• Hmm, what is this ‘borrow power’ and ‘debt ratio?’
• Trying to understand both terms 
• So how many can I borrow and what is the actual calculated borrowing power?
• This is quite confusing, should I proceed or not? | • Oh, too many information around here
• Do I need to understand everything here?
• (Confirm 1) Okay, I understand all the risk and expected return. Go for it!
• (Confirm 2) I don’t understand all of them, but I guess I’ll proceed
• (Drop-Off) I don’t understand this. Not understanding is risky. |
| Improvement Opportunities | • Lack of ‘TVL’ to help calculate the risk (need to go to a separate page)
• Unclear APR value
• Can navigate through pools only on Dashboard | • Should let them know about the auto-swap function
• Amount slider | • Amount slide does not provide helpful constraints. They are unsure about how many they can borrow or should borrow.
• Lack of estimated APR makes it more difficult to decide how much they should borrow. | • Try to lessen the cognitive load for users and display information in hierarchy.
• Give information about how many they are investing, borrow, and supplying.
•  |

# Specific Problems in Sitemap Level

## Current Sitemap and Problems:

![image.png](Alpha%20Homora%20V2%20(2021)%20Usability%20Revamp%20for%20DeFi%20L/image.png)

The current sitemap seems off in some points below.

1. Users can access the ‘Farm pools’ only through the ‘**Dashboard**’ (which is not currently working as a dashboard.)
2. Currently, there is no action available for first time users in the  ‘**Yield Farming**’ section. This might contradict to the mental model of users who are familiar with DeFi platform.
3. **‘Earn’** is not a precise term for its beneath actions.
4. **‘Asset Prices’** is not actually needed and doesn’t need a dedicated page.

## Proposing New Sitemap:

![Picture1.png](Alpha%20Homora%20V2%20(2021)%20Usability%20Revamp%20for%20DeFi%20L/Picture1.png)

This information architecture will provide clear expectations and actions for each page.

1. **‘Home’** works as an overview to everything. Let users see each part of information in many containers and lead them to a dedicated page
2. **‘Dashboard’** works as an informative place for their actions and for ‘Homora Info’ to make decisions
3. **‘Farm Pools’** works as the catalogue for users to select their desired pool.
4. ‘**Assets Lending’** instead of ‘Earn’ to make users understand at first glance.
5. **‘Migration’** is basically the same but might use in-page navigation (such as tab) to filter instead of a dedicated page.

---

## UI Revamp Samples

![Picture2.png](Alpha%20Homora%20V2%20(2021)%20Usability%20Revamp%20for%20DeFi%20L/Picture2%201.png)

### Home

Important information for decision-making is displayed on the right side.

This ‘Home’ page provides overview information to let users explore what they can do on Alpha Homora such as leveraged yield farming or lending assets.

### Lost signifiers

![image.png](Alpha%20Homora%20V2%20(2021)%20Usability%20Revamp%20for%20DeFi%20L/image%201.png)

**APR? APY? Why Strikethrough?**

- These value lack of its label, which makes user confused and ask what do they mean
- No indicator of value on the right side (the breakdowns of the leveraged APR)
- No TVL details around the pool. Users need to go to ‘Pool TVL’ to learn the info before making the decision, which requires more effort.

![Picture3.png](Alpha%20Homora%20V2%20(2021)%20Usability%20Revamp%20for%20DeFi%20L/Picture3.png)

- Include table header
- Put a clear label for each pool APR (From 7.25% up to 42.70%) to let users understand minimum APR (without leverage) and maximum APR (max leverage).
- Put a clear label for available leverage (From 1x up to 1.86x) to indicate how much users can leverage to this pool to gain maximum APR.
- Include Pool TVL and Positions to the pool as these information are crucial to make decisions.
- Call to action changed to ‘Farm up to 1.86x’ to let users know that they can modify their leverage later.

## Steps in Leverage Liquidity Providing

### Step 1: Supply Tokens

![Picture4.png](Alpha%20Homora%20V2%20(2021)%20Usability%20Revamp%20for%20DeFi%20L/Picture4.png)

**Problems**

There are no signifier to let users know that they can either supply one side of the pair or supply both sides with different values.

Many users might think that they need to prepare both side of tokens and find out later that the system would do the swap for them, when they already paid their gas fee.

**Tell them what they can do**

This may look very simple but it is strongly effective. This textbox works as a ‘proactive help’ to let them know what they can do and how we could help them. This textbox might be a small change, but it provides a strong visual cue. Users will not miss this important tip. They would appreciate this and find it convenient.

With bold text and slightly bright textbox, users will hardly miss the tip that helps them a lot, which leads to better experience.

![Picture5.png](Alpha%20Homora%20V2%20(2021)%20Usability%20Revamp%20for%20DeFi%20L/Picture5.png)

---

**Lack of information**

Users will need more information to decide how much they should leverage and how much they should borrow as they can see the summarized details in the next page instead of now, which requires them to go back and forth until having satisfied result.

**Edge case prevention**

The sliding scale should be designed as a helpful constraint for users. The locked scale ensures that the borrow power will not exceed 100/100.

![Picture6.png](Alpha%20Homora%20V2%20(2021)%20Usability%20Revamp%20for%20DeFi%20L/Picture6.png)

**Leverage multiplier should be absolute**

After users select leverage multiplier, if the users don’t utilize all their ‘Borrow Power’, then they’ll not achieve the selected leverage.

Some users might ignore the explanation about using 100/100 Borrow Power and does not pay attention to the summarized details in Step 3. They will end up opening a position of less total leverage than selected in Step 2.

**Ambiguous term**

The definition of the term ‘Borrow Power’ requires the effort from users to comprehend and calculate. This problem can be solved by design to make it more self-explanatory.

![Picture7.png](Alpha%20Homora%20V2%20(2021)%20Usability%20Revamp%20for%20DeFi%20L/Picture7.png)

![Picture8.png](Alpha%20Homora%20V2%20(2021)%20Usability%20Revamp%20for%20DeFi%20L/Picture8.png)

## Don’t make me think

Leverage with many assets provides flexibility, but it would require cognitive loads from users to think and decide. This brings about an idea to try to lessen required cognitive loads from users by making terms and value easier to comprehend and giving helpful constraints to them.

- Changes ‘Borrow Power’ to ‘Your Borrow Limit’ and converts them to ‘dollar value’
- Display assets breakdown at the right side to let users compare each asset.
- Provide estimated APY to help with their decision-making.
- Lock the slider so that it doesn’t exceed the debt ratio.
- 

## Utilize Visual Hierarchy

Separate the data into hierarchy will help users to comprehend what is important to them and they can look for more details below. These four values are likely to be the most important info for them before deciding to complete the yield farming. The asset breakdown is put on the right side as supporting info about their positions and it is also consistent with the Step 2, so it does not require extra effort for them to cope with context switch.

## **Changes Made**

- Put ‘Total Leverage, Est. assets in position. Total APR, and Debt Ratio at the top.
- Have all the supporting data for those four values in the page such as Asset Breakdown, APR breakdown, Debt Ratio details.
- Put Liquidation Condition on another section instead of tooltip, so that users can learn more about the risk in numbers.

![Picture9.png](Alpha%20Homora%20V2%20(2021)%20Usability%20Revamp%20for%20DeFi%20L/Picture9.png)

---

![Picture10.png](Alpha%20Homora%20V2%20(2021)%20Usability%20Revamp%20for%20DeFi%20L/Picture10.png)

## Step 3: Confirm Strategy

If users could get to this page, it is most likely that all of them could complete the attempt for yield farming. However, these breakdowns could lead to some possible mistakes.

The data table is one of the most functional ways to display data, but it requires most effort to perceive and interpret all the data. The worst scenario is when the user decides to proceed without fully understanding, which may lead to mistakes.

### **Total Leverage**

In case users did not allocate all their borrow power, this screen will display the final leverage multiplier, which might slip their eyes as the number is quite small and does not call for attention. They might realize later after they proceed with the transaction and find out that they make a mistake.

### **Total APR**

Total APR is displayed only in the step 3. That also means that if users want to change this value, they need to go back to step 2, and vice versa, to see the total APR. This requires unnecessary effort.

### **Utilize Visual Hierarchy**

Separate the data into hierarchy will help users to comprehend what is important to them and they can look for more details below. These four values are likely to be the most important info for them before deciding to complete the yield farming. The asset breakdown is put on the right side as supporting info about their positions and it is also consistent with the Step 2, so it does not require extra effort for them to cope with context switch.

**CHANGES MADE**

- Put ‘Total Leverage, Est. assets in position. Total APR, and Debt Ratio at the top.
- Have all the supporting data for those four values in the page such as Asset Breakdown, APR breakdown, Debt Ratio details.
- Put Liquidation Condition on another section instead of tooltip, so that users can learn more about the risk in numbers.

![Picture11.png](Alpha%20Homora%20V2%20(2021)%20Usability%20Revamp%20for%20DeFi%20L/Picture11.png)

---

# Expected New User Journey

|  | Pool Selection | Supply Token | Borrow Token | Confirm Strategy |
| --- | --- | --- | --- | --- |
| **Task List** | • Land on Alpha Homora v2 Dashboard
• See the opular pool and go see full list | • Supply token either a side or both
• Read the tips about auto-swap
• Decide on the amount of token to supply
•  | • Put in desired leverage
• Exercise gained borrow power to allocate borrow tokens | • Check the summarized details and try to understand everything
• Approve spending token
• Confirm strategy and proceed on the leveraged yield farming |
| **Feeling Adjective** | • Being very analytical on selection
• Profit calculation (Greed)
• Evaluate the risk (Fear) | • Calculate how much they will invest
• Attention to details
• May invest in percentage of balance (50% of ETH in the wallet) | • Understand about leverage and supplying assets
• Try to understand about borrow limit, debt ratio, and expected APR.
• Understand the terms and decide if they’re okay with the information | • A bit confused about every single detail
• Another profit and risk calculation for the last time
• Emotional Investment |
| **Thinking** | • So this is an expected APR after leveraged.
• I’ll need to leverage this much to gain that APR.
• This is the TVL for this pool (Decide if it’s enough or not).
• Decide to farm (or not) | • This is traditional liquidity providing
• Oh some tips here … Ah so I can supply as much as I want to without any constraint. | • Oh, so leverage option here.
• Hmm, what is this ‘borrow power’ and ‘debt ratio?’
• Trying to understand both terms 
• Okay, so I’ve this borrow limit and I’ll allocate all of them to these tokens. | • Oh, too many information around here
• So basically these are what I need to know .. Leverage, Assets in position, APR, and Debt Ratio
• (Confirm) I understand about the risk and expected return so I proceed.
• (Drop-off) This is not a good investment option for me. |
| **Expected Outcome** | • Users understand and learn enough information for decision-making in selecting pool | • Users understand about supplying flexibility
• Users don’t need to swap for equivalent value tokens | • Users understand what will happen for borrowing and swapping
• Users understand more about risk and expected APR for this borrows. | • Less cognitive load for users as we display information in hierarchy
• Users understand what they are actually supplying |

---

# After Proposal

> “We are bringing these suggestions to the development.”
> 

After I joined Alpha Finance, they have a plan to deploy their ‘Homora V2’ to the Avalanche ecosystem. Even though we have not enough time to bring these improvements to this release, now we are bringing the suggestions I made to the development. This would take a long time as there are many technical debts but when the time has come, it will provide a lot better UX for users.