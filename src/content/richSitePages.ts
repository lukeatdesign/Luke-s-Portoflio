import designResearch from '../assets/site-pages/design/research.png'
import designStructureSkeleton from '../assets/site-pages/design/structure-skeleton.png'
import designSurfaceLevel from '../assets/site-pages/design/surface-level.png'
import designDesignSystem from '../assets/site-pages/design/design-system.png'
import designCommunication from '../assets/site-pages/design/communication.png'

import leadershipBackground from '../assets/site-pages/leadership/background.png'
import leadershipCompanyProcess from '../assets/site-pages/leadership/company-process.png'
import leadershipDesignDiscipline from '../assets/site-pages/leadership/design-discipline.png'
import leadershipQualitySpeed from '../assets/site-pages/leadership/quality-speed.png'
import leadershipCareerGoalMapping from '../assets/site-pages/leadership/career-goal-mapping.png'
import leadershipCultureImprovement from '../assets/site-pages/leadership/culture-improvement.png'

import hiringPlan from '../assets/site-pages/hiring/hiring-plan.png'
import hiringSession from '../assets/site-pages/hiring/hiring-session.png'
import onboardingSlideDeck from '../assets/site-pages/hiring/onboarding-slide-deck.png'

import upskillingLearner from '../assets/site-pages/upskilling/always-a-learner.png'
import upskillingWriting from '../assets/site-pages/upskilling/writing-articles.png'
import upskillingSpeakerPhoto from '../assets/site-pages/upskilling/speaker-photo.png'
import upskillingSpeakerSlide from '../assets/site-pages/upskilling/speaker-slide.png'
import upskillingPanelistTopics from '../assets/site-pages/upskilling/panelist-topics.png'
import upskillingInstructorMessages from '../assets/site-pages/upskilling/instructor-messages.png'
import upskillingStudentReception from '../assets/site-pages/upskilling/student-reception.png'

export type RichSitePageImage = {
  src: string
  alt: string
  caption?: string
}

export type RichSitePageItem = {
  title?: string
  markdown: string
  image?: RichSitePageImage
  imagePosition?: 'left' | 'right'
}

export type RichSitePageSection = {
  label: string
  title: string
  markdown?: string
  image?: RichSitePageImage
  imagePosition?: 'left' | 'right'
  asideTitle?: string
  asideMarkdown?: string
  footerTitle?: string
  footerMarkdown?: string
  items?: RichSitePageItem[]
  gallery?: RichSitePageImage[]
}

export type RichSitePage = {
  slug: string
  kicker: string
  title: string
  heroImage: RichSitePageImage
  heroSubtitle: string
  heroSummary: string
  heroNote?: string
  onThisPage: string[]
  sections: RichSitePageSection[]
}

