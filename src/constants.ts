import { AcademicCapIcon, BriefcaseIcon, MapPinIcon, SparklesIcon, UserGroupIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { IconComponent, CaseStudyFilterKey } from "./types";
import { caseStudies } from "./content/caseStudies";

export const BRAND_TEXT = 'LUKE';
export const brandLogoAnimations = [
      'logo-wave',
      'logo-glitch',
      'logo-spin',
      'logo-jello',
      'logo-scatter',
      'logo-typewriter',
      'logo-colorflash',
      'logo-tilt',
      'logo-shake',
      'logo-scramble',
    ] as const;
export const strengths = [
      {
        title: 'Product Design',
        description:
          'I combine design principles, user psychology, and practical product work to create interfaces that meet business goals, respect technical constraints, and feel intuitive in use.',
        href: '#/what-i-do/design',
        icon: SparklesIcon,
      },
      {
        title: 'Leading & management',
        description:
          'I often step into lead responsibilities, from setting quality bars and team standards to mentoring designers and helping design teams operate with more confidence.',
        href: '#/what-i-do/leadership',
        icon: UserGroupIcon,
      },
      {
        title: 'Hiring & onboarding',
        description:
          'I have supported hiring loops, written plans and job descriptions, interviewed candidates, and helped create stronger onboarding experiences for growing teams.',
        href: '#/what-i-do/hiring',
        icon: BriefcaseIcon,
      },
      {
        title: 'Upskilling people & myself',
        description:
          'My articles on UX/UI growth have been widely shared, and that work has opened doors to teaching, speaking, and helping other designers build stronger foundations.',
        href: '#/what-i-do/upskilling',
        icon: AcademicCapIcon,
      },
    ];
export const highlights = [
      { icon: BriefcaseIcon, text: '8 years of end-to-end product design — research, systems, and delivery.' },
      { icon: WrenchScrewdriverIcon, text: 'UX Lead at Alles Labs — design quality, team standards, and mentoring.' },
      { icon: AcademicCapIcon, text: 'UX writing shared 1,000+ times — led to speaking and teaching.' },
      { icon: MapPinIcon, text: 'Based in Bangkok, Thailand — GMT+7.' },
    ];
export const learningIcons: IconComponent[] = [
      WrenchScrewdriverIcon,
      SparklesIcon,
      UserGroupIcon,
      AcademicCapIcon,
    ];
export const caseStudyFilterLabels: Record<CaseStudyFilterKey, string> = {
      devices: 'Devices',
      projectType: 'Project Type',
      industries: 'Industries',
    };
export const caseStudyFilterOptionOrder: Record<CaseStudyFilterKey, string[]> = {
      devices: ['Desktop', 'Mobile', 'CLI', 'TUI'],
      projectType: [
        'Developer Tools',
        'Multisig',
        'UX Research',
        'Annotation',
        'NLP',
        'Margin Trading',
        'Usability Revamp',
      ],
      industries: ['Blockchain Infra', 'DeFi', 'PropTech', 'Analytics', 'Enterprise Banking'],
    };
export const caseStudyTagCategories: Record<string, CaseStudyFilterKey> = {
      Desktop: 'devices',
      Mobile: 'devices',
      CLI: 'devices',
      TUI: 'devices',
      'Developer Tools': 'projectType',
      Multisig: 'projectType',
      'UX Research': 'projectType',
      Annotation: 'projectType',
      NLP: 'projectType',
      'Margin Trading': 'projectType',
      'Usability Revamp': 'projectType',
      'Blockchain Infra': 'industries',
      DeFi: 'industries',
      PropTech: 'industries',
      Analytics: 'industries',
      'Enterprise Banking': 'industries',
    };
export const caseStudyFilterColors: Record<string, Record<string, string>> = {
      Desktop: {
        border: 'rgba(241, 221, 228, 0.18)',
        background: 'rgba(241, 221, 228, 0.08)',
        hoverBorder: 'rgba(241, 221, 228, 0.36)',
        hoverBackground: 'rgba(241, 221, 228, 0.16)',
        activeBorder: 'rgba(241, 221, 228, 0.6)',
        activeBackground: 'rgba(241, 221, 228, 0.24)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      Mobile: {
        border: 'rgba(243, 208, 217, 0.18)',
        background: 'rgba(243, 208, 217, 0.08)',
        hoverBorder: 'rgba(243, 208, 217, 0.36)',
        hoverBackground: 'rgba(243, 208, 217, 0.16)',
        activeBorder: 'rgba(243, 208, 217, 0.6)',
        activeBackground: 'rgba(243, 208, 217, 0.24)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      CLI: {
        border: 'rgba(205, 224, 244, 0.18)',
        background: 'rgba(205, 224, 244, 0.08)',
        hoverBorder: 'rgba(205, 224, 244, 0.36)',
        hoverBackground: 'rgba(205, 224, 244, 0.16)',
        activeBorder: 'rgba(205, 224, 244, 0.56)',
        activeBackground: 'rgba(205, 224, 244, 0.22)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      TUI: {
        border: 'rgba(219, 213, 243, 0.18)',
        background: 'rgba(219, 213, 243, 0.08)',
        hoverBorder: 'rgba(219, 213, 243, 0.36)',
        hoverBackground: 'rgba(219, 213, 243, 0.16)',
        activeBorder: 'rgba(219, 213, 243, 0.56)',
        activeBackground: 'rgba(219, 213, 243, 0.22)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      'Developer Tools': {
        border: 'rgba(204, 226, 244, 0.18)',
        background: 'rgba(204, 226, 244, 0.08)',
        hoverBorder: 'rgba(204, 226, 244, 0.36)',
        hoverBackground: 'rgba(204, 226, 244, 0.16)',
        activeBorder: 'rgba(204, 226, 244, 0.56)',
        activeBackground: 'rgba(204, 226, 244, 0.22)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      Multisig: {
        border: 'rgba(229, 213, 243, 0.18)',
        background: 'rgba(229, 213, 243, 0.08)',
        hoverBorder: 'rgba(229, 213, 243, 0.36)',
        hoverBackground: 'rgba(229, 213, 243, 0.16)',
        activeBorder: 'rgba(229, 213, 243, 0.56)',
        activeBackground: 'rgba(229, 213, 243, 0.22)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      'UX Research': {
        border: 'rgba(221, 230, 241, 0.18)',
        background: 'rgba(221, 230, 241, 0.08)',
        hoverBorder: 'rgba(221, 230, 241, 0.36)',
        hoverBackground: 'rgba(221, 230, 241, 0.16)',
        activeBorder: 'rgba(221, 230, 241, 0.56)',
        activeBackground: 'rgba(221, 230, 241, 0.22)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      Annotation: {
        border: 'rgba(244, 224, 203, 0.18)',
        background: 'rgba(244, 224, 203, 0.08)',
        hoverBorder: 'rgba(244, 224, 203, 0.36)',
        hoverBackground: 'rgba(244, 224, 203, 0.16)',
        activeBorder: 'rgba(244, 224, 203, 0.56)',
        activeBackground: 'rgba(244, 224, 203, 0.22)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      NLP: {
        border: 'rgba(206, 234, 223, 0.18)',
        background: 'rgba(206, 234, 223, 0.08)',
        hoverBorder: 'rgba(206, 234, 223, 0.36)',
        hoverBackground: 'rgba(206, 234, 223, 0.16)',
        activeBorder: 'rgba(206, 234, 223, 0.56)',
        activeBackground: 'rgba(206, 234, 223, 0.22)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      'Margin Trading': {
        border: 'rgba(244, 213, 206, 0.18)',
        background: 'rgba(244, 213, 206, 0.08)',
        hoverBorder: 'rgba(244, 213, 206, 0.36)',
        hoverBackground: 'rgba(244, 213, 206, 0.16)',
        activeBorder: 'rgba(244, 213, 206, 0.56)',
        activeBackground: 'rgba(244, 213, 206, 0.22)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      'Usability Revamp': {
        border: 'rgba(244, 217, 228, 0.18)',
        background: 'rgba(244, 217, 228, 0.08)',
        hoverBorder: 'rgba(244, 217, 228, 0.36)',
        hoverBackground: 'rgba(244, 217, 228, 0.16)',
        activeBorder: 'rgba(244, 217, 228, 0.56)',
        activeBackground: 'rgba(244, 217, 228, 0.22)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      'Blockchain Infra': {
        border: 'rgba(209, 218, 246, 0.18)',
        background: 'rgba(209, 218, 246, 0.08)',
        hoverBorder: 'rgba(209, 218, 246, 0.36)',
        hoverBackground: 'rgba(209, 218, 246, 0.16)',
        activeBorder: 'rgba(209, 218, 246, 0.56)',
        activeBackground: 'rgba(209, 218, 246, 0.22)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      DeFi: {
        border: 'rgba(206, 232, 214, 0.18)',
        background: 'rgba(206, 232, 214, 0.08)',
        hoverBorder: 'rgba(206, 232, 214, 0.36)',
        hoverBackground: 'rgba(206, 232, 214, 0.16)',
        activeBorder: 'rgba(206, 232, 214, 0.56)',
        activeBackground: 'rgba(206, 232, 214, 0.22)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      PropTech: {
        border: 'rgba(235, 222, 206, 0.18)',
        background: 'rgba(235, 222, 206, 0.08)',
        hoverBorder: 'rgba(235, 222, 206, 0.36)',
        hoverBackground: 'rgba(235, 222, 206, 0.16)',
        activeBorder: 'rgba(235, 222, 206, 0.56)',
        activeBackground: 'rgba(235, 222, 206, 0.22)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      Analytics: {
        border: 'rgba(212, 232, 244, 0.18)',
        background: 'rgba(212, 232, 244, 0.08)',
        hoverBorder: 'rgba(212, 232, 244, 0.36)',
        hoverBackground: 'rgba(212, 232, 244, 0.16)',
        activeBorder: 'rgba(212, 232, 244, 0.56)',
        activeBackground: 'rgba(212, 232, 244, 0.22)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
      'Enterprise Banking': {
        border: 'rgba(232, 223, 212, 0.18)',
        background: 'rgba(232, 223, 212, 0.08)',
        hoverBorder: 'rgba(232, 223, 212, 0.36)',
        hoverBackground: 'rgba(232, 223, 212, 0.16)',
        activeBorder: 'rgba(232, 223, 212, 0.56)',
        activeBackground: 'rgba(232, 223, 212, 0.22)',
        text: 'rgba(255, 248, 251, 0.8)',
      },
    };
export const availableCaseStudyTags = Array.from(new Set(caseStudies.flatMap((study) => study.tags)));
export const caseStudyFilterGroups = (Object.keys(caseStudyFilterLabels) as CaseStudyFilterKey[]).map((key) => {
      const preferredOptions = caseStudyFilterOptionOrder[key].filter((option) =>
        availableCaseStudyTags.includes(option),
      )
      const remainingOptions = availableCaseStudyTags.filter(
        (option) => caseStudyTagCategories[option] === key && !preferredOptions.includes(option),
      )

      return {
        key,
        label: caseStudyFilterLabels[key],
        options: [...preferredOptions, ...remainingOptions],
      }
    });
