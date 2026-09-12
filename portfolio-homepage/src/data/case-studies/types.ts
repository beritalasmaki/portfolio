// Shared case-study content shape. A new case study is a new file in this
// folder that satisfies `CaseStudy`, plus one line added to `registry.ts` —
// a content task, not a layout task.
//
// Only the Summary fields are required. A case study with nothing more than
// that renders the minimal /usecases/[slug] template (hero + "other case
// studies") instead of 404ing — see design-system.ts (in progress, no full
// content yet) vs. any of the other four for the minimal vs. full shape in
// practice.

export type CaseStudySlug =
  | "industrial-tool"
  | "university-ai-tool"
  | "education-platform"
  | "environmental-data-tool"
  | "design-system";

/** The subset of a case study's content used by homepage/summary cards. */
export type CaseStudySummary = {
  slug: CaseStudySlug;
  /** Full project title, used as the detail page's <h1>. */
  title: string;
  /** Mono eyebrow label, e.g. "INDUSTRIAL DATA TOOLS · 2020–2023". */
  label: string;
  /** Homepage card headline. Use "\n" for an intentional line break. */
  headline: string;
  /** Homepage card body copy. */
  description: string;
  thumbnail: string;
  thumbnailAlt: string;
  ctaLabel: string;
  /**
   * Body copy for this study's card in *other* case studies' "Other case
   * studies" cross-link section — deliberately separate copy from the
   * homepage card `description` (shorter, written for that context).
   */
  otherCaseStudyDescription: string;
  /**
   * Short pill label overlaid on the thumbnail's top-left corner, e.g.
   * "Personal project". Omit for client work.
   */
  tag?: string;
  /**
   * When set, the thumbnail area renders this text in a dashed placeholder
   * box instead of the `thumbnail` image — for a project still in progress
   * with no screenshot to show yet. `thumbnail`/`thumbnailAlt` are unused
   * (but still required) while this is set.
   */
  placeholderLabel?: string;
  /** Optional external link to a live/deployed version of the project. */
  liveUrl?: string;
};

export type ImpactCard = {
  number: string;
  title: string;
  body: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  /** Intrinsic pixel dimensions, for next/image's layout-shift-free sizing. */
  width: number;
  height: number;
};

export type ChallengeSubsection = {
  number: string;
  title: string;
  body: string;
};

/** Everything beyond the summary — present only on fully-written case studies. */
export type CaseStudyFullContent = {
  intro: string;
  roleLabel: string;
  focusLabel: string;
  gallery: GalleryImage[];
  impactIntro: string;
  impactCards: ImpactCard[];
  /** One or more paragraphs, in order. */
  howItStarted: string[];
  challenges: ChallengeSubsection[];
  /** One or more paragraphs, in order. */
  whatIWouldDoDifferently: string[];
  methods: string[];
};

export type CaseStudy = CaseStudySummary & Partial<CaseStudyFullContent>;

/** True when a case study has its full detail content written. */
export function hasFullContent(
  study: CaseStudy
): study is CaseStudy & CaseStudyFullContent {
  return study.intro !== undefined && study.gallery !== undefined;
}