export const richSitePages: Record<string, RichSitePage> = {
  design: {
    slug: 'design',
    kicker: 'What I Do',
    title: 'What I do in design',
    heroImage: {
      src: designSurfaceLevel,
      alt: 'Surface-level design work from the design practice page',
    },
    heroSubtitle: 'My Design Principles',
    heroSummary:
      'As a designer, I believe we have a responsibility to create solutions that effectively solving specific problems, ensuring they are both technically feasible and align with product-market fit. This approach allows us to deliver products that are desirable, profitable, and meet everyone\'s needs.',
    heroNote:
      'After a **7 year** of this career, I had been through all of design-related tasks from **research, define, ideate, prototype, and testing.** I found myself in the expertise of ensuring the **good usability** of the product, which involve having a strong suits of essential skills such as **visual design, cognitive perception, interaction design, and handoff delivering.**',
    onThisPage: [
      'My Design Principles',
      'Research',
      'Hands-on Design Skills',
      'Handoffs the deliverables',
    ],
    sections: [
      {
        label: 'Principles',
        title: 'My Design Principles',
        markdown:
          'Even though I haven\'t mastered every design domain, I always strive to **understand each discipline** to a degree that allows me to identify specific design issues effectively. I see it is very important as it helps me to know how should I complete the task on my own or seeking help from other people effectively.',
        asideTitle: 'Core belief',
        asideMarkdown:
          '> As a designer, I believe we have a responsibility to create solutions that effectively **solving specific problems,** ensuring they are both **technically feasible** and align with **product-market fit**. This approach allows us to deliver products that are desirable, profitable, and meet everyone\'s needs.\n\nAfter a **7 year** of this career, I had been through all of design-related tasks from **research, define, ideate, prototype, and testing.** I found myself in the expertise of ensuring the **good usability** of the product, which involve having a strong suits of essential skills such as **visual design, cognitive perception, interaction design, and handoff delivering.**',
      },
      {
        label: 'Research',
        title: 'Research',
        image: {
          src: designResearch,
          alt: 'Research workflow board from the design page',
        },
        imagePosition: 'left',
        markdown:
          'Even it is not my strongest suite, I truly believe that the research phase is very essential. By researching, it does not limited to researching users but extend to exploring the market opportunity and technical mechanics before define or delivering the design solutions.\n\nAfter gained the insights from every party, I always try my best to pin down the specific problems and generate all the possible ideas that could solve the problems until converge the **scope** of functionality and users requirements.',
      },
      {
        label: 'Hands-on Design Skills',
        title: 'Hands-on Design Skills',
        items: [
          {
            title: 'Structure and Skeleton Level',
            image: {
              src: designStructureSkeleton,
              alt: 'Information architecture and structural design diagram',
            },
            imagePosition: 'left',
            markdown:
              'Seeking the best of the design solutions, I have been honed skills on **conceptual model and mental model** to delivering the solid **information architecture** that ensure the robust **structure and skeleton** of the user interfaces.',
          },
          {
            title: 'Surface Level',
            image: {
              src: designSurfaceLevel,
              alt: 'High-fidelity interface examples showing surface-level design work',
            },
            imagePosition: 'right',
            markdown:
              'I have concentrated on honing my skills in creating design solutions that excel both **visually and interactively.** This involves blending **practical knowledge,** such as best practices for UI patterns, with deeper **academic concepts** like Gestalt Psychology and Affordances.\n\nMy goal is to integrate these elements effectively into my designs, ensuring I **deliver the highest quality possible,** even when faced with limited resources or time constraints.',
          },
        ],
      },
      {
        label: 'Handoffs',
        title: 'Handoffs the deliverables',
        items: [
          {
            title: 'Maintainable Design System',
            image: {
              src: designDesignSystem,
              alt: 'Systematic design deliverables and design-system documentation',
            },
            imagePosition: 'left',
            markdown:
              'I have been working in environments challenged by time constraints and limited resources. Despite these challenges, I consistently strive to produce design deliverables in a systematic format, such as Atomic Design. This approach allows for easy modifications and helps new team members onboard quickly due to the organized nature of the work.\n\nIn addition to delivering designs, I always seek ways to make the deliverables more robust for collaboration with cross-functional teams. This includes creating thorough **documentation** and organizing elements into **Design Tokens** that align with developers\' needs, facilitating smoother integration and communication.',
          },
          {
            title: 'Constant communications within cross-functional team',
            image: {
              src: designCommunication,
              alt: 'Communication flow and handoff artifacts for design delivery',
            },
            imagePosition: 'right',
            markdown:
              'I firmly believe that **communication is a crucial skill** for designers, given the challenge of ensuring that both business stakeholders and developers accurately understand design solutions and their underlying intentions.\n\nI make every effort to **convey** the right information and **actively listen** to others\' opinions and constraints.\n\nThis involves conducting **design demos** during the delivery process, writing detailed **design notes** to confirm the correctness of interface behavior, and **maintaining constant communication** with everyone involved throughout development to ensure the implementation is complete and accurate.',
          },
        ],
      },
    ],
  },
  leadership: {
    slug: 'leadership',
    kicker: 'What I Do',
    title: 'Leading & Management',
    heroImage: {
      src: leadershipBackground,
      alt: 'Leadership and management visual from the Notion page',
    },
    heroSubtitle: 'Background',
    heroSummary:
      'Since I transitioned myself to UX/UI Design career, I never had any reporting manager as designers before. Basically, it means I never had a person who give me any guidance or design-related feedback. So I need to come up with the improvements and grooming the other designers within the team on my own even I\'m not in a lead position.',
    heroNote:
      'Due to my curiosity, I always try to figure out the answers of many problems within the company somehow. Start from the product discovery to product implementation. That\'s why I take a lot of time to learn all about the best practices available in tech industry.',
    onThisPage: [
      'Background',
      'The company',
      'The Design',
      'Employee Engagement with Employee Experience Design',
    ],
    sections: [
      {
        label: 'Background',
        title: 'Background',
        markdown:
          'Since I transitioned myself to UX/UI Design career, I never had any reporting manager as designers before. Basically, it means I never had a person who give me any guidance or design-related feedback. So I need to come up with the improvements and grooming the other designers within the team on my own even I\'m not in a lead position.\n\nDue to my curiosity, I always try to figure out the answers of many problems within the company somehow. Start from the product discovery to product implementation. That\'s why I take a lot of time to learn all about the best practices available in tech industry.',
      },
      {
        label: 'The company',
        title: 'The company',
        image: {
          src: leadershipCompanyProcess,
          alt: 'Company-wide process diagram used in leadership work',
        },
        imagePosition: 'left',
        markdown:
          'I think it\'s very essential for the company to align the expectations between each party from the company goal to each individual goal. Especially the product wise, to align between business, tech, and design are the utmost important factor to steering the successful product discovery and development.\n\n## Company-wide process\n\nWhen I joined the startup, they typically operated in a way that best suited their immediate needs. However, this freestyle approach often led to common problems, resulting in a buildup of technical and design debt.\n\nI use this opportunity to revamp our methods, incorporating ideas I learned from various sources, primarily focusing on **\'SCRUM\'** and **\'Product Discovery.\'** I tailored these concepts to maintain flexibility, ensuring the process was neither too cumbersome nor too lax.\n\n## Software development process\n\nAs I mentioned about working in SCRUM environment, I still found that many principles are quite unfit with several of company demands or some team member styles. So we are just sticked with the essential artifacts such as creating meaningful tickets, definable sprint goals, and lean checkups.\n\nAs a designer, it is very important to ensure that every party is on the same page. So we came up with the process that designers are **fully integrated with the agile environment by become a dedicated resource** with in the software development team.',
      },
      {
        label: 'The Design',
        title: 'The Design',
        items: [
          {
            title: 'See the design as multi-discipline',
            image: {
              src: leadershipDesignDiscipline,
              alt: 'Diagram describing design as multiple disciplines',
            },
            imagePosition: 'left',
            markdown:
              'Even though I haven\'t mastered every design domain, I always strive to understand each discipline to a degree that allows me to identify specific design issues effectively. This approach ensures we have **enough designers with the essential skills to tackle every design problem,** rather than trying to make everyone proficient in all areas.\n\nEach design discipline is quite distinct, and having both generalists and specialists in each area enables us to develop solutions that are more likely to **resolve problems efficiently**, rather than spending too much time on random tasks.',
          },
          {
            title: 'Even with tight deadlines, we do not compromise on quality.',
            image: {
              src: leadershipQualitySpeed,
              alt: 'Reusable component and variant mindset under time pressure',
              caption:
                'Need it in a few days? That sounds like enough time to create the components and variants.',
            },
            imagePosition: 'right',
            markdown:
              '> Need it in a few days? That sounds like enough time to create the components and variants.\n\nI firmly believe in the principle that **\"slow is smooth, and smooth is fast.\"** This means that even when projects face tight deadlines, I insist that all designers **prepare their work for potential changes.** This includes creating reusable components, detailing all possible states, and ensuring complete handoffs to developers.\n\nContrary to the traditional software development process, where designers typically focus on user research and simply deliver design solutions, I **encourage our designers to take ownership of writing the developers\' tasks, complete with acceptance criteria, and also conduct the acceptance tests.**\n\nThis ensures the correctness of the developed features and requires designers to fully **understand both the business goals of the product and its technical limitations** to fulfill this responsibility effectively.',
          },
        ],
      },
      {
        label: 'Employee Engagement',
        title: 'Employee Engagement with Employee Experience Design',
        markdown:
          'During my time at the startups, we are just a team with only 6-12 people. To ensure both designers and every members within the team to stay engage with the company mission. I came up with the employee experience programs that aim to fulfill every party win-win situations.',
        items: [
          {
            title: 'Career Goal Mapping for Designers',
            image: {
              src: leadershipCareerGoalMapping,
              alt: 'Career goal mapping framework for designers',
            },
            imagePosition: 'left',
            markdown:
              'As a Senior or Lead, I proposed aligning career goals with company objectives to ensure that both **individual designers\' ambitions and organizational targets are in sync**. This alignment involves mapping out **essential design skills required at each job level.**\n\nAdditionally, the mapping allows each team member to **pursue specific interests within various design disciplines**, ensuring that these skills are beneficial for both the individual and the organization.',
          },
          {
            title: 'Create the culture that ensure improvements',
            image: {
              src: leadershipCultureImprovement,
              alt: 'Culture-building and team-improvement program board',
            },
            imagePosition: 'right',
            markdown:
              'To keep all team members engaged and improving, I encourage everyone to take on roles that suit them, helping to enhance the skills of others in the team, regardless of their job level.\n\nAlthough it\'s informal, promoting an environment where everyone is open to **facilitating, training, coaching, or mentoring** benefits both the giver and the receiver. This approach not only helps the mentors structure and **articulate their knowledge** but also provides direct, **valuable insights** to those learning.',
          },
        ],
      },
    ],
  },
  hiring: {
    slug: 'hiring',
    kicker: 'What I Do',
    title: 'Hiring & Onboarding',
    heroImage: {
      src: hiringSession,
      alt: 'Hiring session and portfolio review workflow',
    },
    heroSubtitle: 'Creating hiring plan and deliverables',
    heroSummary:
      'During my time at various companies, I have been actively involved in the hiring process for designers. I\'ve reviewed hundreds of portfolios, conducted over 100 candidate interviews, and successfully hired several designers. I believe that this experience has equipped me with the skills necessary to match the right people with the right jobs effectively.',
    onThisPage: ['Creating hiring plan and deliverables', 'Hiring session start', 'Onboarding'],
    sections: [
      {
        label: 'Planning',
        title: 'Creating hiring plan and deliverables',
        image: {
          src: hiringPlan,
          alt: 'Hiring plan and deliverables board',
        },
        imagePosition: 'left',
        markdown:
          'I usually responsible for defining the job descriptions for the job posts that related to the company situations to be as **specific as possible.**\n\nAs the hiring process would require a lot of time and effort to complete, I tried to came up with the plan that utilizing the times and resources efficiently from create the **skill checklist and doing the 30 minutes call** for filtering the candidates.',
      },
      {
        label: 'Hiring',
        title: 'Hiring session start',
        image: {
          src: hiringSession,
          alt: 'Five-step hiring process overview',
        },
        imagePosition: 'right',
        markdown:
          'I view hiring as a means to address both the company\'s needs and the candidate\'s aspirations. To facilitate mutual understanding, I\'ve designed a five-step hiring process:\n\n1. **Introduction Call**: A 30-minute conversation based on a portfolio review to assess if candidates possess the essential skills we\'re looking for.\n2. **Small Assignment**: A task that verifies skill competency and completeness of deliverables, which should take the candidate a few hours to complete.\n3. **Assignment Showcase and Questions**: An opportunity for candidates to demonstrate their design process and thoughtfulness.\n4. **Expectation Alignment Meeting**: A discussion to confirm cultural fit and shared goals, ensuring that the position meets both the company\'s and the candidate\'s objectives.\n5. **Hiring Offer**: A formal step to finalize the agreement and begin onboarding.\n\nThis structured approach helps both parties clarify what they seek, from extrinsic motivations like salary and benefits to intrinsic motivations such as culture, tasks, skills, and mentorship.',
      },
      {
        label: 'Onboarding',
        title: 'Onboarding',
        image: {
          src: onboardingSlideDeck,
          alt: 'Onboarding slide deck overview',
          caption:
            'An onboarding slide deck to provide a comprehensive overview of the company.',
        },
        imagePosition: 'left',
        markdown:
          'I am deeply involved in the orientation and onboarding process for new team members, not just designers but other roles as well.\n\nBelieving that the initial experiences - **the first day, first week, and first month** - can make a significant impression on new joiners, I stay in close contact with them. I also facilitate interactions among team members to **foster early bonding** and ensure that tasks are assigned smoothly.',
      },
    ],
  },
  upskilling: {
    slug: 'upskilling',
    kicker: 'What I Do',
    title: 'Upskilling People',
    heroImage: {
      src: upskillingLearner,
      alt: 'Continuous learning and certification overview',
    },
    heroSubtitle: 'Always a learner',
    heroSummary:
      'Currently, I have been learning through 32 courses and 6 Master Classes in Interaction Design Foundation, 12 courses in Uxcel, and gained the Google UX Design Specialization certificate while completed 7 courses.',
    heroNote:
      '[See all list of certificates in LinkedIn.](https://www.linkedin.com/in/lookchin/details/certifications/)',
    onThisPage: ['Always a learner', 'Writing Articles', 'Being a speaker', 'Being an instructor'],
    sections: [
      {
        label: 'Learning',
        title: 'Always a learner',
        image: {
          src: upskillingLearner,
          alt: 'Course and certification overview',
        },
        imagePosition: 'left',
        markdown:
          '> Currently, I have been learning through **32 courses and 6 Master Classes** in Interaction Design Foundation, **12 courses** in Uxcel, and gained the **Google UX Design Specialization** certificate while completed **7 courses.** [See all list of certificates in LinkedIn.](https://www.linkedin.com/in/lookchin/details/certifications/)\n\nWhen I first transitioned to UX/UI Design, I felt like I was using just "my common sense" to identify problems and create solutions. I believed I might be on the right track but was truly not confident **due to not having any knowledgeable backup.**\n\nI realized I had to be more proactive about my design skills. So, I decided to start learning through the **Interaction Design Foundation**, an online learning platform that focuses on psychology-based and established academic subjects.\n\nAfter I found myself **improving** from the learning and able to **apply** those skills to my work, I tried my best to **maintain consistency** in learning and reading books.',
        footerTitle: 'Learning catalogue',
        footerMarkdown:
          '- **32 Courses** in Interaction Design Foundation\n' +
          '  - **Human-Computer Interactions**\n' +
          '    - [**Human-Computer Interaction - HCI**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/9dab76ea-0932-419c-8e38-e65379aa7fba?certificateType=course)\n' +
          '    - [**Accessibility: How to Design for All**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/750227b3-2d65-42f2-a73d-60b381bd3b72?certificateType=course)\n' +
          '    - [**Human-Computer Interaction: The Foundations of UX Design**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/aa89db52-075a-461d-87df-2d322b3007c6)\n' +
          '    - [**Perception and Memory in HCI and UX**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/1c90e219-ffab-4047-983e-bbf12eeb44c2)\n' +
          '  - **Interaction Design**\n' +
          '    - [**Interaction Design for Usability**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/f6baf456-07f8-442d-be59-4bf53191e07a?certificateType=course)\n' +
          '    - [**Psychology of Interaction Design: The Ultimate Guide**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/6ec6c90e-ca70-49d4-a446-382f7d1017bc?certificateType=course)\n' +
          '  - **Visual Design**\n' +
          '    - [**Gestalt Psychology and Web Design: The Ultimate Guide**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/022bf14a-e060-48ba-92bd-27efc869b4b2?certificateType=course)\n' +
          '    - [**The Ultimate Guide to Visual Perception and Design**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/a33af3be-c9b0-477f-9692-3b72d5ff6479?certificateType=course)\n' +
          '    - [**Information Visualization: Getting Dashboards Right**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/5eb7f9a7-2a14-47e2-91dd-815b48f8f576?certificateType=course)\n' +
          '    - [**Information Visualization**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/fltqnHSHvPxhn5wt3S?certificateType=course)\n' +
          '  - **Usability Expert**\n' +
          '    - [**The Practical Guide to Usability**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/5a46eb41-77b3-47d5-886e-bcb99011cc65)\n' +
          '    - [**Web Design for Usability**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/c68704cf-69a0-4c76-b576-ed4b0a1217c7?certificateType=course)\n' +
          '    - [**Conducting Usability Testing**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/58cd21af-7253-4a48-a88f-a08861312469?certificateType=course)\n' +
          '    - [**Dynamic User Experience: Design and Usability**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/4e890cc3-5a0f-4029-8554-7405f2825a45)\n' +
          '  - **Product and UX Management**\n' +
          '    - [**UX Management: Strategy and Tactics**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/25c65a33-5a6c-4390-ab09-1dfa3a4c0e80?certificateType=course)\n' +
          '    - [**Agile Methods for UX Design**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/a41cdcb2-15d3-442f-864b-bf88cae1a745)\n' +
          '    - [**Get Your Product Used: Adoption and Appropriation**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/5ede9240-a812-4b82-9d78-5a20b0ddedab?certificateType=course)\n' +
          '  - **Design Disciplines**\n' +
          '    - [**Affordances: Designing Intuitive User Interfaces**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/9ec581d5-0371-4bba-b5a8-0e7daf0e0840?certificateType=course)\n' +
          '    - [**How to Create Intuitive Products by Imitating Physicality**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/f4acad5f-31dd-4d99-938a-e32581120003)\n' +
          '    - [**Gamification - Creating Addictive User Experiences**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/4f2b32a7-57fc-4297-9246-d60dc2e17f50?certificateType=course)\n' +
          '    - [**Service Design: Design Integrated Service Experiences**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/46f20a6a-d489-4315-a7d8-768da967d747?certificateType=course)\n' +
          '    - [**The Brain and Technology: Brain Science in Interface Design**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/2fb2c62c-b6b4-4d64-a96f-278a63eb7476?certificateType=course)\n' +
          '    - [**Emotional Design - Make Products People Will Love**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/1bdd5423-502d-4203-9972-08ce5d214daf?certificateType=course)\n' +
          '    - [**Creativity: Design Better Products and Services**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/ccad3348-3597-4414-b56d-119fc5236fa1?certificateType=course)\n' +
          '  - **Design Practices**\n' +
          '    - [**User Research - Methods and Best Practices**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/dbcc7653-baf7-4a0a-86f3-eccbc132b917?certificateType=course)\n' +
          '    - [**UI Design Patterns for Successful Software**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/0c3b5eaa-4906-459c-b9a6-fd35abc74c9b?certificateType=course)\n' +
          '    - [**Mobile User Experience (UX) Design**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/2fb74bd4-bd19-433a-9535-6022c6d65ccf?certificateType=course)\n' +
          '    - [**Data-Driven Design: Quantitative Research for UX**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/a9afbdb2-53fe-49dd-94be-cde79044160c?certificateType=course)\n' +
          '    - [**Conducting Usability Testing**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/58cd21af-7253-4a48-a88f-a08861312469?certificateType=course)\n' +
          '  - **Miscellaneous**\n' +
          '    - [**Design for a Better World with Don Norman**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/ab19c12d-aece-4324-9d37-08c98d4faab4)\n' +
          '    - [**Design for the 21st Century with Don Norman**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/4108fe47-24b2-4067-a1a2-7464e750d997?certificateType=course)\n' +
          '    - [**Psychology of E-Commerce: How to Sell Online**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/24d69ea8-5ed5-4fb0-acbb-7590b02e0061?certificateType=course)\n' +
          '    - [**How to Create a UX Portfolio**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/course/27441a58-74a5-4ec7-8d26-91bfdf5d59a2?certificateType=course)\n\n' +
          '- **6 Master Classes** in Interaction Design Foundation\n' +
          '  - [**How to Create Complex Tables Users Love: A UI Designer\'s Guide**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/masterclass/mcc_33072bbc06ad4543a8ac63d17bcccece)\n' +
          '  - [**Top 10 Things Designers Need to Know About People**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/masterclass/mcc_e58587b8b2b34079873eaec2c03528bf)\n' +
          '  - [**UX Writing: How To Use Words As A Design Power Tool**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/masterclass/mcc_63b77782f3f54c1c835b64b101e35c73)\n' +
          '  - [**How (and When) To Run A Design Sprint**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/masterclass/mcc_28a4a5526f2143d68971ac57eb5a83c0)\n' +
          '  - [**Achieve 10X Better Designs Through Semantic Interaction Design**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/masterclass/mcc_46b99ef067994b2585d5cadece35ea02)\n' +
          '  - [**Design with Data: A Guide to A/B Testing**](https://www.interaction-design.org/members/supasinan-pisanuwongrak/certificate/masterclass/mcc_4619b61924e648618ca868190e880bc7)\n\n' +
          '- **7 Courses** from Google UX Design Specialization\n' +
          '  - [**Foundations of User Experience (UX) Design**](https://www.coursera.org/account/accomplishments/verify/FAUTEEE3XLPW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course)\n' +
          '  - [**Start the UX Design Process: Empathize, Define, and Ideate**](https://www.coursera.org/account/accomplishments/verify/HLWV7YV2A53S?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course)\n' +
          '  - [**Build Wireframes and Low-Fidelity Prototypes**](https://www.coursera.org/account/accomplishments/verify/DYCNX954PDTR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course)\n' +
          '  - [**Create High-Fidelity Designs and Prototypes in Figma**](https://www.coursera.org/account/accomplishments/verify/KG9JB4NURJAK)\n' +
          '  - [**Build Dynamic User Interfaces (UI) for Websites**](https://www.coursera.org/account/accomplishments/verify/URVP2UYR6C2A)\n' +
          '  - [**Conduct UX Research and Test Early Concepts**](https://www.coursera.org/account/accomplishments/verify/DJ35HM7KGDA3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course)\n' +
          '  - [**Design a User Experience for Social Good & Prepare for Jobs**](https://www.coursera.org/account/accomplishments/certificate/K5266T4U2WGQ)\n\n' +
          '- **7 Courses** in Uxcel\n' +
          '  - [**UI Components I**](https://app.uxcel.com/certificates/YA6L6YLSWK5T)\n' +
          '  - [**UI Components II**](https://app.uxcel.com/certificates/NQIK1MZWPOG9)\n' +
          '  - [**Service Design**](https://app.uxcel.com/certificates/VRYYG5W7XHP9)\n' +
          '  - [**Design Composition**](https://app.uxcel.com/certificates/42AO671GPRBW)\n' +
          '  - [**Design Accessibility**](https://app.uxcel.com/certificates/K29PV69NX53C)\n' +
          '  - [**UX Design Patterns with Checklist Design**](https://app.uxcel.com/certificates/YHID3D3U8WKO)\n' +
          '  - [**Design Workshop Facilitation**](https://app.uxcel.com/certificates/1SJBIX22ATYO)\n' +
          '  - [**CSS for Designers**](https://app.uxcel.com/certificates/8CL9JXFROAQL)',
      },
      {
        label: 'Writing',
        title: 'Writing Articles',
        image: {
          src: upskillingWriting,
          alt: 'Response to writing articles and community sharing',
        },
        imagePosition: 'left',
        markdown:
          '> **1,600+ shares for my first article** titled [**"Things I want everyone who want to land a UX/UI Designer job know in detail"**](https://www.facebook.com/groups/uxthailand/posts/4473579279328236/)\n\n- After working for several years, I\'ve realized that many people struggle to land a job in the UX/UI Design domain, both within the communities I\'ve been part of and while I\'m hiring new designers.\n- I consider myself quite lucky to have landed a job in this field, so I decided to give back to the community. I hope that by sharing my insights, others will feel fortunate to **come across this information early on**, enabling them to navigate their careers more effectively.\n- I wrote an article titled "Things I Want Everyone Who Wants to Land a UX/UI Designer Job to Know in Detail." I chose to post it on the "UX Thailand" Facebook group instead of platforms like Medium to maximize its reach and ensure it could help as many people as possible.\n- The article reached a wide audience and garnered significant engagement. Following its success, I received numerous direct messages from **people seeking advice on** whether to pursue a career in this field or tips on landing a job.\n- I had written more articles through [Lookchin\'s Medium](https://medium.com/@lookchin).',
      },
      {
        label: 'Speaking',
        title: 'Being a speaker',
        image: {
          src: upskillingSpeakerPhoto,
          alt: 'Luke speaking at UX Day: Go with the Flow',
          caption: 'Photo of the staffs and speakers during the UX Day: Go with the flow, Season 2.',
        },
        imagePosition: 'left',
        markdown:
          'After the reception of that article, I never imagined I would be invited to be a speaker. My first speaking engagement was at an event called UX Day: Go with the Flow**, where I was one of 10 speakers.**\n\nI received numerous speaking opportunities at various events, where I became known for my **unconventional and practical** approach.\n\nGiven my **somewhat whimsical background**, I focus on delivering content that I\'m confident addresses the audience\'s **pain points and truly meets their needs.**',
        gallery: [
          {
            src: upskillingSpeakerSlide,
            alt: 'Slide from a UX speaking session',
          },
          {
            src: upskillingPanelistTopics,
            alt: 'Panelist and speaker invitations across UX topics',
          },
        ],
        footerMarkdown:
          'Since then, I\'ve been invited multiple times to **speak or participate as a panelist on a variety of topics**, including interview guides, rank-up strategies, usability issues, and UX in agile environments.',
      },
      {
        label: 'Teaching',
        title: 'Being an instructor',
        image: {
          src: upskillingInstructorMessages,
          alt: 'Messages from students after instruction',
          caption: 'Just a few of these small message bubbles can easily make my day a good one',
        },
        imagePosition: 'right',
        markdown:
          'I\'m also working as an instructor, **teaching courses** about the academic side of UX/UI design.\n\n> There\'s no greater satisfaction than knowing that the individuals who have **received my guidance are succeeding,** whether it\'s landing desired jobs, advancing to higher levels in careers, or achieving the goals they\'ve set for themselves. This sense of accomplishment is **truly rewarding.**\n\nI was invited by Upskill UX, an online learning company dedicated to offering courses for those looking to transition into UX design. They aimed to help **current professionals improve in their roles.**\n\nMotivated by this goal, I decided to create my first online course titled **"Comprehensive Usability Toolkit."** This course focuses on enhancing the academic skills of designers, **enabling them to apply** these skills in their design practices and use them as a knowledgeable foundation.',
        footerTitle: 'What I teach in my classroom',
        footerMarkdown:
          '- **Introduction to Usability Expert**\n\n  Learn the fundamentals of becoming a usability expert, including the roles, responsibilities, and impact of usability expertise in product development.\n\n' +
          '- **10 Usability Heuristics from NNgroup**\n\n  Dive into the 10 usability heuristics developed by the Nielsen Norman Group, providing a comprehensive framework for evaluating user interface design throughout the pre-design, design, and post-design phases.\n\n' +
          '- **Best Practices for Common UI Patterns**\n\n  Explore the most effective practices for designing common user interface patterns such as buttons, text field, selection controls, etc., enhancing functionality and user experience.\n\n' +
          '- **Visual Design for Usability**\n\n  Understand how visual design influences usability, focusing on elements, principles including Gestalt Psychology, that enhance user interaction and accessibility.\n\n' +
          '- **Intro to Interaction Design**\n\n  An introductory look at interaction design, covering the basics of designing engaging interfaces that facilitate user tasks, reduce interaction costs, and meet the user\'s cognitive load.\n\n' +
          '- **Affordances for UI Design**\n\n  Affordances in UI design are visual or functional cues that help users understand how to interact with elements, like buttons looking "clickable" or sliders appearing "draggable." They align design with user expectations for better usability.\n\n' +
          '- **Human-Computer Interactions and how it related to UX**\n\n  Study the relationship between human-computer interaction (HCI) and UX design, examining how HCI principles inform better user experiences.',
        items: [
          {
            title: 'Student reception',
            image: {
              src: upskillingStudentReception,
              alt: 'Positive reception and ratings from students',
            },
            imagePosition: 'left',
            markdown:
              'The reception from the students has been overwhelmingly positive, as detailed below:\n\n- **9.8/10** for learning contents\n- **9.6/10** for instructor teaching styles\n- **9.4/10** for instructional media preparations',
          },
        ],
      },
    ],
  },
}
