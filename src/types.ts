import { ComponentType, SVGProps } from "react";
import { brandLogoAnimations } from "./constants";

export type Route = | { type: 'home' }
      | { type: 'case-study'; slug: string }
      | { type: 'page'; slug: string }
      | { type: 'chat' };
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
export type CaseStudyFilterKey = 'devices' | 'projectType' | 'industries';
export type CaseStudyFilterState = Record<CaseStudyFilterKey, string[]>;
export type ImagePreview = {
      src: string
      alt: string
      caption?: string
    };
export type BrandLogoAnimation = (typeof brandLogoAnimations)[number];
