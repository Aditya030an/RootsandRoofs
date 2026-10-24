import LegalPage from "./LegalPage";

// NOTE FOR REVIEW: the sections below describe what the site actually does
// today (the two forms in Contact.jsx post to the Google Apps Script endpoint
// in VITE_GOOGLE_SHEET_ID; there are no analytics or advertising scripts on
// the site). Before publishing, have this signed off and fill in the gaps that
// depend on the business rather than the code:
//   - registered entity name and address
//   - a concrete data-retention period
//   - the named grievance officer, if one is appointed

const sections = [
  {
    heading: "1. Who this policy covers",
    body: [
      "This policy explains how Roots & Roofs handles the personal information you share with us through this website, including the Quick Contact form and the Property Listing form.",
      "By using this website or submitting either form, you agree to the practices described here.",
    ],
  },
  {
    heading: "2. Information we collect",
    body: [
      "We only collect what you type into our forms. We do not ask for, and you should never send us, financial account details, card numbers or government ID numbers through this website.",
      "Through the Quick Contact form:",
      ["Your name", "Your phone number", "Your email address", "Your message"],
      "Through the Property Listing form:",
      [
        "Name of the property owner",
        "Whether you want to rent out or sell",
        "Property type and size",
        "City and locality of the property",
        "Your phone number and email address",
        "Your consent to be contacted",
      ],
    ],
  },
  {
    heading: "3. How we use your information",
    body: [
      "We use the details you provide to respond to your enquiry, to understand what you are looking for, to arrange and follow up on property visits, and to help you complete a transaction.",
      "We may contact you by phone, WhatsApp, SMS or email about the enquiry you raised. We do not sell your personal information.",
    ],
  },
  {
    heading: "4. Where your information goes",
    body: [
      "Form submissions are recorded in a Google Sheet through Google Workspace, which acts as our record of enquiries. Access to that record is limited to the Roots & Roofs team members who need it to serve you.",
      "We may share your details with a property owner, builder or their authorised representative where that is necessary to progress the specific enquiry you made. We may also disclose information where we are required to by law or by a regulatory authority.",
    ],
  },
  {
    heading: "5. Cookies and tracking",
    body: [
      "This website does not run advertising or analytics trackers, and it does not set marketing cookies. Your browser may store small amounts of data locally so the site works correctly.",
    ],
  },
  {
    heading: "6. How long we keep it",
    body: [
      "We keep enquiry details for as long as we need them to respond to you and to meet our legal, accounting and regulatory obligations. When they are no longer needed for either purpose, we delete them.",
    ],
  },
  {
    heading: "7. Your choices",
    body: [
      "You can ask us to tell you what information we hold about you, to correct it if it is wrong, or to delete it. You can also ask us to stop contacting you at any time.",
      "To make any of these requests, email us at enquiry@rootsandroofs.in and we will action it.",
    ],
  },
  {
    heading: "8. Keeping your information safe",
    body: [
      "We take reasonable steps to protect the information you share with us. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "9. Changes to this policy",
    body: [
      "We may update this policy from time to time. The date at the top of this page shows when it was last changed.",
    ],
  },
  {
    heading: "10. Contact us",
    body: [
      "If you have a question or a complaint about how we handle your information, reach us at:",
      ["Email: enquiry@rootsandroofs.in", "Phone: +91 92036 26426"],
    ],
  },
];

const PrivacyPolicy = () => (
  <LegalPage
    title="Privacy Policy"
    updated="23 September 2026"
    intro="Roots & Roofs helps people buy, sell, rent and lease property in Madhya Pradesh. This policy sets out what personal information we collect through this website, why we collect it, and what we do with it."
    sections={sections}
  />
);

export default PrivacyPolicy;
