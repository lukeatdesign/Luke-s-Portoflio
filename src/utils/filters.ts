import { CSSProperties } from "react";
import { caseStudyFilterColors } from "../constants";
import { CaseStudyFilterState } from "../types";

export function createEmptyCaseStudyFilters(): CaseStudyFilterState {
    return {
    devices: [],
    projectType: [],
    industries: [],
    }
}

export function getCaseStudyFilterChipStyle(option: string): CSSProperties {
    const theme = caseStudyFilterColors[option];
    if (!theme) {
    return {}
    }

    return {
    ['--filter-chip-border' as string]: theme.border,
    ['--filter-chip-background' as string]: theme.background,
    ['--filter-chip-hover-border' as string]: theme.hoverBorder,
    ['--filter-chip-hover-background' as string]: theme.hoverBackground,
    ['--filter-chip-active-border' as string]: theme.activeBorder,
    ['--filter-chip-active-background' as string]: theme.activeBackground,
    ['--filter-chip-text' as string]: theme.text,
    } as CSSProperties
}
