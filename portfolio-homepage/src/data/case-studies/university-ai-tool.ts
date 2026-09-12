import type { CaseStudy } from "./types";

export const universityAiTool: CaseStudy = {
  slug: "university-ai-tool",
  title: "University Digital Onboarding and AI Search Concept",
  label: "UNIVERSITY CX & AI TOOLS · 2025–2026",
  headline: "Scattered student services. One AI-powered hub.",
  description:
    "An AI-powered search and service hub that lowers support pressure and helps students find what they need on their own.",
  thumbnail: "/case/university-new.png",
  thumbnailAlt: "University CX and AI tools",
  ctaLabel: "Explore the full case study",
  otherCaseStudyDescription:
    "Designed a smarter search and service hub so students can find guidance and support without getting lost in fragmented systems.",

  intro:
    "This project was a unified digital portal for a major university, built to help students, staff, and visitors find information and support in one place, instead of navigating a fragmented mix of separate sites and systems. The portal combines AI-powered search with a clear range of support options, so people can pick whatever fits their situation: quick, instant answers through AI search, live chat for urgent issues, service request forms for more complex questions, physical service point details for in-person help, and quick links to the most-used daily tools and services.",
  roleLabel: "Senior UX & Product Designer",
  focusLabel: "UX/UI Design, AI search flow, service architecture, Design System adoption, post-launch iteration",

  gallery: [
    { src: "/case/uni-homepage.png", alt: "AI assistant homepage", caption: "AI assistant", width: 1332, height: 2000 },
    {
      src: "/case/uni-search-results.png",
      alt: "AI search results, desktop",
      caption: "AI search results",
      width: 1904,
      height: 2000,
    },
    { src: "/case/uni-mobile-home.png", alt: "AI assistant, mobile", caption: "Mobile home", width: 369, height: 2000 },
    {
      src: "/case/uni-mobile-search.png",
      alt: "AI search results, mobile",
      caption: "Mobile search",
      width: 410,
      height: 1851,
    },
  ],

  impactIntro: "These impacts were confirmed through user interviews and surveys carried out after launch.",
  impactCards: [
    {
      number: "01",
      title: "Faster and safer help",
      body: "People found answers much faster, whether through AI search, messaging, forms, or an in-person service desk, while private staff data stayed safe behind a login.",
    },
    {
      number: "02",
      title: "Less pressure on staff channels",
      body: "As AI search and self-service handled more of the simple, everyday questions, staff had more room to focus on situations that genuinely needed a person's attention.",
    },
    {
      number: "03",
      title: "Accessible and mobile from day one",
      body: "Because the service was designed to be accessible and mobile-friendly from the start, more people could use it independently, including on their phone, on the go, or with assistive technology.",
    },
    {
      number: "04",
      title: "A faster start for people who don't yet know their way around",
      body: "For anyone new, whether a first-year student or a visitor, finding the right help used to mean knowing where to look first. Now it takes one entry point instead of navigating the university's structure blindly.",
    },
  ],

  howItStarted: [
    "A major university had information scattered across many different websites, making it hard for students, staff, and visitors to find help.",
    "Service designers had already done the early research and mapped out the initial idea for a central service portal. My job as Senior UX & Product Designer was to turn those early concepts into real screen designs, test them with actual users, and refine them for the first product launch (MVP).",
    "After launch, I stayed on to collect real user feedback and keep improving the service based on how people actually used it.",
  ],

  challenges: [
    {
      number: "01",
      title: "Scattered information",
      body: "Before this project, university services lived across multiple of separate sites and systems, with no shared entry point. Students and staff often didn't know where to start looking, or ended up on the wrong page entirely. I designed a single front page and AI-powered search entry point that brings services together in one place, so people can search in their own words instead of guessing which department's site might have the answer.",
    },
    {
      number: "02",
      title: "Private data surfacing in AI search",
      body: "During my time on the project, we identified a problem where the AI search engine could surface private staff information to visitors who weren't logged in. We flagged this as a priority issue and discussed possible solutions with the team before I left the project. It was later solved with a login prompt: a modal appears as soon as the user starts searching, asking them to log in for broader results. It solves the privacy issue well, and I understand why that solution made sense given the constraints at the time. If I'd still been involved, I might have explored whether that prompt could appear a bit later in the flow, so it interrupts the user less right at the start of their search.",
    },
    {
      number: "03",
      title: "Supporting a new Product Owner",
      body: "Our Product Owner was completely new to software projects and agile development. I stepped in together with our service designer to mentor and support them, helping structure the project backlog, organize user feedback, and write clear tasks for the team.",
    },
    {
      number: "04",
      title: "Encouraging shared components over one-off",
      body: "Some developers ended up building their own custom UI elements instead of using what was already in the Design System, often just because it was faster in the moment, which is a pretty natural thing to happen under a tight timeline. Rather than turning it into a compliance issue, I focused on making it easier to find and reuse existing components, and looped in the Design System team whenever something genuinely new was needed.",
    },
  ],

  whatIWouldDoDifferently: [
    "Set clearer guardrails for the design before handing it off. Looking back, I would have documented a few key UX principles more clearly before leaving the project, so the experience could stay consistent even without me there to weigh in on changes. After I left, a few small things ended up looking different from how they were originally designed, for example, search results appearing below the search bar instead of in the same visible area, so it's not clear when results are loading. Small things like that can add up over time. It taught me something useful: it's not just the design itself that needs documenting, but the reasoning behind it, so that reasoning can still guide decisions even when I'm not in the room anymore.",
    "Set clearer success metrics from the start, beyond basic usage data. We had Matomo (a privacy-focused web analytics tool) in place, which gave us useful data on things like page views and click behavior. We did actually plan to go further than that, defining metrics that could tell us whether the service was solving the right problem for users, not just how it was being used, but we never managed to get it implemented.",
    "Looking back, I'd want to solve this without adding extra burden on users, for example, a lightweight, optional feedback prompt after key moments like an AI search result, rather than a separate survey, or looking at indirect signals we already had access to, like whether staff contact volume for common questions changed over time. Having something like this in place from the start would have given us a clearer way to answer the real question: is this actually helping people, not just are people using it.",
    "Make design's role in the process a bit more structured, not just reactive. I stayed closely involved throughout, checking in regularly with developers and the scrum master to keep things aligned. Looking back, I'd set up a few lightweight checkpoints from day one: a short design review before UX-related changes ship, a clear point of contact for technical questions, and key UX reasoning captured directly in the tickets developers already work from, rather than in a separate document nobody has time to read. None of that has to slow a tight timeline down, if it's built into the workflow from the start.",
  ],

  methods: ["Journey Mapping", "User Interviews", "Co-design workshops", "Usability Testing"],
};
