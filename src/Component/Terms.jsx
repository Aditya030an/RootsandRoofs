import LegalPage from "./LegalPage";

// NOTE FOR REVIEW: this is a plain-language starting point describing how the
// site works today. Have it signed off before publishing, and confirm the
// business-specific points that cannot be read off the code:
//   - registered entity name and address
//   - the governing-law / jurisdiction clause below (currently Indore, M.P.)
//   - the RERA registration number, which is currently inconsistent across the
//     site (A-GWL-25-2551 on the home page vs A-GWL-26-2551 on Services)

const sections = [
  {
    heading: "1. Accepting these terms",
    body: [
      "These terms apply to your use of the Roots & Roofs website. By browsing the site, submitting an enquiry or listing a property with us, you accept them.",
      "If you do not agree with these terms, please do not use the site.",
    ],
  },
  {
    heading: "2. What we do",
    body: [
      "Roots & Roofs is a real estate services platform operating in Madhya Pradesh. We list residential, commercial and plot properties, help buyers and tenants find and visit them, and support both sides through documentation and handover.",
      "We charge no brokerage to buyers on listings marked as zero brokerage.",
    ],
  },
  {
    heading: "3. Property information",
    body: [
      "Listing details — including price, area, configuration, amenities, images and floor plans — are provided by property owners, builders or their representatives. We verify listings before publishing them, but details can change and errors can occur.",
      "Everything on this site is indicative and is not an offer or a contract. Before you commit to a transaction, confirm the current price, availability, approvals, title and measurements directly with the owner or builder and satisfy yourself independently.",
      "Images and plans are for illustration. Actual construction, finishes and dimensions may differ.",
    ],
  },
  {
    heading: "4. Using the site",
    body: [
      "You agree to give accurate information when you contact us or list a property, and to use the site only for genuine property enquiries.",
      "You agree not to:",
      [
        "Submit false, misleading or someone else's details",
        "List a property you are not the owner of or authorised to list",
        "Copy, scrape or republish our listings or content for commercial use",
        "Attempt to disrupt, damage or gain unauthorised access to the site",
      ],
    ],
  },
  {
    heading: "5. Being contacted by us",
    body: [
      "When you tick the consent box on our forms, you agree that Roots & Roofs may contact you about your enquiry by phone, WhatsApp, SMS or email, including where your number is registered on DND.",
      "This consent covers the enquiry you raised. You can withdraw it at any time by emailing enquiry@rootsandroofs.in.",
    ],
  },
  {
    heading: "6. Our content",
    body: [
      "The Roots & Roofs name, logo, site design and written content belong to us and are protected by law. You may not reuse them without our written permission.",
    ],
  },
  {
    heading: "7. Third parties",
    body: [
      "Any transaction you enter into is between you and the property owner, builder or other counterparty. We facilitate and support that transaction but we are not a party to it, and we are not responsible for how the counterparty performs.",
      "The site may link to other websites. We do not control those sites and are not responsible for their content.",
    ],
  },
  {
    heading: "8. Limits on our liability",
    body: [
      "We provide the site and our services with reasonable care and skill, but we do not guarantee that the site will always be available or free of errors.",
      "To the extent the law allows, we are not liable for indirect or consequential loss arising from your use of the site, or from a decision you took in reliance on listing information you did not independently verify.",
    ],
  },
  {
    heading: "9. Changes",
    body: [
      "We may update these terms from time to time. The date at the top of this page shows when they were last changed. Continuing to use the site after a change means you accept the updated terms.",
    ],
  },
  {
    heading: "10. Governing law",
    body: [
      "These terms are governed by the laws of India. The courts at Indore, Madhya Pradesh have exclusive jurisdiction over any dispute arising from them.",
    ],
  },
  {
    heading: "11. Contact us",
    body: [
      "For any question about these terms:",
      ["Email: enquiry@rootsandroofs.in", "Phone: +91 92036 26426"],
    ],
  },
];

const Terms = () => (
  <LegalPage
    title="Terms & Conditions"
    updated="23 September 2026"
    intro="These terms set out the basis on which you can use the Roots & Roofs website and the services we offer through it."
    sections={sections}
  />
);

export default Terms;
