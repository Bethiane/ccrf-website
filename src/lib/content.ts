export type Initiative = {
  slug: string;
  status: "Current" | "Past" | "Upcoming";
  year: string;
  title: string;
  kicker: string;
  summary: string;
  beneficiaries: string;
  impact: string[];
  images: string[];
  cta: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  tag: string;
};

export const donation = {
  momo: "0784084535",
  momoName: "Paradizo Peace",
  equity: "4012112846633",
  equityName: "Peace & Christian"
};

export const stats = [
  { value: "245+", label: "people supported" },
  { value: "60", label: "volunteers mobilized" },
  { value: "12", label: "students in the 2025–2026 drive" },
  { value: "04", label: "major initiatives conducted" }
];

export const initiatives: Initiative[] = [
  {
    slug: "scholarship-drive-2025-2026",
    status: "Past",
    year: "2025-2026",
    title: "CCRF Scholarship Drive",
    kicker: "Education opens doors",
    summary:
      "A scholarship program focused on helping determined learners remain in school with fees, supplies, backpacks, and community support.",
    beneficiaries:
      "Twelve students from vulnerable families in Rwamagana District were the focus of this cycle. CCRF presents them as a group to protect privacy while still showing the real impact donors make possible.",
    impact: [
      "Keeps learners enrolled instead of losing their place in school.",
      "Provides backpacks and essential school materials.",
      "Connects students with volunteers who check in, encourage, and serve."
    ],
    images: ["/images/ccrf-19.jpeg", "/images/ccrf-20.jpeg", "/images/ccrf-21.jpeg", "/images/ccrf-22.jpeg", "/images/ccrf-23.jpeg"],
    cta: "Sponsor a learner"
  },
  {
    slug: "may-health-insurance-initiative",
    status: "Past",
    year: "May 2025",
    title: "May Initiative: Mutuelle de Sante",
    kicker: "Healthcare access for families",
    summary:
      "A community campaign focused on helping families access health insurance so illness does not become a financial crisis.",
    beneficiaries:
      "Two hundred people were supported through medical insurance contributions, with priority given to families facing hardship.",
    impact: [
      "Funded medical insurance for 200 people.",
      "Rallied donors and volunteers around practical healthcare access.",
      "Closed the campaign with public gratitude and transparent contribution updates."
    ],
    images: ["/images/ccrf-03.jpeg", "/images/ccrf-02.jpeg"],
    cta: "Support health access"
  },
  {
    slug: "scholarship-edition-two",
    status: "Past",
    year: "2024-2025",
    title: "Scholarship Edition 2",
    kicker: "Keeping the journey alive",
    summary:
      "The second scholarship edition expanded CCRF's education work after supporters helped ten students continue their school journey.",
    beneficiaries:
      "Ten young learners kept their place in school in the previous cycle, with the foundation adding more support through supplies and follow-up visits.",
    impact: [
      "Supported learners with school continuity needs.",
      "Delivered backpacks and learning materials.",
      "Strengthened donor confidence through visible updates."
    ],
    images: ["/images/ccrf-16.jpeg", "/images/ccrf-17.jpeg", "/images/ccrf-18.jpeg"],
    cta: "Keep students learning"
  },
  {
    slug: "two-years-of-impact",
    status: "Past",
    year: "2023-2025",
    title: "Two Years of Purpose",
    kicker: "From a simple dream to sustained service",
    summary:
      "A two-year recap honoring the volunteers, donors, families, and local partners who helped CCRF grow from a small act of kindness into repeated community initiatives.",
    beneficiaries:
      "Families in need, children with disabilities at HVP Gatagara in Rwamagana, scholarship beneficiaries, and community members supported through healthcare access.",
    impact: [
      "Supported two families in need during the foundation stage.",
      "Visited children with disabilities at HVP Gatagara.",
      "Built a volunteer community around donation, sharing, and service."
    ],
    images: ["/images/ccrf-08-enhanced.jpeg", "/images/ccrf-10.jpeg", "/images/ccrf-13.jpeg", "/images/ccrf-14.jpeg"],
    cta: "Join the next chapter"
  },
  {
    slug: "one-goat-can-change-everything",
    status: "Past",
    year: "2026",
    title: "One Goat Can Change Everything",
    kicker: "Income, food, and dignity",
    summary:
      "A livelihood initiative built around livestock support, helping families create a reliable source of nutrition and income.",
    beneficiaries:
      "The initiative focused on vulnerable households, with practical livestock support designed to create recurring benefits and financial stability.",
    impact: [
      "Creates a source of income for families.",
      "Builds resilience beyond one-time giving.",
      "Invites the community to sponsor goats and follow the family journey."
    ],
    images: ["/images/ccrf-29-enhanced.jpeg", "/images/ccrf-30-enhanced.jpeg", "/images/ccrf-31.jpeg", "/images/ccrf-32.jpeg"],
    cta: "Give livestock support"
  },
  {
    slug: "kwibuka-unity-and-healing",
    status: "Past",
    year: "June 2025",
    title: "Kwibuka: Unity and Healing",
    kicker: "Remembering while building forward",
    summary:
      "A moment of reflection and solidarity with community leaders in Kigabiro Sector, honoring remembrance as a call to serve, heal, and build hope.",
    beneficiaries:
      "Community members, youth, and local leaders gathered around unity, peace, remembrance, and shared responsibility.",
    impact: [
      "Joined the Executive of Kigabiro Sector and IB UKA leaders.",
      "Created space for reflection, solidarity, and healing.",
      "Reaffirmed CCRF's commitment to uplift, comfort, and remember."
    ],
    images: ["/images/ccrf-04-enhanced.jpeg", "/images/ccrf-05.jpeg", "/images/ccrf-06.jpeg", "/images/ccrf-07-enhanced.jpeg"],
    cta: "Stand for unity"
  }
];

export const gallery: GalleryImage[] = [
  { src: "/images/ccrf-30-enhanced.jpeg", alt: "Children celebrating during a CCRF scholarship visit", tag: "Education" },
  { src: "/images/ccrf-26-enhanced.jpeg", alt: "Group photo with students and volunteers", tag: "Community" },
  { src: "/images/ccrf-23.jpeg", alt: "Scholarship gratitude poster with student", tag: "Donors" },
  { src: "/images/ccrf-24.jpeg", alt: "CCRF volunteers serving together", tag: "Volunteers" },
  { src: "/images/ccrf-15.jpeg", alt: "School backpacks for scholarship learners", tag: "Scholarship" },
  { src: "/images/ccrf-17.jpeg", alt: "Volunteer standing with a young learner", tag: "Support" },
  { src: "/images/ccrf-28.jpeg", alt: "CCRF team members standing outdoors", tag: "Team" },
  { src: "/images/ccrf-29-enhanced.jpeg", alt: "Family with a goat in livelihood campaign artwork", tag: "Livelihood" },
  { src: "/images/ccrf-06.jpeg", alt: "Speaker addressing community during remembrance event", tag: "Healing" },
  { src: "/images/ccrf-12.jpeg", alt: "Medical insurance campaign milestone", tag: "Health" },
  { src: "/images/ccrf-27.jpeg", alt: "Volunteer recruitment campaign", tag: "Volunteer" },
  { src: "/images/ccrf-01-enhanced.jpeg", alt: "More volunteers campaign image", tag: "Join" }
];
