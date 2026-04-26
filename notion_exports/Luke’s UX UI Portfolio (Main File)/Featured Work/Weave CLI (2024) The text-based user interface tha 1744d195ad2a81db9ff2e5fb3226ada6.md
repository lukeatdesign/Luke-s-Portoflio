# Weave CLI (2024): The text-based user interface that allow users to spin-up new Intervowen Rollups

Category: Developer Tools
Date: October 1, 2024
My Role: UX/UI Designer
Company: Initia Labs
Device: Desktop
Project Duration: 2 months
Tools & Methodologies: Figma, Information Architecture, Interactive Prototypes, User Flow Diagram, User Journey Map
Working Team: 2x UX/UI Designer (Me)
2x Back-End Developers
1x Product Manager

![image.png](Weave%20CLI%20(2024)%20The%20text-based%20user%20interface%20tha/image.png)

> Creating **Interwoven Rollups** is complex and **fragmented**, requiring users to navigate extensive documentation. How might we simplify this process with **an interactive CLI that guides users step-by-step,** allowing them to input configurations and select options effortlessly?
> 

# Background

**Weave CLI** is a text-based user interface (TUI) tool designed to simplify complex blockchain operations for the **Initia ecosystem**. The CLI enables users to efficiently manage **Interwoven Rollups** (formerly Minitias), run essential network components, and perform administrative tasks with minimal technical friction. By prioritizing usability and accessibility, Weave CLI streamlines key processes while empowering users with granular control over configurations.

# **Research and Analysis**

<aside>

**Challenges Identified**:

- Blockchain CLI tools often lack clear guidance, leading to user errors.
- Users need **control and flexibility** while configuring rollups and bots.
- Providing real-time feedback in a TUI environment is critical to maintaining user confidence.
</aside>

<aside>

**Proposing Solutions:**

- Use progressive disclosure to guide users step-by-step.
- Implement meaningful defaults while allowing advanced users to configure parameters manually.
- Enhance the user experience with clean text-based visuals, confirmations, and help prompts.
</aside>

# Challenges of Designing a CLI Over a Graphical User Interface (GUI)

> Working on a Command Line Interface (CLI) instead of a traditional graphical user interface presents unique challenges, particularly in terms of **user freedom and interaction modes**. The absence of **mouse-based navigation** and visual elements **limits the degree of freedom** users typically have in graphical interfaces, such as drag-and-drop functionality or on-screen buttons.
> 

> However, **power users** of CLI tools are often accustomed to relying **exclusively on the** **keyboard** for input and navigation. They prefer using arrow keys, shortcuts, and commands to specify inputs and navigate options, making it critical to optimize for efficient, keyboard-first workflows.
> 

> Although common UI patterns like dropdowns, sliders, or toggles are unavailable in text-based environments, creating a **consistent text-based UI** can significantly reduce the learning curve. By adhering to structured patterns—such as clear prompts, predictable key bindings, and intuitive selection control elements—users can develop a mental model of the tool’s behavior. Over time, this consistency enables users to efficiently interact with the CLI, achieving proficiency comparable to working with graphical elements.
> 

> Ultimately, while a CLI lacks the flexibility of a GUI, its **text-based design can be just as effective for experienced users** by emphasizing clarity, consistency, and efficient keyboard interaction.
> 

# **Core Features Mapped into User Flows**:

1. **Run L1 Node**:
    - Select network (Initia L1, testnet, custom).
    - Choose sync options: Snapshot, State Sync, No Sync.
    - Confirm and begin syncing.
2. **Create New Interwoven Rollup**:
    - Select VM type (EVM, CosmWasm, etc.).
    - Input rollup properties: Chain ID, Gas Token Denom, Moniker, Submission Period.
    - Configure Optimistic Bridge (e.g., challenge period, bonded assets).
    - Add Genesis Accounts (interactive file upload or manual entry).
    - Confirm settings and deploy rollup.
3. **Run OPInit Bots**:
    - Choose bot type (e.g., relay bot, monitoring bot).
    - Configure bot settings (e.g., endpoint, polling interval).
    - View logs and test connections.
    - Start bots with a single command.
4. **Create Relayer Account**:
    - Select default preset or manual configuration.
    - Configure relayer parameters (e.g., fee structure, connection endpoints).
    - Verify setup and save configuration.

![Full diagram of how Weave CLI works ](Weave%20CLI%20(2024)%20The%20text-based%20user%20interface%20tha/Weave_User_Journey.png)

Full diagram of how Weave CLI works 

# **Key Design Principles**

![image.png](Weave%20CLI%20(2024)%20The%20text-based%20user%20interface%20tha/image%201.png)

- **Clarity**: Provide clear expectations to the users with the UX writing that they need to specify the input by themselves or select the single option or multiple options, which we made them in components to ensure consistency across the product.

![image.png](Weave%20CLI%20(2024)%20The%20text-based%20user%20interface%20tha/image%202.png)

- **Feedback**: Provide users with **real-time feedback** to enhance confidence and usability. For errors, display clear messages that explain the issue and suggest corrective actions (e.g., "Invalid Chain ID format. Please use alphanumeric characters only."). During processes like syncing or rollup creation, show **progress indicators** or logs so users know what’s happening and how long it might take. Ensure validations are immediate, so users can correct issues before moving forward.

![image.png](Weave%20CLI%20(2024)%20The%20text-based%20user%20interface%20tha/image%203.png)

- **Efficiency**: Streamline the experience with **default presets** for commonly used configurations, enabling users to get started quickly **without unnecessary complexity.** For advanced users, allow **full customization of parameters** through manual input options.

![image.png](Weave%20CLI%20(2024)%20The%20text-based%20user%20interface%20tha/image%204.png)

- **Proactive Help:** Provide users with **built-in guidance** to reduce confusion and improve their understanding of tasks. By pressing **`Ctrl+T`**, users can access a **tutorial mode** that offers contextual help related to the current step, such as the impact of selecting options, or detailed descriptions of advanced configurations. This ensures users can quickly reference information without leaving the CLI, reducing dependency on external documentation.

![image.png](Weave%20CLI%20(2024)%20The%20text-based%20user%20interface%20tha/image%205.png)

- **"Undo" feature: A** rarity in traditional CLI tools—enabling users to press **`Ctrl+Z`** to revert their most recent action. Whether it's resetting a misconfigured parameter or undoing an unintended step, this functionality empowers users to experiment confidently without the fear of making irreversible mistakes.