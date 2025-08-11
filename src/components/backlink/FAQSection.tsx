import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export const FAQSection = () => {
  const faqs = [
    {
      question: 'What does a backlink audit include?',
      answer: 'A comprehensive backlink audit includes analysis of all your existing backlinks, identification of toxic/spammy links, domain authority assessment, anchor text distribution analysis, competitor backlink comparison, and a detailed action plan with prioritized recommendations.'
    },
    {
      question: 'How long does a backlink cleanup take?',
      answer: 'The audit itself takes 3-5 business days. Cleanup implementation varies: disavow file submission is immediate, but seeing results can take 2-6 months as Google processes the changes. Link removal outreach typically takes 2-4 weeks for responses.'
    },
    {
      question: 'Do you guarantee rankings?',
      answer: 'I don\'t guarantee specific ranking positions as SEO involves many factors beyond backlinks. However, I do guarantee that my audit will identify actionable issues and opportunities. Most clients see measurable improvements in domain authority and organic visibility within 3-6 months.'
    },
    {
      question: 'How much does a backlink audit cost?',
      answer: 'Audit-only services start at ₹15,000. Full audit + cleanup packages begin at ₹35,000. Complete off-page strategy including ongoing link building starts at ₹75,000. All packages include detailed reporting and recommendations.'
    },
    {
      question: 'What tools do you use for backlink analysis?',
      answer: 'I use a combination of premium tools including Ahrefs, SEMrush, Moz, Majestic, and Google Search Console. This multi-tool approach ensures comprehensive coverage and cross-verification of backlink data for the most accurate analysis.'
    },
    {
      question: 'Can you remove toxic backlinks for me?',
      answer: 'Yes, I handle the entire cleanup process including creating disavow files, submitting them to Google, and conducting outreach to webmasters for link removal. I also provide ongoing monitoring to catch new toxic links before they cause damage.'
    },
    {
      question: 'How do you identify toxic backlinks?',
      answer: 'I evaluate backlinks based on domain authority, relevance to your niche, spam score, anchor text patterns, link context, and Google\'s quality guidelines. Links from PBNs, link farms, irrelevant directories, and low-quality sites are flagged for removal.'
    },
    {
      question: 'Do you build new backlinks or just clean up existing ones?',
      answer: 'I offer both services. My audit packages focus on cleanup and optimization of existing links. The full off-page strategy includes white-hat link building through content marketing, digital PR, resource page outreach, and strategic partnerships.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about professional backlink audits.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6">
              I'm happy to discuss your specific backlink challenges and how I can help.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Schedule a Free Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};