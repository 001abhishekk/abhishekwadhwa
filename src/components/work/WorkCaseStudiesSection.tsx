import React from 'react';

type CaseStudy = {
  title: string;
  org: string;
  discipline: string;
  role: string;
  whatHeDid: string[];
  outcome: string;
};

const primaryAreas: CaseStudy[] = [
  {
    title: 'B2B Demand Generation',
    org: 'SWT Club (current role)',
    discipline: 'B2B Demand Generation',
    role: 'Owned ICP definition, targeting and the enquiry-to-CRM process.',
    whatHeDid: [
      'Defined the ICP: B2B travel agencies, tour operators, consolidators, corporate travel planners, MICE agencies',
      'Identified customer needs — reliable partners, competitive pricing, fast response, operational support',
      'Built the process moving enquiries into a structured CRM and sales pipeline',
    ],
    outcome: '250–300 qualified B2B leads / month (SWT Club).',
  },
  {
    title: 'Paid Acquisition',
    org: 'SWT Club + a separate e-commerce client account',
    discipline: 'Paid Acquisition',
    role: 'Planned and managed Meta/Google performance campaigns.',
    whatHeDid: [
      'Ran B2B lead-generation campaigns for SWT Club on Meta',
      'Separately managed e-commerce conversion campaigns for a different client account',
    ],
    outcome:
      'SWT Club: 3,294 Meta-reported B2B leads across 6 campaigns, 163,999 accounts reached, ₹3.56L spend. Client e-commerce account (not SWT Club): 3,698 purchases across 7 campaigns, ₹7.42L spend, ₹195.72 cost/purchase, as reported by Ads Manager.',
  },
  {
    title: 'Lifecycle Marketing',
    org: 'SWT Club (current role)',
    discipline: 'Lifecycle / Email Marketing',
    role: 'Built and owned email as an owned B2B demand-generation channel.',
    whatHeDid: [
      'Grew the database while managing list health and engagement',
      'Ran and monitored individual campaign performance',
      'Connected email response to commercial follow-up (enquiry → sales → quotation)',
    ],
    outcome:
      'Email database grew from ~9.4K to 25K+. Selected campaigns: Ambre Resort — 9,078 delivered, 8.6% open rate; Masai Mara Guaranteed Departures — 4,181 delivered, 29.8% open rate.',
  },
  {
    title: 'Brand Strategy',
    org: 'SWT Club (current role)',
    discipline: 'Brand Strategy',
    role: 'Created the initial brand strategy and directed its translation into formal guidelines.',
    whatHeDid: [
      'Defined brand direction, aim and vision, brand values and tone of voice',
      'Worked with a designer to translate the strategy into logo system, color system, typography and brand application',
    ],
    outcome: "Brand guideline system adopted as the reference for SWT Club's marketing communication.",
  },
  {
    title: 'Marketing Operations',
    org: 'SWT Club (current role)',
    discipline: 'Marketing Operations',
    role: 'Owned business requirements, workflow logic and coordination — not the technical build.',
    whatHeDid: [
      'Defined business requirements and mapped how the process needed to work (email → CRM → n8n → Kylas → pipeline → sales follow-up → reporting)',
      'Specified business conditions, rules and exceptions',
      'Coordinated with the Kylas implementation team and validated the build against requirements',
    ],
    outcome:
      'Structured lead-operations workflow turning inbound enquiries into a CRM-based sales process. (Kylas handled technical configuration and implementation.)',
  },
];

const supporting: CaseStudy[] = [
  {
    title: 'Product Marketing',
    org: 'SWT Club, SWT Academy, Routes',
    discipline: 'Product Marketing (ICP → Positioning → Messaging)',
    role: 'Translated audience needs into positioning and messaging for three distinct brands.',
    whatHeDid: [
      'SWT Club: curated deals + destination support + relationship-led service, for B2B travel',
      'SWT Academy: practical travel education + industry exposure, for students/early-career audiences',
      'Routes: digital-first visa support + human verification, for travellers/B2B',
    ],
    outcome: 'Distinct, audience-specific positioning documented for each brand.',
  },
  {
    title: 'Sales Enablement',
    org: 'SWT Club (current role)',
    discipline: 'Sales Enablement',
    role: 'Owned B2B sales collateral from ideation through content, messaging and structure.',
    whatHeDid: [
      'Built the SWT Club Corporate Profile and Corporate & MICE Profile',
      'Handled ideation, content/messaging, information architecture and creative direction',
      'Designer handled final visual execution and finishing',
    ],
    outcome: 'Two B2B sales assets in active use for corporate and group-travel conversations.',
  },
  {
    title: 'Industry Channels & Activation',
    org: 'SWT Club, via OTOAI',
    discipline: 'Industry Channel Activation',
    role: 'Coordinated distribution of a campaign through an industry association network.',
    whatHeDid: [
      'Identified the relevant association channel and prepared the campaign communication',
      'Coordinated with OTOAI and shared campaign creative and messaging',
      'Followed up on distribution to the association\'s member network',
    ],
    outcome: 'OTOAI confirmed circulation of the Moscow & St. Petersburg Guaranteed Departures offer to its member network.',
  },
  {
    title: 'SEO & Content',
    org: 'Earlier client projects (not SWT Club)',
    discipline: 'SEO & Technical Content',
    role: 'Ran technical audits, keyword strategy and organic-visibility tracking for prior clients.',
    whatHeDid: [
      'Site audits addressing crawlability, indexing and technical issues',
      'Keyword research by search volume, intent, location and competition',
      'Tracked organic visibility across markets (Canada, US) via Search Console',
    ],
    outcome:
      'Site-health scores improved 80→100 and 77→100 (errors reduced 118→5 and 46→1). Separate client examples: SeedFella 17.2K clicks/584K impressions, Organic India Seeds 55.1K/5.81M. Evidence note: these are earlier client SEO projects, not SWT Club performance figures.',
  },
  {
    title: 'Leadership & Cross-Functional Operations',
    org: 'SWT Club (current role)',
    discipline: 'Team & Cross-Functional Coordination',
    role: 'Translated strategy into coordinated execution across teams and specialists.',
    whatHeDid: [
      'Managed a 3–4 person marketing team',
      'Coordinated across 7 functions — design, website/technical, CRM, sales and operations',
      'Trained 50+ writers/SEO professionals',
    ],
    outcome: 'Operating model: Define → Translate → Coordinate → Execute → Measure → Improve.',
  },
];

const Card = ({ item }: { item: CaseStudy }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <div className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2">{item.discipline}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
    <div className="text-sm text-gray-500 mb-4">{item.org}</div>
    <p className="text-gray-700 text-sm font-medium mb-2">{item.role}</p>
    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
      {item.whatHeDid.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
    <p className="text-gray-800 text-sm bg-blue-50 rounded-lg p-3">
      <span className="font-semibold">Documented outcome: </span>
      {item.outcome}
    </p>
  </div>
);

export const WorkCaseStudiesSection = () => {
  return (
    <section id="marketing-work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Marketing Work</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Organized around the five areas covered on the{' '}
            <a href="/about" className="text-blue-600 underline">
              About page
            </a>
            : B2B demand generation, paid acquisition, lifecycle marketing, brand strategy and marketing
            operations — plus the supporting disciplines that connect them.
          </p>
        </div>

        <div className="mt-12 mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Primary expertise
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {primaryAreas.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>

        <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Supporting disciplines
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supporting.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
