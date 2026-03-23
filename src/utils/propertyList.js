const propertyList = [
  {
    id: 1,
    title: "4 BHK Ultra-Luxury Apartment",
    location: "Geeta Bhawan, Indore",
    price: 31500000,
    pricePerSqFt: 7500,
    type: "Buy",
    bhk: "4 BHK",
    area: "4200 sq.ft",
    verified: true,
    parking: true,
    bathrooms: 4,
    propertyType: "Apartment",

    furnishing: "Luxury",
    balcony: true,
    servantRoom: true,
    construction: "Premium",
    description:
      "Spacious 4 BHK ultra-luxurious apartment with large balcony and servant room. Located in prime city centre Geeta Bhawan, perfect for families seeking luxury living.",
    city: "Indore",
    state: "Madhya Pradesh",
    listingType: "Luxury",
    contact: true,

    // ⭐ Key Highlights
    keyHighlights: [
      "Spacious layout with large balcony",
      "Servant room for added convenience",
      "Premium construction & elegant design",
      "Located in the prime city centre – Geeta Bhawan",
    ],

    images: [
      "/propertyList/property1/img1.jpeg",
      "/propertyList/property1/img2.jpeg",
      "/propertyList/property1/img3.jpeg",
      "/propertyList/property1/img4.jpeg",
      "/propertyList/property1/img5.jpeg",
      "/propertyList/property1/img6.jpeg",
      "/propertyList/property1/img7.jpeg",
      "/propertyList/property1/img8.jpeg",
      "/propertyList/property1/img9.jpeg",
      "/propertyList/property1/img10.jpeg",
      "/propertyList/property1/img11.jpeg",
      "/propertyList/property1/img12.jpeg",
      "/propertyList/property1/img13.jpeg",
      "/propertyList/property1/img14.jpeg",
      "/propertyList/property1/img15.jpeg",
      "/propertyList/property1/img16.jpeg",
      "/propertyList/property1/img17.jpeg",
    ],

    // 📄 PDF Layout
    floorPlan: {
      image: "/propertyList/property1/floorplan.png", // converted image from PDF
      pdf: "/pdfs/vidhya-tower-2.pdf", // original PDF
    },
  },
  {
  id: 101,
  title: "Madhuvan by Micro Mitti",
  location: "Jhalaria Road, Indore",

  city: "Indore",
  state: "Madhya Pradesh",
  type: "Buy",
  propertyType: "Township",

  price: 0,
  pricePerSqFt: 0,

  area:" 30 Acres",
  verified: true,
  featured: true,
  readyToMove: true,

  description:
    "Forest-inspired residential township designed for modern and healthy living.",

  aboutProject: `Micro Mitti Madhuban is an innovative, forest-inspired residential township spread over 30 acres in Indore, designed to accommodate 450 families. It blends nature with modern living, promoting clean air, greenery, and wellness.`,

 keyHighlights: [
  {
    title: "Forest-Inspired Design",
    description:
      "The township is conceptualized as a natural forest environment where sunlight and fresh air flow freely into every home and garden, creating a serene atmosphere for residents.",
  },

  {
    title: "Plot and Layout Features",
    points: [
      "Plots range between 1250 sq. ft. to 2400 sq. ft. with two-way east-west orientation.",
      "Roads are 10.5 to 12 meters wide, ensuring accessibility and ventilation.",
      "Each home includes a backyard garden providing additional green open space and natural light.",
    ],
  },

  {
    title: "Award-Winning Architecture",
    points: [
      "The Crescent Club has received the World Architecture Community Award in Singapore.",
      "Designed by India’s leading architect Sanjay Puri.",
    ],
  },

  {
    title: "The Crescent Club Amenities",
    points: [
      "Spans 35,000 sq. ft. with 17,000 sq. ft. private club and garden each.",
      "Includes swimming pool, terrace garden, banquet hall, and restaurants.",
      "Wellness zones, indoor games, and gymnasium available.",
      "Multi-purpose courts for tennis and football.",
      "Temple and spiritual zones for peace and balance.",
    ],
  },

  {
    title: "Ready-to-Move Villas",
    points: [
      "Option to buy ready-to-move villas.",
      "Designed by Sanjay Puri.",
      "Developed under Micro Mitti’s quality standards.",
    ],
  },

  {
    title: "Connectivity and Location",
    points: [
      "Accessible via Omex City Road, MR 111 Road, and Jhalaria Main Road.",
      "Close to Phoenix Citadel Mall and Emerald International School.",
      "Well connected to MR 12 Road and Airport.",
      "Surrounded by premium colonies, schools, hospitals, and clubs.",
    ],
  },
],

  sections: {
    overview: `The township is designed as a natural forest ecosystem where sunlight and fresh air flow into every home.`,

    amenities: [
      "Swimming pool",
      "Terrace garden",
      "Banquet hall",
      "Restaurants",
      "Gymnasium",
      "Indoor games",
      "Tennis & football courts",
      "Temple & spiritual zones",
    ],

    specifications: [
      "Plot sizes: 1250 – 2400 sq.ft.",
      "Road width: 10.5m – 12m",
      "East-West facing plots",
      "Private backyard gardens",
    ],

    connectivity: [
      "Connected via MR-111 Road",
      "Close to Jhalaria Main Road",
      "Near Phoenix Citadel Mall",
      "Near Emerald International School",
      "Easy access to Airport",
    ],

    vision: [
      "Sustainable living",
      "Healthy environment with clean air",
      "Community-focused lifestyle",
      "Nature-integrated design",
    ],
  },

  projectData: [
    { label: "Total Area", value: "30 Acres" },
    { label: "Number of Families", value: "400" },
    { label: "Plot Sizes", value: "1250 - 2400 sq.ft." },
    { label: "Road Width", value: "10.5m - 12m" },
    { label: "Central Courtyard", value: "35,000 sq.ft." },
    { label: "Private Club Area", value: "17,000 sq.ft." },
    { label: "Garden Area", value: "17,000 sq.ft." },
    { label: "Number of Gardens", value: "14" },
    { label: "Main Road Width", value: "75 meters" },
  ],

  // Main Images
  images: [
    "/propertyList/madhuban/img1.png",
    "/propertyList/madhuban/img2.png",
    "/propertyList/madhuban/img3.png",
    "/propertyList/madhuban/img4.png",
    "/propertyList/madhuban/img5.png",
    "/propertyList/madhuban/img6.png",
    "/propertyList/madhuban/img7.png",
    "/propertyList/madhuban/img8.png",
    "/propertyList/madhuban/img9.png",
    "/propertyList/madhuban/img10.png",
    "/propertyList/madhuban/img11.png",
    "/propertyList/madhuban/img12.png",
    "/propertyList/madhuban/img13.png",
    "/propertyList/madhuban/img14.png",
    "/propertyList/madhuban/img15.png",
    "/propertyList/madhuban/img16.png",
    "/propertyList/madhuban/img17.png",
    "/propertyList/madhuban/img18.png",
    "/propertyList/madhuban/img19.png",
    "/propertyList/madhuban/img20.png",
  ],

  // Floor Plan
  floorPlan: {
    image: "/propertyList/madhuban/floorplane.png",
    pdf: "/pdfs/madhuban.pdf",
  },

  // Map
  map: {
    image: "/propertyList/madhuban/mapViewImg.png",
    locationLink: "https://maps.google.com/?q=madhuban+indore",
  },

  // Extra Galleries
  galleries: [
    {
      title: "Ready to Move Villas",
      images: [
        "/propertyList/madhuban/img21.png",
        "/propertyList/madhuban/img22.png",
        "/propertyList/madhuban/img23.png",
        "/propertyList/madhuban/img24.png",
      ],
    },
    // {
    //   title: "Landscape Plan",
    //   images: [
    //     "/propertyList/madhuban/floorplane.png",
    //   ],
    // },
    // {
    //   title: "Development Around Micro Mitti",
    //   images: [
    //     "/propertyList/madhuban/dev.png",
    //   ],
    // },
  ],

  developer: {
    name: "Micro Mitti",
    description:
      "Focused on sustainable, nature-driven township development.",
  },

  disclaimer:
    "All details mentioned are based on project information. Please verify all details by visiting the site and consulting the official team before making a decision.",

  contact: true,
},
  {
    id: 2,
    title: "Modern Sky Apartment",
    location: "AB Road, Indore",
    price: 25000,
    type: "Rent",
    bhk: "2 BHK",
    area: 1200,
    verified: true,
    parking: true,
    bathrooms: 2,
    propertyType: "Apartment",
  },
  {
    id: 3,
    title: "Prime Office Space",
    location: "Sapna Sangeeta, Indore",
    price: 45000,
    type: "Commercial",
    bhk: "Commercial",
    area: 1800,
    verified: false,
    parking: true,
    bathrooms: 2,
    propertyType: "Office",
  },
  {
    id: 4,
    title: "Green Valley Residential Plot",
    location: "Super Corridor, Indore",
    price: 3500000,
    type: "Plot",
    bhk: "Plot",
    area: 2000,
    verified: true,
    parking: false,
    bathrooms: 0,
    propertyType: "Plot",
  },
  {
    id: 5,
    title: "Cozy Studio Apartment",
    location: "Palasia, Indore",
    price: 12000,
    type: "Rent",
    bhk: "1 BHK",
    area: 600,
    verified: true,
    parking: false,
    bathrooms: 1,
    propertyType: "Apartment",
  },
  {
    id: 6,
    title: "Royal Penthouse Suite",
    location: "South Tukoganj, Indore",
    price: 15000000,
    type: "Buy",
    bhk: "5+ BHK",
    area: 3500,
    verified: true,
    parking: true,
    bathrooms: 4,
    propertyType: "Apartment",
  },
  {
    id: 7,
    title: "Spacious Family Flat",
    location: "Nipania, Indore",
    price: 18000,
    type: "Rent",
    bhk: "3 BHK",
    area: 1500,
    verified: false,
    parking: true,
    bathrooms: 2,
    propertyType: "Apartment",
  },
  {
    id: 8,
    title: "Premium Retail Shop",
    location: "MG Road, Indore",
    price: 35000,
    type: "Commercial",
    bhk: "Commercial",
    area: 900,
    verified: true,
    parking: false,
    bathrooms: 1,
    propertyType: "Shop",
  },
  {
    id: 9,
    title: "Elegant Duplex House",
    location: "Scheme 54, Indore",
    price: 12000000,
    type: "Buy",
    bhk: "4 BHK",
    area: 2800,
    verified: true,
    parking: true,
    bathrooms: 3,
    propertyType: "House",
  },
  {
    id: 10,
    title: "Budget Friendly Apartment",
    location: "Rau, Indore",
    price: 8000,
    type: "Rent",
    bhk: "1 BHK",
    area: 500,
    verified: false,
    parking: false,
    bathrooms: 1,
    propertyType: "Apartment",
  },
  {
    id: 11,
    title: "Commercial Hub Plot",
    location: "Bypass Road, Indore",
    price: 8000000,
    type: "Plot",
    bhk: "Plot",
    area: 5000,
    verified: true,
    parking: false,
    bathrooms: 0,
    propertyType: "Plot",
  },
  {
    id: 12,
    title: "Premium Treasure Apartment",
    location: "Treasure Island, Indore",
    price: 9500000,
    type: "Buy",
    bhk: "3 BHK",
    area: 1800,
    verified: true,
    parking: true,
    bathrooms: 2,
    propertyType: "Apartment",
  },
  {
    id: 13,
    title: "Sunrise Villa Estate",
    location: "Bengali Square, Indore",
    price: 11000000,
    type: "Buy",
    bhk: "5+ BHK",
    area: 3200,
    verified: true,
    parking: true,
    bathrooms: 4,
    propertyType: "Villa",
  },
  {
    id: 14,
    title: "Modern Office Tower",
    location: "Vijay Nagar, Indore",
    price: 65000,
    type: "Commercial",
    bhk: "Commercial",
    area: 2500,
    verified: true,
    parking: true,
    bathrooms: 3,
    propertyType: "Office",
  },
  {
    id: 15,
    title: "Compact Studio",
    location: "Race Course Road, Indore",
    price: 10000,
    type: "Rent",
    bhk: "1 BHK",
    area: 450,
    verified: true,
    parking: false,
    bathrooms: 1,
    propertyType: "Apartment",
  },
  {
    id: 16,
    title: "Luxury Bungalow",
    location: "New Palasia, Indore",
    price: 18000000,
    type: "Buy",
    bhk: "5+ BHK",
    area: 4000,
    verified: true,
    parking: true,
    bathrooms: 5,
    propertyType: "House",
  },
  {
    id: 17,
    title: "Garden View Apartment",
    location: "Sukhliya, Indore",
    price: 22000,
    type: "Rent",
    bhk: "2 BHK",
    area: 1100,
    verified: true,
    parking: true,
    bathrooms: 2,
    propertyType: "Apartment",
  },
  {
    id: 18,
    title: "Business Plaza Shop",
    location: "Treasure Island, Indore",
    price: 28000,
    type: "Commercial",
    bhk: "Commercial",
    area: 800,
    verified: false,
    parking: true,
    bathrooms: 1,
    propertyType: "Shop",
  },
  {
    id: 19,
    title: "Agricultural Land Plot",
    location: "Mhow, Indore",
    price: 2500000,
    type: "Plot",
    bhk: "Plot",
    area: 10000,
    verified: true,
    parking: false,
    bathrooms: 0,
    propertyType: "Plot",
  },
  {
    id: 20,
    title: "Executive Apartment",
    location: "AB Road, Indore",
    price: 30000,
    type: "Rent",
    bhk: "3 BHK",
    area: 1600,
    verified: true,
    parking: true,
    bathrooms: 2,
    propertyType: "Apartment",
  },
];

export default propertyList;

// ✨ Luxury Living in the Heart of Indore ✨

// 4 BHK Ultra-Luxurious Apartment available for sale at Vibrant Vidhya Palace, Geeta Bhawan – Indore

// 🏡 Size: 4200 Sq. Ft.
// 💰 Demand: ₹7,500 / Sq. Ft.

// Key Highlights:
// * Spacious layout with large balcony
// * Servant room for added convenience
// * Premium construction & elegant design
// * Located in the prime city centre – Geeta Bhawan

// Perfect for families looking for luxury, space & prime location.

// 📞 For details & site visit, connect with me
