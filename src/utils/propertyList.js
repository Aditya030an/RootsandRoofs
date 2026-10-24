// LEGACY SNAPSHOT — no longer rendered by the site. Properties now come from
// the backend API (MongoDB). This file is kept only as the source for
// server/scripts/seed.js; edit properties in the admin dashboard instead.
const DEFAULT_PROPERTY_VALUES = {
  price: 0,
  pricePerSqFt: 0,
  area: "",
  verified: true,
  featured: false,
  readyToMove: false,
  bathrooms: 0,
  parking: false,
  furnishing: "",
  balcony: false,
  servantRoom: false,
  construction: "",
  listingType: "",
  contact: true,
  keyHighlights: [],
  projectData: [],
  images: [],
  galleries: [],
  floorPlan: { image: "", pdf: "" },
  map: { image: "", locationLink: "" },
  sections: {
    overview: "",
    amenities: [],
    specifications: [],
    connectivity: [],
    vision: [],
  },
  developer: { name: "", description: "" },
  disclaimer:
    "All property details are based on available project images/brochure data. Please verify price, area, availability, approvals and specifications with the official sales team before making a decision.",
};

const withDefaults = (property) => ({
  ...DEFAULT_PROPERTY_VALUES,
  ...property,
  floorPlan: {
    ...DEFAULT_PROPERTY_VALUES.floorPlan,
    ...(property.floorPlan || {}),
  },
  map: {
    ...DEFAULT_PROPERTY_VALUES.map,
    ...(property.map || {}),
  },
  sections: {
    ...DEFAULT_PROPERTY_VALUES.sections,
    ...(property.sections || {}),
  },
  developer: {
    ...DEFAULT_PROPERTY_VALUES.developer,
    ...(property.developer || {}),
  },
});

const rawPropertyList = [
  {
      id: 201,
      title: "Aakash Greens",
      slug: "aakash-greens-sarthak-singapore",
      location: "Indore, Madhya Pradesh",
      city: "Indore",
      state: "Madhya Pradesh",
      type: "Buy",
      propertyType: "Plot",
      bhk: "Plots",
      description:
        "Aakash Greens is a developed plotting colony with approved layout, wide C.C. roads, landscaped garden, secure boundary wall, drainage, water arrangement and street lighting.",
      keyHighlights: [
        {
          title: "Key Highlights of the Project",
          points: [
            "Government-approved, fully legal and developed township",
            "Well-developed, wide roads constructed with modern C.C. technology",
            "Fully secure and safe colony",
            "Green garden with a natural environment",
            "Well-developed colony with all modern amenities",
            "Grand, attractive, and well-designed entrance gate",
            "Secure boundary wall surrounding the entire project",
            "Well-planned drainage system",
            "Excellent water supply system with Narmada pipeline, borewell, and large water tank",
            "Green garden and playground for children",
            "Completely natural and pollution-free environment",
            "Colony planned as per Vastu principles",
            "Attractive street lighting for proper illumination",
            "Easy loan facilities available from various banks",
          ],
        },
      ],
      sections: {
        overview: "Aakash Greens by Sarthak Singapore",
        amenities: [
          {
            title: "Entrance / Landscape",
            img: "/propertyList/Aakash Green by Sarthak Singapore/img2.PNG",
          },
          {
            title: "Central Garden",
            img: "/propertyList/Aakash Green by Sarthak Singapore/img3.PNG",
          },
          {
            title: "Open Green Area",
            img: "/propertyList/Aakash Green by Sarthak Singapore/img4.PNG",
          },
          {
            title: "Landscape Walkway",
            img: "/propertyList/Aakash Green by Sarthak Singapore/img5.PNG",
          },
        ],
        specifications: [
          "Approved and developed colony",
          "Wide C.C. internal roads",
          "Secure boundary wall around the project",
          "Landscaped garden and playground",
          "Drainage line",
          "Water arrangement with pipeline, boring and water tank",
          "Street lighting",
          "Vastu-planned colony layout",
          "Bank loan assistance available as per brochure",
        ],
        connectivity: [],
        vision: [
          "Landscaped garden",
          "Wide internal roads",
          "Open green area",
          "Secure plotted community",
        ],
      },
      projectData: [
        { label: "Project Name", value: "Aakash Greens" },
        { label: "Property Type", value: "Plot" },
        { label: "Location", value: "Indore, Madhya Pradesh" },
        { label: "Developer", value: "Sarthak Singapore" },
      ],
      images: [
          "/propertyList/Aakash Green by Sarthak Singapore/img1.PNG",
          // "/propertyList/Aakash Green by Sarthak Singapore/img2.PNG",
          // "/propertyList/Aakash Green by Sarthak Singapore/img3.PNG",
          // "/propertyList/Aakash Green by Sarthak Singapore/img4.PNG",
          // "/propertyList/Aakash Green by Sarthak Singapore/img5.PNG",
          "/propertyList/Aakash Green by Sarthak Singapore/img6.PNG",
          "/propertyList/Aakash Green by Sarthak Singapore/img7.PNG",
          "/propertyList/Aakash Green by Sarthak Singapore/img8.PNG",
          "/propertyList/Aakash Green by Sarthak Singapore/img9.PNG",

      ],
      floorPlan: {
        image: "/propertyList/Aakash Green by Sarthak Singapore/floorplane.PNG",
        pdf: "",
      },
      map: {
        image: "",
        locationLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.1374989224523!2d75.77316963488768!3d22.746389999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630100198effaf%3A0xf0d7d0f0e060b7af!2sAakash%20greens!5e1!3m2!1sen!2sin!4v17804１８６５３８３７!5m２！１sen！２sin!4v1780419116420!5m2!1sen!2sin"
      },
      developer: {
        name: "Sarthak Singapore",
        description:
          "Developer name is taken from the uploaded project folder and brochure title.",
      },
      disclaimer:
        "Aakash Greens details are prepared only from uploaded brochure images. Price, plot sizes and approvals should be verified with the official team.",
    },
  {
    "id": 202,
    "title": "Millennium Icon",
    "slug": "millennium-icon",
    "location": "Budhaniya, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "350 sq.ft. to 5,000 sq.ft. plots",
    "description": "Millennium Icon is a premier residential plot community by Millennium Infra Builders, located in Budhaniya, Indore. Launched in September 2023, the RERA-approved gated project comprises 407 residential units with flexible plot configurations ranging from 350 sq.ft. to 5,000 sq.ft. It combines modern infrastructure with landscaped greenery, 24x7 security and excellent city connectivity.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "RERA-approved residential plot development (RERA ID: P-IND-24-4472)",
          "Launched in September 2023 with 407 residential units",
          "Flexible plot sizes ranging from 350 sq.ft. to 5,000 sq.ft.",
          "Secure gated community with round-the-clock (24x7) security",
          "Comprehensive landscaping with tree planting initiatives",
          "On-site sewage treatment plant and storm water drainage network",
          "Efficient solid waste management and disposal systems",
          "Strategically located in Budhaniya, Indore with excellent road connectivity",
          "Close to shopping malls, cinema halls, schools and hospitals"
        ]
      }
    ],
    "sections": {
      "overview": "Millennium Icon is a RERA-approved, gated residential plot community in Budhaniya, Indore offering 407 units with flexible plot sizes and modern landscaped infrastructure.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/Millennium Icon by Millenium Infra/img2.jpg"
        },
        {
          "title": "Illuminated Project Entrance",
          "img": "/propertyList/Millennium Icon by Millenium Infra/img5.jpg"
        },
        {
          "title": "Landscaped Garden with Gazebo",
          "img": "/propertyList/Millennium Icon by Millenium Infra/img4.jpg"
        },
        {
          "title": "Modern Pergola Seating Area",
          "img": "/propertyList/Millennium Icon by Millenium Infra/img7.jpg"
        },
        {
          "title": "Topiary Garden Landscaping",
          "img": "/propertyList/Millennium Icon by Millenium Infra/img8.jpg"
        },
        {
          "title": "Wide Internal Concrete Roads",
          "img": "/propertyList/Millennium Icon by Millenium Infra/img6.jpg"
        },
        {
          "title": "Tree-lined Avenues",
          "img": "/propertyList/Millennium Icon by Millenium Infra/img9.jpg"
        },
        {
          "title": "Central Entry Plaza",
          "img": "/propertyList/Millennium Icon by Millenium Infra/img10.jpg"
        }
      ],
      "specifications": [
        "Minimum plot size: 350 sq.ft.",
        "Maximum plot size: 5,000 sq.ft.",
        "Total of 407 residential plot units",
        "Secure gated community with 24x7 security",
        "Comprehensive landscaping with tree planting initiatives",
        "Efficient solid waste management and disposal systems",
        "Advanced storm water drainage network",
        "On-site sewage treatment plant",
        "RERA-approved (RERA Registration ID: P-IND-24-4472)"
      ],
      "connectivity": [
        "Excellent accessibility across the city through well-developed road networks",
        "Close to shopping malls and entertainment venues",
        "Near cinema halls",
        "Proximity to educational institutions",
        "Near medical facilities and hospitals"
      ],
      "vision": [
        "Convenient urban living for families",
        "Modern living standards with thoughtful infrastructure",
        "Green, landscaped community environment",
        "Safe and secure gated lifestyle",
        "A place to create precious family memories"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Millennium Icon"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Location",
        "value": "Budhaniya, Indore, Madhya Pradesh"
      },
      {
        "label": "Developer",
        "value": "Millennium Infra Builders"
      },
      {
        "label": "Launch Date",
        "value": "September 2023"
      },
      {
        "label": "Total Units",
        "value": "407 residential units"
      },
      {
        "label": "Plot Size Range",
        "value": "350 sq.ft. to 5,000 sq.ft."
      },
      {
        "label": "RERA Registration ID",
        "value": "P-IND-24-4472"
      }
    ],
    "images": [
      "/propertyList/Millennium Icon by Millenium Infra/img1.jpg",
      "/propertyList/Millennium Icon by Millenium Infra/img2.jpg",
      "/propertyList/Millennium Icon by Millenium Infra/img3.jpg",
      "/propertyList/Millennium Icon by Millenium Infra/img4.jpg",
      "/propertyList/Millennium Icon by Millenium Infra/img5.jpg",
      "/propertyList/Millennium Icon by Millenium Infra/img6.jpg",
      "/propertyList/Millennium Icon by Millenium Infra/img7.jpg",
      "/propertyList/Millennium Icon by Millenium Infra/img8.jpg",
      "/propertyList/Millennium Icon by Millenium Infra/img9.jpg",
      "/propertyList/Millennium Icon by Millenium Infra/img10.jpg",
      "/propertyList/Millennium Icon by Millenium Infra/img11.jpg"
    ],
    "floorPlan": {
      "images": [
        "/propertyList/Millennium Icon by Millenium Infra/img3.jpg",
        "/propertyList/Millennium Icon by Millenium Infra/img11.jpg"
      ],
      "pdf": ""
    },
    "map": {
      "image":"",
      "locationLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.1760169024674!2d75.79956023823257!3d22.77933046373713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630184356ac359%3A0xa200b924c044ea8b!2s148%2C%20Palakhedi%2C%20Indore%2C%20Madhya%20Pradesh%20453112!5e1!3m2!1sen!2sin!4v1780419116420!5m2!1sen!2sin"
    },
    "developer": {
      "name": "Millennium Infra Builders",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Millennium Icon details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 203,
    "title": "PM Uplands",
    "slug": "pm-uplands",
    "location": "Near Sage University, Nihalpur Mundi, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "60 Acres",
    "description": "PM Uplands by Patel Motors Group is a 60-acre premium township near Sage University in Indore's fastest-growing growth corridor. It offers plots of 1,875 to 3,500 sq.ft alongside ready-to-move luxury row houses, set within a secured campus with wide roads and world-class amenities. Backed by Patel Motors Group's 40+ years of trust in Indore, it combines smart investment value with a complete family lifestyle.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "60-acre premium township near Sage University, Nihalpur Mundi",
          "Plot sizes from 1,875 to 3,500 sq.ft in dimensions like 25x75, 40x70 and 50x70",
          "Ready-to-move luxury row houses",
          "20,000 sq.ft massive clubhouse for weekend entertainment",
          "Swimming pool, library and banquet hall within walking distance",
          "Multiple gardens and a temple for community bonding",
          "Wide roads and a secured campus for peaceful family living",
          "Premium finishes throughout the township",
          "Located in Indore's growth corridor with quick access to IT Park and Rau-Pithampur industrial belt",
          "Developed by Patel Motors Group, a trusted Indore name for over 40 years"
        ]
      }
    ],
    "sections": {
      "overview": "PM Uplands is a 60-acre premium plotted township by Patel Motors Group near Sage University in Indore, offering plots and ready-to-move row houses with world-class amenities in the city's fastest-growing residential corridor.",
      "amenities": [
        {
          "title": "Clubhouse",
          "img": "/propertyList/PM Uplands Brochure/img1.jpg"
        },
        {
          "title": "Wide Roads",
          "img": "/propertyList/PM Uplands Brochure/img2.jpg"
        },
        {
          "title": "Landscaped Garden",
          "img": "/propertyList/PM Uplands Brochure/img3.jpg"
        },
        {
          "title": "Kids Play Area",
          "img": "/propertyList/PM Uplands Brochure/img5.jpg"
        },
        {
          "title": "Ready to Move Villas",
          "img": "/propertyList/PM Uplands Brochure/img6.jpg"
        },
        {
          "title": "Temple",
          "img": "/propertyList/PM Uplands Brochure/img8.jpg"
        },
        {
          "title": "Luxury Row Houses",
          "img": "/propertyList/PM Uplands Brochure/img12.jpg"
        }
      ],
      "specifications": [
        "Plot sizes ranging from 1,875 to 3,500 sq.ft",
        "Plot dimensions including 25x75, 40x70 and 50x70",
        "Ready-to-move luxury row houses",
        "20,000 sq.ft massive clubhouse",
        "Swimming pool, library and banquet hall",
        "Multiple gardens and a temple",
        "Wide roads and a secured gated campus",
        "Premium finishes throughout the township"
      ],
      "connectivity": [
        "Near Sage University, Nihalpur Mundi",
        "Quick access to IT Park and Rau-Pithampur industrial belt",
        "Easy connectivity to schools, hospitals, malls and entertainment",
        "Seamless routes to railway station, airport and highways",
        "Close to Omaxe Hills premium neighbourhood",
        "Near Rau Circle, DPS School (Rau), Medicaps University and Emerald Heights School",
        "Close to D Mart, Best Price and Rala Mandal",
        "Connected via Indore Bypass Road and Agra-Mumbai National Highway"
      ],
      "vision": [
        "Luxury beyond imagination",
        "A complete family lifestyle in one township",
        "Smart investment in Indore's fastest-growing destination",
        "Peaceful, secured community living",
        "World-class amenities at your doorstep"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "PM Uplands"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Location",
        "value": "Near Sage University, Nihalpur Mundi, Indore, Madhya Pradesh"
      },
      {
        "label": "Developer",
        "value": "Patel Motors Group"
      },
      {
        "label": "Total Area",
        "value": "60 Acres"
      },
      {
        "label": "Plot Sizes",
        "value": "1,875 to 3,500 sq.ft"
      },
      {
        "label": "Plot Dimensions",
        "value": "25x75, 40x70, 50x70"
      },
      {
        "label": "Clubhouse",
        "value": "20,000 sq.ft"
      },
      {
        "label": "Configuration",
        "value": "Plots and Ready-to-Move Row Houses"
      }
    ],
    "images": [
      "/propertyList/PM Uplands Brochure/img4.jpg",
      "/propertyList/PM Uplands Brochure/img2.jpg",
      "/propertyList/PM Uplands Brochure/img3.jpg",
      "/propertyList/PM Uplands Brochure/img1.jpg",
      "/propertyList/PM Uplands Brochure/img5.jpg",
      "/propertyList/PM Uplands Brochure/img6.jpg",
      "/propertyList/PM Uplands Brochure/img7.jpg",
      "/propertyList/PM Uplands Brochure/img8.jpg",
      "/propertyList/PM Uplands Brochure/img9.jpg",
      "/propertyList/PM Uplands Brochure/img10.jpg",
      "/propertyList/PM Uplands Brochure/img11.jpg",
      "/propertyList/PM Uplands Brochure/img12.jpg",
      "/propertyList/PM Uplands Brochure/img13.jpg",
      "/propertyList/PM Uplands Brochure/img14.jpg",
      "/propertyList/PM Uplands Brochure/img15.jpg"
    ],
    "floorPlan": {
      "image": "/propertyList/PM Uplands Brochure/img13.jpg",
      "pdf": ""
    },
    "map": {
      "image": "/propertyList/PM Uplands Brochure/img14.jpg",
      "locationLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3405309089976!2d75.84356697562906!3d22.63632637944643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fb471288196f%3A0xfbfcde18019186f4!2sPM%20UPLANDS!5e1!3m2!1sen!2sin!4v1780419882912!5m2!1sen!2sin"
    },
    "developer": {
      "name": "Patel Motors Group",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "PM Uplands details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 204,
    "title": "Sanjana Grande",
    "slug": "sanjana-grande",
    "location": "Kanadia Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Villa",
    "bhk": "4 BHK Villas",
    "area": "966 - 1265 sq.ft. plots (Built-up 2,530 - 3,045 approx)",
    "description": "Sanjana Grande by Sanjana Developers is a luxurious 4 BHK villa project on Kanadia Road, Indore, offering both East-facing and West-facing semi-furnished villas. The villas feature earthquake-resistant RCC structures, designer false ceilings, modular kitchens, and premium fittings across three well-planned floors. Plot sizes range from 23 x 42 (966 approx) to 23 x 55 (1265 approx) with built-up areas of 2,530 to 3,045 sq.ft.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Luxurious semi-furnished 4 BHK villas with East-facing and West-facing options",
          "Earthquake-resistant RCC structure for durability and safety",
          "Plot sizes of 23 x 42 (966 approx) and 23 x 55 (1265 approx)",
          "Built-up area of 2,530 to 3,045 sq.ft. across three floors",
          "Designer false ceilings with LED and rope lights throughout the villa",
          "Full modular kitchen with chimney and granite platform with SS sink",
          "Modern elevation using high-pressure laminate (HPL), cement concrete texture and toughened glass railings",
          "Superior vitrified tile flooring with premium Asian and Jaquar/Hindware fittings",
          "Prime location on Kanadia Road, close to A.B. Road (Bypass)"
        ]
      }
    ],
    "sections": {
      "overview": "Sanjana Grande is a premium 4 BHK villa development on Kanadia Road, Indore, delivering luxurious semi-furnished homes with modern elevation and earthquake-resistant construction.",
      "amenities": [
        {
          "title": "Luxurious Villa Exterior",
          "img": "/propertyList/Sanjanan Grande by Sanjana Developers/img11.jpg"
        },
        {
          "title": "Designer Master Bedroom",
          "img": "/propertyList/Sanjanan Grande by Sanjana Developers/img2.jpg"
        },
        {
          "title": "Double-Height Living Room",
          "img": "/propertyList/Sanjanan Grande by Sanjana Developers/img5.jpg"
        },
        {
          "title": "Modern Bedroom with False Ceiling",
          "img": "/propertyList/Sanjanan Grande by Sanjana Developers/img1.jpg"
        },
        {
          "title": "Designer Bedroom Interior",
          "img": "/propertyList/Sanjanan Grande by Sanjana Developers/img4.jpg"
        },
        {
          "title": "Spacious Bedroom with Wardrobe",
          "img": "/propertyList/Sanjanan Grande by Sanjana Developers/img6.jpg"
        }
      ],
      "specifications": [
        "West facing villas: Size 23 x 42 = 966 approx; East facing villas: Size 23 x 55 = 1265 approx",
        "Semi-furnished amenities with earthquake-resistant RCC structure",
        "Designer false ceiling with LED & rope lights; PVC ceilings & lights in all bathrooms",
        "Living/Dining/Bedroom: Superior quality vitrified tile flooring and skirting",
        "Walls/ceilings putty finished and painted with Asian Premium Acrylic Emulsion Paint",
        "Adequate electrical points with modular switches and provision for TV, A.C. and split A.C. drain line",
        "Toilets: Anti-skid ceramic tile flooring, designer tiles up to lintel level, concealed CPVC plumbing",
        "CP fittings and sanitaryware of Jaquar/Plumber/Hindware equivalent standard make",
        "Full modular kitchen with chimney, granite platform with SS sink and designer wall cladding",
        "Joinery: Designer flush doors with teak wood and mica jamming, Domal section windows",
        "Electrical: ISI marked fire-resistant copper wiring and modular switches of Western or equivalent make",
        "Modern elevation using high-pressure laminate (HPL), cement concrete texture and toughened glass railings",
        "Exterior finished with all-weather Asian Apex / ICI Weather Shield paint"
      ],
      "connectivity": [
        "Located on Kanadia Road with direct access to A.B. Road (Bypass)",
        "Near Silicon Sansara",
        "Near Sampat Greens",
        "Near Milan Greens",
        "Near Garha House",
        "Near Garha Golf Greens"
      ],
      "vision": [
        "Luxurious lifestyle living in premium 4 BHK villas",
        "Modern architectural elevation with elegant interiors",
        "Earthquake-resistant, safe and durable construction",
        "Thoughtfully planned spaces for family living"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Sanjana Grande"
      },
      {
        "label": "Property Type",
        "value": "4 BHK Villas"
      },
      {
        "label": "Location",
        "value": "Kanadia Road, Indore, Madhya Pradesh"
      },
      {
        "label": "Developer",
        "value": "Sanjana Developers"
      },
      {
        "label": "West Facing Plot Size",
        "value": "23 x 42 = 966 approx (Built-up 2,530 approx)"
      },
      {
        "label": "East Facing Plot Size",
        "value": "23 x 55 = 1265 approx (Built-up 3,045 approx)"
      },
      {
        "label": "Structure",
        "value": "Earthquake-resistant RCC structure"
      },
      {
        "label": "Furnishing",
        "value": "Semi-furnished"
      }
    ],
    "images": [
      "/propertyList/Sanjanan Grande by Sanjana Developers/img10.jpg",
      "/propertyList/Sanjanan Grande by Sanjana Developers/img11.jpg",
      "/propertyList/Sanjanan Grande by Sanjana Developers/img1.jpg",
      "/propertyList/Sanjanan Grande by Sanjana Developers/img2.jpg",
      "/propertyList/Sanjanan Grande by Sanjana Developers/img3.jpg",
      "/propertyList/Sanjanan Grande by Sanjana Developers/img4.jpg",
      "/propertyList/Sanjanan Grande by Sanjana Developers/img5.jpg",
      "/propertyList/Sanjanan Grande by Sanjana Developers/img6.jpg",
      "/propertyList/Sanjanan Grande by Sanjana Developers/img7.jpg",
      "/propertyList/Sanjanan Grande by Sanjana Developers/img8.jpg",
      "/propertyList/Sanjanan Grande by Sanjana Developers/img9.jpg",
      "/propertyList/Sanjanan Grande by Sanjana Developers/img12.jpg",
      "/propertyList/Sanjanan Grande by Sanjana Developers/img13.jpg",
      "/propertyList/Sanjanan Grande by Sanjana Developers/img14.jpg"
    ],
    "floorPlan": {
      "images": [
        "/propertyList/Sanjanan Grande by Sanjana Developers/img7.jpg",
        "/propertyList/Sanjanan Grande by Sanjana Developers/img11.jpg",
        "/propertyList/Sanjanan Grande by Sanjana Developers/img14.jpg"
      ],
      "pdf": ""
    },
    "map": {
      "image": "/propertyList/Sanjanan Grande by Sanjana Developers/img8.jpg",
      "locationLink":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3986.4868326983474!2d75.9532937!3d22.7344106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e328737ecfbf%3A0x134d70bb6b4fecf8!2sSanjana%20Grande!5e1!3m2!1sen!2sin!4v1780420110836!5m2!1sen!2sin"
    },
    "developer": {
      "name": "Sanjana Developers",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Sanjana Grande details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 205,
    "title": "Sanjana Mayfair",
    "slug": "sanjana-mayfair",
    "location": "Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Villa",
    "bhk": "5 BHK Bungalows",
    "area": "Plot sizes 2,800 - 3,220 sq. ft.",
    "description": "Sanjana Mayfair by Sanjana Developers is an elite gated colony of just eight luxury bungalows, designed for larger-than-life living with neo-classical architecture and a grand entrance. Each Vastu-compliant, north-facing bungalow features A+ construction, world-class interiors, a private indoor pool, a three-floor waterfall and five master bedrooms. With underground utilities, cobbled roads, royal street lighting and round-the-clock security, the project delivers a refined, clutter-free and exclusive lifestyle.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Exclusive colony of just 8 selected families in a prime location",
          "Neo-classical, world-class architecture with a grand entrance",
          "All north-facing, Vastu-compliant bungalows with A+ construction",
          "Private indoor pool, baby pool and a stunning 3-floor waterfall",
          "Five master bedrooms each with dress and toilet, plus guest and servant units",
          "Clubhouse with yoga, indoor games and a walking track",
          "Cobbled roads with royal street lighting and fully underground utilities",
          "Advanced STP, rainwater harvesting and dedicated drainage lines",
          "24/7 gated security with boom barriers, CCTV and LED street lighting",
          "Plot sizes of 2,800 to 3,220 sq. ft. with 6,531 sq. ft. built-up area"
        ]
      }
    ],
    "sections": {
      "overview": "An elite gated colony of just eight luxury neo-classical bungalows offering Vastu-compliant, north-facing homes with world-class interiors, premium amenities and fully underground infrastructure.",
      "amenities": [
        {
          "title": "Grand Entrance & Landscaped Entry",
          "img": "/propertyList/Sanjana Mayfair by Sanjana Developers/img2.jpg"
        },
        {
          "title": "Neo-Classical Bungalow Architecture",
          "img": "/propertyList/Sanjana Mayfair by Sanjana Developers/img3.jpg"
        },
        {
          "title": "Site Layout - 8 Exclusive Bungalows",
          "img": "/propertyList/Sanjana Mayfair by Sanjana Developers/img6.jpg"
        },
        {
          "title": "Colony & Bungalow Amenities",
          "img": "/propertyList/Sanjana Mayfair by Sanjana Developers/img1.jpg"
        },
        {
          "title": "Infrastructure, Ecosystem & Safety",
          "img": "/propertyList/Sanjana Mayfair by Sanjana Developers/img4.jpg"
        }
      ],
      "specifications": [
        "Exclusive colony of 8 bungalows for 8 selected families",
        "Bungalows 1, 4, 5, 8: Plot size 3,220 sq. ft., Built-up area 6,531 sq. ft.",
        "Bungalows 2, 3, 6, 7: Plot size 2,800 sq. ft., Built-up area 6,531 sq. ft.",
        "All north-facing, Vastu-compliant bungalows with A+ construction",
        "Five master bedrooms with private toilets and dress areas",
        "Double-height drawing hall and modular kitchen with island",
        "Private indoor pool, baby pool and 3-floor waterfall",
        "Steam and shower room, modern lifts and independent mandir",
        "Complete servant unit with kitchen and dedicated guest room",
        "Large landscaped terraces and lavish multipurpose hall",
        "Cobbled roads with royal street lighting and 12m wide roads",
        "Underground LT/HT electrical lines and underground sleeves for telephone and internet",
        "Advanced STP for preservation and rainwater harvesting",
        "Dedicated storm water and separate sewerage lines",
        "Domestic water supply with borewell connectivity to a common UG tank",
        "Gated entrance with boom barriers, 24/7 CCTV surveillance and LED street lighting"
      ],
      "connectivity": [],
      "vision": [
        "Larger-than-life living for eight privileged families",
        "World-class architecture and interiors",
        "Refined, clutter-free aesthetic with underground utilities",
        "Sustainable and secure gated community",
        "Private sanctuary for lasting family memories"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Sanjana Mayfair"
      },
      {
        "label": "Developer",
        "value": "Sanjana Developers"
      },
      {
        "label": "Property Type",
        "value": "Luxury Bungalows / Villas"
      },
      {
        "label": "Configuration",
        "value": "5 Master Bedroom Bungalows"
      },
      {
        "label": "Total Units",
        "value": "8 Bungalows"
      },
      {
        "label": "Plot Size",
        "value": "2,800 - 3,220 sq. ft."
      },
      {
        "label": "Built-Up Area",
        "value": "6,531 sq. ft."
      },
      {
        "label": "Road Width",
        "value": "12m wide roads"
      },
      {
        "label": "Location",
        "value": "Indore, Madhya Pradesh"
      }
    ],
    "images": [
      "/propertyList/Sanjana Mayfair by Sanjana Developers/img5.jpg",
      "/propertyList/Sanjana Mayfair by Sanjana Developers/img6.jpg",
      "/propertyList/Sanjana Mayfair by Sanjana Developers/img1.jpg",
      "/propertyList/Sanjana Mayfair by Sanjana Developers/img2.jpg",
      "/propertyList/Sanjana Mayfair by Sanjana Developers/img3.jpg",
      "/propertyList/Sanjana Mayfair by Sanjana Developers/img4.jpg"
    ],
    "floorPlan": {
      "image": "/propertyList/Sanjana Mayfair by Sanjana Developers/img6.jpg",
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.693484942736!2d75.80139601373163!3d22.637241785591943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f9574a050427%3A0x682fd8157d69522a!2sSanjana%20Park%202!5e1!3m2!1sen!2sin!4v1780420317756!5m2!1sen!2sin"
    },
    "developer": {
      "name": "Sanjana Developers",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Sanjana Mayfair details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 206,
    "title": "Malwa Enclave",
    "slug": "malwa-enclave",
    "location": "AB Bypass Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Villa",
    "bhk": "3 BHK Row Villas",
    "area": "110-acre community (Malwa County)",
    "price": [{"type": "Plot Price", "value": "₹ 80 L++ (Starting)"}],
    "description": "Malwa Enclave by Satya Group is an exclusive enclave of premium duplex row villas set within the 110-acre Malwa County township on AB Bypass Road, Indore. Comprising only 94 independent G+1 units located right next to the 55,000 sq.ft. clubhouse, it offers high-end luxury specifications, landscaped green surroundings and ready-to-move possession with excellent city connectivity.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Located within the established 110-acre Malwa County community on AB Bypass Road, Indore",
          "Exclusive enclave of only 94 independent duplex villas with G+1 structure",
          "Right next to the 55,000 sq.ft. world-class clubhouse",
          "Row House plots of 1281 sq.ft. with 1672 sq.ft. construction area, starting at 80 L++",
          "High-end luxury specifications with expandable villa options",
          "Landscaped green environment with central garden and kids' play zone",
          "Wide internal roads up to 40 feet for congestion-free movement",
          "Ready for immediate possession with up to 80% bank loan financing",
          "RERA registered (P-SWR-25-5860) with all approvals available",
          "In close proximity to commercial space, schools and hospitals"
        ]
      }
    ],
    "sections": {
      "overview": "Malwa Enclave is an exclusive 94-unit gated enclave of premium duplex row villas within the 110-acre Malwa County township on AB Bypass Road, Indore, offering resort-style living next to a 55,000 sq.ft. clubhouse.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/Malwa Enclave By Satya Group/img2.jpg"
        },
        {
          "title": "Premium Row Villas",
          "img": "/propertyList/Malwa Enclave By Satya Group/img6.jpg"
        },
        {
          "title": "Duplex Villa Elevations",
          "img": "/propertyList/Malwa Enclave By Satya Group/img5.jpg"
        },
        {
          "title": "Landscaped Streetscape",
          "img": "/propertyList/Malwa Enclave By Satya Group/img10.jpg"
        },
        {
          "title": "Kids Play Area & Central Garden",
          "img": "/propertyList/Malwa Enclave By Satya Group/img9.jpg"
        },
        {
          "title": "Aerial Community View",
          "img": "/propertyList/Malwa Enclave By Satya Group/img7.jpg"
        }
      ],
      "specifications": [
        "Row House / duplex villas with G+1 (Ground + First) structure",
        "Plot size 1281 sq.ft. with construction area of 1672 sq.ft.",
        "Pricing starting at 80 L ++",
        "Only 94 exclusive independent units",
        "Wide 40-foot internal roads within the community",
        "Internal road network of 24M, 18M, 12M and 9M wide roads (master plan)",
        "High-end luxury specifications, expandable villas",
        "Ground floor with porch, lawn, hall, G.bed room, kitchen, store and utility",
        "First floor with two bedrooms, dress areas, balconies and lobby",
        "Provision for OHW tank, garden, green area and commercial zone within layout"
      ],
      "connectivity": [
        "Top schools Emerald Heights and GD Goenka just 5 minutes away",
        "Apollo and Medanta Hospitals about 20 minutes away",
        "Indore Airport 30-40 minutes away; Ujjain a short drive",
        "Right on AB Bypass Road (Agra-Mumbai Highway / NH-3) with excellent connectivity",
        "Mangliya Railway Station nearby",
        "8 km from the heart of the city, 14 km from Railway Station, 20 km from Airport",
        "Close to Bhartiya Vidya Bhavan School and Delhi Public School",
        "Near Acropolis Institute of Technology & Research and city centers"
      ],
      "vision": [
        "Resort lifestyle living every day",
        "Safe, family-friendly gated community",
        "Exclusive low-density enclave of 94 villas",
        "High-end luxury homes with green surroundings",
        "Smart investment in a fast-growing Indore corridor"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Malwa Enclave"
      },
      {
        "label": "Township",
        "value": "Malwa County"
      },
      {
        "label": "Property Type",
        "value": "Duplex Row Villas (G+1)"
      },
      {
        "label": "Location",
        "value": "AB Bypass Road, Indore, Madhya Pradesh"
      },
      {
        "label": "Developer",
        "value": "Satya Group"
      },
      {
        "label": "Total Community Area",
        "value": "110 acres"
      },
      {
        "label": "Total Units",
        "value": "94 independent units"
      },
      {
        "label": "Plot Size",
        "value": "1281 sq.ft."
      },
      {
        "label": "Construction Area",
        "value": "1672 sq.ft."
      },
      {
        "label": "Starting Price",
        "value": "80 L ++"
      },
      {
        "label": "Clubhouse",
        "value": "55,000 sq.ft."
      },
      {
        "label": "Possession",
        "value": "Ready to move"
      },
      {
        "label": "RERA Registration",
        "value": "P-SWR-25-5860"
      }
    ],
    "images": [
      "/propertyList/Malwa Enclave By Satya Group/img1.jpg",
      "/propertyList/Malwa Enclave By Satya Group/img2.jpg",
      "/propertyList/Malwa Enclave By Satya Group/img3.jpg",
      "/propertyList/Malwa Enclave By Satya Group/img4.jpg",
      "/propertyList/Malwa Enclave By Satya Group/img5.jpg",
      "/propertyList/Malwa Enclave By Satya Group/img6.jpg",
      "/propertyList/Malwa Enclave By Satya Group/img7.jpg",
      "/propertyList/Malwa Enclave By Satya Group/img8.jpg",
      "/propertyList/Malwa Enclave By Satya Group/img9.jpg",
      "/propertyList/Malwa Enclave By Satya Group/img10.jpg",
      "/propertyList/Malwa Enclave By Satya Group/img11.jpg"
    ],
    "floorPlan": {
      "images": [
        "/propertyList/Malwa Enclave By Satya Group/img8.jpg",
        "/propertyList/Malwa Enclave By Satya Group/img11.jpg"
      ],
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.8974504833534!2d75.94088560898443!3d22.826568865499862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631cf3cfe59e57%3A0x444a63873d11608b!2sMalwa%20County%20Indore!5e1!3m2!1sen!2sin!4v1780420427307!5m2!1sen!2sin"
    },
    "developer": {
      "name": "Satya Group",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Malwa Enclave details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 207,
    "title": "Malwa Prime",
    "slug": "malwa-prime",
    "location": "AB Bypass Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "110 Acres (Malwa County township)",
    "price":[{type: "Plot Price", value: "₹ 5999 /sq.ft."}],
    "description": "Malwa Prime is a premium plotted development by Satya Group, set within the larger 110-acre Malwa County community on AB Bypass Road, Indore. The project offers ready-to-build residential plots starting at 1300 sq.ft. with wide 40-foot internal roads, immediate possession and access to a 55,000 sq.ft. resort-style clubhouse. With over 450 families already living here, it blends prime connectivity, RERA-registered transparency and a complete neighbourhood of schools, healthcare and shopping at the doorstep.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Part of the 110-acre Malwa County community on AB Bypass Road with 450+ families already living here",
          "Ready residential plots starting at 1300 sq.ft. available for immediate possession",
          "Plot prices starting from Rs. 5999/- ++ per sq.ft.",
          "Wide 40-foot internal roads ensuring smooth, traffic-free movement within the community",
          "55,000 sq.ft. resort-style Club Malwa with swimming pool, gym and indoor games",
          "Pickleball, tennis, volleyball, basketball and multipurpose sports courts",
          "Amphitheater, jogging and cycling tracks, landscaped gardens and kids play zones",
          "On-site temple, nursing home, school and convenience store",
          "RERA registered (P-SWR-25-5860) with up to 80% home loan financing from banks",
          "Just 5 minutes to top schools and 20 minutes to Apollo and Medanta hospitals"
        ]
      }
    ],
    "sections": {
      "overview": "Malwa Prime by Satya Group is a RERA-registered plotted development within the 110-acre Malwa County community on AB Bypass Road, Indore, offering ready-to-build plots with a 55,000 sq.ft. clubhouse and resort lifestyle amenities.",
      "amenities": [
        {
          "title": "Swimming Pool",
          "img": "/propertyList/Malwa Prime by Satya Group/img1.jpg"
        },
        {
          "title": "Multipurpose Sports Courts",
          "img": "/propertyList/Malwa Prime by Satya Group/img2.jpg"
        },
        {
          "title": "Temple",
          "img": "/propertyList/Malwa Prime by Satya Group/img3.jpg"
        },
        {
          "title": "Landscaped Internal Roads",
          "img": "/propertyList/Malwa Prime by Satya Group/img4.jpg"
        },
        {
          "title": "Gymnasium",
          "img": "/propertyList/Malwa Prime by Satya Group/img5.jpg"
        },
        {
          "title": "Indoor Pool Table Room",
          "img": "/propertyList/Malwa Prime by Satya Group/img6.jpg"
        },
        {
          "title": "Club Malwa Clubhouse",
          "img": "/propertyList/Malwa Prime by Satya Group/img8.jpg"
        },
        {
          "title": "Landscaped Gardens",
          "img": "/propertyList/Malwa Prime by Satya Group/img10.jpg"
        }
      ],
      "specifications": [
        "Residential plots starting at 1300 sq.ft.",
        "Plot prices starting from Rs. 5999/- ++ per sq.ft.",
        "Wide 40-foot internal roads within the community",
        "12.0 Mt. wide circulation roads and 24.0 Mt. wide internal roads as per layout",
        "Ready plots for immediate possession with luxury villas and modern apartments also available",
        "55,000 sq.ft. clubhouse with swimming pool, fully equipped gym, indoor badminton, table tennis and pool tables",
        "Pickleball, tennis, volleyball and basketball courts",
        "Amphitheater, jogging and cycling tracks, landscaped gardens and kids indoor play zone",
        "On-site temple, nursing home, school, convenience store and guest rooms",
        "RERA Registration: P-SWR-25-5860",
        "Up to 80% bank home loan financing available"
      ],
      "connectivity": [
        "Bang on AB Bypass Road with excellent connectivity",
        "Emerald Heights and GD Goenka schools within 5 minutes",
        "Delhi Public School and Orchids School nearby",
        "Apollo and Medanta hospitals within 20 minutes",
        "Indore City Hospital and Bombay Hospital nearby",
        "Mangliya Junction / Dakachya Railway Station nearby",
        "Devi Ahilya Bai Holkar Airport 30-40 minutes away",
        "Ujjain City and Dewas City 30-40 minutes away",
        "Phoenix Citadel Mall and city centers easily accessible"
      ],
      "vision": [
        "Resort lifestyle living every single day",
        "A safe, family-friendly community where kids can play freely",
        "Everything from schools to hospitals just minutes away",
        "A smart investment in fast-growing Indore on AB Bypass Road",
        "Peace of mind with RERA-registered, ready-to-possess homes"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Malwa Prime (Plots at Malwa County)"
      },
      {
        "label": "Developer",
        "value": "Satya Group"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Configuration",
        "value": "Residential Plots"
      },
      {
        "label": "Location",
        "value": "AB Bypass Road, Indore, Madhya Pradesh"
      },
      {
        "label": "Total Community Area",
        "value": "110 Acres (Malwa County)"
      },
      {
        "label": "Plot Size",
        "value": "Starting at 1300 sq.ft."
      },
      {
        "label": "Price",
        "value": "Starting from Rs. 5999/- ++ per sq.ft."
      },
      {
        "label": "Possession",
        "value": "Ready for immediate possession"
      },
      {
        "label": "Clubhouse",
        "value": "55,000 sq.ft. Club Malwa"
      },
      {
        "label": "RERA Registration",
        "value": "P-SWR-25-5860"
      }
    ],
    "images": [
      "/propertyList/Malwa Prime by Satya Group/img7.jpg",
      "/propertyList/Malwa Prime by Satya Group/img8.jpg",
       "/propertyList/Malwa Prime by Satya Group/img10.jpg",
      // "/propertyList/Malwa Prime by Satya Group/img1.jpg",
      // "/propertyList/Malwa Prime by Satya Group/img2.jpg",
      // "/propertyList/Malwa Prime by Satya Group/img3.jpg",
      // "/propertyList/Malwa Prime by Satya Group/img4.jpg",
      // "/propertyList/Malwa Prime by Satya Group/img5.jpg",
      // "/propertyList/Malwa Prime by Satya Group/img6.jpg",
    ],
    "floorPlan": {
      "images": [
      "/propertyList/Malwa Prime by Satya Group/img9.jpg",
      "/propertyList/Malwa Prime by Satya Group/img11.jpg",
      "/propertyList/Malwa Prime by Satya Group/img12.jpg"
      ],
      "pdf": ""
    },
    "map": {
      "image": "/propertyList/Malwa Prime by Satya Group/img12.jpg",
      "locationLink": ""
    },
    "developer": {
      "name": "Satya Group",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Malwa Prime details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
      id: 208,
      title: "Singapore The Grand Virasat",
      slug: "singapore-the-grand-virasat-sarthak-singapore",
      location: "Indore, Madhya Pradesh",
      city: "Indore",
      state: "Madhya Pradesh",
      type: "Buy",
      propertyType: "Plot",
      bhk: "Plots",
      price: [{ type: "Plot Price", value: "₹ 4700 /sq.ft. ++ (Starting)" }],
      description:
        "Singapore The Grand Virasat is a green residential plotting project with wellness-focused modern luxuries, sports/open-space amenities and nearby school, retail, hotel and healthcare access mentioned in the brochure.",
      keyHighlights: [
        {
          title: "Modern Luxuries",
          description:
            "Surrounded by green and guided by energy, the estate promotes wellness as a way of life. Calm corners and active spaces exist in balance.",
          points: [
            "Temple",
            "Open Air Theater",
            "Volleyball Court",
            "Open Chess",
            "Mini Golf",
            "Badminton Court",
            "Accupressure Path",
          ],
        },
        {
          title: "Nearby Connectivity",
          points: [
            "Emerald Heights World School: adjacent",
            "Digital Era Public School: 2 km",
            "Sheraton Grand Palace Hotel / Golden Leaves nearby",
            "Major hotels in Vijay Nagar: Marriott, Sayaji, etc.",
            "Retail nearby: Phoenix Mall, Best Price, Vijay Nagar malls, C-21, Malhar Mega Mall",
            "Healthcare nearby: Kokilaben Hospital, Bombay Hospital",
          ],
        },
      ],
      sections: {
        overview: "Singapore The Grand Virasat by Sarthak Singapore",
        amenities: [
          {
            title: "Grand Entrance",
            img: "/propertyList/The Grand Virasat by Sarthak Singapore/img2.PNG",
          },
          {
            title: "Garden View",
            img: "/propertyList/The Grand Virasat by Sarthak Singapore/img3.PNG",
          },
          {
            title: "Gazebo",
            img: "/propertyList/The Grand Virasat by Sarthak Singapore/img4.PNG",
          },
          {
            title: "Yoga Deck",
            img: "/propertyList/The Grand Virasat by Sarthak Singapore/img5.PNG",
          },
          {
            title: "Pickleball Court",
            img: "/propertyList/The Grand Virasat by Sarthak Singapore/img6.PNG",
          },
          {
            title: "Open Gym",
            img: "/propertyList/The Grand Virasat by Sarthak Singapore/img7.PNG",
          },
          {
            title: "Cricket Turf",
            img: "/propertyList/The Grand Virasat by Sarthak Singapore/img8.PNG",
          },
          {
            title: "Archery Range",
            img: "/propertyList/The Grand Virasat by Sarthak Singapore/img9.PNG",
          },
          {
            title: "Multipurpose Court",
            img: "/propertyList/The Grand Virasat by Sarthak Singapore/img10.PNG",
          },
          {
            title: "Pet Park",
            img: "/propertyList/The Grand Virasat by Sarthak Singapore/img11.PNG",
          },
        ],
        specifications: [
          "Temple",
          "Open Air Theater",
          "Volleyball Court",
          "Open Chess",
          "Mini Golf",
          "Badminton Court",
          "Accupressure Path",
        ],
        connectivity: [
          "Emerald Heights World School: adjacent",
          "Digital Era Public School: 2 km",
          "Sheraton Grand Palace Hotel / Golden Leaves nearby",
          "Major hotels in Vijay Nagar: Marriott, Sayaji, etc.",
          "Retail nearby: Phoenix Mall, Best Price, Vijay Nagar malls, C-21, Malhar Mega Mall",
          "Healthcare nearby: Kokilaben Hospital, Bombay Hospital",
        ],
        vision: [
          "Gazebo",
          "Yoga deck",
          "Pickleball court",
          "Open gym",
          "Cricket turf",
          "Archery range",
          "Multipurpose court",
          "Pet park",
        ],
      },
      projectData: [
        { label: "Project Name", value: "Singapore The Grand Virasat" },
        { label: "Property Type", value: "Plot" },
        { label: "Developer", value: "Sarthak Singapore" },
      ],
      images: Array.from(
        { length: 15 },
        (_, i) =>
          `/propertyList/The Grand Virasat by Sarthak Singapore/img${i + 1}.PNG`,
      ),
      floorPlan: {
        image:
          "/propertyList/The Grand Virasat by Sarthak Singapore/floorplane.PNG",
        pdf: "",
      },
      map: {
        image:
          "/propertyList/The Grand Virasat by Sarthak Singapore/mapViewImg.PNG",
        locationLink:
         "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.7945203859304!2d75.9447011756333!3d22.792388079335808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631dfea3ffa571%3A0x565b1924d8687df!2sThe%20Grand%20Virasat%20Township!5e1!3m2!1sen!2sin!4v1780420970890!5m2!1sen!2sin"
      },
      developer: {
        name: "Sarthak Singapore",
        description:
          "Developer name is taken from the uploaded project folder/brochure title.",
      },
    },
  {
    "id": 209,
    "title": "Tulsivanam Greens",
    "slug": "tulsivanam-greens",
    "location": "Kanadia Main Road, Sampat Greens, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Apartment",
    "bhk": "2/3 BHK",
    "area": "1308 to 2046 sq.ft.",
    "description": "Tulsivanam Greens by Diyara Infra is a premium mid-rise residential project on Kanadia Main Road, Indore, offering limited and exclusive living with only 24 spacious residences. This G+6 building features thoughtfully designed 2 and 3 BHK homes ranging from 1308 to 2046 sq.ft. with modern elevations, ample natural light, wide balconies, and Vastu-compliant layouts. Set in the serene and well-connected Sampat Greens neighborhood, it is ideal for families seeking peaceful yet connected living.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Premium mid-rise residential project in the peaceful locale of Kanadia Main Road, Indore",
          "Limited and exclusive living with only 24 spacious residences",
          "G+6 building with thoughtfully designed 2 & 3 BHK homes ranging from 1308 to 2046 sq.ft.",
          "Located in Sampat Greens, a serene and well-connected neighborhood",
          "Modern elevation with ample natural light, ventilation, and wide balconies",
          "Vastu-compliant layouts for a balanced and harmonious lifestyle",
          "Full legal compliance and clear titles",
          "Ready-to-move-in premium apartments",
          "Developed by a trusted name in real estate with focus on quality and timely delivery",
          "Ideal for families seeking peaceful yet well-connected living"
        ]
      }
    ],
    "sections": {
      "overview": "Tulsivanam Greens is a premium G+6 mid-rise residential project on Kanadia Main Road, Indore, offering only 24 exclusive 2 & 3 BHK Vastu-compliant homes ranging from 1308 to 2046 sq.ft.",
      "amenities": [
        {
          "title": "Kids' Play Area",
          "img": "/propertyList/Tulsivanam by Diyara Infra Brochure/img6.png"
        },
        {
          "title": "Landscaped Garden & Green Spaces",
          "img": "/propertyList/Tulsivanam by Diyara Infra Brochure/img5.png"
        },
        {
          "title": "Modern Building Elevation",
          "img": "/propertyList/Tulsivanam by Diyara Infra Brochure/img8.png"
        },
        {
          "title": "Grand Entrance & Covered Parking",
          "img": "/propertyList/Tulsivanam by Diyara Infra Brochure/img9.png"
        },
        {
          "title": "Premium Bathroom Fittings",
          "img": "/propertyList/Tulsivanam by Diyara Infra Brochure/img10.png"
        }
      ],
      "specifications": [
        "G+6 mid-rise residential building",
        "Only 24 spacious residences",
        "2 & 3 BHK homes ranging from 1308 to 2046 sq.ft.",
        "Modern elevation with ample natural light and ventilation",
        "Wide balconies",
        "Vastu-compliant layouts",
        "Kids' Play Area",
        "Landscaped Garden & Green Spaces",
        "CCTV Camera surveillance",
        "Covered Parking",
        "Ready-to-move-in premium apartments",
        "Full legal compliance and clear titles"
      ],
      "connectivity": [
        "Located on Kanadia Main Road, Indore",
        "Situated in the Sampat Greens neighborhood",
        "Well-connected to surrounding areas as shown in the project location map"
      ],
      "vision": [
        "Limited and exclusive living for select families",
        "Peaceful yet well-connected lifestyle",
        "Harmonious living through Vastu-compliant design",
        "Quality construction with timely delivery",
        "Balanced living surrounded by greenery"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Tulsivanam Greens"
      },
      {
        "label": "Property Type",
        "value": "Residential Apartments"
      },
      {
        "label": "Configuration",
        "value": "2 & 3 BHK"
      },
      {
        "label": "Unit Size",
        "value": "1308 to 2046 sq.ft."
      },
      {
        "label": "Building Type",
        "value": "G+6 mid-rise"
      },
      {
        "label": "Total Units",
        "value": "24 residences"
      },
      {
        "label": "Location",
        "value": "Kanadia Main Road, Sampat Greens, Indore, Madhya Pradesh"
      },
      {
        "label": "Developer",
        "value": "Diyara Infra"
      },
      {
        "label": "Possession",
        "value": "Ready-to-move-in"
      }
    ],
    "images": [
      "/propertyList/Tulsivanam by Diyara Infra Brochure/img1.png",
      "/propertyList/Tulsivanam by Diyara Infra Brochure/img2.png",
      "/propertyList/Tulsivanam by Diyara Infra Brochure/img3.png",
      "/propertyList/Tulsivanam by Diyara Infra Brochure/img4.png",
      "/propertyList/Tulsivanam by Diyara Infra Brochure/img5.png",
      "/propertyList/Tulsivanam by Diyara Infra Brochure/img6.png",
      "/propertyList/Tulsivanam by Diyara Infra Brochure/img7.png",
      "/propertyList/Tulsivanam by Diyara Infra Brochure/img8.png",
      "/propertyList/Tulsivanam by Diyara Infra Brochure/img9.png",
      "/propertyList/Tulsivanam by Diyara Infra Brochure/img10.png"
    ],
    "floorPlan": {
      "images": [
        "/propertyList/Tulsivanam by Diyara Infra Brochure/img3.png",
        "/propertyList/Tulsivanam by Diyara Infra Brochure/img4.png",
        // "/propertyList/Tulsivanam by Diyara Infra Brochure/img10.png"
      ],
      "pdf": ""
    },
    "map": {
      "image": "/propertyList/Tulsivanam by Diyara Infra Brochure/img7.png",
      "locationLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.5216890050524!2d75.92718080768239!3d22.767492903806524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d6f29490977%3A0x606d1b375e1cf012!2sTirumala%20Green%2C%20Phase-1!5e1!3m2!1sen!2sin!4v1780421084638!5m2!1sen!2sin" 
    },
    "developer": {
      "name": "Diyara Infra",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Tulsivanam Greens details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 210,
    "title": "Micro Mitti Madhuvan",
    "slug": "micro-mitti-madhuvan",
    "location": "Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Township",
    "bhk": "Plots & Villas",
    "area": "30 Acres",
    "description": "Micro Mitti Madhuvan is an innovative, forest-inspired residential township spread over 30 acres in Indore, designed to accommodate around 450 families. The project blends nature with modern living through plotted developments, ready-to-move villas, and the award-winning Crescent Club. It emphasizes healthy lifestyles, clean air, abundant green spaces, and a serene, nature-integrated community.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Forest-inspired township spread across 30 acres designed for around 450 families",
          "Plots ranging from 1250 sq. ft. to 2400 sq. ft. with two-way east-west orientation",
          "Internal roads 10.5 m to 12 m wide ensuring accessibility and ventilation",
          "Each home includes a backyard garden for additional green open space and natural light",
          "The Crescent Club lifestyle hub honoured with the World Architecture Community Award in Singapore",
          "Designed by India's leading architect, Sanjay Puri",
          "Crescent Club covers 35,000 sq. ft. with a 17,000 sq. ft. private club and equal-sized garden",
          "Ready-to-move villas designed by Sanjay Puri under Micro Mitti's quality standards",
          "Amenities include swimming pool, gymnasium, banquet hall, restaurants, wellness zones and sports courts",
          "On-site temple and spiritual spaces for peace and tranquility"
        ]
      }
    ],
    "sections": {
      "overview": "Micro Mitti Madhuvan is a 30-acre forest-inspired residential township in Indore offering plots, ready-to-move villas, and the award-winning Crescent Club amid abundant greenery and modern amenities.",
      "amenities": [
        {
          "title": "Clubhouse with Swimming Pool & Rooftop Garden",
          "img": "/propertyList/Micro Mitti Madhuvan Brochure/img20.jpg"
        },
        {
          "title": "Swimming Pool with Deck & Bar",
          "img": "/propertyList/Micro Mitti Madhuvan Brochure/img21.jpg"
        },
        {
          "title": "Well-Equipped Gym",
          "img": "/propertyList/Micro Mitti Madhuvan Brochure/img8.jpg"
        },
        {
          "title": "Indoor Games Room",
          "img": "/propertyList/Micro Mitti Madhuvan Brochure/img4.jpg"
        },
        {
          "title": "Multipurpose Event Hall",
          "img": "/propertyList/Micro Mitti Madhuvan Brochure/img15.jpg"
        },
        {
          "title": "Restaurant",
          "img": "/propertyList/Micro Mitti Madhuvan Brochure/img16.jpg"
        },
        {
          "title": "Sauna & Wellness Zone",
          "img": "/propertyList/Micro Mitti Madhuvan Brochure/img17.jpg"
        },
        {
          "title": "Temple",
          "img": "/propertyList/Micro Mitti Madhuvan Brochure/img23.jpg"
        }
      ],
      "specifications": [
        "Total project area: 30 Acres",
        "Designed for approximately 400-450 families",
        "Plot sizes: 1250 sq. ft. to 2400 sq. ft. with two-way east-west orientation",
        "Internal road width: 10.5 m & 12 m",
        "Main road width: 75 meters",
        "Central courtyard area: 35,000 sq. ft.",
        "Private club area: 17,000 sq. ft.",
        "Garden area: 17,000 sq. ft.",
        "Number of gardens: 14",
        "Ready-to-move villas designed by architect Sanjay Puri",
        "The Crescent Club spans 35,000 sq. ft. with swimming pool, banquet hall, restaurants and sports courts"
      ],
      "connectivity": [
        "Accessible via three main roads: Omex City's 12-meter road, MR 111 Road, and Jhalaria Main Road",
        "Phoenix Citadel Mall - 10 minutes",
        "The Emerald Heights School - 15 minutes",
        "Advanced Academy - 1 minute",
        "G.D. Goenka Public School - 15 minutes",
        "Dr. A.P.J. Abdul Kalam University - 15 minutes",
        "Indore City Hospital - 20 minutes",
        "MR 11 Road - 07 minutes",
        "MR 12 Road - 10 minutes",
        "ISKCON Radha Govind Temple - 15 minutes",
        "Well-connected to Indore's Super Corridor, Airport, and City Center"
      ],
      "vision": [
        "Sustainable living deeply connected to nature and wellness",
        "Healthy environment prioritizing air quality and natural ventilation",
        "Community-focused amenities encouraging social interaction and fitness",
        "Award-winning architecture blending aesthetics and environmental care",
        "A serene forest-inspired sanctuary for families"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Micro Mitti Madhuvan"
      },
      {
        "label": "Property Type",
        "value": "Township (Plots & Villas)"
      },
      {
        "label": "Location",
        "value": "Indore, Madhya Pradesh"
      },
      {
        "label": "Developer",
        "value": "Micro Mitti"
      },
      {
        "label": "Total Area",
        "value": "30 Acres"
      },
      {
        "label": "Number of Families",
        "value": "400"
      },
      {
        "label": "Plot Sizes",
        "value": "1250 sq. ft. - 2400 sq. ft."
      },
      {
        "label": "Road Width",
        "value": "10.5 m & 12 m"
      },
      {
        "label": "Main Road Width",
        "value": "75 meters"
      },
      {
        "label": "Central Courtyard Area",
        "value": "35,000 sq. ft."
      },
      {
        "label": "Private Club Area",
        "value": "17,000 sq. ft."
      },
      {
        "label": "Garden Area",
        "value": "17,000 sq. ft."
      },
      {
        "label": "Number of Gardens",
        "value": "14"
      },
      {
        "label": "Architect",
        "value": "Sanjay Puri"
      }
    ],
    "images": [
      "/propertyList/Micro Mitti Madhuvan Brochure/img14.jpg",
        "/propertyList/Micro Mitti Madhuvan Brochure/img25.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img1.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img2.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img3.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img4.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img5.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img6.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img7.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img8.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img9.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img10.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img11.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img12.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img13.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img15.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img16.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img17.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img18.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img19.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img20.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img21.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img22.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img23.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img24.jpg",
      "/propertyList/Micro Mitti Madhuvan Brochure/img26.jpg"
    ],
    "floorPlan": {
      "images": [
        "/propertyList/Micro Mitti Madhuvan Brochure/img19.jpg",
        "/propertyList/Micro Mitti Madhuvan Brochure/img26.jpg"
      ],
      "pdf": ""
    },
    "map": {
      "image": "/propertyList/Micro Mitti Madhuvan Brochure/img22.jpg",
      "locationLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.0908168469136!2d75.9631428860238!3d22.78224725051658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631dbde27a498d%3A0xbf49bc1a2721fdc9!2sMadhuvan%20by%20Micro%20Mitti%20-%20Madhuvan%20luxury%20township%20in%20Indore%20%7C%20Premium%20Township%20%7C%20luxury%20villas%20in%20Indore!5e1!3m2!1sen!2sin!4v1780421202235!5m2!1sen!2sin" 
    },
    "developer": {
      "name": "Micro Mitti",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Micro Mitti Madhuvan details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 214,
    "title": "Ideal Ambience",
    "slug": "ideal-ambience",
    "location": "Bada Bangarda, Super Corridor, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "1100 / 1250 / 1500 sq.ft. plots",
    "price": [{"type": "Plot Price", "value": "₹ 4251 per sq.ft."}],
    "description": "Ideal Ambience by Ideal Group is a RERA-approved plotting project located at Bada Bangarda along the Super Corridor in Indore. The development offers residential plots in sizes of 1100, 1250 and 1500 sq.ft. and features a grand sculptural entrance gate, landscaped water features, a Jain Mandir and a club house. Plots are offered at a rate of Rs. 4251 per sq.ft.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "RERA approved plotting project at Bada Bangarda, Indore",
          "Strategically located along the Super Corridor",
          "Residential plots in 1100, 1250 and 1500 sq.ft. sizes",
          "Attractive plot rate of Rs. 4251 per sq.ft.",
          "Grand sculptural entrance gate with feature lighting",
          "Dedicated Jain Mandir within the development",
          "Modern club house for residents",
          "Landscaped water features, fountains and palm-lined avenues"
        ]
      }
    ],
    "sections": {
      "overview": "Ideal Ambience is a RERA-approved residential plotting project by Ideal Group at Bada Bangarda on the Super Corridor, Indore, offering 1100, 1250 and 1500 sq.ft. plots with a grand entrance, Jain Mandir and club house.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/AMBIENCE BY IDEAL GROUP/img1.jpg"
        },
        {
          "title": "Iconic Entry Pavilion",
          "img": "/propertyList/AMBIENCE BY IDEAL GROUP/img3.jpg"
        },
        {
          "title": "Illuminated Night Entrance",
          "img": "/propertyList/AMBIENCE BY IDEAL GROUP/img4.jpg"
        },
        {
          "title": "Landscaped Water Features & Fountains",
          "img": "/propertyList/AMBIENCE BY IDEAL GROUP/img11.jpg"
        },
        {
          "title": "Reflecting Pool & Sculptural Walls",
          "img": "/propertyList/AMBIENCE BY IDEAL GROUP/img7.jpg"
        },
        {
          "title": "Central Plaza & Fountain Court",
          "img": "/propertyList/AMBIENCE BY IDEAL GROUP/img12.jpg"
        },
        {
          "title": "Palm-Lined Landscape Avenue",
          "img": "/propertyList/AMBIENCE BY IDEAL GROUP/img16.jpg"
        }
      ],
      "specifications": [
        "Residential plots available in 1100 sq.ft. size",
        "Residential plots available in 1250 sq.ft. size",
        "Residential plots available in 1500 sq.ft. size",
        "Plot rate of Rs. 4251 per sq.ft.",
        "RERA approved development",
        "Dedicated Jain Mandir",
        "Club house for residents",
        "Grand sculptural entrance gate with landscaping and water features"
      ],
      "connectivity": [
        "Located along the Super Corridor, Indore",
        "Situated at Bada Bangarda, Indore"
      ],
      "vision": [
        "A landmark gated address on the Super Corridor",
        "Iconic architecture with a grand sculptural entrance",
        "Serene, landscaped community living",
        "Spiritual and social amenities within reach"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Ideal Ambience"
      },
      {
        "label": "Developer",
        "value": "Ideal Group"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Location",
        "value": "Bada Bangarda, Super Corridor, Indore, Madhya Pradesh"
      },
      {
        "label": "Plot Sizes",
        "value": "1100 / 1250 / 1500 sq.ft."
      },
      {
        "label": "Rate",
        "value": "Rs. 4251 per sq.ft."
      },
      {
        "label": "Approval",
        "value": "RERA Approved"
      },
      {
        "label": "Key Amenities",
        "value": "Jain Mandir, Club House"
      }
    ],
    "images": [
      "/propertyList/AMBIENCE BY IDEAL GROUP/img1.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img2.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img3.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img4.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img5.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img6.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img7.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img8.png",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img9.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img10.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img11.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img12.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img13.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img14.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img15.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img16.jpg",
      "/propertyList/AMBIENCE BY IDEAL GROUP/img17.jpg"
    ],
    "floorPlan": {
      "image": "/propertyList/AMBIENCE BY IDEAL GROUP/img8.png",
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.5832274941386!2d75.7922815!3d22.7653849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963010001d40479%3A0x2776497f0ae5dbd0!2sIdeal%20Ambience!5e1!3m2!1sen!2sin!4v1780421697198!5m2!1sen!2sin"
    },
    "developer": {
      "name": "Ideal Group",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Ideal Ambience details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 225,
    "title": "Park Majesty",
    "slug": "park-majesty",
    "location": "Pulak City, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Apartment",
    "bhk": "2/3 BHK",
    "area": "1,175 - 1,519 sq. ft.",
    "description": "Park Majesty is a premium residential apartment project at Pulak City, Indore, offering thoughtfully designed 2 and 3 BHK homes with unit sizes ranging from about 1,175 sq. ft. to 1,519 sq. ft. Designed by Vedic Architects, the development features a sculpted contemporary facade, a rooftop amenity deck and a resort-style lifestyle with curated indoor and outdoor recreation. Spread across multiple floors with a landscaped terrace, it blends modern living with abundant green and social spaces.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Premium 2 and 3 BHK residential apartments at Pulak City, Indore",
          "Unit sizes ranging from approximately 1,175 sq. ft. to 1,519 sq. ft.",
          "Striking contemporary architecture with flowing, curved balcony facades",
          "Rooftop amenity deck with clubhouse, lounge and panoramic city views",
          "Fully equipped cardio and gym studio plus indoor table tennis",
          "Kids play area, yoga zone and landscaped water body",
          "Library and board games room with co-working space",
          "BBQ family sitout, bar counter and dedicated senior citizen lounge",
          "4'-6\" wide jogging track wrapping the terrace level",
          "Spacious ground-floor parking layout with wide internal driveways"
        ]
      }
    ],
    "sections": {
      "overview": "Park Majesty is a premium 2 and 3 BHK residential apartment development at Pulak City, Indore, by Vedic Architects, offering a sculpted modern facade and a rooftop lifestyle deck full of recreation and green spaces.",
      "amenities": [
        {
          "title": "Cardio & Gymnasium",
          "img": "/propertyList/PARK MAJESTY/img1.jpg"
        },
        {
          "title": "Strength & Functional Gym",
          "img": "/propertyList/PARK MAJESTY/img2.jpg"
        },
        {
          "title": "Rooftop Bar & BBQ Family Sitout",
          "img": "/propertyList/PARK MAJESTY/img3.jpg"
        },
        {
          "title": "Co-Working Space & Lounge",
          "img": "/propertyList/PARK MAJESTY/img4.jpg"
        },
        {
          "title": "Library & Board Games Room",
          "img": "/propertyList/PARK MAJESTY/img5.jpg"
        },
        {
          "title": "Kids Play Area & Yoga Space",
          "img": "/propertyList/PARK MAJESTY/img6.jpg"
        },
        {
          "title": "Senior Citizen Lounge",
          "img": "/propertyList/PARK MAJESTY/img8.jpg"
        },
        {
          "title": "Indoor Table Tennis",
          "img": "/propertyList/PARK MAJESTY/img13.jpg"
        }
      ],
      "specifications": [
        "2 and 3 BHK apartment configurations",
        "Carpet/unit sizes from approximately 1,175 sq. ft. to 1,519 sq. ft.",
        "Representative unit sizes: 1,175, 1,180, 1,184, 1,267, 1,276, 1,329 and 1,519 sq. ft.",
        "Typical bedroom dimensions of 10'-0\" X 12'-0\" and 13'-0\" X 10'-0\"",
        "Living rooms ranging from 13'-0\" X 10'-8\" to 14'-10\" X 10'-6\"",
        "3'-6\" to 7'-6\" wide balconies attached to living and bedroom areas",
        "6'-9\" wide internal residential passages on each floor",
        "Ground-floor parking with 13', 16' wide driveways and 7' wide aisles",
        "Residential floors typically 1st to 6th with a dedicated amenity/terrace level",
        "Designed by Vedic Architects (drawing dated 25-03-2026)"
      ],
      "connectivity": [
        "Located within the Pulak City development corridor, Indore",
        "Direct access from the main road fronting the project",
        "Situated in Indore, Madhya Pradesh"
      ],
      "vision": [
        "Resort-style rooftop living above the city skyline",
        "Wellness-focused community with gym, yoga and jogging track",
        "Green, landscaped terraces with a calming water body",
        "Modern sculpted architecture that stands apart",
        "Spaces designed for every generation, from kids to seniors"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Park Majesty"
      },
      {
        "label": "Property Type",
        "value": "Residential Apartments"
      },
      {
        "label": "Configuration",
        "value": "2 / 3 BHK"
      },
      {
        "label": "Location",
        "value": "Pulak City, Indore, Madhya Pradesh"
      },
      {
        "label": "Unit Sizes",
        "value": "1,175 - 1,519 sq. ft."
      },
      {
        "label": "Floors",
        "value": "Ground + Typical floors (1st to 6th) with amenity terrace"
      },
      {
        "label": "Architect",
        "value": "Vedic Architects"
      }
    ],
    "images": [
      "/propertyList/PARK MAJESTY/img21.png",
      "/propertyList/PARK MAJESTY/img14.jpg",
      "/propertyList/PARK MAJESTY/img18.jpg",
      
      "/propertyList/PARK MAJESTY/img3.jpg",
      "/propertyList/PARK MAJESTY/img4.jpg",
      "/propertyList/PARK MAJESTY/img5.jpg",
      "/propertyList/PARK MAJESTY/img1.jpg",
      
      "/propertyList/PARK MAJESTY/img2.jpg",
   
      "/propertyList/PARK MAJESTY/img6.jpg",
      
      "/propertyList/PARK MAJESTY/img8.jpg",
      "/propertyList/PARK MAJESTY/img13.jpg",
      "/propertyList/PARK MAJESTY/img16.jpg",
    ],
    "floorPlan": {
      "images": [
        "/propertyList/PARK MAJESTY/img9.jpg",
        "/propertyList/PARK MAJESTY/img10.jpg",
          "/propertyList/PARK MAJESTY/img11.jpg",
        "/propertyList/PARK MAJESTY/img12.jpg",
        "/propertyList/PARK MAJESTY/img15.jpg",
        "/propertyList/PARK MAJESTY/img17.jpg",
        "/propertyList/PARK MAJESTY/img19.jpg",
        "/propertyList/PARK MAJESTY/img20.jpg"
      ],
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2312571868383!2d75.82923205041853!3d22.64008962840295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fbf2c8f2d965%3A0xb8d50383d96a32a2!2sPark%20Majesty%2C%20A-16%2C%20near%20Arham%20Heights%2C%20Pulak%20City%2C%20Silicon%20City%2C%20Indore%2C%20Madhya%20Pradesh%20452012!5e1!3m2!1sen!2sin!4v1780423374864!5m2!1sen!2sin" 
    },
    "developer": {
      "name": "Vedic Architects",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Park Majesty details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 231,
    "title": "Singapore Premium Park",
    "slug": "singapore-premium-park",
    "location": "Palakhedi, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "",
    "description": "Singapore Premium Park in Palakhedi, Indore is a ready-to-move plotted housing society that blends comfort and style with Vastu-compliant, fully developed plots. The gated community offers 30 ft wide internal roads, 24x7 security and water supply, landscaped gardens, a children's play area and modern amenities. With strong connectivity to schools, hospitals and the airport, it is well suited for both self-use and investment.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Fully developed gated colony with 30 ft wide internal roads",
          "24x7 security at a well-planned entrance gate",
          "24x7 water supply with boundary wall and street lights around the project",
          "Underground pipeline for clean drinking water and fully developed drainage line",
          "Well-planned bore-wells, tube-wells and overhead water tank for water management",
          "Children's park with modern equipment and C.C. roads",
          "Beautiful natural environment with temple, community hall and worship place",
          "Plots developed as per Vastu principles",
          "Pollution-free, green natural surroundings",
          "Various bank loan schemes available for the project"
        ]
      }
    ],
    "sections": {
      "overview": "Singapore Premium Park is a ready-to-move, Vastu-compliant gated plotted township in Palakhedi, Indore offering modern amenities, landscaped greens and excellent connectivity.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/SINGAPORE PREMIUM PARK/img2.png"
        },
        {
          "title": "Landscaped Garden",
          "img": "/propertyList/SINGAPORE PREMIUM PARK/img4.png"
        },
        {
          "title": "Well-Developed Plots with Internal Roads",
          "img": "/propertyList/SINGAPORE PREMIUM PARK/img5.png"
        },
        {
          "title": "Central Green Park",
          "img": "/propertyList/SINGAPORE PREMIUM PARK/img6.png"
        },
        {
          "title": "Overhead Water Tank",
          "img": "/propertyList/SINGAPORE PREMIUM PARK/img7.png"
        }
      ],
      "specifications": [
        "Fully developed colony with 30 ft wide roads",
        "Strategically designed plots with brick work on boundary walls",
        "C.C. roads and well-maintained internal roads",
        "Boundary wall and attractive street lights for nighttime illumination",
        "Underground pipeline for clean drinking water and fully developed drainage line",
        "Bore-wells, tube-wells and overhead water tank for water management",
        "Paved compound and gated community",
        "Plots developed as per Vastu principles"
      ],
      "connectivity": [
        "Indore Junction, 13.8 km",
        "Treasure Island Mall, 15 km",
        "NH 47, 14 km",
        "Devi Ahilyabai Holkar International Airport, 7.3 km",
        "Chameli Devi Public School",
        "Devi Ahilya Vishwavidyalaya",
        "Shalby Multi-Specialty Hospital"
      ],
      "vision": [
        "A vibrant gated community designed for comfort and convenience",
        "Pollution-free natural living with abundant greenery",
        "Vastu-aligned plots for prosperous homes",
        "Modern amenities with landscaped gardens and play areas",
        "A promising location for self-use and long-term investment"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Singapore Premium Park"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Location",
        "value": "Palakhedi, Indore, Madhya Pradesh"
      },
      {
        "label": "Status",
        "value": "Ready to Move"
      },
      {
        "label": "Configuration",
        "value": "Residential Plots"
      },
      {
        "label": "Road Width",
        "value": "30 ft wide roads"
      },
      {
        "label": "Compliance",
        "value": "Vastu Compliant"
      }
    ],
    "images": [
      "/propertyList/SINGAPORE PREMIUM PARK/img1.jpg",
      "/propertyList/SINGAPORE PREMIUM PARK/img2.png",
      "/propertyList/SINGAPORE PREMIUM PARK/img3.jpg",
      "/propertyList/SINGAPORE PREMIUM PARK/img4.png",
      "/propertyList/SINGAPORE PREMIUM PARK/img5.png",
      "/propertyList/SINGAPORE PREMIUM PARK/img6.png",
      "/propertyList/SINGAPORE PREMIUM PARK/img7.png"
    ],
    "floorPlan": {
      "image": "",
      "pdf": ""
    },
    "map": {
      "image": "/propertyList/SINGAPORE PREMIUM PARK/img3.jpg",
      "locationLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.2961552348684!2d75.79598297563281!3d22.77521697934777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396301fb99eacdf7%3A0xe46c315fc8045c83!2sSingapore%20premium%20park!5e1!3m2!1sen!2sus!4v1780424061980!5m2!1sen!2sus" 
    },
    "developer": {
      "name": "",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Singapore Premium Park details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 232,
    "title": "Singapore Prime Home",
    "slug": "singapore-prime-home",
    "location": "Mumbai-Agra Highway (Bypass), Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "Plots of 1000 sq.ft. (20x50) and 1500 sq.ft. (25x60 avg.)",
    "description": "Singapore Prime Home is a thoughtfully planned plotted residential project in Indore, offering well-laid plots in sizes of 20x50 and 25x60 sq.ft. along wide internal roads. Designed for comfort, leisure and convenience, the development features premium amenities including a garden, kids play area, overhead water tank and CCTV. It enjoys excellent connectivity to landmarks such as Phoenix Citadel Mall, Sheraton Grand Palace Indore and The Emerald Heights World School.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Plot sizes of 20 X 50 (1000 sq.ft.) and 25 X 60 (1500 sq.ft. avg.)",
          "Wide internal roads of 24m and 18m width",
          "Overhead water tank for assured water supply",
          "CCTV surveillance for safety and security",
          "Landscaped garden and green open spaces",
          "Dedicated kids playing area",
          "The Emerald Heights World School just 1 min away",
          "Sheraton Grand Palace Indore within 3 mins",
          "Phoenix Citadel Mall within 5 mins",
          "RERA registered project (P-IND-25-5729)"
        ]
      }
    ],
    "sections": {
      "overview": "Singapore Prime Home is a RERA-registered plotted residential project in Indore offering 20x50 and 25x60 sq.ft. plots with wide roads, a garden, kids play area, overhead water tank and CCTV, close to major landmarks.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/SINGAPORE PRIME HOME/img3.png"
        },
        {
          "title": "Master Plan Layout",
          "img": "/propertyList/SINGAPORE PRIME HOME/img2.jpg"
        },
        {
          "title": "Garden & Green Spaces",
          "img": "/propertyList/SINGAPORE PRIME HOME/img2.jpg"
        },
        {
          "title": "Kids Play Area",
          "img": "/propertyList/SINGAPORE PRIME HOME/img2.jpg"
        },
        {
          "title": "Wide Internal Roads",
          "img": "/propertyList/SINGAPORE PRIME HOME/img2.jpg"
        }
      ],
      "specifications": [
        "Plot Size: 25 X 60 (avg.) = 1500 sq.ft.",
        "Plot Size: 20 X 50 = 1000 sq.ft.",
        "24.00 M wide road",
        "18.00 M wide road",
        "9.00 M wide internal roads",
        "Overhead water tank",
        "CCTV surveillance",
        "Landscaped garden",
        "Kids playing area"
      ],
      "connectivity": [
        "Phoenix Citadel Mall - 5 mins",
        "Sheraton Grand Palace Indore - 3 mins",
        "The Emerald Heights World School - 1 min",
        "Located on Mumbai-Agra Highway (Bypass), Indore"
      ],
      "vision": [
        "Thoughtfully connected to comfort, leisure and convenience",
        "Designed for a balanced and fulfilling way of life",
        "Green spaces and modern recreation for every lifestyle",
        "An environment that supports community and belonging"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Singapore Prime Home"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Location",
        "value": "Mumbai-Agra Highway (Bypass), Indore, Madhya Pradesh"
      },
      {
        "label": "Plot Sizes",
        "value": "20 X 50 (1000 sq.ft.) & 25 X 60 (1500 sq.ft. avg.)"
      },
      {
        "label": "Road Width",
        "value": "24m & 18m wide roads"
      },
      {
        "label": "RERA No.",
        "value": "P-IND-25-5729"
      }
    ],
    "images": [
      "/propertyList/SINGAPORE PRIME HOME/img3.png",
      "/propertyList/SINGAPORE PRIME HOME/img1.jpg",
      "/propertyList/SINGAPORE PRIME HOME/img2.jpg",
      
    ],
    "floorPlan": {
      "image": "/propertyList/SINGAPORE PRIME HOME/img2.jpg",
      "pdf": ""
    },
    "map": {
      "image": "/propertyList/SINGAPORE PRIME HOME/img1.jpg",
      "locationLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.509096465217!2d75.89040271597685!3d22.73364692534576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd002fcaa129%3A0xd03756eb18a12bd2!2sSarthak%20Singapore%20prime%20homes%20%F0%9F%8F%A1!5e1!3m2!1sen!2sus!4v1780424153280!5m2!1sen!2sus"
    },
    "developer": {
      "name": "Roots N Roofs",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Singapore Prime Home details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 233,
    "title": "Sky City Premium",
    "slug": "sky-city-premium",
    "location": "Bada Bangarda, Super Corridor, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "",
    "description": "Sky City Premium is a premium residential real estate and plotting project by Roots & Roofs, located at Bada Bangarda on the rapidly developing Super Corridor in Indore. Strategically positioned with access via MR-5 and the Super Corridor, the project offers well-planned residential plots with wide roads, landscaped green zones and modern community amenities. It sits close to neighboring developments like Gold City and the Pipalya Tafa area, in one of Indore's fastest growing economic and residential corridors.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "30 feet wide internal roads",
          "Grand main entrance gate",
          "4 theme-based religious places",
          "Children's play zone",
          "Free underground water tank",
          "Free electricity connection",
          "24/7 security",
          "Dedicated sitting zones and green zones",
          "Strategically located on the Super Corridor",
          "Directly connected to MR-5 road"
        ]
      }
    ],
    "sections": {
      "overview": "Sky City Premium is a premium residential plotting project by Roots & Roofs on Indore's Super Corridor at Bada Bangarda, offering planned plots with wide roads, landscaped green zones and modern amenities.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/Sky City Premium/img6.jpg"
        },
        {
          "title": "Landscaped Garden & Green Zone",
          "img": "/propertyList/Sky City Premium/img2.jpg"
        },
        {
          "title": "Sitting Zone with Pavilion",
          "img": "/propertyList/Sky City Premium/img3.jpg"
        },
        {
          "title": "Central Park Area",
          "img": "/propertyList/Sky City Premium/img5.jpg"
        },
        {
          "title": "Decorative Sculpture Plaza",
          "img": "/propertyList/Sky City Premium/img7.jpg"
        }
      ],
      "specifications": [
        "30 feet wide internal roads",
        "9.00 M wide roads and 7.50 M wide roads within layout",
        "3 M wide pathway",
        "Multiple park areas (815.23 SQM, 1224.32 SQM, 703.37 SQM and more)",
        "Plot sizes including 6.10 x 17.94, 6.10 x 16.76, 6.10 x 18.29 and 6.10 x 15.24",
        "Free underground water tank",
        "Free electricity connection",
        "Main entrance gate",
        "4 theme-based religious places"
      ],
      "connectivity": [
        "Located on the Super Corridor, one of Indore's fastest developing economic and residential zones",
        "Accessible via MR-5 road, near Sky City 4, Bada Bangarda",
        "Close to neighboring developments like Gold City",
        "Near the Pipalya Tafa area",
        "Plot No. 2A, Scheme No. 169B, Bada Bangarda, Super Corridor, Indore (Pincode 453112)"
      ],
      "vision": [
        "Premium living on Indore's growth corridor",
        "Green and open community spaces",
        "Secure gated environment",
        "Well-planned plotted development",
        "Modern lifestyle amenities"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Sky City Premium"
      },
      {
        "label": "Developer",
        "value": "Roots & Roofs"
      },
      {
        "label": "Property Type",
        "value": "Premium Residential & Plotting Project"
      },
      {
        "label": "Location",
        "value": "Bada Bangarda, Super Corridor, Indore"
      },
      {
        "label": "Address",
        "value": "Plot No. 2A, Scheme No. 169B, Bada Bangarda, Super Corridor, Indore (Pincode 453112)"
      },
      {
        "label": "Secondary Access",
        "value": "Via MR-5, near Sky City 4, Bada Bangarda, Indore (Pincode 452010)"
      },
      {
        "label": "City",
        "value": "Indore"
      },
      {
        "label": "State",
        "value": "Madhya Pradesh"
      },
      {
        "label": "size",
        "value": "1100 - 1200 sq.ft."
      },
      {
        "label": "pricing",
        "type":"basic",
        "value": ""
      }
    ],
    "images": [
      "/propertyList/Sky City Premium/img1.jpg",
      "/propertyList/Sky City Premium/img2.jpg",
      "/propertyList/Sky City Premium/img3.jpg",
      "/propertyList/Sky City Premium/img4.jpg",
      "/propertyList/Sky City Premium/img5.jpg",
      "/propertyList/Sky City Premium/img6.jpg",
      "/propertyList/Sky City Premium/img7.jpg",
      "/propertyList/Sky City Premium/img8.jpg",
      "/propertyList/Sky City Premium/img9.jpg"
    ],
    "floorPlan": {
      "image": "/propertyList/Sky City Premium/img9.jpg",
      "pdf": ""
    },
    "map": {
      "image": "/propertyList/Sky City Premium/img8.jpg",
      "locationLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.679355106347!2d75.7889719756325!3d22.762091679357198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630100251f44bf%3A0x3616737139dee684!2sSky%20City%20Premium!5e1!3m2!1sen!2sus!4v1780424212943!5m2!1sen!2sus"
    },
    "developer": {
      "name": "Roots & Roofs",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Sky City Premium details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 238,
    "title": "Emerald Crescent",
    "slug": "emerald-crescent",
    "location": "Village Mayakhedi, Tehsil Kanadiya, AB Bypass Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "1500 - 2340 sq.ft. (30'x50', 30'x60', 39'x60' avg.)",
    "price": [],
    "description": "Emerald Crescent is a premium gated plotting project by Emerald Developers located at Village Mayakhedi, Tehsil Kanadiya, District Indore (MP), less than 500m from the main AB Bypass Road. The project features an iconic entrance gate, a signature crescent-shaped central spine road, and meticulously planned residential plots of 1500 sq.ft. (30'x50'), 1800 sq.ft. (30'x60') and 2340 sq.ft. avg. (39'x60') surrounded by lush landscaped gardens. More than 70% of plots are garden facing, set within a community designed around greenery, security and modern infrastructure.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Signature plotting project with iconic entrance gate and crescent-shaped central spine road",
          "Plot sizes of 1500 sq.ft. (30'x50'), 1800 sq.ft. (30'x60') and 2340 sq.ft. avg. (39'x60')",
          "More than 70% of plots are garden facing",
          "More than 16 gardens with super stuffed greenery",
          "Less than 500m from the main AB Bypass Road",
          "Gated community with 24x7 CCTV camera surveillance and elegant boundary wall",
          "Luxurious entrance plaza with 100 ft wide entrance",
          "Developed by Emerald Developers, a CREDAI Indore member and a Vinod Agarwal Enterprise"
        ]
      }
    ],
    "sections": {
      "overview": "A premium gated plotted development by Emerald Developers off AB Bypass Road, Indore.",
      "amenities": [
        { "title": "Eco Gym", "img": "/propertyList/Emerald Crescent/img7.png" },
        { "title": "Cricket Pitch", "img": "/propertyList/Emerald Crescent/img7.png" },
        { "title": "Clubhouse Access", "img": "/propertyList/Emerald Crescent/img7.png" },
        { "title": "Kids Play Zone", "img": "/propertyList/Emerald Crescent/img11.png" },
        { "title": "Mini Amphitheatre", "img": "/propertyList/Emerald Crescent/img11.png" },
        { "title": "Tennis Court", "img": "/propertyList/Emerald Crescent/img7.png" },
        { "title": "Water Fountain", "img": "/propertyList/Emerald Crescent/img10.png" },
        { "title": "Gazebos & Open Sitting Area", "img": "/propertyList/Emerald Crescent/img11.png" }
      ],
      "specifications": [
        "Luxurious entrance plaza with 100 ft wide entrance",
        "Built on the theme of contemporary architecture",
        "More than 16 gardens",
        "High strength road with cobblestone pathways",
        "Modern theme street lights",
        "Underground water tank and STP with underground electricity",
        "HDPE water line with electrofusion fitting",
        "Collar spigot pipes used for all concerned services",
        "24x7 CCTV camera surveillance",
        "Elegant plot boundary wall",
        "Rubber granule floor at kids play area"
      ],
      "connectivity": [
        "Less than 500m from the main AB Bypass Road (Indore Bypass Road)",
        "Schools: Shishukunj, DPS, Emerald Height, G.D. Goenka",
        "Hospitals: Kokilaben Hospital, Bombay Hospital",
        "Hotels: Sheraton, The Park, Marriott, Radisson Blu",
        "Retail: Phoenix Mall, Best Price",
        "Corporate Office: C-21 Business Park"
      ],
      "vision": [
        "Giving luxury a meaning the Emerald way - a blend of refined living and lush greenery",
        "Guided by nature, offering peaceful surroundings that bring a profound state of inner calmness",
        "Thoughtfully designed landscape gardens weave through the community, blending organic beauty with modern elegance",
        "Designed for those who seek not just a home, but a lifestyle that elevates every moment into an experience of tranquility and joy"
      ]
    },
    "projectData": [
      { "label": "Project Name", "value": "Emerald Crescent" },
      { "label": "Developer", "value": "Emerald" },
      { "label": "RERA Registration ID", "value": "P-IND_25-5789" },
      { "label": "Project Type", "value": "Residential Plotted Development" },
      { "label": "Plot Sizes", "value": "1500 sq.ft. (30'x50'), 1800 sq.ft. (30'x60'), 2340 sq.ft. avg. (39'x60')" },
      { "label": "Corporate Office", "value": "Agarwal House, 5, Yeshwant Colony, Indore - 452003 (M.P.)" },
      { "label": "Contact", "value": "+91-76106-76106" }
    ],
    "images": [
      "/propertyList/Emerald Crescent/img1.png",
      "/propertyList/Emerald Crescent/img2.png",
      "/propertyList/Emerald Crescent/img3.png",
      "/propertyList/Emerald Crescent/img4.png",
      "/propertyList/Emerald Crescent/img5.png",
      "/propertyList/Emerald Crescent/img6.png",
      "/propertyList/Emerald Crescent/img7.png",
      "/propertyList/Emerald Crescent/img8.png",
      "/propertyList/Emerald Crescent/img9.png",
      "/propertyList/Emerald Crescent/img10.png",
      "/propertyList/Emerald Crescent/img11.png",
      "/propertyList/Emerald Crescent/img12.png",
      "/propertyList/Emerald Crescent/img13.png"
    ],
    "floorPlan": { "image": "/propertyList/Emerald Crescent/img5.png", "pdf": "" },
    "map": { "image": "/propertyList/Emerald Crescent/img12.png", "locationLink": "" },
    "developer": { "name": "Emerald", "description": "Developer name is taken from the uploaded project brochure." },
    "disclaimer": "Emerald Crescent details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 239,
    "title": "Singapore Miracle",
    "slug": "singapore-miracle-sarthak-singapore",
    "location": "Navlakha, AB Road & Navlakha Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Apartment",
    "bhk": "2 & 4 BHK",
    "area": "2 BHK: 1185 - 1303 sq.ft. | 4 BHK: 2175 - 2323 sq.ft. (Super Built-up)",
    "price": [],
    "description": "Singapore Miracle by Sarthak Singapore is a modern mixed-use development in the heart of Indore's dynamic Navlakha area, located on AB Road and Navlakha Road. Spread over approximately 18,700 sq.ft., the project rises as an 8-floor marvel with 1 basement and houses 41 flats, 22 offices, 6 shops and 10 showrooms. The development blends contemporary residential apartments (2 BHK and 4 BHK) with premium double-height showrooms and offices, ground-floor branded retail, and lifestyle amenities including a swimming pool, club house, fully equipped gym and landscaped open spaces, delivering modern homes in the city's heart.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Modern mixed-use development in Indore's dynamic Navlakha area",
          "Strategically located on AB Road and Navlakha Road",
          "Spread over approximately 18,700 sq.ft.",
          "8 floors plus 1 basement structure",
          "Composition of 41 flats, 22 offices, 6 shops and 10 showrooms",
          "2 BHK and 4 BHK residential apartments with balconies",
          "Premium double-height commercial showrooms and offices",
          "Swimming pool, club house, fully equipped gym and kids play area",
          "Grand entrance and waiting lobby with high-speed elevators",
          "Basement and ground-level parking with open green spaces"
        ]
      }
    ],
    "sections": {
      "overview": "Singapore Miracle is an 8-floor (plus basement) mixed-use landmark by Sarthak Singapore in the heart of Indore's Navlakha area, combining 2 & 4 BHK apartments with showrooms, offices and retail shops, supported by modern lifestyle amenities.",
      "amenities": [
        { "title": "Grand Entrance Lobby", "img": "/propertyList/Singapore Miracle by Sarthak Singapore/img6.png" },
        { "title": "High-Speed Elevators", "img": "/propertyList/Singapore Miracle by Sarthak Singapore/img7.png" },
        { "title": "Swimming Pool", "img": "/propertyList/Singapore Miracle by Sarthak Singapore/img7.png" },
        { "title": "Spacious Luxury Apartments", "img": "/propertyList/Singapore Miracle by Sarthak Singapore/img7.png" },
        { "title": "Double Height Showrooms", "img": "/propertyList/Singapore Miracle by Sarthak Singapore/img8.png" },
        { "title": "Open Green Spaces", "img": "/propertyList/Singapore Miracle by Sarthak Singapore/img8.png" },
        { "title": "Fully Equipped Gym", "img": "/propertyList/Singapore Miracle by Sarthak Singapore/img8.png" },
        { "title": "Grand Waiting Lobby", "img": "/propertyList/Singapore Miracle by Sarthak Singapore/img9.png" },
        { "title": "Kids Play Area", "img": "/propertyList/Singapore Miracle by Sarthak Singapore/img9.png" },
        { "title": "Ample Parking", "img": "/propertyList/Singapore Miracle by Sarthak Singapore/img9.png" },
        { "title": "Club House", "img": "/propertyList/Singapore Miracle by Sarthak Singapore/img17.png" }
      ],
      "specifications": [
        "Mixed-use development of 8 floors plus 1 basement",
        "Total project composition: 41 flats, 22 offices, 6 shops and 10 showrooms",
        "Spread over approximately 18,700 sq.ft.",
        "2 BHK flats: built-up area approx. 742.64 - 817.50 sq.ft. (super built-up approx. 1185 - 1303 sq.ft.)",
        "4 BHK flats: built-up area approx. 1374.63 - 1478.63 sq.ft. (super built-up approx. 2175 - 2323 sq.ft.)",
        "Ground floor showrooms: built-up area approx. 223 - 715 sq.ft.",
        "First floor offices: built-up area approx. 270 - 683 sq.ft.",
        "Swimming pool (approx. 40'0\" x 19'4\"), club area and club terrace on the second floor",
        "Common terrace of approx. 3887 sq.ft.",
        "Basement and ground-level parking with service lifts and high-speed elevators"
      ],
      "connectivity": [
        "Located on AB Road and Navlakha Road in the heart of Indore",
        "Close to Indira Gandhi Square and Agrasen Square",
        "Near Indore Zoo Park",
        "Near Jaora Compound and K V Road",
        "Close to ILVA Hr. Sec. School and Government Holkar Science College",
        "Near INOX - Sapna Sangeeta Mall"
      ],
      "vision": [
        "Contemporary design reflecting modern architectural trends",
        "Spacious apartments with ample living space and stunning views",
        "Urban convenience with retail and showrooms within the complex",
        "Integrated lifestyle blending residential and commercial spaces",
        "Serene living in a peaceful environment within the city's heart"
      ]
    },
    "projectData": [
      { "label": "Project Name", "value": "Singapore Miracle" },
      { "label": "Developer", "value": "Sarthak Singapore" },
      { "label": "Property Type", "value": "Mixed-Use (Apartments, Showrooms, Offices & Shops)" },
      { "label": "Location", "value": "Navlakha, AB Road & Navlakha Road, Indore" },
      { "label": "Configuration", "value": "2 & 4 BHK Flats" },
      { "label": "Total Project Area", "value": "Approx. 18,700 sq.ft." },
      { "label": "Structure", "value": "8 Floors + 1 Basement" },
      { "label": "Composition", "value": "41 Flats, 22 Offices, 6 Shops, 10 Showrooms" }
    ],
    "images": [
      "/propertyList/Singapore Miracle by Sarthak Singapore/img1.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img2.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img3.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img4.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img5.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img6.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img7.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img8.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img9.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img10.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img11.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img12.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img13.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img14.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img15.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img16.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img17.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img18.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img19.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img20.png",
      "/propertyList/Singapore Miracle by Sarthak Singapore/img21.png"
    ],
    "floorPlan": { "image": "/propertyList/Singapore Miracle by Sarthak Singapore/img22.png", "pdf": "" },
    "map": { "image": "/propertyList/Singapore Miracle by Sarthak Singapore/img3.png", "locationLink": "" },
    "developer": { "name": "Sarthak Singapore", "description": "Developer name is taken from the uploaded project brochure (Sarthak Singapore - Build on trust)." },
    "disclaimer": "Singapore Miracle details are prepared only from the uploaded brochure. Price, area, unit sizes, RERA registration and approvals should be verified with the official sales team."
  },
  {
    "id": 240,
    "title": "Singapore Marina",
    "slug": "singapore-marina-sarthak-singapore",
    "location": "Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Apartment",
    "bhk": "3, 4 BHK",
    "area": "1378 - 2108 sq.ft. built-up (1970 - 3014 sq.ft. super built-up)",
    "price": [],
    "description": "Singapore Marina by Sarthak Singapore is a high-rise residential tower in Indore, Madhya Pradesh, offering 3 and 4 BHK apartments across two blocks (A1 and A2) rising up to 14 floors. The development sits above a ground-floor retail arcade of 26 shops with ample surface car parking. Residents enjoy resort-style amenities including a swimming pool with a waterfall feature, landscaped lawns, and indoor games, under the project tagline 'A Sea of Comfort'.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "High-rise residential tower with two blocks: Block A1 and Block A2",
          "3 and 4 BHK apartments (Block A1: 3 & 4 BHK; Block A2: 3 BHK)",
          "Floors up to the 14th level with multiple layout options per floor",
          "Ground-floor retail arcade with 26 shops (total super built-up approx. 20,843 sq.ft.)",
          "Swimming pool with feature waterfall and sun-deck loungers",
          "Landscaped garden and green lawn areas",
          "Indoor games including table tennis and billiards/pool table",
          "Guest room provision on the first floor",
          "Ample surface car parking and wide internal pathways",
          "By Sarthak Singapore - 23 years of experience, 30,000 families' trust"
        ]
      }
    ],
    "sections": {
      "overview": "A high-rise 3 & 4 BHK apartment tower with ground-floor shops in Indore by Sarthak Singapore.",
      "amenities": [
        { "title": "Swimming Pool with Waterfall", "img": "/propertyList/Singapore Marina by Sarthak Singapore/img6.png" },
        { "title": "Sun Deck & Pool Loungers", "img": "/propertyList/Singapore Marina by Sarthak Singapore/img6.png" },
        { "title": "Landscaped Garden & Lawn", "img": "/propertyList/Singapore Marina by Sarthak Singapore/img7.png" },
        { "title": "Table Tennis", "img": "/propertyList/Singapore Marina by Sarthak Singapore/img7.png" },
        { "title": "Billiards / Pool Table", "img": "/propertyList/Singapore Marina by Sarthak Singapore/img7.png" },
        { "title": "Clubhouse / Indoor Lounge", "img": "/propertyList/Singapore Marina by Sarthak Singapore/img6.png" },
        { "title": "Ground-Floor Retail Shops", "img": "/propertyList/Singapore Marina by Sarthak Singapore/img5.png" },
        { "title": "Surface Car Parking", "img": "/propertyList/Singapore Marina by Sarthak Singapore/img8.png" },
        { "title": "Guest Room (First Floor)", "img": "/propertyList/Singapore Marina by Sarthak Singapore/img10.png" },
        { "title": "Landscaped Entry & Wide Pathways", "img": "/propertyList/Singapore Marina by Sarthak Singapore/img4.png" }
      ],
      "specifications": [
        "Two residential blocks: Block A1 and Block A2",
        "Block A1 (2nd, 4th, 6th, 8th, 10th, 12th, 14th floors): 3 & 4 BHK front-facing layouts",
        "Block A1 (3rd, 5th, 7th, 9th, 11th, 13th floors): Option-2 reduced-area 3 BHK layouts",
        "Block A2 (2nd, 4th, 6th, 8th, 10th, 12th, 14th floors): 3 & 4 BHK front-facing layouts",
        "Block A2 (3rd, 5th, 7th, 9th, 11th, 13th floors): Option-2 reduced-area 3 BHK layouts",
        "First floor includes guest room and swimming pool deck",
        "Block A1 unit super built-up: 4 BHK approx. 3014 sq.ft.; 3 BHK approx. 2195 - 2374 sq.ft.",
        "Block A2 unit super built-up: 3 BHK approx. 1970 - 2028 sq.ft.",
        "Ground floor: 26 shops; total built-up 13,895 sq.ft. / super built-up 20,843 sq.ft.",
        "Main-road facing apartments available"
      ],
      "connectivity": [],
      "vision": [
        "A Sea of Comfort - resort-style high-rise living in Indore",
        "Backed by Sarthak Singapore with 23 years of experience and the trust of 30,000 families"
      ]
    },
    "projectData": [
      { "label": "Project Name", "value": "Singapore Marina" },
      { "label": "Developer", "value": "Sarthak Singapore" },
      { "label": "Tagline", "value": "A Sea of Comfort" },
      { "label": "Location", "value": "Indore, Madhya Pradesh" },
      { "label": "Property Type", "value": "Residential Apartment with Ground-Floor Shops" },
      { "label": "Configurations", "value": "3 & 4 BHK" },
      { "label": "Structure", "value": "Two blocks (A1 & A2), up to 14 floors" },
      { "label": "Ground Floor Shops", "value": "26 shops" }
    ],
    "images": [
      "/propertyList/Singapore Marina by Sarthak Singapore/img1.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img2.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img3.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img4.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img5.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img6.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img7.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img8.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img9.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img10.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img11.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img12.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img13.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img14.png"
    ],
     "floorPlan": {
      "images": [
        "/propertyList/Singapore Marina by Sarthak Singapore/img8.png", 
        "/propertyList/Singapore Marina by Sarthak Singapore/img9.png",
        "/propertyList/Singapore Marina by Sarthak Singapore/img10.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img11.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img12.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img13.png",
      "/propertyList/Singapore Marina by Sarthak Singapore/img14.png",
      ],
      "pdf": ""
    },
    "map": { "image": "", "locationLink": "" },
    "developer": { "name": "Sarthak Singapore", "description": "Developer name is taken from the uploaded project brochure." },
    "disclaimer": "Singapore Marina details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 241,
    "title": "Singapore One Street",
    "slug": "singapore-one-street-sarthak-singapore",
    "location": "LIG Square, AB Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Commercial",
    "bhk": "Showrooms, Shops & Offices",
    "area": "Built-up 81 - 2069 sq.ft. (Super built-up up to 3103.5 sq.ft.)",
    "price": [],
    "description": "Singapore One Street by Sarthak Singapore is a commercial high-street destination at LIG Square on AB Road, Indore, planned for businesses that rely on visibility and consistent footfall. It offers street-level showrooms, multi-level shopping, offices, cafes, rooftop dining and entertainment zones across lower ground to sixth floors. Retail and office spaces front AB Road (150 ft), a 70 ft central pedestrian street and a 60 ft link road corridor, with a lively day-to-night character designed for repeat visits.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Commercial high street with showrooms at street level and offices above",
          "AB Road-facing showrooms along a 150 ft wide stretch",
          "Central street-facing retail on a 70 ft wide pedestrian street",
          "Link Road-facing options along a 60 ft wide corridor",
          "Cafes, restaurants & rooftop dining zones with illuminated night-street facades",
          "Food court zone, multi-level shopping street and live performance area",
          "Gym, sports & activity zone and entertainment zones",
          "400+ vehicle parking space with 4 EV charging stations",
          "Service lift (separate) and power backup for common areas",
          "Located at LIG Square with strong connectivity to Vijay Nagar and AB Road"
        ]
      }
    ],
    "sections": {
      "overview": "A commercial high-street at LIG Square, Indore offering showrooms, shops, offices, rooftop dining and entertainment zones.",
      "amenities": [
        { "title": "Food court zone", "img": "/propertyList/Singapore One Street by Sarthak Singapore/img3.png" },
        { "title": "Cafe & restaurants", "img": "/propertyList/Singapore One Street by Sarthak Singapore/img3.png" },
        { "title": "Multi-level shopping street", "img": "/propertyList/Singapore One Street by Sarthak Singapore/img3.png" },
        { "title": "Live performance area", "img": "/propertyList/Singapore One Street by Sarthak Singapore/img3.png" },
        { "title": "Sports & activity zone", "img": "/propertyList/Singapore One Street by Sarthak Singapore/img4.png" },
        { "title": "Gym", "img": "/propertyList/Singapore One Street by Sarthak Singapore/img4.png" },
        { "title": "Service lift (separate)", "img": "/propertyList/Singapore One Street by Sarthak Singapore/img4.png" },
        { "title": "4 EV charging stations", "img": "/propertyList/Singapore One Street by Sarthak Singapore/img4.png" },
        { "title": "400+ vehicle parking space", "img": "/propertyList/Singapore One Street by Sarthak Singapore/img4.png" }
      ],
      "specifications": [
        "Lower Ground Floor: 98 units, built-up area total 46055 sq.ft. (super built-up 69082.5 sq.ft.)",
        "Ground Floor: retail units total 38780 sq.ft. built-up (58170 sq.ft. super built-up)",
        "First Floor: units total 36385 sq.ft. built-up (54577.5 sq.ft. super built-up)",
        "Second Floor: units total 28668 sq.ft. built-up (43002 sq.ft. super built-up)",
        "Individual shop built-up sizes range from approx. 81 sq.ft. to 2069 sq.ft.",
        "Retail placement: AB Road-facing showrooms (150 ft), central street-facing retail (70 ft), link road-facing (60 ft)",
        "Office options: AB Road-facing, central street-facing, link road-facing and full glass offices",
        "Multi-level structure from Lower Ground to Sixth Floor with terraces and rooftop dining"
      ],
      "connectivity": [
        "Dhenu Market - 5 minutes",
        "Vijay Nagar Square - 5 minutes",
        "Maharani Road - 10 minutes",
        "New Siyaganj - 10 minutes",
        "Scheme 54-PU4 - 10 minutes",
        "Dewas Naka - 12 minutes",
        "Bengali Square - 15 minutes",
        "Jawahar Marg - 20 minutes",
        "Timber Market - 20 minutes"
      ],
      "vision": [
        "An environment that suits the right businesses, planned for visibility and consistent footfall",
        "Showrooms at street level, offices above with open views and cafes & rooftop dining zones",
        "A lively night street with illuminated facades and evening footfall that extends business hours",
        "A pedestrian-friendly social street designed to be visited, revisited and remembered"
      ]
    },
    "projectData": [
      { "label": "Project Name", "value": "Singapore One Street" },
      { "label": "Property Type", "value": "Commercial" },
      { "label": "Developer", "value": "Sarthak Singapore" },
      { "label": "Location", "value": "LIG Square, Indore (M.P.)" },
      { "label": "RERA Registration ID", "value": "P-IND-24-5245" }
    ],
    "images": [
      "/propertyList/Singapore One Street by Sarthak Singapore/img1.png",
      "/propertyList/Singapore One Street by Sarthak Singapore/img2.png",
      "/propertyList/Singapore One Street by Sarthak Singapore/img3.png",
      "/propertyList/Singapore One Street by Sarthak Singapore/img4.png",
      "/propertyList/Singapore One Street by Sarthak Singapore/img5.png",
      "/propertyList/Singapore One Street by Sarthak Singapore/img6.png",
      "/propertyList/Singapore One Street by Sarthak Singapore/img7.png",
      "/propertyList/Singapore One Street by Sarthak Singapore/img8.png",
      "/propertyList/Singapore One Street by Sarthak Singapore/img9.png",
      "/propertyList/Singapore One Street by Sarthak Singapore/img10.png",
      "/propertyList/Singapore One Street by Sarthak Singapore/img11.png",
      "/propertyList/Singapore One Street by Sarthak Singapore/img12.png",
      "/propertyList/Singapore One Street by Sarthak Singapore/img13.png",
      "/propertyList/Singapore One Street by Sarthak Singapore/img14.png"
    ],
    "floorPlan": { "image": "/propertyList/Singapore One Street by Sarthak Singapore/img7.png", "pdf": "" },
    "map": { "image": "/propertyList/Singapore One Street by Sarthak Singapore/img14.png", "locationLink": "" },
    "developer": { "name": "Sarthak Singapore", "description": "Developer name is taken from the uploaded project brochure." },
    "disclaimer": "Singapore One Street details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 242,
    "title": "Singapore Luxuria",
    "slug": "singapore-luxuria-sarthak-singapore",
    "location": "Indore - Dewas Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "Residential & commercial plots in multiple sizes (per master plan)",
    "price": [],
    "description": "Singapore Luxuria by Sarthak Singapore is a large, well-planned plotted township laid out across multiple sectors (B, C and D) with an extensive grid of residential and shop-cum-residential plots. As per the master plan, the layout is organised around wide internal roads (9 M, 12 M and 15 M wide), multiple landscaped parks and a dedicated amenity area, with a proposed 30 M wide road frontage and a railway-side boundary providing strong connectivity towards Indore and Dewas. Detailed plot sizes, pricing and approvals are available from the official sales team.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Large planned plotted township spread across sectors B, C and D",
          "Extensive grid of residential and shop-cum-residential plots",
          "Wide internal road network of 9 M, 12 M and 15 M wide roads",
          "Multiple landscaped parks distributed throughout the layout",
          "Dedicated amenity area and MPEB (electricity) grid within the layout",
          "Proposed 30 M wide road frontage for the township",
          "Strong connectivity towards Indore and Dewas",
          "Located alongside a double-line railway track corridor"
        ]
      }
    ],
    "sections": {
      "overview": "A large multi-sector plotted township by Sarthak Singapore on the Indore - Dewas corridor.",
      "amenities": [
        { "title": "Township Master Plan Layout", "img": "/propertyList/Singapore Luxuria by Sarthak Singapore/img1.png" },
        { "title": "Landscaped Parks", "img": "/propertyList/Singapore Luxuria by Sarthak Singapore/img1.png" },
        { "title": "Wide Internal Road Network", "img": "/propertyList/Singapore Luxuria by Sarthak Singapore/img1.png" }
      ],
      "specifications": [
        "Master-planned plotted layout divided into sectors B, C and D",
        "Internal roads of 9 M, 12 M and 15 M widths",
        "Proposed 30 M wide road frontage",
        "Multiple parks and open green spaces",
        "Dedicated amenity plot within the layout",
        "MPEB electrical grid provision",
        "Mix of residential and shop-cum-residential (SR) plots"
      ],
      "connectivity": [
        "Connectivity towards Indore",
        "Connectivity towards Dewas",
        "Proposed 30 M wide road frontage",
        "Adjacent double-line railway track corridor"
      ],
      "vision": [
        "A thoughtfully master-planned plotted community",
        "Wide roads and abundant green open spaces",
        "Flexible residential and commercial plot options",
        "Well-connected location on the Indore - Dewas corridor"
      ]
    },
    "projectData": [
      { "label": "Project Name", "value": "Singapore Luxuria" },
      { "label": "Property Type", "value": "Plot" },
      { "label": "Developer", "value": "Sarthak Singapore" },
      { "label": "Location", "value": "Indore - Dewas Road, Indore, Madhya Pradesh" },
      { "label": "Layout", "value": "Sectors B, C & D plotted township" }
    ],
    "images": [
      "/propertyList/Singapore Luxuria by Sarthak Singapore/img1.png"
    ],
    "floorPlan": { "image": "/propertyList/Singapore Luxuria by Sarthak Singapore/img1.png", "pdf": "" },
    "map": { "image": "/propertyList/Singapore Luxuria by Sarthak Singapore/img1.png", "locationLink": "" },
    "developer": { "name": "Sarthak Singapore", "description": "Developer name is taken from the uploaded project folder/brochure." },
    "disclaimer": "Singapore Luxuria details are prepared only from the uploaded master plan. Plot sizes, price, area, availability and approvals should be verified with the official sales team."
  },
  {
    "id": 244,
    "title": "Silver Springs Phase II",
    "slug": "silver-springs-phase-ii-m-jhaveri",
    "location": "Silver Springs (Phase II), Agra Bombay By-pass Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Apartment",
    "bhk": "2, 3 & 4 BHK",
    "area": "1345 - 2205 sq. ft.",
    "price": [],
    "description": "Silver Springs Phase II is a ready-possession residential project by M. Jhaveri Group offering 2, 3 & 4 BHK premium apartments at Agra Bombay By-pass Road, Indore. The development is branded as 'Premium Lifespaces' and features garden-facing entrance lobbies at stilt level. Apartment saleable areas range from 124.95 sq. mtr. (1345 sq. ft.) for 2 BHK units to 204.85 sq. mtr. (2205 sq. ft.) for 4 BHK units.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "2, 3 & 4 BHK premium apartments",
          "Ready Possession",
          "Garden facing entrance lobby at stilt level",
          "2 BHK saleable area 124.95 - 130.06 sq. mtr. (1345 - 1400 sq. ft.)",
          "3 BHK saleable area 167.22 sq. mtr. (1800 sq. ft.)",
          "4 BHK saleable area 204.85 sq. mtr. (2205 sq. ft.)",
          "Located on Agra Bombay By-pass Road, Indore",
          "Finance options available from all major banks"
        ]
      }
    ],
    "sections": {
      "overview": "Premium 2, 3 & 4 BHK ready-possession apartments by M. Jhaveri Group at Agra Bombay By-pass Road, Indore.",
      "amenities": [
        { "title": "Landscaped Garden", "img": "/propertyList/Silver Springs Phase II by M Jhaveri/img3.png" },
        { "title": "Garden Facing Entrance Lobby at Stilt Level", "img": "/propertyList/Silver Springs Phase II by M Jhaveri/img5.png" },
        { "title": "High-speed Lifts (8 pax)", "img": "/propertyList/Silver Springs Phase II by M Jhaveri/img5.png" },
        { "title": "Open to Sky Spaces", "img": "/propertyList/Silver Springs Phase II by M Jhaveri/img5.png" },
        { "title": "Wide Internal Corridors", "img": "/propertyList/Silver Springs Phase II by M Jhaveri/img5.png" },
        { "title": "Spacious Balconies", "img": "/propertyList/Silver Springs Phase II by M Jhaveri/img6.png" }
      ],
      "specifications": [
        "2 BHK (Flat no. 2 & 9): saleable area 130.06 sq. mtr. (1400 sq. ft.)",
        "2 BHK (Flat no. 5 & 6): saleable area 127.46 sq. mtr. (1372 sq. ft.)",
        "2 BHK (Flat no. 3 & 8): saleable area 124.95 sq. mtr. (1345 sq. ft.)",
        "3 BHK (Flat no. 4 & 7): saleable area 167.22 sq. mtr. (1800 sq. ft.)",
        "4 BHK (Flat no. 1 & 10): saleable area 204.85 sq. mtr. (2205 sq. ft.)"
      ],
      "connectivity": [
        "Located on Agra Bombay By-pass Road, Indore"
      ],
      "vision": [
        "Premium Lifespaces - Majestic Living"
      ]
    },
    "projectData": [
      { "label": "Project Name", "value": "Silver Springs Phase II" },
      { "label": "Developer", "value": "M. Jhaveri Group" },
      { "label": "Configuration", "value": "2, 3 & 4 BHK Apartments" },
      { "label": "Possession", "value": "Ready Possession" },
      { "label": "Location", "value": "Agra Bombay By-pass Road, Indore" }
    ],
    "images": [
      "/propertyList/Silver Springs Phase II by M Jhaveri/img1.png",
      "/propertyList/Silver Springs Phase II by M Jhaveri/img2.png",
      "/propertyList/Silver Springs Phase II by M Jhaveri/img3.png",
      "/propertyList/Silver Springs Phase II by M Jhaveri/img4.png",
      "/propertyList/Silver Springs Phase II by M Jhaveri/img5.png",
      "/propertyList/Silver Springs Phase II by M Jhaveri/img6.png",
      "/propertyList/Silver Springs Phase II by M Jhaveri/img7.png",
      "/propertyList/Silver Springs Phase II by M Jhaveri/img8.png"
    ],
    "floorPlan": { "image": "/propertyList/Silver Springs Phase II by M Jhaveri/img6.png", "pdf": "" },
    "map": { "image": "", "locationLink": "" },
    "developer": { "name": "M. Jhaveri Group", "description": "Developer name is taken from the uploaded project brochure." },
    "disclaimer": "Silver Springs Phase II details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 245,
    "title": "Silver Star City Crystal",
    "slug": "crystal-m-jhaveri",
    "location": "Silver Star City, Near Silicon City, AB By-Pass Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "15'x40', 15'x45', 17'x45', 20'x45'",
    "price": [],
    "description": "Silver Star City Crystal is a premium residential plotted development by M. Jhaveri Group, located at Silver Star City, Near Silicon City, AB By-Pass Road, Indore. An extension of Silver Star City, it offers planned, sustainable community living with wide roads and a range of plot sizes including 15'x40', 15'x45', 17'x45' and 20'x45'. The project is designed for future-ready living with strong connectivity and growth-driven location. It is RERA approved under P-IND-25-6050.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "1000+ happy families already living",
          "Proven track record of strong returns",
          "Planned, sustainable community living",
          "Excellent connectivity and growth-driven location",
          "8 Projects successfully completed",
          "Premium residential plots with wide roads"
        ]
      }
    ],
    "sections": {
      "overview": "Premium residential plots at Silver Star City Crystal, an extension of Silver Star City in Indore.",
      "amenities": [
        { "title": "Outdoor Gym & Garden", "img": "/propertyList/Crystal by M Jhaveri/img5.png" },
        { "title": "Basket Ball Court", "img": "/propertyList/Crystal by M Jhaveri/img5.png" },
        { "title": "Sit Out Area", "img": "/propertyList/Crystal by M Jhaveri/img5.png" },
        { "title": "Kids Play Area", "img": "/propertyList/Crystal by M Jhaveri/img5.png" },
        { "title": "Cricket Turf", "img": "/propertyList/Crystal by M Jhaveri/img7.png" },
        { "title": "Tennis Court", "img": "/propertyList/Crystal by M Jhaveri/img7.png" },
        { "title": "In Campus Market", "img": "/propertyList/Crystal by M Jhaveri/img7.png" },
        { "title": "Temple", "img": "/propertyList/Crystal by M Jhaveri/img7.png" },
        { "title": "CCTV Secured Campus", "img": "/propertyList/Crystal by M Jhaveri/img7.png" }
      ],
      "specifications": [
        "Plot sizes: 15'x40', 15'x45', 17'x45', 20'x45'",
        "9.00 mt. wide internal roads",
        "Gardens and landscaped open spaces",
        "S.A. (common areas) within the layout"
      ],
      "connectivity": [
        "AB By-Pass Road - 1 min",
        "AB Road - 5 mins",
        "Railway station - 30 mins",
        "Airport - 30 mins",
        "Sage University - 3 mins",
        "DBS School - 5 mins",
        "ANS Hospital - 9 mins",
        "Royal Park Mall - 5 mins",
        "Silicon City - 2 mins",
        "Rau Circle - 10 mins",
        "IT-Park - 15 mins",
        "Pithampur - 20 mins",
        "Mhow - 30 mins"
      ],
      "vision": [
        "Silver Star City blends future-ready living with strong growth potential.",
        "Silver Star City Crystal redefines modern community living, designed with the perfect balance of comfort, convenience, and sustainability."
      ]
    },
    "projectData": [
      { "label": "Project Name", "value": "Silver Star City Crystal" },
      { "label": "Developer", "value": "M. Jhaveri Group" },
      { "label": "RERA", "value": "P-IND-25-6050" }
    ],
    "images": [
      "/propertyList/Crystal by M Jhaveri/img1.png",
      "/propertyList/Crystal by M Jhaveri/img2.png",
      "/propertyList/Crystal by M Jhaveri/img3.png",
      "/propertyList/Crystal by M Jhaveri/img4.png",
      "/propertyList/Crystal by M Jhaveri/img5.png",
      "/propertyList/Crystal by M Jhaveri/img6.png",
      "/propertyList/Crystal by M Jhaveri/img7.png",
      "/propertyList/Crystal by M Jhaveri/img8.png"
    ],
    "floorPlan": { "image": "/propertyList/Crystal by M Jhaveri/img6.png", "pdf": "" },
    "map": { "image": "/propertyList/Crystal by M Jhaveri/img8.png", "locationLink": "" },
    "developer": { "name": "M. Jhaveri Group", "description": "Developer name is taken from the uploaded project brochure." },
    "disclaimer": "Silver Star City Crystal details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 246,
    "title": "Indra Enclave",
    "slug": "indra-enclave-m-jhaveri",
    "location": "8-9, Rajgarh Kothi, Manorama Ganj, Beside Kamal Book Depot, Indore - 452001",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Villa",
    "bhk": "5 BHK",
    "area": "Plot area approx. 1714 - 1912 sq.ft; Super/Saleable area up to 6633 sq.ft",
    "price": [],
    "description": "Silver Indra Enclave by M. Jhaveri Group is a project of 4 ultra luxurious row villas with top-notch construction, located in the heart of the city at Manorama Ganj, Indore. The G+2 villas are configured as 5 BHK luxury homes offered at the cost of a flat. The master layout also includes plotted units, with villa plot areas of around 1714 sq.ft and plotted units of about 1912 sq.ft.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "4 ultra luxurious row villas at Manorama Ganj, Indore",
          "G+2 configuration offering 5 BHK luxury villas",
          "Luxury villas at the cost of a flat",
          "Located in the heart of the city",
          "Developed by the M. Jhaveri Group (Building Value)",
          "Provision of lift in each villa"
        ]
      }
    ],
    "sections": {
      "overview": "4 ultra luxurious G+2, 5 BHK row villas at Manorama Ganj, Indore.",
      "amenities": [
        { "title": "4 Luxury Row Villas", "img": "/propertyList/Indra Enclave by M Jhaveri/img4.png" },
        { "title": "Modern Home Comforts", "img": "/propertyList/Indra Enclave by M Jhaveri/img4.png" },
        { "title": "Convenient City Living", "img": "/propertyList/Indra Enclave by M Jhaveri/img4.png" },
        { "title": "Superior Quality Construction", "img": "/propertyList/Indra Enclave by M Jhaveri/img4.png" },
        { "title": "Secured Family Abode", "img": "/propertyList/Indra Enclave by M Jhaveri/img4.png" },
        { "title": "Provision of Lift", "img": "/propertyList/Indra Enclave by M Jhaveri/img4.png" }
      ],
      "specifications": [
        "G+2 structure with 5 BHK configuration",
        "Ground floor with living/dining, drawing room, foyer, porch, kitchen, bedroom and parking",
        "First and second floors with multiple bedrooms, lounge, dress areas and balconies",
        "Terrace floor with mumty and terrace areas",
        "Villa plot area approx. 1714 sq.ft with super/saleable area up to 5729 sq.ft",
        "Plotted units approx. 1912 sq.ft with super/saleable area up to 6633 sq.ft"
      ],
      "connectivity": [
        "Near Geeta Bhawan Square",
        "Close to Rasgulla House and Shatabdi Travels",
        "Route to Madhumilan Talkies and Ghoda Chowk",
        "Connected towards Palasia",
        "Near St. Paul School and Meru Stadium"
      ],
      "vision": []
    },
    "projectData": [
      { "label": "Project Name", "value": "Indra Enclave" },
      { "label": "Developer", "value": "M. Jhaveri Group" },
      { "label": "Location", "value": "Manorama Ganj, Indore" },
      { "label": "Configuration", "value": "G+2, 5 BHK Luxury Villas" },
      { "label": "Number of Villas", "value": "4 Row Villas" }
    ],
    "images": [
      "/propertyList/Indra Enclave by M Jhaveri/img1.png",
      "/propertyList/Indra Enclave by M Jhaveri/img2.png",
      "/propertyList/Indra Enclave by M Jhaveri/img3.png",
      "/propertyList/Indra Enclave by M Jhaveri/img4.png",
      "/propertyList/Indra Enclave by M Jhaveri/img5.png",
      "/propertyList/Indra Enclave by M Jhaveri/img6.png",
      "/propertyList/Indra Enclave by M Jhaveri/img7.png",
      "/propertyList/Indra Enclave by M Jhaveri/img8.png"
    ],
    "floorPlan": { "image": "/propertyList/Indra Enclave by M Jhaveri/img4.png", "pdf": "" },
    "map": { "image": "/propertyList/Indra Enclave by M Jhaveri/img6.png", "locationLink": "" },
    "developer": { "name": "M. Jhaveri Group", "description": "Developer name is taken from the uploaded project brochure." },
    "disclaimer": "Indra Enclave details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 247,
    "title": "Silver Sky Park",
    "slug": "silver-sky-park-m-jhaveri",
    "location": "Rau By-pass Ahilya Path, Near DPS Campus-2, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots, 3 & 4 BHK Town Houses",
    "area": "1000 - 1150 Sq. ft. (Town House plot area)",
    "price": [],
    "description": "Silver Sky Park is a holistic plotted township by M. Jhaveri Group, offering residential plots and town houses along with hill top amenities. It is designed by an award winning architect and planned at par with international standards. The project offers Breeze Town Houses (3 BHK, plot area 1000 sq. ft., saleable area 1828 sq. ft.) and Drizzle Town Houses (4 BHK, plot area 1150 sq. ft., saleable area 1923 sq. ft.) with exclusively designed large bedrooms and car parking.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Holistic township blending natural beauty with modern amenities",
          "Designed by an award winning architect, planned at international standards",
          "Breeze Town House: 3 BHK, Plot Area 1000 Sq. ft., Salable Area 1828 Sq. ft.",
          "Drizzle Town House: 4 BHK, Plot Area 1150 Sq. ft., Salable Area 1923 Sq. ft.",
          "Hill Top amenities with landscape designed by One Landscape Hongkong",
          "Lush green gardens, kids play, meditation zone and lavish outdoor",
          "CCTV surveillance, boom barrier, entrance gate and STP station"
        ]
      }
    ],
    "sections": {
      "overview": "A holistic plotted township by M. Jhaveri Group in Indore offering plots and town houses with hill top amenities.",
      "amenities": [
        { "title": "Signature Wall", "img": "/propertyList/Silver Sky Park by M Jhaveri/img3.png" },
        { "title": "Dry Fountain Plaza", "img": "/propertyList/Silver Sky Park by M Jhaveri/img3.png" },
        { "title": "Terrace Garden", "img": "/propertyList/Silver Sky Park by M Jhaveri/img3.png" },
        { "title": "Viewing Deck", "img": "/propertyList/Silver Sky Park by M Jhaveri/img3.png" },
        { "title": "Forest Play Area", "img": "/propertyList/Silver Sky Park by M Jhaveri/img3.png" },
        { "title": "Multi Purpose Lawn", "img": "/propertyList/Silver Sky Park by M Jhaveri/img3.png" },
        { "title": "Jogging Trail", "img": "/propertyList/Silver Sky Park by M Jhaveri/img3.png" },
        { "title": "Meditation Zone", "img": "/propertyList/Silver Sky Park by M Jhaveri/img3.png" }
      ],
      "specifications": [
        "Breeze Town House: Plot Area 1000 Sq. ft., Salable Area 1828 Sq. ft., 3 BHK with 2 gardens",
        "Drizzle Town House: Plot Area 1150 Sq. ft., Salable Area 1923 Sq. ft., 4 BHK with 2 gardens",
        "Exclusively designed large bedrooms",
        "Car parking provided in the unit",
        "A large living room connected to the front garden through the French windows"
      ],
      "connectivity": [
        "Located on Rau By-pass Ahilya Path",
        "Near DPS Campus-2, Indore (MP)"
      ],
      "vision": [
        "Silver Sky Park is a perfect blend of natural beauty and modern amenities offering a complete pack for happy and healthy body, mind and soul.",
        "This Holistic Township is designed by the award winning architect and planned at par with the international standards."
      ]
    },
    "projectData": [
      { "label": "Project Name", "value": "Silver Sky Park" },
      { "label": "Developer", "value": "M. Jhaveri Group" },
      { "label": "RERA No. (Hill Top)", "value": "P-IND-24-4543" }
    ],
    "images": [
      "/propertyList/Silver Sky Park by M Jhaveri/img1.png",
      "/propertyList/Silver Sky Park by M Jhaveri/img2.png",
      "/propertyList/Silver Sky Park by M Jhaveri/img3.png",
      "/propertyList/Silver Sky Park by M Jhaveri/img4.png",
      "/propertyList/Silver Sky Park by M Jhaveri/img5.png"
    ],
    "floorPlan": { "image": "/propertyList/Silver Sky Park by M Jhaveri/img4.png", "pdf": "" },
    "map": { "image": "/propertyList/Silver Sky Park by M Jhaveri/img4.png", "locationLink": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.644347186088!2d75.82736206054688!3d22.6258602142334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fbb4f120df51%3A0x2e54486b564e638b!2s26%20Silver%20SkyPark!5e1!3m2!1sen!2sin!4v1782630719885!5m2!1sen!2sin" },
    "developer": { "name": "M. Jhaveri Group", "description": "Developer name is taken from the uploaded project brochure." },
    "disclaimer": "Silver Sky Park details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 248,
    "title": "Silver Leaves Condominium",
    "slug": "silver-leaves-condominium-m-jhaveri",
    "location": "Silver Springs (Phase 1), Agra Bombay By-pass Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Apartment",
    "bhk": "3, 4 BHK",
    "area": "2192 - 3003 sq.ft. (Saleable)",
    "price": [],
    "description": "Silver Leaves is a 3 and 4 BHK condominium project by M. Jhaveri Group, located at Silver Springs (Phase 1), Agra Bombay By-pass Road, Indore. The apartments are offered in configurations with and without a servant room, with saleable areas ranging from about 2192 sq.ft. to 3003 sq.ft. It forms part of the larger Silver Springs township master layout, which also includes 4/5 BHK row villas. The project is RERA registered under No. P-IND-23-4228.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "3 & 4 BHK Condominium apartments",
          "RERA registered: P-IND-23-4228",
          "Configurations available with and without servant room",
          "Saleable areas from approx. 2192 sq.ft. to 3003 sq.ft.",
          "Part of the integrated Silver Springs township (Phase 1)",
          "Located on Agra Bombay By-pass (AB Bypass) Road, Indore"
        ]
      }
    ],
    "sections": {
      "overview": "3 & 4 BHK condominium homes within the Silver Springs township on Agra Bombay By-pass Road, Indore.",
      "amenities": [
        { "title": "Landscaped Gardens & Green Spaces", "img": "/propertyList/Silver Leaves Condominium by M Jhaveri/img2.png" },
        { "title": "Water Bodies & Streams", "img": "/propertyList/Silver Leaves Condominium by M Jhaveri/img2.png" },
        { "title": "Club House", "img": "/propertyList/Silver Leaves Condominium by M Jhaveri/img2.png" },
        { "title": "IT Park (within township)", "img": "/propertyList/Silver Leaves Condominium by M Jhaveri/img2.png" },
        { "title": "Wide Internal Roads", "img": "/propertyList/Silver Leaves Condominium by M Jhaveri/img3.png" },
        { "title": "Private Balconies", "img": "/propertyList/Silver Leaves Condominium by M Jhaveri/img4.png" },
        { "title": "Servant Room (select units)", "img": "/propertyList/Silver Leaves Condominium by M Jhaveri/img5.png" }
      ],
      "specifications": [
        "3 BHK (with servant room) - Carpet 1399 sq.ft., Built-up 1957 sq.ft., Saleable 2642 sq.ft.",
        "4 BHK (with servant room) - Carpet 1636 sq.ft., Built-up 2224 sq.ft., Saleable 3003 sq.ft.",
        "4 BHK (without servant room) - Carpet 1757 sq.ft., Built-up 2207 sq.ft., Saleable 2979 sq.ft.",
        "3 BHK (without servant room) - Carpet 1283 sq.ft., Built-up 1624 sq.ft., Saleable 2192 sq.ft."
      ],
      "connectivity": [
        "Agra Bombay By-pass (AB Bypass) Road / NH",
        "Phoenix Citadel Mall",
        "Mata Gujri Girls College & Education Institutions",
        "Navlakha Bus Stand",
        "Bhanwarkuwa Square",
        "Rau Circle (towards Mhow)",
        "MR10 Road (towards Dewas)",
        "Nipania Road"
      ],
      "vision": [
        "M. Jhaveri Group - Building Value, with 40+ years of legacy.",
        "10+ Awards & Recognition and 25+ Projects Completed.",
        "20+ Million Sq.Ft. area delivered with 6,500+ residents living.",
        "Developed over 5 million sq.ft. of commercial and residential space and almost 800 acres of land across Indore."
      ]
    },
    "projectData": [
      { "label": "Project Name", "value": "Silver Leaves Condominium" },
      { "label": "Developer", "value": "M. Jhaveri Group" },
      { "label": "RERA No.", "value": "P-IND-23-4228" },
      { "label": "Configuration", "value": "3 & 4 BHK Condominium" },
      { "label": "Location", "value": "Silver Springs (Phase 1), Agra Bombay By-pass Road, Indore" }
    ],
    "images": [
      "/propertyList/Silver Leaves Condominium by M Jhaveri/img1.png",
      "/propertyList/Silver Leaves Condominium by M Jhaveri/img2.png",
      "/propertyList/Silver Leaves Condominium by M Jhaveri/img3.png",
      "/propertyList/Silver Leaves Condominium by M Jhaveri/img4.png",
      "/propertyList/Silver Leaves Condominium by M Jhaveri/img5.png",
      "/propertyList/Silver Leaves Condominium by M Jhaveri/img6.png",
      "/propertyList/Silver Leaves Condominium by M Jhaveri/img7.png",
      "/propertyList/Silver Leaves Condominium by M Jhaveri/img8.png",
      "/propertyList/Silver Leaves Condominium by M Jhaveri/img9.png",
      "/propertyList/Silver Leaves Condominium by M Jhaveri/img10.png"
    ],
    "floorPlan": { "image": "/propertyList/Silver Leaves Condominium by M Jhaveri/img5.png", "pdf": "" },
    "map": { "image": "/propertyList/Silver Leaves Condominium by M Jhaveri/img2.png", "locationLink": "" },
    "developer": { "name": "M. Jhaveri Group", "description": "Developer name is taken from the uploaded project brochure." },
    "disclaimer": "Silver Leaves Condominium details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 249,
    "title": "Silver Meadows",
    "slug": "silver-meadows-m-jhaveri",
    "location": "Behind Hotel President Park, Near Sampat Hills, AB By Pass Road, Bicholi Hapsi, Indore",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "1150 to 1514 sq. ft.",
    "price": [],
    "description": "Silver Meadows by M. Jhaveri Group is a premium residential plotted development located behind Hotel President Park, near Sampat Hills, on AB Bypass Road, Bicholi Hapsi, Indore. The project offers plots ranging from 1150 to 1514 sq. ft. in sizes such as 23 x 50 sq. ft., 27 x 45 sq. ft. and other configurations. Designed for those who aspire to live in elegance, the project blends luxury with lifestyle through landscaped spaces and curated amenities.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Premium residential plots from 1150 to 1514 sq. ft.",
          "Plot configurations include 23 x 50 sq. ft. and 27 x 45 sq. ft.",
          "Internal roads of 25 ft and 30 ft width",
          "Central landscaped park of 5162 sq. ft.",
          "Shops cum residential plot within the layout",
          "Located on AB Bypass Road, near Sampat Hills, Bicholi Hapsi, Indore"
        ]
      }
    ],
    "sections": {
      "overview": "Premium residential plots by M. Jhaveri Group on AB Bypass Road, Indore.",
      "amenities": [
        { "title": "Outdoor Gym", "img": "/propertyList/Silver Meadows by M Jhaveri/img2.png" },
        { "title": "Lawn", "img": "/propertyList/Silver Meadows by M Jhaveri/img2.png" },
        { "title": "Sculpture", "img": "/propertyList/Silver Meadows by M Jhaveri/img2.png" },
        { "title": "Seating Area", "img": "/propertyList/Silver Meadows by M Jhaveri/img2.png" },
        { "title": "Central Park", "img": "/propertyList/Silver Meadows by M Jhaveri/img3.png" }
      ],
      "specifications": [
        "Plot sizes ranging from 1150 to 1514 sq. ft.",
        "Plot configurations of 23 x 50 sq. ft. and 27 x 45 sq. ft.",
        "Internal roads of 25 ft and 30 ft width",
        "Central park of 5162 sq. ft.",
        "Shops cum residential plot"
      ],
      "connectivity": [
        "Near Sampat Hills Road",
        "On AB Bypass Road",
        "Close to Hotel President Park",
        "Near HPCL Petrol Pump, Hans Filling Station",
        "Close to Mastermind School and Sahara City"
      ],
      "vision": [
        "Inspiration Modernity",
        "Designed for those who aspire to live in elegance, this project seamlessly blends luxury with lifestyle, offering spaces that redefine comfort and sophistication."
      ]
    },
    "projectData": [
      { "label": "Project Name", "value": "Silver Meadows" },
      { "label": "Developer", "value": "M. Jhaveri Group" },
      { "label": "RERA", "value": "P-Ind_24-5269" }
    ],
    "images": [
      "/propertyList/Silver Meadows by M Jhaveri/img1.png",
      "/propertyList/Silver Meadows by M Jhaveri/img2.png",
      "/propertyList/Silver Meadows by M Jhaveri/img3.png",
      "/propertyList/Silver Meadows by M Jhaveri/img4.png"
    ],
    "floorPlan": { "image": "/propertyList/Silver Meadows by M Jhaveri/img3.png", "pdf": "" },
    "map": { "image": "/propertyList/Silver Meadows by M Jhaveri/img4.png", "locationLink": "" },
    "developer": { "name": "M. Jhaveri Group", "description": "Developer name is taken from the uploaded project brochure." },
    "disclaimer": "Silver Meadows details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 250,
    "title": "Silver Star City",
    "slug": "silver-star-city-m-jhaveri",
    "location": "Near Silicon City, AB By-pass Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "Residential & shop-cum-residential plots in multiple sizes (per master layout)",
    "price": [],
    "description": "Silver Star City is a large master-planned plotted township by M. Jhaveri Group near Silicon City on the AB By-pass Road, Indore. As per the master layout plan, the township is developed across multiple phases and sectors - Star City, Extension-1, Extension-2, Sunshine, Lotus, Moonlight, Premium, Premium-2, Crown and Crystal - offering a wide range of residential plots, shop-cum-residential plots and EWS/LIG plots, supported by schools, landscaped parks and wide internal roads. It is well connected to Silicon City, SAGE University, Silver Sky Park and the AB By-pass corridor.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Large master-planned plotted township near Silicon City, AB By-pass Road, Indore",
          "Developed across multiple phases: Star City, Extension-1 & 2, Sunshine, Lotus, Moonlight, Premium, Premium-2, Crown and Crystal",
          "Wide range of plot sizes from compact to large premium plots",
          "Dedicated residential, shop-cum-residential and EWS/LIG plots",
          "In-campus schools and multiple landscaped parks",
          "Network of wide internal roads with proposed master-plan road frontage",
          "Strong connectivity to Silicon City, SAGE University and Silver Sky Park"
        ]
      }
    ],
    "sections": {
      "overview": "A large multi-phase plotted township by M. Jhaveri Group near Silicon City, AB By-pass Road, Indore.",
      "amenities": [
        { "title": "Township Master Layout Plan", "img": "/propertyList/MLP Star City by M Jhaveri/img1.png" },
        { "title": "In-Campus Schools", "img": "/propertyList/MLP Star City by M Jhaveri/img1.png" },
        { "title": "Landscaped Parks & Green Spaces", "img": "/propertyList/MLP Star City by M Jhaveri/img1.png" },
        { "title": "Wide Internal Road Network", "img": "/propertyList/MLP Star City by M Jhaveri/img1.png" }
      ],
      "specifications": [
        "Master layout developed across multiple phases and sectors",
        "Plot categories include Star City, Extension-1, Extension-2, Sunshine, Lotus, Moonlight, Premium, Premium-2, Crown and Crystal",
        "Mix of residential plots, shop-cum-residential plots and EWS/LIG plots",
        "Plot sizes ranging across configurations such as 15'x45', 17'x45', 20'x40', 20'x50', 30'x50' and others",
        "In-campus schools and multiple parks",
        "Wide internal roads with proposed master-plan road frontage"
      ],
      "connectivity": [
        "Near Silicon City",
        "Near SAGE University",
        "Adjacent to Silver Sky Park",
        "On the AB By-pass Road corridor",
        "Connectivity towards Rau and DPS"
      ],
      "vision": [
        "A thoughtfully master-planned plotted township",
        "Diverse plot options for every segment of homebuyers",
        "Wide roads, schools and abundant green open spaces",
        "A well-connected, growth-driven location in Indore"
      ]
    },
    "projectData": [
      { "label": "Project Name", "value": "Silver Star City" },
      { "label": "Property Type", "value": "Plot" },
      { "label": "Developer", "value": "M. Jhaveri Group" },
      { "label": "Location", "value": "Near Silicon City, AB By-pass Road, Indore" },
      { "label": "Layout", "value": "Multi-phase plotted township (Star City, Extensions, Sunshine, Lotus, Moonlight, Premium, Crown, Crystal)" }
    ],
    "images": [
      "/propertyList/MLP Star City by M Jhaveri/img1.png"
    ],
    "floorPlan": { "image": "/propertyList/MLP Star City by M Jhaveri/img1.png", "pdf": "" },
    "map": { "image": "/propertyList/MLP Star City by M Jhaveri/img1.png", "locationLink": "" },
    "developer": { "name": "M. Jhaveri Group", "description": "Developer name is taken from the uploaded project master layout plan." },
    "disclaimer": "Silver Star City details are prepared only from the uploaded master layout plan. Plot sizes, price, area, availability and approvals should be verified with the official sales team."
  },
{
  "id": 253,
  "title": "Kailash Palace",
  "slug": "kailash-palace",
  "location": "",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "3 BHK",
  "area": "1533 - 1838 Sq.ft. (SBU)",
  "description": "Kailash Palace is a multi-storey residential apartment building offering spacious 3 BHK flats across four upper floors. The upper ground floor is dedicated to covered car and two-wheeler parking along with a gym area and a lift-served lobby, while each residential floor accommodates three flats. Per the floor schedule, saleable (SBU) areas range from about 1533 to 1838 sq.ft. with generous bedrooms, living/dining areas, kitchens and balconies.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Multi-storey residential building with spacious 3 BHK flats",
        "Upper ground floor with covered four-wheeler and two-wheeler parking",
        "Dedicated gym area on the upper ground floor",
        "Lift and staircase with 6' wide common lobby on every floor",
        "Flats ranging from approximately 1533 to 1838 sq.ft. (SBU)"
      ]
    }
  ],
  "sections": {
    "overview": "A multi-storey residential apartment building with 3 BHK flats, covered parking, gym and lift.",
    "amenities": [
      {
        "title": "Covered Four-Wheeler Parking",
        "img": "/propertyList/Kailash Palace/img1.png"
      },
      {
        "title": "Two-Wheeler Parking",
        "img": "/propertyList/Kailash Palace/img1.png"
      },
      {
        "title": "Gym Area",
        "img": "/propertyList/Kailash Palace/img1.png"
      },
      {
        "title": "Passenger Lift",
        "img": "/propertyList/Kailash Palace/img2.png"
      },
      {
        "title": "6' Wide Common Lobby",
        "img": "/propertyList/Kailash Palace/img2.png"
      },
      {
        "title": "Spacious Balconies",
        "img": "/propertyList/Kailash Palace/img3.png"
      }
    ],
    "specifications": [
      "Upper ground floor parking (approx. 64'0\" x 47'0\") for four-wheelers and two-wheelers",
      "6'0\" x 6'0\" lift with 6' wide lobby on each floor",
      "Gym area on the upper ground floor",
      "3 BHK flats with attached toilets, kitchen, wash and balconies",
      "Lift / staircase / lobby area approx. 435 sq.ft. per floor"
    ],
    "connectivity": [],
    "vision": [
      "To provide comfortable, well-planned 3 BHK apartment living with modern conveniences.",
      "Efficient floor layouts with covered parking, gym and lift access for residents."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Kailash Palace"
    },
    {
      "label": "Property Type",
      "value": "Residential Apartment"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": ""
    },
    {
      "label": "Configurations",
      "value": "3 BHK Flats"
    },
    {
      "label": "Flat Sizes (SBU)",
      "value": "Flat-01: 1533 sq.ft., Flat-02: 1838 sq.ft., Flat-03: 1772 sq.ft."
    }
  ],
  "images": [
    "/propertyList/Kailash Palace/img6.png",
    "/propertyList/Kailash Palace/img2.png",
    "/propertyList/Kailash Palace/img3.png",
    "/propertyList/Kailash Palace/img4.png",
    "/propertyList/Kailash Palace/img5.png",
    "/propertyList/Kailash Palace/img1.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Kailash Palace/img1.png",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Kailash Palace details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 254,
  "title": "Narmade Puram",
  "slug": "narmade-puram-sarthak-singapore",
  "location": "Narmadepuram, 6 Lane Touch, Khandwa Road",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "800 - 1200 sq.ft. (20x40, 17x50, 20x50, 20x60)",
  "description": "Narmade Puram is a RERA-approved residential plotting project by Sarthak Singapore, located on the 6-lane main Khandwa Road in Indore. The layout offers plots in sizes of 20x60 (1200 sq.ft.), 20x50 (1000 sq.ft.), 17x50 (850 sq.ft.) and 20x40 (800 sq.ft.). Planned amenities include a garden, concrete roads, a kids play area, an overhead water tank and CCTV. The project enjoys good connectivity via Khandwa Road with routes toward Indore, Khandwa, Patalpani and Simrol.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Connected to the 6-lane main Khandwa Road",
        "RERA approved plotting scheme",
        "Plot sizes of 800, 850, 1000 and 1200 sq.ft.",
        "Concrete internal roads with landscaped garden",
        "Kids play area, overhead water tank and CCTV security"
      ]
    }
  ],
  "sections": {
    "overview": "RERA-approved residential plots on the 6-lane Khandwa Road, Indore.",
    "amenities": [
      {
        "title": "Garden",
        "img": "/propertyList/Narmade Puram by Sarthak Singapore/img2.png"
      },
      {
        "title": "Concrete Road",
        "img": "/propertyList/Narmade Puram by Sarthak Singapore/img2.png"
      },
      {
        "title": "Kids Play Area",
        "img": "/propertyList/Narmade Puram by Sarthak Singapore/img2.png"
      },
      {
        "title": "Overhead Water Tank",
        "img": "/propertyList/Narmade Puram by Sarthak Singapore/img2.png"
      },
      {
        "title": "CCTV Surveillance",
        "img": "/propertyList/Narmade Puram by Sarthak Singapore/img2.png"
      },
      {
        "title": "Grand Entrance Gate",
        "img": "/propertyList/Narmade Puram by Sarthak Singapore/img1.png"
      }
    ],
    "specifications": [
      "Plot sizes: 20x60 (1200 sq.ft.), 20x50 (1000 sq.ft.), 17x50 (850 sq.ft.), 20x40 (800 sq.ft.)",
      "12 M wide approach road and 9 M / 16.06 M internal roads",
      "Concrete internal roads",
      "Overhead water tank",
      "CCTV surveillance"
    ],
    "connectivity": [
      "On the 6-lane main Khandwa Road",
      "Khandwa Road connecting to Indore and Khandwa",
      "Route to Patalpani",
      "Route to Simrol"
    ],
    "vision": [
      "A well-connected township where convenience meets class.",
      "Planned plotting community on a prime arterial road."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Narmade Puram"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Narmadepuram, 6 Lane Touch, Khandwa Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Sarthak Singapore"
    },
    {
      "label": "RERA No.",
      "value": "P-MHW-25-5598"
    },
    {
      "label": "Plot Sizes",
      "value": "20x40, 17x50, 20x50, 20x60"
    },
    {
      "label": "T&CP No.",
      "value": "INDOP15032458710"
    }
  ],
  "images": [
    "/propertyList/Narmade Puram by Sarthak Singapore/img1.png",
    "/propertyList/Narmade Puram by Sarthak Singapore/img2.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Narmade Puram by Sarthak Singapore/img2.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Narmade Puram by Sarthak Singapore/img1.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Sarthak Singapore",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Narmade Puram details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 255,
  "title": "Sarthak Ramkunj",
  "slug": "sarthak-ramkunj-sarthak-singapore",
  "location": "Near Railway Crossing, Barnagar-Ujjain Road, Barnagar, Dist. Ujjain",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "600, 800 & 1000 sq.ft.",
  "description": "Sarthak Ramkunj (Ramkunj) is a RERA-approved residential plotting project by Sarthak Singapore, located at a prime spot near the railway crossing on Barnagar-Ujjain Road in Barnagar, District Ujjain. Plots are available in sizes of 600, 800 and 1000 sq.ft. across blocks A to E, with dimensions including 20x50, 20x40, 15x40 and 15x45. The project is planned around a grand statue of Lord Shri Ram and offers gardens, a kids play area, a temple, wide CC roads and street lighting. It sits close to the commercial area, court complex, main city market, railway station and civil hospital.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Prime location on Barnagar-Ujjain Road near the railway crossing",
        "Plot sizes of 600, 800 and 1000 sq.ft.",
        "Grand statue of Lord Shri Ram as the central attraction",
        "Landscaped gardens, kids play area and temple",
        "Close to court complex, main market, railway station and civil hospital"
      ]
    }
  ],
  "sections": {
    "overview": "RERA-approved residential plots near the railway crossing on Barnagar-Ujjain Road, Ujjain.",
    "amenities": [
      {
        "title": "Grand Entrance Gate",
        "img": "/propertyList/Sarthak Ramkunj by Sarthak Singapore/img1.png"
      },
      {
        "title": "Lord Shri Ram Statue",
        "img": "/propertyList/Sarthak Ramkunj by Sarthak Singapore/img2.png"
      },
      {
        "title": "Landscaped Garden",
        "img": "/propertyList/Sarthak Ramkunj by Sarthak Singapore/img2.png"
      },
      {
        "title": "Kids Play Area",
        "img": "/propertyList/Sarthak Ramkunj by Sarthak Singapore/img2.png"
      },
      {
        "title": "Temple",
        "img": "/propertyList/Sarthak Ramkunj by Sarthak Singapore/img2.png"
      },
      {
        "title": "Wide CC Roads",
        "img": "/propertyList/Sarthak Ramkunj by Sarthak Singapore/img3.png"
      }
    ],
    "specifications": [
      "Plot sizes: 600, 800 and 1000 sq.ft.",
      "Plot dimensions: 20x50, 20x40, 15x40, 15x45, 12x35, 12x45",
      "Blocks A, B, C, D and E",
      "9 M wide internal roads",
      "Garden and landscaped green spaces"
    ],
    "connectivity": [
      "Near Railway Station, Barnagar",
      "Close to Court / Tehsil complex",
      "Near Mandi and Grain Market",
      "Near Solanki Farm House and Aman Agro Industries",
      "On Barnagar-Ujjain Road (NH-18)"
    ],
    "vision": [
      "Your own land, your own home where every convenience is better.",
      "A well-organized and cultured colony planned for every family's needs."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Sarthak Ramkunj"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Near Railway Crossing, Barnagar-Ujjain Road, Barnagar, Dist. Ujjain"
    },
    {
      "label": "Developer",
      "value": "Sarthak Singapore"
    },
    {
      "label": "RERA No.",
      "value": "P-BNG-25-5819"
    },
    {
      "label": "Plot Sizes",
      "value": "600, 800 & 1000 sq.ft."
    },
    {
      "label": "T&CP No.",
      "value": "UJJOP26032405788"
    }
  ],
  "images": [
    "/propertyList/Sarthak Ramkunj by Sarthak Singapore/img1.png",
    "/propertyList/Sarthak Ramkunj by Sarthak Singapore/img2.png",
    "/propertyList/Sarthak Ramkunj by Sarthak Singapore/img3.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Sarthak Ramkunj by Sarthak Singapore/img3.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Sarthak Ramkunj by Sarthak Singapore/img1.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Sarthak Singapore",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Sarthak Ramkunj details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 256,
  "title": "Singapore Shyam Vihar",
  "slug": "singapore-shyam-vihar-sarthak-singapore",
  "location": "Gram Bijjukhedi, Behind Singapore Township, Talawali Chanda, Dewas Naka, A.B. Road",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "Plots (15x40, 15x45, 17x50, 20x40, 20x45)",
  "description": "Singapore Shyam Vihar is a RERA-approved residential plotting project by Sarthak Singapore, located at Gram Bijjukhedi behind Singapore Township, Talawali Chanda, Dewas Naka on A.B. Road, Indore. It forms part of the Singapore Township (Phase II) development and offers plots in sizes such as 17x50, 15x40, 15x45, 20x45 and 20x40, adjacent to a proposed 75.0 M wide road. The Vastu-planned colony features wide CC roads, green gardens, a grand entrance gate, drinking water pipelines, proper drainage and street lighting. Home loan facilities from various banks and easy installment options are available.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA-approved legal colony",
        "Wide, modern CC roads",
        "Green natural-environment garden",
        "Grand and well-decorated entrance gate",
        "Located on the main road with a proposed 75.0 M wide road adjacent"
      ]
    }
  ],
  "sections": {
    "overview": "RERA-approved residential plots at Bijjukhedi, behind Singapore Township on A.B. Road, Indore.",
    "amenities": [
      {
        "title": "Grand Entrance Gate",
        "img": "/propertyList/Singapore Shyam Vihar by Sarthak Singapore/img1.png"
      },
      {
        "title": "Green Garden",
        "img": "/propertyList/Singapore Shyam Vihar by Sarthak Singapore/img2.png"
      },
      {
        "title": "Wide CC Roads",
        "img": "/propertyList/Singapore Shyam Vihar by Sarthak Singapore/img2.png"
      },
      {
        "title": "Drinking Water Pipeline",
        "img": "/propertyList/Singapore Shyam Vihar by Sarthak Singapore/img2.png"
      },
      {
        "title": "Drainage Line",
        "img": "/propertyList/Singapore Shyam Vihar by Sarthak Singapore/img2.png"
      },
      {
        "title": "Water Tank & Boring",
        "img": "/propertyList/Singapore Shyam Vihar by Sarthak Singapore/img2.png"
      },
      {
        "title": "Street Lighting",
        "img": "/propertyList/Singapore Shyam Vihar by Sarthak Singapore/img2.png"
      }
    ],
    "specifications": [
      "Plot dimensions: 17x50, 15x40, 15x45, 20x45, 20x40, 12x35, 15x35",
      "7.50 M and 12.0 M wide internal roads",
      "Vastu-compliant planned layout",
      "Boring/well and large water tank for water supply",
      "Attractive street lighting",
      "Bank home-loan facility available"
    ],
    "connectivity": [
      "On A.B. Road (Indore-Dewas)",
      "Near Bombay Hospital",
      "Near Rajpal Toyota",
      "Near Panchvati City Bus Stop",
      "Near Dainik Bhaskar Press",
      "Behind Singapore Township"
    ],
    "vision": [
      "Live life in style.",
      "A fully-planned, pollution-free residential colony with every modern amenity."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Singapore Shyam Vihar"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Gram Bijjukhedi, Behind Singapore Township, Talawali Chanda, Dewas Naka, A.B. Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Sarthak Singapore"
    },
    {
      "label": "RERA No.",
      "value": "P-SWR-22-3427"
    }
  ],
  "images": [
    "/propertyList/Singapore Shyam Vihar by Sarthak Singapore/img1.png",
    "/propertyList/Singapore Shyam Vihar by Sarthak Singapore/img2.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Singapore Shyam Vihar by Sarthak Singapore/img2.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Singapore Shyam Vihar by Sarthak Singapore/img1.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Sarthak Singapore",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Singapore Shyam Vihar details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 257,
  "title": "Midway City 1",
  "slug": "midway-city-1-sarthak-singapore",
  "location": "Rau Pithampur Road, Village Sonway",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "Plots (13x37, 16x40, 17x50, 20x40, 20x50)",
  "description": "Midway City is a RERA-approved residential plotting project by Sarthak Singapore on Rau Pithampur Road, Village Sonway, Indore. The developed colony offers a wide range of plot dimensions including 13x37, 16x30, 16x36, 16x40, 17x50, 20x40, 20x50 and 20x42, laid out along a proposed 60.0 M Pithampur Road. Amenities include landscaped gardens/parks, wide CC roads, a grand entrance gate, drinking water pipelines with drainage, water tank and street lighting. The location is close to Rau Circle, A.B. Road and IIM Indore.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA-approved, fully developed legal colony",
        "Wide modern CC roads (up to 12.0 M)",
        "Green landscaped parks and gardens",
        "Well-decorated grand entrance gate",
        "Near Rau Circle, A.B. Road and IIM Indore"
      ]
    }
  ],
  "sections": {
    "overview": "RERA-approved residential plots on Rau Pithampur Road, Village Sonway, Indore.",
    "amenities": [
      {
        "title": "Grand Entrance Gate",
        "img": "/propertyList/Midway City 1 by Sarthak Singapore/img1.png"
      },
      {
        "title": "Parks & Gardens",
        "img": "/propertyList/Midway City 1 by Sarthak Singapore/img2.png"
      },
      {
        "title": "Wide CC Roads",
        "img": "/propertyList/Midway City 1 by Sarthak Singapore/img2.png"
      },
      {
        "title": "Drinking Water Pipeline",
        "img": "/propertyList/Midway City 1 by Sarthak Singapore/img2.png"
      },
      {
        "title": "Drainage Line",
        "img": "/propertyList/Midway City 1 by Sarthak Singapore/img2.png"
      },
      {
        "title": "Water Tank & Boring",
        "img": "/propertyList/Midway City 1 by Sarthak Singapore/img2.png"
      },
      {
        "title": "Street Lighting",
        "img": "/propertyList/Midway City 1 by Sarthak Singapore/img2.png"
      }
    ],
    "specifications": [
      "Plot dimensions: 13x37, 16x30, 16x36, 16x40, 17x50, 20x40, 20x50, 20x42",
      "9.0 M and 12.0 M wide internal roads",
      "Adjacent to proposed 60.0 M Pithampur Road",
      "Green parks and landscaped gardens",
      "Attractive street lighting",
      "Bank home-loan facility available"
    ],
    "connectivity": [
      "Near Rau Circle",
      "On A.B. Road (Indore-Mhow/Bombay)",
      "Near IIM Institute",
      "Near Diamond Park and Nakhrali Dhani",
      "Near Railway Crossing",
      "On the way to Pithampur"
    ],
    "vision": [
      "A developed, well-connected residential township near Rau.",
      "Trust of 30,000 families with 20 years of reliability."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Midway City"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Rau Pithampur Road, Village Sonway, Indore"
    },
    {
      "label": "Developer",
      "value": "Sarthak Singapore"
    },
    {
      "label": "RERA No.",
      "value": "P-MHW-22-3582"
    }
  ],
  "images": [
    "/propertyList/Midway City 1 by Sarthak Singapore/img1.png",
    "/propertyList/Midway City 1 by Sarthak Singapore/img2.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Midway City 1 by Sarthak Singapore/img2.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Midway City 1 by Sarthak Singapore/img1.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Sarthak Singapore",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Midway City 1 details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 258,
  "title": "Midway City 2",
  "slug": "midway-city-2-sarthak-singapore",
  "location": "Rau Pithampur Road (Way to Pithampur)",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "700 - 1200 sq.ft.",
  "description": "Midway City 2 is a residential plotting project by Sarthak Singapore, extending the Singapore Midway City development toward Pithampur, Indore. Plots are offered in sizes of 20x35 (700 sq.ft.), 20x40 (800 sq.ft.), 20x47 (940 sq.ft.), 25x40 (1000 sq.ft.), 20x50 (1000 sq.ft.) and 20x60 (1200 sq.ft.). The developed colony includes green gardens/parks, a dedicated school plot, wide CC roads, drinking water and drainage lines, a water tank with boring and street lighting. Easy-installment plots and bank loan facilities are available.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA-approved, developed legal colony",
        "Plot sizes from 700 to 1200 sq.ft.",
        "Dedicated school plot within the layout",
        "Green parks and gardens",
        "Wide CC roads with street lighting and organized drainage"
      ]
    }
  ],
  "sections": {
    "overview": "Residential plots (700-1200 sq.ft.) in the Midway City development toward Pithampur, Indore.",
    "amenities": [
      {
        "title": "Parks & Gardens",
        "img": "/propertyList/Midway City 2 by Sarthak Singapore/img1.png"
      },
      {
        "title": "School Plot",
        "img": "/propertyList/Midway City 2 by Sarthak Singapore/img1.png"
      },
      {
        "title": "Wide CC Roads",
        "img": "/propertyList/Midway City 2 by Sarthak Singapore/img1.png"
      },
      {
        "title": "Drinking Water & Drainage Line",
        "img": "/propertyList/Midway City 2 by Sarthak Singapore/img1.png"
      },
      {
        "title": "Water Tank & Boring",
        "img": "/propertyList/Midway City 2 by Sarthak Singapore/img1.png"
      },
      {
        "title": "Street Lighting",
        "img": "/propertyList/Midway City 2 by Sarthak Singapore/img1.png"
      }
    ],
    "specifications": [
      "20x35 = 700 sq.ft.",
      "20x40 = 800 sq.ft.",
      "20x47 = 940 sq.ft.",
      "25x40 = 1000 sq.ft.",
      "20x50 = 1000 sq.ft.",
      "20x60 = 1200 sq.ft.",
      "9.0 M and 12.0 M wide internal roads",
      "Dedicated school plot and multiple parks",
      "Water tank with boring and street lighting"
    ],
    "connectivity": [
      "On the way to Pithampur",
      "Part of the Singapore Midway City development, Indore"
    ],
    "vision": [
      "A fully developed colony with all modern amenities.",
      "Convenient plots on easy installments with bank loan facilities."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Midway City 2"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Rau Pithampur Road (Way to Pithampur), Indore"
    },
    {
      "label": "Developer",
      "value": "Sarthak Singapore"
    },
    {
      "label": "Plot Sizes",
      "value": "700, 800, 940, 1000 & 1200 sq.ft."
    }
  ],
  "images": [
    "/propertyList/Midway City 2 by Sarthak Singapore/img1.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Midway City 2 by Sarthak Singapore/img1.png",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Sarthak Singapore",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Midway City 2 details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 259,
  "title": "British Grand",
  "slug": "british-grand-sarthak-singapore",
  "location": "Behind Singapore Township, Dhabli, Talawali Chanda, A.B. Road",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "15x40, 15x45, 17x45, 17x50, 20x40, 20x46 (avg) sq ft plots",
  "description": "Singapore British Grand is a RERA-approved, fully developed residential plotting township on A.B. Road, Indore, located behind Singapore Township at Dhabli, Talawali Chanda. The scheme offers a range of plot sizes with wide CC roads, landscaped gardens and secure boundaries. It is developed by Sarthak Vinayak Real Built under the Sarthak Singapore brand.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Government-approved, legal and developed colony",
        "Fully developed wide, modern CC roads",
        "Completely secure gated colony",
        "Green landscaped gardens and attractive entrance gate",
        "Organized drinking water pipeline and proper drainage line",
        "Boring and water tank for excellent water supply",
        "Street lights for electric lighting",
        "Convenient home loan facilities available from various banks"
      ]
    }
  ],
  "sections": {
    "overview": "RERA-approved residential plotting township on A.B. Road, Indore.",
    "amenities": [
      {
        "title": "Attractive Entrance Gate",
        "img": "/propertyList/British Grand by Sarthak Singapore/img2.png"
      },
      {
        "title": "Green Landscaped Gardens / Parks",
        "img": "/propertyList/British Grand by Sarthak Singapore/img2.png"
      },
      {
        "title": "Wide Developed CC Roads",
        "img": "/propertyList/British Grand by Sarthak Singapore/img2.png"
      },
      {
        "title": "Secure Colony",
        "img": "/propertyList/British Grand by Sarthak Singapore/img1.png"
      },
      {
        "title": "Drinking Water Pipeline & Drainage Line",
        "img": "/propertyList/British Grand by Sarthak Singapore/img2.png"
      },
      {
        "title": "Water Tank & Boring",
        "img": "/propertyList/British Grand by Sarthak Singapore/img2.png"
      },
      {
        "title": "Street Lights",
        "img": "/propertyList/British Grand by Sarthak Singapore/img2.png"
      }
    ],
    "specifications": [
      "12.0 M wide main internal road",
      "7.50 M wide colony roads",
      "Plot sizes including 15x40, 15x45, 17x45, 17x50, 20x40 and 20x46 (avg)",
      "Developed CC roads, drainage line and drinking water pipeline",
      "Street lighting and boundary security"
    ],
    "connectivity": [
      "A.B. Road (Indore-Dewas Highway)",
      "MR-10, MR-11, MR-12 crossings",
      "Rajpal Toyota",
      "Bombay Hospital",
      "Dainik Bhaskar Press",
      "Panchvati City Bus Stop"
    ],
    "vision": [
      "A new world of happiness",
      "Trusted by 30,000 families with 20 years of trust"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Singapore British Grand"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Behind Singapore Township, Dhabli, Talawali Chanda, A.B. Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Sarthak Singapore (Sarthak Vinayak Real Built)"
    },
    {
      "label": "RERA No.",
      "value": "P-SWR-22-3571"
    },
    {
      "label": "Plot Sizes",
      "value": "15x40, 15x45, 17x45, 17x50, 20x40, 20x46 (avg)"
    }
  ],
  "images": [
    "/propertyList/British Grand by Sarthak Singapore/img1.png",
    "/propertyList/British Grand by Sarthak Singapore/img2.png"
  ],
  "floorPlan": {
    "image": "/propertyList/British Grand by Sarthak Singapore/img2.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/British Grand by Sarthak Singapore/img1.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Sarthak Singapore",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "British Grand details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 260,
  "title": "Oracle City",
  "slug": "oracle-city-sarthak-singapore",
  "location": "Opposite Tattva Restaurant, Indore Bypass Touch Colony, Rau",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "800 - 1200 sq ft (20x40, 20x50 and average size plots)",
  "description": "Singapore Oracle City is a RERA-approved premium residential plotting project located on a bypass-touch prime location near Rau, Indore, just 2 minutes from Rau Circle. Plots range from 800 to 1200 sq ft in sizes of 20x40 and 20x50, set within a landscaped, gated community with a designer entrance gate. It is marketed by Sarthak Singapore and developed by Sarthak Vinayak Real Built.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Premium residential plots on a bypass-touch prime location",
        "Only 2 minutes from Rau Circle",
        "Attractive designer entrance gate",
        "Beautiful landscaped gardens",
        "Kids play zone",
        "Underground electricity",
        "Cemented wide roads",
        "Temple within the project"
      ]
    }
  ],
  "sections": {
    "overview": "RERA-approved premium residential plotting project near Rau, Indore.",
    "amenities": [
      {
        "title": "Attractive Entrance Gate",
        "img": "/propertyList/Oracle City by Sarthak Singapore/img1.png"
      },
      {
        "title": "Beautiful Landscaped Garden",
        "img": "/propertyList/Oracle City by Sarthak Singapore/img1.png"
      },
      {
        "title": "Kids Play Zone",
        "img": "/propertyList/Oracle City by Sarthak Singapore/img2.png"
      },
      {
        "title": "Underground Electricity",
        "img": "/propertyList/Oracle City by Sarthak Singapore/img2.png"
      },
      {
        "title": "Cemented Wide Roads",
        "img": "/propertyList/Oracle City by Sarthak Singapore/img1.png"
      },
      {
        "title": "Temple",
        "img": "/propertyList/Oracle City by Sarthak Singapore/img2.png"
      }
    ],
    "specifications": [
      "Plot sizes 20x40 and 20x50 (800-1200 sq ft)",
      "9 M wide internal roads",
      "Existing 12 M wide approach road",
      "Cemented wide roads with underground electricity",
      "Landscaped gardens and parks"
    ],
    "connectivity": [
      "Indore Bypass Road",
      "Rau Circle / Rau Square (2 minutes)",
      "Tattva Restaurant",
      "Towards Dewas via Bypass Road"
    ],
    "vision": [
      "A home that is close to the heart with everything nearby",
      "Build on trust - Indore, Mumbai, Goa"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Singapore Oracle City"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Opposite Tattva Restaurant, Indore Bypass Touch Colony, Rau, Indore"
    },
    {
      "label": "Developer",
      "value": "Sarthak Singapore (Sarthak Vinayak Real Built)"
    },
    {
      "label": "RERA No.",
      "value": "P-OTH-25-6001"
    },
    {
      "label": "Plot Sizes",
      "value": "20x40, 20x50 (800-1200 sq ft)"
    }
  ],
  "images": [
    "/propertyList/Oracle City by Sarthak Singapore/img1.png",
    "/propertyList/Oracle City by Sarthak Singapore/img2.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Oracle City by Sarthak Singapore/img2.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Oracle City by Sarthak Singapore/img2.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Sarthak Singapore",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Oracle City details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 261,
  "title": "Industrial Park",
  "slug": "industrial-park-sarthak-singapore",
  "location": "Jakhya Village, Oriental College Road, Ujjain Road",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Commercial",
  "bhk": "Industrial Plots",
  "area": "Industrial plots ranging approx. 53x100 to 77x250 sq ft",
  "description": "Singapore Industrial Park is a fully integrated industrial township located at Jakhya Village near the Indore-Ujjain State Highway, on Oriental College Road, Ujjain Road, Indore. It is a bank-approved project offering freehold industrial plots with 60 ft CC roads, drinking water, entry-exit gates, 24-hour security, 24x7 electricity and an 8 ft high compound wall, along with common ETP and STP facilities. The park suits pharmaceuticals, food processing, garment, printing, plastic, packaging, electronics, logistics/warehouse, engineering and textile units.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Bank-approved project with project loans from nationalized and private banks",
        "Subsidy available from MP Govt. Industries Department and Govt. of India MSME department",
        "Ideal for start-up businesses",
        "Freehold property with no annual lease rent and no heavy property tax",
        "Grand entrance gate and 60 ft CC road",
        "Entire area covered by 8 ft high compound wall",
        "Underground drainage line, water tank and street lights",
        "Common ETP and STP plant, single-window system via Industrial Welfare Association"
      ]
    }
  ],
  "sections": {
    "overview": "Fully integrated industrial township near Indore-Ujjain State Highway.",
    "amenities": [
      {
        "title": "Grand Entrance Gate",
        "img": "/propertyList/Industrial Park by Sarthak Singapore/img1.png"
      },
      {
        "title": "60 ft CC Road",
        "img": "/propertyList/Industrial Park by Sarthak Singapore/img2.png"
      },
      {
        "title": "Covered by Compound Wall",
        "img": "/propertyList/Industrial Park by Sarthak Singapore/img1.png"
      },
      {
        "title": "Underground Drainage Line",
        "img": "/propertyList/Industrial Park by Sarthak Singapore/img2.png"
      },
      {
        "title": "Road Side Pavers",
        "img": "/propertyList/Industrial Park by Sarthak Singapore/img2.png"
      },
      {
        "title": "Grand Water Tank",
        "img": "/propertyList/Industrial Park by Sarthak Singapore/img2.png"
      },
      {
        "title": "Street Lights",
        "img": "/propertyList/Industrial Park by Sarthak Singapore/img1.png"
      },
      {
        "title": "STP Plant",
        "img": "/propertyList/Industrial Park by Sarthak Singapore/img2.png"
      },
      {
        "title": "Parking Space",
        "img": "/propertyList/Industrial Park by Sarthak Singapore/img2.png"
      }
    ],
    "specifications": [
      "18 M wide internal roads and 60 ft CC road",
      "Industrial plot sizes ranging approx. 53x100 to 77x250 sq ft",
      "8 ft high compound wall around entire area",
      "Underground drainage line and street lights",
      "Common ETP and STP facility, 24x7 electricity and security"
    ],
    "connectivity": [
      "Indore-Ujjain State Highway (Indore-Ujjain Road)",
      "Oriental College Road",
      "Arbindo Hospital (3 minutes drive)",
      "Sanwer Road Industrial Area",
      "2 minutes from Indore-Ujjain Road highway",
      "Near highway, railway station, airport and hospital"
    ],
    "vision": [
      "Give your business new heights",
      "Build on trust - Indore, Ujjain, Dewas, Mumbai & Goa"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Singapore Industrial Park"
    },
    {
      "label": "Property Type",
      "value": "Industrial / Commercial Plots"
    },
    {
      "label": "Location",
      "value": "Jakhya Village, Oriental College Road, Ujjain Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Sarthak Singapore (Sarthak Vinayak Real Built)"
    },
    {
      "label": "Plot Sizes",
      "value": "Approx. 53x100 to 77x250 sq ft"
    }
  ],
  "images": [
    "/propertyList/Industrial Park by Sarthak Singapore/img1.png",
    "/propertyList/Industrial Park by Sarthak Singapore/img2.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Industrial Park by Sarthak Singapore/img2.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Industrial Park by Sarthak Singapore/img1.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Sarthak Singapore",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Industrial Park details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 262,
  "title": "King Estate",
  "slug": "king-estate-sarthak-singapore",
  "location": "Near Tigriya Badshah, Super Corridor",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "Plots incl. 20x40, 20x45, 20x50, 20x55, 25x40, 25x60, 25x65 sq ft (avg sizes)",
  "description": "Singapore King Estate is a RERA-approved residential plotting development on the prime location of Super Corridor, near Tigriya Badshah, Indore. It comprises two phases - King Estate Royal and King Estate Imperial - offering a wide range of plot sizes with developed internal roads, parks, row houses and commercial/office/residential shop provisions. It is developed by Sarthak Vinayak Real Built under the Sarthak Singapore brand.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Two configurations - King Estate Royal and King Estate Imperial",
        "Prime location on Super Corridor near Tigriya Badshah",
        "RERA approved (Royal: P-IND-22-3604, Imperial: P-IND-22-3686)",
        "Wide developed internal roads",
        "Landscaped parks and green spaces",
        "Provision for commercial shops, office and residential blocks",
        "Row houses within the layout",
        "Trusted by 30,000 families with 20 years of trust"
      ]
    }
  ],
  "sections": {
    "overview": "RERA-approved residential plotting project (Royal & Imperial) on Super Corridor, Indore.",
    "amenities": [
      {
        "title": "Landscaped Parks",
        "img": "/propertyList/King Estate by Sarthak Singapore/img2.png"
      },
      {
        "title": "Wide Developed Roads",
        "img": "/propertyList/King Estate by Sarthak Singapore/img2.png"
      },
      {
        "title": "Commercial Shops & Office / Residential Blocks",
        "img": "/propertyList/King Estate by Sarthak Singapore/img2.png"
      },
      {
        "title": "Row Houses",
        "img": "/propertyList/King Estate by Sarthak Singapore/img2.png"
      },
      {
        "title": "Club",
        "img": "/propertyList/King Estate by Sarthak Singapore/img2.png"
      },
      {
        "title": "Prime Super Corridor Location",
        "img": "/propertyList/King Estate by Sarthak Singapore/img1.png"
      }
    ],
    "specifications": [
      "Plot sizes including 20x40, 20x45, 20x50, 20x55, 25x40, 25x60, 25x65 (avg)",
      "9.0 M, 12.0 M and 18.0 M wide roads",
      "30.0 M and 45.0 M approach roads",
      "Provision for retail shops, club and row houses",
      "Landscaped parks and 6.0 M circulation roads"
    ],
    "connectivity": [
      "Super Corridor",
      "IDA Scheme",
      "Near Tigriya Badshah",
      "Railway Track (towards Ratlam / Indore)",
      "Adjacent Singapore Life Style and Singapore Palm projects"
    ],
    "vision": [
      "Build your dream home at a prime location on the Super Corridor",
      "Trusted by 30,000 families with 20 years of trust"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Singapore King Estate (Royal & Imperial)"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Near Tigriya Badshah, Super Corridor, Indore"
    },
    {
      "label": "Developer",
      "value": "Sarthak Singapore (Sarthak Vinayak Real Built)"
    },
    {
      "label": "RERA No.",
      "value": "Royal: P-IND-22-3604 | Imperial: P-IND-22-3686"
    },
    {
      "label": "Configurations",
      "value": "King Estate Royal, King Estate Imperial"
    }
  ],
  "images": [
    "/propertyList/King Estate by Sarthak Singapore/img1.png",
    "/propertyList/King Estate by Sarthak Singapore/img2.png"
  ],
  "floorPlan": {
    "image": "/propertyList/King Estate by Sarthak Singapore/img2.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/King Estate by Sarthak Singapore/img1.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Sarthak Singapore",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "King Estate details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 263,
  "title": "PinkCity",
  "slug": "pinkcity-sarthak-singapore",
  "location": "Village Santer, Mhow",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "Plots incl. 15x40, 15x45, 17x40, 20x40, 20x45, 20x50, 20x65, 30x40, 30x60/65 sq ft",
  "description": "Singapore Pink City is a RERA-approved, heritage-inspired residential plotting township at Village Santer, Mhow, Indore, designed for modern living. The scheme offers a wide variety of plot sizes with a grand heritage-style entrance gate, landscaped gardens, kids play area, concrete roads and a covered secure campus. It is marketed by Sarthak Singapore and developed by Siddhi Vinayak Real Estate.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Heritage-inspired design for modern living",
        "Grand heritage-style entrance gate",
        "Cover and secure campus",
        "Landscaped gardens",
        "Kids play area",
        "Concrete roads",
        "Overhead water tank",
        "RERA approved (P-MHW-25-5825)"
      ]
    }
  ],
  "sections": {
    "overview": "RERA-approved heritage-inspired residential plotting township at Village Santer, Mhow.",
    "amenities": [
      {
        "title": "Entrance Gate",
        "img": "/propertyList/PinkCity by Sarthak Singapore/img1.png"
      },
      {
        "title": "Cover & Secure Campus",
        "img": "/propertyList/PinkCity by Sarthak Singapore/img2.png"
      },
      {
        "title": "Gardens",
        "img": "/propertyList/PinkCity by Sarthak Singapore/img1.png"
      },
      {
        "title": "Concrete Road",
        "img": "/propertyList/PinkCity by Sarthak Singapore/img2.png"
      },
      {
        "title": "Kids Play Area",
        "img": "/propertyList/PinkCity by Sarthak Singapore/img1.png"
      },
      {
        "title": "Overhead Water Tank",
        "img": "/propertyList/PinkCity by Sarthak Singapore/img2.png"
      }
    ],
    "specifications": [
      "Plot sizes including 15x40, 15x45, 17x40, 20x40, 20x45, 20x50, 20x65, 30x40, 30x60/65",
      "9.0 M and 7.5 M wide roads",
      "Shop-cum-residential plots provision",
      "Concrete roads and overhead water tank",
      "Covered, secure gated campus with landscaped parks"
    ],
    "connectivity": [
      "Mhow-Indore Highway",
      "Towards Rau",
      "Bhawrilal Sweets",
      "Telephone Nagar",
      "Towards Mhow"
    ],
    "vision": [
      "Inspired by heritage, designed for modern living",
      "Build on trust - Indore, Mumbai, Goa"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Singapore Pink City"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Village Santer, Mhow, Indore"
    },
    {
      "label": "Developer",
      "value": "Siddhi Vinayak Real Estate (marketed by Sarthak Singapore)"
    },
    {
      "label": "RERA No.",
      "value": "P-MHW-25-5825"
    },
    {
      "label": "Plot Sizes",
      "value": "15x40 to 30x60/65 sq ft"
    }
  ],
  "images": [
    "/propertyList/PinkCity by Sarthak Singapore/img1.png",
    "/propertyList/PinkCity by Sarthak Singapore/img2.png"
  ],
  "floorPlan": {
    "image": "/propertyList/PinkCity by Sarthak Singapore/img2.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/PinkCity by Sarthak Singapore/img2.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Sarthak Singapore",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "PinkCity details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 264,
  "title": "Starcity Crown",
  "slug": "starcity-crown-m-jhaveri",
  "location": "Nihalpur Mundi, Near Silicon City, AB By-Pass Road",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "1100, 1150, 1250, 1425 sq.ft.",
  "description": "Silver Starcity Crown is a gated residential plotting scheme by M. Jhaveri Group, forming a phase of the larger Silver Starcity township near Silicon City on the AB By-Pass Road, Indore. The project offers residential plots with wide frontages, a landscaped grand entrance, and secure gated surroundings. Positioned close to the city bypass, it provides easy connectivity to schools, hospitals and daily conveniences within a fully developed Starcity campus.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Gated residential plotting community near AB By-Pass Road",
        "Plot sizes of 1100, 1150, 1250 and 1425 sq.ft.",
        "Wide internal roads (30 ft, 50 ft) with landscaped grand entrance",
        "Part of the fully developed Silver Starcity township",
        "CCTV secured campus with underground electrification"
      ]
    }
  ],
  "sections": {
    "overview": "Gated residential plots forming the Crown phase of the Silver Starcity township on AB By-Pass Road, Indore.",
    "amenities": [
      {
        "title": "Huge Gardens",
        "img": "/propertyList/Starcity Crown by M Jhaveri/img3.png"
      },
      {
        "title": "Pickle Ball Court",
        "img": "/propertyList/Starcity Crown by M Jhaveri/img3.png"
      },
      {
        "title": "Daily Need Amenities",
        "img": "/propertyList/Starcity Crown by M Jhaveri/img3.png"
      },
      {
        "title": "Temple",
        "img": "/propertyList/Starcity Crown by M Jhaveri/img3.png"
      },
      {
        "title": "CCTV Secured Campus",
        "img": "/propertyList/Starcity Crown by M Jhaveri/img3.png"
      },
      {
        "title": "Kids Play Area",
        "img": "/propertyList/Starcity Crown by M Jhaveri/img3.png"
      },
      {
        "title": "Half Basketball Court",
        "img": "/propertyList/Starcity Crown by M Jhaveri/img3.png"
      },
      {
        "title": "Landscaped Grand Entrance",
        "img": "/propertyList/Starcity Crown by M Jhaveri/img2.png"
      }
    ],
    "specifications": [
      "Residential plots of 1100, 1150, 1250 and 1425 sq.ft.",
      "Internal roads ranging from 30 ft to 50 ft wide",
      "CCTV secured gated campus",
      "Underground electrification",
      "Landscaped gardens and grand entrance plaza",
      "City bus facility and proximity to schools, colleges and hospitals"
    ],
    "connectivity": [
      "Located on AB By-Pass Road (AB Road)",
      "Near Silicon City",
      "Close to SAGE University",
      "Near Emerald Heights School and DPS Rau",
      "Proximity to Omaxe Hills and Silver SkyPark",
      "Connected towards Rau, Mhow and Dewas"
    ],
    "vision": [
      "A calmer, greener and better-connected community life within a fully developed township.",
      "Wide frontages and secure gated surroundings to build your dream home."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Silver Starcity Crown"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Nihalpur Mundi, Near Silicon City, AB By-Pass Road, Indore"
    },
    {
      "label": "Developer",
      "value": "M. Jhaveri Group"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-24-5298"
    },
    {
      "label": "Plot Sizes",
      "value": "1100, 1150, 1250, 1425 sq.ft."
    }
  ],
  "images": [
    "/propertyList/Starcity Crown by M Jhaveri/img4.png",
    "/propertyList/Starcity Crown by M Jhaveri/img2.png",
    "/propertyList/Starcity Crown by M Jhaveri/img3.png",
    "/propertyList/Starcity Crown by M Jhaveri/img5.png",
    "/propertyList/Starcity Crown by M Jhaveri/img1.png",
    "/propertyList/Starcity Crown by M Jhaveri/img6.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Starcity Crown by M Jhaveri/img5.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Starcity Crown by M Jhaveri/img6.png",
    "locationLink": ""
  },
  "developer": {
    "name": "M. Jhaveri Group",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Starcity Crown details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 265,
  "title": "Silver Springs Phase I",
  "slug": "silver-springs-phase-i-m-jhaveri",
  "location": "Silver Springs (Phase 1), Agra Bombay By-Pass Road",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Villa",
  "bhk": "4 & 5 BHK",
  "area": "Super Built-up 3350-4074 sq.ft.",
  "description": "Villa A3 is part of Silver Leaves, a luxury row villa enclave by M. Jhaveri Group within Silver Springs (Phase 1) on the Agra Bombay By-Pass Road, Indore. The project offers 4 and 5 BHK triple-storey row villas across multiple configurations (Types A, B, C, D and E) with private parking, gardens, pooja room, dress rooms and multipurpose/store spaces. The Type A3 villa provides a carpet area of 2758 sq.ft. with a super built-up area of 3350 sq.ft. across ground, first and second floors.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "4 & 5 BHK luxury row villas (Silver Leaves at Silver Springs Phase 1)",
        "Type A3 villa: 2758 sq.ft. carpet / 3350 sq.ft. super built-up",
        "Triple-storey layout with private parking and garden",
        "Configurations ranging from 3350 to 4074 sq.ft. super built-up",
        "Contemporary elevation with wide frontages and green surroundings"
      ]
    }
  ],
  "sections": {
    "overview": "4 & 5 BHK luxury row villas within the Silver Leaves enclave at Silver Springs Phase 1, Indore.",
    "amenities": [
      {
        "title": "Luxury Row Villa Elevation",
        "img": "/propertyList/Villa A3 by M Jhaveri/img4.png"
      },
      {
        "title": "Private Parking",
        "img": "/propertyList/Villa A3 by M Jhaveri/img5.png"
      },
      {
        "title": "Private Garden & Green Area",
        "img": "/propertyList/Villa A3 by M Jhaveri/img5.png"
      },
      {
        "title": "Pooja Room",
        "img": "/propertyList/Villa A3 by M Jhaveri/img5.png"
      },
      {
        "title": "Multipurpose Room",
        "img": "/propertyList/Villa A3 by M Jhaveri/img5.png"
      },
      {
        "title": "Landscaped Township Setting",
        "img": "/propertyList/Villa A3 by M Jhaveri/img2.png"
      },
      {
        "title": "Club & Shopping within Township",
        "img": "/propertyList/Villa A3 by M Jhaveri/img2.png"
      }
    ],
    "specifications": [
      "Triple-storey row villas (Ground + First + Second floor)",
      "Type A (A1-A5): 2758 sq.ft. carpet / 3045 built-up / 3350 super built-up",
      "Type B (B1-B5): 3299 sq.ft. carpet / 3704 built-up / 4074 super built-up",
      "Type D: 2959 sq.ft. carpet / 3357 built-up / 3693 super built-up",
      "Type E: 3002 sq.ft. carpet / 3413 built-up / 3754 super built-up",
      "Private parking (approx. 11'9\"x18'1\"), garden and wash area",
      "Pooja room, dress rooms, store room and multipurpose room",
      "Standing balconies and provision for lift in select types"
    ],
    "connectivity": [
      "Located on AB By-Pass Road (Agra Bombay By-Pass Road)",
      "Near Mata Gujri Girls College and education institutions",
      "Close to Phoenix Citadel Mall",
      "Near Navlakha Bus Stand and Bhanwarkuwa Square",
      "Connectivity towards Ring Road, MR10, Dewas and Mhow"
    ],
    "vision": [
      "Lifestyle crafted for indulgence - live in green legacy.",
      "Luxury living amidst a fully landscaped Silver Springs township."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Silver Leaves (Villa A3)"
    },
    {
      "label": "Property Type",
      "value": "Row Villa"
    },
    {
      "label": "Location",
      "value": "Silver Springs (Phase 1), Agra Bombay By-Pass Road, Indore"
    },
    {
      "label": "Developer",
      "value": "M. Jhaveri Group"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-23-4228"
    },
    {
      "label": "Configurations",
      "value": "4 & 5 BHK"
    },
    {
      "label": "Area (Type A3)",
      "value": "2758 sq.ft. carpet / 3350 sq.ft. super built-up"
    }
  ],
  "images": [
    "/propertyList/Villa A3 by M Jhaveri/img4.png",
    "/propertyList/Villa A3 by M Jhaveri/img1.png",
    "/propertyList/Villa A3 by M Jhaveri/img3.png",
    "/propertyList/Villa A3 by M Jhaveri/img2.png",
    "/propertyList/Villa A3 by M Jhaveri/img5.png",
    "/propertyList/Villa A3 by M Jhaveri/img6.png",
    "/propertyList/Villa A3 by M Jhaveri/img7.png",
    "/propertyList/Villa A3 by M Jhaveri/img8.png",
    "/propertyList/Villa A3 by M Jhaveri/img9.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Villa A3 by M Jhaveri/img5.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Villa A3 by M Jhaveri/img2.png",
    "locationLink": ""
  },
  "developer": {
    "name": "M. Jhaveri Group",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Villa A3 details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 266,
  "title": "Skye Solace",
  "slug": "skye-solace",
  "location": "RE 2 Road, near Signature Heights, Indore",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "",
  "description": "Skye Solace is a vibrant plotting community by Skye Earth spread across 48 residential plots, designed as a refuge surrounded by greenery. Located on RE 2 Road near Signature Heights, it offers a nature-immersed lifestyle with landscaped gardens, a congregation lawn and internal roads. The gated development places residents close to schools, hospitals and retail while retaining a calm, green setting.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Vibrant plotting community with 48 plots",
        "Entrance plaza with security cabin",
        "Central congregation lawn and landscaped gardens",
        "Children's play area, gazebo and water body",
        "9.00 mt. wide internal roads and proposed 18 mt. wide road frontage",
        "Located in the centre of everything yet surrounded by greens"
      ]
    }
  ],
  "sections": {
    "overview": "A vibrant plotting community surrounded by nature on RE 2 Road, Indore.",
    "amenities": [
      {
        "title": "Entrance Plaza & Gate",
        "img": "/propertyList/Skye Solace/img3.png"
      },
      {
        "title": "Landscaped Community Greens",
        "img": "/propertyList/Skye Solace/img5.png"
      },
      {
        "title": "Serene Landscaped Sit-outs",
        "img": "/propertyList/Skye Solace/img7.png"
      },
      {
        "title": "Congregation Lawn",
        "img": "/propertyList/Skye Solace/img6.png"
      },
      {
        "title": "Children's Play Area",
        "img": "/propertyList/Skye Solace/img6.png"
      },
      {
        "title": "Central Location Amid Greens",
        "img": "/propertyList/Skye Solace/img4.png"
      }
    ],
    "specifications": [
      "48 residential plots",
      "9.00 mt. wide internal roads",
      "Proposed 18 mt. wide road frontage",
      "Entrance plaza with security cabin",
      "Congregation lawn, gazebo, water body and children's play area"
    ],
    "connectivity": [
      "Signature Heights",
      "The Daly College",
      "Croma",
      "D-Mart",
      "Noble Hospital",
      "Hotel President Park",
      "Agarwal Public School",
      "Vidyasagar School",
      "Palda Main Road",
      "Eastern Ring Road",
      "Bypass Road"
    ],
    "vision": [
      "Own your own piece of nature.",
      "Your world surrounded by solace."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Skye Solace"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "RE 2 Road, near Signature Heights, Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    },
    {
      "label": "RERA No.",
      "value": "P-OTH-23-4047"
    },
    {
      "label": "Total Plots",
      "value": "48"
    },
    {
      "label": "T & CP Permission No.",
      "value": "INDLP-8250"
    }
  ],
  "images": [
    "/propertyList/Skye Solace/img3.png",
    "/propertyList/Skye Solace/img4.png",
    "/propertyList/Skye Solace/img5.png",
    "/propertyList/Skye Solace/img7.png",
    "/propertyList/Skye Solace/img6.png",
    "/propertyList/Skye Solace/img2.png",
    "/propertyList/Skye Solace/img8.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Skye Solace/img6.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Skye Solace/img8.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Skye Solace details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 267,
  "title": "Skye Luxuria Eleven",
  "slug": "skye-luxuria-eleven",
  "location": "MR 11 Road, Indore",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "",
  "description": "Skye Luxuria Eleven is an elite lifestyle plotted community by Skye Earth, the next residential release of the Skye group on MR 11 Road, Indore. Set on an elegant, tree-lined boulevard and surrounded by lush green parkland, it offers super luxury limited edition bungalow plots with resort-style amenities. The development combines a club, pool and landscaped gardens with a hi-tech secured, gated campus.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Super luxury, limited edition bungalow plots",
        "Elite lifestyle plotted community on a tree-lined boulevard",
        "Club house with pool and indoor & outdoor entertainment spaces",
        "Exotic landscaped gardens and walking paths",
        "Hi-tech secured, gated campus with wide roads",
        "Surrounded by lush green parkland"
      ]
    }
  ],
  "sections": {
    "overview": "An elite lifestyle plotted community with resort-style amenities on MR 11 Road, Indore.",
    "amenities": [
      {
        "title": "Exotic Landscaped Gardens",
        "img": "/propertyList/Skye Luxuria Eleven/img6.png"
      },
      {
        "title": "Club House",
        "img": "/propertyList/Skye Luxuria Eleven/img4.png"
      },
      {
        "title": "Swimming Pool",
        "img": "/propertyList/Skye Luxuria Eleven/img4.png"
      },
      {
        "title": "Children's Play Area",
        "img": "/propertyList/Skye Luxuria Eleven/img7.png"
      },
      {
        "title": "Walking Paths",
        "img": "/propertyList/Skye Luxuria Eleven/img8.png"
      },
      {
        "title": "Informal Sit-out",
        "img": "/propertyList/Skye Luxuria Eleven/img6.png"
      },
      {
        "title": "Limited Edition Bungalow Plots",
        "img": "/propertyList/Skye Luxuria Eleven/img5.png"
      },
      {
        "title": "Wide Roads",
        "img": "/propertyList/Skye Luxuria Eleven/img8.png"
      }
    ],
    "specifications": [
      "Exotic landscaped gardens",
      "Club house with swimming pool",
      "Children's play area and walking paths",
      "Informal sit-outs",
      "Limited edition bungalow plots",
      "Hi-tech secured campus",
      "Wide roads",
      "Best quality development"
    ],
    "connectivity": [
      "MR 11 Road",
      "Sheraton Hotel",
      "Golden Leaves Resort",
      "Gems Public School",
      "Skye Luxuria Gardens",
      "Skye Mayfair",
      "Skye Luxuria City",
      "AB Bypass Road",
      "RE 3 Road"
    ],
    "vision": [
      "It's not just a number... it's a way of life!",
      "Immerse yourself in Luxuria 11, a new lifestyle awaits you."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Skye Luxuria Eleven"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "MR 11 Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-24-4769"
    },
    {
      "label": "T & CP Permission No.",
      "value": "INDLP20082204"
    }
  ],
  "images": [
    "/propertyList/Skye Luxuria Eleven/img3.png",
    "/propertyList/Skye Luxuria Eleven/img4.png",
    "/propertyList/Skye Luxuria Eleven/img6.png",
    "/propertyList/Skye Luxuria Eleven/img7.png",
    "/propertyList/Skye Luxuria Eleven/img8.png",
    "/propertyList/Skye Luxuria Eleven/img5.png",
    "/propertyList/Skye Luxuria Eleven/img2.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Skye Luxuria Eleven/img5.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Skye Luxuria Eleven/img9.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Skye Luxuria Eleven details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 268,
  "title": "Skye Luxuria 20",
  "slug": "skye-luxuria-20",
  "location": "AB Road, Vijaynagar, Indore",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "",
  "area": "",
  "description": "Skye Luxuria 20 is a high-rise landmark residential tower by Skye Earth, rising on AB Road in Vijaynagar, one of Indore's most thriving residential hubs. It offers only 60 ultra-luxurious residences with no common walls, two-side open homes and balconies in every room, plus panoramic views of AB Road and the city skyline. Select residences feature a private pool, home theatre and sundeck, complemented by a hotel-style club, gym and landscaped podium.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Only 60 ultra-luxurious residences with no common walls and utmost privacy",
        "Central India's tallest landmark residences",
        "2-side open homes with zero negative space and balconies in every room",
        "Panoramic views of AB Road and the city skyline",
        "Select homes with private pool, home theatre and 60 feet wide sundeck",
        "Architecture designed by Apurva Amin and Associates, Ahmedabad"
      ]
    }
  ],
  "sections": {
    "overview": "A landmark high-rise of 60 ultra-luxury residences on AB Road, Vijaynagar, Indore.",
    "amenities": [
      {
        "title": "Club House with Exotic Pool",
        "img": "/propertyList/Skye Luxuria 20/img16.png"
      },
      {
        "title": "Swimming Pool",
        "img": "/propertyList/Skye Luxuria 20/img15.png"
      },
      {
        "title": "Gym & Indoor Sports",
        "img": "/propertyList/Skye Luxuria 20/img16.png"
      },
      {
        "title": "Landscaped Podium Garden",
        "img": "/propertyList/Skye Luxuria 20/img11.png"
      },
      {
        "title": "Private Pool & Sundeck Residences",
        "img": "/propertyList/Skye Luxuria 20/img13.png"
      },
      {
        "title": "60 Feet Wide Sundeck",
        "img": "/propertyList/Skye Luxuria 20/img10.png"
      },
      {
        "title": "Lounge",
        "img": "/propertyList/Skye Luxuria 20/img16.png"
      },
      {
        "title": "Multi-level Car Park & 5-level Security",
        "img": "/propertyList/Skye Luxuria 20/img9.png"
      }
    ],
    "specifications": [
      "100% power backup for internal apartments and common areas",
      "Floor to ceiling glass windows for ample light and ventilation",
      "70% open space with 3 side roads",
      "Grand columnless living and drawing rooms",
      "Low density area with unobstructed views",
      "Provision for outdoor A/C units with proper ducts",
      "Centralised internet and television connection for all units",
      "Gas pipeline provision",
      "Narmada and borewell water connection",
      "Multi-level allotted car park",
      "Advanced fire fighting system",
      "Earthquake resistant ISI standard RCC wall structure by DUCON Ahmedabad",
      "High speed elevators with separate service elevator",
      "24x7 power backup for common areas and hi-tech 5-level security"
    ],
    "connectivity": [
      "AB Road / Agra Mumbai Road",
      "Satya Sai Square",
      "Vijaynagar Square",
      "C 21 Mall - 2 kms",
      "Malhar Mega Mall - 2 kms",
      "Orbit Mall - 2 kms",
      "Mangal City - 1.3 kms",
      "Sayaji Hotel - 1.7 kms",
      "Radisson Hotel - 1.7 kms",
      "Marriott Hotel - 1.8 kms",
      "Bombay Hospital - 1.2 kms",
      "Apollo Hospitals - 1.7 kms",
      "Medanta Hospital - 1.7 kms",
      "Satya Sai School - 1 km",
      "Airport - 10 kms",
      "Railway Station - 6 kms",
      "Super (IT) Corridor - 7 kms",
      "Indore Bypass - 3.8 kms"
    ],
    "vision": [
      "For the chosen few.",
      "A landmark of luxury that will change the face of Indore, and your life."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Skye Luxuria 20"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "AB Road, Vijaynagar, Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    },
    {
      "label": "Total Units",
      "value": "60 residences"
    }
  ],
  "images": [
    "/propertyList/Skye Luxuria 20/img5.png",
    "/propertyList/Skye Luxuria 20/img3.png",
    "/propertyList/Skye Luxuria 20/img7.png",
    "/propertyList/Skye Luxuria 20/img13.png",
    "/propertyList/Skye Luxuria 20/img10.png",
    "/propertyList/Skye Luxuria 20/img12.png",
    "/propertyList/Skye Luxuria 20/img14.png",
    "/propertyList/Skye Luxuria 20/img15.png",
    "/propertyList/Skye Luxuria 20/img6.png",
    "/propertyList/Skye Luxuria 20/img16.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Skye Luxuria 20/img16.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Skye Luxuria 20/img15.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Skye Luxuria 20 details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 269,
  "title": "Skye Luxuria Gardens",
  "slug": "skye-luxuria-gardens",
  "location": "Near 60 m Wide Bypass Road, Indore",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "",
  "description": "Skye Luxuria Gardens is a premium plotting community by Skye Earth, a bespoke high-end residential plotting project of 23 plots crafted for the discerning few. Each plot is a canvas for a dream home, set within landscaped gardens and offering a blend of modern amenities and timeless elegance. The gated development includes a swimming pool, sports court, kids play area and jogging tracks with room for future expansion.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Bespoke premium plotting community for the discerning few",
        "23 high-end residential plots",
        "Swimming pool with deck and landscaped gardens",
        "Multipurpose court, basketball court and kids play area",
        "Jogging tracks and pergola sit-outs",
        "9 mt. wide internal roads with future expansion area"
      ]
    }
  ],
  "sections": {
    "overview": "A bespoke premium plotting community of 23 plots near the 60 m wide Bypass Road, Indore.",
    "amenities": [
      {
        "title": "Swimming Pool",
        "img": "/propertyList/Skye Luxuria Gardens/img3.png"
      },
      {
        "title": "Landscaped Gardens",
        "img": "/propertyList/Skye Luxuria Gardens/img2.png"
      },
      {
        "title": "Multipurpose & Basketball Court",
        "img": "/propertyList/Skye Luxuria Gardens/img4.png"
      },
      {
        "title": "Kids Play Area",
        "img": "/propertyList/Skye Luxuria Gardens/img4.png"
      },
      {
        "title": "Landscaped Sit-out Greens",
        "img": "/propertyList/Skye Luxuria Gardens/img6.png"
      },
      {
        "title": "Jogging Track & Pergola",
        "img": "/propertyList/Skye Luxuria Gardens/img5.png"
      }
    ],
    "specifications": [
      "23 residential plots",
      "9 mt. wide internal roads",
      "Swimming pool with deck",
      "Multipurpose court and kids play area",
      "Jogging tracks and landscaped gardens",
      "Gazebo, pergola and platform sit-outs",
      "Future expansion area"
    ],
    "connectivity": [
      "60 m Wide Bypass Road",
      "To Dewas",
      "To Mhow / Mumbai",
      "Gems Public School",
      "Skye Luxuria 11",
      "Sheraton Hotel",
      "Golden Leaves Resort",
      "Skye Florence",
      "Decathlon",
      "AB Bypass Road"
    ],
    "vision": [
      "A premium plotting community where luxury meets nature.",
      "Bespoke plotting community for the discerning few."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Skye Luxuria Gardens"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Near 60 m Wide Bypass Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    },
    {
      "label": "RERA No.",
      "value": "P-OTH-23-3966"
    },
    {
      "label": "Total Plots",
      "value": "23"
    },
    {
      "label": "T & CP Permission No.",
      "value": "INDLP-8620"
    }
  ],
  "images": [
    "/propertyList/Skye Luxuria Gardens/img2.png",
    "/propertyList/Skye Luxuria Gardens/img3.png",
    "/propertyList/Skye Luxuria Gardens/img4.png",
    "/propertyList/Skye Luxuria Gardens/img6.png",
    "/propertyList/Skye Luxuria Gardens/img5.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Skye Luxuria Gardens/img5.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Skye Luxuria Gardens/img6.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Skye Luxuria Gardens details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 270,
  "title": "Skye Luxuria City",
  "slug": "skye-luxuria-city",
  "location": "Near Sheraton Hotel, MR 11 Road, Indore",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "",
  "description": "Skye Luxuria City is an exclusive plotted community by Skye Earth, set within a secured gated development. Thoughtfully master-planned with wide internal roads, landscaped theme gardens and resort-style social spaces, the project is designed for bespoke lifestyle villas. It enjoys a coveted location near the Sheraton Hotel on the MR 11 Road corridor in Indore.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Exclusive secured gated plotted community",
        "Exotic landscaped and theme gardens",
        "Multipurpose court and gazebos",
        "Hi-tech secured campus with wide roads",
        "Coveted location near Sheraton Hotel"
      ]
    }
  ],
  "sections": {
    "overview": "Exclusive plotted community with resort-style landscaped amenities near Sheraton Hotel, Indore.",
    "amenities": [
      {
        "title": "Exotic Landscaped Gardens",
        "img": "/propertyList/Skye Luxuria City/img6.png"
      },
      {
        "title": "Grand Welcome Entrance",
        "img": "/propertyList/Skye Luxuria City/img4.png"
      },
      {
        "title": "Zen / Theme Gardens",
        "img": "/propertyList/Skye Luxuria City/img6.png"
      },
      {
        "title": "Multipurpose Court",
        "img": "/propertyList/Skye Luxuria City/img9.png"
      },
      {
        "title": "Open Sitouts, Recreation & Play Areas",
        "img": "/propertyList/Skye Luxuria City/img7.png"
      },
      {
        "title": "Tennis Court",
        "img": "/propertyList/Skye Luxuria City/img9.png"
      },
      {
        "title": "Project Highlights",
        "img": "/propertyList/Skye Luxuria City/img10.png"
      }
    ],
    "specifications": [
      "9.00 M and 12.00 M wide internal roads",
      "Secured gated campus",
      "Landscaped gardens, theme gardens and gazebos"
    ],
    "connectivity": [
      "Sheraton Hotel",
      "MR 11 Road",
      "Golden Leaves Resort",
      "Omaxe City",
      "Skye City"
    ],
    "vision": [
      "A place that reflects your perfect dream",
      "Community living that feels like a resort"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Skye Luxuria City"
    },
    {
      "label": "Property Type",
      "value": "Plot (Exclusive Plotted Community)"
    },
    {
      "label": "Location",
      "value": "Near Sheraton Hotel, MR 11 Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    },
    {
      "label": "T & CP Permission No.",
      "value": "SP/OUT-587/21/NAGRANI/2021/2023"
    },
    {
      "label": "Development Permission No.",
      "value": "ANUGAA no./1012/2023"
    }
  ],
  "images": [
    "/propertyList/Skye Luxuria City/img4.png",
    "/propertyList/Skye Luxuria City/img6.png",
    "/propertyList/Skye Luxuria City/img7.png",
    "/propertyList/Skye Luxuria City/img9.png",
    "/propertyList/Skye Luxuria City/img5.png",
    "/propertyList/Skye Luxuria City/img10.png",
    "/propertyList/Skye Luxuria City/img2.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Skye Luxuria City/img5.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Skye Luxuria City/img10.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Skye Luxuria City details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 271,
  "title": "Skye Hyde Park",
  "slug": "skye-hyde-park",
  "location": "MR 11 Road, Indore",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Villa Plots",
  "area": "2400 - 3600 sq. ft.",
  "description": "Skye Hyde Park is a super-luxury gated plotting community by Skye Earth, offering limited-edition villa and bungalow plots sized 2400 to 3600 sq. ft. Spread across 25 acres of expansive green landscapes on the main MR 11 Road, it features a 130 ft wide grand entrance plaza, a five-star clubhouse and richly landscaped social spaces. The project is designed for those seeking a distinguished, high-value residential address.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Super luxury plots sized 2400 - 3600 sq. ft.",
        "Limited edition bungalow plots",
        "Best quality 25 acre gated community development",
        "130 ft wide grand entrance plaza",
        "5 star amenities and grand club house",
        "Gem of a location on main MR 11 Road"
      ]
    }
  ],
  "sections": {
    "overview": "Super-luxury 25-acre gated villa-plotting community with 2400-3600 sq. ft. plots on MR 11 Road, Indore.",
    "amenities": [
      {
        "title": "Grand Club House with Pool",
        "img": "/propertyList/Skye Hyde Park/img7.png"
      },
      {
        "title": "Exotic Landscaped Gardens",
        "img": "/propertyList/Skye Hyde Park/img5.png"
      },
      {
        "title": "Water Features & Landscaped Greens",
        "img": "/propertyList/Skye Hyde Park/img6.png"
      },
      {
        "title": "Children's Play Area",
        "img": "/propertyList/Skye Hyde Park/img8.png"
      },
      {
        "title": "Multipurpose Court & Cricket Pitch",
        "img": "/propertyList/Skye Hyde Park/img10.png"
      },
      {
        "title": "Landscaped Sit-outs",
        "img": "/propertyList/Skye Hyde Park/img8.png"
      },
      {
        "title": "Grand Entrance Plaza",
        "img": "/propertyList/Skye Hyde Park/img3.png"
      },
      {
        "title": "Swimming Pool",
        "img": "/propertyList/Skye Hyde Park/img7.png"
      }
    ],
    "specifications": [
      "Plots sized 2400 - 3600 sq. ft.",
      "25 acre high-tech secured gated campus",
      "9 M, 10 M and 12 M wide internal roads",
      "130 ft wide grand entrance plaza",
      "Designed by India's finest architects and consultants"
    ],
    "connectivity": [
      "MR 11 Road",
      "Sheraton Hotel",
      "Skye Mayfair",
      "Skye City",
      "RE3 Road",
      "AB Bypass Road"
    ],
    "vision": [
      "An exclusive enclave destined to be desired",
      "An address wrapped in nature",
      "A social realm crafted for exclusivity"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Skye Hyde Park"
    },
    {
      "label": "Property Type",
      "value": "Villa Plots (Gated Plotting Community)"
    },
    {
      "label": "Location",
      "value": "MR 11 Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    },
    {
      "label": "Plot Sizes",
      "value": "2400 - 3600 sq. ft."
    },
    {
      "label": "RERA No.",
      "value": "P-IND-25-5663"
    },
    {
      "label": "T & CP Permission No.",
      "value": "836/SP-I-27/23"
    },
    {
      "label": "Development Permission No.",
      "value": "802/2025"
    }
  ],
  "images": [
    "/propertyList/Skye Hyde Park/img3.png",
    "/propertyList/Skye Hyde Park/img4.png",
    "/propertyList/Skye Hyde Park/img6.png",
    "/propertyList/Skye Hyde Park/img7.png",
    "/propertyList/Skye Hyde Park/img8.png",
    "/propertyList/Skye Hyde Park/img9.png",
    "/propertyList/Skye Hyde Park/img10.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Skye Hyde Park/img9.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Skye Hyde Park/img10.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Skye Hyde Park details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 272,
  "title": "Skye Mayfair",
  "slug": "skye-mayfair",
  "location": "Indore",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "",
  "description": "Skye Mayfair is a premium plotted development by Skye Earth that is gracefully evolving into an exclusive destination of premium living. As shown in the construction update, the stone-cladded architectural entrance, avenue lighting, road network, boundary walls, amphitheatre and landscaped greens have been completed, while luxury mansions are already under construction on the plots. Its nature-lined boulevards create a signature arrival experience.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Premium stone-cladded architectural entrance completed",
        "Avenue lighting and road network completed",
        "Landscaped greens and social spaces ready in final form",
        "Iconic amphitheatre and boundary wall infrastructure executed",
        "Luxury mansions already under construction"
      ]
    }
  ],
  "sections": {
    "overview": "Premium plotted development with completed infrastructure and luxury mansions under construction, Indore.",
    "amenities": [
      {
        "title": "Stone-Cladded Grand Entrance",
        "img": "/propertyList/Skye Mayfair/img3.png"
      },
      {
        "title": "Landscaped Greens & Social Spaces",
        "img": "/propertyList/Skye Mayfair/img3.png"
      },
      {
        "title": "Iconic Amphitheatre",
        "img": "/propertyList/Skye Mayfair/img5.png"
      },
      {
        "title": "Nature-Lined Boulevards",
        "img": "/propertyList/Skye Mayfair/img5.png"
      },
      {
        "title": "Avenue Lighting & Road Network",
        "img": "/propertyList/Skye Mayfair/img4.png"
      },
      {
        "title": "Architectural Entrance Elements",
        "img": "/propertyList/Skye Mayfair/img4.png"
      }
    ],
    "specifications": [
      "Premium stone-cladded entrance avenue completed",
      "Avenue lighting and road network completed",
      "Well-curated walkways and lighting infrastructure completed",
      "Boundary wall infrastructure executed",
      "Luxury mansions under construction"
    ],
    "connectivity": [],
    "vision": [
      "The vision is becoming reality",
      "Gracefully evolving into an exclusive destination of premium living"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Skye Mayfair"
    },
    {
      "label": "Property Type",
      "value": "Plot (Plotted Development)"
    },
    {
      "label": "Location",
      "value": "Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    },
    {
      "label": "Construction Status",
      "value": "Under construction - entrance, roads, lighting, amphitheatre and boundary walls completed; luxury mansions under construction"
    }
  ],
  "images": [
    "/propertyList/Skye Mayfair/img2.png",
    "/propertyList/Skye Mayfair/img3.png",
    "/propertyList/Skye Mayfair/img4.png",
    "/propertyList/Skye Mayfair/img5.png",
    "/propertyList/Skye Mayfair/img1.png"
  ],
  "floorPlan": {
    "image": "",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Skye Mayfair details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 273,
  "title": "Skye Atlantis",
  "slug": "skye-atlantis",
  "location": "Indore",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "",
  "description": "Skye Atlantis is a luxury plotted community by Skye Earth offering 7-star amenities, seven days a week. As shown in the construction update, the monumental stone-cladded entrance, grand boulevard, boulevard lighting, landscaped corridors, artistic garden sculptures and plot-partition boundary walls have been completed, while the central garden landscape with swimming pool and luxury mansions are under construction. Nature-lined boulevards create a signature grand arrival experience.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "7 star amenities, 7 days a week",
        "Monumental stone-cladded entrance taking its final form",
        "Grand boulevard experience and boulevard lighting ready",
        "Landscaped corridors and artistic garden sculptures installed",
        "Central garden landscape and swimming pool in the making",
        "Luxury mansions already under construction"
      ]
    }
  ],
  "sections": {
    "overview": "Luxury plotted community with 7-star amenities and completed boulevard infrastructure, Indore.",
    "amenities": [
      {
        "title": "Monumental Stone-Cladded Entrance",
        "img": "/propertyList/Skye Atlantis/img3.png"
      },
      {
        "title": "Grand Boulevard",
        "img": "/propertyList/Skye Atlantis/img3.png"
      },
      {
        "title": "Artistic Garden Sculptures",
        "img": "/propertyList/Skye Atlantis/img3.png"
      },
      {
        "title": "Landscaped Corridors with Boulevard Lighting",
        "img": "/propertyList/Skye Atlantis/img4.png"
      },
      {
        "title": "Central Garden Landscape & Swimming Pool",
        "img": "/propertyList/Skye Atlantis/img5.png"
      },
      {
        "title": "Clubhouse & 7-Star Amenities",
        "img": "/propertyList/Skye Atlantis/img2.png"
      }
    ],
    "specifications": [
      "Monumental entrance and stone-cladded columns completed",
      "Boulevard lighting and road network installed",
      "Landscaped corridors and artistic sculptures installed",
      "Plot partition boundary walls completed",
      "Central garden landscape and swimming pool under construction",
      "Luxury mansions under construction"
    ],
    "connectivity": [],
    "vision": [
      "7 star amenities, 7 days a week",
      "A grand boulevard arrival experience"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Skye Atlantis"
    },
    {
      "label": "Property Type",
      "value": "Plot (Luxury Plotted Community)"
    },
    {
      "label": "Location",
      "value": "Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    },
    {
      "label": "Construction Status",
      "value": "Under construction - entrance, boulevard, lighting, sculptures and boundary walls completed; central garden, pool and luxury mansions under construction"
    }
  ],
  "images": [
    "/propertyList/Skye Atlantis/img2.png",
    "/propertyList/Skye Atlantis/img3.png",
    "/propertyList/Skye Atlantis/img4.png",
    "/propertyList/Skye Atlantis/img5.png",
    "/propertyList/Skye Atlantis/img1.png"
  ],
  "floorPlan": {
    "image": "",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Skye Atlantis details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 274,
  "title": "Skye Corporate Park",
  "slug": "skye-corporate-park",
  "location": "A.B. Road, Vijay Nagar, Near Satya Sai Square, Indore",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Commercial",
  "bhk": "Showrooms & Offices",
  "area": "20' x double height showrooms; office & showroom units across 16 storeys",
  "description": "Skye Corporate Park is pitched as Indore's tallest corporate landmark, a 16-storey commercial development with signature office and retail spaces on A.B. Road, Vijay Nagar. Designed by Apurva Amin Architects, Ahmedabad, it features a contemporary glass facade, ground-floor double-height showrooms and virtually column-less office floors. The building offers a luxury double-height air-conditioned lobby, high-speed elevators and multi-level car parking.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Indore's tallest corporate landmark - 16 storey development",
        "Contemporary glass facade with iconic design",
        "250 feet frontage on A.B. Road with 3 side road access",
        "20 feet double-height showrooms with maximum spotlight on A.B. Road",
        "Virtually column-less office spaces with floor-to-ceiling glazing",
        "Luxury double-height air-conditioned lobby with reception and waiting lounge"
      ]
    }
  ],
  "sections": {
    "overview": "16-storey signature office and retail tower on A.B. Road, Vijay Nagar, Indore.",
    "amenities": [
      {
        "title": "Iconic glass facade tower",
        "img": "/propertyList/Skye Corporate Park/img5.png"
      },
      {
        "title": "Double-height retail showrooms",
        "img": "/propertyList/Skye Corporate Park/img7.png"
      },
      {
        "title": "Column-less office spaces",
        "img": "/propertyList/Skye Corporate Park/img8.png"
      },
      {
        "title": "Luxury double-height AC lobby with reception",
        "img": "/propertyList/Skye Corporate Park/img10.png"
      },
      {
        "title": "4 high-speed elevators with separate service elevator",
        "img": "/propertyList/Skye Corporate Park/img10.png"
      },
      {
        "title": "Multi-level car parking on ground and 3 basements",
        "img": "/propertyList/Skye Corporate Park/img6.png"
      },
      {
        "title": "Panoramic skyline views",
        "img": "/propertyList/Skye Corporate Park/img11.png"
      },
      {
        "title": "Landscaped environs",
        "img": "/propertyList/Skye Corporate Park/img9.png"
      }
    ],
    "specifications": [
      "Interior walls plastered, putty and finished with interior grade paint",
      "Floors leveled with vitrified tiles",
      "External glazing / floor-to-ceiling glass facade",
      "Easy flush doors for offices and rolling shutters for units",
      "Ceramic tiles and sanitary fittings in all bathrooms",
      "ISI marked insulated wiring, switches and DP box for electricity supply",
      "Beam-less construction for maximum clear height; virtually column-less design",
      "High-tech security with gated entry and CCTV monitoring",
      "Round-the-clock power backup for all common facilities",
      "Advanced fire fighting system",
      "Vasu compliant spaces"
    ],
    "connectivity": [
      "Mangal City Mall - 1.3 kms",
      "C21 Mall - 2 kms",
      "Malhar Mall - 2 kms",
      "Orbit Mall - 2 kms",
      "Marriott Hotel - 1.8 kms",
      "Sayaji Hotel - 1.7 kms",
      "Radisson Hotel - 1.7 kms",
      "Brilliant Convention Centre - 2 kms",
      "Bombay Hospital - 1.2 kms",
      "Apollo Hospital - 1.7 kms",
      "Medanta Hospital - 1.7 kms",
      "Airport - 10 kms",
      "Railway Station - 6 kms",
      "Super (IT) Corridor - 7 kms",
      "Indore Byepass - 3.8 kms"
    ],
    "vision": [
      "To create Indore's first iconic-design corporate building and a landmark for its skyline",
      "To let businesses focus on growth while world-class facility management handles the rest"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Skye Corporate Park"
    },
    {
      "label": "Property Type",
      "value": "Commercial (Showrooms & Offices)"
    },
    {
      "label": "Location",
      "value": "A.B. Road, Vijay Nagar, Near Satya Sai Square, Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-17-557"
    },
    {
      "label": "Configurations",
      "value": "Ground & first floor showrooms, typical-floor offices"
    },
    {
      "label": "Towers",
      "value": "16 storey development"
    },
    {
      "label": "Architect",
      "value": "Apurva Amin Architects, Ahmedabad"
    }
  ],
  "images": [
    "/propertyList/Skye Corporate Park/img5.png",
    "/propertyList/Skye Corporate Park/img6.png",
    "/propertyList/Skye Corporate Park/img3.png",
    "/propertyList/Skye Corporate Park/img7.png",
    "/propertyList/Skye Corporate Park/img10.png",
    "/propertyList/Skye Corporate Park/img8.png",
    "/propertyList/Skye Corporate Park/img9.png",
    "/propertyList/Skye Corporate Park/img11.png",
    "/propertyList/Skye Corporate Park/img13.png",
    "/propertyList/Skye Corporate Park/img14.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Skye Corporate Park/img13.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Skye Corporate Park/img12.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Skye Corporate Park details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 275,
  "title": "Skye Greens",
  "slug": "skye-greens",
  "location": "Talawli Main Road, off A.B. Road, Indore",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "900 sq.ft (20' x 45'), 1000 sq.ft (20' x 50') & 1100 sq.ft (20' x 55')",
  "description": "Skye Greens is a residential plotting scheme laid out across zones A to F with internal 9 M and 12 M wide roads. Plots are offered in three sizes - 20' x 45' (900 sq.ft), 20' x 50' (1000 sq.ft) and 20' x 55' (1100 sq.ft). The layout is interspersed with landscaped gardens, pathways and a services area, positioned along Talawli Main Road with access to A.B. Road (Old) and the A.B. Road Byepass.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Gated residential plotting scheme across six zones (A-F)",
        "Plot sizes of 900, 1000 and 1100 sq.ft",
        "Internal 9 M and 12 M wide roads",
        "Multiple landscaped gardens and pathways",
        "Located along Talawli Main Road with A.B. Road connectivity"
      ]
    }
  ],
  "sections": {
    "overview": "Residential plotting scheme with 900-1100 sq.ft plots along Talawli Main Road, Indore.",
    "amenities": [
      {
        "title": "Landscaped gardens",
        "img": "/propertyList/Skye Greens/img1.png"
      },
      {
        "title": "Internal 9 M & 12 M wide roads",
        "img": "/propertyList/Skye Greens/img1.png"
      },
      {
        "title": "Landscaped pathways",
        "img": "/propertyList/Skye Greens/img1.png"
      },
      {
        "title": "Dedicated services area",
        "img": "/propertyList/Skye Greens/img1.png"
      }
    ],
    "specifications": [
      "Plot dimensions: 20' x 45' (900 sq.ft), 20' x 50' (1000 sq.ft) and 20' x 55' (1100 sq.ft)",
      "Internal roads of 9 M and 12 M width",
      "Provision for gardens, pathways and services area"
    ],
    "connectivity": [
      "Talawli Main Road",
      "A.B. Road (Old)",
      "A.B. Road (Byepass)"
    ],
    "vision": [
      "To offer well-planned, green residential plots within organised zones"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Skye Greens"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Talawli Main Road, off A.B. Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    },
    {
      "label": "Plot Sizes",
      "value": "900, 1000 & 1100 sq.ft"
    }
  ],
  "images": [
    "/propertyList/Skye Greens/img1.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Skye Greens/img1.png",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Skye Greens details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 276,
  "title": "Skye City",
  "slug": "skye-city",
  "location": "Near Balyakheda, Indore",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "area": "",
  "description": "Skye City is a large integrated residential township master plan spread across multiple zones (A to G) with an organised grid of internal roads. The layout includes numerous residential plots, landscaped gardens and community facilities such as the Skye Shopping Plaza, a club house, a swimming pool with change rooms and a multipurpose court. It is planned off a proposed 75 M wide road with connectivity towards Balyakheda.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Large integrated township with multiple residential zones",
        "Skye Shopping Plaza within the township",
        "Club house with swimming pool and change rooms",
        "Multipurpose court and multiple landscaped gardens",
        "Planned along a proposed 75 M wide road"
      ]
    }
  ],
  "sections": {
    "overview": "Integrated plotted township with shopping plaza and club house near Balyakheda, Indore.",
    "amenities": [
      {
        "title": "Skye Shopping Plaza",
        "img": "/propertyList/Skye City/img1.png"
      },
      {
        "title": "Club house",
        "img": "/propertyList/Skye City/img1.png"
      },
      {
        "title": "Swimming pool with change room",
        "img": "/propertyList/Skye City/img1.png"
      },
      {
        "title": "Multipurpose court",
        "img": "/propertyList/Skye City/img1.png"
      },
      {
        "title": "Landscaped gardens",
        "img": "/propertyList/Skye City/img1.png"
      },
      {
        "title": "Internal 8 M, 9 M & 12 M wide roads",
        "img": "/propertyList/Skye City/img1.png"
      }
    ],
    "specifications": [
      "Multiple residential zones with plotted development",
      "Internal roads of 8 M, 9 M and 12 M width",
      "Provision for shopping plaza, club house, swimming pool and gardens"
    ],
    "connectivity": [
      "Proposed 75 M wide road",
      "Road towards Balyakheda"
    ],
    "vision": [
      "To develop a self-contained plotted township with integrated retail and recreation"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Skye City"
    },
    {
      "label": "Property Type",
      "value": "Township (Plots)"
    },
    {
      "label": "Location",
      "value": "Near Balyakheda, Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    }
  ],
  "images": [
    "/propertyList/Skye City/img1.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Skye City/img1.png",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Skye City details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 277,
  "title": "Skye Florence",
  "slug": "skye-florence-by-skye-earth",
  "location": "Off A.B. Bypass Road, Near Skye Luxuria, Indore",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots for Bungalows",
  "area": "",
  "description": "Skye Florence is a limited-edition gated community of residential plots for bungalows, presented as a modern, low-density enclave in an evolving Indore neighbourhood. The layout is organised into zones (AA, A, B, C and D) served by 9 M and 12 M wide roads, with landscaped gardens, a pool and a multipurpose lawn at its core. Residents are served by a contemporary club house, swimming pool, gym and children's play areas.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Limited-edition plots for bungalows in a gated community",
        "Modern club house with gym and swimming pool",
        "Central pool, multipurpose lawn and landscaped gardens",
        "Children's play area / kids play area",
        "Organised zones with 9 M and 12 M wide roads",
        "Landmark location off A.B. Bypass Road"
      ]
    }
  ],
  "sections": {
    "overview": "Limited-edition gated plots for bungalows with club house and pool, off A.B. Bypass Road, Indore.",
    "amenities": [
      {
        "title": "Grand landscaped entrance",
        "img": "/propertyList/Florence by Skye/img2.png"
      },
      {
        "title": "Club house",
        "img": "/propertyList/Florence by Skye/img3.png"
      },
      {
        "title": "Swimming pool",
        "img": "/propertyList/Florence by Skye/img8.png"
      },
      {
        "title": "Gymnasium",
        "img": "/propertyList/Florence by Skye/img8.png"
      },
      {
        "title": "Kids play area",
        "img": "/propertyList/Florence by Skye/img7.png"
      },
      {
        "title": "Multipurpose lawn & gardens",
        "img": "/propertyList/Florence by Skye/img4.png"
      },
      {
        "title": "Landscaped avenues with water features",
        "img": "/propertyList/Florence by Skye/img5.png"
      }
    ],
    "specifications": [
      "Plotted development organised into zones (AA, A, B, C, D)",
      "Internal 9 M and 12 M wide roads",
      "Central pool, multipurpose lawn and gardens",
      "Landscaped entrance avenue with water features"
    ],
    "connectivity": [
      "A.B. Bypass Road",
      "MR 11 Road",
      "Decathlon",
      "Golden Leaves Resort",
      "Sheraton Hotel",
      "Gems Public School",
      "DPS School",
      "Skye Luxuria",
      "Skye City"
    ],
    "vision": [
      "A compelling modern design to lead the next chapter in living",
      "An experience delivered through countless details with masterful perfection"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Florence (Skye Florence)"
    },
    {
      "label": "Property Type",
      "value": "Plot (for Bungalows)"
    },
    {
      "label": "Location",
      "value": "Off A.B. Bypass Road, Near Skye Luxuria, Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    },
    {
      "label": "T & CP Permission No.",
      "value": "INDLP060422187"
    },
    {
      "label": "Development Permission No.",
      "value": "No/4947/2022"
    }
  ],
  "images": [
    "/propertyList/Florence by Skye/img2.png",
    "/propertyList/Florence by Skye/img3.png",
    "/propertyList/Florence by Skye/img8.png",
    "/propertyList/Florence by Skye/img7.png",
    "/propertyList/Florence by Skye/img5.png",
    "/propertyList/Florence by Skye/img9.png",
    "/propertyList/Florence by Skye/img4.png"
  ],
  "floorPlan": {
    "image": "/propertyList/Florence by Skye/img4.png",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Florence by Skye/img9.png",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer name is taken from the uploaded project folder and brochure."
  },
  "disclaimer": "Florence details are prepared only from uploaded brochure images. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 278,
  "title": "Sahil Metropolitan",
  "slug": "sahil-metropolitan",
  "location": "Super Corridor, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Commercial",
  "bhk": "Showrooms, Shops & Offices",
  "description": "Sahil Metropolitan is a commercial development on Indore's Super Corridor with double-height shops and mezzanines on the lower levels and seven floors of office suites above, planned around twin lobbies, four lifts and a two-level basement/podium parking ramp.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "14 ground-floor shops of about 1,573-1,590 sq.ft. super built-up area",
        "Mezzanine level above every shop, adding roughly 512-519 sq.ft. per unit",
        "Combined shop + mezzanine area of approximately 2,085-2,109 sq.ft.",
        "Seven upper floors planned as office suites with service balconies",
        "Two lobbies served by four lifts",
        "Ramped basement and podium parking with cul-de-sac drop-off",
        "Located on the Super Corridor, Indore's principal business spine"
      ]
    }
  ],
  "sections": {
    "overview": "Sahil Metropolitan by Sahil Group",
    "amenities": [
      {
        "title": "Ground Floor Plan",
        "img": "/propertyList/Sahil Metropolitan/img1.jpg"
      },
      {
        "title": "Mezzanine Floor Plan",
        "img": "/propertyList/Sahil Metropolitan/img2.jpg"
      },
      {
        "title": "Office Floor Plan",
        "img": "/propertyList/Sahil Metropolitan/img4.jpg"
      }
    ],
    "specifications": [
      "Ground floor retail with mezzanine",
      "Offices on first to seventh floors",
      "Toilet and pantry provided with each mezzanine unit",
      "Two lobbies with four lifts",
      "Basement and podium level parking",
      "Landscaped planters along the frontage",
      "Architecture by Rohit Dinkar Architects"
    ],
    "connectivity": [
      "Located on Super Corridor, Indore",
      "Close to the IT/SEZ office belt",
      "Direct connectivity towards Airport Road and MR-10"
    ],
    "vision": [
      "Retail frontage",
      "Office floors",
      "Podium parking",
      "Landscaped forecourt"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Sahil Metropolitan"
    },
    {
      "label": "Property Type",
      "value": "Commercial"
    },
    {
      "label": "Location",
      "value": "Super Corridor, Indore"
    },
    {
      "label": "Developer",
      "value": "Sahil Group"
    },
    {
      "label": "Configuration",
      "value": "Shops with mezzanine and office floors"
    },
    {
      "label": "Architect",
      "value": "Rohit Dinkar Architects"
    }
  ],
  "images": [
    "/propertyList/Sahil Metropolitan/img1.jpg",
    "/propertyList/Sahil Metropolitan/img2.jpg",
    "/propertyList/Sahil Metropolitan/img3.jpg",
    "/propertyList/Sahil Metropolitan/img4.jpg",
    "/propertyList/Sahil Metropolitan/img5.jpg",
    "/propertyList/Sahil Metropolitan/img6.jpg",
    "/propertyList/Sahil Metropolitan/img7.jpg",
    "/propertyList/Sahil Metropolitan/img8.jpg",
    "/propertyList/Sahil Metropolitan/img9.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Sahil Metropolitan/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Sahil Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 279,
  "title": "Sahil Grand",
  "slug": "sahil-grand",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "4 BHK",
  "description": "Sahil Grand is a fully integrated, high-rise gated community spread over about 55,000 sq.ft., with 13-floor towers holding luxurious 4 BHK apartments, duplexes and showrooms. Only four flats share each floor, and every home is planned three to four sides open with no shared walls.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Gated high-rise community set on about 55,000 sq.ft.",
        "13-floor towers of 4 BHK flats, duplexes and showrooms",
        "Only 4 flats on every floor, with no wall sharing between flats",
        "11 feet floor height and 3-4 sides open planning",
        "4 high-speed elevators plus a dedicated service elevator with Auto Rescue Device",
        "4-tier integrated safety and security system",
        "Servant's room with every 4 BHK apartment",
        "Piped gas connection to each home"
      ]
    }
  ],
  "sections": {
    "overview": "Sahil Grand by Sahil Group",
    "amenities": [
      {
        "title": "Swimming Pool",
        "img": "/propertyList/Sahil Grand/img8.jpg"
      },
      {
        "title": "Gymnasium",
        "img": "/propertyList/Sahil Grand/img9.jpg"
      },
      {
        "title": "Community Hall",
        "img": "/propertyList/Sahil Grand/img10.jpg"
      },
      {
        "title": "Typical Floor Plan",
        "img": "/propertyList/Sahil Grand/img12.jpg"
      }
    ],
    "specifications": [
      "Contemporary high-rise bungalow-style apartments",
      "Spacious apartments with 11 feet height",
      "4-tier advanced and integrated safety and security system",
      "Piped gas connection",
      "Luxurious 4 BHK apartments with servant's room",
      "High-speed elevators including service elevator with Auto Rescue Device (ARD)",
      "Multi-level car parking with separate visitors' parking",
      "Washroom facility at lobby level",
      "Eco-friendly rainwater harvesting system",
      "24 hour common area power back-up",
      "Basement car park for residents",
      "Garbage chute"
    ],
    "connectivity": [
      "Kokilaben Hospital - 0.6 km",
      "The Park - 0.8 km",
      "Indore Bypass - 0.5 km",
      "Advanced Academy - 0.6 km",
      "Shishukunj School - 2.70 km",
      "Radisson Hotel - 2 km",
      "Fairfield by Marriott - 2 km",
      "Bombay Hospital - 2.5 km",
      "Satya Sai School - 3.15 km",
      "Railway station - 9 km",
      "Airport - 19 km"
    ],
    "vision": [
      "Swimming pool",
      "Gym",
      "Community hall",
      "Landscaped sit-outs",
      "Children's play area"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Sahil Grand"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Sahil Group"
    },
    {
      "label": "Configuration",
      "value": "4 BHK flats, duplexes and showrooms"
    },
    {
      "label": "Land Area",
      "value": "Approx. 55,000 sq.ft."
    },
    {
      "label": "Floors",
      "value": "13"
    }
  ],
  "images": [
    "/propertyList/Sahil Grand/img1.jpg",
    "/propertyList/Sahil Grand/img2.jpg",
    "/propertyList/Sahil Grand/img3.jpg",
    "/propertyList/Sahil Grand/img4.jpg",
    "/propertyList/Sahil Grand/img6.jpg",
    "/propertyList/Sahil Grand/img7.jpg",
    "/propertyList/Sahil Grand/img8.jpg",
    "/propertyList/Sahil Grand/img9.jpg",
    "/propertyList/Sahil Grand/img10.jpg",
    "/propertyList/Sahil Grand/img11.jpg",
    "/propertyList/Sahil Grand/img13.jpg",
    "/propertyList/Sahil Grand/img14.jpg",
    "/propertyList/Sahil Grand/img15.jpg",
    "/propertyList/Sahil Grand/img16.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Sahil Grand/img12.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Sahil Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 280,
  "title": "Sahil Shangrilla",
  "slug": "sahil-shangrilla",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Sahil Shangrilla is a sanctioned plotting scheme by Sahil Group with residential and commercial plots arranged along a grid of 9 metre wide internal roads.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Approved sale plan with residential and commercial plots",
        "Commercial plots of about 10.67 x 24.43 m and 12.20 x 25.63 m average",
        "9 metre wide internal road network throughout the scheme",
        "Clearly demarcated plot numbering across the layout"
      ]
    }
  ],
  "sections": {
    "overview": "Sahil Shangrilla by Sahil Group",
    "amenities": [
      {
        "title": "Sanctioned Sale Plan",
        "img": "/propertyList/Sahil Shangrilla/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotting layout",
      "9 metre wide internal roads",
      "Residential and commercial plot mix",
      "Open and service areas as per the sale plan"
    ],
    "connectivity": [
      "Sale plan layout as sanctioned; contact the sales team for the exact site location"
    ],
    "vision": [
      "Plotted layout",
      "Wide internal roads",
      "Commercial frontage plots"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Sahil Shangrilla"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Sahil Group"
    },
    {
      "label": "Configuration",
      "value": "Residential and commercial plots"
    }
  ],
  "images": [
    "/propertyList/Sahil Shangrilla/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Sahil Shangrilla/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Sahil Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 281,
  "title": "Sahil Elegant",
  "slug": "sahil-elegant",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "4 & 5 BHK",
  "description": "Sahil Elegant is an ultra-premium high-rise rising to 22 floors from a 3-level podium, with double-height showrooms at ground level and an 18 feet high podium amenities deck. From the 7th floor upward, 16 residential levels each hold four homes: two single-height residences of 4,350 sq.ft. and two corner duplexes of 5,600 and 5,800 sq.ft.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "22-floor tower rising from a 3-level podium",
        "16 residential levels starting from the 7th floor, 4 homes per floor",
        "Single-height residences of about 4,350 sq.ft.",
        "Corner duplex homes of about 5,600 and 5,800 sq.ft.",
        "18 feet high podium amenities floor",
        "Double-height showrooms on the ground floor",
        "Corner duplexes three sides open with complete privacy",
        "3-level podium parking for residents and visitors"
      ]
    }
  ],
  "sections": {
    "overview": "Sahil Elegant by Sahil Group",
    "amenities": [
      {
        "title": "Podium Amenities",
        "img": "/propertyList/Sahil Elegant/img5.jpg"
      },
      {
        "title": "Swimming Pool",
        "img": "/propertyList/Sahil Elegant/img7.jpg"
      },
      {
        "title": "Fine Dining Deck",
        "img": "/propertyList/Sahil Elegant/img8.jpg"
      },
      {
        "title": "Wellness Zone",
        "img": "/propertyList/Sahil Elegant/img10.jpg"
      },
      {
        "title": "Duplex Floor Plan",
        "img": "/propertyList/Sahil Elegant/img12.jpg"
      }
    ],
    "specifications": [
      "Iconic high-rise design with duplex and single-height apartments",
      "18 ft. high podium floor with resort-style amenities",
      "Double-height showrooms at ground floor",
      "3-level podium parking for residents and visitors",
      "High-speed elevators including service elevators with Auto Rescue Device (ARD)",
      "Multi-level covered car parking with separate visitor parking",
      "Integrated high-end gated community"
    ],
    "connectivity": [
      "Contact the sales team for the detailed site connectivity sheet"
    ],
    "vision": [
      "Vertical green wall",
      "Swimming pool and jacuzzi",
      "Poolside cafe",
      "Multipurpose lawn",
      "Yoga and meditation centre",
      "Jogging track",
      "Barbeque lounge",
      "Skating rink"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Sahil Elegant"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Sahil Group"
    },
    {
      "label": "Configuration",
      "value": "4,350 sq.ft. flats and 5,600 / 5,800 sq.ft. duplexes"
    },
    {
      "label": "Floors",
      "value": "22"
    },
    {
      "label": "Homes Per Floor",
      "value": "4"
    }
  ],
  "images": [
    "/propertyList/Sahil Elegant/img1.jpg",
    "/propertyList/Sahil Elegant/img2.jpg",
    "/propertyList/Sahil Elegant/img4.jpg",
    "/propertyList/Sahil Elegant/img5.jpg",
    "/propertyList/Sahil Elegant/img7.jpg",
    "/propertyList/Sahil Elegant/img8.jpg",
    "/propertyList/Sahil Elegant/img10.jpg",
    "/propertyList/Sahil Elegant/img11.jpg",
    "/propertyList/Sahil Elegant/img13.jpg",
    "/propertyList/Sahil Elegant/img14.jpg",
    "/propertyList/Sahil Elegant/img16.jpg",
    "/propertyList/Sahil Elegant/img17.jpg",
    "/propertyList/Sahil Elegant/img19.jpg",
    "/propertyList/Sahil Elegant/img20.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Sahil Elegant/img12.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Sahil Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 282,
  "title": "Sahil Indranchal Homes",
  "slug": "sahil-indranchal-homes",
  "location": "MR-12, A.B. Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Sahil Indranchal Homes is a plotted colony on the MR-12 corridor off the 60 metre wide A.B. Road, planned with 9 metre wide internal roads, open areas, an STP and commercial plots along the main road frontage. Phase II - Indranchal Homes-II - extends the same layout.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Located on MR-12 off the 60.0 m wide A.B. Road, between Indore city and Dewas",
        "9 metre wide internal roads across the colony",
        "Commercial plots along the main road frontage",
        "Typical plot modules of 6.10 x 12.20 m, 6.10 x 15.24 m and 4.57 x 12.20 m",
        "Dedicated open areas and STP within the layout",
        "Phase II (Indranchal Homes-II) sanctioned as an extension of the scheme"
      ]
    }
  ],
  "sections": {
    "overview": "Sahil Indranchal Homes by Sahil Group",
    "amenities": [
      {
        "title": "MR-12 Sale Plan",
        "img": "/propertyList/Sahil Indranchal Homes/img1.jpg"
      },
      {
        "title": "Indranchal Homes-II Layout",
        "img": "/propertyList/Sahil Indranchal Homes/img2.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotting layout with area under road widening marked",
      "9 metre wide internal roads",
      "Commercial plots on the A.B. Road frontage",
      "Open areas and green pockets",
      "Sewage treatment plant provision",
      "Overhead tank / service area within the colony"
    ],
    "connectivity": [
      "On the 60 m wide A.B. Road corridor",
      "Towards Dewas on one side and Indore city on the other",
      "Direct approach from MR-12"
    ],
    "vision": [
      "Plotted layout",
      "Commercial frontage",
      "Open areas",
      "Wide internal roads"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Sahil Indranchal Homes"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "MR-12, A.B. Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Sahil Group"
    },
    {
      "label": "Configuration",
      "value": "Residential and commercial plots"
    },
    {
      "label": "Phases",
      "value": "Phase I and Phase II"
    }
  ],
  "images": [
    "/propertyList/Sahil Indranchal Homes/img1.jpg",
    "/propertyList/Sahil Indranchal Homes/img2.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Sahil Indranchal Homes/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Sahil Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 283,
  "title": "DRK The Crest",
  "slug": "drk-the-crest",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "3 BHK",
  "description": "DRK The Crest is a high-rise residential development planned as multiple towers over a ground level and podium parking deck. Tower B and C hold 3 BHK homes of about 1,660 sq.ft. built-up (2,400 sq.ft. super built-up) with two master bedrooms, a utility and generous balconies.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "High-rise towers over a ground floor and podium parking deck",
        "3 BHK Type 1 homes of about 1,660 sq.ft. built-up area",
        "Super built-up area of about 2,400 sq.ft. per home",
        "Two master bedrooms with attached dressing and toilets",
        "Wide living/dining with 1,000 mm and 1,200 mm deep balconies",
        "Separate utility and drying space with each home",
        "Landscaped ground level with tree-lined driveway"
      ]
    }
  ],
  "sections": {
    "overview": "DRK The Crest by Sahil Group",
    "amenities": [
      {
        "title": "Ground Floor Plan",
        "img": "/propertyList/DRK Crest/img1.jpg"
      },
      {
        "title": "Podium Floor Plan",
        "img": "/propertyList/DRK Crest/img2.jpg"
      },
      {
        "title": "Typical Floor Plan",
        "img": "/propertyList/DRK Crest/img3.jpg"
      },
      {
        "title": "3 BHK Unit Plan",
        "img": "/propertyList/DRK Crest/img5.jpg"
      }
    ],
    "specifications": [
      "Ground floor plus podium level parking",
      "Typical residential floors above the podium",
      "3 BHK layouts in Towers B and C",
      "Chowk-facing kitchen with utility",
      "Designed by UDS Architects LLP"
    ],
    "connectivity": [
      "Contact the sales team for the detailed site connectivity sheet"
    ],
    "vision": [
      "Tower elevation",
      "Podium deck",
      "Landscaped entrance",
      "Site progress"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "DRK The Crest"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Sahil Group"
    },
    {
      "label": "Configuration",
      "value": "3 BHK"
    },
    {
      "label": "Built-up Area",
      "value": "Approx. 1,660 sq.ft."
    },
    {
      "label": "Super Built-up Area",
      "value": "Approx. 2,400 sq.ft."
    },
    {
      "label": "Architect",
      "value": "UDS Architects LLP"
    }
  ],
  "images": [
    "/propertyList/DRK Crest/img1.jpg",
    "/propertyList/DRK Crest/img2.jpg",
    "/propertyList/DRK Crest/img3.jpg",
    "/propertyList/DRK Crest/img4.jpg",
    "/propertyList/DRK Crest/img5.jpg",
    "/propertyList/DRK Crest/img6.jpg",
    "/propertyList/DRK Crest/img7.jpg",
    "/propertyList/DRK Crest/img8.jpg",
    "/propertyList/DRK Crest/img9.jpg",
    "/propertyList/DRK Crest/img10.jpg",
    "/propertyList/DRK Crest/img11.jpg",
    "/propertyList/DRK Crest/img12.jpg",
    "/propertyList/DRK Crest/img13.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/DRK Crest/img5.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Sahil Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 284,
  "title": "Akashneem Palms",
  "slug": "akashneem-palms",
  "location": "Nawda Panth, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Akashneem Palms by Airen Group is a themed plotted township at Nawda Panth, Indore, planned around a series of landscaped gardens - Roman isle, butterfly, meditation, herbs, blossom and mounds gardens - along with a cricket pitch, multi-purpose turf, mini golf and party lawn.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered project - P-IND-24-4494",
        "Themed garden landscape across the township",
        "Cricket pitch and multi-purpose turf",
        "Mini golf and party lawn",
        "Dedicated kids' play area",
        "On-site temple within the campus",
        "Well connected to Super Corridor and the proposed 75 m and 45 m roads",
        "Close to the AKVN Economic Corridor including IT Park, start-ups, hotel and stock exchange"
      ]
    }
  ],
  "sections": {
    "overview": "Akashneem Palms by Airen Group",
    "amenities": [
      {
        "title": "Grand Entrance",
        "img": "/propertyList/Akashneem Palms/img2.jpg"
      },
      {
        "title": "Kids Play Area",
        "img": "/propertyList/Akashneem Palms/img4.jpg"
      },
      {
        "title": "Meditation Garden",
        "img": "/propertyList/Akashneem Palms/img5.jpg"
      },
      {
        "title": "Multi-purpose Turf",
        "img": "/propertyList/Akashneem Palms/img6.jpg"
      },
      {
        "title": "Butterfly Garden",
        "img": "/propertyList/Akashneem Palms/img8.jpg"
      },
      {
        "title": "Mounds Garden",
        "img": "/propertyList/Akashneem Palms/img9.jpg"
      }
    ],
    "specifications": [
      "Gated plotted township with grand entrance gate",
      "Roman isle garden, trellis garden, butterfly garden and meditation garden",
      "Herbs garden, blossom garden and mounds garden",
      "Cricket pitch and multi-purpose turf",
      "Mini golf and party lawn",
      "Kids' play area",
      "Temple within the campus"
    ],
    "connectivity": [
      "Devi Ahilya Bai Holkar Airport - 10 min",
      "Metro Station - 10 min",
      "St. Mary Champion School - 5 min",
      "Vidhyanjali International - 8 min",
      "Omni School - 8 min",
      "Sri Aurobindo Hospital - 25 min",
      "M.Y. Hospital - 30 min",
      "Choithram Netralaya - 5 min",
      "Bijasan Mata Mandir - 10-12 min",
      "Well connected to Super Corridor"
    ],
    "vision": [
      "Aerial view",
      "Kids play area",
      "Meditation garden",
      "Butterfly garden",
      "Mounds garden",
      "Multi-purpose turf"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Akashneem Palms"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Nawda Panth, Indore"
    },
    {
      "label": "Developer",
      "value": "Airen Group"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-24-4494"
    },
    {
      "label": "Website",
      "value": "www.airengroup.in"
    }
  ],
  "images": [
    "/propertyList/Akashneem Palms/img1.jpg",
    "/propertyList/Akashneem Palms/img2.jpg",
    "/propertyList/Akashneem Palms/img3.jpg",
    "/propertyList/Akashneem Palms/img4.jpg",
    "/propertyList/Akashneem Palms/img5.jpg",
    "/propertyList/Akashneem Palms/img6.jpg",
    "/propertyList/Akashneem Palms/img7.jpg",
    "/propertyList/Akashneem Palms/img8.jpg",
    "/propertyList/Akashneem Palms/img9.jpg",
    "/propertyList/Akashneem Palms/img10.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Akashneem Palms/img3.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Airen Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 285,
  "title": "Akashneem Vara",
  "slug": "akashneem-vara",
  "location": "Mhow-Indore Highway, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Akashneem Vara is an exclusive residential plotting project by Airen Group with an upscale clubhouse, a grand entrance gate, an on-site temple, underground electrification, kids' play areas and multipurpose courts set within a covered, secure campus.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Exclusive clubhouse with gymnasium, VIP lounge, indoor games, banquet hall and party lawn",
        "Grand entrance gate to the township",
        "On-site temple as a spiritual sanctuary",
        "Underground electrification across the campus",
        "Underground and overhead water tanks (UGT/OHT)",
        "Sewage treatment plant (STP) within the project",
        "Kids' play area and multipurpose court",
        "Aromatic plant garden and durable paved pathways"
      ]
    }
  ],
  "sections": {
    "overview": "Akashneem Vara by Airen Group",
    "amenities": [
      {
        "title": "Club House",
        "img": "/propertyList/Akashneem Vara/img3.jpg"
      },
      {
        "title": "Landscape & Amenities",
        "img": "/propertyList/Akashneem Vara/img4.jpg"
      },
      {
        "title": "Master Layout Plan",
        "img": "/propertyList/Akashneem Vara/img6.jpg"
      }
    ],
    "specifications": [
      "Club house with gymnasium, VIP lounge, indoor games, banquet hall and party lawn",
      "Grand entrance gate",
      "Temple within the campus",
      "Underground electrification",
      "Underground and overhead water tanks",
      "Sewage treatment plant",
      "Kids play area and multipurpose court",
      "Aromatic plant garden",
      "Durable paved pathways",
      "Covered and secure campus",
      "Internal roads of 9.00 m, 12 m and 13.50 m width"
    ],
    "connectivity": [
      "On the Mhow-Indore Highway / Mumbai-Agra Road corridor",
      "Close to Medi-Caps University",
      "Near Vikram Mall and Ekayanaa School",
      "Close to Rau Circle and Mhow Toll Plaza",
      "Near IIM Indore",
      "Close to Fundore Entertainment Park and Simcha Island"
    ],
    "vision": [
      "Club house",
      "Party lawn",
      "Kids play area",
      "Multipurpose court",
      "Temple"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Akashneem Vara"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Mhow-Indore Highway, Indore"
    },
    {
      "label": "Developer",
      "value": "Airen Group"
    },
    {
      "label": "Configuration",
      "value": "Residential plots"
    }
  ],
  "images": [
    "/propertyList/Akashneem Vara/img1.jpg",
    "/propertyList/Akashneem Vara/img2.jpg",
    "/propertyList/Akashneem Vara/img3.jpg",
    "/propertyList/Akashneem Vara/img4.jpg",
    "/propertyList/Akashneem Vara/img5.jpg",
    "/propertyList/Akashneem Vara/img6.jpg",
    "/propertyList/Akashneem Vara/img7.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Akashneem Vara/img6.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Airen Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 286,
  "title": "Keshav Park",
  "slug": "keshav-park",
  "location": "Indore-Mhow Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Keshav Park is a plotted development by Airen Group planned in phases (Keshav Park, Keshav Park-2 and Keshav Park-3) alongside Vikram Mall on the Indore-Mhow road, with a multipurpose turf, pickleball court, gazebos, lawns and landscaped pathways.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Three phases - Keshav Park, Keshav Park-2 and Keshav Park-3",
        "Multipurpose turf and pickleball court",
        "Gazebos and landscaped lawns within the layout",
        "10 ft and 5 ft wide internal pathways",
        "9 m and 7.5 m wide internal roads",
        "Plot sizes from 12' x 35' up to 23' x 50' and 22' x 61'8\" average",
        "Located next to Vikram Mall on the Indore-Mhow road"
      ]
    }
  ],
  "sections": {
    "overview": "Keshav Park by Airen Group",
    "amenities": [
      {
        "title": "Sanctioned Layout Plan",
        "img": "/propertyList/Keshav Park/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotting layout in phases",
      "Multipurpose turf and pickleball court",
      "Gazebos and lawn areas",
      "10 ft and 5 ft wide pathways",
      "9 m and 7.5 m wide internal roads",
      "Open areas within the layout"
    ],
    "connectivity": [
      "On the Indore-Mhow road",
      "Adjacent to Vikram Mall",
      "Towards Indore on one side and Mhow on the other"
    ],
    "vision": [
      "Multipurpose turf",
      "Pickleball court",
      "Gazebo lawns",
      "Landscaped pathways"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Keshav Park"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Indore-Mhow Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Airen Group"
    },
    {
      "label": "Configuration",
      "value": "Residential plots"
    },
    {
      "label": "Phases",
      "value": "Keshav Park, Keshav Park-2, Keshav Park-3"
    }
  ],
  "images": [
    "/propertyList/Keshav Park/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Keshav Park/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Airen Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 287,
  "title": "Exotica Elite",
  "slug": "exotica-elite",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Exotica Elite is a compact plotted colony by M Chug Group of about 135 residential plots plus shop-cum-residential units, laid out along a proposed 30 metre wide road with 18 m and 12 m wide approach roads and two landscaped green spines.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "About 135 residential plots plus six shop-cum-residential units (SR1-SR6)",
        "Frontage on a proposed 30.0 m wide road",
        "18.0 m and 12.0 m wide approach roads along the side",
        "Two landscaped green spines running through the layout",
        "Single-plot sizes of 24' x 60', 25' x 60' and 30' x 60'",
        "Plot areas listed from about 1,440 sq.ft. upward in the area statement"
      ]
    }
  ],
  "sections": {
    "overview": "Exotica Elite by M Chug Group",
    "amenities": [
      {
        "title": "Sanctioned Layout Plan",
        "img": "/propertyList/Exotica Elite/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotting layout with area statement",
      "Shop-cum-residential plots along the main road",
      "Landscaped green spines within the colony",
      "Proposed 30 m, 18 m and 12 m wide roads around the site"
    ],
    "connectivity": [
      "Frontage on a proposed 30 m wide road with 18 m and 12 m wide roads alongside"
    ],
    "vision": [
      "Plotted layout",
      "Green spine",
      "Shop-cum-residential frontage"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Exotica Elite"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "M Chug Group"
    },
    {
      "label": "Configuration",
      "value": "Residential plots and shop-cum-residential units"
    }
  ],
  "images": [
    "/propertyList/Exotica Elite/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Exotica Elite/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "M Chug Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 288,
  "title": "Exotica Woods",
  "slug": "exotica-woods",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Exotica Woods is a gated plotted township by M Chug Group fronting a proposed 30 metre wide road, with a sculptural entrance gate, a glass-fronted contemporary clubhouse and a landscaped green belt running the length of the layout.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Sculptural entrance gate with fin-wall architecture",
        "Contemporary glass-fronted clubhouse with pool deck",
        "Frontage on a proposed 30.0 m wide road",
        "Landscaped green belt along the plotted grid",
        "Compound wall to the full perimeter",
        "Plot schedule with sizes and areas printed on the master layout"
      ]
    }
  ],
  "sections": {
    "overview": "Exotica Woods by M Chug Group",
    "amenities": [
      {
        "title": "Entrance Gate",
        "img": "/propertyList/Exotica Woods/img1.jpg"
      },
      {
        "title": "Aerial View",
        "img": "/propertyList/Exotica Woods/img4.jpg"
      },
      {
        "title": "Club House",
        "img": "/propertyList/Exotica Woods/img6.jpg"
      },
      {
        "title": "Club House Elevation",
        "img": "/propertyList/Exotica Woods/img10.jpg"
      }
    ],
    "specifications": [
      "Gated plotted township",
      "Grand entrance gate with landscaped forecourt",
      "Club house with swimming pool",
      "Landscaped green belt",
      "Perimeter compound wall",
      "Sanctioned master layout with plot schedule"
    ],
    "connectivity": [
      "Frontage on a proposed 30 m wide road"
    ],
    "vision": [
      "Entrance gate",
      "Club house",
      "Aerial view",
      "Green belt"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Exotica Woods"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "M Chug Group"
    },
    {
      "label": "Configuration",
      "value": "Residential plots"
    }
  ],
  "images": [
    "/propertyList/Exotica Woods/img1.jpg",
    "/propertyList/Exotica Woods/img2.jpg",
    "/propertyList/Exotica Woods/img3.jpg",
    "/propertyList/Exotica Woods/img4.jpg",
    "/propertyList/Exotica Woods/img5.jpg",
    "/propertyList/Exotica Woods/img6.jpg",
    "/propertyList/Exotica Woods/img7.jpg",
    "/propertyList/Exotica Woods/img8.jpg",
    "/propertyList/Exotica Woods/img9.jpg",
    "/propertyList/Exotica Woods/img10.jpg",
    "/propertyList/Exotica Woods/img11.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Exotica Woods/img5.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "M Chug Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 289,
  "title": "DB Pride",
  "slug": "db-pride",
  "location": "AB Bypass Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "2, 2.5 & 3 BHK",
  "description": "A new mixed-use tower on the AB Bypass Road offering 2, 2.5 and 3 BHK residences with a clubhouse, sample flats and a Block C2 floor plate, positioned at the heart of Indore's growth corridor next to BCM Kokilaben Dhirubhai Ambani Hospital and Shishukunj School.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "2, 2.5 and 3 BHK residences in a new mixed-use tower",
        "Situated on the AB Bypass Road growth corridor",
        "Dedicated club within the project",
        "Sample flats available to view",
        "Block C2 floor plans published for all configurations",
        "Adjacent to BCM Kokilaben Dhirubhai Ambani Hospital and Shishukunj School"
      ]
    }
  ],
  "sections": {
    "overview": "DB Pride Mix Tower by DB Pride",
    "amenities": [
      {
        "title": "Club",
        "img": "/propertyList/DB Pride Mix Tower/img5.jpg"
      },
      {
        "title": "Sample Flats",
        "img": "/propertyList/DB Pride Mix Tower/img4.jpg"
      },
      {
        "title": "Block C2 Floor Plan",
        "img": "/propertyList/DB Pride Mix Tower/img6.jpg"
      }
    ],
    "specifications": [
      "Mixed-use tower with residences above",
      "Club facility within the development",
      "2 BHK, 2.5 BHK and 3 BHK layouts",
      "Sample flats built for viewing",
      "Specification sheet published in the project brochure"
    ],
    "connectivity": [
      "Laurels School - 1.1 km",
      "Niranjanpur Square - 3.2 km",
      "Apollo High Street - 4.6 km",
      "Sathya Sai School - 5.2 km",
      "Bombay Hospital - 5.9 km",
      "Railway Station Road, Chhoti Gwaltoli - 12 km",
      "Devi Ahilyabai Holkar Airport - 35 min",
      "Ujjain - 57 km"
    ],
    "vision": [
      "Club",
      "Sample flats",
      "Landscaped surrounds",
      "Tower elevation"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "DB Pride Mix Tower"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "AB Bypass Road, Indore"
    },
    {
      "label": "Developer",
      "value": "DB Pride"
    },
    {
      "label": "Configuration",
      "value": "2, 2.5 & 3 BHK"
    }
  ],
  "images": [
    "/propertyList/DB Pride Mix Tower/img1.jpg",
    "/propertyList/DB Pride Mix Tower/img2.jpg",
    "/propertyList/DB Pride Mix Tower/img3.jpg",
    "/propertyList/DB Pride Mix Tower/img4.jpg",
    "/propertyList/DB Pride Mix Tower/img5.jpg",
    "/propertyList/DB Pride Mix Tower/img6.jpg",
    "/propertyList/DB Pride Mix Tower/img7.jpg",
    "/propertyList/DB Pride Mix Tower/img8.jpg",
    "/propertyList/DB Pride Mix Tower/img9.jpg",
    "/propertyList/DB Pride Mix Tower/img10.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/DB Pride Mix Tower/img6.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "DB Pride",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 290,
  "title": "Aditya DM Nature City",
  "slug": "aditya-dm-nature-city",
  "location": "Village Begamkhedi, Kanadia Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Aditya DM Nature City is a RERA-registered plotted township on Kanadia Road at Village Begamkhedi, near California City and Ras Vrindavan Resort, planned in two sectors with a 150 ft wide road frontage.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered in two sectors - Sec A: P-IND-25-5556 and Sec B: P-IND-25-5513",
        "Township plots surrounded by open, natural landscape",
        "150 ft wide road frontage to the site",
        "Located near California City and Ras Vrindavan Resort",
        "Close to LNCT University and Sewa Kunj Hospital"
      ]
    }
  ],
  "sections": {
    "overview": "Aditya DM Nature City by Bhupesh Vyas Group",
    "amenities": [
      {
        "title": "Township Overview",
        "img": "/propertyList/Aditya DM Nature City/img1.jpg"
      },
      {
        "title": "Configuration",
        "img": "/propertyList/Aditya DM Nature City/img3.jpg"
      },
      {
        "title": "Location Map",
        "img": "/propertyList/Aditya DM Nature City/img5.jpg"
      }
    ],
    "specifications": [
      "Two sanctioned sectors (Sector A and Sector B)",
      "Plotted township configuration",
      "150 ft wide approach road",
      "Township amenities as per the sanctioned layout"
    ],
    "connectivity": [
      "On Kanadia Road, Indore",
      "Near LNCT University and Sewa Kunj Hospital",
      "Near Ras Vrindavan Resort and California City",
      "150 ft wide road towards Harda"
    ],
    "vision": [
      "Township plots",
      "Natural surroundings",
      "Wide approach road"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Aditya DM Nature City"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Village Begamkhedi, Kanadia Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Bhupesh Vyas Group"
    },
    {
      "label": "RERA No. (Sector A)",
      "value": "P-IND-25-5556"
    },
    {
      "label": "RERA No. (Sector B)",
      "value": "P-IND-25-5513"
    },
    {
      "label": "Corporate Office",
      "value": "206, 'Shagun', Scheme No.54, Vijay Nagar Square, A.B. Road, Indore"
    }
  ],
  "images": [
    "/propertyList/Aditya DM Nature City/img1.jpg",
    "/propertyList/Aditya DM Nature City/img2.jpg",
    "/propertyList/Aditya DM Nature City/img3.jpg",
    "/propertyList/Aditya DM Nature City/img4.jpg",
    "/propertyList/Aditya DM Nature City/img5.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Aditya DM Nature City/img3.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Bhupesh Vyas Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 291,
  "title": "Aditya East Escape",
  "slug": "aditya-east-escape",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Villa",
  "bhk": "3 BHK Villas",
  "description": "Aditya East Escape is a lakeside farmhouse retreat spread across 12 acres on the quiet fringes of Indore, with 80 private G+1 villas of 3 BHK on 2,300 sq.ft. plots, each with its own garden, and a 1,00,000 sq.ft. luxury clubhouse at its centre.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "12 acres of lakeside landscape on the fringes of Indore",
        "80 private farmhouse villas, each on a 2,300 sq.ft. plot",
        "3 BHK homes built with G+1 architecture",
        "1,00,000 sq.ft. luxury clubhouse",
        "Every villa has its own private garden",
        "Gated community minutes from the city",
        "Guest rooms, banquet space and private lounges",
        "Bar & grill, restaurant, coffee shop and all-day dining"
      ]
    }
  ],
  "sections": {
    "overview": "Aditya East Escape by Bhupesh Vyas Group",
    "amenities": [
      {
        "title": "Lakeside Retreat",
        "img": "/propertyList/East Escape/img2.jpg"
      },
      {
        "title": "Clubhouse",
        "img": "/propertyList/East Escape/img5.jpg"
      },
      {
        "title": "Wellness & Recreation",
        "img": "/propertyList/East Escape/img7.jpg"
      },
      {
        "title": "Club Plan",
        "img": "/propertyList/East Escape/img9.jpg"
      },
      {
        "title": "Villa Gardens",
        "img": "/propertyList/East Escape/img12.jpg"
      }
    ],
    "specifications": [
      "80 villas on 2,300 sq.ft. plots with G+1 architecture",
      "3 BHK layouts blending openness with privacy",
      "1,00,000 sq.ft. clubhouse with guest rooms and banquet space",
      "Bar & grill, restaurant, coffee shop and poolside lounge",
      "Gym, fitness, yoga and meditation zones",
      "Pool and jacuzzi with deck gazebo",
      "Sports turf, basketball court, jogging and cycling tracks",
      "Open-air theatre and kids' zone",
      "Community hall and outdoor party lawn",
      "Indoor games room and meditation centre"
    ],
    "connectivity": [
      "Set on the quiet fringes of Indore, minutes from the city centre"
    ],
    "vision": [
      "Lakeside setting",
      "Clubhouse",
      "Pool and jacuzzi",
      "Sports turf",
      "Open-air theatre",
      "Private villa gardens"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Aditya East Escape"
    },
    {
      "label": "Property Type",
      "value": "Villa"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Bhupesh Vyas Group"
    },
    {
      "label": "Configuration",
      "value": "3 BHK G+1 villas"
    },
    {
      "label": "Number of Villas",
      "value": "80"
    },
    {
      "label": "Plot Size",
      "value": "2,300 sq.ft."
    },
    {
      "label": "Land Area",
      "value": "12 acres"
    },
    {
      "label": "Clubhouse",
      "value": "1,00,000 sq.ft."
    }
  ],
  "images": [
    "/propertyList/East Escape/img1.jpg",
    "/propertyList/East Escape/img2.jpg",
    "/propertyList/East Escape/img4.jpg",
    "/propertyList/East Escape/img5.jpg",
    "/propertyList/East Escape/img7.jpg",
    "/propertyList/East Escape/img8.jpg",
    "/propertyList/East Escape/img9.jpg",
    "/propertyList/East Escape/img11.jpg",
    "/propertyList/East Escape/img12.jpg",
    "/propertyList/East Escape/img13.jpg",
    "/propertyList/East Escape/img15.jpg",
    "/propertyList/East Escape/img16.jpg",
    "/propertyList/East Escape/img18.jpg",
    "/propertyList/East Escape/img19.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/East Escape/img9.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Bhupesh Vyas Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 292,
  "title": "Aditya Gateway",
  "slug": "aditya-gateway",
  "location": "Scheme No. 139, Near MR-10 Bridge, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Commercial",
  "bhk": "Showrooms & Offices",
  "description": "Aditya Gateway is a retail, office and hotel destination at Scheme No. 139 near the MR-10 bridge, with double-height showrooms and mezzanine retail on the lower levels, office floors from the first to the eighth floor and a hotel lobby within the building.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Integrated retail, office and hotel destination",
        "RERA registered - P-IND-19-2386",
        "Ground floor and upper ground floor retail with mezzanine level",
        "Office floors from the first through the eighth floor",
        "Hotel lobby planned within the building",
        "Located at Scheme No. 139 near the MR-10 bridge",
        "Surface and structured parking across the site"
      ]
    }
  ],
  "sections": {
    "overview": "Aditya Gateway by Bhupesh Vyas Group",
    "amenities": [
      {
        "title": "Retail Frontage",
        "img": "/propertyList/Gateway/img2.jpg"
      },
      {
        "title": "Office Floors",
        "img": "/propertyList/Gateway/img3.jpg"
      },
      {
        "title": "Project Views",
        "img": "/propertyList/Gateway/img4.jpg"
      }
    ],
    "specifications": [
      "Ground floor retail with mezzanine floor above",
      "Upper ground floor showrooms",
      "First floor offices",
      "Second to eighth floor office plates",
      "Hotel lobby within the development",
      "Developed by Neminath Buildcon",
      "CREDAI member developer"
    ],
    "connectivity": [
      "Scheme No. 139, near MR-10 Bridge, Indore",
      "Corporate office at 206, 'Shagun', Scheme No.54, Vijay Nagar Square, A.B. Road, Indore"
    ],
    "vision": [
      "Retail frontage",
      "Office floors",
      "Hotel lobby",
      "Landscaped forecourt"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Aditya Gateway"
    },
    {
      "label": "Property Type",
      "value": "Commercial"
    },
    {
      "label": "Location",
      "value": "Scheme No. 139, Near MR-10 Bridge, Indore"
    },
    {
      "label": "Developer",
      "value": "Bhupesh Vyas Group"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-19-2386"
    },
    {
      "label": "Configuration",
      "value": "Retail | Offices | Hotel"
    },
    {
      "label": "Website",
      "value": "www.adityagateway.com"
    }
  ],
  "images": [
    "/propertyList/Gateway/img1.jpg",
    "/propertyList/Gateway/img2.jpg",
    "/propertyList/Gateway/img3.jpg",
    "/propertyList/Gateway/img4.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Gateway/img2.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Bhupesh Vyas Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 293,
  "title": "Aditya Prakash Nexus Tech Park",
  "slug": "aditya-prakash-nexus-tech-park",
  "location": "Luv-Kush Square, Indore-Ujjain 6 Lane Highway, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Commercial",
  "bhk": "Office Units",
  "description": "Aditya Prakash Nexus Tech Park is an 18-floor business hub at Luv-Kush Square on the Indore-Ujjain six-lane highway, with office floors, a dedicated service floor, an entertainment floor and a restaurant-plus-terrace level on top.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA approved - P-IND-25-6093",
        "18 office floors with a service floor and an entertainment floor",
        "Restaurant and terrace level at the top of the tower",
        "12 passenger lifts and 2 service lifts",
        "12 ft and 14 ft floor-to-floor office heights",
        "Centrally air conditioned building",
        "5 floors of parking",
        "Double-height amenities area with ample greenery",
        "Located at Luv-Kush Square on the Indore-Ujjain 6-lane highway"
      ]
    }
  ],
  "sections": {
    "overview": "Aditya Prakash Nexus Tech Park by Bhupesh Vyas Group",
    "amenities": [
      {
        "title": "Ground Floor Plan",
        "img": "/propertyList/Nexus/img3.jpg"
      },
      {
        "title": "Entertainment Floor",
        "img": "/propertyList/Nexus/img6.jpg"
      }
    ],
    "specifications": [
      "12 passenger lifts and 2 service lifts",
      "12 ft and 14 ft floor office height",
      "Centrally air conditioned building",
      "Common seating lounge on every floor",
      "5 floor parking",
      "24x7 CCTV and security personnel",
      "Double height amenities area with ample greenery",
      "Board meeting rooms",
      "Cafeteria, fine dining and restaurant",
      "Hitech gym and wellness centre",
      "Table tennis, snooker, chess and carrom board"
    ],
    "connectivity": [
      "Luv-Kush Square, Indore-Ujjain 6 Lane Highway, Indore",
      "Corporate office at 206, 'Shagun', Scheme No.54, Vijay Nagar Square, A.B. Road, Indore"
    ],
    "vision": [
      "Tower elevation",
      "Double-height lobby",
      "Entertainment floor",
      "Restaurant terrace"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Aditya Prakash Nexus Tech Park"
    },
    {
      "label": "Property Type",
      "value": "Commercial"
    },
    {
      "label": "Location",
      "value": "Luv-Kush Square, Indore-Ujjain Highway, Indore"
    },
    {
      "label": "Developer",
      "value": "Bhupesh Vyas Group"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-25-6093"
    },
    {
      "label": "Configuration",
      "value": "Office units"
    },
    {
      "label": "Floors",
      "value": "18 plus restaurant and terrace"
    }
  ],
  "images": [
    "/propertyList/Nexus/img1.jpg",
    "/propertyList/Nexus/img2.jpg",
    "/propertyList/Nexus/img3.jpg",
    "/propertyList/Nexus/img4.jpg",
    "/propertyList/Nexus/img5.jpg",
    "/propertyList/Nexus/img6.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Nexus/img4.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Bhupesh Vyas Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 294,
  "title": "Aditya Govindam",
  "slug": "aditya-govindam",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "2 & 3 BHK",
  "description": "Aditya Govindam is a residency crafted for the elite, with 2 BHK homes of about 1,221 sq.ft. and 3 BHK homes of about 1,745 sq.ft. arranged across Blocks A and B over a podium level, with shops lining the ground floor frontage.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "2 BHK homes of about 1,221 sq.ft.",
        "3 BHK homes of about 1,745 sq.ft.",
        "Blocks A and B planned over a podium parking level",
        "Shops along the ground floor frontage",
        "5 guest rooms within the community",
        "Net cricket turf and multipurpose court for badminton and basketball",
        "Dedicated senior citizen area",
        "Meditation hall zone, yoga hall and banquet hall"
      ]
    }
  ],
  "sections": {
    "overview": "Aditya Govindam by Bhupesh Vyas Group",
    "amenities": [
      {
        "title": "Amenities Overview",
        "img": "/propertyList/Govindham/img2.jpg"
      },
      {
        "title": "Podium Floor Plan",
        "img": "/propertyList/Govindham/img3.jpg"
      },
      {
        "title": "Block B Floor Plan",
        "img": "/propertyList/Govindham/img4.jpg"
      },
      {
        "title": "3 BHK Plan",
        "img": "/propertyList/Govindham/img5.jpg"
      },
      {
        "title": "2 BHK Plan",
        "img": "/propertyList/Govindham/img6.jpg"
      }
    ],
    "specifications": [
      "Podium floor with parking and landscaped deck",
      "Block A and Block B residential floor plates",
      "2 BHK (approx. 1,221 sq.ft.) and 3 BHK (approx. 1,745 sq.ft.) layouts",
      "Changing room and lift lobby",
      "Meditation hall zone and yoga hall",
      "Banquet hall and 5 guest rooms",
      "Net cricket turf",
      "Multipurpose court - badminton, basketball and badminton lawn",
      "Senior citizen area",
      "Indoor games - snooker, pool, chess, ludo, carrom and tambola",
      "Retail shops on the ground floor"
    ],
    "connectivity": [
      "Contact the sales team for the detailed site connectivity sheet"
    ],
    "vision": [
      "Podium deck",
      "Sports courts",
      "Banquet hall",
      "Terrace garden",
      "Retail frontage"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Aditya Govindam"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Bhupesh Vyas Group"
    },
    {
      "label": "Configuration",
      "value": "2 BHK (1,221 sq.ft.) and 3 BHK (1,745 sq.ft.)"
    },
    {
      "label": "Contact",
      "value": "7509175091, 8819998222"
    }
  ],
  "images": [
    "/propertyList/Govindham/img1.jpg",
    "/propertyList/Govindham/img3.jpg",
    "/propertyList/Govindham/img4.jpg",
    "/propertyList/Govindham/img6.jpg",
    "/propertyList/Govindham/img7.jpg",
    "/propertyList/Govindham/img9.jpg",
    "/propertyList/Govindham/img10.jpg",
    "/propertyList/Govindham/img12.jpg",
    "/propertyList/Govindham/img13.jpg",
    "/propertyList/Govindham/img15.jpg",
    "/propertyList/Govindham/img16.jpg",
    "/propertyList/Govindham/img18.jpg",
    "/propertyList/Govindham/img19.jpg",
    "/propertyList/Govindham/img21.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Govindham/img5.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Bhupesh Vyas Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 295,
  "title": "Godrej Greenview Estate",
  "slug": "godrej-greenview-estate",
  "location": "Indore-Ujjain Road, Sanwer, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Godrej Greenview Estate is a two-phase plotted development off the Indore-Ujjain Road with about 4.5 acres of amenity space, five distinct themed gardens and a 10,000 sq.ft. clubhouse shared between both phases.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Phase 1 MPRERA Reg. No. P-SWR-25-5772; Phase 2 Reg. No. P-SWR-25-5648",
        "About 4.5 acres (18,211 sq.mt.) of amenity space",
        "10,000 sq.ft. (929 sq.mt.) clubhouse shared by both phases",
        "Five exotic distinct gardens - Central, Zen, Floral, Tropical and Orchard",
        "Butterfly garden and wild flower garden within the landscape",
        "Multipurpose sports court and party lawn",
        "Backed by Godrej Properties - 35 years, 115+ projects, 85,000+ happy families",
        "Positioned on the six-lane Indore-Ujjain Road corridor"
      ]
    }
  ],
  "sections": {
    "overview": "Godrej Greenview Estate by Godrej Properties",
    "amenities": [
      {
        "title": "Clubhouse",
        "img": "/propertyList/Godrej Greenview Estate/img20.jpg"
      },
      {
        "title": "Themed Gardens",
        "img": "/propertyList/Godrej Greenview Estate/img22.jpg"
      },
      {
        "title": "Sports Court",
        "img": "/propertyList/Godrej Greenview Estate/img24.jpg"
      },
      {
        "title": "Master Layout",
        "img": "/propertyList/Godrej Greenview Estate/img53.jpg"
      }
    ],
    "specifications": [
      "Two sanctioned phases developed by Godrej group companies",
      "Central Garden, Zen Garden, Floral Garden, Tropical Garden and Orchard Garden",
      "Butterfly garden and wild flower garden",
      "Multipurpose sports court",
      "Party lawn and sitting areas",
      "Clubhouse with ground level and level 1 amenities",
      "Shared clubhouse, common areas and infrastructure across both phases"
    ],
    "connectivity": [
      "On the Indore-Ujjain Road (six-lane expansion under way)",
      "Close to Sanwer Junction",
      "Near TCS, INFY and Yash IT Park SEZ",
      "Near Symbiosis University, NMIMS and Oriental University",
      "Upcoming Indore-Ujjain metro line",
      "Devi Ahilyabai Holkar International Airport",
      "Close to Indore Super Corridor and Bypass Road"
    ],
    "vision": [
      "Clubhouse",
      "Central garden",
      "Zen garden",
      "Tropical garden",
      "Orchard garden",
      "Multipurpose sports court"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Godrej Greenview Estate"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Indore-Ujjain Road, Sanwer, Indore"
    },
    {
      "label": "Developer",
      "value": "Godrej Properties"
    },
    {
      "label": "RERA No. (Phase 1)",
      "value": "P-SWR-25-5772"
    },
    {
      "label": "RERA No. (Phase 2)",
      "value": "P-SWR-25-5648"
    },
    {
      "label": "Amenity Space",
      "value": "Approx. 4.5 acres"
    },
    {
      "label": "Clubhouse",
      "value": "Approx. 10,000 sq.ft."
    }
  ],
  "images": [
    "/propertyList/Godrej Greenview Estate/img1.jpg",
    "/propertyList/Godrej Greenview Estate/img5.jpg",
    "/propertyList/Godrej Greenview Estate/img9.jpg",
    "/propertyList/Godrej Greenview Estate/img13.jpg",
    "/propertyList/Godrej Greenview Estate/img17.jpg",
    "/propertyList/Godrej Greenview Estate/img21.jpg",
    "/propertyList/Godrej Greenview Estate/img25.jpg",
    "/propertyList/Godrej Greenview Estate/img29.jpg",
    "/propertyList/Godrej Greenview Estate/img33.jpg",
    "/propertyList/Godrej Greenview Estate/img37.jpg",
    "/propertyList/Godrej Greenview Estate/img41.jpg",
    "/propertyList/Godrej Greenview Estate/img45.jpg",
    "/propertyList/Godrej Greenview Estate/img49.jpg",
    "/propertyList/Godrej Greenview Estate/img53.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Godrej Greenview Estate/img53.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Godrej Properties",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 296,
  "title": "Godrej Verdania Estate",
  "slug": "godrej-verdania-estate",
  "location": "Off Bypass Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Godrej Verdania Estate is a resort-themed plotted development off the Bypass Road in Indore, with plot sizes from about 1,250 sq.ft. up to 2,400 sq.ft. and beyond, and a clubhouse programme spanning sports, fitness, community and recreation.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "MPRERA Registration No. P-SWR-25-5891",
        "Plot sizes of about 1,250, 1,500, 1,800 and 2,400 sq.ft. and above",
        "Resort-themed community planning - 'Resort jaisi apni duniya'",
        "The Verdania Enclave with enhanced views and immediate accessibility",
        "Multipurpose sports court and box cricket arena",
        "Swimming pool, steam room and indoor games room",
        "Multipurpose hall, guest rooms and temple",
        "Developed by Godrej Projects Development Limited"
      ]
    }
  ],
  "sections": {
    "overview": "Godrej Verdania Estate by Godrej Properties",
    "amenities": [
      {
        "title": "Clubhouse",
        "img": "/propertyList/Godrej Verdania Estate/img18.jpg"
      },
      {
        "title": "Sports & Fitness",
        "img": "/propertyList/Godrej Verdania Estate/img22.jpg"
      },
      {
        "title": "Community Spaces",
        "img": "/propertyList/Godrej Verdania Estate/img26.jpg"
      },
      {
        "title": "Master Layout",
        "img": "/propertyList/Godrej Verdania Estate/img47.jpg"
      }
    ],
    "specifications": [
      "Plot sizes from below 116.12 sq.mt. (1,250 sq.ft.) to above 222.96 sq.mt. (2,400 sq.ft.)",
      "Sports and fitness zone with multipurpose sports court and box cricket",
      "Swimming pool",
      "Steam room",
      "Indoor games room",
      "Multipurpose hall",
      "Guest rooms",
      "Temple within the campus",
      "Lawnside gazebo and tree-court seating",
      "Community and social spaces for shared gatherings"
    ],
    "connectivity": [
      "Off Bypass Road and AB Road, Indore",
      "Close to Phoenix Citadel Mall and Malhar Mega Mall",
      "Near Apollo Hospitals, Shalby, Choithram and Kokilaben Dhirubhai Ambani Hospital",
      "Close to The Shishukunj International School, The Emerald Heights International School and Delhi Public School",
      "Near Crystal IT Park SEZ and Smart Industrial Park",
      "Devi Ahilyabai Holkar International Airport"
    ],
    "vision": [
      "Resort-themed clubhouse",
      "Swimming pool",
      "Box cricket arena",
      "Lawnside gazebo",
      "Landscaped avenues"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Godrej Verdania Estate"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Off Bypass Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Godrej Properties"
    },
    {
      "label": "RERA No.",
      "value": "P-SWR-25-5891"
    },
    {
      "label": "Plot Sizes",
      "value": "Approx. 1,250 - 2,400+ sq.ft."
    }
  ],
  "images": [
    "/propertyList/Godrej Verdania Estate/img1.jpg",
    "/propertyList/Godrej Verdania Estate/img5.jpg",
    "/propertyList/Godrej Verdania Estate/img9.jpg",
    "/propertyList/Godrej Verdania Estate/img14.jpg",
    "/propertyList/Godrej Verdania Estate/img18.jpg",
    "/propertyList/Godrej Verdania Estate/img22.jpg",
    "/propertyList/Godrej Verdania Estate/img26.jpg",
    "/propertyList/Godrej Verdania Estate/img31.jpg",
    "/propertyList/Godrej Verdania Estate/img35.jpg",
    "/propertyList/Godrej Verdania Estate/img39.jpg",
    "/propertyList/Godrej Verdania Estate/img43.jpg",
    "/propertyList/Godrej Verdania Estate/img48.jpg",
    "/propertyList/Godrej Verdania Estate/img52.jpg",
    "/propertyList/Godrej Verdania Estate/img56.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Godrej Verdania Estate/img47.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Godrej Properties",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 297,
  "title": "Hi-Link Empire",
  "slug": "hi-link-empire",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Hi-Link Empire is a sanctioned plotting colony laid out in three sectors - A, B and C - fronting a proposed 30.0 m wide road, with a mix of general, LIG and EWS plots, shop-cum-residential units, an overhead tank and open park areas.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Colony planned in Sectors A, B and C",
        "Frontage on a proposed 30.0 m wide road",
        "9.0 m, 12.0 m and 18.0 m wide internal roads",
        "General plots of 20' x 50' and 30' x 70'/80' average",
        "LIG plots of 16' x 35' and EWS plots of 12' x 35'",
        "Shop-cum-residential plots along the main roads",
        "Overhead tank (O.H.T.) and service areas within the colony",
        "Open park areas and buffer zone in the layout"
      ]
    }
  ],
  "sections": {
    "overview": "Hi-Link Empire by Hi Link Group",
    "amenities": [
      {
        "title": "Sanctioned Colony Layout",
        "img": "/propertyList/Hi-Link Empire/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned colony layout in three sectors",
      "9.0 m, 12.0 m, 18.0 m and 30.0 m wide roads",
      "General, LIG and EWS plot categories",
      "Shop-cum-residential plots",
      "Overhead tank and service areas",
      "Open parks and buffer zone"
    ],
    "connectivity": [
      "Frontage on a proposed 30 m wide road"
    ],
    "vision": [
      "Plotted layout",
      "Open park",
      "Shop-cum-residential frontage"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Hi-Link Empire"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Hi Link Group"
    },
    {
      "label": "Configuration",
      "value": "General, LIG and EWS plots"
    }
  ],
  "images": [
    "/propertyList/Hi-Link Empire/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Hi-Link Empire/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Hi Link Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 298,
  "title": "Hi-Link Extension 3",
  "slug": "hi-link-extension-3",
  "location": "Chhota Bangarda, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Hi-Link Extension 3 is a plotted colony at Chhota Bangarda, Indore, adjoining Keshav Vidhya Peeth and connected to Super Corridor, Airport Road and MR-5, with two internal parks and 9.0 m wide roads throughout.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Located at Chhota Bangarda, Indore",
        "Plot sizes of 20' x 40', 20' x 50' and 20' x 55' average",
        "Compact plots of 11'3\" x 34', 14' x 35'3\" and 16' x 35'3\"",
        "Two dedicated park areas inside the colony",
        "9.0 m wide internal roads with an existing 12.0 m wide road on the edge",
        "Adjoining Keshav Vidhya Peeth",
        "Connected towards Super Corridor, Airport Road and MR-5"
      ]
    }
  ],
  "sections": {
    "overview": "Hi-Link Extension 3 by Hi Link Group",
    "amenities": [
      {
        "title": "Sanctioned Colony Layout",
        "img": "/propertyList/Hi-Link Extension 3/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotting layout",
      "9.0 m wide internal roads",
      "Two park areas within the colony",
      "Plot sizes from 11'3\" x 34' to 20' x 55'"
    ],
    "connectivity": [
      "Chhota Bangarda Road, Indore",
      "Towards Super Corridor and Arbindo",
      "Towards Airport Road",
      "Towards M.R.-5",
      "Adjoining Keshav Vidhya Peeth"
    ],
    "vision": [
      "Plotted layout",
      "Park areas",
      "Wide internal roads"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Hi-Link Extension 3"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Chhota Bangarda, Indore"
    },
    {
      "label": "Developer",
      "value": "Hi Link Group"
    },
    {
      "label": "Configuration",
      "value": "Residential plots"
    }
  ],
  "images": [
    "/propertyList/Hi-Link Extension 3/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Hi-Link Extension 3/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Hi Link Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 299,
  "title": "Hi-Link Ganga Vihar",
  "slug": "hi-link-ganga-vihar",
  "location": "Chhota Bangarda, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Hi-Link Ganga Vihar sits on the 45.0 m wide MR-5 road at Chhota Bangarda, Indore, combining compact residential plots with large 80' x 140' and 90' x 140' frontage plots along the main road, plus open pockets and service areas.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Frontage on the 45.00 m wide MR-5 road",
        "Large main-road plots of 80' x 140' and 90' x 140'",
        "Residential plots of 20' x 40', 20' x 50' and 20' x 55'",
        "Compact plots from 11' x 35' and 15' x 40' average",
        "9.0 m and 12.0 m wide internal roads with 3.0 m pathways",
        "Open pockets and service areas within the layout",
        "Close to Hi-Link Residency and Nariman City"
      ]
    }
  ],
  "sections": {
    "overview": "Hi-Link Ganga Vihar by Hi Link Group",
    "amenities": [
      {
        "title": "Sanctioned Colony Layout",
        "img": "/propertyList/Hi-Link Ganga Vihar/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotting layout at Chhota Bangarda",
      "45.0 m wide MR-5 road frontage",
      "9.0 m and 12.0 m wide internal roads",
      "3.0 m wide pathways",
      "Open pockets and service areas",
      "Large frontage plots for bungalows or commercial use"
    ],
    "connectivity": [
      "On MR-5 Road towards Indore Wire",
      "Towards Super Corridor",
      "Close to Hi-Link Residency",
      "Near the metro station corridor"
    ],
    "vision": [
      "Plotted layout",
      "MR-5 frontage",
      "Open pockets"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Hi-Link Ganga Vihar"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Chhota Bangarda, Indore"
    },
    {
      "label": "Developer",
      "value": "Hi Link Group"
    },
    {
      "label": "Configuration",
      "value": "Residential and large frontage plots"
    }
  ],
  "images": [
    "/propertyList/Hi-Link Ganga Vihar/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Hi-Link Ganga Vihar/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Hi Link Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 300,
  "title": "Hi-Link Premium Corridor",
  "slug": "hi-link-premium-corridor",
  "location": "Nenod, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Hi-Link Premium Corridor is a large plotted colony at Nenod, Indore, developed by Ekdant Residency Pvt. Ltd., with more than 500 plots in six size bands, multiple internal parks and a 30.0 m wide D.P. road along the southern edge.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "A project by Ekdant Residency Pvt. Ltd.",
        "Six plot size bands - 30' x 40'/50', 30' x 50', 20' x 60', 20' x 50', 16' x 50' and 25' x 40'",
        "More than 500 numbered plots across the colony",
        "Multiple internal parks distributed through the layout",
        "9.0 m wide internal roads",
        "30.0 m wide D.P. road frontage",
        "Informal sector and school plot within the scheme"
      ]
    }
  ],
  "sections": {
    "overview": "Hi-Link Premium Corridor by Hi Link Group",
    "amenities": [
      {
        "title": "Sanctioned Colony Layout",
        "img": "/propertyList/Hi-Link Premium Corridor/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotting layout at Nenod",
      "9.0 m wide internal roads and 30.0 m wide D.P. road",
      "Six plot size categories",
      "Multiple park areas",
      "Nursery school and informal sector plots"
    ],
    "connectivity": [
      "Nenod, Indore",
      "Along the Super Corridor - Pithampur Economic Corridor belt"
    ],
    "vision": [
      "Plotted layout",
      "Internal parks",
      "Wide D.P. road frontage"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Hi-Link Premium Corridor"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Nenod, Indore"
    },
    {
      "label": "Developer",
      "value": "Hi Link Group"
    },
    {
      "label": "Project By",
      "value": "Ekdant Residency Pvt. Ltd."
    },
    {
      "label": "Configuration",
      "value": "Residential plots in six size bands"
    }
  ],
  "images": [
    "/propertyList/Hi-Link Premium Corridor/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Hi-Link Premium Corridor/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Hi Link Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 301,
  "title": "Hi-Link Shree Ram Vihar",
  "slug": "hi-link-shree-ram-vihar",
  "location": "Chhota Bangarda, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Shree Ram Vihar is a Hi-Link Group plotted colony at Chhota Bangarda, Indore, laid out along an 18.0 m wide internal spine with two landscaped parks, LIG and EWS pockets and connections towards Super Corridor and Bangarda.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Located at Chhota Bangarda, Indore",
        "Plot sizes of 20' x 50' and 30' x 50'",
        "Two landscaped parks within the colony",
        "18.0 m wide internal spine road with 9.0 m wide roads",
        "LIG and EWS pockets within the layout",
        "Connections towards Super Corridor and Bangarda",
        "Neighbours Hi-Link Residency, Krishna Vatika and Hi-Link Ext. 3"
      ]
    }
  ],
  "sections": {
    "overview": "Hi-Link Shree Ram Vihar by Hi Link Group",
    "amenities": [
      {
        "title": "Sanctioned Colony Layout",
        "img": "/propertyList/Hi-Link Ram Vihar/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotting layout",
      "18.0 m and 9.0 m wide internal roads",
      "Two parks within the colony",
      "LIG and EWS plot pockets",
      "Service areas provided in the layout"
    ],
    "connectivity": [
      "Towards Super Corridor",
      "Towards Bangarda",
      "Near the metro station corridor",
      "Close to Hi-Link Residency, Hi-Link City and Vidhya Palace"
    ],
    "vision": [
      "Plotted layout",
      "Landscaped parks",
      "Wide spine road"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Hi-Link Shree Ram Vihar"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Chhota Bangarda, Indore"
    },
    {
      "label": "Developer",
      "value": "Hi Link Group"
    },
    {
      "label": "Configuration",
      "value": "Residential plots with LIG and EWS pockets"
    }
  ],
  "images": [
    "/propertyList/Hi-Link Ram Vihar/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Hi-Link Ram Vihar/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Hi Link Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 302,
  "title": "Hi-Link Residency",
  "slug": "hi-link-residency",
  "location": "MR-5 Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Hi-Link Residency is a large township on the 150 ft wide MR-5 road near the Super Corridor, mixing residential plots in five size bands with multi-dwelling unit blocks, a clubhouse, shop areas and generous open greens.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Frontage on the 150 ft wide MR-5 road",
        "Plot sizes of 20' x 45', 20' x 50', 30' x 50', 30' x 55' and 30' x 60'",
        "Multi-dwelling unit blocks within the township",
        "Club house within the campus",
        "Shop area planned along the main road",
        "Extensive open green pockets across the layout",
        "Direct approach towards Super Corridor"
      ]
    }
  ],
  "sections": {
    "overview": "Hi-Link Residency by Hi Link Group",
    "amenities": [
      {
        "title": "Township Layout",
        "img": "/propertyList/Hi-Link Residency/img1.jpg"
      }
    ],
    "specifications": [
      "Township layout with plots and multi-dwelling units",
      "150 ft wide MR-5 road frontage",
      "9.0 m wide internal roads",
      "Club house",
      "Shop area",
      "Multiple open green pockets",
      "Proposed 18.0 m wide master plan road through the site"
    ],
    "connectivity": [
      "On the 150 ft wide MR-5 road",
      "Towards Super Corridor",
      "Towards Indore Wire",
      "Near Hi-Link City"
    ],
    "vision": [
      "Township layout",
      "Club house",
      "Open greens",
      "Multi-dwelling blocks"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Hi-Link Residency"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "MR-5 Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Hi Link Group"
    },
    {
      "label": "Configuration",
      "value": "Plots and multi-dwelling units"
    }
  ],
  "images": [
    "/propertyList/Hi-Link Residency/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Hi-Link Residency/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Hi Link Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 303,
  "title": "Hi-Link Town",
  "slug": "hi-link-town",
  "location": "Ahmedabad-Indore National Highway, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Hi-Link Town is a large township on the 250 ft wide Ahmedabad-Indore National Highway near the proposed MR-11, with premium 50' x 100' highway-facing plots, several internal parks, a primary school plot and an EWS pocket.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Frontage on the 250 ft wide Ahmedabad-Indore National Highway",
        "Premium highway-facing plots of 50' x 100'",
        "Plot sizes of 20' x 50', 30' x 50', 40' x 50', 45' x 50' and 70' x 140' average",
        "Multiple internal parks across the township",
        "Primary school plot within the layout",
        "EWS pocket provided in the scheme",
        "Along the proposed MR-11 as per Master Plan 2021",
        "Close to the Chhotiram Foundation and towards Pithampur"
      ]
    }
  ],
  "sections": {
    "overview": "Hi-Link Town by Hi Link Group",
    "amenities": [
      {
        "title": "Township Layout",
        "img": "/propertyList/Hi-Link Town/img1.jpg"
      }
    ],
    "specifications": [
      "Township layout on the national highway",
      "30 ft, 40 ft and 60 ft wide internal roads",
      "Multiple parks and open spaces",
      "Primary school plot",
      "EWS pocket",
      "Service areas within the layout"
    ],
    "connectivity": [
      "On the Ahmedabad-Indore National Highway (250 ft wide)",
      "Along the proposed MR-11 (Master Plan 2021)",
      "Towards Pithampur and Mangliya",
      "Towards Bijasan and Indore city",
      "Near Chhotiram Foundation"
    ],
    "vision": [
      "Township layout",
      "Highway frontage plots",
      "Parks",
      "School plot"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Hi-Link Town"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Ahmedabad-Indore National Highway, Indore"
    },
    {
      "label": "Developer",
      "value": "Hi Link Group"
    },
    {
      "label": "Configuration",
      "value": "Residential plots with EWS and school plots"
    }
  ],
  "images": [
    "/propertyList/Hi-Link Town/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Hi-Link Town/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Hi Link Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 304,
  "title": "Hi-Link Vandana Vihar",
  "slug": "hi-link-vandana-vihar",
  "location": "Near Kabit Khedi, MR-10 Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Vandana Vihar is a Hi-Link Group plotted colony off the 30.0 m wide road towards Kabit Khedi and MR-10, offering five plot size bands, two internal parks and an overhead tank within the campus.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Located off the 30.0 m wide road near Kabit Khedi",
        "Five plot size bands - 40' x 50', 20' x 50', 17' x 50', 16' x 50' and 15' x 40'",
        "Two landscaped parks inside the colony",
        "9.00 m wide internal road grid",
        "Overhead tank and service area within the colony",
        "Close to Chandragupta Maurya Chouraha",
        "Direct connection towards M.R. 10 and Ujjain Road"
      ]
    }
  ],
  "sections": {
    "overview": "Hi-Link Vandana Vihar by Hi Link Group",
    "amenities": [
      {
        "title": "Sanctioned Colony Layout",
        "img": "/propertyList/Hi-Link Vandana Vihar/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotting layout",
      "9.00 m wide internal roads",
      "Two park areas",
      "Overhead tank and service area",
      "Five plot size categories"
    ],
    "connectivity": [
      "Towards Kabit Khedi",
      "Towards M.R. 10 Road",
      "Near Chandragupta Maurya Chouraha",
      "Towards Ujjain Road and Vijay Nagar"
    ],
    "vision": [
      "Plotted layout",
      "Parks",
      "Wide internal roads"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Hi-Link Vandana Vihar"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Near Kabit Khedi, MR-10 Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Hi Link Group"
    },
    {
      "label": "Configuration",
      "value": "Residential plots"
    }
  ],
  "images": [
    "/propertyList/Hi-Link Vandana Vihar/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Hi-Link Vandana Vihar/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Hi Link Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 305,
  "title": "Hi-Link Villa",
  "slug": "hi-link-villa",
  "location": "Indore-Depalpur Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Hi-Link Villa is a plotted colony on the Indore-Depalpur Road near Gomatgiri and Pitra Parvat, with general, LIG and EWS plot categories, three internal parks and a 40 ft wide spine road linking to the main highway.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Located on the Indore-Depalpur Road",
        "Plot sizes of 20' x 50', 20' x 40' and 15' x 40'",
        "Dedicated LIG and EWS plot pockets",
        "Three landscaped parks within the colony",
        "40 ft wide spine road and 30 ft wide internal roads",
        "Close to Gomatgiri, Pitra Parvat and Mahalaxmi Vikas",
        "Near the power house on the Depalpur road"
      ]
    }
  ],
  "sections": {
    "overview": "Hi-Link Villa by Hi Link Group",
    "amenities": [
      {
        "title": "Sanctioned Colony Layout",
        "img": "/propertyList/Hi-Link Villa/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotting layout",
      "40 ft and 30 ft wide roads",
      "Three parks within the colony",
      "General, LIG and EWS plot categories",
      "Service areas within the layout"
    ],
    "connectivity": [
      "On the Indore-Depalpur Road",
      "Towards Airport Road",
      "Towards Depalpur",
      "Near Gomatgiri and Pitra Parvat"
    ],
    "vision": [
      "Plotted layout",
      "Parks",
      "Wide spine road"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Hi-Link Villa"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Indore-Depalpur Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Hi Link Group"
    },
    {
      "label": "Configuration",
      "value": "General, LIG and EWS plots"
    }
  ],
  "images": [
    "/propertyList/Hi-Link Villa/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Hi-Link Villa/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Hi Link Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 306,
  "title": "Hi-Link City",
  "slug": "hi-link-city",
  "location": "Chhota Bangarda, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Hi-Link City is a large township adjoining Scheme No. 151 with a primary school plot, an amenity plot, a temple and generous parks, along with the adjoining Hi-Link City Extension at Chhota Bangarda towards Bangarda Road (MR-5) and Airport Road.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Township adjoining Scheme No. 151 with an existing 60 ft wide road",
        "Plot sizes of 20' x 50', 20' x 60', 25' x 40', 30' x 40' and 30' x 50'",
        "Primary school plot and amenity plot within the township",
        "Temple and multiple park areas inside the layout",
        "40 ft and 30 ft wide internal roads",
        "Hi-Link City Extension at Chhota Bangarda with 20' x 50', 20' x 55', 25' x 45', 25' x 47' and 16' x 50' plots",
        "Extension connects towards Bangarda Road (MR-5) and Airport Road"
      ]
    }
  ],
  "sections": {
    "overview": "Hi-Link City by Hi Link Group",
    "amenities": [
      {
        "title": "Township Layout",
        "img": "/propertyList/Hi-Link City/img1.jpg"
      },
      {
        "title": "Hi-Link City Extension Layout",
        "img": "/propertyList/Hi-Link City/img2.jpg"
      }
    ],
    "specifications": [
      "Township layout with school, amenity and temple plots",
      "40 ft and 30 ft wide internal roads",
      "Multiple parks and green belts",
      "Extension layout at Chhota Bangarda with its own parks and temple plot"
    ],
    "connectivity": [
      "Towards Airport Road",
      "Towards Bangarda Road (MR-5)",
      "Towards Super Corridor and M.R. 5",
      "Close to Hi-Link Residency"
    ],
    "vision": [
      "Township layout",
      "Parks",
      "School and amenity plots",
      "Extension layout"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Hi-Link City"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Chhota Bangarda, Indore"
    },
    {
      "label": "Developer",
      "value": "Hi Link Group"
    },
    {
      "label": "Configuration",
      "value": "Residential plots with school, amenity and temple plots"
    },
    {
      "label": "Phases",
      "value": "Hi-Link City and Hi-Link City Extension"
    }
  ],
  "images": [
    "/propertyList/Hi-Link City/img1.jpg",
    "/propertyList/Hi-Link City/img2.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Hi-Link City/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Hi Link Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 307,
  "title": "Hi-Link Ram Lok",
  "slug": "hi-link-ram-lok",
  "location": "Village Bada Bangarda, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Hi-Link Ram Lok is a large township at Village Bada Bangarda, Indore, organised into named sectors - Shridhar Sampat, Shrimate Vatika, Ishay Vatika, Shridhar Jagannath Dham, Hanumant Dham, Maruti Dham and Mudrika Dham - with a 30.0 m wide road link to the Super Corridor.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Township at Village Bada Bangarda, Indore",
        "Organised into named sectors including Shridhar Jagannath Dham, Hanumant Dham, Maruti Dham and Mudrika Dham",
        "Plot sizes of 20' x 40', 20' x 45', 20' x 50', 20' x 55', 20' x 60' and 30' x 50'/60'",
        "30.0 m wide road connecting to the Super Corridor",
        "Numerous parks distributed through every sector",
        "Future planning area reserved within the township",
        "Close to Pitra Parvat, NMIMS, Infosys and the airport"
      ]
    }
  ],
  "sections": {
    "overview": "Hi-Link Ram Lok by Hi Link Group",
    "amenities": [
      {
        "title": "Township Layout",
        "img": "/propertyList/Hi-Link Ram Lok/img1.jpg"
      }
    ],
    "specifications": [
      "Township layout in named sectors",
      "9.0 m and 12.0 m wide internal roads with a 30.0 m wide connector",
      "Parks in every sector",
      "Shops and service pockets",
      "Future planning area reserved for later phases"
    ],
    "connectivity": [
      "Towards Super Corridor",
      "Towards Pitra Parvat",
      "Near NMIMS and Infosys",
      "Towards Airport and Dhar Road",
      "Near the Super Corridor metro line",
      "Close to Hi-Link Villa"
    ],
    "vision": [
      "Township layout",
      "Sector parks",
      "Wide connector road"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Hi-Link Ram Lok"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Village Bada Bangarda, Indore"
    },
    {
      "label": "Developer",
      "value": "Hi Link Group"
    },
    {
      "label": "Configuration",
      "value": "Residential plots across named sectors"
    }
  ],
  "images": [
    "/propertyList/Hi-Link Ram Lok/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Hi-Link Ram Lok/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Hi Link Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 308,
  "title": "Hi-Link Shri Narayan Continental",
  "slug": "hi-link-shri-narayan-continental",
  "location": "Nenod, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Premium Hi-Link Shri Narayan Continental is a large integrated plotted development at Nenod, Indore, planned alongside Premium Hi-Link Greens 'A', Greens 'B' and Greens Parth, between the Super Corridor and the Pithampur Economic Corridor.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "A project by Indra Prem Residency LLP",
        "Four connected schemes - Shri Narayan Continental and Greens 'A', 'B' and Parth",
        "Twelve plot size bands from 15' x 40' up to 40' x 60'",
        "Frontage along the existing 30.0 m wide Hi-Link Premium Corridor road",
        "Between the Super Corridor and the Pithampur Economic Corridor",
        "Adjoining the Emmar MGF land parcel",
        "Site office located on the corridor road"
      ]
    }
  ],
  "sections": {
    "overview": "Hi-Link Shri Narayan Continental by Hi Link Group",
    "amenities": [
      {
        "title": "Master Layout Plan",
        "img": "/propertyList/Narayan 3/img1.jpg"
      }
    ],
    "specifications": [
      "Integrated plotted layout across four schemes at Nenod",
      "Plot sizes of 30' x 50', 25' x 53', 20' x 60', 20' x 50', 20' x 40', 22' x 50', 15' x 45', 15' x 40', 20' x 35', 20' x 29', 40' x 60' and 30' x 60'",
      "Parks distributed across the layout",
      "Existing 30.0 m wide road frontage"
    ],
    "connectivity": [
      "Nenod, Indore",
      "Along the Super Corridor",
      "On the Pithampur Economic Corridor",
      "Towards Ujjain Road and A.B. Road",
      "Towards Dhar / Ahmedabad NH-47",
      "Close to the metro station corridor and international airport"
    ],
    "vision": [
      "Integrated plotted layout",
      "Parks",
      "Corridor frontage"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Hi-Link Shri Narayan Continental"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Nenod, Indore"
    },
    {
      "label": "Developer",
      "value": "Hi Link Group"
    },
    {
      "label": "Project By",
      "value": "Indra Prem Residency LLP"
    },
    {
      "label": "Configuration",
      "value": "Residential plots across four connected schemes"
    }
  ],
  "images": [
    "/propertyList/Narayan 3/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Narayan 3/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Hi Link Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 309,
  "title": "Premium Hi-Link Prestige Park",
  "slug": "premium-hi-link-prestige-park",
  "location": "Nenod, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Premium Hi-Link Prestige Park is a plotted colony at Nenod, Indore, by Indra Prem Residency LLP, laid out with six plot size bands, four internal gardens, landscaped 3.0 m pathways and shop-cum-residential plots along the approach.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "A project by Indra Prem Residency LLP, Sukhaliya, Indore",
        "Six plot size bands - 20' x 40', 20' x 50', 20' x 55', 22' x 45', 25' x 40' and 25' x 45'",
        "Four landscaped gardens inside the colony",
        "9.00 m wide internal roads with 3.00 m wide pathways",
        "Shop-cum-residential plots along the approach road",
        "LIG and EWS plot pockets within the layout",
        "Close to Hi-Link Premium Corridor and Bijasan Temple"
      ]
    }
  ],
  "sections": {
    "overview": "Premium Hi-Link Prestige Park by Hi Link Group",
    "amenities": [
      {
        "title": "Sanctioned Colony Layout",
        "img": "/propertyList/Prestige Park/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotting layout at Nenod",
      "9.00 m wide internal roads and 3.00 m wide pathways",
      "Four garden areas",
      "Shop-cum-residential plots",
      "LIG and EWS plot pockets",
      "Overhead tank / service area"
    ],
    "connectivity": [
      "Nenod, Indore",
      "Near Hi-Link Premium Corridor",
      "Close to the metro station corridor",
      "Near Central School and Bijasan Temple",
      "Towards Indore International Airport"
    ],
    "vision": [
      "Plotted layout",
      "Gardens",
      "Shop-cum-residential frontage"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Premium Hi-Link Prestige Park"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Nenod, Indore"
    },
    {
      "label": "Developer",
      "value": "Hi Link Group"
    },
    {
      "label": "Project By",
      "value": "Indra Prem Residency LLP"
    },
    {
      "label": "Contact",
      "value": "0731-3564685"
    }
  ],
  "images": [
    "/propertyList/Prestige Park/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Prestige Park/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Hi Link Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 310,
  "title": "Platinum Dream City",
  "slug": "platinum-dream-city",
  "location": "Gawli Palasiya, Mhow, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Platinum Dream City by P.G.C. Group is a gated plotted township at Gawli Palasiya, Mhow, with plots from 1,000 to 2,400 sq.ft., a 50 feet wide main road, a covered campus and a full amenity programme built around a clubhouse, temple and jogging track.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Plot sizes from 1,000 sq.ft. to 2,400 sq.ft.",
        "Shops-cum-residential plots of about 2,400 sq.ft. (30' x 80' average)",
        "50 feet wide main road through the township",
        "Covered campus with an exquisite entrance gate and controlled access",
        "Club house, temple and jogging track within the campus",
        "24x7 security with CCTV and underground electricity",
        "Theme-based design with gazebo sittings",
        "Developed by Riddhima Buildcon under P.G.C. Group"
      ]
    }
  ],
  "sections": {
    "overview": "Platinum Dream City by PGC Group",
    "amenities": [
      {
        "title": "Entrance Gate",
        "img": "/propertyList/PGC Platinum Dream City/img1.jpg"
      },
      {
        "title": "Master Layout",
        "img": "/propertyList/PGC Platinum Dream City/img2.jpg"
      },
      {
        "title": "Club House & Temple",
        "img": "/propertyList/PGC Platinum Dream City/img4.jpg"
      },
      {
        "title": "Amenities",
        "img": "/propertyList/PGC Platinum Dream City/img5.jpg"
      },
      {
        "title": "Location Map",
        "img": "/propertyList/PGC Platinum Dream City/img6.jpg"
      }
    ],
    "specifications": [
      "Kids play area",
      "Swimming pool",
      "Space for yoga and meditation",
      "Leisure garden",
      "Multi-sport courts",
      "Party lawn",
      "Gymnasium",
      "24x7 security with CCTV",
      "Underground electricity",
      "Theme based design",
      "Gazebo sittings",
      "50 feet wide main road",
      "Covered campus",
      "Exquisite entrance gate",
      "Controlled access",
      "Club house",
      "Temple",
      "Jogging track"
    ],
    "connectivity": [
      "Mount Litera Zee School - 1 km",
      "Army Public School - 5 km",
      "Gawli Palasiya - 5.5 km",
      "Dr. Ambedkar Nagar - 6.5 km",
      "Rau Circle - 16 km",
      "Pithampur - 18 km"
    ],
    "vision": [
      "Entrance gate",
      "Club house",
      "Temple",
      "Jogging track",
      "Swimming pool",
      "Party lawn"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Platinum Dream City"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Gawli Palasiya, Mhow, Indore"
    },
    {
      "label": "Developer",
      "value": "PGC Group"
    },
    {
      "label": "Plot Sizes",
      "value": "1,000 - 2,400 sq.ft."
    },
    {
      "label": "Developed By",
      "value": "Riddhima Buildcon"
    },
    {
      "label": "Contact",
      "value": "93293 40424, 98264 73605"
    }
  ],
  "images": [
    "/propertyList/PGC Platinum Dream City/img1.jpg",
    "/propertyList/PGC Platinum Dream City/img2.jpg",
    "/propertyList/PGC Platinum Dream City/img3.jpg",
    "/propertyList/PGC Platinum Dream City/img4.jpg",
    "/propertyList/PGC Platinum Dream City/img5.jpg",
    "/propertyList/PGC Platinum Dream City/img6.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/PGC Platinum Dream City/img2.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "PGC Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 311,
  "title": "Platinum Green City",
  "slug": "platinum-green-city",
  "location": "Village Mayakhedi, A.B. Bypass Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Platinum Green City is a delivered integrated township by P.G.C. Group at Village Mayakhedi on the A.B. Bypass Road near Sheraton Grand Palace, with well connected C.C. roads, a four-side secured boundary wall and a kids' play zone with swimming pool and fountains.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered - P-IND-21-2942",
        "Integrated township with well connected internal C.C. roads",
        "Secured gated campus with four side boundary wall and CCTV",
        "Uninterrupted water supply from an overhead tank",
        "Uninterrupted power supply with LED street lights",
        "Separate garden for senior citizens",
        "Kids play zone along with swimming pool and fountains",
        "Jogging track with yoga centre",
        "Plot sizes of 30' x 55' average, 30' x 50', 20' x 50' and 20' x 45'"
      ]
    }
  ],
  "sections": {
    "overview": "Platinum Green City by PGC Group",
    "amenities": [
      {
        "title": "Entrance Gate & Location",
        "img": "/propertyList/Platinum Green City/img1.jpg"
      },
      {
        "title": "Amenities & Master Plan",
        "img": "/propertyList/Platinum Green City/img2.jpg"
      }
    ],
    "specifications": [
      "Integrated township with well connected internal C.C. roads",
      "Secured gated campus with four side boundary wall and C.C.T.V. campus",
      "Uninterrupted water supply from overhead tank",
      "Uninterrupted power supply with LED street light",
      "Separate garden for senior citizens",
      "Kids play zone along with swimming pool and fountains",
      "Jogging track with yoga centre",
      "Township with lush green environment and storm water recharge"
    ],
    "connectivity": [
      "Sun City Vistara - 1.0 km",
      "Sheraton Grand Palace - 2.8 km",
      "Delhi Public School, Indore - 4.0 km",
      "Best Price, Indore - 4.8 km",
      "Bombay Hospital - 8.0 km",
      "The Emerald Heights International School nearby",
      "Indore Tennis Club nearby",
      "On the New Super Bypass"
    ],
    "vision": [
      "Entrance gate",
      "Temple",
      "Swimming pool",
      "Kids play zone",
      "Overhead tank",
      "Landscaped greens"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Platinum Green City"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Village Mayakhedi, A.B. Bypass Road, Indore"
    },
    {
      "label": "Developer",
      "value": "PGC Group"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-21-2942"
    },
    {
      "label": "Developer Name",
      "value": "Mr. Govind Patidar"
    },
    {
      "label": "Contact",
      "value": "93293 40424, 62682-89886"
    }
  ],
  "images": [
    "/propertyList/Platinum Green City/img1.jpg",
    "/propertyList/Platinum Green City/img2.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Platinum Green City/img2.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "PGC Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 312,
  "title": "Platinum Sky City",
  "slug": "platinum-sky-city",
  "location": "Balyakheda, Near Singapore Gold City 2, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Platinum Sky City by P.G.C. Group is a gated plotted township at Balyakheda near Singapore Gold City 2, with plots from 1,000 to 3,600 sq.ft., direct access from the bypass, a clubhouse, swimming pool with waterfall and a multi-sports court.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered - P-IND-23-3931",
        "Plot sizes from 1,000 sq.ft. to 3,600 sq.ft.",
        "Shops-cum-residential plots of 1,200 to 3,600 sq.ft.",
        "Direct access from the bypass",
        "Secure entrance with CCTV camera",
        "Club house, swimming pool with waterfall and outdoor gym",
        "Multi sports court and jogging track",
        "Temple, senior citizen area and community lawn",
        "Emerald Heights School only 0.3 km away"
      ]
    }
  ],
  "sections": {
    "overview": "Platinum Sky City by PGC Group",
    "amenities": [
      {
        "title": "Entrance Gate",
        "img": "/propertyList/Platinum Sky City/img1.jpg"
      },
      {
        "title": "Master Layout",
        "img": "/propertyList/Platinum Sky City/img2.jpg"
      },
      {
        "title": "Club House & Amenities",
        "img": "/propertyList/Platinum Sky City/img3.jpg"
      },
      {
        "title": "Central Garden",
        "img": "/propertyList/Platinum Sky City/img4.jpg"
      },
      {
        "title": "Location Map",
        "img": "/propertyList/Platinum Sky City/img5.jpg"
      }
    ],
    "specifications": [
      "Secure entrance with CCTV camera",
      "Direct access from bypass",
      "Kids play area",
      "Temple",
      "Gymnasium",
      "Jogging track",
      "Multi game court",
      "Senior citizen area",
      "Selfie point",
      "Water supply",
      "Electricity supply",
      "Community lawn",
      "Swimming pool with waterfall",
      "Multi sports court",
      "Club house",
      "Outdoor gym",
      "Gazebo and water body at garden"
    ],
    "connectivity": [
      "Emerald Heights School - 0.3 km",
      "Sun City Vistara - 1.5 km",
      "Sheraton Grand Palace - 2.5 km",
      "Delhi Public School - 5 km",
      "Best Price - 5.5 km",
      "Phoenix Mall - 5.5 km",
      "Bombay Hospitals - 9 km"
    ],
    "vision": [
      "Entrance gate",
      "Club house",
      "Swimming pool",
      "Multi sports court",
      "Central garden"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Platinum Sky City"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Balyakheda, Near Singapore Gold City 2, Indore"
    },
    {
      "label": "Developer",
      "value": "PGC Group"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-23-3931"
    },
    {
      "label": "Plot Sizes",
      "value": "1,000 - 3,600 sq.ft."
    },
    {
      "label": "Director & Developer",
      "value": "Mrs. Sangeeta Govind Patidar"
    },
    {
      "label": "Contact",
      "value": "93293-40424, 62682-89886"
    }
  ],
  "images": [
    "/propertyList/Platinum Sky City/img1.jpg",
    "/propertyList/Platinum Sky City/img2.jpg",
    "/propertyList/Platinum Sky City/img3.jpg",
    "/propertyList/Platinum Sky City/img4.jpg",
    "/propertyList/Platinum Sky City/img5.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Platinum Sky City/img2.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "PGC Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 313,
  "title": "Elis Varun Park",
  "slug": "elis-varun-park",
  "location": "Near Mangliya, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Elis Varun Park is a compact plotted colony by Anishwara Realtors off the 30.00 m wide road towards the bypass near Mangliya, with three landscaped gardens, 3.0 m pathways and shop-cum-residential plots at the entrance.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Frontage on a 30.00 m wide road towards the bypass",
        "Three landscaped gardens within the colony",
        "9.00 m and 12.00 m wide internal roads with 3.0 m pathways",
        "Shop-cum-residential plots at the entrance",
        "Typical plot modules of 6.10 x 18.30 m and 7.00 x 18.50 m average",
        "Two large parcels (P-01 and P-02) within the layout",
        "Service areas provided in the scheme"
      ]
    }
  ],
  "sections": {
    "overview": "Elis Varun Park by Anishwara Realtors",
    "amenities": [
      {
        "title": "Sanctioned Colony Layout",
        "img": "/propertyList/Varun Park/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotting layout",
      "9.00 m and 12.00 m wide internal roads",
      "3.0 m wide pathways",
      "Three garden areas",
      "Shop-cum-residential plots",
      "Service areas"
    ],
    "connectivity": [
      "Towards Mangliya on one side and the bypass on the other",
      "Frontage on a 30.00 m wide road"
    ],
    "vision": [
      "Plotted layout",
      "Gardens",
      "Shop-cum-residential frontage"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Elis Varun Park"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Near Mangliya, Indore"
    },
    {
      "label": "Developer",
      "value": "Anishwara Realtors"
    },
    {
      "label": "Configuration",
      "value": "Residential and shop-cum-residential plots"
    }
  ],
  "images": [
    "/propertyList/Varun Park/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Varun Park/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Anishwara Realtors",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 314,
  "title": "Leeds Paradise Sapphire",
  "slug": "leeds-paradise-sapphire",
  "location": "Gajra, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "2, 3 & 4 BHK",
  "description": "Sapphire Tower is one of five towers at Leeds Paradise, Gajra - alongside Heaven, Orchid, Sunshine and Harmony - offering apartments from about 1,248 sq.ft. to 1,778 sq.ft. with a construction-linked payment plan and retail at the podium level.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Sapphire Tower within the five-tower Leeds Paradise (Gajra) community",
        "Apartment sizes from about 1,248 sq.ft. to 1,778 sq.ft.",
        "Indicative rate of Rs. 4,650 per sq.ft. as published in the payment plan",
        "Construction-linked payment schedule across eleven stages",
        "Booking amount of 25% with agreement",
        "Maintenance charges of Rs. 2.50 per sq.ft. for 3 years",
        "Car parking for one car included; extra car parking available",
        "Retail shops at the podium level of the community"
      ]
    }
  ],
  "sections": {
    "overview": "Leeds Paradise Sapphire by Leeds Developers & Buildcon Pvt. Ltd.",
    "amenities": [
      {
        "title": "Community Sitemap",
        "img": "/propertyList/Leeds Paradise Sapphire/img1.jpg"
      },
      {
        "title": "Payment Plan",
        "img": "/propertyList/Leeds Paradise Sapphire/img2.jpg"
      },
      {
        "title": "Tower Views",
        "img": "/propertyList/Leeds Paradise Sapphire/img8.jpg"
      }
    ],
    "specifications": [
      "Sapphire Tower of the Leeds Paradise community",
      "Flat sizes of about 1,248 sq.ft. and 1,778 sq.ft.",
      "Construction-linked payment plan (plinth, parking slab, level slabs, brick work, floor work and possession)",
      "Electricity charges of Rs. 60 per sq.ft.",
      "Sinking fund of Rs. 30 per sq.ft.",
      "Maintenance at Rs. 2.50 per sq.ft. for 3 years"
    ],
    "connectivity": [
      "Located at Gajra, Indore, within the Leeds Paradise community"
    ],
    "vision": [
      "Community sitemap",
      "Tower elevation",
      "Podium retail"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Leeds Paradise Sapphire"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "Gajra, Indore"
    },
    {
      "label": "Developer",
      "value": "Leeds Developers & Buildcon Pvt. Ltd."
    },
    {
      "label": "Flat Sizes",
      "value": "Approx. 1,248 - 1,778 sq.ft."
    },
    {
      "label": "Indicative Rate",
      "value": "Rs. 4,650 per sq.ft."
    }
  ],
  "images": [
    "/propertyList/Leeds Paradise Sapphire/img1.jpg",
    "/propertyList/Leeds Paradise Sapphire/img2.jpg",
    "/propertyList/Leeds Paradise Sapphire/img3.jpg",
    "/propertyList/Leeds Paradise Sapphire/img4.jpg",
    "/propertyList/Leeds Paradise Sapphire/img5.jpg",
    "/propertyList/Leeds Paradise Sapphire/img6.jpg",
    "/propertyList/Leeds Paradise Sapphire/img7.jpg",
    "/propertyList/Leeds Paradise Sapphire/img8.jpg",
    "/propertyList/Leeds Paradise Sapphire/img9.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Leeds Paradise Sapphire/img3.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Leeds Developers & Buildcon Pvt. Ltd.",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 315,
  "title": "Leeds Paradise Sunshine",
  "slug": "leeds-paradise-sunshine",
  "location": "Gajra, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "2, 3 & 4 BHK",
  "description": "Sunshine Tower is part of the five-tower Leeds Paradise community at Gajra, Indore, alongside Sapphire, Heaven, Orchid and Harmony, with a published construction-linked payment plan and podium-level retail.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Sunshine Tower within the five-tower Leeds Paradise (Gajra) community",
        "Construction-linked payment schedule across eleven stages",
        "Booking amount of 25% with agreement",
        "Maintenance charges of Rs. 2.50 per sq.ft. for 3 years",
        "Electricity charges of Rs. 60 per sq.ft. and sinking fund of Rs. 30 per sq.ft.",
        "Car parking for one car included; extra car parking available",
        "Retail shops at the podium level of the community"
      ]
    }
  ],
  "sections": {
    "overview": "Leeds Paradise Sunshine by Leeds Developers & Buildcon Pvt. Ltd.",
    "amenities": [
      {
        "title": "Community Sitemap",
        "img": "/propertyList/Leeds Paradise Sunshine/img1.jpg"
      },
      {
        "title": "Payment Plan",
        "img": "/propertyList/Leeds Paradise Sunshine/img2.jpg"
      },
      {
        "title": "Tower Views",
        "img": "/propertyList/Leeds Paradise Sunshine/img8.jpg"
      }
    ],
    "specifications": [
      "Sunshine Tower of the Leeds Paradise community",
      "Construction-linked payment plan (plinth, parking slab, level slabs, brick work, floor work and possession)",
      "Electricity charges of Rs. 60 per sq.ft.",
      "Sinking fund of Rs. 30 per sq.ft.",
      "Maintenance at Rs. 2.50 per sq.ft. for 3 years"
    ],
    "connectivity": [
      "Located at Gajra, Indore, within the Leeds Paradise community"
    ],
    "vision": [
      "Community sitemap",
      "Tower elevation",
      "Podium retail"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Leeds Paradise Sunshine"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "Gajra, Indore"
    },
    {
      "label": "Developer",
      "value": "Leeds Developers & Buildcon Pvt. Ltd."
    }
  ],
  "images": [
    "/propertyList/Leeds Paradise Sunshine/img1.jpg",
    "/propertyList/Leeds Paradise Sunshine/img2.jpg",
    "/propertyList/Leeds Paradise Sunshine/img3.jpg",
    "/propertyList/Leeds Paradise Sunshine/img4.jpg",
    "/propertyList/Leeds Paradise Sunshine/img5.jpg",
    "/propertyList/Leeds Paradise Sunshine/img6.jpg",
    "/propertyList/Leeds Paradise Sunshine/img7.jpg",
    "/propertyList/Leeds Paradise Sunshine/img8.jpg",
    "/propertyList/Leeds Paradise Sunshine/img9.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Leeds Paradise Sunshine/img3.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Leeds Developers & Buildcon Pvt. Ltd.",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 316,
  "title": "Leeds Premier",
  "slug": "leeds-premier",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "3 BHK",
  "description": "Leeds Premier by Leeds Developers is a high-rise residential tower with nine apartments per floor ranging from about 1,471 sq.ft. to 1,842 sq.ft. super built-up area, planned around a central lobby with twin lifts.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Nine apartments per floor",
        "Super built-up areas from about 1,471 sq.ft. to 1,842 sq.ft.",
        "Largest home on the floor plate at about 1,842 sq.ft.",
        "Central lobby with twin lifts and staircase",
        "Homes planned with balcony, store and separate dining",
        "High-rise elevation with a lit street-facing frontage"
      ]
    }
  ],
  "sections": {
    "overview": "Leeds Premier by Leeds Developers & Buildcon Pvt. Ltd.",
    "amenities": [
      {
        "title": "Typical Floor Plan",
        "img": "/propertyList/Leeds Premier/img1.jpg"
      },
      {
        "title": "Tower Elevation",
        "img": "/propertyList/Leeds Premier/img2.jpg"
      }
    ],
    "specifications": [
      "Nine flats per typical floor",
      "Flat 1 - 1,715 sq.ft.; Flat 2 - 1,842 sq.ft.; Flat 3 - 1,592 sq.ft.",
      "Flat 4 - 1,563 sq.ft.; Flat 5 - 1,618 sq.ft.; Flat 6 - 1,635 sq.ft.",
      "Flat 7 - 1,471 sq.ft.; Flat 8 - 1,618 sq.ft.; Flat 9 - 1,563 sq.ft.",
      "Central lobby with two lifts",
      "Balcony, store and dress areas in every unit"
    ],
    "connectivity": [
      "Contact the sales team for the detailed site connectivity sheet"
    ],
    "vision": [
      "Tower elevation",
      "Typical floor plate",
      "Street frontage"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Leeds Premier"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Leeds Developers & Buildcon Pvt. Ltd."
    },
    {
      "label": "Flats Per Floor",
      "value": "9"
    },
    {
      "label": "Flat Sizes",
      "value": "Approx. 1,471 - 1,842 sq.ft."
    }
  ],
  "images": [
    "/propertyList/Leeds Premier/img1.jpg",
    "/propertyList/Leeds Premier/img2.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Leeds Premier/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Leeds Developers & Buildcon Pvt. Ltd.",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 317,
  "title": "Leeds Garden City",
  "slug": "leeds-garden-city",
  "location": "Super Corridor, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Leeds Garden City is a plotted township by Leeds Developers along the Super Corridor near Pitra Parvat and the metro line, with over 300 plots, shop-cum-residential frontage units, landscaped green pockets and a clubhouse with swimming pool.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Over 300 numbered plots across the township",
        "Shop-cum-residential units along the Super Corridor frontage",
        "Club house with swimming pool",
        "Landscaped green pockets between plot rows",
        "Gated entry from the main corridor road",
        "Close to Pitra Parvat and the metro corridor",
        "Near Nanda Nagar Mahila College"
      ]
    }
  ],
  "sections": {
    "overview": "Leeds Garden City by Leeds Developers & Buildcon Pvt. Ltd.",
    "amenities": [
      {
        "title": "Township Layout",
        "img": "/propertyList/Leeds Garden City/img1.jpg"
      }
    ],
    "specifications": [
      "Plotted township layout with numbered plots",
      "Shop-cum-residential frontage units",
      "Club house with swimming pool",
      "Landscaped green pockets",
      "Gated entry from the main road"
    ],
    "connectivity": [
      "On the Super Corridor, Indore",
      "Close to Pitra Parvat",
      "Near the metro corridor",
      "Near Nanda Nagar Mahila College"
    ],
    "vision": [
      "Township layout",
      "Club house",
      "Green pockets",
      "Corridor frontage"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Leeds Garden City"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Super Corridor, Indore"
    },
    {
      "label": "Developer",
      "value": "Leeds Developers & Buildcon Pvt. Ltd."
    },
    {
      "label": "Configuration",
      "value": "Residential plots and shop-cum-residential units"
    }
  ],
  "images": [
    "/propertyList/Leeds Garden City/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Leeds Garden City/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Leeds Developers & Buildcon Pvt. Ltd.",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 318,
  "title": "Shree Raaj Vihar",
  "slug": "shree-raaj-vihar",
  "location": "MR-11 Main Road, Near Nipania Circle, Pipliya Kumar, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Shree Raaj Vihar (SRV) is a 7.5 acre gated plotted community with direct access from MR-11, near Nipania Circle in Pipliya Kumar, Indore. The scheme combines a secure entrance, club house, swimming pool and sports facilities with fully serviced plots.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered - P-DPL-21-3072",
        "7.5 acre gated community with direct access from MR-11",
        "Secure entrance with a landscaped arrival plaza",
        "Club house with swimming pool and gymnasium",
        "Multi-purpose court, game room and amphitheatre",
        "Mandir, reflexology park and senior citizen garden",
        "Jogging track, cycling track and vegetable garden",
        "Underground cabling for electricity, pathways and broadband fibre optics",
        "Nearly sold out in its early phase itself"
      ]
    }
  ],
  "sections": {
    "overview": "Shree Raaj Vihar by SRV Group",
    "amenities": [
      {
        "title": "Amenities Collage",
        "img": "/propertyList/Shree Raj Vihar/img1.jpg"
      },
      {
        "title": "Grand Entrance",
        "img": "/propertyList/Shree Raj Vihar/img3.jpg"
      },
      {
        "title": "The Good Facts",
        "img": "/propertyList/Shree Raj Vihar/img4.jpg"
      },
      {
        "title": "Site Layout Plan",
        "img": "/propertyList/Shree Raj Vihar/img3.jpg"
      }
    ],
    "specifications": [
      "Direct access from MR-11",
      "7.5 acres community",
      "Secure entrance",
      "Multi-purpose court",
      "Kids play zone",
      "Amphitheatre",
      "Mandir",
      "Club house",
      "Swimming pool",
      "Gymnasium",
      "Community hall",
      "Game room",
      "Reflexology park",
      "Senior citizen garden",
      "Jogging track",
      "Vegetable garden",
      "Cycling track",
      "Water supply during peak hours",
      "Electricity supply with generator set back-up",
      "Underground cabling for electricity, pathways and broadband fibre optics"
    ],
    "connectivity": [
      "On MR-11 Main Road near Nipania Circle",
      "Towards A.B. Road and the bypass",
      "Close to Bombay Hospital and Chaudhary Ex-Grabo",
      "Near Hotel Sheraton",
      "Near Golden Leaves and Bhawan School"
    ],
    "vision": [
      "Grand entrance",
      "Club house",
      "Swimming pool",
      "Sports courts",
      "Landscaped avenues"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Shree Raaj Vihar"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "MR-11 Main Road, Pipliya Kumar, Indore"
    },
    {
      "label": "Developer",
      "value": "SRV Group"
    },
    {
      "label": "RERA No.",
      "value": "P-DPL-21-3072"
    },
    {
      "label": "Project By",
      "value": "K.U. Enterprises Pvt. Ltd."
    },
    {
      "label": "Land Area",
      "value": "7.5 acres"
    }
  ],
  "images": [
    "/propertyList/Shree Raj Vihar/img1.jpg",
    "/propertyList/Shree Raj Vihar/img2.jpg",
    "/propertyList/Shree Raj Vihar/img3.jpg",
    "/propertyList/Shree Raj Vihar/img4.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Shree Raj Vihar/img3.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "SRV Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 319,
  "title": "Drushika Ayodhyapuram",
  "slug": "drushika-ayodhyapuram",
  "location": "Super Corridor, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Drushika Ayodhyapuram is a devotional themed plotted colony dedicated to Maryada Purushottam Shri Ram, where specially designed gardens carry statues and installations narrating chapters from his life, set within a calm, noise-free environment.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Plotted colony themed on the life and ideals of Shri Ram",
        "Specially designed theme gardens with grand statues and installations",
        "Balaram Dhyan and other themed garden chapters within the colony",
        "Calm, noise-free environment planned for families",
        "Theme-based gardens designed as a learning space for children",
        "A blend of modern conveniences and spiritual calm",
        "Marketed by Drushika Real Estate on the Super Corridor"
      ]
    }
  ],
  "sections": {
    "overview": "Drushika Ayodhyapuram by Drushika Real Estate",
    "amenities": [
      {
        "title": "Theme Garden",
        "img": "/propertyList/Ayodhyapuram/img2.jpg"
      },
      {
        "title": "Sculpture Plaza",
        "img": "/propertyList/Ayodhyapuram/img3.jpg"
      },
      {
        "title": "Master Layout",
        "img": "/propertyList/Ayodhyapuram/img6.jpg"
      }
    ],
    "specifications": [
      "Themed plotted colony",
      "Multiple theme gardens with sculptures",
      "Landscaped open spaces",
      "Planned internal road network",
      "Modern amenities alongside spiritual spaces"
    ],
    "connectivity": [
      "On the Super Corridor, Indore",
      "Head office at Singapore Lifestyle, Super Corridor, Near TCS Square, Indore"
    ],
    "vision": [
      "Theme gardens",
      "Sculpture installations",
      "Landscaped plaza",
      "Plotted layout"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Drushika Ayodhyapuram"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Super Corridor, Indore"
    },
    {
      "label": "Developer",
      "value": "Drushika Real Estate"
    },
    {
      "label": "Configuration",
      "value": "Residential plots"
    },
    {
      "label": "Website",
      "value": "www.drushikarealestate.com"
    }
  ],
  "images": [
    "/propertyList/Ayodhyapuram/img1.jpg",
    "/propertyList/Ayodhyapuram/img2.jpg",
    "/propertyList/Ayodhyapuram/img3.jpg",
    "/propertyList/Ayodhyapuram/img4.jpg",
    "/propertyList/Ayodhyapuram/img5.jpg",
    "/propertyList/Ayodhyapuram/img6.jpg",
    "/propertyList/Ayodhyapuram/img7.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Ayodhyapuram/img6.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Drushika Real Estate",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 320,
  "title": "Drushika Imperial & Paradise Grande",
  "slug": "drushika-imperial-paradise-grande",
  "location": "Super Corridor, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Drushika Imperial and Paradise Grande together form a plotted township on the Super Corridor spread over more than 100 acres of covered campus, offering plots from 800 to 3,000 sq.ft. with themed gardens, an open sitting area with temple and a vastu-compliant layout.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered - P-OTH-24-4784",
        "Available plot sizes of 800, 1,000, 1,200, 1,500, 2,000 and up to 3,000 sq.ft.",
        "Spread over more than 100 acres of covered campus",
        "Completely legal and RERA approved",
        "C.C. road, underground electric line, storm water line, sewer line and MTP",
        "Multiple play zones with garden area",
        "Open sitting area with temple",
        "Vastu compliant layout with light and water facility",
        "Loan facility available from all public and private banks"
      ]
    }
  ],
  "sections": {
    "overview": "Drushika Imperial & Paradise Grande by Drushika Real Estate",
    "amenities": [
      {
        "title": "Grand Entrance",
        "img": "/propertyList/Drushika Imperial/img1.jpg"
      },
      {
        "title": "Amenities",
        "img": "/propertyList/Drushika Imperial/img3.jpg"
      },
      {
        "title": "Landscaped Plaza",
        "img": "/propertyList/Drushika Imperial/img4.jpg"
      },
      {
        "title": "Master Layout",
        "img": "/propertyList/Drushika Imperial/img6.jpg"
      },
      {
        "title": "Location Map",
        "img": "/propertyList/Drushika Imperial/img7.jpg"
      }
    ],
    "specifications": [
      "Play area",
      "Temple",
      "Yoga and meditation deck",
      "Gazebo",
      "Open garden gym",
      "Vastu compliant planning",
      "C.C. roads with underground electric line",
      "Storm water line and sewer line",
      "Designed by experienced architects and engineers",
      "Complete light and water facility",
      "Loan facility from public and private banks"
    ],
    "connectivity": [
      "Paliya Railway Station - 3 km",
      "TCS Square - 4 km",
      "Metro Station - 4 km",
      "Aurobindo Hospital - 4.5 km",
      "Sports Complex - 5 km",
      "Taaj Hotel - 5 km",
      "Love Kush Square - 7 km",
      "Symbiosis University - 8 km",
      "Narsee Monjee University - 9 km",
      "Airport - 10 km",
      "ISBT MR-10 - 12 km",
      "Rajwada - 12 km"
    ],
    "vision": [
      "Grand entrance",
      "Theme gardens",
      "Water fountain",
      "Open sitting plaza"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Drushika Imperial & Paradise Grande"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Super Corridor, Indore"
    },
    {
      "label": "Developer",
      "value": "Drushika Real Estate"
    },
    {
      "label": "RERA No.",
      "value": "P-OTH-24-4784"
    },
    {
      "label": "Plot Sizes",
      "value": "800 - 3,000 sq.ft."
    }
  ],
  "images": [
    "/propertyList/Drushika Imperial/img1.jpg",
    "/propertyList/Drushika Imperial/img2.jpg",
    "/propertyList/Drushika Imperial/img3.jpg",
    "/propertyList/Drushika Imperial/img4.jpg",
    "/propertyList/Drushika Imperial/img5.jpg",
    "/propertyList/Drushika Imperial/img6.jpg",
    "/propertyList/Drushika Imperial/img7.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Drushika Imperial/img6.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Drushika Real Estate",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 321,
  "title": "Drushika Premium",
  "slug": "drushika-premium",
  "location": "Puwarda Junarda, Near TCS Square, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Drushika Premium is a plotted development at Puwarda Junarda near TCS Square on Indore's Super Corridor, with plots from 420 sq.ft. EWS units up to 4,500 sq.ft. general plots, theme landscaping, an open air theatre and a published quality standard for construction.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Plot sizes from 800 sq.ft. up to 4,500 sq.ft. for general plots",
        "LIG plots of 18' x 40' (720 sq.ft.) and EWS plots of 12' x 35' (420 sq.ft.)",
        "Elegant gates with security guard cabin and 24x7 CCTV surveillance",
        "9 metre and 12 metre wide internal roads",
        "LED fountains and theme landscaping",
        "Open air theatre and open air gym with fitness area",
        "Published quality standard - M40 concrete, 14 inch road thickness, 8x20 inch plot beams",
        "STP with advanced filtration system and water recharging point"
      ]
    }
  ],
  "sections": {
    "overview": "Drushika Premium by Drushika Real Estate",
    "amenities": [
      {
        "title": "Entrance Gate",
        "img": "/propertyList/Drushika Premium/img2.jpg"
      },
      {
        "title": "Master Layout & Features",
        "img": "/propertyList/Drushika Premium/img3.jpg"
      },
      {
        "title": "Theme Landscaping",
        "img": "/propertyList/Drushika Premium/img4.jpg"
      },
      {
        "title": "Quality Standard & Location",
        "img": "/propertyList/Drushika Premium/img5.jpg"
      }
    ],
    "specifications": [
      "Lush lawns, kids play area and gazebos",
      "Designated plot boundaries",
      "LED fountains and theme landscaping",
      "Open air theatre for functions",
      "Elegant gates with security guard cabin",
      "Designer street lights",
      "24x7 CCTV surveillance",
      "9 metre and 12 metre wide roads",
      "Security 24x7",
      "Open air gym and fitness area",
      "Jogging track",
      "Signages and direction boards",
      "Iconic feature wall",
      "Road thickness 14 inch",
      "Plot beam 8x20 inches and column beam 8x12 inches",
      "Iron bar up to 16 mm and M40 grade concrete",
      "Soft EPDM play area surface",
      "Customised underground electrification light poles",
      "Customised pavers and curve stone",
      "STP with advanced filtration system",
      "Water recharging point"
    ],
    "connectivity": [
      "Near TCS Square on the Super Corridor",
      "Close to Infosys and TCS campuses",
      "Near Symbiosis University",
      "Aurobindo Hospital nearby",
      "Metro Station and Indore Airport on the corridor",
      "Proposed Convention Centre and Start-Up Park nearby",
      "Towards Vijay Nagar and Marimata"
    ],
    "vision": [
      "Grand entrance",
      "Theme landscaping",
      "Kids play area",
      "Open air theatre",
      "Canopy and gazebo seating"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Drushika Premium"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Puwarda Junarda, Near TCS Square, Indore"
    },
    {
      "label": "Developer",
      "value": "Drushika Real Estate"
    },
    {
      "label": "Plot Sizes",
      "value": "420 - 4,500 sq.ft."
    },
    {
      "label": "Corporate Office",
      "value": "Singapore Lifestyle, Super Corridor, Near TCS Square, Indore"
    }
  ],
  "images": [
    "/propertyList/Drushika Premium/img1.jpg",
    "/propertyList/Drushika Premium/img2.jpg",
    "/propertyList/Drushika Premium/img3.jpg",
    "/propertyList/Drushika Premium/img4.jpg",
    "/propertyList/Drushika Premium/img5.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Drushika Premium/img3.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Drushika Real Estate",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 322,
  "title": "The Heera Residency",
  "slug": "the-heera-residency",
  "location": "Super Corridor, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "The Heera Residency by Drushika Group offers thoughtfully planned plots in the heart of Indore's Super Corridor, combining modern infrastructure with a serene setting, a swimming pool, amphitheatre, swinging garden and water fountain.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Prime Super Corridor location with excellent connectivity",
        "Plots designed to maximise space and functionality",
        "Future-ready amenities for a modern lifestyle",
        "Close to IT hubs, schools, hospitals and the airport",
        "Swimming pool within the community",
        "Amphitheatre and swinging garden",
        "Water fountain and landscape garden",
        "9 metre and 12 metre wide roads with 3 metre pathways"
      ]
    }
  ],
  "sections": {
    "overview": "The Heera Residency by Drushika Real Estate",
    "amenities": [
      {
        "title": "Lifestyle Amenities",
        "img": "/propertyList/The Heera Residency/img2.jpg"
      },
      {
        "title": "Master Layout",
        "img": "/propertyList/The Heera Residency/img3.jpg"
      },
      {
        "title": "Landscape Views",
        "img": "/propertyList/The Heera Residency/img5.jpg"
      }
    ],
    "specifications": [
      "Swimming pool",
      "Amphitheatre",
      "Swinging garden",
      "Water fountain",
      "Landscape garden",
      "9 M and 12 M wide roads",
      "3 M wide pathways",
      "Thoughtfully planned plot sizes"
    ],
    "connectivity": [
      "In the heart of the Super Corridor, Indore",
      "Close to IT hubs, schools, hospitals and the airport"
    ],
    "vision": [
      "Swimming pool",
      "Amphitheatre",
      "Swinging garden",
      "Water fountain"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "The Heera Residency"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Super Corridor, Indore"
    },
    {
      "label": "Developer",
      "value": "Drushika Real Estate"
    },
    {
      "label": "Configuration",
      "value": "Residential plots"
    }
  ],
  "images": [
    "/propertyList/The Heera Residency/img1.jpg",
    "/propertyList/The Heera Residency/img2.jpg",
    "/propertyList/The Heera Residency/img3.jpg",
    "/propertyList/The Heera Residency/img4.jpg",
    "/propertyList/The Heera Residency/img5.jpg",
    "/propertyList/The Heera Residency/img6.jpg",
    "/propertyList/The Heera Residency/img7.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/The Heera Residency/img3.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Drushika Real Estate",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 323,
  "title": "Drushika Vrindavan",
  "slug": "drushika-vrindavan",
  "location": "Puwarda Junarda, Near TCS Square, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Drushika Vrindavan - 'where devotion meets lifestyle' - is a spiritually themed plotted development at Puwarda Junarda near TCS Square, organised into seven named vatikas: Madhuban, Govardhan, Vishram, Raas, Dyut, Krishna and Leela Vatika.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Seven themed vatikas - Madhuban, Govardhan, Vishram, Raas, Dyut, Krishna and Leela Vatika",
        "Grand themed entrance gate with peacock-feather motif",
        "Kitchen garden and statues depicting Krishna's pastimes",
        "Open air amphitheatre for cultural performances",
        "Mahakhandan practice area for strength and discipline",
        "Sacred trees and seating for pooja",
        "Overhead water tank and compound wall to the campus",
        "Published quality standard for roads, beams, concrete and electrification"
      ]
    }
  ],
  "sections": {
    "overview": "Drushika Vrindavan by Drushika Real Estate",
    "amenities": [
      {
        "title": "Entrance Gate",
        "img": "/propertyList/Drushika Vrindavan/img2.jpg"
      },
      {
        "title": "Madhuban & Govardhan Vatika",
        "img": "/propertyList/Drushika Vrindavan/img3.jpg"
      },
      {
        "title": "Master Layout",
        "img": "/propertyList/Drushika Vrindavan/img4.jpg"
      },
      {
        "title": "Themed Vatikas",
        "img": "/propertyList/Drushika Vrindavan/img5.jpg"
      },
      {
        "title": "Amenities",
        "img": "/propertyList/Drushika Vrindavan/img6.jpg"
      }
    ],
    "specifications": [
      "Kids play area",
      "Open air gym",
      "Pickleball court",
      "Acupressure track",
      "Meditation area for health and wellness",
      "Gazebos and pergola",
      "Open air amphitheatre for cultural performances",
      "Mahakhandan practice area",
      "Sacred trees and seating for pooja",
      "Kitchen garden and statues depicting Krishna's pastimes",
      "Compound wall and overhead water tank",
      "Published quality standard for construction"
    ],
    "connectivity": [
      "Near TCS Square on the Super Corridor",
      "Palia Railway Station nearby",
      "Aurobindo Hospital and Love Kush Square nearby",
      "Towards Vijay Nagar",
      "Near Symbiosis University and Infosys",
      "Indore Airport on the corridor",
      "Near Rewti Hills and Mahakal Lok road"
    ],
    "vision": [
      "Themed entrance gate",
      "Madhuban Vatika",
      "Govardhan Vatika",
      "Krishna Vatika",
      "Amphitheatre"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Drushika Vrindavan"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Puwarda Junarda, Near TCS Square, Indore"
    },
    {
      "label": "Developer",
      "value": "Drushika Real Estate"
    },
    {
      "label": "Configuration",
      "value": "Residential plots across seven themed vatikas"
    },
    {
      "label": "Site Address",
      "value": "Near TCS Square, Indore, Puwarda Junarda, M.P. 452005"
    }
  ],
  "images": [
    "/propertyList/Drushika Vrindavan/img1.jpg",
    "/propertyList/Drushika Vrindavan/img2.jpg",
    "/propertyList/Drushika Vrindavan/img3.jpg",
    "/propertyList/Drushika Vrindavan/img4.jpg",
    "/propertyList/Drushika Vrindavan/img5.jpg",
    "/propertyList/Drushika Vrindavan/img6.jpg",
    "/propertyList/Drushika Vrindavan/img7.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Drushika Vrindavan/img4.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Drushika Real Estate",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 324,
  "title": "Cliffton Palladium",
  "slug": "cliffton-palladium",
  "location": "Scheme No. 140, RE2 Road, Bicholi Mardana, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "3, 4 & 5 BHK",
  "description": "Cliffton Palladium is an ultra-luxurious apartment development at Scheme No. 140 on the RE2 Road, Bicholi Mardana, planned as the Zurich and Marina towers with super-sized 3, 4 and 5 bed residences, a biometric-secured double-height lobby and rooftop amenities.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered - P-IND-24-4694",
        "Zurich 1, Zurich 2, Zurich 3 and Marina 1 towers",
        "Super sized 3, 4 and 5 bed opulent residences",
        "Bio-metric secured ground floor entrance lobby",
        "Double-heighted ground floor lobby with waiting lounge",
        "French windows offering abundance of natural light",
        "Buildings designed for earthquake loads as per applicable I.S. Code",
        "Rooftop amenities and gated campus",
        "Developed by Vertical Homes, designed by Akshay Associates"
      ]
    }
  ],
  "sections": {
    "overview": "Cliffton Palladium by Cliffton Group",
    "amenities": [
      {
        "title": "Superlative Amenities",
        "img": "/propertyList/Palladium/img2.jpg"
      },
      {
        "title": "Zurich Master Layout",
        "img": "/propertyList/Palladium/img4.jpg"
      },
      {
        "title": "Zurich Floor Plans",
        "img": "/propertyList/Palladium/img5.jpg"
      },
      {
        "title": "Marina Floor Plans",
        "img": "/propertyList/Palladium/img7.jpg"
      },
      {
        "title": "Location",
        "img": "/propertyList/Palladium/img9.jpg"
      }
    ],
    "specifications": [
      "Domal type UPVC series aluminium windows",
      "High-end CP and sanitary fittings (equivalent to Grohe and similar brands)",
      "Superior quality plastic enamel",
      "Smart switches in living, drawing and kitchen area",
      "Key card / biometric access in lift",
      "High-end IS-marked electric fixtures and fittings",
      "Full height bathroom tiles",
      "Hot and cold water mixture in wash basin",
      "Shower partition (cubicle) in all bathrooms",
      "Smart lock with video door phone",
      "Extra heighted ceiling and double heighted drawing and balcony",
      "Dry island platform in kitchen with sound reduction windows",
      "Satin finish tiles 3 by 5 or larger in dining / living / kitchen",
      "Wooden flooring in double heighted drawing and one master bedroom",
      "5 ft wide grand double door entrance",
      "Double bowl quartz kitchen sink",
      "Ample car parking space",
      "24x7 security covered campus",
      "Sprawling sundecks with sweeping views of sunsets",
      "CCTV surveillance",
      "Fire sprinkler system for all parking levels",
      "Open kitchen",
      "Roof top amenities",
      "Inbuilt gas pipeline",
      "Gated campus"
    ],
    "connectivity": [
      "Scheme No. 140 on the Main RE2 Road, Bicholi Mardana",
      "Near Agarwal Public School",
      "Close to Bicholi Mardana and Ring Road",
      "Towards Bengali Square and Kanadiya"
    ],
    "vision": [
      "Swimming pool",
      "Yoga room and steam",
      "Gym",
      "Rooftop turf",
      "24x7 power back-up"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Cliffton Palladium"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "Scheme No. 140, RE2 Road, Bicholi Mardana, Indore"
    },
    {
      "label": "Developer",
      "value": "Cliffton Group"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-24-4694"
    },
    {
      "label": "Configuration",
      "value": "3, 4 and 5 bed residences"
    },
    {
      "label": "Developed By",
      "value": "Vertical Homes"
    },
    {
      "label": "Architect",
      "value": "Akshay Associates"
    },
    {
      "label": "Contact",
      "value": "88428 02757, +91 93163 34000"
    }
  ],
  "images": [
    "/propertyList/Palladium/img1.jpg",
    "/propertyList/Palladium/img3.jpg",
    "/propertyList/Palladium/img4.jpg",
    "/propertyList/Palladium/img6.jpg",
    "/propertyList/Palladium/img7.jpg",
    "/propertyList/Palladium/img9.jpg",
    "/propertyList/Palladium/img11.jpg",
    "/propertyList/Palladium/img12.jpg",
    "/propertyList/Palladium/img14.jpg",
    "/propertyList/Palladium/img16.jpg",
    "/propertyList/Palladium/img17.jpg",
    "/propertyList/Palladium/img19.jpg",
    "/propertyList/Palladium/img20.jpg",
    "/propertyList/Palladium/img22.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Palladium/img4.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Cliffton Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 325,
  "title": "Shri Krishna The Divine",
  "slug": "shri-krishna-the-divine",
  "location": "Kanadia Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "3 & 4 BHK",
  "description": "Shri Krishna The Divine is a landmark of luxury on Kanadia Road, offering 3 BHK homes of about 2,859 and 3,237 sq.ft. and 4 BHK homes of about 4,330 sq.ft., with 23 feet open balconies, a double-height entry lobby and vastu-friendly planning.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "3 BHK homes of about 2,859 sq.ft. and 3,237 sq.ft.",
        "4 BHK homes of about 4,330 sq.ft.",
        "23 feet open balconies",
        "Double-height entry lobby",
        "Two entrances and two fast elevators",
        "3 side open flats with a two-way security system",
        "Vastu-friendly homes with servant room",
        "Multipurpose hall and terrace garden"
      ]
    }
  ],
  "sections": {
    "overview": "Shri Krishna The Divine by Shrikrishna Devcon Limited",
    "amenities": [
      {
        "title": "Landmark of Comfort",
        "img": "/propertyList/The Divine/img6.jpg"
      },
      {
        "title": "Master Layout Plan",
        "img": "/propertyList/The Divine/img7.jpg"
      },
      {
        "title": "Typical Floor Plan",
        "img": "/propertyList/The Divine/img8.jpg"
      },
      {
        "title": "4 BHK Plan",
        "img": "/propertyList/The Divine/img9.jpg"
      },
      {
        "title": "3 BHK Plan",
        "img": "/propertyList/The Divine/img11.jpg"
      }
    ],
    "specifications": [
      "Two entrances to the campus",
      "2 fast elevators",
      "3 side open flats",
      "Multipurpose hall",
      "Vastu-friendly homes",
      "Double-height entry lobby",
      "Two-way security system",
      "Servant room",
      "Dedicated 2 car parking",
      "Kids play area",
      "Multi-purpose court for pickle ball, badminton and half-basketball",
      "Yoga space",
      "23 feet open balconies",
      "Terrace garden",
      "Temple"
    ],
    "connectivity": [
      "Daily essentials - 5 minutes",
      "Shopping malls - 10 minutes",
      "Schools and colleges - 15 minutes",
      "Near Phoenix Hospital and Zodiac Mall",
      "Close to Scheme No. 140 and the New District Court",
      "Near Pipliyana Lake and Shri Vaishnav Dham",
      "Towards Palasia, Khajrana, World Cup Square and Sanchar Nagar"
    ],
    "vision": [
      "Landmark elevation",
      "Terrace garden",
      "Multi-purpose court",
      "Entry lobby"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Shri Krishna The Divine"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "Kanadia Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Shrikrishna Devcon Limited"
    },
    {
      "label": "Configuration",
      "value": "3 BHK (2,859 / 3,237 sq.ft.) and 4 BHK (4,330 sq.ft.)"
    }
  ],
  "images": [
    "/propertyList/The Divine/img1.jpg",
    "/propertyList/The Divine/img3.jpg",
    "/propertyList/The Divine/img4.jpg",
    "/propertyList/The Divine/img6.jpg",
    "/propertyList/The Divine/img7.jpg",
    "/propertyList/The Divine/img9.jpg",
    "/propertyList/The Divine/img10.jpg",
    "/propertyList/The Divine/img12.jpg",
    "/propertyList/The Divine/img13.jpg",
    "/propertyList/The Divine/img15.jpg",
    "/propertyList/The Divine/img16.jpg",
    "/propertyList/The Divine/img18.jpg",
    "/propertyList/The Divine/img19.jpg",
    "/propertyList/The Divine/img21.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/The Divine/img8.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Shrikrishna Devcon Limited",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 326,
  "title": "Malwa County",
  "slug": "malwa-county",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots, 2 & 3 BHK",
  "description": "Malwa County by Satya Group is an integrated township at Indore combining residential plots of 1,500 to 4,050 sq.ft. with group housing towers, Malwa Heights apartments, Malwa Jewels row houses, a shopping complex, primary school, nursing home and a state-of-the-art clubhouse.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Integrated township with plots, group housing, row houses and commercial",
        "Plot sizes of 1,500, 1,800, 2,700 and 4,050 sq.ft.",
        "Group housing with 192 two-BHK and 240 three-BHK flats",
        "Malwa Heights with 58 two-BHK and 36 three-BHK flats",
        "Malwa Jewels row houses within the township",
        "State-of-the-art club house",
        "Primary school of about 5,199.72 sq.m. and a nursing home",
        "Shopping complex, commercial zone and corporate office block",
        "EWS housing block within the township",
        "60.00 m wide road frontage"
      ]
    }
  ],
  "sections": {
    "overview": "Malwa County by Satya Group",
    "amenities": [
      {
        "title": "Township Layout Plan",
        "img": "/propertyList/Malwa County/img1.jpg"
      }
    ],
    "specifications": [
      "Plot sizes of 9.14 x 15.23 m (1,500 sq.ft.), 9.14 x 18.28 m (1,800 sq.ft.), 10.06 x 22.55 m (2,700 sq.ft.) and 13.72 x 27.43 m (4,050 sq.ft.)",
      "Group housing towers with 2 BHK and 3 BHK flats",
      "Malwa Heights apartment blocks",
      "Malwa Jewels row houses",
      "State-of-the-art club house",
      "Primary school and nursing home",
      "Shopping complex and corporate office",
      "EWS housing",
      "Open greens and gardens through the layout",
      "9 m, 12 m, 15 m and 18 m wide internal roads"
    ],
    "connectivity": [
      "60.00 m wide road frontage",
      "Towards Ahmedabad on one side",
      "Towards Mumbai / Mhow on the other",
      "Along the East Ring Centre corridor"
    ],
    "vision": [
      "Club house",
      "Group housing",
      "Row houses",
      "Shopping complex",
      "Landscaped greens"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Malwa County"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Satya Group"
    },
    {
      "label": "Plot Sizes",
      "value": "1,500 - 4,050 sq.ft."
    },
    {
      "label": "Website",
      "value": "www.satyadevelopers.com"
    }
  ],
  "images": [
    "/propertyList/Malwa County/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Malwa County/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Satya Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 327,
  "title": "VKG Devbhumi",
  "slug": "vkg-devbhumi",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "VKG Devbhumi is a plotted colony by VK Gupta Group planned around a 16,764 sq.ft. central park with additional pocket parks, residential and commercial plots, and service areas distributed across the layout.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Central park of about 16,764 sq.ft.",
        "Additional parks of about 18,394 sq.ft., 6,838 sq.ft. and 6,704 sq.ft.",
        "Plot modules of 45' x 15', 50' x 18', 50' x 20', 55' x 20' and 60' x 20'",
        "Residential and commercial plot mix",
        "Service areas provided within the layout",
        "Site plan prepared by Genesis Design Studio"
      ]
    }
  ],
  "sections": {
    "overview": "VKG Devbhumi by VK Gupta Group",
    "amenities": [
      {
        "title": "Sanctioned Site Plan",
        "img": "/propertyList/VKG Devbhumi/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotting layout",
      "Central park and multiple pocket parks",
      "Residential and commercial plots",
      "Service areas within the colony",
      "Planned internal road grid"
    ],
    "connectivity": [
      "Contact the sales team for the detailed site connectivity sheet"
    ],
    "vision": [
      "Central park",
      "Plotted layout",
      "Commercial frontage"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "VKG Devbhumi"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "VK Gupta Group"
    },
    {
      "label": "Configuration",
      "value": "Residential and commercial plots"
    }
  ],
  "images": [
    "/propertyList/VKG Devbhumi/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/VKG Devbhumi/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "VK Gupta Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 328,
  "title": "Springfield",
  "slug": "springfield-vk-gupta-group",
  "location": "A.B. Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Springfield by VK Gupta Group is a plotted colony off A.B. Road with plots from 420 sq.ft. EWS units up to 1,200 sq.ft., a clubhouse with swimming pool, a 21,285 sq.ft. sports park, a 10,322 sq.ft. central park and a dedicated elder's park.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Eleven plot categories from 420 sq.ft. up to 1,200 sq.ft.",
        "General plots of 20' x 60', 20' x 55', 20' x 54', 20' x 50', 20' x 47', 17' x 45', 15' x 45', 15' x 40' and 15' x 38'",
        "LIG plots of 18' x 55' (990 sq.ft.) and EWS plots of 12' x 35' (420 sq.ft.)",
        "Sports park of about 21,285 sq.ft. with cricket and football pitches",
        "Central park of about 10,322 sq.ft. with clubhouse and swimming pool",
        "Elder's park of about 5,451 sq.ft. with an open air theatre",
        "Entrance plaza with landscaped arrival court",
        "9.0 metre wide internal roads and a 30 metre wide road frontage"
      ]
    }
  ],
  "sections": {
    "overview": "Springfield by VK Gupta Group",
    "amenities": [
      {
        "title": "Sanctioned Site Plan",
        "img": "/propertyList/Springfield/img1.jpg"
      }
    ],
    "specifications": [
      "Club house with swimming pool",
      "Sports park with cricket and football pitches",
      "Central park and elder's park",
      "Open air theatre",
      "Kids play area",
      "Entrance plaza",
      "9.0 m wide internal roads",
      "30 m wide road frontage",
      "Site plan prepared by Genesis Design Studio"
    ],
    "connectivity": [
      "Towards A.B. Road on one side and the bypass on the other",
      "Near Aurobindo Hospital",
      "Close to Gokhana City and Silver City",
      "Off the 30 m wide east road"
    ],
    "vision": [
      "Club house",
      "Sports park",
      "Central park",
      "Elder's park",
      "Entrance plaza"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Springfield"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "A.B. Road, Indore"
    },
    {
      "label": "Developer",
      "value": "VK Gupta Group"
    },
    {
      "label": "Plot Sizes",
      "value": "420 - 1,200 sq.ft."
    }
  ],
  "images": [
    "/propertyList/Springfield/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Springfield/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "VK Gupta Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 329,
  "title": "Laabham Eden Garden",
  "slug": "laabham-eden-garden",
  "location": "Ambamoliya, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Laabham Eden Garden is a premium residential township opposite the Impetus SEZ area at Ambamoliya, Indore, offering plots of 1,100 to 2,500 sq.ft. with a multi-utility clubhouse, sport courts, a grand entrance gate and 12 metre wide median roads.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered - P-OTH-24-4727",
        "Plot sizes from 1,100 to 2,500 sq.ft.",
        "Opposite Impetus SEZ area, ahead of Vidyasagar School",
        "Multi-utility club house within the township",
        "12 metre wide median roads",
        "Grand entrance gate and dedicated children's play area",
        "Underground electric lines throughout",
        "Sport courts and beautiful walking space"
      ]
    }
  ],
  "sections": {
    "overview": "Laabham Eden Garden by Laabham Group",
    "amenities": [
      {
        "title": "Amenities",
        "img": "/propertyList/Laabham Eden Garden/img2.jpg"
      },
      {
        "title": "Nearby Places",
        "img": "/propertyList/Laabham Eden Garden/img3.jpg"
      },
      {
        "title": "Master Layout Plan",
        "img": "/propertyList/Laabham Eden Garden/img4.jpg"
      }
    ],
    "specifications": [
      "Underground electric lines",
      "Excellent course of connectivity",
      "Garden area",
      "Beautiful walking space",
      "Dedicated children play area",
      "Grand entrance gate",
      "Sport courts",
      "Multi utility club house",
      "12 M wide median roads",
      "9.00 m and 12.00 m wide internal roads"
    ],
    "connectivity": [
      "RE-3 - 1.5 km",
      "Vidyasagar School - 3 km",
      "Indore Bypass - 4 km",
      "APS - 5 km",
      "Shopping Mall - 5 km",
      "Scheme 140 - 6 km",
      "Noble Hospital - 6 km",
      "Pipliyahana - 7 km"
    ],
    "vision": [
      "Grand entrance gate",
      "Club house",
      "Garden area",
      "Sport courts",
      "Walking space"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Laabham Eden Garden"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Ambamoliya, Indore"
    },
    {
      "label": "Developer",
      "value": "Laabham Group"
    },
    {
      "label": "RERA No.",
      "value": "P-OTH-24-4727"
    },
    {
      "label": "Plot Sizes",
      "value": "1,100 - 2,500 sq.ft."
    },
    {
      "label": "Contact",
      "value": "70490 29990"
    }
  ],
  "images": [
    "/propertyList/Laabham Eden Garden/img1.jpg",
    "/propertyList/Laabham Eden Garden/img2.jpg",
    "/propertyList/Laabham Eden Garden/img3.jpg",
    "/propertyList/Laabham Eden Garden/img4.jpg",
    "/propertyList/Laabham Eden Garden/img5.jpg",
    "/propertyList/Laabham Eden Garden/img6.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Laabham Eden Garden/img4.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Laabham Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 330,
  "title": "Laabham Rajadhiraj City",
  "slug": "laabham-rajadhiraj-city",
  "location": "Indore-Ujjain Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Laabham Rajadhiraj City is a two-phase residential plotting township opposite Rama Phosphates on the Indore-Ujjain Road, with plots of 800, 1,000 and 1,200 sq.ft., more than 12 theme gardens, a homegrown Miyawaki forest and a 50 ft grand entrance gate.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered - P-IND-25-5479",
        "Residential plots of 800, 1,000 and 1,200 sq.ft. (larger corner plots up to 1,700 sq.ft.)",
        "Phase I and Phase II master layouts published",
        "12+ theme gardens across the township",
        "Homegrown Miyawaki forest within the campus",
        "50 ft grand entrance gate",
        "Underground electric lines and dedicated walking space",
        "Temple and sports court within the township",
        "Near the Indore-Ujjain 6-lane road"
      ]
    }
  ],
  "sections": {
    "overview": "Laabham Rajadhiraj City by Laabham Group",
    "amenities": [
      {
        "title": "Amenities",
        "img": "/propertyList/Laabham Rajadhiraj City/img2.jpg"
      },
      {
        "title": "Nearby Places",
        "img": "/propertyList/Laabham Rajadhiraj City/img3.jpg"
      },
      {
        "title": "Master Layout Plan",
        "img": "/propertyList/Laabham Rajadhiraj City/img4.jpg"
      }
    ],
    "specifications": [
      "Underground electric lines",
      "Excellent course of connectivity",
      "12+ theme gardens",
      "Dedicated walking space",
      "Dedicated children's play area",
      "50 ft grand entrance gate",
      "Sports court",
      "Homegrown Miyawaki forest",
      "Temple"
    ],
    "connectivity": [
      "Prestige University - 10 mins",
      "Aurobindo Hospital - 14 mins",
      "TCS & Infosys - 20 mins",
      "Vijay Nagar Square - 26 mins",
      "International Airport - 30 mins",
      "Railway Station - 30 mins",
      "Near the Indore-Ujjain 6 lane road",
      "Close to Super Corridor and Sanwer Road"
    ],
    "vision": [
      "Grand entrance gate",
      "Theme gardens",
      "Miyawaki forest",
      "Sports court",
      "Temple"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Laabham Rajadhiraj City"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Opp. Rama Phosphates, Indore-Ujjain Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Laabham Group"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-25-5479"
    },
    {
      "label": "Plot Sizes",
      "value": "800 / 1,000 / 1,200 sq.ft."
    },
    {
      "label": "Phases",
      "value": "Phase I and Phase II"
    },
    {
      "label": "Contact",
      "value": "70490 29990"
    }
  ],
  "images": [
    "/propertyList/Laabham Rajadhiraj City/img1.jpg",
    "/propertyList/Laabham Rajadhiraj City/img2.jpg",
    "/propertyList/Laabham Rajadhiraj City/img3.jpg",
    "/propertyList/Laabham Rajadhiraj City/img4.jpg",
    "/propertyList/Laabham Rajadhiraj City/img5.jpg",
    "/propertyList/Laabham Rajadhiraj City/img6.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Laabham Rajadhiraj City/img4.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Laabham Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 331,
  "title": "Laabham Vastu City",
  "slug": "laabham-vastu-city",
  "location": "Bicholi Mardana, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "3 & 4 BHK",
  "description": "Laabham Vastu City at Vastu City Rameshwaram, behind Vidya Sagar School in Bicholi Mardana, is a gated community of thirteen apartment towers and villas with 3 BHK homes of about 2,300 sq.ft. and 4 BHK homes of about 3,906 sq.ft., a clubhouse, swimming pool, gym, temple and Jain temple.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "3 BHK flats of about 2,300 sq.ft.",
        "4 BHK flats of about 3,906 sq.ft.",
        "Thirteen towers plus a villa row within the gated campus",
        "Club house with swimming pool",
        "Fully equipped gymnasium",
        "Temple and Jain temple within the campus",
        "Four entry gates with a 9.0 m approach road",
        "Shopping road along the eastern edge of the campus"
      ]
    }
  ],
  "sections": {
    "overview": "Laabham Vastu City by Laabham Group",
    "amenities": [
      {
        "title": "Actual Site Photographs",
        "img": "/propertyList/Laabham Vastu City/img2.jpg"
      },
      {
        "title": "Master Layout Plan",
        "img": "/propertyList/Laabham Vastu City/img3.jpg"
      },
      {
        "title": "3 & 4 BHK Flat Plans",
        "img": "/propertyList/Laabham Vastu City/img4.jpg"
      },
      {
        "title": "Typical Floor Plans",
        "img": "/propertyList/Laabham Vastu City/img5.jpg"
      }
    ],
    "specifications": [
      "Thirteen apartment towers and a villa row",
      "3 BHK typical flat of about 2,300 sq.ft.",
      "4 BHK typical flat of about 3,906 sq.ft.",
      "Club house and swimming pool",
      "Gymnasium",
      "Temple and Jain temple",
      "Four entry gates",
      "9.0 m approach road and 12.0 m approach road",
      "4.5 m and 6.5 m wide internal roads",
      "Shopping road frontage"
    ],
    "connectivity": [
      "Behind Vidya Sagar School, Bicholi Mardana",
      "Near Agrawal Public School",
      "Close to Vaishnavdham Mandir and Soham Park",
      "Near Scheme No. 140",
      "Close to Mayank Blue Water Park and Rameshwaram",
      "On the Bypass Road corridor towards Dewas and Mhow"
    ],
    "vision": [
      "Club house",
      "Swimming pool",
      "Gymnasium",
      "Temple",
      "Jain temple"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Laabham Vastu City"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "Vastu City Rameshwaram, Bicholi Mardana, Indore"
    },
    {
      "label": "Developer",
      "value": "Laabham Group"
    },
    {
      "label": "Configuration",
      "value": "3 BHK (2,300 sq.ft.) and 4 BHK (3,906 sq.ft.)"
    },
    {
      "label": "Contact",
      "value": "70490 29990"
    }
  ],
  "images": [
    "/propertyList/Laabham Vastu City/img1.jpg",
    "/propertyList/Laabham Vastu City/img2.jpg",
    "/propertyList/Laabham Vastu City/img3.jpg",
    "/propertyList/Laabham Vastu City/img4.jpg",
    "/propertyList/Laabham Vastu City/img5.jpg",
    "/propertyList/Laabham Vastu City/img6.jpg",
    "/propertyList/Laabham Vastu City/img7.jpg",
    "/propertyList/Laabham Vastu City/img8.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Laabham Vastu City/img4.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Laabham Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 332,
  "title": "Laabham Supremo",
  "slug": "laabham-supremo",
  "location": "Behind LNO Business Park, Near Bicholi, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Laabham Supremo is a consciously curated community of just 67 premium plots behind LNO Business Park near Bicholi, Indore, approached by a 250 ft long private road and served by The Supreme Club with an all-weather covered swimming pool.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered - P-OTH-25-5543",
        "Limited community of just 67 premium plots",
        "250 ft long private approach road",
        "31 ft wide central road for easy, elegant entry",
        "Maximum 8 plots in a row for low-density privacy and space",
        "The Supreme Club with banquet hall and fitness studio",
        "All-weather covered swimming pool",
        "EV charging station and Wi-Fi enabled zone",
        "Zero water logging with engineered monsoon-ready storm control",
        "Underground electrification with no hanging wires",
        "Dedicated staff quarters within the township"
      ]
    }
  ],
  "sections": {
    "overview": "Laabham Supremo by Laabham Group",
    "amenities": [
      {
        "title": "Grand Approach",
        "img": "/propertyList/Laabham Supremo/img3.jpg"
      },
      {
        "title": "Design Features",
        "img": "/propertyList/Laabham Supremo/img4.jpg"
      },
      {
        "title": "The Supreme Club",
        "img": "/propertyList/Laabham Supremo/img5.jpg"
      },
      {
        "title": "Covered Swimming Pool",
        "img": "/propertyList/Laabham Supremo/img6.jpg"
      },
      {
        "title": "Plotting Layout Plan",
        "img": "/propertyList/Laabham Supremo/img7.jpg"
      }
    ],
    "specifications": [
      "Planned plantation with fragrant, bird-friendly greens",
      "31 ft wide central road",
      "Ambient lighting - aesthetically pleasing and secure",
      "Planned parking spaces for residents and guests",
      "EV charging station",
      "Maximum 8 plots in a row",
      "Zero water logging - engineered drainage for monsoon-ready comfort",
      "Underground electrification",
      "Dedicated staff quarters",
      "Wi-Fi enabled zone including the clubhouse",
      "Swimming pool - all-weather covered, temperature-controlled",
      "Banquet hall - fully air conditioned with well-equipped kitchen and dedicated entrance",
      "Fitness studio for daily cardio and workouts"
    ],
    "connectivity": [
      "Behind LNO Business Park, Near Bicholi, Indore",
      "Approached from the 16 ft wide proposed road corridor"
    ],
    "vision": [
      "Private approach road",
      "The Supreme Club",
      "Covered swimming pool",
      "Central water feature",
      "Landscaped avenues"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Laabham Supremo"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Behind LNO Business Park, Near Bicholi, Indore"
    },
    {
      "label": "Developer",
      "value": "Laabham Group"
    },
    {
      "label": "RERA No.",
      "value": "P-OTH-25-5543"
    },
    {
      "label": "Number of Plots",
      "value": "67"
    },
    {
      "label": "Contact",
      "value": "+91 70490 29990"
    }
  ],
  "images": [
    "/propertyList/Laabham Supremo/img1.jpg",
    "/propertyList/Laabham Supremo/img2.jpg",
    "/propertyList/Laabham Supremo/img3.jpg",
    "/propertyList/Laabham Supremo/img4.jpg",
    "/propertyList/Laabham Supremo/img5.jpg",
    "/propertyList/Laabham Supremo/img6.jpg",
    "/propertyList/Laabham Supremo/img7.jpg",
    "/propertyList/Laabham Supremo/img8.jpg",
    "/propertyList/Laabham Supremo/img9.jpg",
    "/propertyList/Laabham Supremo/img10.jpg",
    "/propertyList/Laabham Supremo/img11.jpg",
    "/propertyList/Laabham Supremo/img12.jpg",
    "/propertyList/Laabham Supremo/img13.jpg",
    "/propertyList/Laabham Supremo/img14.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Laabham Supremo/img7.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Laabham Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 333,
  "title": "Laabham Galaxy",
  "slug": "laabham-galaxy",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots, 2 & 3 BHK",
  "description": "Laabham Galaxy is a 7 acre integrated township offering plots, 2 and 3 BHK flats, showrooms and office spaces, topped by a terrace garden with swimming pool, amphitheatre, walking track and a senior citizen zone.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "7 acre integrated township",
        "Plots, 2 and 3 BHK flats, showrooms and office spaces",
        "Double-height showrooms with mezzanine floor",
        "Terrace garden and swimming pool level",
        "Amphitheatre and walking track on the terrace deck",
        "Kids play area and senior citizen zone",
        "Steam, sauna and jacuzzi within the club facilities",
        "Grand landscaped entrance with circular arrival court"
      ]
    }
  ],
  "sections": {
    "overview": "Laabham Galaxy by Laabham Group",
    "amenities": [
      {
        "title": "Entrance Plaza",
        "img": "/propertyList/Laabham Galaxy/img2.jpg"
      },
      {
        "title": "Amenity Deck",
        "img": "/propertyList/Laabham Galaxy/img3.jpg"
      },
      {
        "title": "Ground Floor Shops",
        "img": "/propertyList/Laabham Galaxy/img4.jpg"
      },
      {
        "title": "Terrace Garden & Swimming Pool",
        "img": "/propertyList/Laabham Galaxy/img8.jpg"
      }
    ],
    "specifications": [
      "Ground floor shops with 10.0 m and 12.0 m wide circulation",
      "First floor offices and shops",
      "Second and fourth floor residential plates",
      "Terrace garden and swimming pool level",
      "Artificial lawn and hard scape",
      "Walking track and deck area",
      "Gazebo and big gazebo",
      "Clubhouse rooms",
      "Amphitheater",
      "Kids play area",
      "Senior citizen zone",
      "Steam / sauna / jacuzzi"
    ],
    "connectivity": [
      "Contact the sales team for the detailed site connectivity sheet"
    ],
    "vision": [
      "Entrance plaza",
      "Terrace garden",
      "Swimming pool",
      "Amphitheatre",
      "Sports court"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Laabham Galaxy"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Laabham Group"
    },
    {
      "label": "Land Area",
      "value": "7 acres"
    },
    {
      "label": "Configuration",
      "value": "Plots, 2/3 BHK flats, showrooms and office spaces"
    },
    {
      "label": "Status",
      "value": "Launching soon"
    }
  ],
  "images": [
    "/propertyList/Laabham Galaxy/img1.jpg",
    "/propertyList/Laabham Galaxy/img2.jpg",
    "/propertyList/Laabham Galaxy/img3.jpg",
    "/propertyList/Laabham Galaxy/img4.jpg",
    "/propertyList/Laabham Galaxy/img5.jpg",
    "/propertyList/Laabham Galaxy/img6.jpg",
    "/propertyList/Laabham Galaxy/img7.jpg",
    "/propertyList/Laabham Galaxy/img9.jpg",
    "/propertyList/Laabham Galaxy/img10.jpg",
    "/propertyList/Laabham Galaxy/img11.jpg",
    "/propertyList/Laabham Galaxy/img12.jpg",
    "/propertyList/Laabham Galaxy/img13.jpg",
    "/propertyList/Laabham Galaxy/img14.jpg",
    "/propertyList/Laabham Galaxy/img15.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Laabham Galaxy/img4.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Laabham Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 334,
  "title": "Laabham Highlights",
  "slug": "laabham-highlights",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Commercial",
  "bhk": "Showrooms & Offices",
  "description": "Laabham Highlights is a commercial tower of showrooms, offices and a top-floor restaurant, with office suites from about 1,443 sq.ft. to 3,275 sq.ft. spread across twelve floors and a restaurant on the twelfth level.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Twelve-floor commercial tower with showrooms, offices and a restaurant",
        "Office suites from about 1,443 sq.ft. to 3,275 sq.ft.",
        "Restaurant on the twelfth floor",
        "Offices on the tenth and eleventh floors",
        "Floor plans published for every level from ground to twelfth",
        "Access to offices above the fifth floor available for bulk bookings",
        "Near the proposed Taj Hotel"
      ]
    }
  ],
  "sections": {
    "overview": "Laabham Highlights by Laabham Group",
    "amenities": [
      {
        "title": "Ground Floor Plan",
        "img": "/propertyList/Laabham Highlights/img5.jpg"
      },
      {
        "title": "Typical Office Floor",
        "img": "/propertyList/Laabham Highlights/img10.jpg"
      },
      {
        "title": "Upper Floor Plan",
        "img": "/propertyList/Laabham Highlights/img20.jpg"
      },
      {
        "title": "Restaurant Floor",
        "img": "/propertyList/Laabham Highlights/img26.jpg"
      }
    ],
    "specifications": [
      "Ground floor showrooms",
      "Office floors from first to twelfth",
      "Unit sizes of 1,443, 1,575, 1,855, 2,222, 2,448 and 3,275 sq.ft.",
      "Restaurant on the twelfth floor",
      "Access to offices above the fifth floor for bulk bookings"
    ],
    "connectivity": [
      "Near the proposed Taj Hotel",
      "Laabham HQ: 120/121-FB, Scheme No.94, Near Pipliyahana Square, Ring Road, Indore"
    ],
    "vision": [
      "Commercial tower",
      "Showroom frontage",
      "Office floors",
      "Restaurant level"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Laabham Highlights"
    },
    {
      "label": "Property Type",
      "value": "Commercial"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Laabham Group"
    },
    {
      "label": "Configuration",
      "value": "Showrooms, offices and restaurant"
    },
    {
      "label": "Unit Sizes",
      "value": "Approx. 1,443 - 3,275 sq.ft."
    },
    {
      "label": "Floors",
      "value": "12"
    },
    {
      "label": "Contact",
      "value": "70490 29990"
    }
  ],
  "images": [
    "/propertyList/Laabham Highlights/img1.jpg",
    "/propertyList/Laabham Highlights/img3.jpg",
    "/propertyList/Laabham Highlights/img6.jpg",
    "/propertyList/Laabham Highlights/img8.jpg",
    "/propertyList/Laabham Highlights/img10.jpg",
    "/propertyList/Laabham Highlights/img13.jpg",
    "/propertyList/Laabham Highlights/img15.jpg",
    "/propertyList/Laabham Highlights/img17.jpg",
    "/propertyList/Laabham Highlights/img19.jpg",
    "/propertyList/Laabham Highlights/img22.jpg",
    "/propertyList/Laabham Highlights/img24.jpg",
    "/propertyList/Laabham Highlights/img26.jpg",
    "/propertyList/Laabham Highlights/img29.jpg",
    "/propertyList/Laabham Highlights/img31.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Laabham Highlights/img5.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Laabham Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 335,
  "title": "Emerald Forum",
  "slug": "emerald-forum",
  "location": "Niranjanpur Square, Main AB Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Commercial",
  "bhk": "Office Units",
  "description": "Emerald Forum is a landmark commercial address at Niranjanpur Square on Main AB Road, spanning 2,670 sq.mt. with compact, efficient office spaces designed for business owners, consultants and professionals, behind a facade inspired by classic Western architecture.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered - P-IND-26-6485",
        "Land parcel of about 2,670 sq.mt. at Niranjanpur Square",
        "Thoughtfully designed compact office spaces",
        "Facade inspired by classic Western architectural aesthetics",
        "Three basement levels of parking",
        "Ground, mezzanine and eleven upper floors",
        "Refuge floors at the 5th and 9th levels",
        "Enhanced daylight and outdoor views in every workspace",
        "Energy-efficient lighting fixtures and building envelope",
        "Waste segregation designed into the building services"
      ]
    }
  ],
  "sections": {
    "overview": "Emerald Forum by Emerald Developers (Agarwal Group)",
    "amenities": [
      {
        "title": "Architectural Marvel",
        "img": "/propertyList/Emerald Forum/img2.jpg"
      },
      {
        "title": "Prestige Location",
        "img": "/propertyList/Emerald Forum/img8.jpg"
      },
      {
        "title": "Floor Plans",
        "img": "/propertyList/Emerald Forum/img14.jpg"
      },
      {
        "title": "Terrace Floor",
        "img": "/propertyList/Emerald Forum/img18.jpg"
      }
    ],
    "specifications": [
      "Three basement floors of parking (Basement 01, 02 and 03)",
      "Ground floor and mezzanine floor",
      "Typical office floors - 2nd, 3rd, 4th, 6th, 7th, 8th, 10th and 11th",
      "Refuge floors at the 5th and 9th levels",
      "Terrace floor",
      "Enhanced daylight and outdoor views",
      "Efficient lighting fixtures",
      "Efficient building envelope",
      "Waste segregation",
      "Architecture by MOCO Design Studio",
      "RCC by JW Consultants LLP",
      "Facade engineering by Chandra Mohan's practice",
      "Green building consultancy by VK:e Environmental"
    ],
    "connectivity": [
      "Niranjanpur Square on Main AB Road, Indore",
      "Way to Vijay Nagar",
      "Way to Mangliya",
      "Way to Scheme 114 Road / MR-11",
      "Way to Ring Road",
      "Direct access to IT hubs, industrial areas and the airport"
    ],
    "vision": [
      "Classic facade",
      "Office floors",
      "Landscaped forecourt",
      "Terrace level"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Emerald Forum"
    },
    {
      "label": "Property Type",
      "value": "Commercial"
    },
    {
      "label": "Location",
      "value": "293/2/6, Niranjanpur Square, Main AB Road, Indore - 452001"
    },
    {
      "label": "Developer",
      "value": "Emerald Developers (Agarwal Group)"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-26-6485"
    },
    {
      "label": "Land Area",
      "value": "Approx. 2,670 sq.mt."
    },
    {
      "label": "Corporate Address",
      "value": "Agarwal House, 5, Yeshwant Colony, Indore - 452003"
    },
    {
      "label": "Contact",
      "value": "+91 76106 76106"
    }
  ],
  "images": [
    "/propertyList/Emerald Forum/img1.jpg",
    "/propertyList/Emerald Forum/img3.jpg",
    "/propertyList/Emerald Forum/img4.jpg",
    "/propertyList/Emerald Forum/img6.jpg",
    "/propertyList/Emerald Forum/img7.jpg",
    "/propertyList/Emerald Forum/img9.jpg",
    "/propertyList/Emerald Forum/img10.jpg",
    "/propertyList/Emerald Forum/img12.jpg",
    "/propertyList/Emerald Forum/img13.jpg",
    "/propertyList/Emerald Forum/img15.jpg",
    "/propertyList/Emerald Forum/img16.jpg",
    "/propertyList/Emerald Forum/img18.jpg",
    "/propertyList/Emerald Forum/img19.jpg",
    "/propertyList/Emerald Forum/img21.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Emerald Forum/img14.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Emerald Developers (Agarwal Group)",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 336,
  "title": "Emerald Gardenia",
  "slug": "emerald-gardenia",
  "location": "Village Mayakhedi, Tehsil Kanadiya, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Emerald Gardenia is a meticulously designed plotted colony at Village Mayakhedi, Tehsil Kanadiya, embracing the tranquillity of verdant gardens - an eco park, palm plaza, cascade waterfall and elders' park - alongside multi-courts, cricket nets and an open air gym.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered - P-IND-23-4209",
        "Meticulously designed plotted colony wrapped in landscaped gardens",
        "Eco park, palm plaza and sculpture court",
        "Multipurpose court, badminton court and cricket nets",
        "Amphitheatre, gazebo and cascade waterfall",
        "Elders' park, open air gym and community lawn",
        "Well-designed main gate plus an additional secondary gate",
        "CCTV surveillance and solar street lights",
        "Underground water tank and STP within the colony"
      ]
    }
  ],
  "sections": {
    "overview": "Emerald Gardenia by Emerald Developers (Agarwal Group)",
    "amenities": [
      {
        "title": "Nature's Oasis",
        "img": "/propertyList/Emerald Gardenia/img2.jpg"
      },
      {
        "title": "Master Layout Plan",
        "img": "/propertyList/Emerald Gardenia/img3.jpg"
      },
      {
        "title": "Outdoor Bliss",
        "img": "/propertyList/Emerald Gardenia/img4.jpg"
      },
      {
        "title": "Secure & Convenient Living",
        "img": "/propertyList/Emerald Gardenia/img5.jpg"
      },
      {
        "title": "Location Advantage",
        "img": "/propertyList/Emerald Gardenia/img6.jpg"
      }
    ],
    "specifications": [
      "Eco park",
      "Multipurpose court",
      "Sculpture court",
      "Palm plaza",
      "Badminton court",
      "Kids play zone",
      "Amphitheatre",
      "Gazebo",
      "Cascade waterfall",
      "Cricket nets",
      "Walking track",
      "Open sitting area",
      "Community lawn",
      "Elders' park",
      "Open air gym",
      "Entrance gate with security guard cabin",
      "Boundary wall",
      "24x7 CCTV surveillance",
      "Underground water tank and STP",
      "HDPE water line",
      "Solar street lights",
      "Project architect - Genesis Design Studio; landscape - Devila Landscape"
    ],
    "connectivity": [
      "Village Mayakhedi, Tehsil Kanadiya, Indore",
      "Close to hospitals, educational institutions, clubs, restaurants and malls",
      "Near Phoenix Mall and Best Price",
      "Near C-21 Business Park",
      "Close to Emerald Heights School and Aurobindo Hospital",
      "Near Kanadiya Hospital and Bombay Hospital",
      "Close to Marriott, Radisson Blu, The Park and Sheraton"
    ],
    "vision": [
      "Entrance gate",
      "Eco park",
      "Palm plaza",
      "Cascade waterfall",
      "Community lawn"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Emerald Gardenia"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Village Mayakhedi, Tehsil Kanadiya, Indore"
    },
    {
      "label": "Developer",
      "value": "Emerald Developers (Agarwal Group)"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-23-4209"
    },
    {
      "label": "Promoter",
      "value": "Agarwal Real Infra LLP"
    },
    {
      "label": "Corporate Office",
      "value": "Agarwal House, 5, Yeshwant Colony, Indore - 452003"
    }
  ],
  "images": [
    "/propertyList/Emerald Gardenia/img1.jpg",
    "/propertyList/Emerald Gardenia/img2.jpg",
    "/propertyList/Emerald Gardenia/img3.jpg",
    "/propertyList/Emerald Gardenia/img4.jpg",
    "/propertyList/Emerald Gardenia/img5.jpg",
    "/propertyList/Emerald Gardenia/img6.jpg",
    "/propertyList/Emerald Gardenia/img7.jpg",
    "/propertyList/Emerald Gardenia/img8.jpg",
    "/propertyList/Emerald Gardenia/img9.jpg",
    "/propertyList/Emerald Gardenia/img10.jpg",
    "/propertyList/Emerald Gardenia/img11.jpg",
    "/propertyList/Emerald Gardenia/img12.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Emerald Gardenia/img3.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Emerald Developers (Agarwal Group)",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 337,
  "title": "Emerald Horizon Tower",
  "slug": "emerald-horizon-tower",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "3 & 4 BHK",
  "description": "Horizon Tower by Emerald Select is one of Indore's tallest residential towers, with only four residences per floor, 180 degree views, spacious balconies and a rooftop pool deck, above eleven premium shops and showrooms on a 100 ft main road.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "One of Indore's tallest residential towers",
        "Only 4 residences per floor for privacy and cross ventilation",
        "180 degree views from every home",
        "Abundant natural light through thoughtfully planned openings",
        "Spacious balconies extending the living space to the open sky",
        "Rooftop swimming pool with deck and lounge seating",
        "11 premium shops and showrooms on the 100 ft main road",
        "Podium level with landscaped amenity deck"
      ]
    }
  ],
  "sections": {
    "overview": "Emerald Horizon Tower by Emerald Developers (Agarwal Group)",
    "amenities": [
      {
        "title": "Retail Frontage",
        "img": "/propertyList/Emerald Horizon Tower/img5.jpg"
      },
      {
        "title": "Rooftop Pool Deck",
        "img": "/propertyList/Emerald Horizon Tower/img12.jpg"
      },
      {
        "title": "Podium Floor Plan",
        "img": "/propertyList/Emerald Horizon Tower/img20.jpg"
      },
      {
        "title": "Typical Floor Plan",
        "img": "/propertyList/Emerald Horizon Tower/img28.jpg"
      }
    ],
    "specifications": [
      "Ground floor retail with 11 premium shops and showrooms",
      "Podium 01 amenity level with landscaped deck",
      "Typical residential floors up to the 21st level",
      "Only four residences per floor",
      "Rooftop pool deck with lounge and cabana seating",
      "180 degree views from every apartment",
      "Spacious balconies with each home"
    ],
    "connectivity": [
      "On a 100 ft wide main road in Indore",
      "Contact the sales team for the detailed connectivity sheet"
    ],
    "vision": [
      "Tower elevation",
      "Rooftop pool",
      "Retail frontage",
      "Interiors"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Emerald Horizon Tower"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Emerald Developers (Agarwal Group)"
    },
    {
      "label": "Brand",
      "value": "Emerald Select"
    },
    {
      "label": "Configuration",
      "value": "4 residences per floor"
    },
    {
      "label": "Retail",
      "value": "11 premium shops and showrooms"
    }
  ],
  "images": [
    "/propertyList/Emerald Horizon Tower/img1.jpg",
    "/propertyList/Emerald Horizon Tower/img4.jpg",
    "/propertyList/Emerald Horizon Tower/img6.jpg",
    "/propertyList/Emerald Horizon Tower/img9.jpg",
    "/propertyList/Emerald Horizon Tower/img11.jpg",
    "/propertyList/Emerald Horizon Tower/img14.jpg",
    "/propertyList/Emerald Horizon Tower/img17.jpg",
    "/propertyList/Emerald Horizon Tower/img19.jpg",
    "/propertyList/Emerald Horizon Tower/img22.jpg",
    "/propertyList/Emerald Horizon Tower/img25.jpg",
    "/propertyList/Emerald Horizon Tower/img27.jpg",
    "/propertyList/Emerald Horizon Tower/img30.jpg",
    "/propertyList/Emerald Horizon Tower/img32.jpg",
    "/propertyList/Emerald Horizon Tower/img35.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Emerald Horizon Tower/img28.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Emerald Developers (Agarwal Group)",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 338,
  "title": "Emerald World Park",
  "slug": "emerald-world-park",
  "location": "Scheme No. 114-C, Ring Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Commercial",
  "bhk": "Showrooms & Offices",
  "description": "Emerald World Park - Work, Thrive, Belong - is a commercial address in Indore's central business district adjacent to Velocity Multiplex on Ring Road, combining high street retail with flexible office floors, a rooftop garden and three levels of basement parking.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "MPRERA registered - P-IND-25-5764",
        "Grand double-height entrance lobby",
        "Premium lift lobby with high-speed elevators",
        "Three-level spacious basement parking",
        "Retail spaces with mezzanine floors",
        "Flexible office layouts with cross-ventilated corridors",
        "Private balcony in every office",
        "Dedicated toilet and pantry in every office and retail unit",
        "Rooftop garden with multiple amenities",
        "Strategically located near the metro station off Ring Road"
      ]
    }
  ],
  "sections": {
    "overview": "Emerald World Park by Emerald Developers (Agarwal Group)",
    "amenities": [
      {
        "title": "Signature Features",
        "img": "/propertyList/Emerald World Park/img2.jpg"
      },
      {
        "title": "Central Business District",
        "img": "/propertyList/Emerald World Park/img4.jpg"
      },
      {
        "title": "Rooftop Terrace",
        "img": "/propertyList/Emerald World Park/img7.jpg"
      },
      {
        "title": "Ground Floor Plan",
        "img": "/propertyList/Emerald World Park/img8.jpg"
      },
      {
        "title": "Terrace Garden Level",
        "img": "/propertyList/Emerald World Park/img10.jpg"
      }
    ],
    "specifications": [
      "Grand double-height entrance lobby",
      "Premium lift lobby with high-speed elevators",
      "Universal design with differently-abled accessibility and amenities",
      "Three-level spacious basement parking",
      "Retail spaces with mezzanine floors",
      "Flexible office layouts",
      "Cross-ventilated office corridors",
      "Private balcony in every office",
      "Dedicated toilet and pantry in every office and retail unit",
      "Beautifully landscaped surroundings",
      "Rooftop garden with multiple amenities",
      "Part of a larger commercial campus",
      "Terrace amenities - artificial turf, plush lawn areas, covered seating and stepped seating"
    ],
    "connectivity": [
      "Adjacent to Velocity Multiplex, Ring Road, Indore",
      "Strategically located near the metro station off Ring Road",
      "In Indore's central business district"
    ],
    "vision": [
      "Double-height lobby",
      "High street retail",
      "Office floors",
      "Rooftop garden"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Emerald World Park"
    },
    {
      "label": "Property Type",
      "value": "Commercial"
    },
    {
      "label": "Location",
      "value": "18-B-9-BI-C, Scheme No. 114-C, Adjacent to Velocity Multiplex, Ring Road, Indore - 452010"
    },
    {
      "label": "Developer",
      "value": "Emerald Developers (Agarwal Group)"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-25-5764"
    },
    {
      "label": "Corporate Address",
      "value": "Agarwal House, 5, Yeshwant Colony, Indore - 452003"
    },
    {
      "label": "Contact",
      "value": "+91 76106 76106"
    }
  ],
  "images": [
    "/propertyList/Emerald World Park/img1.jpg",
    "/propertyList/Emerald World Park/img3.jpg",
    "/propertyList/Emerald World Park/img4.jpg",
    "/propertyList/Emerald World Park/img6.jpg",
    "/propertyList/Emerald World Park/img7.jpg",
    "/propertyList/Emerald World Park/img9.jpg",
    "/propertyList/Emerald World Park/img11.jpg",
    "/propertyList/Emerald World Park/img12.jpg",
    "/propertyList/Emerald World Park/img14.jpg",
    "/propertyList/Emerald World Park/img16.jpg",
    "/propertyList/Emerald World Park/img17.jpg",
    "/propertyList/Emerald World Park/img19.jpg",
    "/propertyList/Emerald World Park/img20.jpg",
    "/propertyList/Emerald World Park/img22.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Emerald World Park/img8.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Emerald Developers (Agarwal Group)",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 339,
  "title": "Emerald Kingsvilla",
  "slug": "emerald-kingsvilla",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "3 & 4 BHK",
  "description": "Emerald Kingsvilla is a regal mixed-use landmark pairing premium residences with a High Street collection of commercial spaces, layering meditation and yoga zones and a terrace garden at podium level with an infinity pool, jacuzzi and pool deck on the terrace.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered - P-IND-24-4973",
        "Regally designed residences with premium interiors",
        "High Street commercial spaces for retail and business",
        "Meditation and yoga zone at podium level",
        "Terrace garden and badminton court at podium level",
        "Infinity pool, jacuzzi and pool deck at terrace level",
        "Gazebo and shower at terrace level",
        "Residential entry, exit and driveway at ground floor",
        "Kids' zone within the amenity programme"
      ]
    }
  ],
  "sections": {
    "overview": "Emerald Kingsvilla by Emerald Developers (Agarwal Group)",
    "amenities": [
      {
        "title": "Regal Residences",
        "img": "/propertyList/Emerald Kingsvilla/img3.jpg"
      },
      {
        "title": "High Street Commercial",
        "img": "/propertyList/Emerald Kingsvilla/img6.jpg"
      },
      {
        "title": "Amenity Programme",
        "img": "/propertyList/Emerald Kingsvilla/img8.jpg"
      },
      {
        "title": "Floor Plans",
        "img": "/propertyList/Emerald Kingsvilla/img20.jpg"
      }
    ],
    "specifications": [
      "Residential entry / exit at ground floor",
      "Residential driveway at ground floor",
      "Meditation and yoga zone at podium level",
      "Terrace garden at podium level",
      "Badminton court at podium level",
      "Gazebo at terrace level",
      "Shower at terrace level",
      "Pool deck at terrace level",
      "Infinity pool at terrace level",
      "Jacuzzi at terrace level",
      "Kids' zone",
      "High Street commercial spaces at street level"
    ],
    "connectivity": [
      "Contact the sales team for the detailed site connectivity sheet"
    ],
    "vision": [
      "Regal elevation",
      "High Street retail",
      "Infinity pool",
      "Terrace garden",
      "Meditation zone"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Emerald Kingsvilla"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Emerald Developers (Agarwal Group)"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-24-4973"
    },
    {
      "label": "Configuration",
      "value": "Residences with High Street commercial spaces"
    }
  ],
  "images": [
    "/propertyList/Emerald Kingsvilla/img1.jpg",
    "/propertyList/Emerald Kingsvilla/img4.jpg",
    "/propertyList/Emerald Kingsvilla/img6.jpg",
    "/propertyList/Emerald Kingsvilla/img9.jpg",
    "/propertyList/Emerald Kingsvilla/img11.jpg",
    "/propertyList/Emerald Kingsvilla/img14.jpg",
    "/propertyList/Emerald Kingsvilla/img17.jpg",
    "/propertyList/Emerald Kingsvilla/img19.jpg",
    "/propertyList/Emerald Kingsvilla/img22.jpg",
    "/propertyList/Emerald Kingsvilla/img25.jpg",
    "/propertyList/Emerald Kingsvilla/img27.jpg",
    "/propertyList/Emerald Kingsvilla/img30.jpg",
    "/propertyList/Emerald Kingsvilla/img32.jpg",
    "/propertyList/Emerald Kingsvilla/img35.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Emerald Kingsvilla/img20.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Emerald Developers (Agarwal Group)",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 340,
  "title": "Emerald Gateway",
  "slug": "emerald-gateway",
  "location": "Sulakhedi, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Emerald Gateway is a proposed colony at Sulakhedi developed by M/s Agarwal Real Infra LLP, fronting a 45.0 m wide proposed road, with residential plots from 900 to 1,800 sq.ft. plus shop-cum-residential, LIG and EWS plots.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Frontage on a 45.0 m wide proposed road",
        "General plots of 1,800, 1,500, 1,320, 1,200, 1,100, 1,000 and 900 sq.ft. average",
        "Plot modules of 30' x 60', 30' x 50', 24' x 55', 24' x 50', 22' x 50', 20' x 50' and 20' x 45'",
        "LIG plots of 20' x 50' (1,000 sq.ft. average)",
        "EWS plots of 12' x 35' (420 sq.ft. average)",
        "Shop-cum-residential plots within the layout",
        "9.0 m and 12.0 m wide internal roads",
        "Service areas provided across the colony"
      ]
    }
  ],
  "sections": {
    "overview": "Emerald Gateway by Emerald Developers (Agarwal Group)",
    "amenities": [
      {
        "title": "Sanctioned Colony Layout",
        "img": "/propertyList/Emerald Gateway/img1.jpg"
      }
    ],
    "specifications": [
      "Proposed colony at Sulakhedi",
      "45.0 m wide proposed road frontage",
      "9.0 m and 12.0 m wide internal roads",
      "General, LIG and EWS plot categories",
      "Shop-cum-residential plots",
      "Service areas",
      "Layout by Akshay Associates, Indore"
    ],
    "connectivity": [
      "Sulakhedi, Indore",
      "Frontage on a 45.0 m wide proposed road"
    ],
    "vision": [
      "Plotted layout",
      "Shop-cum-residential frontage",
      "Service areas"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Emerald Gateway"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Sulakhedi, Indore"
    },
    {
      "label": "Developer",
      "value": "Emerald Developers (Agarwal Group)"
    },
    {
      "label": "Promoter",
      "value": "M/s Agarwal Real Infra LLP"
    },
    {
      "label": "Plot Sizes",
      "value": "420 - 1,800 sq.ft."
    }
  ],
  "images": [
    "/propertyList/Emerald Gateway/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Emerald Gateway/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Emerald Developers (Agarwal Group)",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 341,
  "title": "Emerald Nirvana",
  "slug": "emerald-nirvana",
  "location": "Village Jhalariya, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Emerald Nirvana is a worldly masterpiece nestled in Indore - a plotted township at Village Jhalariya built with a mix of Moroccan and Greek architecture, offering plots from 960 to 3,525 sq.ft. plus shops, LIG and EWS units.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered - P-IND-21-3033",
        "Moroccan and Greek architecture with distinct features",
        "Plot sizes of 3,525, 1,800, 1,500, 1,200 and 960 sq.ft. average",
        "Plot modules of 47' x 75', 36' x 50', 30' x 60', 30' x 50', 24' x 50' and 24' x 40'",
        "Shops of about 24' x 54' average",
        "LIG plots of 24' x 40' and EWS plots of 16' x 40' and 12' x 30'",
        "Grand themed entrance and water features",
        "Club membership included in the payment plan",
        "Promoted by Agarwal Real Infra LLP"
      ]
    }
  ],
  "sections": {
    "overview": "Emerald Nirvana by Emerald Developers (Agarwal Group)",
    "amenities": [
      {
        "title": "World Architecture",
        "img": "/propertyList/Emerald Nirvana/img2.jpg"
      },
      {
        "title": "Township Aerial View",
        "img": "/propertyList/Emerald Nirvana/img4.jpg"
      },
      {
        "title": "Distinct Features",
        "img": "/propertyList/Emerald Nirvana/img7.jpg"
      },
      {
        "title": "Master Layout",
        "img": "/propertyList/Emerald Nirvana/img11.jpg"
      }
    ],
    "specifications": [
      "Plotted township with themed architecture",
      "Grand entrance gate and water body",
      "General plots, shops, LIG and EWS categories",
      "Landscaped avenues and boulevards",
      "Underground infrastructure with road, drainage, water supply and sewerage",
      "Culvert, compound wall and gate",
      "External electrification",
      "Club membership charges of Rs. 1,50,000 plus GST as applicable",
      "External maintenance deposit - 5 year maintenance at Rs. 1.50 per sq.ft."
    ],
    "connectivity": [
      "Village Jhalariya, Indore",
      "Close proximity to hospitals, educational institutions, clubs, restaurants and malls"
    ],
    "vision": [
      "Grand entrance",
      "Moroccan and Greek architecture",
      "Water features",
      "Landscaped avenues"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Emerald Nirvana"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Khasra No. 25/1, Village Jhalariya, Dist. Indore"
    },
    {
      "label": "Developer",
      "value": "Emerald Developers (Agarwal Group)"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-21-3033"
    },
    {
      "label": "Promoter",
      "value": "Agarwal Real Infra LLP"
    },
    {
      "label": "Corporate Office",
      "value": "Agarwal House, 5, Yeshwant Colony, Indore - 452003"
    },
    {
      "label": "Contact",
      "value": "0731-4714000, 97552-22856"
    }
  ],
  "images": [
    "/propertyList/Emerald Nirvana/img1.jpg",
    "/propertyList/Emerald Nirvana/img2.jpg",
    "/propertyList/Emerald Nirvana/img3.jpg",
    "/propertyList/Emerald Nirvana/img4.jpg",
    "/propertyList/Emerald Nirvana/img5.jpg",
    "/propertyList/Emerald Nirvana/img6.jpg",
    "/propertyList/Emerald Nirvana/img7.jpg",
    "/propertyList/Emerald Nirvana/img8.jpg",
    "/propertyList/Emerald Nirvana/img9.jpg",
    "/propertyList/Emerald Nirvana/img10.jpg",
    "/propertyList/Emerald Nirvana/img11.jpg",
    "/propertyList/Emerald Nirvana/img12.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Emerald Nirvana/img11.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Emerald Developers (Agarwal Group)",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 342,
  "title": "Tirupati Dev Lok",
  "slug": "tirupati-dev-lok",
  "location": "Tarana, Indore-Ujjain Road, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Tirupati Dev Lok by Emerald is a sanctioned plotted colony at Tarana on the 75.0 metre wide Indore-Ujjain Road, with commercial plots of about 4,235 sq.ft., residential plots from 640 to 1,061 sq.ft., four gardens and an on-site STP.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Located at Tarana on the 75.0 m wide Indore-Ujjain Road",
        "Commercial plots of about 4,235 sq.ft. average (42'4\" x 100')",
        "Residential plots of 1,061, 889, 768, 713, 703, 686, 675 and 640 sq.ft.",
        "LIG plots of about 825 sq.ft. (17' x 48'6\")",
        "EWS plots of about 428 sq.ft. (12' x 35'8\")",
        "Four gardens of about 8,155, 5,723, 4,337 and 4,330 sq.ft.",
        "STP within the colony",
        "9.0 m, 10.50 m and 7.5 m wide internal roads"
      ]
    }
  ],
  "sections": {
    "overview": "Tirupati Dev Lok by Emerald Developers (Agarwal Group)",
    "amenities": [
      {
        "title": "Sanctioned Sale Drawing",
        "img": "/propertyList/Tirupati Dev Lok/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotted colony layout",
      "Main gate on the 10.50 m wide road",
      "9.0 m, 10.50 m and 7.5 m wide internal roads",
      "Commercial plots on the main road frontage",
      "Four garden areas within the colony",
      "LIG and EWS plot pockets",
      "Sewage treatment plant",
      "Service area within the layout"
    ],
    "connectivity": [
      "At Tarana on the Indore-Ujjain Road (75.0 m wide)",
      "Towards Indore on one side and Ujjain on the other"
    ],
    "vision": [
      "Plotted layout",
      "Gardens",
      "Commercial frontage",
      "Wide highway access"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Tirupati Dev Lok"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Tarana, Indore-Ujjain Road"
    },
    {
      "label": "Developer",
      "value": "Emerald Developers (Agarwal Group)"
    },
    {
      "label": "Plot Sizes",
      "value": "428 - 4,235 sq.ft."
    }
  ],
  "images": [
    "/propertyList/Tirupati Dev Lok/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Tirupati Dev Lok/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Emerald Developers (Agarwal Group)",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 343,
  "title": "King Estate Maharaja",
  "slug": "king-estate-maharaja-sarthak-singapore",
  "location": "Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Maharaja by Sarthak Singapore is a sanctioned plotted colony laid out beside the developer's existing Lake View project, offering 1,800 sq.ft. and 1,000 sq.ft. plots along with shop-cum-residential units, two landscaped parks and a proposed 18.0 metre wide road frontage.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Plots of 30' x 60' (1,800 sq.ft.) and 20' x 50' (1,000 sq.ft.)",
        "Shop-cum-residential plots (SR1 to SR6) along the main road",
        "Frontage on a proposed 18.0 metre wide road",
        "12.0 metre wide road along the northern edge",
        "9.0 metre wide internal road grid throughout the colony",
        "Two landscaped parks within the layout",
        "Water tank (W.T.) and service tank (S.T.) provided on site",
        "Adjoins the developer's existing Lake View project"
      ]
    }
  ],
  "sections": {
    "overview": "Maharaja by Sarthak Singapore",
    "amenities": [
      {
        "title": "Sanctioned Colony Layout",
        "img": "/propertyList/Maharaja by Sarthak Singapore/img1.jpg"
      }
    ],
    "specifications": [
      "Sanctioned plotting layout",
      "Plot sizes of 30' x 60' (1,800 sq.ft.) and 20' x 50' (1,000 sq.ft.)",
      "Shop-cum-residential plots along the frontage",
      "Proposed 18.0 m wide road, 12.0 m wide road and 9.0 m wide internal roads",
      "Two landscaped parks",
      "Water tank and service tank within the colony"
    ],
    "connectivity": [
      "Frontage on a proposed 18.0 metre wide road",
      "Adjoining the existing Lake View project by the same developer"
    ],
    "vision": [
      "Plotted layout",
      "Landscaped parks",
      "Shop-cum-residential frontage",
      "Wide internal roads"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Maharaja"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Sarthak Singapore"
    },
    {
      "label": "Plot Sizes",
      "value": "1,000 and 1,800 sq.ft."
    },
    {
      "label": "Configuration",
      "value": "Residential and shop-cum-residential plots"
    }
  ],
  "images": [
    "/propertyList/Maharaja by Sarthak Singapore/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Maharaja by Sarthak Singapore/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Sarthak Singapore",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 344,
  "title": "Skye Luxuria",
  "slug": "skye-luxuria-nipania",
  "location": "Nipania, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "2, 3, 4 & 5 BHK",
  "description": "Skye Luxuria is Skye Earth's residential apartment community at Nipania, Indore, where 78% of the plot area is given over to open space - gardens, water bodies, sports facilities and community areas. Homes are planned for maximum light, wind and space, with large balconies opening every apartment to the sky.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "78% of the plot area designed as open space",
        "Gardens, water bodies, sports facilities and community spaces",
        "2, 3, 4 and 5 BHK luxury apartment configurations",
        "Every unit designed for maximum light, wind and space",
        "Large and spacious balconies with each home",
        "Swimming pool with a separate splash pool",
        "Gymnasium, indoor sports hall and skating rink",
        "Multipurpose court, jogging tracks and children's play area",
        "Landscaped wooden deck and multiple sitting zones",
        "Separate entry and exit with drop-off zones"
      ]
    }
  ],
  "sections": {
    "overview": "Skye Luxuria by Skye Earth",
    "amenities": [
      {
        "title": "Landscaped Living",
        "img": "/propertyList/Skye Luxuria/img4.jpg"
      },
      {
        "title": "Site Plan",
        "img": "/propertyList/Skye Luxuria/img6.jpg"
      },
      {
        "title": "Clubhouse & Sports",
        "img": "/propertyList/Skye Luxuria/img9.jpg"
      },
      {
        "title": "Project View",
        "img": "/propertyList/Skye Luxuria/img20.jpg"
      }
    ],
    "specifications": [
      "Walls - all interior walls plastered and putty finished",
      "Exterior walls painted with acrylic based paint",
      "Floors - vitrified tiles in drawing, dining, bedrooms and kitchen",
      "Ceramic tiles in all bathrooms and utility areas",
      "Powder coated aluminium sliding windows",
      "Main entrance door - wooden frame with decorative wooden door",
      "Bedrooms and bathrooms - wooden frame with flush doors",
      "Bathrooms - ceramic tiles in floor and dado up to lintel level",
      "Good quality vitreous ceramic ware for water closets and washbasins",
      "Good quality C.P. fittings",
      "Polished granite kitchen platform with stainless steel sink",
      "Glazed / ceramic tiles above the kitchen platform up to lintel level",
      "Concealed PVC conduit with PVC insulated copper wires",
      "Adequate points for power and lighting",
      "Provision for cable / DTH and telephone points",
      "M.C.B. distribution board"
    ],
    "connectivity": [
      "At Nipania, Indore",
      "Close to A.B. Road",
      "On the Nipania Road corridor",
      "Near Ring Road"
    ],
    "vision": [
      "Swimming pool and splash pool",
      "Gymnasium and indoor sports",
      "Skating rink",
      "Multipurpose court",
      "Jogging track",
      "Children's play area"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Skye Luxuria"
    },
    {
      "label": "Property Type",
      "value": "Apartment"
    },
    {
      "label": "Location",
      "value": "Nipania, Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    },
    {
      "label": "Configuration",
      "value": "2, 3, 4 and 5 BHK luxury apartments"
    },
    {
      "label": "Open Space",
      "value": "78% of the plot area"
    }
  ],
  "images": [
    "/propertyList/Skye Luxuria/img1.jpg",
    "/propertyList/Skye Luxuria/img2.jpg",
    "/propertyList/Skye Luxuria/img4.jpg",
    "/propertyList/Skye Luxuria/img5.jpg",
    "/propertyList/Skye Luxuria/img7.jpg",
    "/propertyList/Skye Luxuria/img8.jpg",
    "/propertyList/Skye Luxuria/img10.jpg",
    "/propertyList/Skye Luxuria/img11.jpg",
    "/propertyList/Skye Luxuria/img13.jpg",
    "/propertyList/Skye Luxuria/img14.jpg",
    "/propertyList/Skye Luxuria/img16.jpg",
    "/propertyList/Skye Luxuria/img17.jpg",
    "/propertyList/Skye Luxuria/img19.jpg",
    "/propertyList/Skye Luxuria/img20.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Skye Luxuria/img6.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 345,
  "title": "Skye Mega City",
  "slug": "skye-mega-city",
  "location": "Indore-Ujjain Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Township",
  "bhk": "Plots",
  "description": "Skye Mega City is Skye Earth's premium plotted neighbourhood on the Indore-Ujjain Road, offering luxury plots of 850 to 1,000 sq.ft. behind a landmark gated entrance.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Premium luxury plots of 850 to 1,000 sq.ft.",
        "Positioned on the Indore-Ujjain Road growth corridor",
        "Landmark gated entrance to the township",
        "Described by the developer as Indore-Ujjain Road's most premium neighbourhood",
        "Part of the Skye Earth portfolio of plotted communities"
      ]
    }
  ],
  "sections": {
    "overview": "Skye Mega City by Skye Earth",
    "amenities": [
      {
        "title": "Project Overview",
        "img": "/propertyList/Skye Mega City/img1.jpg"
      }
    ],
    "specifications": [
      "Premium luxury plots of 850 - 1,000 sq.ft.",
      "Gated township with landmark entrance gate",
      "Landscaped avenues and internal road network"
    ],
    "connectivity": [
      "On the Indore-Ujjain Road",
      "Along the six-lane Indore-Ujjain corridor"
    ],
    "vision": [
      "Entrance gate",
      "Landscaped avenues",
      "Plotted community"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Skye Mega City"
    },
    {
      "label": "Property Type",
      "value": "Township"
    },
    {
      "label": "Location",
      "value": "Indore-Ujjain Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    },
    {
      "label": "Plot Sizes",
      "value": "850 - 1,000 sq.ft."
    }
  ],
  "images": [
    "/propertyList/Skye Mega City/img1.jpg"
  ],
  "floorPlan": {
    "image": "",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 346,
  "title": "Skye Privilon",
  "slug": "skye-privilon",
  "location": "Nipania, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Commercial",
  "bhk": "Showrooms & Offices",
  "description": "Skye Privilon is a commercial landmark at Nipania, Indore, combining signature office spaces, high street retail and a multiplex, with premium office and retail units available from 500 sq.ft. onwards.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Signature office spaces, high street retail and a multiplex",
        "Premium office and retail spaces from 500 sq.ft. onwards",
        "Located at Nipania, one of Indore's fastest-growing commercial belts",
        "High street retail frontage with display facades",
        "Part of the Skye Earth commercial portfolio"
      ]
    }
  ],
  "sections": {
    "overview": "Skye Privilon by Skye Earth",
    "amenities": [
      {
        "title": "Project Overview",
        "img": "/propertyList/Skye Privilon/img1.jpg"
      }
    ],
    "specifications": [
      "Signature office spaces",
      "High street retail units",
      "Multiplex within the development",
      "Premium office and retail spaces from 500 sq.ft. onwards"
    ],
    "connectivity": [
      "At Nipania, Indore",
      "Close to the Nipania and Vijay Nagar commercial belt"
    ],
    "vision": [
      "High street retail",
      "Office floors",
      "Multiplex",
      "Illuminated facade"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Skye Privilon"
    },
    {
      "label": "Property Type",
      "value": "Commercial"
    },
    {
      "label": "Location",
      "value": "Nipania, Indore"
    },
    {
      "label": "Developer",
      "value": "Skye Earth"
    },
    {
      "label": "Unit Sizes",
      "value": "500 sq.ft. onwards"
    },
    {
      "label": "Configuration",
      "value": "Office spaces, high street retail and multiplex"
    }
  ],
  "images": [
    "/propertyList/Skye Privilon/img1.jpg"
  ],
  "floorPlan": {
    "image": "",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Skye Earth",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 347,
  "title": "Silver Woods",
  "slug": "silver-woods-m-jhaveri",
  "location": "Near Silver Springs, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "description": "Silver Woods - 'influenced by nature' - is a two-phase plotted development by M. Jhaveri Group near Silver Springs, laid out around two large parks with plots from 23' x 45' up to 100' x 70' along an existing 18 metre wide road.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered - P-IND-22-3575",
        "Developed in two phases - Silver Woods Phase 1 and Phase 2",
        "Plot sizes of 23' x 45', 23' x 50', 30' x 50' and 100' x 70'",
        "Central park of about 11,818 sq.ft.",
        "Second park of about 9,688 sq.ft.",
        "18.00 metre wide road frontage with 9.00 metre wide internal roads",
        "Shop-cum-residential plots along the frontage",
        "Located next to the developer's Silver Spring project"
      ]
    }
  ],
  "sections": {
    "overview": "Silver Woods by M Jhaveri Group",
    "amenities": [
      {
        "title": "Master Layout Plan",
        "img": "/propertyList/Silver Woods/img1.jpg"
      }
    ],
    "specifications": [
      "Two-phase sanctioned plotting layout",
      "Plot sizes of 23' x 45', 23' x 50', 30' x 50' and 100' x 70'",
      "Two landscaped parks of about 11,818 sq.ft. and 9,688 sq.ft.",
      "18.00 MT wide road frontage",
      "9.00 MT wide internal roads",
      "Shop-cum-residential plots",
      "Service areas within the layout"
    ],
    "connectivity": [
      "Adjacent to the Silver Spring project",
      "On an existing 18 metre wide road"
    ],
    "vision": [
      "Plotted layout",
      "Central park",
      "Wide internal roads",
      "Shop-cum-residential frontage"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Silver Woods"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Near Silver Springs, Indore"
    },
    {
      "label": "Developer",
      "value": "M Jhaveri Group"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-22-3575"
    },
    {
      "label": "Phases",
      "value": "Phase 1 and Phase 2"
    },
    {
      "label": "Website",
      "value": "www.mjhaverigroup.com"
    }
  ],
  "images": [
    "/propertyList/Silver Woods/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Silver Woods/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "M Jhaveri Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 348,
  "title": "Silver Golf Manor",
  "slug": "silver-golf-manor-m-jhaveri",
  "location": "Kanadia Main Road, Indore, Madhya Pradesh",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots for Bungalows",
  "description": "Silver Golf Manor - 'discover a new circle of life' - is an exclusive low-density estate of 43 large bungalow plots by M. Jhaveri Group on Kanadia Main Road, beside the Royal Golf Gymkhana Club, with two entry gates and a proposed 100 ft wide road frontage.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered - P-IND-22-3505",
        "Exclusive estate of only 43 large plots",
        "Plot areas from about 4,306 sq.ft. up to about 25,449 sq.ft.",
        "Frontage on a proposed 100 ft wide road",
        "40 ft and 30 ft wide internal roads",
        "Two entry gates into the estate",
        "Extensive landscaped green belt within the estate",
        "Service areas provided at both ends of the layout",
        "Adjacent to the Royal Golf Gymkhana Club and Golf Links"
      ]
    }
  ],
  "sections": {
    "overview": "Silver Golf Manor by M Jhaveri Group",
    "amenities": [
      {
        "title": "Master Layout Plan",
        "img": "/propertyList/Silver Golf Manor/img1.jpg"
      }
    ],
    "specifications": [
      "43 numbered bungalow plots with a published plot schedule",
      "Plot areas from about 400 sq.mt. to 2,365 sq.mt.",
      "Standard modules of 70' x 100', 89'3\" x 100' and larger irregular parcels",
      "Proposed 100 ft wide road frontage",
      "40 ft and 30 ft wide internal roads",
      "Two entry gates",
      "Service areas",
      "Landscaped green belt"
    ],
    "connectivity": [
      "On Kanadia Main Road, Indore",
      "Beside the Royal Golf Gymkhana Club and Golf Links",
      "Near The International School of Bombay",
      "Close to DMart Kanadia",
      "Near Kanadia Police Thana and Columbia Convent School",
      "Between the Bypass Road and the 100 ft proposed road",
      "Towards Bengali Square and Dewas"
    ],
    "vision": [
      "Large bungalow plots",
      "Landscaped green belt",
      "Gated entries",
      "Golf course neighbourhood"
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Silver Golf Manor"
    },
    {
      "label": "Property Type",
      "value": "Plot"
    },
    {
      "label": "Location",
      "value": "Kanadia Main Road, Indore"
    },
    {
      "label": "Developer",
      "value": "M Jhaveri Group"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-22-3505"
    },
    {
      "label": "Number of Plots",
      "value": "43"
    },
    {
      "label": "Plot Sizes",
      "value": "Approx. 4,306 - 25,449 sq.ft."
    },
    {
      "label": "Website",
      "value": "www.mjhaverigroup.com"
    }
  ],
  "images": [
    "/propertyList/Silver Golf Manor/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Silver Golf Manor/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "M Jhaveri Group",
    "description": "Developer details are taken from the uploaded project brochure and layout drawings."
  },
  "disclaimer": "Project details are prepared from the developer's uploaded brochure and layout drawings. Please verify price, plot/unit sizes, availability, approvals and specifications with the official sales team before making a decision."
},
{
  "id": 400,
  "title": "NRC Business Park",
  "slug": "nrc-business-park-nrc-group",
  "location": "Plot No. 21, Scheme 139, Super Corridor, Next to Bhagirath Tata Motors, Near Luv Kush Square",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Commercial",
  "bhk": "Showrooms & Offices",
  "area": "462 - 2344 Sq.ft. (SBA)",
  "description": "New Race Course Business Park by NRC Group is a premium commercial development on the Super Corridor in Indore, near Luv Kush Square. It offers showrooms on the ground floor and offices on the upper floors around an interactive central atrium, with designated parking, access-controlled elevators, green spaces, natural light and cross ventilation. Per the brochure floor schedules, saleable areas range from roughly 462 sq.ft. for compact offices to about 2344 sq.ft. for larger ground-floor showrooms.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Showrooms and offices in a premium Super Corridor location, 0.5 km from Luv Kush Square",
        "Interactive atrium design with majestic office entrances",
        "Designated parking areas and access-controlled elevators",
        "Designated green spaces, optimised natural lighting and organic air ventilation",
        "IGBC certified heat management with UV infiltration reducing glass",
        "Solar-powered common areas, waste segregation and rainwater harvesting",
        "RERA No. P-IND-23-3982"
      ]
    }
  ],
  "sections": {
    "overview": "A premium commercial building on the Super Corridor, Indore with showrooms and offices around an interactive atrium, near Luv Kush Square.",
    "amenities": [
      {
        "title": "Interactive Atrium",
        "img": "/propertyList/NRC Business Park/img8.jpg"
      },
      {
        "title": "Majestic Office Entrance Lobby",
        "img": "/propertyList/NRC Business Park/img9.jpg"
      },
      {
        "title": "Cafeteria",
        "img": "/propertyList/NRC Business Park/img10.jpg"
      },
      {
        "title": "Lift Lobby with Access-Controlled Elevators",
        "img": "/propertyList/NRC Business Park/img11.jpg"
      },
      {
        "title": "Designated Parking Areas",
        "img": "/propertyList/NRC Business Park/img4.jpg"
      },
      {
        "title": "Green Spaces and Green Balconies",
        "img": "/propertyList/NRC Business Park/img2.jpg"
      }
    ],
    "specifications": [
      "Ground floor showrooms with upper-floor offices; floor-wise unit schedules (carpet, balcony, built-up and SBA) are given in the brochure",
      "Mezzanine, first and typical floors with 6' wide corridors and common green areas",
      "Access-controlled passenger lifts and double-height entrance lobby",
      "Dedicated parking for all offices",
      "IGBC certified, scientifically calibrated heat management with UV infiltration reducing glass",
      "Common areas powered by dedicated solar panels",
      "Eco-friendly waste segregation, rainwater harvesting and water-conserving fixtures"
    ],
    "connectivity": [
      "Luv Kush Square - 0.5 km",
      "ISBT - 2.8 km",
      "Tata Consultancy Services - 5.1 km",
      "Vijaynagar - 6.4 km",
      "SVKM's NMIMS - 8.5 km",
      "Symbiosis University - 8.6 km",
      "Indore International Airport - 10.3 km"
    ],
    "vision": [
      "To provide world-class business spaces with a grand arrival experience, abundant natural light and sustainable, eco-sensitive features."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "New Race Course Business Park"
    },
    {
      "label": "Property Type",
      "value": "Commercial - Showrooms & Offices"
    },
    {
      "label": "Location",
      "value": "Super Corridor, near Luv Kush Square, Indore, Madhya Pradesh"
    },
    {
      "label": "Site Address",
      "value": "Plot Number 21, Scheme 139, Super Corridor, Next to Bhagirath Tata Motors, Near Luv Kush Square, Indore"
    },
    {
      "label": "Developer",
      "value": "NRC Group"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-23-3982"
    },
    {
      "label": "Marketing Partner RERA No.",
      "value": "A-IND-17-47"
    },
    {
      "label": "Architect",
      "value": "Spacon Design (India) Pvt. Ltd."
    },
    {
      "label": "Saleable Area (SBA)",
      "value": "Approx. 462 - 2344 sq.ft."
    },
    {
      "label": "Enquiries",
      "value": "+91 9009 68 68 68, enquiry@newracecourse.com"
    }
  ],
  "images": [
    "/propertyList/NRC Business Park/img1.jpg",
    "/propertyList/NRC Business Park/img14.jpg",
    "/propertyList/NRC Business Park/img15.jpg",
    "/propertyList/NRC Business Park/img2.jpg",
    "/propertyList/NRC Business Park/img3.jpg",
    "/propertyList/NRC Business Park/img4.jpg",
    "/propertyList/NRC Business Park/img5.jpg",
    "/propertyList/NRC Business Park/img6.jpg",
    "/propertyList/NRC Business Park/img7.jpg",
    "/propertyList/NRC Business Park/img8.jpg",
    "/propertyList/NRC Business Park/img9.jpg",
    "/propertyList/NRC Business Park/img10.jpg",
    "/propertyList/NRC Business Park/img11.jpg",
    "/propertyList/NRC Business Park/img12.jpg",
    "/propertyList/NRC Business Park/img13.jpg",
    "/propertyList/NRC Business Park/img16.jpg",
    "/propertyList/NRC Business Park/img17.jpg",
    "/propertyList/NRC Business Park/img18.jpg",
    "/propertyList/NRC Business Park/img19.jpg",
    "/propertyList/NRC Business Park/img20.jpg",
    "/propertyList/NRC Business Park/img21.jpg",
    "/propertyList/NRC Business Park/img22.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/NRC Business Park/img16.jpg",
    "images": [
      "/propertyList/NRC Business Park/img16.jpg",
      "/propertyList/NRC Business Park/img17.jpg",
      "/propertyList/NRC Business Park/img18.jpg",
      "/propertyList/NRC Business Park/img19.jpg",
      "/propertyList/NRC Business Park/img20.jpg",
      "/propertyList/NRC Business Park/img21.jpg",
      "/propertyList/NRC Business Park/img22.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/NRC Business Park/img13.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "NRC Group",
    "description": "NRC Group (New Race Course), Indore. Corporate address: 103 A, Kanchan Sagar Building, AB Road, Indore. Phone +91 7314 2796 33. Website: www.newracecourse.com."
  },
  "disclaimer": "NRC Business Park details are prepared from the developer brochure and site photos. Images are artistic impressions; areas, price, availability and approvals should be verified with the official sales team and RERA records."
},
{
  "id": 401,
  "title": "NRC Greens",
  "slug": "nrc-greens-nrc-group",
  "location": "Baroda Kara, Kanadia Road",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "Approx. 401 - 1588 Sq.ft.",
  "description": "NRC Greens by NRC Group is a gated residential plotted township at Baroda Kara, Kanadia Road, Indore. The master plan has 327 plots of varying sizes (general residential, residential/commercial, LIG and EWS categories) laid out along wide internal roads with a network of landscaped green spaces. Planned lifestyle amenities include a grand entrance gate, tree-lined walkways, gardens, a children's play area, yoga deck, outdoor gym, sports court, amphitheatre and a temple.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Gated township with grand entrance gateway",
        "327 plots; sizes range from about 401 to 1588 sq.ft.",
        "Wide approach road and well-planned internal roads",
        "Landscaped gardens, tree-lined walkways and children's play area",
        "Yoga deck, outdoor gym and sports facilities",
        "Amphitheatre and temple within the community",
        "RERA No. P-IND-25-5617"
      ]
    }
  ],
  "sections": {
    "overview": "A gated plotted township with landscaped open spaces and lifestyle amenities at Baroda Kara, Kanadia Road, Indore.",
    "amenities": [
      {
        "title": "Grand Entrance Gate",
        "img": "/propertyList/NRC Greens/img1.jpg"
      },
      {
        "title": "Tree-lined Walkways",
        "img": "/propertyList/NRC Greens/img4.jpg"
      },
      {
        "title": "Gardens and Children's Play Area",
        "img": "/propertyList/NRC Greens/img5.jpg"
      },
      {
        "title": "Landscaped Seating and Water Feature",
        "img": "/propertyList/NRC Greens/img6.jpg"
      },
      {
        "title": "Yoga Deck",
        "img": "/propertyList/NRC Greens/img7.jpg"
      },
      {
        "title": "Sports Court and Jogging Track",
        "img": "/propertyList/NRC Greens/img8.jpg"
      },
      {
        "title": "Temple",
        "img": "/propertyList/NRC Greens/img9.jpg"
      },
      {
        "title": "Outdoor Gym",
        "img": "/propertyList/NRC Greens/img10.jpg"
      },
      {
        "title": "Amphitheatre",
        "img": "/propertyList/NRC Greens/img11.jpg"
      }
    ],
    "specifications": [
      "327 plots with front, depth and area schedule given in the brochure",
      "Plot categories: general residential, residential/commercial, LIG and EWS",
      "12 m wide approach road with wide internal roads",
      "Landscaped open spaces and perimeter greenery",
      "Outdoor gym, yoga deck, sports area, amphitheatre and temple"
    ],
    "connectivity": [
      "Located at Baroda Kara, Kanadia Road, Indore",
      "Approach via a 12 m wide approach road (location plan in brochure)"
    ],
    "vision": [
      "To create a gated, nature-connected community with wide roads, green spaces and amenities for an active, healthy lifestyle."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "New Race Course NRC Greens"
    },
    {
      "label": "Property Type",
      "value": "Residential Plotted Township"
    },
    {
      "label": "Location",
      "value": "Baroda Kara, Kanadia Road, Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "NRC Group"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-25-5617"
    },
    {
      "label": "Marketing Partner RERA No.",
      "value": "A-IND-17-47"
    },
    {
      "label": "Total Plots",
      "value": "327"
    },
    {
      "label": "Plot Sizes",
      "value": "Approx. 401 - 1588 sq.ft."
    },
    {
      "label": "Architect",
      "value": "Spacon Design (India) Pvt. Ltd."
    },
    {
      "label": "Enquiries",
      "value": "+91 9009 68 68 68, enquiry@newracecourse.com"
    }
  ],
  "images": [
    "/propertyList/NRC Greens/img1.jpg",
    "/propertyList/NRC Greens/img2.jpg",
    "/propertyList/NRC Greens/img3.jpg",
    "/propertyList/NRC Greens/img4.jpg",
    "/propertyList/NRC Greens/img5.jpg",
    "/propertyList/NRC Greens/img6.jpg",
    "/propertyList/NRC Greens/img7.jpg",
    "/propertyList/NRC Greens/img8.jpg",
    "/propertyList/NRC Greens/img9.jpg",
    "/propertyList/NRC Greens/img10.jpg",
    "/propertyList/NRC Greens/img11.jpg",
    "/propertyList/NRC Greens/img12.jpg",
    "/propertyList/NRC Greens/img13.jpg",
    "/propertyList/NRC Greens/img14.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/NRC Greens/img12.jpg",
    "images": [
      "/propertyList/NRC Greens/img12.jpg",
      "/propertyList/NRC Greens/img13.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/NRC Greens/img14.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "NRC Group",
    "description": "NRC Group (New Race Course), Indore. Corporate address: 103 A, Kanchan Sagar Building, AB Road, Indore. Phone +91 7314 2796 33."
  },
  "disclaimer": "NRC Greens details are prepared from the developer brochure dated 30 May 2025. Images are artistic impressions; plot dimensions, price, availability and approvals should be verified with the official sales team and RERA records."
},
{
  "id": 402,
  "title": "NRC IT Park",
  "slug": "nrc-it-park-nrc-group",
  "location": "",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Commercial",
  "bhk": "Offices",
  "area": "",
  "description": "NRC IT Park (New Race Course IT Park) by NRC Group is a premium commercial ecosystem for offices in Indore. As per the promotional creative, the project is TNCP approved with development permission and building permission secured, and offices can be booked with just 1%. Detailed size, price and location information is not available in the provided material.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "TNCP approved",
        "Development permission secured",
        "Building permission secured",
        "Book your office with just 1%"
      ]
    }
  ],
  "sections": {
    "overview": "A premium commercial IT park ecosystem by NRC Group, Indore, with TNCP approval and development and building permissions secured.",
    "amenities": [],
    "specifications": [],
    "connectivity": [],
    "vision": [
      "A premium commercial ecosystem where infrastructure meets opportunity."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "New Race Course IT Park (NRC IT Park)"
    },
    {
      "label": "Property Type",
      "value": "Commercial - IT Park Offices"
    },
    {
      "label": "City",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "NRC Group"
    },
    {
      "label": "Approvals",
      "value": "TNCP approved; development permission and building permission secured"
    },
    {
      "label": "Marketing Partner",
      "value": "Ranveer Realty (RERA No. A-IND-17-47)"
    },
    {
      "label": "Enquiries",
      "value": "+91 90096 86868 (Ranveer Realty)"
    }
  ],
  "images": [
    "/propertyList/NRC IT Park/img1.jpg"
  ],
  "floorPlan": {
    "image": "",
    "images": [],
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "NRC Group",
    "description": "NRC Group (New Race Course), Indore. Exclusively marketed by Ranveer Realty, MR 10, Kumedi, near upcoming Hotel Taj Vivanta, Indore."
  },
  "disclaimer": "NRC IT Park details are prepared only from a promotional creative. Image is an artistic impression; size, price, location, availability and approvals should be verified with the official sales team."
},
{
  "id": 420,
  "title": "Anand Vihar",
  "slug": "anand-vihar-ruchi-lifescapes",
  "location": "Morod, Near Country Club, Tejaji Nagar, Khandwa Road",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "",
  "description": "Anand Vihar is a plotted township on Khandwa Road, Indore, near Country Club and Tejaji Nagar. The township is planned with 18 meter and 9 meter wide concrete roads, a fully equipped clubhouse, swimming pool, indoor games room, library, gymnasium, parks and gardens, kids play-zone, walking and jogging tracks and a plot reserved for a primary school. RERA Registered No.: P-IND-17-1342.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Safe township with 18 m and 9 m wide concrete roads",
        "Fully equipped clubhouse with swimming pool",
        "Indoor games room (table tennis, chess, ludo, carom), library and gymnasium",
        "More than one park and garden with walking and jogging tracks",
        "Plot for primary school; storm waterline; overhead electricity transmitter unit",
        "RERA Registered No.: P-IND-17-1342"
      ]
    }
  ],
  "sections": {
    "overview": "A safe plotted township on Khandwa Road, Indore with a clubhouse, swimming pool, parks and wide concrete roads.",
    "amenities": [
      {
        "title": "Clubhouse",
        "img": "/propertyList/Anand Vihar by Ruchi Lifescapes/img3.jpg"
      },
      {
        "title": "Swimming Pool",
        "img": "/propertyList/Anand Vihar by Ruchi Lifescapes/img2.jpg"
      },
      {
        "title": "Indoor Games Room",
        "img": "/propertyList/Anand Vihar by Ruchi Lifescapes/img2.jpg"
      },
      {
        "title": "Library and Gymnasium",
        "img": "/propertyList/Anand Vihar by Ruchi Lifescapes/img2.jpg"
      },
      {
        "title": "Open Playground",
        "img": "/propertyList/Anand Vihar by Ruchi Lifescapes/img2.jpg"
      },
      {
        "title": "Parks and Gardens",
        "img": "/propertyList/Anand Vihar by Ruchi Lifescapes/img2.jpg"
      },
      {
        "title": "Kids Play-zone",
        "img": "/propertyList/Anand Vihar by Ruchi Lifescapes/img2.jpg"
      },
      {
        "title": "Walking and Jogging Tracks",
        "img": "/propertyList/Anand Vihar by Ruchi Lifescapes/img2.jpg"
      },
      {
        "title": "Gazebo",
        "img": "/propertyList/Anand Vihar by Ruchi Lifescapes/img2.jpg"
      }
    ],
    "specifications": [
      "18 meter and 9 meter wide concrete roads",
      "Boundary wall and water tank",
      "Plot for primary school",
      "Convenient pedestrian track",
      "Storm waterline",
      "Overhead electricity transmitter unit"
    ],
    "connectivity": [
      "Tejaji Nagar Square - 1.5 km",
      "Carmel Convent School - 1 km",
      "Crystal IT Park Square - 5 km",
      "Bhawarkua Square - 7 km",
      "On Indore-Khandwa Road near Morod Phata, with bypass road access"
    ],
    "vision": [
      "A township for your dream home, with community amenities and green open spaces."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Anand Vihar"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Morod, Near Country Club, Tejaji Nagar, Khandwa Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Ruchi Lifescapes"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-17-1342"
    },
    {
      "label": "Booking Contact",
      "value": "91099-70962, 91099-70963"
    },
    {
      "label": "Email",
      "value": "info@anandviharindore.com"
    },
    {
      "label": "Website",
      "value": "www.anandviharindore.com"
    }
  ],
  "images": [
    "/propertyList/Anand Vihar by Ruchi Lifescapes/img1.jpg",
    "/propertyList/Anand Vihar by Ruchi Lifescapes/img2.jpg",
    "/propertyList/Anand Vihar by Ruchi Lifescapes/img3.jpg",
    "/propertyList/Anand Vihar by Ruchi Lifescapes/img5.jpg",
    "/propertyList/Anand Vihar by Ruchi Lifescapes/img4.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Anand Vihar by Ruchi Lifescapes/img4.jpg",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Anand Vihar by Ruchi Lifescapes/img5.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Ruchi Lifescapes",
    "description": "Ruchi Realty (Ruchi Lifescapes) is an Indore-based developer that began its journey in 2008, with townships and projects in Indore, Bhopal and Kolkata. Per its brochure: 10+ million sq.ft. sold, 5+ million sq.ft. under construction, 12+ ready-to-move-in spaces delivered, 5+ ongoing projects and 5000+ families residing."
  },
  "disclaimer": "Anand Vihar details are prepared only from the uploaded brochure. Price, plot sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 421,
  "title": "Oscar Fort",
  "slug": "oscar-fort-ruchi-lifescapes",
  "location": "Bicholi Hapsi, Near Mayank Blue Water Park",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "",
  "description": "Oscar Fort is a limited-edition gated plotted township at Bicholi Hapsi, Indore, near Mayank Blue Water Park. Its design is inspired by traditional Indian fort architecture with jharokha and jaali work, and the brochure describes it as sprawling over several acres with the serenity of a country township and modern city amenities. Planned amenities include a Fort grand entry, zero-edge swimming pool, amphitheatre, banquet hall, indoor and outdoor gym, kids play area and more. Oscar Fort is a niche brand of Ruchi Realty. RERA No.: P-IND-22-3414.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Limited edition plots in a premium gated township close to the city",
        "Fort-inspired architecture with jharokha and jaali work",
        "Highly secured fort wall, CCTV surveillance and modern security systems",
        "Zero edge swimming pool, jacuzzi / steam / sauna, amphitheatre and banquet hall",
        "Baoli-style amphitheatre, kids play zone, leisure garden and avenue water features",
        "RERA No.: P-IND-22-3414"
      ]
    }
  ],
  "sections": {
    "overview": "A premium fort-themed gated plotted township at Bicholi Hapsi, Indore by Ruchi Realty.",
    "amenities": [
      {
        "title": "Fort Grand Entry",
        "img": "/propertyList/Oscar Fort by Ruchi Lifescapes/img3.jpg"
      },
      {
        "title": "Kids Play Area",
        "img": "/propertyList/Oscar Fort by Ruchi Lifescapes/img9.jpg"
      },
      {
        "title": "Senior Citizen Garden",
        "img": "/propertyList/Oscar Fort by Ruchi Lifescapes/img7.jpg"
      },
      {
        "title": "Outdoor Games Area",
        "img": "/propertyList/Oscar Fort by Ruchi Lifescapes/img8.jpg"
      },
      {
        "title": "Zero Edge Swimming Pool",
        "img": "/propertyList/Oscar Fort by Ruchi Lifescapes/img10.jpg"
      },
      {
        "title": "Amphitheatre",
        "img": "/propertyList/Oscar Fort by Ruchi Lifescapes/img7.jpg"
      },
      {
        "title": "Indoor and Outdoor Gym",
        "img": "/propertyList/Oscar Fort by Ruchi Lifescapes/img11.jpg"
      },
      {
        "title": "Banquet Hall",
        "img": "/propertyList/Oscar Fort by Ruchi Lifescapes/img11.jpg"
      },
      {
        "title": "Avenue Water Features",
        "img": "/propertyList/Oscar Fort by Ruchi Lifescapes/img6.jpg"
      },
      {
        "title": "Yoga and Meditation Area",
        "img": "/propertyList/Oscar Fort by Ruchi Lifescapes/img11.jpg"
      },
      {
        "title": "Library, Indoor Games Room",
        "img": "/propertyList/Oscar Fort by Ruchi Lifescapes/img11.jpg"
      }
    ],
    "specifications": [
      "Kids Play Area",
      "Senior Citizen Garden",
      "Outdoor Games Area (Cricket Mini Turf / Basketball Court)",
      "Library",
      "All modern security system and CCTV surveillance",
      "Highly secured fort wall",
      "Zero edge swimming pool; jacuzzi / steam / sauna",
      "Amphitheatre; banquet hall; indoor and outdoor gym",
      "Fort grand entry; avenue water features",
      "Underground services (electric and wifi cables)",
      "Indoor games room (chess / carrom / card room / table tennis / billiards)",
      "Yoga and meditation area",
      "Site plan features: Entrance Court, Formal Gardens, MUGA, Baoli Style Amphitheatre, Kids Play Zone, Leisure Garden, Parterres, Lawns, Water Feature Wall, Baradari"
    ],
    "connectivity": [
      "Located at Bicholi Hapsi near Mayank Blue Water Park",
      "Proposed 100 ft road",
      "Near Agrawal Public School, Zodiac Mall, Passport Office and Pipliyahana Square (per location map)",
      "Access to Ring Road and Bypass"
    ],
    "vision": [
      "Feel royal, live royal: a kingdom of dreams and happiness in a gated community."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Oscar Fort"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Bicholi Hapsi, Near Mayank Blue Water Park, Indore"
    },
    {
      "label": "Developer",
      "value": "Ruchi Realty"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-22-3414"
    },
    {
      "label": "Email",
      "value": "amanatinfratech2020@gmail.com"
    }
  ],
  "images": [
    "/propertyList/Oscar Fort by Ruchi Lifescapes/img1.jpg",
    "/propertyList/Oscar Fort by Ruchi Lifescapes/img13.jpg",
    "/propertyList/Oscar Fort by Ruchi Lifescapes/img3.jpg",
    "/propertyList/Oscar Fort by Ruchi Lifescapes/img4.jpg",
    "/propertyList/Oscar Fort by Ruchi Lifescapes/img5.jpg",
    "/propertyList/Oscar Fort by Ruchi Lifescapes/img6.jpg",
    "/propertyList/Oscar Fort by Ruchi Lifescapes/img7.jpg",
    "/propertyList/Oscar Fort by Ruchi Lifescapes/img8.jpg",
    "/propertyList/Oscar Fort by Ruchi Lifescapes/img9.jpg",
    "/propertyList/Oscar Fort by Ruchi Lifescapes/img10.jpg",
    "/propertyList/Oscar Fort by Ruchi Lifescapes/img11.jpg",
    "/propertyList/Oscar Fort by Ruchi Lifescapes/img12.jpg",
    "/propertyList/Oscar Fort by Ruchi Lifescapes/img2.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Oscar Fort by Ruchi Lifescapes/img13.jpg",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Oscar Fort by Ruchi Lifescapes/img13.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Ruchi Realty",
    "description": "Ruchi Realty (Ruchi Lifescapes) is an Indore-based developer that began its journey in 2008, with townships and projects in Indore, Bhopal and Kolkata. Per its brochure: 10+ million sq.ft. sold, 5+ million sq.ft. under construction, 12+ ready-to-move-in spaces delivered, 5+ ongoing projects and 5000+ families residing. Oscar Fort is a niche brand of Ruchi Realty."
  },
  "disclaimer": "Oscar Fort details are prepared only from the uploaded brochure. Price, plot sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 422,
  "title": "Oscar Palace",
  "slug": "oscar-palace-ruchi-lifescapes",
  "location": "Hingoniya, Off Indore Nagpur Highway (Besides Ruchi Lifescapes, Jhalariya)",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "3,500 - 20,000 sq.ft. (325 - 1,858 sq.m.)",
  "description": "Oscar Palace is a 60+ acre plotted township at Hingoniya, off the Indore-Nagpur Highway, beside Ruchi Lifescapes, Jhalariya, Indore. The brochure offers plot sizes from 325 to 1,858 sq. mtr (3,500 to 20,000 sq. ft.) so buyers can build a palatial house or a modern villa. The township has a heritage-themed design with a grand entrance, baradaris, chhatris and gazebos, and amenities include tennis and basketball court, cricket and football turf, pickleball, skating rink, temples, sky walk, library room, EV charging stations and more. RERA: P-IND-24-4828.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "60+ acre township with plot sizes from 325 to 1,858 sq. mtr (3,500 to 20,000 sq. ft.)",
        "Heritage-themed design with grand entrance, baradaris, chhatris and gazebos",
        "Tennis and basketball court, cricket and football turf, pickleball, skating rink",
        "Gardens, kids play area, outdoor pet park, senior citizen park, temples",
        "EV charging stations, ambulance and doctor on call, heritage-themed street lighting",
        "RERA: P-IND-24-4828"
      ]
    }
  ],
  "sections": {
    "overview": "A 60+ acre heritage-inspired plotted township at Hingoniya, Indore by Ruchi Realty.",
    "amenities": [
      {
        "title": "Tennis and Basketball Court",
        "img": "/propertyList/Oscar Palace by Ruchi Lifescapes/img15.jpg"
      },
      {
        "title": "Kids Play Area",
        "img": "/propertyList/Oscar Palace by Ruchi Lifescapes/img15.jpg"
      },
      {
        "title": "Gardens",
        "img": "/propertyList/Oscar Palace by Ruchi Lifescapes/img6.jpg"
      },
      {
        "title": "Yoga and Meditation Spaces",
        "img": "/propertyList/Oscar Palace by Ruchi Lifescapes/img10.jpg"
      },
      {
        "title": "Jogging and Walking Tracks",
        "img": "/propertyList/Oscar Palace by Ruchi Lifescapes/img12.jpg"
      },
      {
        "title": "Water Fountains",
        "img": "/propertyList/Oscar Palace by Ruchi Lifescapes/img13.jpg"
      },
      {
        "title": "Baradaris, Chhatris and Gazebos",
        "img": "/propertyList/Oscar Palace by Ruchi Lifescapes/img5.jpg"
      },
      {
        "title": "Senior Citizen Park",
        "img": "/propertyList/Oscar Palace by Ruchi Lifescapes/img3.jpg"
      },
      {
        "title": "Temples",
        "img": "/propertyList/Oscar Palace by Ruchi Lifescapes/img9.jpg"
      }
    ],
    "specifications": [
      "Tennis and Basketball Court",
      "Cricket and Football Turf",
      "Pickleball",
      "Open Gym",
      "Skating Rink",
      "Temples",
      "Gardens",
      "Kids Play Area",
      "Barbeque, Grill and Picnic Zone",
      "Outdoor Pet Park",
      "Doctor on Call",
      "Ambulance",
      "Library Room",
      "Sky Walk",
      "Water Fountains",
      "Senior Citizen Park",
      "Stargazing Deck",
      "Campfire Zone",
      "EV Charging Stations",
      "Yoga and Meditation Spaces",
      "Jogging and Walking Tracks",
      "Baradaris, Chhatris and Gazebos",
      "Selfie Walls and Wall Sculptures",
      "Heritage Themed Street Lighting"
    ],
    "connectivity": [
      "Off Indore Nagpur Highway at Hingoniya, beside Ruchi Lifescapes, Jhalariya",
      "Proposed 60 mtr wide road (NH-59), 30 mtr wide master plan roads and 18 mtr wide road nearby (per location map)",
      "Landmarks on location map: Shishukunj School, Phoenix Citadel Mall, Best Price, Mridang Resorts, Khajrana, Oscar Pride, Oscar Fort, Oscar Mansion"
    ],
    "vision": [
      "Shape your dream palace here, your majesty."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Oscar Palace"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Hingoniya, Off Indore Nagpur Highway, Indore - 452016"
    },
    {
      "label": "Developer",
      "value": "Ruchi Realty"
    },
    {
      "label": "Plot Sizes",
      "value": "325 - 1,858 sq. mtr (3,500 - 20,000 sq. ft.)"
    },
    {
      "label": "Project Area",
      "value": "60+ acres"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-24-4828"
    },
    {
      "label": "Contact",
      "value": "+91 89292 25275"
    },
    {
      "label": "Email",
      "value": "emarketing@rrhlrealty.com"
    },
    {
      "label": "Website",
      "value": "ruchirealty.com/oscar-palace"
    },
    {
      "label": "City Office",
      "value": "Nishchit Infratech Pvt. Ltd., 2/1, South Tukoganj, Behind High Court, Indore - 452001"
    }
  ],
  "images": [
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img7.jpg",
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img1.jpg",
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img2.jpg",
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img3.jpg",
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img4.jpg",
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img5.jpg",
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img6.jpg",
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img8.jpg",
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img9.jpg",
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img10.jpg",
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img11.jpg",
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img12.jpg",
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img13.jpg",
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img14.jpg",
    "/propertyList/Oscar Palace by Ruchi Lifescapes/img15.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Oscar Palace by Ruchi Lifescapes/img16.jpg",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Oscar Palace by Ruchi Lifescapes/img16.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Ruchi Realty",
    "description": "Ruchi Realty (Ruchi Lifescapes) is an Indore-based developer that began its journey in 2008, with townships and projects in Indore, Bhopal and Kolkata. Per its brochure: 10+ million sq.ft. sold, 5+ million sq.ft. under construction, 12+ ready-to-move-in spaces delivered, 5+ ongoing projects and 5000+ families residing."
  },
  "disclaimer": "Oscar Palace details are prepared only from the uploaded brochure. Price, plot sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 423,
  "title": "Oscar Pride",
  "slug": "oscar-pride-ruchi-lifescapes",
  "location": "Bypass, near Bhandari Resort, Kanadiya Bypass Square",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "1,070 - 3,210 sq.ft.",
  "description": "Oscar Pride is an 8 acre plotted project on the Indore Bypass, near Kanadiya Bypass Square. The brochure describes plots to suit varied needs and budgets, with easy connectivity to schools, colleges, hospitals and shopping centres. The layout plan lists 129 plots on 9.0 mt wide roads with plot areas from 1,070 to 3,210 sq.ft. Amenities shown include a gymnasium, swimming pool, kids play area, senior citizen gardens, jogging track, temple, Buddha statue, gardens and barbeque area.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Spread over 8 acres on the Bypass, Indore",
        "Plots from 1,070 to 3,210 sq.ft. as per the layout plan (129 plots)",
        "9.0 mt wide internal roads and open areas",
        "Gymnasium, swimming pool, kids play area and senior citizen gardens",
        "Temple, Buddha statue, jogging track and barbeque area",
        "Close to Pride Hotel and Convention (2.4 km), Phoenix Mall (3.0 km) and ISKCON Temple (3.3 km)"
      ]
    }
  ],
  "sections": {
    "overview": "A plotted project of about 8 acres on Bypass Road, Indore by Ruchi Realty - Your Royal Abode.",
    "amenities": [
      {
        "title": "Entrance Gate",
        "img": "/propertyList/Oscar Pride by Ruchi Lifescapes/img2.jpg"
      },
      {
        "title": "Temple",
        "img": "/propertyList/Oscar Pride by Ruchi Lifescapes/img2.jpg"
      },
      {
        "title": "Buddha Statue",
        "img": "/propertyList/Oscar Pride by Ruchi Lifescapes/img2.jpg"
      },
      {
        "title": "Jogging Track",
        "img": "/propertyList/Oscar Pride by Ruchi Lifescapes/img3.jpg"
      },
      {
        "title": "Gymnasium",
        "img": "/propertyList/Oscar Pride by Ruchi Lifescapes/img3.jpg"
      },
      {
        "title": "Kids Play Area",
        "img": "/propertyList/Oscar Pride by Ruchi Lifescapes/img4.jpg"
      },
      {
        "title": "Garden",
        "img": "/propertyList/Oscar Pride by Ruchi Lifescapes/img4.jpg"
      },
      {
        "title": "Barbeque Area",
        "img": "/propertyList/Oscar Pride by Ruchi Lifescapes/img5.jpg"
      }
    ],
    "specifications": [
      "Plots with 9.0 mt wide roads",
      "Open green areas within the layout",
      "Plot sizes: 1070, 1150, 1250, 1300, 1345, 1496, 1500, 1664, 2600, 2800 and 3210 sq.ft. (per layout plan)",
      "Highly secured and encompassed with essential amenities"
    ],
    "connectivity": [
      "Pride Hotel and Convention - 2.4 km",
      "Best Price - 2.5 km",
      "Amber Convention Centre - 2.5 km",
      "Phoenix Mall - 3.0 km",
      "ISKCON Temple - 3.3 km",
      "Shishukunj School - 3.9 km",
      "Khajrana Temple - 3.9 km",
      "Delhi Public School - 4.1 km",
      "Sheraton Grand - 5.0 km",
      "Bombay Hospital - 5.5 km",
      "Medanta Hospital - 6.1 km",
      "Railway Station - 7.6 km",
      "Ralamandal Wildlife Sanctuary - 10 km",
      "Airport - 22 km"
    ],
    "vision": [
      "Let your address be your pride: a plotted project planned on quality, sustainability, beauty, peace and serenity."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Oscar Pride"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Bypass, near Bhandari Resort, Kanadiya Bypass Square, Indore"
    },
    {
      "label": "Developer",
      "value": "Ruchi Realty"
    },
    {
      "label": "Project Area",
      "value": "8 acres"
    },
    {
      "label": "Total Plots (layout)",
      "value": "129"
    },
    {
      "label": "Plot Areas (layout)",
      "value": "1,070 - 3,210 sq.ft."
    }
  ],
  "images": [
    "/propertyList/Oscar Pride by Ruchi Lifescapes/img1.jpg",
    "/propertyList/Oscar Pride by Ruchi Lifescapes/img2.jpg",
    "/propertyList/Oscar Pride by Ruchi Lifescapes/img3.jpg",
    "/propertyList/Oscar Pride by Ruchi Lifescapes/img4.jpg",
    "/propertyList/Oscar Pride by Ruchi Lifescapes/img5.jpg",
    "/propertyList/Oscar Pride by Ruchi Lifescapes/img6.jpg",
    "/propertyList/Oscar Pride by Ruchi Lifescapes/img7.jpg",
    "/propertyList/Oscar Pride by Ruchi Lifescapes/img8.jpg",
    "/propertyList/Oscar Pride by Ruchi Lifescapes/img9.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Oscar Pride by Ruchi Lifescapes/img9.jpg",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Oscar Pride by Ruchi Lifescapes/img8.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Ruchi Realty",
    "description": "Ruchi Realty (Ruchi Lifescapes) is an Indore-based developer that began its journey in 2008, with townships and projects in Indore, Bhopal and Kolkata. Per its brochure: 10+ million sq.ft. sold, 5+ million sq.ft. under construction, 12+ ready-to-move-in spaces delivered, 5+ ongoing projects and 5000+ families residing."
  },
  "disclaimer": "Oscar Pride details are prepared only from the uploaded brochure. Price, plot sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 424,
  "title": "Saatvik Green",
  "slug": "saatvik-green-ruchi-lifescapes",
  "location": "Near Center Point Petrol Pump, Rahu Kheda, A.B. Road, Mangaliya",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "",
  "description": "Saatvik Green is a 28 acre plotted township by Ruchi Realty on the Mangaliya Bypass, A.B. Road, Indore, with direct city connectivity. The leaflet lists a covered campus, 8+ gardens, kids play zone, a proposed Shiv and Parshwanath Jain temple, multi sports turf, adequate electricity and water, 24x7 security guard, 9 m and 18 m roads and underground electricity. It offers plots of every size to suit different budgets. RERA No.: P-SWR-24-4662, P-SWR-24-4859.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "28 acre secure and developed township",
        "Location on Mangaliya Bypass, A.B. Road with direct city connectivity",
        "Plots of every size to suit every budget",
        "Covered campus, 8+ gardens, kids play zone, multi sports turf",
        "Proposed Shiv and Parshwanath Jain temple",
        "9 m and 18 m roads, 24x7 security guard and underground electricity",
        "RERA No.: P-SWR-24-4662, P-SWR-24-4859"
      ]
    }
  ],
  "sections": {
    "overview": "A 28 acre secure gated plotted township on A.B. Road, Mangaliya, Indore by Ruchi Realty.",
    "amenities": [
      {
        "title": "Covered Campus",
        "img": "/propertyList/Saatvik Green by Ruchi Lifescapes/img2.jpg"
      },
      {
        "title": "Gardens (8+)",
        "img": "/propertyList/Saatvik Green by Ruchi Lifescapes/img3.jpg"
      },
      {
        "title": "Kids Play Zone",
        "img": "/propertyList/Saatvik Green by Ruchi Lifescapes/img3.jpg"
      },
      {
        "title": "Multi Sports Turf",
        "img": "/propertyList/Saatvik Green by Ruchi Lifescapes/img3.jpg"
      },
      {
        "title": "Proposed Temples",
        "img": "/propertyList/Saatvik Green by Ruchi Lifescapes/img3.jpg"
      }
    ],
    "specifications": [
      "Covered campus",
      "8+ gardens",
      "Kids play zone",
      "Proposed Shiv and Parshwanath Jain temple",
      "Multi sports turf",
      "Adequate electricity and water",
      "24x7 security guard",
      "9 m and 18 m wide roads",
      "Underground electricity"
    ],
    "connectivity": [
      "Mangaliya Bypass, A.B. Road - easy connectivity across the city",
      "Nearby schools, colleges, hospitals, market, mall and hotels within minutes (distances not specified)"
    ],
    "vision": [
      "Own a home in a green, thoughtfully planned township with a prosperous future."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Saatvik Green"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Near Center Point Petrol Pump, Rahu Kheda, A.B. Road, Mangaliya, Indore"
    },
    {
      "label": "Developer",
      "value": "Ruchi Realty"
    },
    {
      "label": "Project Area",
      "value": "28 acres"
    },
    {
      "label": "RERA No.",
      "value": "P-SWR-24-4662, P-SWR-24-4859"
    },
    {
      "label": "Contact",
      "value": "89292 25275"
    },
    {
      "label": "Email",
      "value": "emarketing@rrhlrealty.com"
    },
    {
      "label": "Website",
      "value": "saatvikgreen.in"
    }
  ],
  "images": [
    "/propertyList/Saatvik Green by Ruchi Lifescapes/img1.jpg",
    "/propertyList/Saatvik Green by Ruchi Lifescapes/img2.jpg",
    "/propertyList/Saatvik Green by Ruchi Lifescapes/img3.jpg",
    "/propertyList/Saatvik Green by Ruchi Lifescapes/img4.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Saatvik Green by Ruchi Lifescapes/img4.jpg",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Saatvik Green by Ruchi Lifescapes/img4.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Ruchi Realty",
    "description": "Ruchi Realty (Ruchi Lifescapes) is an Indore-based developer that began its journey in 2008, with townships and projects in Indore, Bhopal and Kolkata. Per its brochure: 10+ million sq.ft. sold, 5+ million sq.ft. under construction, 12+ ready-to-move-in spaces delivered, 5+ ongoing projects and 5000+ families residing."
  },
  "disclaimer": "Saatvik Green details are prepared only from the uploaded brochure. Price, plot sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 425,
  "title": "Satvik Vihar",
  "slug": "satvik-vihar-ruchi-lifescapes",
  "location": "Near Sanchi Depot, Mangaliya Sadak, A.B. Road",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "600 - 1,350 sq.ft.",
  "description": "Satvik (Saatvik) Vihar is a RERA-approved plotted township by Ruchi Realty Pvt. Ltd. near Sanchi Depot, Mangaliya Sadak, A.B. Road, Indore. As per the brochure, plots range from 600 sq.ft. to 1,350 sq.ft., and every plot gets a front boundary wall so the whole colony looks uniform. The township is planned with a grand entrance plaza, temple, wide roads with street lights, cycle and jogging track, fruit park, kids play zone, acupressure and yoga garden and senior citizen park, with 24-hour security guards and city bus facility from the main road.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Plots from 600 sq.ft. to 1,350 sq.ft.",
        "Front boundary wall for every plot for a uniform colony",
        "Grand entrance plaza, temple and planned development",
        "Wide roads with street lights; cycle and jogging track",
        "Fruit park, kids play zone, acupressure and yoga garden, senior citizen park",
        "24-hour security guards; city bus facility from the main road",
        "RERA approved"
      ]
    }
  ],
  "sections": {
    "overview": "A RERA-approved green plotted township on A.B. Road, Indore by Ruchi Realty Pvt. Ltd.",
    "amenities": [
      {
        "title": "Entrance Plaza",
        "img": "/propertyList/Satvik Vihar by Ruchi Lifescapes/img1.jpg"
      },
      {
        "title": "Kids Play Zone",
        "img": "/propertyList/Satvik Vihar by Ruchi Lifescapes/img14.jpg"
      },
      {
        "title": "Fruit Park",
        "img": "/propertyList/Satvik Vihar by Ruchi Lifescapes/img14.jpg"
      },
      {
        "title": "Acupressure and Yoga Garden",
        "img": "/propertyList/Satvik Vihar by Ruchi Lifescapes/img14.jpg"
      },
      {
        "title": "Senior Citizen Park",
        "img": "/propertyList/Satvik Vihar by Ruchi Lifescapes/img14.jpg"
      },
      {
        "title": "Cycle and Jogging Track",
        "img": "/propertyList/Satvik Vihar by Ruchi Lifescapes/img13.jpg"
      },
      {
        "title": "Wide Roads and Street Lights",
        "img": "/propertyList/Satvik Vihar by Ruchi Lifescapes/img13.jpg"
      },
      {
        "title": "24-hour Security Guard",
        "img": "/propertyList/Satvik Vihar by Ruchi Lifescapes/img13.jpg"
      },
      {
        "title": "Temple and Planned Development",
        "img": "/propertyList/Satvik Vihar by Ruchi Lifescapes/img3.jpg"
      }
    ],
    "specifications": [
      "Front boundary wall for every plot",
      "Wide roads and street lights",
      "Cycle and jogging track",
      "24-hour security guards",
      "City bus facility from main road"
    ],
    "connectivity": [
      "Prime location on A.B. Road (Indore - Agra-Mumbai Highway), near Sanchi Depot, Mangaliya Sadak",
      "City bus facility from the main road"
    ],
    "vision": [
      "Prakriti ki god mein aapka swagat hai: a green township close to the city and away from pollution."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Satvik Vihar"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Near Sanchi Depot, Mangaliya Sadak, A.B. Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Ruchi Realty Pvt. Ltd."
    },
    {
      "label": "Plot Sizes",
      "value": "600 - 1,350 sq.ft."
    },
    {
      "label": "RERA",
      "value": "Approved (number not stated in brochure)"
    }
  ],
  "images": [
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img1.jpg",
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img2.jpg",
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img3.jpg",
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img4.jpg",
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img5.jpg",
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img6.jpg",
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img7.jpg",
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img8.jpg",
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img9.jpg",
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img10.jpg",
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img11.jpg",
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img12.jpg",
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img13.jpg",
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img14.jpg",
    "/propertyList/Satvik Vihar by Ruchi Lifescapes/img15.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Satvik Vihar by Ruchi Lifescapes/img12.jpg",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Satvik Vihar by Ruchi Lifescapes/img15.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Ruchi Realty Pvt. Ltd.",
    "description": "Ruchi Realty (Ruchi Lifescapes) is an Indore-based developer that began its journey in 2008, with townships and projects in Indore, Bhopal and Kolkata. Per its brochure: 10+ million sq.ft. sold, 5+ million sq.ft. under construction, 12+ ready-to-move-in spaces delivered, 5+ ongoing projects and 5000+ families residing."
  },
  "disclaimer": "Satvik Vihar details are prepared only from the uploaded brochure. Price, plot sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 426,
  "title": "Ruchi Lifescapes Indore",
  "slug": "ruchi-lifescapes-indore-ruchi-realty",
  "location": "Behind Shishukunj School, Bypass, Jhalaria Village",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "1,400 - 10,000 sq.ft.",
  "description": "Ruchi Lifescapes Indore is a premium township of about 75 acres (the leaflet also mentions 73 acres) at Jhalaria on the Indore Bypass, with villas, row houses and plots. The leaflet lists plot sizes of 1400, 1800, 2322, 2800, 3500, 4000 and 10,000 sq.ft. and highlights 15 XL gardens, 700 happy families, cemented roads, kids play area, gym, advanced CCTV system and a yoga / meditation area. RERA No.: P-IND-17-1024.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "About 75 acres township at Jhalaria, Indore Bypass",
        "Plot sizes: 1400, 1800, 2322, 2800, 3500, 4000 and 10,000 sq.ft.",
        "15 XL gardens and 700 happy families",
        "Cemented roads, kids play area, gym, advanced CCTV and yoga / meditation area",
        "Ready possession villas and row houses",
        "Home loan facility available from leading banks",
        "RERA No.: P-IND-17-1024"
      ]
    }
  ],
  "sections": {
    "overview": "A premium township at Jhalaria on the Indore Bypass by Ruchi Realty with plots, villas and row houses.",
    "amenities": [
      {
        "title": "Cemented Roads",
        "img": "/propertyList/Ruchi Lifescapes Indore by Ruchi Lifescapes/img3.jpg"
      },
      {
        "title": "Kids Play Area",
        "img": "/propertyList/Ruchi Lifescapes Indore by Ruchi Lifescapes/img3.jpg"
      },
      {
        "title": "Gym",
        "img": "/propertyList/Ruchi Lifescapes Indore by Ruchi Lifescapes/img2.jpg"
      },
      {
        "title": "Advanced CCTV System",
        "img": "/propertyList/Ruchi Lifescapes Indore by Ruchi Lifescapes/img3.jpg"
      },
      {
        "title": "Yoga / Meditation Area",
        "img": "/propertyList/Ruchi Lifescapes Indore by Ruchi Lifescapes/img3.jpg"
      },
      {
        "title": "Outdoor Games Court",
        "img": "/propertyList/Ruchi Lifescapes Indore by Ruchi Lifescapes/img3.jpg"
      },
      {
        "title": "XL Gardens",
        "img": "/propertyList/Ruchi Lifescapes Indore by Ruchi Lifescapes/img3.jpg"
      }
    ],
    "specifications": [
      "Cemented roads",
      "Kids play area",
      "Gym",
      "Advanced CCTV system",
      "Yoga / meditation area",
      "Outdoor games court",
      "15 XL gardens"
    ],
    "connectivity": [
      "Railway station - 9 km",
      "Hotel - 1 km",
      "Airport - 22 km",
      "School - 2 km",
      "Hospital - 3 km",
      "Mall - 4 km",
      "Nagpur highway - 200 mtr",
      "MR-10 - 3 km"
    ],
    "vision": [
      "Live a legacy that defines happiness: a thoughtfully designed layout with well-planned roadway and lush green zones."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Ruchi Lifescapes Indore"
    },
    {
      "label": "Property Type",
      "value": "Plots, Villas and Row Houses (plot layout shown)"
    },
    {
      "label": "Location",
      "value": "Behind Shishukunj School, Bypass, Jhalaria Village, Indore"
    },
    {
      "label": "Developer",
      "value": "Ruchi Realty"
    },
    {
      "label": "Project Area",
      "value": "About 75 acres"
    },
    {
      "label": "Plot Sizes",
      "value": "1400, 1800, 2322, 2800, 3500, 4000 and 10,000 sq.ft."
    },
    {
      "label": "RERA No.",
      "value": "P-IND-17-1024"
    },
    {
      "label": "TNCP No.",
      "value": "6825/TNCP/2012, Date 06/11/12; Development Permission 30/2012, Date 28/04/2012"
    },
    {
      "label": "Promoted By",
      "value": "Vishal Resorts & Hotels Pvt. Ltd."
    },
    {
      "label": "Contact",
      "value": "+91 89292 25275"
    },
    {
      "label": "Email",
      "value": "emarketing@rrhlrealty.com"
    },
    {
      "label": "Website",
      "value": "ruchilifescapes.in"
    }
  ],
  "images": [
    "/propertyList/Ruchi Lifescapes Indore by Ruchi Lifescapes/img1.jpg",
    "/propertyList/Ruchi Lifescapes Indore by Ruchi Lifescapes/img2.jpg",
    "/propertyList/Ruchi Lifescapes Indore by Ruchi Lifescapes/img3.jpg",
    "/propertyList/Ruchi Lifescapes Indore by Ruchi Lifescapes/img4.jpg",
    "/propertyList/Ruchi Lifescapes Indore by Ruchi Lifescapes/img5.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Ruchi Lifescapes Indore by Ruchi Lifescapes/img4.jpg",
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Ruchi Lifescapes Indore by Ruchi Lifescapes/img5.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Ruchi Realty",
    "description": "Ruchi Realty (Ruchi Lifescapes) is an Indore-based developer that began its journey in 2008, with townships and projects in Indore, Bhopal and Kolkata. Per its brochure: 10+ million sq.ft. sold, 5+ million sq.ft. under construction, 12+ ready-to-move-in spaces delivered, 5+ ongoing projects and 5000+ families residing."
  },
  "disclaimer": "Ruchi Lifescapes Indore details are prepared only from the uploaded brochure. Price, plot sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 427,
  "title": "OS Layout Plan",
  "slug": "os-layout-plan-ruchi-lifescapes",
  "location": "",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "Up to 3,200 sq.ft.",
  "description": "This entry is based only on a plotted layout plan titled 'OS LAYOUT PLAN' from Ruchi Realty's Oscar series. The plan lists 999 plots in four categories: CR 3200 sq.ft. (43), SA 2400 sq.ft. (198), R / C / A categories of about 1800 sq.ft. and below (684) and O 2600-2800 sq.ft. (74), along with E.W.S. and L.I.G. plots, commercial plots, 9 to 18 mt wide roads and open areas. The specific project name and location are not stated on the plan.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Layout plan with 999 plots in total",
        "CR 3200 sq.ft. - 43 plots; SA 2400 sq.ft. - 198 plots",
        "R, C, A categories (up to 1800 sq.ft.) - 684 plots; O 2600-2800 sq.ft. - 74 plots",
        "Includes E.W.S. and L.I.G. plots, commercial plots and open areas",
        "Internal roads of 9.0 to 18.0 mt width"
      ]
    }
  ],
  "sections": {
    "overview": "Plotted layout plan from the Oscar series; project name and location are not stated on the plan.",
    "amenities": [],
    "specifications": [
      "Internal roads 9.0, 10.5, 12.0 and 18.0 mt wide; 30 mt and proposed 75 mt master plan roads at the boundary",
      "Commercial and shop / residence plots, open areas and 3.0 m wide pathways"
    ],
    "connectivity": [],
    "vision": []
  },
  "projectData": [
    {
      "label": "Plot Layout",
      "value": "999 plots"
    },
    {
      "label": "Plot Categories",
      "value": "CR 3200 sq.ft., SA 2400 sq.ft., R / C / A up to 1800 sq.ft., O 2600-2800 sq.ft."
    },
    {
      "label": "Developer",
      "value": "Ruchi Realty (Oscar series, project not confirmed)"
    }
  ],
  "images": [
    "/propertyList/OS Layout Plan by Ruchi Lifescapes/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/OS Layout Plan by Ruchi Lifescapes/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Ruchi Realty",
    "description": "Ruchi Realty (Ruchi Lifescapes) is an Indore-based developer that began its journey in 2008, with townships and projects in Indore, Bhopal and Kolkata. Per its brochure: 10+ million sq.ft. sold, 5+ million sq.ft. under construction, 12+ ready-to-move-in spaces delivered, 5+ ongoing projects and 5000+ families residing."
  },
  "disclaimer": "This listing is prepared only from an uploaded layout plan. Project name, location, price, availability and approvals must be verified with the official sales team."
},
{
  "id": 440,
  "title": "Highline Fortune",
  "slug": "highline-fortune-shree-balaji-infrastructure",
  "location": "Opp. Aurobindo Hospital, Bhawrasla, Ujjain Road",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "2 BHK",
  "area": "",
  "description": "Highline Fortune is a 2 BHK luxury apartment township (RERA No. P-IND-23-4166) on Ujjain Road, Indore, opposite Aurobindo Hospital at Bhawrasla. The project offers 2 BHK apartments with terrace, park-facing and garden-view homes, attached balconies with every bedroom, branded fixtures and a vehicle-free landscaped podium with recreational facilities, with commercial shops along the frontage.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered: P-IND-23-4166",
        "2 BHK luxury apartments with terrace",
        "Park-facing and garden-view homes",
        "Attached balconies with every bedroom",
        "Vehicle-free landscaped podium with recreational facilities",
        "Swimming pool, jogging park, gym and kids play area",
        "Aurobindo Hospital and University adjacent; Metro (Luv Kush Square) about 2 min"
      ]
    }
  ],
  "sections": {
    "overview": "A 2 BHK luxury apartment township on Indore-Ujjain Road with landscaped podium amenities and quick access to hospitals, schools, IT campuses, metro and airport.",
    "amenities": [
      {
        "title": "Swimming Pool",
        "img": "/propertyList/Highline Fortune/img7.jpg"
      },
      {
        "title": "Jogging Park",
        "img": "/propertyList/Highline Fortune/img8.jpg"
      },
      {
        "title": "Fully Equipped Gym",
        "img": "/propertyList/Highline Fortune/img8.jpg"
      },
      {
        "title": "Outdoor Kids Play Area",
        "img": "/propertyList/Highline Fortune/img8.jpg"
      },
      {
        "title": "Multipurpose Lawn",
        "img": "/propertyList/Highline Fortune/img6.jpg"
      },
      {
        "title": "Themed Landscape Park",
        "img": "/propertyList/Highline Fortune/img6.jpg"
      },
      {
        "title": "Vehicle-Free Podium with Recreational Facility",
        "img": "/propertyList/Highline Fortune/img6.jpg"
      }
    ],
    "specifications": [
      "Branded fixtures",
      "Attached balconies with every bedroom",
      "Open space for extra air and sunlight",
      "2 BHK apartment with terrace"
    ],
    "connectivity": [
      "Vijay Nagar - 10 min",
      "TCS/Infosys - 5 min",
      "Aurobindo Hospital - 0 min",
      "Shishu Kunj / international school - 5 min",
      "Aurobindo University - 0 min",
      "Metro Station (Luv Kush Square) - 2 min",
      "ISBT Indore Bus Station - 5 min",
      "Airport - 10 min"
    ],
    "vision": [
      "A blooming lifestyle in a secure and exclusive township with the finest amenities and services."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Highline Fortune"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-23-4166"
    },
    {
      "label": "Property Type",
      "value": "2 BHK Luxury Apartments"
    },
    {
      "label": "Location",
      "value": "Bhawrasla, Ujjain Road, Indore"
    },
    {
      "label": "Developer",
      "value": "Shree Balaji Infrastructure"
    },
    {
      "label": "Contact",
      "value": "9981233337, 9826036789"
    },
    {
      "label": "Website",
      "value": "highlinefortune.in"
    }
  ],
  "images": [
    "/propertyList/Highline Fortune/img1.jpg",
    "/propertyList/Highline Fortune/img2.jpg",
    "/propertyList/Highline Fortune/img3.jpg",
    "/propertyList/Highline Fortune/img4.jpg",
    "/propertyList/Highline Fortune/img5.jpg",
    "/propertyList/Highline Fortune/img6.jpg",
    "/propertyList/Highline Fortune/img7.jpg",
    "/propertyList/Highline Fortune/img8.jpg",
    "/propertyList/Highline Fortune/img9.jpg",
    "/propertyList/Highline Fortune/img10.jpg",
    "/propertyList/Highline Fortune/img11.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Highline Fortune/img12.jpg",
    "images": [
      "/propertyList/Highline Fortune/img12.jpg",
      "/propertyList/Highline Fortune/img13.jpg",
      "/propertyList/Highline Fortune/img14.jpg",
      "/propertyList/Highline Fortune/img15.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Highline Fortune/img10.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Shree Balaji Infrastructure",
    "description": "Project by Shree Balaji Infrastructure, as shown on the brochure."
  },
  "disclaimer": "Highline Fortune details are prepared only from the uploaded brochure/plan documents. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 441,
  "title": "Highline Heritage",
  "slug": "highline-heritage-highline",
  "location": "Bhawarasla, Tehsil Sanwer",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "3 BHK / 4 BHK",
  "area": "",
  "description": "Highline Heritage is a proposed residential multi-dwelling and plotted development at Gram Bhawarasla, Tehsil Sanwer, District Indore, on a total land area of about 32,780 sq.m. (3.278 hectare). The sanctioned plan shows a multi-dwelling Part-A of about 15,064 sq.m. and a plotted Part of about 10,555 sq.m. The building plan (marked for discussion) shows 3 BHK and 4 BHK flats of roughly 1,500 - 2,390 sq.ft. built-up area with shops, and the shop and office schedule lists shops on the 24 m and 10 m road sides plus offices on four floors.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Multi-dwelling and plotted development on about 3.278 hectare",
        "Shops on 24 m and 10 m road sides (about 786 - 1,709 sq.ft. SBUP)",
        "Offices on first to fourth floors (about 675 - 1,631 sq.ft. SBUP)",
        "3 BHK and 4 BHK flats in Blocks A and B",
        "Schindler lifts planned; typical plan of 12 flats per floor",
        "Construction-linked payment plan with 10% on booking"
      ]
    }
  ],
  "sections": {
    "overview": "A mixed-use residential, retail and office project at Bhawarasla, Sanwer, Indore, based on sanction layout, floor plans and shop/office schedule.",
    "amenities": [],
    "specifications": [
      "Multi-dwelling Part-A area approx. 15,064 sq.m.",
      "Plotted area approx. 10,555 sq.m. with 10% park area",
      "Proposed height 30 m, FAR 1:2.0",
      "Lift cars 20 pax (Schindler MRL) in each core",
      "Typical floor: 12 flats (Blocks A and B)"
    ],
    "connectivity": [
      "Located on a 30 m wide existing road toward Ujjain and Indore"
    ],
    "vision": []
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Highline Heritage"
    },
    {
      "label": "Property Type",
      "value": "Apartments, Shops and Offices"
    },
    {
      "label": "Location",
      "value": "Gram Bhawarasla, Tehsil Sanwer, Indore"
    },
    {
      "label": "Total Land Area",
      "value": "32,780 sq.m. (3.278 hectare)"
    },
    {
      "label": "Flat Types",
      "value": "3 BHK and 4 BHK (BUA about 1,506 - 2,389 sq.ft.)"
    },
    {
      "label": "Shops",
      "value": "13 shops, SBUP 786 - 1,709 sq.ft."
    },
    {
      "label": "Offices",
      "value": "Floors 1 - 4, SBUP 675 - 1,631 sq.ft."
    },
    {
      "label": "Payment Plan",
      "value": "10% booking, 15% plan sanction, 5% per slab, final 5%"
    }
  ],
  "images": [
    "/propertyList/Highline Heritage/img1.jpg",
    "/propertyList/Highline Heritage/img2.jpg",
    "/propertyList/Highline Heritage/img3.jpg",
    "/propertyList/Highline Heritage/img4.jpg",
    "/propertyList/Highline Heritage/img5.jpg",
    "/propertyList/Highline Heritage/img6.jpg",
    "/propertyList/Highline Heritage/img7.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Highline Heritage/img3.jpg",
    "images": [
      "/propertyList/Highline Heritage/img3.jpg",
      "/propertyList/Highline Heritage/img4.jpg",
      "/propertyList/Highline Heritage/img5.jpg",
      "/propertyList/Highline Heritage/img6.jpg",
      "/propertyList/Highline Heritage/img7.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Highline",
    "description": "Developer name is taken from the uploaded folder and drawing titles (Highline Apartment Building / Highline Heritage)."
  },
  "disclaimer": "Highline Heritage details are prepared only from the uploaded brochure/plan documents. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 442,
  "title": "Shri Vidhya Vihar",
  "slug": "shri-vidhya-vihar-friends-developer",
  "location": "Village Badodiya Ema, Tehsil Sanwer",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "",
  "description": "Shri Vidhya Vihar is a proposed residential colony on about 8.225 hectare (82,250 sq.m.) of land at Village Badodiya Ema, Tehsil Sanwer, District Indore, by M/S Friends Developer. The layout plan shows residential and shop plots with EWS and LIG plots, parks, open areas and 9 m, 12 m and 18 m wide internal roads with a 30 m proposed road.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Layout on about 8.225 hectare of land",
        "Residential and shop plots with EWS and LIG plots",
        "Park and open areas",
        "9 m, 12 m and 18 m wide internal roads",
        "Located toward Ujjain Road, Indore"
      ]
    }
  ],
  "sections": {
    "overview": "A residential plotted colony layout at Badodiya Ema, Sanwer, Indore, prepared from the uploaded layout plan.",
    "amenities": [],
    "specifications": [
      "Net planning area about 73,870 sq.m.",
      "General residential plots with EWS and LIG provision as per area statement"
    ],
    "connectivity": [],
    "vision": []
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Shri Vidhya Vihar"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Village Badodiya Ema, Tehsil Sanwer, Indore"
    },
    {
      "label": "Total Land Area",
      "value": "8.2250 hectare (82,250 sq.m.)"
    },
    {
      "label": "Developer",
      "value": "M/S Friends Developer"
    }
  ],
  "images": [
    "/propertyList/Shri Vidhya Vihar/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Shri Vidhya Vihar/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "Friends Developer",
    "description": "Developer name is taken from the uploaded layout plan."
  },
  "disclaimer": "Shri Vidhya Vihar details are prepared only from the uploaded brochure/plan documents. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 443,
  "title": "Shekhar Global",
  "slug": "shekhar-global-shekhar-constructions",
  "location": "MR-11 Road, near Choithram North Campus School, Nipania",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Apartment",
  "bhk": "3 BHK / 4 BHK",
  "area": "",
  "description": "Shekhar Global (RERA No. P-IND-26-6164) is a premium mixed-use project on the 60-metre wide MR-11 Road in Nipania, Indore, beside Choithram School. It offers a limited collection of 3 BHK and 4 BHK residences, duplexes and exclusive penthouses, along with premium retail shops, showrooms and bare shell offices. The project has two basements of parking, a ground plus 11 floor plan, podium amenities and terrace amenities.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "RERA registered: P-IND-26-6164",
        "3 BHK and 4 BHK residences, duplexes and penthouses",
        "Retail shops, showrooms and bare shell offices",
        "Located on the 60 m wide MR-11 Road beside Choithram School",
        "Podium amenities: infinity pool, shrine, sky hoops court, ballroom, gym",
        "Terrace amenities: skate park, play area, promenade, lawn",
        "Two basement parking levels"
      ]
    }
  ],
  "sections": {
    "overview": "A mixed-use luxury residential and commercial project on MR-11 Road, Indore, marketed by Rishi Tradewing (India) LLP.",
    "amenities": [
      {
        "title": "The Azure Infinity Pool",
        "img": "/propertyList/Shekhar Global/img7.jpg"
      },
      {
        "title": "The Serene Shrine",
        "img": "/propertyList/Shekhar Global/img8.jpg"
      },
      {
        "title": "The Sky Hoops Court",
        "img": "/propertyList/Shekhar Global/img9.jpg"
      },
      {
        "title": "Sky Garden Lounge",
        "img": "/propertyList/Shekhar Global/img10.jpg"
      },
      {
        "title": "Children's Play Area",
        "img": "/propertyList/Shekhar Global/img11.jpg"
      },
      {
        "title": "The Adventure Cove",
        "img": "/propertyList/Shekhar Global/img6.jpg"
      },
      {
        "title": "The Elite Physique Studio",
        "img": "/propertyList/Shekhar Global/img6.jpg"
      },
      {
        "title": "The Grand Ballroom",
        "img": "/propertyList/Shekhar Global/img6.jpg"
      }
    ],
    "specifications": [
      "Italian finish common lobby; vitrified tiles in flats (AGL / Simpolo / Kajaria or equivalent)",
      "Quartz stone kitchen platform with premium quartz sink",
      "UPVC 3-track sliding windows with mosquito net",
      "Flush doors with veneer finish; Yale or Dorset locks",
      "Jaquar / Hans Grohe / American Standard or equivalent CP and sanitary",
      "Premium lifts: Schindler / Kone / TKE or equivalent",
      "Glass balcony railing; granite staircase; wooden plank tile balconies",
      "Premium emulsion paint (Dulux / Asian Paints)"
    ],
    "connectivity": [
      "Choithram School - 1 min",
      "Bypass - 3 min",
      "Ring Road - 6 min",
      "Bhavans' Prominent and DPS - 5 min",
      "Sheraton Grand Palace - 5 min",
      "Bombay Hospital and Kokilaben Hospital - 8 min",
      "D Mart Nipania - 8 min",
      "Phoenix Mall - 10 min",
      "Proposed Indore Metro from Dewas Naka - 11 min",
      "AB Road - 13 min",
      "Vijaynagar - 15 min",
      "Railway Station - 30 min",
      "Airport - 40 min"
    ],
    "vision": [
      "Relish the best of both worlds: luxury living and business excellence on one of Indore's fastest-developing corridors."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Shekhar Global"
    },
    {
      "label": "RERA No.",
      "value": "P-IND-26-6164"
    },
    {
      "label": "Property Type",
      "value": "Residential and Commercial (mixed use)"
    },
    {
      "label": "Location",
      "value": "MR-11 Road, Nipania, Indore"
    },
    {
      "label": "Configurations",
      "value": "3 BHK, 4 BHK, Duplexes, Penthouses, Shops, Showrooms, Offices"
    },
    {
      "label": "Developer",
      "value": "Shekhar Constructions"
    },
    {
      "label": "Marketed by",
      "value": "Rishi Tradewing (India) LLP"
    },
    {
      "label": "Contact",
      "value": "97555 61928, 97555 01168"
    }
  ],
  "images": [
    "/propertyList/Shekhar Global/img1.jpg",
    "/propertyList/Shekhar Global/img2.jpg",
    "/propertyList/Shekhar Global/img3.jpg",
    "/propertyList/Shekhar Global/img4.jpg",
    "/propertyList/Shekhar Global/img5.jpg",
    "/propertyList/Shekhar Global/img6.jpg",
    "/propertyList/Shekhar Global/img7.jpg",
    "/propertyList/Shekhar Global/img8.jpg",
    "/propertyList/Shekhar Global/img9.jpg",
    "/propertyList/Shekhar Global/img10.jpg",
    "/propertyList/Shekhar Global/img11.jpg",
    "/propertyList/Shekhar Global/img12.jpg",
    "/propertyList/Shekhar Global/img13.jpg",
    "/propertyList/Shekhar Global/img14.jpg",
    "/propertyList/Shekhar Global/img15.jpg",
    "/propertyList/Shekhar Global/img17.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Shekhar Global/img18.jpg",
    "images": [
      "/propertyList/Shekhar Global/img18.jpg",
      "/propertyList/Shekhar Global/img19.jpg",
      "/propertyList/Shekhar Global/img20.jpg",
      "/propertyList/Shekhar Global/img21.jpg",
      "/propertyList/Shekhar Global/img22.jpg",
      "/propertyList/Shekhar Global/img23.jpg",
      "/propertyList/Shekhar Global/img24.jpg",
      "/propertyList/Shekhar Global/img25.jpg",
      "/propertyList/Shekhar Global/img26.jpg",
      "/propertyList/Shekhar Global/img27.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Shekhar Global/img16.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Shekhar Constructions",
    "description": "With a 35+ year legacy and 20+ landmark projects delivered, Shekhar Constructions is a cornerstone of Indore's real estate sector, chosen by 2000+ families. Its portfolio includes Shekhar Unity, a commercial development."
  },
  "disclaimer": "Shekhar Global details are prepared only from the uploaded brochure/plan documents. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 444,
  "title": "IRIS Dreams",
  "slug": "iris-dreams-iris-group",
  "location": "Near 30 m wide proposed road, toward Badiya Keema Village Main Road",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "22' x 50' (1,099 sq.ft.) and unique size plots",
  "description": "IRIS Dreams by IRIS Group is a plotted layout with plots numbered up to 121, mainly 22' x 50' (about 1,099 sq.ft.), along with unique-size, EWS and LIG plots. The master plan shows 9 m and 12 m wide internal roads, several parks (up to about 12,298 sq.ft.), service areas and a 30 m wide proposed road on one side.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Unique 22' x 50' plot size (about 1,099 sq.ft.)",
        "Plots numbered up to 121 with unique-size, EWS and LIG categories",
        "Parks of about 8,498, 10,419 and 12,298 sq.ft.",
        "9 m and 12 m wide internal roads",
        "Adjoins 30 m wide proposed road"
      ]
    }
  ],
  "sections": {
    "overview": "A plotted development by IRIS Group with 22' x 50' plots, parks and wide internal roads, prepared from the uploaded layout plan.",
    "amenities": [
      {
        "title": "Parks and Green Areas",
        "img": "/propertyList/IRIS Dreams/img1.jpg"
      }
    ],
    "specifications": [
      "9.0 m and 12.0 m wide internal roads",
      "Service areas and parks as per layout plan"
    ],
    "connectivity": [
      "30.0 m wide proposed road",
      "Road toward Badiya Keema village main road and Tigariya Rao"
    ],
    "vision": []
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "IRIS Dreams"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Plot Size",
      "value": "22' x 50' (about 1,099 sq.ft.) and unique sizes"
    },
    {
      "label": "Developer",
      "value": "IRIS Group"
    }
  ],
  "images": [
    "/propertyList/IRIS Dreams/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/IRIS Dreams/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "IRIS Group",
    "description": "Project by IRIS Group, as shown on the uploaded layout plan."
  },
  "disclaimer": "IRIS Dreams details are prepared only from the uploaded brochure/plan documents. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 445,
  "title": "Blue Iris",
  "slug": "blue-iris-iris-group",
  "location": "Near Bicholi Hapsi, Indore - Dewas Road",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "",
  "description": "Blue Iris by IRIS Group is a plotted layout near Bicholi Hapsi off the Indore-Dewas Road, adjoining a 45 m wide master plan road. The layout shows about 119 numbered plots plus larger plots (S/R84 - S/R86 of about 17,844 - 20,471 sq.ft.), 9 m and 12 m wide internal roads, parks and a nala running through the site.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Adjoins 45 m wide master plan road",
        "Plots of varied sizes plus large S/R plots",
        "Parks including about 17,346 sq.ft. and 9,532 sq.ft.",
        "9 m and 12 m wide internal roads",
        "Near Bicholi Hapsi, Indore - Dewas Road"
      ]
    }
  ],
  "sections": {
    "overview": "A plotted development by IRIS Group near Bicholi Hapsi, prepared from the uploaded layout plan.",
    "amenities": [
      {
        "title": "Parks and Green Areas",
        "img": "/propertyList/Blue Iris/img1.jpg"
      }
    ],
    "specifications": [
      "9.0 m and 12.0 m wide internal roads",
      "Service areas and parks as per layout plan"
    ],
    "connectivity": [
      "45 m wide master plan road, toward Bypass and village road",
      "Near Indore - Dewas Road and Bicholi Hapsi Road"
    ],
    "vision": []
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Blue Iris"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Near Bicholi Hapsi, Indore"
    },
    {
      "label": "Developer",
      "value": "IRIS Group"
    }
  ],
  "images": [
    "/propertyList/Blue Iris/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Blue Iris/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "IRIS Group",
    "description": "Project by IRIS Group, as shown on the uploaded layout plan."
  },
  "disclaimer": "Blue Iris details are prepared only from the uploaded brochure/plan documents. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 446,
  "title": "IRIS Premium",
  "slug": "iris-premium-iris-group",
  "location": "",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "7.00 m x 16.76 m plots (approx.)",
  "description": "IRIS Premium is a plotted layout drawing titled 'IRIS Premium' (client Bharat Jain, dated 24/07/2021, by Devila Landscape). The plan shows plots of about 7.00 m x 16.76 m, 7.5 m, 9 m, 10.5 m and 12 m wide roads, landscaped parks, a swimming pool area, shops-cum-residential plots and EWS/LIG plots, with a total plot area of 1,06,405 sq.ft.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Plots of about 7.00 m x 16.76 m",
        "Total plot area 1,06,405 sq.ft.",
        "Landscaped parks and swimming pool area",
        "Shops-cum-residential plots",
        "EWS and LIG plots"
      ]
    }
  ],
  "sections": {
    "overview": "A plotted layout labelled IRIS Premium, prepared from the uploaded layout drawing. Exact location is not stated in the source.",
    "amenities": [
      {
        "title": "Landscaped Park",
        "img": "/propertyList/IRIS Premium/img1.jpg"
      }
    ],
    "specifications": [
      "Roads of 7.5 m, 9 m, 10.5 m and 12 m width"
    ],
    "connectivity": [],
    "vision": []
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "IRIS Premium"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Total Plot Area",
      "value": "1,06,405 sq.ft."
    },
    {
      "label": "Developer",
      "value": "IRIS Group (assumed from folder and project name)"
    }
  ],
  "images": [
    "/propertyList/IRIS Premium/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/IRIS Premium/img1.jpg",
    "pdf": ""
  },
  "map": {
    "image": "",
    "locationLink": ""
  },
  "developer": {
    "name": "IRIS Group",
    "description": "Developer is taken from the uploaded folder and project name; the drawing itself does not name the developer."
  },
  "disclaimer": "IRIS Premium details are prepared only from the uploaded brochure/plan documents. Price, sizes, availability and approvals should be verified with the official sales team."
},
{
  "id": 460,
  "title": "Aura",
  "slug": "aura-graceland",
  "location": "",
  "city": "",
  "state": "",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "",
  "area": "",
  "description": "Aura is a plotted residential layout by Graceland. The layout plan shows around 115 numbered residential plots arranged along 7.50 m wide roads, together with a few LIG, EWS and L.S. cum residential plots, two parks and a 3 m pathway.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Plotted layout with 7.50 m wide roads",
        "Plot sizes marked on the plan include 4.57 x 13.72 m, 4.57 x 12.19 m, 5.18 x 12.19 m and 6.10 x 12.19 m",
        "Dedicated LIG, EWS and L.S. cum residential plots",
        "Parks of about 273.25 sq.m, 210.59 sq.m and 779.16 sq.m",
        "3 m wide pathway and a service area (S.A.) marked on the plan"
      ]
    }
  ],
  "sections": {
    "overview": "A plotted residential layout with 7.50 m wide roads, parks and a mix of regular, LIG, EWS and L.S. cum residential plots.",
    "amenities": [
      {
        "title": "Parks",
        "img": "/propertyList/Aura/img1.jpg"
      },
      {
        "title": "7.50 m Wide Roads",
        "img": "/propertyList/Aura/img1.jpg"
      },
      {
        "title": "3 m Pathway",
        "img": "/propertyList/Aura/img1.jpg"
      }
    ],
    "specifications": [
      "7.50 m wide roads",
      "Plot sizes (m): 4.57 x 13.72, 4.57 x 12.19, 5.18 x 12.19, 6.10 x 12.19",
      "LIG plots: 4.57 x 11.80 and 4.57 x 9.04 m; EWS plots: 3.60 x 10.67 m; L.S. cum residential: 6.10 x 9.14 m",
      "Parks: 273.25, 210.59 and 779.16 sq.m; service area 136.30 sq.m"
    ],
    "connectivity": [],
    "vision": [
      "Well-planned plotted development with wide internal roads, parks and pathways."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Aura"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": ""
    },
    {
      "label": "Developer",
      "value": "Graceland"
    },
    {
      "label": "Plot Sizes",
      "value": "4.57 x 13.72 m, 4.57 x 12.19 m, 5.18 x 12.19 m, 6.10 x 12.19 m"
    },
    {
      "label": "Internal Roads",
      "value": "7.50 m wide"
    },
    {
      "label": "Parks",
      "value": "3 (273.25, 210.59 and 779.16 sq.m)"
    }
  ],
  "images": [
    "/propertyList/Aura/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Aura/img1.jpg",
    "images": [
      "/propertyList/Aura/img1.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Aura/img1.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Graceland",
    "description": "Developer name is taken from the uploaded Graceland layout plans and brochure."
  },
  "disclaimer": "Aura details are prepared only from the uploaded layout plan. Plot sizes, price, availability and approvals should be verified with the official sales team."
},
{
  "id": 461,
  "title": "Avenue",
  "slug": "avenue-graceland",
  "location": "",
  "city": "",
  "state": "",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "",
  "area": "",
  "description": "Avenue is a plotted residential layout by Graceland. The layout plan shows roughly 290 numbered plots (including A/B/C sub-plots and an L/E series) arranged in blocks along proposed roads, with a central green belt along an HT line corridor and a service area.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Plotted layout with more than 280 numbered plots",
        "Blocks separated by proposed roads",
        "Central green belt and landscaped open areas",
        "Service area (S.A.) marked on the plan",
        "Two versions of the layout plan are available"
      ]
    }
  ],
  "sections": {
    "overview": "A large plotted layout with proposed internal roads, a central green belt and a service area.",
    "amenities": [
      {
        "title": "Green Belt",
        "img": "/propertyList/Avenue/img1.jpg"
      },
      {
        "title": "Proposed Roads",
        "img": "/propertyList/Avenue/img1.jpg"
      },
      {
        "title": "Service Area",
        "img": "/propertyList/Avenue/img1.jpg"
      }
    ],
    "specifications": [
      "Plots arranged in blocks along proposed roads",
      "Central green belt along the HT line corridor",
      "Service area (S.A.) and passage (P.W.) marked on the plan"
    ],
    "connectivity": [],
    "vision": [
      "A well-organised plotted layout with generous green space."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Avenue"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": ""
    },
    {
      "label": "Developer",
      "value": "Graceland"
    },
    {
      "label": "Plots",
      "value": "Approximately 290 numbered plots (including sub-plots and L/E series)"
    },
    {
      "label": "Layout Plans",
      "value": "2"
    }
  ],
  "images": [
    "/propertyList/Avenue/img1.jpg",
    "/propertyList/Avenue/img2.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Avenue/img1.jpg",
    "images": [
      "/propertyList/Avenue/img1.jpg",
      "/propertyList/Avenue/img2.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Avenue/img1.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Graceland",
    "description": "Developer name is taken from the uploaded Graceland layout plans and brochure."
  },
  "disclaimer": "Avenue details are prepared only from the uploaded layout plans. Plot sizes, price, availability and approvals should be verified with the official sales team."
},
{
  "id": 462,
  "title": "Bliss 02",
  "slug": "bliss-02-graceland",
  "location": "",
  "city": "",
  "state": "",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "",
  "area": "",
  "description": "Bliss 02 is a compact plotted residential layout by Graceland. The layout plan shows roughly 40 numbered plots arranged in blocks along proposed roads, with a green/open area marked on the plan.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Compact plotted layout with about 40 numbered plots",
        "Blocks separated by proposed roads",
        "Green/open area marked on the plan"
      ]
    }
  ],
  "sections": {
    "overview": "A compact plotted layout with proposed internal roads and a green area.",
    "amenities": [
      {
        "title": "Green Area",
        "img": "/propertyList/Bliss 02/img1.jpg"
      },
      {
        "title": "Proposed Roads",
        "img": "/propertyList/Bliss 02/img1.jpg"
      }
    ],
    "specifications": [
      "Plots arranged in blocks along proposed roads",
      "Green area marked on the plan"
    ],
    "connectivity": [],
    "vision": [
      "A small-format plotted development with planned roads and open space."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Bliss 02"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": ""
    },
    {
      "label": "Developer",
      "value": "Graceland"
    },
    {
      "label": "Plots",
      "value": "Approximately 40 numbered plots"
    }
  ],
  "images": [
    "/propertyList/Bliss 02/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Bliss 02/img1.jpg",
    "images": [
      "/propertyList/Bliss 02/img1.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Bliss 02/img1.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Graceland",
    "description": "Developer name is taken from the uploaded Graceland layout plans and brochure."
  },
  "disclaimer": "Bliss 02 details are prepared only from the uploaded layout plan. Plot sizes, price, availability and approvals should be verified with the official sales team."
},
{
  "id": 463,
  "title": "Highway Blossom",
  "slug": "highway-blossom-graceland",
  "location": "",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "",
  "area": "",
  "description": "Highway Blossom is a large plotted residential layout by Graceland Habitats Serene Pvt. Ltd. The approved layout plan carries the title 'Highway Blossom', shows a Town & Country Planning Indore approval stamp, a khasra plan and a land owner's detail table, with plots arranged along 9.00 m and 12.00 m wide roads, green areas and a proposed wide road linking towards Amli Kheda village.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Approved layout plan (Town & Country Planning, Indore stamp)",
        "Plots along 9.00 m and 12.00 m wide roads",
        "Green areas and parks marked on the plan",
        "Proposed wide road toward Amli Kheda village",
        "Land owner: Graceland Habitats Serene Pvt. Ltd."
      ]
    }
  ],
  "sections": {
    "overview": "A large plotted layout titled Highway Blossom, approved by Town & Country Planning, Indore, with wide internal roads and green areas.",
    "amenities": [
      {
        "title": "Green Areas",
        "img": "/propertyList/Highway Blossom/img1.jpg"
      },
      {
        "title": "Wide Roads",
        "img": "/propertyList/Highway Blossom/img1.jpg"
      }
    ],
    "specifications": [
      "Plots along 9.00 m and 12.00 m wide roads",
      "Khasra plan and land owner's detail included on the layout",
      "Land owner: Graceland Habitats Serene Pvt. Ltd. (Director: Shri Shivnarayan S/o Shri Rampratap Bhutada)",
      "Khasra numbers on plan: 135/1/2/2, 134, 133, 124, 125, 126/1, 126/2, 127, 128"
    ],
    "connectivity": [
      "Proposed wide road towards Amli Kheda village",
      "Existing Garipiplya road shown on the key plan"
    ],
    "vision": [
      "A large plotted community with wide roads and green areas near Indore."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Highway Blossom"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Graceland Habitats Serene Pvt. Ltd."
    },
    {
      "label": "Internal Roads",
      "value": "9.00 m and 12.00 m wide"
    },
    {
      "label": "Approval",
      "value": "Layout carries Town & Country Planning, Indore approval stamp"
    }
  ],
  "images": [
    "/propertyList/Highway Blossom/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Highway Blossom/img1.jpg",
    "images": [
      "/propertyList/Highway Blossom/img1.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Highway Blossom/img1.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Graceland Habitats Serene Pvt. Ltd.",
    "description": "Land owner and developer as named on the approved layout plan: Graceland Habitats Serene Pvt. Ltd."
  },
  "disclaimer": "Highway Blossom details are prepared only from the uploaded layout plan. Plot sizes, price, availability and approvals should be verified with the official sales team."
},
{
  "id": 464,
  "title": "Highway Landmark",
  "slug": "highway-landmark-graceland",
  "location": "Indore Ujjain Road, Dharampuri",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "",
  "area": "600 - 1000 Sq.yd.",
  "description": "Highway Landmark is a premium luxury plotted development by Graceland Habitats Serene Pvt. Ltd. on Indore Ujjain Road, Dharampuri. The brochure lists plot sizes of 600, 800 and 1000 sq.yd., a 9 mtr wide internal road and amenities including a covered campus, beautiful garden, basketball court, cricket turf, mandir, 24x7 security, electricity and water supply, and street lights with drainage.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Location: Indore Ujjain Road, Dharampuri",
        "Plot sizes: 600 | 800 | 1000 sq.yd.",
        "9 mtr wide internal road",
        "Covered campus, beautiful garden, basketball court and cricket turf",
        "Mandir, kids play area and 24x7 security",
        "Electricity, water supply, street lights and drainage"
      ]
    }
  ],
  "sections": {
    "overview": "A premium luxury plotted development on Indore Ujjain Road, Dharampuri, with a gated entrance, sports courts, garden and mandir.",
    "amenities": [
      {
        "title": "Covered Campus",
        "img": "/propertyList/Highway Landmark/img1.jpg"
      },
      {
        "title": "Beautiful Garden",
        "img": "/propertyList/Highway Landmark/img1.jpg"
      },
      {
        "title": "Basketball Court",
        "img": "/propertyList/Highway Landmark/img6.jpg"
      },
      {
        "title": "Cricket Turf",
        "img": "/propertyList/Highway Landmark/img9.jpg"
      },
      {
        "title": "Mandir",
        "img": "/propertyList/Highway Landmark/img1.jpg"
      },
      {
        "title": "Kids Play Area",
        "img": "/propertyList/Highway Landmark/img7.jpg"
      },
      {
        "title": "24x7 Security",
        "img": "/propertyList/Highway Landmark/img1.jpg"
      },
      {
        "title": "Electricity & Water Supply",
        "img": "/propertyList/Highway Landmark/img1.jpg"
      },
      {
        "title": "Street Lights & Drainage",
        "img": "/propertyList/Highway Landmark/img1.jpg"
      },
      {
        "title": "9 Mtr Wide Road",
        "img": "/propertyList/Highway Landmark/img8.jpg"
      }
    ],
    "specifications": [
      "Plot sizes: 600, 800 and 1000 sq.yd.",
      "9 mtr wide internal road",
      "Electricity and water supply",
      "Street lights and drainage",
      "24x7 security"
    ],
    "connectivity": [
      "Near Rama Phosphate Limited, Dharampuri, Jaitpura and Indore International College (as shown on the project location map)"
    ],
    "vision": [
      "Live beyond the ordinary: a serene and premium community where peace meets prosperity."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Highway Landmark"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Indore Ujjain Road, Dharampuri, Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "Graceland Habitats Serene Pvt. Ltd."
    },
    {
      "label": "Plot Sizes",
      "value": "600 | 800 | 1000 sq.yd."
    },
    {
      "label": "Internal Road",
      "value": "9 mtr wide"
    },
    {
      "label": "Layout Plan",
      "value": "Numbered plots 1 to about 473 plus L and E series"
    }
  ],
  "images": [
    "/propertyList/Highway Landmark/img1.jpg",
    "/propertyList/Highway Landmark/img2.jpg",
    "/propertyList/Highway Landmark/img3.jpg",
    "/propertyList/Highway Landmark/img4.jpg",
    "/propertyList/Highway Landmark/img5.jpg",
    "/propertyList/Highway Landmark/img6.jpg",
    "/propertyList/Highway Landmark/img7.jpg",
    "/propertyList/Highway Landmark/img8.jpg",
    "/propertyList/Highway Landmark/img9.jpg",
    "/propertyList/Highway Landmark/img10.jpg",
    "/propertyList/Highway Landmark/img11.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Highway Landmark/img11.jpg",
    "images": [
      "/propertyList/Highway Landmark/img11.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Highway Landmark/img11.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Graceland Habitats Serene Pvt. Ltd.",
    "description": "A project by Graceland Habitats Serene Pvt. Ltd., as stated in the project brochure."
  },
  "disclaimer": "Highway Landmark details are prepared only from the uploaded layout plan and brochure. Plot sizes, price, availability and approvals should be verified with the official sales team."
},
{
  "id": 465,
  "title": "Highway Oasis",
  "slug": "highway-oasis-graceland",
  "location": "",
  "city": "",
  "state": "",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "",
  "area": "355 - 4009 Sq.ft.",
  "description": "Highway Oasis is a plotted residential layout by Graceland. The layout plan shows 9.00 m and 12.00 m wide internal roads, a proposed 30.00 m wide road along the boundary, parks, LIG and EWS plots and plots of 4.57 x 12.19, 6.10 x 12.19, 5.18 x 15.24 and 6.10 x 15.24 m. The accompanying area list gives dimensions and areas for 298 plots, from 355 to 4009 sq.ft., with 600, 800, 850 and 1000 sq.ft. the most common sizes.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "298 plots listed in the area list",
        "Plot areas from 355 to 4009 sq.ft.; most plots are 600, 800, 850 or 1000 sq.ft.",
        "9.00 m and 12.00 m wide internal roads",
        "Proposed 30.00 m wide road along the boundary",
        "Parks, 3 m pathways, LIG and EWS plots",
        "SR-1 to SR-18 larger plots of about 1250 to 4009 sq.ft."
      ]
    }
  ],
  "sections": {
    "overview": "A plotted layout with 9.00 m and 12.00 m wide roads, parks and a detailed plot-wise area list.",
    "amenities": [
      {
        "title": "Parks",
        "img": "/propertyList/Highway Oasis/img1.jpg"
      },
      {
        "title": "Wide Roads",
        "img": "/propertyList/Highway Oasis/img1.jpg"
      },
      {
        "title": "3 m Pathways",
        "img": "/propertyList/Highway Oasis/img1.jpg"
      }
    ],
    "specifications": [
      "9.00 m and 12.00 m wide internal roads; proposed 30.00 m wide road",
      "Plot sizes (m): 4.57 x 12.19, 6.10 x 12.19, 5.18 x 15.24, 6.10 x 15.24",
      "LIG plots 4.57 x 12.19 m and EWS plots 3.60 x 10.67 m",
      "Area list gives east/west/north/south dimensions in feet and area for every plot (SR-1 to SR-18, 19 onwards and E-1 to E-18)"
    ],
    "connectivity": [],
    "vision": [
      "A well-planned plotted layout with wide roads and green spaces."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Highway Oasis"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": ""
    },
    {
      "label": "Developer",
      "value": "Graceland"
    },
    {
      "label": "Total Plots in Area List",
      "value": "298"
    },
    {
      "label": "Plot Areas",
      "value": "355 - 4009 sq.ft. (derived from area list; most common 600, 800, 850, 1000 sq.ft.)"
    },
    {
      "label": "Internal Roads",
      "value": "9.00 m and 12.00 m wide"
    },
    {
      "label": "Approach",
      "value": "Proposed 30.00 m wide road"
    }
  ],
  "images": [
    "/propertyList/Highway Oasis/img1.jpg",
    "/propertyList/Highway Oasis/img2.jpg",
    "/propertyList/Highway Oasis/img3.jpg",
    "/propertyList/Highway Oasis/img4.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Highway Oasis/img1.jpg",
    "images": [
      "/propertyList/Highway Oasis/img1.jpg",
      "/propertyList/Highway Oasis/img2.jpg",
      "/propertyList/Highway Oasis/img3.jpg",
      "/propertyList/Highway Oasis/img4.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Highway Oasis/img1.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Graceland",
    "description": "Developer name is taken from the uploaded Graceland layout plans and brochure."
  },
  "disclaimer": "Highway Oasis details are prepared only from the uploaded layout plans. Plot sizes, price, availability and approvals should be verified with the official sales team. Plot areas are read from the area list and assumed to be in sq.ft. (they match the feet dimensions listed)."
},
{
  "id": 466,
  "title": "Radiance",
  "slug": "radiance-graceland",
  "location": "",
  "city": "",
  "state": "",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "",
  "area": "",
  "description": "Radiance is a plotted residential layout by Graceland. The layout plan shows blocks of numbered plots arranged along proposed roads on both sides of a central green belt, with a service area and passage marked.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Plotted layout arranged in blocks along proposed roads",
        "Central green belt along a utility corridor",
        "Service area marked on the plan"
      ]
    }
  ],
  "sections": {
    "overview": "A plotted layout with proposed roads and a central green belt.",
    "amenities": [
      {
        "title": "Green Belt",
        "img": "/propertyList/Radiance/img1.jpg"
      },
      {
        "title": "Proposed Roads",
        "img": "/propertyList/Radiance/img1.jpg"
      }
    ],
    "specifications": [
      "Blocks of plots along proposed roads",
      "Central green belt"
    ],
    "connectivity": [],
    "vision": [
      "A planned plotted community with open green space."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Radiance"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": ""
    },
    {
      "label": "Developer",
      "value": "Graceland"
    },
    {
      "label": "Plots",
      "value": "Numbered plots in several blocks along proposed roads"
    }
  ],
  "images": [
    "/propertyList/Radiance/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Radiance/img1.jpg",
    "images": [
      "/propertyList/Radiance/img1.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Radiance/img1.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Graceland",
    "description": "Developer name is taken from the uploaded Graceland layout plans and brochure."
  },
  "disclaimer": "Radiance details are prepared only from the uploaded layout plan. Plot sizes, price, availability and approvals should be verified with the official sales team."
},
{
  "id": 467,
  "title": "Highway Seasons",
  "slug": "highway-seasons-graceland",
  "location": "",
  "city": "",
  "state": "",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "",
  "area": "",
  "description": "Highway Seasons is a large plotted residential layout by Graceland (hand-titled 'Seasons' on the plan; the coloured plan and the plain plan show the same layout). The plan shows more than 850 numbered plots along 7.50 m and 9.00 m wide roads, several parks, a sub-station area of 2000 sq.m, a service area and an H.T. line corridor.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Large plotted layout; plot numbers run to about 875",
        "7.50 m and 9.00 m wide roads",
        "Parks including one of about 956.80 sq.m",
        "Sub-station area of 2000.00 sq.m",
        "Plot sizes marked on the plan include 4.57 x 12.19 m and 4.57 x 13.72 m",
        "3 m wide pathways and service area"
      ]
    }
  ],
  "sections": {
    "overview": "A large plotted layout with 7.50 m and 9.00 m wide roads, multiple parks and a dedicated sub-station area.",
    "amenities": [
      {
        "title": "Parks",
        "img": "/propertyList/Highway Seasons/img1.jpg"
      },
      {
        "title": "Wide Roads",
        "img": "/propertyList/Highway Seasons/img1.jpg"
      },
      {
        "title": "3 m Pathways",
        "img": "/propertyList/Highway Seasons/img1.jpg"
      },
      {
        "title": "Sub Station Area",
        "img": "/propertyList/Highway Seasons/img1.jpg"
      }
    ],
    "specifications": [
      "7.50 m and 9.00 m wide roads",
      "Parks, 3 m wide pathways and service area",
      "Sub-station area 2000.00 sq.m",
      "H.T. line corridor on the western side of the layout"
    ],
    "connectivity": [],
    "vision": [
      "A large, well-connected plotted layout with generous open and utility areas."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Highway Seasons"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": ""
    },
    {
      "label": "Developer",
      "value": "Graceland"
    },
    {
      "label": "Plots",
      "value": "About 850+ numbered plots (numbers run to approx. 875)"
    },
    {
      "label": "Internal Roads",
      "value": "7.50 m and 9.00 m wide"
    },
    {
      "label": "Layout Plans",
      "value": "2 (plain and coloured)"
    }
  ],
  "images": [
    "/propertyList/Highway Seasons/img1.jpg",
    "/propertyList/Highway Seasons/img2.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Highway Seasons/img1.jpg",
    "images": [
      "/propertyList/Highway Seasons/img1.jpg",
      "/propertyList/Highway Seasons/img2.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Highway Seasons/img1.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Graceland",
    "description": "Developer name is taken from the uploaded Graceland layout plans and brochure."
  },
  "disclaimer": "Highway Seasons details are prepared only from the uploaded layout plans. Plot sizes, price, availability and approvals should be verified with the official sales team."
},
{
  "id": 468,
  "title": "Serene 2",
  "slug": "serene-2-graceland",
  "location": "",
  "city": "",
  "state": "",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "",
  "area": "",
  "description": "Serene 2 is a plotted residential layout by Graceland. The layout plan shows plots along 9.00 m and 12.00 m wide roads, a proposed 30.00 m wide road running towards the village of Rampipliya, parks and an H.T. line, and refers to an existing colony (Memo No. 10906 dated 30.12.2021).",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "9.00 m and 12.00 m wide internal roads",
        "Proposed 30.00 m wide road",
        "Parks and green areas",
        "Ex. Colony Memo No. 10906 dated 30.12.2021 referenced on the plan"
      ]
    }
  ],
  "sections": {
    "overview": "A plotted layout with 9.00 m and 12.00 m wide roads, parks and a proposed 30.00 m wide approach road.",
    "amenities": [
      {
        "title": "Parks",
        "img": "/propertyList/Serene 2/img1.jpg"
      },
      {
        "title": "Wide Roads",
        "img": "/propertyList/Serene 2/img1.jpg"
      }
    ],
    "specifications": [
      "9.00 m and 12.00 m wide roads",
      "Proposed 30.00 m wide road",
      "Reference: Ex. Colony Memo No. 10906, 30.12.2021"
    ],
    "connectivity": [
      "Proposed 30.00 m wide road towards village Rampipliya (as labelled on the plan)"
    ],
    "vision": [
      "A planned plotted community with wide roads and green areas."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Serene 2"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": ""
    },
    {
      "label": "Developer",
      "value": "Graceland"
    },
    {
      "label": "Internal Roads",
      "value": "9.00 m and 12.00 m wide"
    },
    {
      "label": "Approach Road",
      "value": "Proposed 30.00 m wide"
    }
  ],
  "images": [
    "/propertyList/Serene 2/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Serene 2/img1.jpg",
    "images": [
      "/propertyList/Serene 2/img1.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Serene 2/img1.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Graceland",
    "description": "Developer name is taken from the uploaded Graceland layout plans and brochure."
  },
  "disclaimer": "Serene 2 details are prepared only from the uploaded layout plan. Plot sizes, price, availability and approvals should be verified with the official sales team."
},
{
  "id": 469,
  "title": "Summit",
  "slug": "summit-graceland",
  "location": "",
  "city": "",
  "state": "",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "",
  "area": "",
  "description": "Summit is a plotted residential layout by Graceland. The layout plan shows plots along 9.00 m wide roads with a proposed 30.00 m wide road at one end, a service area, parks and an LT line to be shifted. Handwritten notes on the plan mention plot sizes of 13x40 = 520, 14x40 = 560 and 15x35 = 525 sq.ft.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "9.00 m wide internal roads",
        "Proposed 30.00 m wide road",
        "Plot sizes marked on the plan include 4.57 x 12.19, 3.96 x 12.19 and 4.57 x 10.67 m",
        "Handwritten sizes: 13x40 = 520, 14x40 = 560, 15x35 = 525 sq.ft.",
        "Parks and service area marked"
      ]
    }
  ],
  "sections": {
    "overview": "A plotted layout with 9.00 m wide roads, a proposed 30.00 m wide road and parks.",
    "amenities": [
      {
        "title": "Parks",
        "img": "/propertyList/Summit/img1.jpg"
      },
      {
        "title": "9.00 m Wide Roads",
        "img": "/propertyList/Summit/img1.jpg"
      }
    ],
    "specifications": [
      "9.00 m wide roads; proposed 30.00 m wide road",
      "LT line to be shifted (as noted on the plan)",
      "Service area and parks marked on the plan"
    ],
    "connectivity": [],
    "vision": [
      "A well-planned plotted layout with wide roads and open space."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Summit"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": ""
    },
    {
      "label": "Developer",
      "value": "Graceland"
    },
    {
      "label": "Internal Roads",
      "value": "9.00 m wide"
    },
    {
      "label": "Plot Sizes (handwritten notes)",
      "value": "520, 525 and 560 sq.ft."
    },
    {
      "label": "Layout Plans",
      "value": "2"
    }
  ],
  "images": [
    "/propertyList/Summit/img1.jpg",
    "/propertyList/Summit/img2.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Summit/img1.jpg",
    "images": [
      "/propertyList/Summit/img1.jpg",
      "/propertyList/Summit/img2.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Summit/img1.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Graceland",
    "description": "Developer name is taken from the uploaded Graceland layout plans and brochure."
  },
  "disclaimer": "Summit details are prepared only from the uploaded layout plans. Plot sizes, price, availability and approvals should be verified with the official sales team."
},
{
  "id": 470,
  "title": "Highway Trident",
  "slug": "highway-trident-graceland",
  "location": "",
  "city": "",
  "state": "",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "",
  "area": "",
  "description": "Highway Trident is a plotted residential layout by Graceland (hand-titled 'Trident' on the plan; the plain and coloured plans show the same layout). The plan shows plots along 7.50 m and 9.00 m wide roads, a central park/green area crossed by a utility corridor, service areas and plot sizes such as 6.10 x 12.19 m, 4.57 x 12.19 m, 24 x 40 ft, 20 x 30 ft and 15 x 40 ft, along with LIG and EWS plots.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "7.50 m and 9.00 m wide roads",
        "Central park/green area",
        "Plot sizes include 6.10 x 12.19 m, 4.57 x 12.19 m, 24 x 40 ft and 15 x 40 ft",
        "LIG (15 x 35 ft) and EWS (12 x 35 ft) plots",
        "Service areas (S.A.) marked on the plan"
      ]
    }
  ],
  "sections": {
    "overview": "A plotted layout with 7.50 m and 9.00 m wide roads, a central green area and LIG/EWS plots.",
    "amenities": [
      {
        "title": "Central Green Area",
        "img": "/propertyList/Highway Trident/img1.jpg"
      },
      {
        "title": "Wide Roads",
        "img": "/propertyList/Highway Trident/img1.jpg"
      },
      {
        "title": "Service Area",
        "img": "/propertyList/Highway Trident/img1.jpg"
      }
    ],
    "specifications": [
      "7.50 m and 9.00 m wide roads",
      "Plot sizes: 6.10 x 12.19 m, 4.57 x 12.19 m, 24 x 40 ft, 20 x 30 ft, 15 x 40 ft",
      "LIG plots 15 x 35 ft; EWS plots 12 x 35 ft"
    ],
    "connectivity": [],
    "vision": [
      "A planned plotted community with wide roads and central green space."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Highway Trident"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": ""
    },
    {
      "label": "Developer",
      "value": "Graceland"
    },
    {
      "label": "Internal Roads",
      "value": "7.50 m and 9.00 m wide"
    },
    {
      "label": "Layout Plans",
      "value": "2 (coloured and plain)"
    }
  ],
  "images": [
    "/propertyList/Highway Trident/img1.jpg",
    "/propertyList/Highway Trident/img2.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Highway Trident/img1.jpg",
    "images": [
      "/propertyList/Highway Trident/img1.jpg",
      "/propertyList/Highway Trident/img2.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Highway Trident/img1.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Graceland",
    "description": "Developer name is taken from the uploaded Graceland layout plans and brochure."
  },
  "disclaimer": "Highway Trident details are prepared only from the uploaded layout plans. Plot sizes, price, availability and approvals should be verified with the official sales team."
},
{
  "id": 471,
  "title": "Uptown",
  "slug": "uptown-graceland",
  "location": "",
  "city": "",
  "state": "",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "",
  "area": "",
  "description": "Uptown is a plotted residential layout by Graceland. The layout plan shows around 270 numbered plots and an E series along 7.50 m wide roads, with several parks, 3 m pathways and a service area.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "About 270 numbered plots plus an E series",
        "7.50 m wide roads",
        "Multiple parks and green areas",
        "3 m wide pathways and service area marked"
      ]
    }
  ],
  "sections": {
    "overview": "A plotted layout with 7.50 m wide roads, several parks and pathways.",
    "amenities": [
      {
        "title": "Parks",
        "img": "/propertyList/Uptown/img1.jpg"
      },
      {
        "title": "7.50 m Wide Roads",
        "img": "/propertyList/Uptown/img1.jpg"
      },
      {
        "title": "3 m Pathways",
        "img": "/propertyList/Uptown/img1.jpg"
      }
    ],
    "specifications": [
      "7.50 m wide roads",
      "Parks and 3 m wide pathways",
      "Service area marked on the plan"
    ],
    "connectivity": [],
    "vision": [
      "A well-planned plotted layout with plenty of green space."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Uptown"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": ""
    },
    {
      "label": "Developer",
      "value": "Graceland"
    },
    {
      "label": "Plots",
      "value": "About 270 numbered plots plus E series"
    },
    {
      "label": "Internal Roads",
      "value": "7.50 m wide"
    }
  ],
  "images": [
    "/propertyList/Uptown/img1.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Uptown/img1.jpg",
    "images": [
      "/propertyList/Uptown/img1.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Uptown/img1.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "Graceland",
    "description": "Developer name is taken from the uploaded Graceland layout plans and brochure."
  },
  "disclaimer": "Uptown details are prepared only from the uploaded layout plan. Plot sizes, price, availability and approvals should be verified with the official sales team."
},
{
  "id": 490,
  "title": "Forest Mansion",
  "slug": "forest-mansion-house-of-shubhashish",
  "location": "Indore-Ujjain Road, Indore",
  "city": "Indore",
  "state": "Madhya Pradesh",
  "type": "Buy",
  "propertyType": "Plot",
  "bhk": "Plots",
  "area": "1200 - 1800 Sq.ft.",
  "description": "Forest Mansion is a residential plotted development by House of Shubhashish on the Indore-Ujjain Road corridor in Indore, planned around more than 1,00,000 trees and plants, a grand lake, and a lifestyle club, health club and clubhouse. The township is laid out in two phases (Phase 1 about 4.719 hectares and Phase 2 about 4.804 hectares) with 12 m wide roads, and offers two plot categories: Type 1 of 1200 - 1400 sq.ft. and Type 2 of 1600 - 1800 sq.ft. Amenities include a commercial plaza, water body, amphitheater, party lawn, kids play area, open gym, sports courts and a multisports arena, with 6-tier security and solar-powered common areas.",
  "keyHighlights": [
    {
      "title": "Key Highlights of the Project",
      "points": [
        "Plots of 1200 - 1400 sq.ft. (Type 1) and 1600 - 1800 sq.ft. (Type 2)",
        "Over 1,00,000 trees and plants, one of the densest green projects in Indore",
        "A Grand Lake and water body with fish pond and duck pond",
        "Health Club with medical room and Lifestyle Club",
        "6-tier security: guard, boom barrier, biometric entry, CCTV, 24/7 patrols and Smart Box",
        "Solar-powered common areas",
        "Sports facilities: lawn tennis, badminton, pickleball, half basketball court and multisports arena",
        "Located on the Indore-Ujjain Road corridor, with in-house construction and in-house maintenance"
      ]
    }
  ],
  "sections": {
    "overview": "Forest Mansion is a nature-centred plotted community on the Indore-Ujjain Road corridor, with dense greenery, a lake, clubs and extensive recreational amenities.",
    "amenities": [
      {
        "title": "Commercial Plaza",
        "img": "/propertyList/Forest Mansion/img19.jpg"
      },
      {
        "title": "Water Body",
        "img": "/propertyList/Forest Mansion/img19.jpg"
      },
      {
        "title": "Ram Mandir",
        "img": "/propertyList/Forest Mansion/img19.jpg"
      },
      {
        "title": "Buddha Sculpture",
        "img": "/propertyList/Forest Mansion/img19.jpg"
      },
      {
        "title": "Dense Forest",
        "img": "/propertyList/Forest Mansion/img20.jpg"
      },
      {
        "title": "Amphitheater",
        "img": "/propertyList/Forest Mansion/img20.jpg"
      },
      {
        "title": "Flower Bed",
        "img": "/propertyList/Forest Mansion/img20.jpg"
      },
      {
        "title": "Party Lawn",
        "img": "/propertyList/Forest Mansion/img20.jpg"
      },
      {
        "title": "Kids Play Area",
        "img": "/propertyList/Forest Mansion/img21.jpg"
      },
      {
        "title": "Duck Pond",
        "img": "/propertyList/Forest Mansion/img21.jpg"
      },
      {
        "title": "Fish Pond",
        "img": "/propertyList/Forest Mansion/img21.jpg"
      },
      {
        "title": "Open Gym",
        "img": "/propertyList/Forest Mansion/img21.jpg"
      },
      {
        "title": "Gazebo",
        "img": "/propertyList/Forest Mansion/img22.jpg"
      },
      {
        "title": "Pet Area",
        "img": "/propertyList/Forest Mansion/img22.jpg"
      },
      {
        "title": "Organic Farming",
        "img": "/propertyList/Forest Mansion/img22.jpg"
      },
      {
        "title": "Half Basketball Court",
        "img": "/propertyList/Forest Mansion/img22.jpg"
      },
      {
        "title": "Lawn Tennis Court",
        "img": "/propertyList/Forest Mansion/img23.jpg"
      },
      {
        "title": "Badminton Court",
        "img": "/propertyList/Forest Mansion/img23.jpg"
      },
      {
        "title": "Pickleball Court",
        "img": "/propertyList/Forest Mansion/img23.jpg"
      },
      {
        "title": "Multisports Arena",
        "img": "/propertyList/Forest Mansion/img23.jpg"
      },
      {
        "title": "Health Club",
        "img": "/propertyList/Forest Mansion/img17.jpg"
      },
      {
        "title": "Lifestyle Club",
        "img": "/propertyList/Forest Mansion/img18.jpg"
      },
      {
        "title": "Clubhouse",
        "img": "/propertyList/Forest Mansion/img24.jpg"
      },
      {
        "title": "A Grand Lake",
        "img": "/propertyList/Forest Mansion/img15.jpg"
      }
    ],
    "specifications": [
      "Plot Type 1: 1200 - 1400 sq.ft.; Type 2: 1600 - 1800 sq.ft.",
      "Phase 1 area approx. 4.719 hectares; Phase 2 area approx. 4.804 hectares",
      "12 m wide main roads as per master plan",
      "6-tier security: security guard at main entrance, boom barrier at entry gate, biometric entry, CCTV surveillance, 24/7 security patrols, Smart Box",
      "Solar-powered common areas",
      "Health Club with a dedicated medical room",
      "In-house construction and in-house maintenance"
    ],
    "connectivity": [
      "Shree Mahakaleshwar Jyotirlinga Temple - 30 min",
      "Aqua Imagica Waterpark - 11 min",
      "Shri Aurobindo Hospital - 15 min",
      "Symbiosis University - 18 min",
      "TCS and Infosys - 18 min",
      "Apollo Hospital - 19 min",
      "NMIMS - 20 min",
      "Raddisson Blu - 21 min",
      "A.P.J. Abdul Kalam University - 21 min",
      "Bombay Hospital - 22 min",
      "Sheraton Grand Palace - 22 min",
      "Indore Airport - 24 min",
      "Rajwada Palace - 24 min",
      "Indore Railway Station - 25 min",
      "Phoenix Citadel Mall - 26 min",
      "ISBT - 32 min",
      "IIM Indore - 40 min",
      "IIT Indore - 43 min",
      "(Approximate drive times by four-wheeler from the project as per Google Maps, recorded 21 Aug 2025; indicative only.)"
    ],
    "vision": [
      "To offer a private forest-like address where nature is part of everyday living.",
      "Sustainable living with dense greenery, solar-powered common areas and cleaner air.",
      "A community with clubs, sports and open spaces in the growing Indore-Ujjain Road corridor."
    ]
  },
  "projectData": [
    {
      "label": "Project Name",
      "value": "Forest Mansion"
    },
    {
      "label": "Property Type",
      "value": "Residential Plots"
    },
    {
      "label": "Location",
      "value": "Indore-Ujjain Road, Indore, Madhya Pradesh"
    },
    {
      "label": "Developer",
      "value": "House of Shubhashish"
    },
    {
      "label": "Plot Sizes",
      "value": "Type 1: 1200 - 1400 sq.ft.; Type 2: 1600 - 1800 sq.ft."
    },
    {
      "label": "Phase 1 Area",
      "value": "Approx. 4.719 Hectares"
    },
    {
      "label": "Phase 2 Area",
      "value": "Approx. 4.804 Hectares"
    },
    {
      "label": "Greenery",
      "value": "1,00,000+ trees and plants"
    }
  ],
  "images": [
    "/propertyList/Forest Mansion/img1.jpg",
    "/propertyList/Forest Mansion/img2.jpg",
    "/propertyList/Forest Mansion/img3.jpg",
    "/propertyList/Forest Mansion/img4.jpg",
    "/propertyList/Forest Mansion/img5.jpg",
    "/propertyList/Forest Mansion/img6.jpg",
    "/propertyList/Forest Mansion/img7.jpg",
    "/propertyList/Forest Mansion/img8.jpg",
    "/propertyList/Forest Mansion/img9.jpg",
    "/propertyList/Forest Mansion/img10.jpg",
    "/propertyList/Forest Mansion/img11.jpg",
    "/propertyList/Forest Mansion/img12.jpg",
    "/propertyList/Forest Mansion/img13.jpg",
    "/propertyList/Forest Mansion/img14.jpg",
    "/propertyList/Forest Mansion/img15.jpg",
    "/propertyList/Forest Mansion/img16.jpg",
    "/propertyList/Forest Mansion/img17.jpg",
    "/propertyList/Forest Mansion/img18.jpg",
    "/propertyList/Forest Mansion/img19.jpg",
    "/propertyList/Forest Mansion/img20.jpg",
    "/propertyList/Forest Mansion/img21.jpg",
    "/propertyList/Forest Mansion/img22.jpg",
    "/propertyList/Forest Mansion/img23.jpg",
    "/propertyList/Forest Mansion/img24.jpg"
  ],
  "floorPlan": {
    "image": "/propertyList/Forest Mansion/img25.jpg",
    "images": [
      "/propertyList/Forest Mansion/img25.jpg"
    ],
    "pdf": ""
  },
  "map": {
    "image": "/propertyList/Forest Mansion/img16.jpg",
    "locationLink": ""
  },
  "developer": {
    "name": "House of Shubhashish",
    "description": "Developer name is taken from the uploaded project folder. Forest Mansion is presented by House of Shubhashish with in-house construction and in-house maintenance."
  },
  "disclaimer": "Forest Mansion details are prepared only from the uploaded brochure and site photos. Images, art and illustrations are for reference purposes only and this is not a legal document. Infrastructure facilities mentioned are proposed to be developed by government and other authorities and their timing is beyond the developer's control; distances and drive times are approximate. Price, plot sizes, availability, RERA and approvals should be verified with the official sales team."
},
];

const propertyList = rawPropertyList.map(withDefaults);

export default propertyList;
