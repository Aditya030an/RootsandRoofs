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
    "propertyType": "Villas",
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
    "propertyType": "Villas",
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
    "propertyType": "Villas",
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
    "propertyType": "Residential Apartments",
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
      id: 211,
      title: "Vibrant Hill View",
      slug: "vibrant-hill-view",
      location: "Indore-Ujjain Road, Indore, Madhya Pradesh",
      city: "Indore",
      state: "Madhya Pradesh",
      type: "Buy",
      propertyType: "Plot",
      bhk: "Plots",
      area: "Approx. 6.002 Hectares",
      description:
        "Vibrant Hill View is a residential plotted development promoted by Roots & Roofs, spread across approximately 6.002 hectares along the prominent Indore-Ujjain Road. The project offers a diverse range of plot sizes within a well-planned grid of wide internal roads, surrounded by a developed educational, healthcare and corporate belt.",
      keyHighlights: [
        {
          title: "Key Highlights of the Project",
          points: [
            "Residential plotted development spread across approx. 6.002 hectares",
            "Strategically located along the prominent Indore-Ujjain Road",
            "Close to Super Corridor, MR-10, MR-110 and Banganga Road",
            "Near ISBT Bus Stand, Paliya Railway Station and a proposed railway station",
            "Wide internal roads of 7.5 m (approx. 25 ft) and 9.0 m (approx. 30 ft)",
            "Diverse range of plot sizes from 420 sq. ft. to 1,800 sq. ft.",
            "Surrounded by leading universities, hospitals and IT campuses",
            "Grand entrance gate, clubhouse, sports courts and landscaped plaza",
          ],
        },
      ],
      sections: {
        overview:
          "Vibrant Hill View (also referred to as Hill View) is a residential plotted development by Roots & Roofs along the Indore-Ujjain Road, offering diverse plot sizes with modern community amenities.",
        amenities: [
          {
            title: "Grand Entrance Gate",
            img: "/propertyList/VIBRANT HILL VIEW/img1.png",
          },
          {
            title: "Kids Play Area",
            img: "/propertyList/VIBRANT HILL VIEW/img3.png",
          },
          {
            title: "Entrance Pavilion",
            img: "/propertyList/VIBRANT HILL VIEW/img4.png",
          },
          {
            title: "Sports Courts",
            img: "/propertyList/VIBRANT HILL VIEW/img7.png",
          },
          {
            title: "Sports & Recreation Zone",
            img: "/propertyList/VIBRANT HILL VIEW/img8.png",
          },
          {
            title: "Clubhouse & Pool",
            img: "/propertyList/VIBRANT HILL VIEW/img9.png",
          },
        ],
        specifications: [
          "Residential plotted development across approx. 6.002 hectares",
          "Wide internal roads of 7.5 m (approx. 25 ft) and 9.0 m (approx. 30 ft)",
          "Plot sizes: 12'x35' (420), 15'x30' (450), 15'x35' (525), 15'x40' (600), 15'x45' (675)",
          "Plot sizes: 20'x35' (700), 20'x40' (800), 17'x50' (850), 25'x40' (1000), 30'x60' (1800) sq. ft.",
          "Various odd-dimensional corner plots also available",
          "Clubhouse, swimming pool, sports courts and kids play area",
          "Landscaped entrance plaza and grand entrance gate",
        ],
        connectivity: [
          "Located on the prominent Indore-Ujjain Road",
          "Close to Super Corridor, MR-10 Road, MR-110 Road and Banganga Road",
          "Near ISBT Bus Stand, Paliya Railway Station and a proposed railway station",
          "Educational hubs: Symbiosis, Narsee-Monjee, Oriental, LNCT, Shri Vaishnav University and Shishukunj International School",
          "Healthcare: Aurobindo Hospital and a proposed medical hub",
          "Corporate & IT: near TCS and Infosys campuses",
          "Hospitality: Hotel Clarion Inn, Hotel Sayaji and Dream Home Township",
        ],
        vision: [
          "Grand landscaped entrance plaza",
          "Wide grid of internal roads",
          "Community sports and recreation zone",
          "Secure plotted residential community",
        ],
      },
      projectData: [
        { label: "Project Name", value: "Vibrant Hill View" },
        { label: "Property Type", value: "Residential Plotted Development" },
        { label: "Total Area", value: "Approx. 6.002 Hectares" },
        { label: "Location", value: "Indore-Ujjain Road, Indore" },
        { label: "Developer", value: "Roots & Roofs" },
        { label: "Plot Size Range", value: "420 sq. ft. to 1,800 sq. ft." },
        { label: "Internal Roads", value: "7.5 m and 9.0 m wide" },
      ],
      images: [
        "/propertyList/VIBRANT HILL VIEW/img10.png",
        "/propertyList/VIBRANT HILL VIEW/img1.png",
        "/propertyList/VIBRANT HILL VIEW/img2.jpg",
        "/propertyList/VIBRANT HILL VIEW/img3.png",
        "/propertyList/VIBRANT HILL VIEW/img4.png",
        "/propertyList/VIBRANT HILL VIEW/img5.png",
        "/propertyList/VIBRANT HILL VIEW/img6.png",
        "/propertyList/VIBRANT HILL VIEW/img7.png",
        "/propertyList/VIBRANT HILL VIEW/img8.png",
        "/propertyList/VIBRANT HILL VIEW/img9.png",
      ],
      floorPlan: {
        image: "/propertyList/VIBRANT HILL VIEW/img5.png",
        pdf: "",
      },
      map: {
        image: "",
        locationLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15931.441031188211!2d75.84092503955081!3d22.8584841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396305007c97b977%3A0x15bb18a5b8efe318!2sVIBRANT%20NM%20HILL%20VIEW!5e1!3m2!1sen!2sin!4v1780421397925!5m2!1sen!2sin" 
      },
      developer: {
        name: "Roots & Roofs",
        description:
          "Developer name is taken from the uploaded project brochure (promoted by Roots & Roofs).",
      },
      disclaimer:
        "Vibrant Hill View details are prepared only from the uploaded brochure. Plot sizes, price, area and approvals should be verified with the official sales team.",
    },
  {
    "id": 212,
    "title": "Alaska Corridor",
    "slug": "alaska-corridor",
    "location": "Junarda Puarda, Super Corridor, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "",
    "description": "Alaska Corridor is a large T&CP approved plotted residential township on Indore's Super Corridor at Junarda Puarda. The layout is divided into three blocks (A, B and C) with hundreds of individually numbered plots catering to EWS, LIG and general category buyers. With grand entrances, wide internal roads, underground electrification and a rich package of themed gardens and amenities, it offers a self-contained township living experience.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "One of the largest plotted township projects on Indore's Super Corridor",
          "T&CP approved layout ensuring legal compliance",
          "Three blocks (A, B and C) with hundreds of individually numbered plots",
          "Plots for all income segments - EWS, LIG and general category",
          "Two grand entrances - one at 100 Feet Road and one at 60 Feet Road",
          "Wide internal roads of 30 ft and 40 ft with main access roads of 60 ft and 150 ft",
          "Underground electrification throughout the township",
          "11 themed and individually named gardens with 5 kids play zones",
          "Solar-powered street lighting, walking and jogging tracks",
          "Excellent connectivity to major IT companies and business parks"
        ]
      }
    ],
    "sections": {
      "overview": "A large T&CP approved plotted residential township on the Super Corridor, Indore, divided into three blocks with hundreds of plots and a rich amenity package.",
      "amenities": [
        {
          "title": "Master Plan Layout",
          "img": "/propertyList/ALASKA CORRIDOR/img9.png"
        },
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/ALASKA CORRIDOR/img7.jpg"
        },
        {
          "title": "Kids Play Area",
          "img": "/propertyList/ALASKA CORRIDOR/img1.jpg"
        },
        {
          "title": "Koi Fish Pond",
          "img": "/propertyList/ALASKA CORRIDOR/img2.jpg"
        },
        {
          "title": "Volleyball Court",
          "img": "/propertyList/ALASKA CORRIDOR/img4.jpg"
        },
        {
          "title": "Tennis Court",
          "img": "/propertyList/ALASKA CORRIDOR/img11.jpg"
        },
        {
          "title": "Walking & Jogging Track",
          "img": "/propertyList/ALASKA CORRIDOR/img6.jpg"
        },
        {
          "title": "Solar Street Lighting",
          "img": "/propertyList/ALASKA CORRIDOR/img8.jpg"
        }
      ],
      "specifications": [
        "EWS Plots: 20' x 40' and 14'4\" x 30' average",
        "LIG Plots: 20' x 50' average",
        "General Plots: 20' x 40', 20' x 45', 20' x 50', 20' x 55', 20' x 60' average",
        "Large Corner Plot: 90' x 125' average (marked S/R A1)",
        "Internal roads of 30 ft and 40 ft width",
        "Main access roads of 60 ft and 150 ft width",
        "Underground electrification throughout the township",
        "Multiple parks and service areas distributed across the layout",
        "11 themed gardens including Japanese, Paradise, Prestige, Pride, Precious and Prince Gardens",
        "5 kids play zones, 2 volleyball courts, football practice net and tennis court",
        "Koi fish pond, fountains, pergola seating and walking/jogging tracks",
        "3 solar systems for street lighting"
      ],
      "connectivity": [
        "Infosys and TCS campuses on the Super Corridor",
        "Sports Complex",
        "GRM Business Park and upcoming Business Park",
        "Bijasan Mata Temple, ISBT, D-Mart and YASH Technologies",
        "MR-5 Square, TCS Square, Vijay Nagar and Gandhi Square",
        "Two entry/exit points - one toward Super Corridor and one toward the village/main road",
        "Upcoming Retail, Offices and Hotel at MR-5 Square and TCS Square"
      ],
      "vision": [
        "Self-contained township living on the Super Corridor",
        "Inclusive plotting for EWS, LIG and general buyers",
        "Green and amenity-rich themed garden environment",
        "Legally compliant T&CP approved community",
        "Modern infrastructure with underground utilities"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Alaska Corridor"
      },
      {
        "label": "Status",
        "value": "Coming Soon"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Location",
        "value": "Junarda Puarda, Super Corridor, Indore"
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
        "label": "Approval",
        "value": "T&CP Approved"
      },
      {
        "label": "Blocks",
        "value": "Block A, Block B and Block C"
      },
      {
        "label": "Plot Categories",
        "value": "EWS, LIG and General"
      }
    ],
    "images": [
      "/propertyList/ALASKA CORRIDOR/img13.png",
      "/propertyList/ALASKA CORRIDOR/img1.jpg",
      "/propertyList/ALASKA CORRIDOR/img2.jpg",
      "/propertyList/ALASKA CORRIDOR/img3.jpg",
      "/propertyList/ALASKA CORRIDOR/img4.jpg",
      "/propertyList/ALASKA CORRIDOR/img5.png",
      "/propertyList/ALASKA CORRIDOR/img6.jpg",
      "/propertyList/ALASKA CORRIDOR/img7.jpg",
      "/propertyList/ALASKA CORRIDOR/img8.jpg",
      "/propertyList/ALASKA CORRIDOR/img9.png",
      "/propertyList/ALASKA CORRIDOR/img10.jpg",
      "/propertyList/ALASKA CORRIDOR/img11.jpg",
      "/propertyList/ALASKA CORRIDOR/img12.jpg"
    ],
    "floorPlan": {
      "image": "/propertyList/ALASKA CORRIDOR/img9.png",
      "pdf": ""
    },
    "map": {
      "image": "/propertyList/ALASKA CORRIDOR/img5.png",
      "locationLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1690486618522!2d75.80162064422419!3d22.813781010749203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963010057ea6029%3A0x416f443a8edd421d!2sAlaska%20corridor!5e1!3m2!1sen!2sin!4v1780421499922!5m2!1sen!2sin"
    },
    "developer": {
      "name": "",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Alaska Corridor details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 213,
    "title": "Alpine View Bihadiya",
    "slug": "alpine-view-bihadiya",
    "location": "Village Bihadiya, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "",
    "description": "Alpine View Bihadiya, also known as Dev Alpine View, is a new-launch RERA-registered residential plotting project in Village Bihadiya, Indore, brought by Vimalshree Group / Dev Infra Indore. The gated community offers a variety of plot sizes in a varied budget range, with possession expected by July 2028. Plots come with developed infrastructure including underground electric cabling, well-maintained internal roads, street lighting and 24/7 water supply.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "RERA-registered project (RERA No. P-OTH-26-6265)",
          "New launch residential plotting project in Bihadiya, Indore",
          "Gated community with secure boundary and entrance gate",
          "Underground electric cabling with dedicated power substation",
          "Well-maintained internal roads and internal street lights",
          "Sewage Treatment Plant for sustainable living",
          "24/7 water supply backed by borewell water supply",
          "Variety of plot sizes available across a varied budget range",
          "Single-phase project with possession expected by July 2028",
          "Developed by Vimalshree Group / Dev Infra Indore"
        ]
      }
    ],
    "sections": {
      "overview": "Alpine View Bihadiya is a new-launch, RERA-registered gated plotting project in Village Bihadiya, Indore, offering a range of residential plot sizes with developed infrastructure and modern amenities.",
      "amenities": [
        {
          "title": "Gated Community",
          "img": "/propertyList/Alpine View Bihadiya/img2.png"
        },
        {
          "title": "Underground Electric Cabling & Power Substation",
          "img": "/propertyList/Alpine View Bihadiya/img5.png"
        },
        {
          "title": "Internal Street Lights",
          "img": "/propertyList/Alpine View Bihadiya/img4.png"
        },
        {
          "title": "Well-Maintained Internal Roads",
          "img": "/propertyList/Alpine View Bihadiya/img8.png"
        },
        {
          "title": "24/7 Water Supply",
          "img": "/propertyList/Alpine View Bihadiya/img3.png"
        },
        {
          "title": "Borewell Water Supply",
          "img": "/propertyList/Alpine View Bihadiya/img6.png"
        },
        {
          "title": "Sewage Treatment Plant",
          "img": "/propertyList/Alpine View Bihadiya/img7.png"
        },
        {
          "title": "Quality Specifications",
          "img": "/propertyList/Alpine View Bihadiya/img1.png"
        }
      ],
      "specifications": [
        "Electrical: HT and LT cabling infrastructure with dedicated underground piping and chambers, incorporating LT boxes, AB switches, transformers, RMU, feeder panels, main panels and earthing sets",
        "Plumbing: Water supply, tube well and irrigation lines installed using HDPE Pipe (PE-100), with sewage and disposal systems utilizing Double Wall Corrugated (DWC) pipes",
        "Structure: Boundary walls constructed with brick work and RCC beams and columns",
        "Entrance gate featuring a combination of RCC, brick work and MS structural steel",
        "Main approach road 30.00 mt. wide",
        "Variety of plot sizes available across the layout"
      ],
      "connectivity": [
        "Located on Khasra 233/1, Village Bihadiya, Indore 452016",
        "Near Pakiza City and proposed colony developments (as per location plan)"
      ],
      "vision": [
        "A secure gated community for modern living",
        "Sustainable infrastructure with STP and underground utilities",
        "Well-planned plots with wide internal roads",
        "A future-ready address in growing Bihadiya, Indore"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Alpine View Bihadiya (Dev Alpine View)"
      },
      {
        "label": "Property Type",
        "value": "  Plot"
      },
      {
        "label": "Location",
        "value": "Khasra 233/1, Village Bihadiya, Indore 452016"
      },
      {
        "label": "Developer",
        "value": "Vimalshree Group / Dev Infra Indore"
      },
      {
        "label": "Possession Status",
        "value": "New Launch"
      },
      {
        "label": "Possession/Completion Date",
        "value": "July, 2028"
      },
      {
        "label": "Phases",
        "value": "1 Phase"
      },
      {
        "label": "RERA Number",
        "value": "P-OTH-26-6265"
      }
    ],
    "images": [
      "/propertyList/Alpine View Bihadiya/img10.png",
      "/propertyList/Alpine View Bihadiya/img1.png",
      "/propertyList/Alpine View Bihadiya/img2.png",
      "/propertyList/Alpine View Bihadiya/img3.png",
      "/propertyList/Alpine View Bihadiya/img4.png",
      "/propertyList/Alpine View Bihadiya/img5.png",
      "/propertyList/Alpine View Bihadiya/img6.png",
      "/propertyList/Alpine View Bihadiya/img7.png",
      "/propertyList/Alpine View Bihadiya/img8.png",
      "/propertyList/Alpine View Bihadiya/img9.jpg"
    ],
    "floorPlan": {
      "image": "/propertyList/Alpine View Bihadiya/img9.jpg",
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink": ""
    },
    "developer": {
      "name": "Vimalshree Group / Dev Infra Indore",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Alpine View Bihadiya details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
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
    "id": 215,
    "title": "AMM Greens",
    "slug": "amm-greens",
    "location": "Village Bada Bangarda, Super Corridor, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Residential Apartments",
    "bhk": "EWS/LIG Units",
    "area": "",
    "price": [{type:"EWS", price: "₹ 10.52 Lakh"}, {type:"LIG", price: "₹ 14.51 Lakh"}],
    "description": "AMM Greens is a ready-to-move, RERA-registered residential apartment project on Indore's Super Corridor, marketed as \"Best Quality, Most Affordable\" housing. The project is designed specifically for EWS (Economically Weaker Section) and LIG (Lower Income Group) buyers, offering compact and value-driven homes in a G+3 building. It enjoys strong connectivity to IT hubs, the metro, major universities and Indore Airport. AMM Green EWS - 1 RK Flat , AMM Green LIG - 1 BHK Flat",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Ready-to-move affordable housing with no waiting period",
          "RERA registered under MP RERA (No. P-IND-20-2710)",
          "Dedicated EWS and LIG category apartments",
          "Prime Super Corridor location at Village Bada Bangarda, Indore",
          "G+3 building structure with multiple units per floor",
          "1.5 km from Infosys and TCS IT hubs",
          "1.2 km from the Metro Station",
          "Walking distance from Symbiosis, Narsee Monjee and DAVV Universities",
          "Close to Indore Airport and the upcoming Sports Complex",
          "Quality construction with vitrified flooring and granite kitchen platforms"
        ]
      }
    ],
    "sections": {
      "overview": "AMM Greens is a ready-to-move, RERA-registered affordable EWS/LIG residential apartment project located on the Super Corridor at Village Bada Bangarda, Indore.",
      "amenities": [
        {
          "title": "Residential Apartment Building",
          "img": "/propertyList/AMM Greens/img2.jpg"
        },
        {
          "title": "Project Exterior View",
          "img": "/propertyList/AMM Greens/img1.jpg"
        },
        {
          "title": "Spacious Interiors",
          "img": "/propertyList/AMM Greens/img3.jpg"
        },
        {
          "title": "RCC Staircase with Stone Finish",
          "img": "/propertyList/AMM Greens/img3.jpg"
        },
        {
          "title": "Modern Attached Bathroom",
          "img": "/propertyList/AMM Greens/img3.jpg"
        }
      ],
      "specifications": [
        "Foundation: M20 grade RCC concrete, excavated 3m below ground",
        "Structure: FE500 TMT reinforcement bars; M20 concrete columns, beams and slabs",
        "Walls: Red brick partition and exterior walls (CM 1:4)",
        "Flooring: 600x600mm vitrified tiles; anti-skid tiles in bathrooms",
        "Plaster: 10mm ceiling / 12mm internal / 15mm external",
        "Paint: Distemper for interiors; all-weather paint for exteriors",
        "Doors: Kapur sal wood frames with laminated flush door shutters",
        "Windows: Powder-coated double-track aluminium with glass",
        "Kitchen: Granite top platform with full-height wall tile dado",
        "Plumbing: CPVC supply pipes; PVC ISI-certified drain pipes",
        "Electrical: Heavy PVC conduits, ISI-certified wiring, Gold Medal switches",
        "Staircase: RCC with stone finish and MS railing",
        "Water tanks: Overhead (OHWT) and underground (UGWT) RCC tanks",
        "Building structure: G+3 floors, height 12.45 metres"
      ],
      "connectivity": [
        "1.5 km from Infosys & TCS",
        "1.2 km from Metro Station",
        "1.7 km from upcoming Sports Complex",
        "Walking distance from Symbiosis, Narsee Monjee and DAVV Universities",
        "Close to Indore Airport",
        "Located near Sports Hub, Medical Hub and Singapore Lifestyle zones on the Super Corridor"
      ],
      "vision": [
        "Best quality at the most affordable price",
        "Empowering EWS and LIG homebuyers",
        "Prime connectivity on Indore's Super Corridor",
        "Ready-to-move homes with full legal transparency",
        "Durable construction with quality materials throughout"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "AMM Greens"
      },
      {
        "label": "Property Type",
        "value": "Residential Apartments (EWS/LIG)"
      },
      {
        "label": "Location",
        "value": "Village Bada Bangarda, Tehsil Hatod, Indore, MP - 453112"
      },
      {
        "label": "Developer",
        "value": "AMM Realties"
      },
      {
        "label": "RERA Registration No.",
        "value": "P-IND-20-2710"
      },
      {
        "label": "RERA Registration Date",
        "value": "4th August 2020"
      },
      {
        "label": "Project Type",
        "value": "New Residential"
      },
      {
        "label": "Building Structure",
        "value": "G+3 floors (Building height 12.45 metres)"
      },
      {
        "label": "Status",
        "value": "Ready to Move"
      }
    ],
    "images": [
      "/propertyList/AMM Greens/img1.jpg",
      "/propertyList/AMM Greens/img2.jpg",
      "/propertyList/AMM Greens/img3.jpg",
      "/propertyList/AMM Greens/img4.jpg",
      "/propertyList/AMM Greens/img5.jpg",
      "/propertyList/AMM Greens/img6.jpg",
      "/propertyList/AMM Greens/img7.jpg",
      "/propertyList/AMM Greens/img8.jpg"
    ],
    "floorPlan": {
      "images": [
        "/propertyList/AMM Greens/img2.jpg",
        "/propertyList/AMM Greens/img7.jpg",
        "/propertyList/AMM Greens/img8.jpg"
      ],
      "pdf": ""
    },
    "map": {
      "image": "/propertyList/AMM Greens/img6.jpg",
      "locationLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.757442039773!2d75.78789107563237!3d22.75941617935908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396301ce0a29afef%3A0x28c7993732b09394!2sAMM%20GREENS%20BADA%20BANGARDA!5e1!3m2!1sen!2sin!4v1780421827487!5m2!1sen!2sin" 
    },
    "developer": {
      "name": "AMM Realties",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "AMM Greens details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 216,
    "title": "Anand Hill View",
    "slug": "anand-hill-view",
    "location": "Rau, Indore Bypass Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "800 sqft - 1150 sqft (plot sizes)",
    "description": "Anand Hill View is a thoughtfully planned residential plotting project located near Rau along the Indore Bypass Road in Indore, Madhya Pradesh. It offers a range of residential plots from 800 sqft to 1150 sqft, complemented by landscaped central greens, garden plazas, wide internal roads and a grand sculptural entrance gate. The development is well connected to Rau Circle, AB Road, Medicaps University and major social infrastructure.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Residential plotting project with plot sizes ranging from 800 sqft to 1150 sqft",
          "Plot dimensions including 20'x40' (6.0x12.0M), 23'x40' (7.0x12.0M) and 23'x50' (7.0x15.0M)",
          "Grand sculptural entrance gate with illuminated night facade",
          "Landscaped central green park with seating and gazebos",
          "Wide 9.0M internal roads abutting 30M and 18M master plan roads",
          "Dedicated open parks, garden plazas and pathways within the layout",
          "Strategically located near Rau Circle and Indore Bypass Road",
          "Close to Medicaps University, Silicon City and Silicon Valley",
          "Mix of residential, EWS, LIG and commercial plots",
          "Operational customer helpline and website for buyer support"
        ]
      }
    ],
    "sections": {
      "overview": "Anand Hill View is a residential plotting development near Rau on the Indore Bypass Road, offering 800 to 1150 sqft plots with landscaped greens, wide roads and a grand entrance gate.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/ANAND HILL VIEW/img3.jpg"
        },
        {
          "title": "Illuminated Night Entrance",
          "img": "/propertyList/ANAND HILL VIEW/img7.jpg"
        },
        {
          "title": "Central Green Park",
          "img": "/propertyList/ANAND HILL VIEW/img1.jpg"
        },
        {
          "title": "Landscaped Garden Plaza",
          "img": "/propertyList/ANAND HILL VIEW/img2.jpg"
        },
        {
          "title": "Garden Gazebo / Sit-out",
          "img": "/propertyList/ANAND HILL VIEW/img6.jpg"
        },
        {
          "title": "Internal Green Avenues",
          "img": "/propertyList/ANAND HILL VIEW/img8.jpg"
        },
        {
          "title": "Open Green Spaces",
          "img": "/propertyList/ANAND HILL VIEW/img10.jpg"
        },
        {
          "title": "Tree-lined Walkways",
          "img": "/propertyList/ANAND HILL VIEW/img11.jpg"
        }
      ],
      "specifications": [
        "Plot sizes available from 800 sqft (minimum) to 1150 sqft (maximum)",
        "Plot size 6.0 x 12.0M (20'x40') - 253 nos.",
        "Plot size 7.0 x 12.0M (23'x40') - 18 nos.",
        "Plot size 7.0 x 15.0M (23'x50') - 08 nos.",
        "EWS plots 3.0 x 12.0M (10'x40') - 29 nos.",
        "LIG plots 6.0 x 12.0M (20'x40') - 18 nos.",
        "Commercial plots 6.0 x 12.0M (20'x40') - 11 nos.",
        "9.0M wide internal roads",
        "30.0M and 18.0M wide master plan roads",
        "Open parks, pathways and landscaped zones within the layout"
      ],
      "connectivity": [
        "Near Rau Circle",
        "Indore Bypass Road",
        "AB Road",
        "Medicaps University",
        "Silicon City",
        "Silicon Valley",
        "Rau Tehsil Office",
        "Delhi Public School",
        "Palash Parisar Indore"
      ],
      "vision": [
        "Landscaped community living close to nature",
        "Grand, identity-defining entrance gate",
        "Well-planned green open spaces and parks",
        "Wide internal road network for smooth connectivity",
        "Affordable plotted homes near key city infrastructure"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Anand Hill View"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Location",
        "value": "Rau, Indore Bypass Road, Indore, Madhya Pradesh"
      },
      {
        "label": "Plot Sizes",
        "value": "800 sqft - 1150 sqft"
      },
      {
        "label": "Configuration",
        "value": "Residential Plots"
      },
      {
        "label": "Internal Road Width",
        "value": "9.0M"
      },
      {
        "label": "Master Plan Roads",
        "value": "30.0M & 18.0M"
      },
      {
        "label": "City",
        "value": "Indore"
      },
      {
        "label": "State",
        "value": "Madhya Pradesh"
      }
    ],
    "images": [
      "/propertyList/ANAND HILL VIEW/img1.jpg",
      "/propertyList/ANAND HILL VIEW/img2.jpg",
      "/propertyList/ANAND HILL VIEW/img3.jpg",
      "/propertyList/ANAND HILL VIEW/img4.jpg",
      "/propertyList/ANAND HILL VIEW/img5.jpg",
      "/propertyList/ANAND HILL VIEW/img6.jpg",
      "/propertyList/ANAND HILL VIEW/img7.jpg",
      "/propertyList/ANAND HILL VIEW/img8.jpg",
      "/propertyList/ANAND HILL VIEW/img9.jpg",
      "/propertyList/ANAND HILL VIEW/img10.jpg",
      "/propertyList/ANAND HILL VIEW/img11.jpg",
      "/propertyList/ANAND HILL VIEW/img12.jpg",
      "/propertyList/ANAND HILL VIEW/img13.jpg",
      "/propertyList/ANAND HILL VIEW/img14.jpg"
    ],
    "floorPlan": {
      "image": "/propertyList/ANAND HILL VIEW/img14.jpg",
      "pdf": ""
    },
    "map": {
      "image": "/propertyList/ANAND HILL VIEW/img12.jpg",
      "locationLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.9998053323528!2d75.82726994295254!3d22.624915678085912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fb0039e53441%3A0xb18f72656bb8e65f!2sAnand%20Hill%20view!5e1!3m2!1sen!2sin!4v1780421970651!5m2!1sen!2sin"
    },
    "developer": {
      "name": "Anand Hill View",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Anand Hill View details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 217,
    "title": "Shanti Ratan Shree Avenue",
    "slug": "shanti-ratan-shree-avenue",
    "location": "Panchderiya, Ujjain Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "",
    "description": "Shanti Ratan Shree Avenue is a planned plotted residential community at Panchderiya on Ujjain Road, Indore, promoted by Roots & Roofs in collaboration with the BCM Group. The project offers hundreds of clearly demarcated residential plots laid out on a well-planned grid of internal roads, with grand entrance architecture, designer boundary walls and landscaped frontages. Its strategic location near major 100-ft and 400-ft road networks gives easy directional access towards both Ujjain and Indore.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Planned plotted residential community designed for organised housing",
          "Strategically located on Ujjain Road, Panchderiya, Indore (Pincode 453555)",
          "Near major road networks including 100-ft and 400-ft wide roads",
          "Easy directional access towards both Ujjain and Indore for convenient intercity travel",
          "Hundreds of clearly demarcated residential plots with optimal block distribution",
          "Well-planned grid of internal roads in 7.50 m, 8.00 m and 12.00 m widths",
          "Grand designer entrance gate and illuminated project signage wall",
          "Multiple boundary wall designs (Type A, Type B and Type C) for a premium streetscape",
          "Located in a fast-developing institutional and commercial corridor",
          "Promoted by Roots & Roofs in collaboration with the BCM Group"
        ]
      }
    ],
    "sections": {
      "overview": "A planned plotted residential community on Ujjain Road, Indore, offering well-demarcated plots, a grid of internal roads and grand entrance architecture, developed by Roots & Roofs with the BCM Group.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/BCM SHANTI RATAN AVENUE/img1.jpg"
        },
        {
          "title": "Illuminated Project Signage Wall",
          "img": "/propertyList/BCM SHANTI RATAN AVENUE/img6.jpg"
        },
        {
          "title": "Landscaped Entrance Frontage",
          "img": "/propertyList/BCM SHANTI RATAN AVENUE/img12.jpg"
        },
        {
          "title": "Boundary Wall - Type A",
          "img": "/propertyList/BCM SHANTI RATAN AVENUE/img9.jpg"
        },
        {
          "title": "Boundary Wall - Type B",
          "img": "/propertyList/BCM SHANTI RATAN AVENUE/img5.jpg"
        },
        {
          "title": "Boundary Wall - Type C",
          "img": "/propertyList/BCM SHANTI RATAN AVENUE/img2.jpg"
        },
        {
          "title": "Wide Internal Roads",
          "img": "/propertyList/BCM SHANTI RATAN AVENUE/img11.jpg"
        },
        {
          "title": "Entrance Plaza & Drop-off",
          "img": "/propertyList/BCM SHANTI RATAN AVENUE/img8.jpg"
        }
      ],
      "specifications": [
        "Plotted residential community designed for planned housing",
        "Hundreds of clearly demarcated residential plots with block distributions for optimal space utilisation",
        "Well-planned grid of internal roads",
        "Internal roads of 7.50-meter width",
        "Internal roads of 8.00-meter width",
        "Internal roads of 12.00-meter width",
        "Located near 100-ft wide roads",
        "Located near 400-ft wide roads",
        "Designer boundary walls in Type A, Type B and Type C",
        "Grand entrance gate with illuminated signage wall and landscaping"
      ],
      "connectivity": [
        "Easy directional access towards both Ujjain and Indore",
        "Prestige University",
        "Oriental University",
        "Advanced Academy",
        "Modern College",
        "Shishukunj School",
        "Aurobindo Hospital",
        "MR-10 Toll Naka",
        "Luv Kush Square",
        "Tarana Square",
        "Kamla Vihar",
        "Ringnodiya Panchayat Bhavan",
        "Vibrant Hill View"
      ],
      "vision": [
        "Thoughtfully planned plots for modern community living",
        "Premium entrance architecture and landscaped frontages",
        "Well-connected location in a growing institutional corridor",
        "Wide internal road network for easy mobility",
        "A better-world community vision backed by the BCM Group"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Shanti Ratan Shree Avenue"
      },
      {
        "label": "Property Type",
        "value": "Plotted Residential Community"
      },
      {
        "label": "Location",
        "value": "Panchderiya, Ujjain Road, Indore"
      },
      {
        "label": "Pincode",
        "value": "453555"
      },
      {
        "label": "Developer",
        "value": "Roots & Roofs in collaboration with BCM Group"
      },
      {
        "label": "City Access",
        "value": "Directional access towards Ujjain and Indore"
      },
      {
        "label": "Internal Road Widths",
        "value": "7.50 m, 8.00 m and 12.00 m"
      },
      {
        "label": "Nearby Major Roads",
        "value": "100-ft and 400-ft wide roads"
      }
    ],
    "images": [
      "/propertyList/BCM SHANTI RATAN AVENUE/img1.jpg",
      "/propertyList/BCM SHANTI RATAN AVENUE/img2.jpg",
      "/propertyList/BCM SHANTI RATAN AVENUE/img3.jpg",
      "/propertyList/BCM SHANTI RATAN AVENUE/img4.jpg",
      "/propertyList/BCM SHANTI RATAN AVENUE/img5.jpg",
      "/propertyList/BCM SHANTI RATAN AVENUE/img6.jpg",
      "/propertyList/BCM SHANTI RATAN AVENUE/img7.jpg",
      "/propertyList/BCM SHANTI RATAN AVENUE/img8.jpg",
      "/propertyList/BCM SHANTI RATAN AVENUE/img9.jpg",
      "/propertyList/BCM SHANTI RATAN AVENUE/img10.jpg",
      "/propertyList/BCM SHANTI RATAN AVENUE/img11.jpg",
      "/propertyList/BCM SHANTI RATAN AVENUE/img12.jpg",
      "/propertyList/BCM SHANTI RATAN AVENUE/img13.jpg",
      "/propertyList/BCM SHANTI RATAN AVENUE/img14.jpg",
      "/propertyList/BCM SHANTI RATAN AVENUE/img15.jpg"
    ],
    "floorPlan": {
      "image": "",
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.4825324835956!2d75.87334489999999!3d22.837239999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630300786d865b%3A0x7c9c3713772a096b!2sBcm%20shanti%20ratanshree%20avenue!5e1!3m2!1sen!2sin!4v1780422136332!5m2!1sen!2sin"
    },
    "developer": {
      "name": "Roots & Roofs (in collaboration with BCM Group)",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Shanti Ratan Shree Avenue details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 218,
    "title": "Decent Heights",
    "slug": "decent-heights",
    "location": "Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "75 Plots",
    "description": "Decent Heights by Vimalshree is a premium gated plotting project offering 75 residential plot inventories in a range of sizes from 1000 sq.ft. to 1600 sq.ft., plus a larger M-1 parcel of approximately 19500 sq.ft. The development features a grand royal entrance gate, landscaped boulevards, a dedicated park, kids play area and open-air gym, all served by wide internal roads.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Gated plotting community by Vimalshree with 75 plot inventories",
          "Plot sizes ranging from 1000 sq.ft. to 1600 sq.ft. (approx)",
          "Larger M-1 parcel of approximately 19500 sq.ft.",
          "Grand royal-themed entrance gate with ornamental lighting",
          "Wide 30'0\" internal roads with landscaped central boulevard",
          "Dedicated landscaped park and green open spaces",
          "Kids play area with modern play equipment",
          "Open-air gym and fitness zone",
          "Connectivity to 150'0\" wide proposed master plan road",
          "Commercial / residential plots available within the layout"
        ]
      }
    ],
    "sections": {
      "overview": "Decent Heights by Vimalshree is a gated residential plotting project offering 75 plots in varied sizes with premium amenities and a grand entrance.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/Decent Heights/img1.jpg"
        },
        {
          "title": "Kids Play Area",
          "img": "/propertyList/Decent Heights/img2.jpg"
        },
        {
          "title": "Landscaped Central Boulevard",
          "img": "/propertyList/Decent Heights/img3.jpg"
        },
        {
          "title": "Royal Entrance Plaza",
          "img": "/propertyList/Decent Heights/img5.jpg"
        },
        {
          "title": "Open-Air Gym",
          "img": "/propertyList/Decent Heights/img6.jpg"
        },
        {
          "title": "Landscaped Park",
          "img": "/propertyList/Decent Heights/img8.jpg"
        },
        {
          "title": "Project Entrance Signage",
          "img": "/propertyList/Decent Heights/img7.jpg"
        }
      ],
      "specifications": [
        "Total 75 plot inventories",
        "M-1 parcel = 19500 sq.ft. (Approx)",
        "23'0\" X 70'0\" = 1600 sq.ft. (Approx)",
        "22'0\" X 59'0\" = 1300 sq.ft. (Approx)",
        "22'0\" X 57'0\" = 1250 sq.ft. (Approx)",
        "22'0\" X 55'0\" = 1200 sq.ft. (Approx)",
        "22'0\" X 50'0\" = 1100 sq.ft. (Approx)",
        "20'0\" X 50'0\" = 1000 sq.ft. (Approx)",
        "30'0\" wide internal roads",
        "150'0\" wide proposed master plan road frontage",
        "Dedicated park, parking and commercial/residential plots"
      ],
      "connectivity": [],
      "vision": [
        "Grand royal-themed gated living",
        "Spacious plots in premium sizes",
        "Lush green landscaped surroundings",
        "Family-friendly community amenities",
        "Well-planned wide-road infrastructure"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Decent Heights"
      },
      {
        "label": "Developer",
        "value": "Vimalshree"
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
        "label": "Total Inventories",
        "value": "75 Plots"
      },
      {
        "label": "Plot Sizes",
        "value": "1000 to 1600 sq.ft. (Approx)"
      },
      {
        "label": "Largest Parcel (M-1)",
        "value": "19500 sq.ft. (Approx)"
      },
      {
        "label": "Internal Road Width",
        "value": "30'0\" Wide"
      }
    ],
    "images": [
      "/propertyList/Decent Heights/img1.jpg",
      "/propertyList/Decent Heights/img2.jpg",
      "/propertyList/Decent Heights/img3.jpg",
      "/propertyList/Decent Heights/img4.jpg",
      "/propertyList/Decent Heights/img5.jpg",
      "/propertyList/Decent Heights/img6.jpg",
      "/propertyList/Decent Heights/img7.jpg",
      "/propertyList/Decent Heights/img8.jpg",
      "/propertyList/Decent Heights/img9.jpg",
      "/propertyList/Decent Heights/img10.jpg",
      "/propertyList/Decent Heights/img11.jpg"
    ],
    "floorPlan": {
      "image": "/propertyList/Decent Heights/img4.jpg",
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6357477387323!2d75.91963351856887!3d22.660587815747284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e30075e40b0f%3A0xa1b2733aa51e3f30!2sDecent%20Height%27s!5e1!3m2!1sen!2sin!4v1780422239149!5m2!1sen!2sin"
    },
    "developer": {
      "name": "Vimalshree",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Decent Heights details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 219,
    "title": "Kalpana Avenue",
    "slug": "kalpana-avenue",
    "location": "Village Puwarda Junarda, Paliya Haidar, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "800 Sq.ft.",
    "description": "Kalpana Avenue by Hi Link Group is a RERA-approved residential plotting project at Village Puwarda Junarda, Paliya Haidar, Indore. Launched in August 2023 with possession slated for June 2026, it offers residential land/plots starting from 800 sq.ft. with a well-planned road network and modern amenities. The gated community is designed for a convenient, secure lifestyle with parks, play areas and reserved parking.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "RERA approved project (RERA ID P-IND-23-4346)",
          "Residential land / plots starting from 800 Sq.ft.",
          "Launched in August 2023 with possession by June 2026",
          "Variety of plot sizes including 18'x50', 20'x40', 20'x50' and 30'x50'",
          "Dedicated commercial-cum-residential plots within the layout",
          "Wide internal road network including an 18.0M main road, 9.0M and 7.50M roads",
          "EWS plots (13'x30' / 15'x40') for affordable housing",
          "Equipped with Power Backup and Fire Sprinklers",
          "CCTV camera surveillance and street lighting for security",
          "Landscaped parks, play area, jogging tracks and reserved parking"
        ]
      }
    ],
    "sections": {
      "overview": "Kalpana Avenue is a RERA-approved gated residential plotting project by Hi Link Group at Village Puwarda Junarda, Paliya Haidar, Indore, offering well-planned plots with modern amenities and possession by June 2026.",
      "amenities": [
        {
          "title": "Internal Concrete Roads",
          "img": "/propertyList/KALPANA AVENUE/img3.jpg"
        },
        {
          "title": "Wide RCC Approach Road",
          "img": "/propertyList/KALPANA AVENUE/img2.jpg"
        },
        {
          "title": "Water Storage Facility",
          "img": "/propertyList/KALPANA AVENUE/img1.jpg"
        },
        {
          "title": "Entrance Pavilion & Open Spaces",
          "img": "/propertyList/KALPANA AVENUE/img4.jpg"
        },
        {
          "title": "Master Plan Layout",
          "img": "/propertyList/KALPANA AVENUE/img5.jpg"
        }
      ],
      "specifications": [
        "Property Type: Residential Land / Plots",
        "Plot area starting from 800 Sq.ft.",
        "Plot sizes: 18'x50', 20'x40', 20'x50', 30'x50'",
        "EWS plot sizes: 13'x30' and 15'x40'",
        "Commercial-cum-residential plots available",
        "Main road width of 18.0 Meters",
        "Internal roads of 9.0M and 7.50M width",
        "Power Backup provision",
        "Fire Sprinklers installed",
        "CCTV camera surveillance",
        "Street lighting throughout the layout"
      ],
      "connectivity": [
        "Connected to Super Corridor via Floor Road",
        "Approach road towards Paliya",
        "Located at Village Puwarda Junarda, Indore"
      ],
      "vision": [
        "A secure gated community lifestyle",
        "Thoughtfully planned plots with wide roads",
        "Green and open landscaped spaces",
        "Affordable and modern plotted living",
        "Convenient connectivity to key city corridors"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Kalpana Avenue"
      },
      {
        "label": "Property Type",
        "value": "Residential Land / Plots"
      },
      {
        "label": "Developer",
        "value": "Hi Link Group"
      },
      {
        "label": "Location",
        "value": "Survey No 95/2, 96/1 (96/2), Village Puwarda Junarda, Paliya Haidar, Indore"
      },
      {
        "label": "Plot Area",
        "value": "800 Sq.ft. onwards"
      },
      {
        "label": "Pricing",
        "value": "30 Lac"
      },
      {
        "label": "Launch Date",
        "value": "August 2023"
      },
      {
        "label": "Possession",
        "value": "June 2026"
      },
      {
        "label": "Possession Status",
        "value": "Upcoming Project"
      },
      {
        "label": "RERA ID",
        "value": "P-IND-23-4346"
      }
    ],
    "images": [
      "/propertyList/KALPANA AVENUE/img1.jpg",
      "/propertyList/KALPANA AVENUE/img2.jpg",
      "/propertyList/KALPANA AVENUE/img3.jpg",
      "/propertyList/KALPANA AVENUE/img4.jpg",
      "/propertyList/KALPANA AVENUE/img5.jpg"
    ],
    "floorPlan": {
      "image": "/propertyList/KALPANA AVENUE/img5.jpg",
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4070.885121156818!2d75.93232518606598!3d22.71310854521558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3727df77431%3A0x20f90089ca928303!2sKalpana!5e1!3m2!1sen!2sin!4v1780422645770!5m2!1sen!2sin"
    },
    "developer": {
      "name": "Hi Link Group",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Kalpana Avenue details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 220,
    "title": "Kanchan Leela Homes",
    "slug": "kanchan-leela-homes",
    "location": "Bada Bangarda, Super Corridor, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Residential Apartments",
    "bhk": "2/3 BHK",
    "area": "5.92 acres",
    "description": "Kanchan Leela Homes is an upcoming under-construction gated housing society in Super Corridor, Indore, spread over 5.92 acres with around 214 units in a single phase. The RERA-registered project (P-IND-24-4524) offers landscaped gardens, children's play areas and a secure community environment, with possession scheduled for August 2026.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Spread over a sprawling 5.92 acres in Super Corridor, Indore",
          "Around 214 residential units offered in a single phase",
          "RERA-registered project (Reg. No. P-IND-24-4524)",
          "Gated community with secure, well-planned access",
          "Beautifully landscaped gardens and central green spaces",
          "Dedicated children's play area with modern play equipment",
          "Decorative tree-of-life entrance art and grand entry gate",
          "Possession scheduled for August 2026",
          "Located close to Shree Maruti Nandan Hospital landmark",
          "Good public transport with Palia Station nearby"
        ]
      }
    ],
    "sections": {
      "overview": "Kanchan Leela Homes is an under-construction, RERA-registered gated housing society on 5.92 acres in Super Corridor, Indore, offering 214 well-amenitised residential homes with possession in August 2026.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/KANCHAN LEELA HOMES/img18.jpg"
        },
        {
          "title": "Tree of Life Feature Wall",
          "img": "/propertyList/KANCHAN LEELA HOMES/img1.jpg"
        },
        {
          "title": "Landscaped Garden",
          "img": "/propertyList/KANCHAN LEELA HOMES/img2.jpg"
        },
        {
          "title": "Children's Play Area",
          "img": "/propertyList/KANCHAN LEELA HOMES/img14.jpg"
        },
        {
          "title": "Central Park",
          "img": "/propertyList/KANCHAN LEELA HOMES/img9.jpg"
        },
        {
          "title": "Gazebo Seating Plaza",
          "img": "/propertyList/KANCHAN LEELA HOMES/img10.jpg"
        },
        {
          "title": "Decorative Jali Screen Wall",
          "img": "/propertyList/KANCHAN LEELA HOMES/img8.jpg"
        },
        {
          "title": "Walking Pathways",
          "img": "/propertyList/KANCHAN LEELA HOMES/img12.jpg"
        }
      ],
      "specifications": [
        "Total project area of 5.92 acres",
        "Around 214 residential units on offer",
        "Single phase development",
        "RERA Registration No. P-IND-24-4524",
        "Possession status: Under Construction",
        "Possession / completion date: August 2026",
        "Gated community with controlled entry"
      ],
      "connectivity": [
        "Shree Maruti Nandan Hospital is a popular landmark in Super Corridor",
        "Palia Station is among the closest transit points",
        "Good public transport availability in the locality",
        "Easy cab and auto availability",
        "Well-maintained roads with no nearby traffic jams"
      ],
      "vision": [
        "Secure gated living for families",
        "Green, landscaped community spaces",
        "Vibrant play zones for children",
        "Distinctive architectural entrance and art walls",
        "Comfortable budget-friendly homes"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Kanchan Leela Homes"
      },
      {
        "label": "Property Type",
        "value": "Residential Apartments"
      },
      {
        "label": "Location",
        "value": "Bada Bangarda, Super Corridor, Indore"
      },
      {
        "label": "Total Area",
        "value": "5.92 acres"
      },
      {
        "label": "Total Units",
        "value": "Around 214 units"
      },
      {
        "label": "Phases",
        "value": "1 Phase"
      },
      {
        "label": "Possession Status",
        "value": "Under Construction"
      },
      {
        "label": "Possession Date",
        "value": "August 2026"
      },
      {
        "label": "RERA Number",
        "value": "P-IND-24-4524"
      }
    ],
    "images": [
      "/propertyList/KANCHAN LEELA HOMES/img1.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img2.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img3.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img4.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img5.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img6.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img7.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img8.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img9.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img10.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img11.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img12.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img13.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img14.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img15.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img16.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img17.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img18.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img19.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img20.jpg",
      "/propertyList/KANCHAN LEELA HOMES/img21.jpg"
    ],
    "floorPlan": {
      "image": "/propertyList/KANCHAN LEELA HOMES/img9.jpg",
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.6376120762457!2d75.7958311192963!3d22.76352180262656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963011e943033ff%3A0x2ee42882b7ff094b!2sKanchan%20Leela%20Homes!5e1!3m2!1sen!2sin!4v1780422781132!5m2!1sen!2sin"
    },
    "developer": {
      "name": "Kanchan Leela Homes",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Kanchan Leela Homes details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "bhk": "Plots",
    "propertyType": "Plot",
    "area": "",
    "id": 221,
    "title": "Krishna Vatika",
    "slug": "krishna-vatika",
    "location": "Airport Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "description": "Krishna Vatika is a residential plotting project located near the Airport in Indore, Madhya Pradesh. The gated development offers spacious, well-priced plots within a posh, pollution-free environment, featuring a grand entrance gate, landscaped gardens and well-laid internal roads. It is positioned close to hospitals, temples and shopping malls for convenient daily living.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Gated plotting project with a grand entrance gate",
          "CCTV camera surveillance for security",
          "Adjacent to the main road for easy access",
          "Close to hospital for medical convenience",
          "Close to temple",
          "Close to shopping mall",
          "Pollution-free environment for healthy living",
          "Well-developed landscaped gardens and green spaces",
          "Wide internal roads with paved walkways",
          "Spacious plots available at a very decent cost"
        ]
      }
    ],
    "sections": {
      "overview": "Krishna Vatika is a gated residential plotting project near the Airport in Indore, offering spacious plots in a posh, pollution-free environment with strong connectivity to hospitals, temples and shopping malls.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/KRISHNA VATIKA/img1.jpg"
        },
        {
          "title": "Landscaped Garden",
          "img": "/propertyList/KRISHNA VATIKA/img2.jpg"
        },
        {
          "title": "Flower Garden",
          "img": "/propertyList/KRISHNA VATIKA/img3.jpg"
        },
        {
          "title": "Green Open Spaces",
          "img": "/propertyList/KRISHNA VATIKA/img4.jpg"
        },
        {
          "title": "Wide Internal Roads",
          "img": "/propertyList/KRISHNA VATIKA/img7.jpg"
        },
        {
          "title": "Developed Plots",
          "img": "/propertyList/KRISHNA VATIKA/img6.jpg"
        }
      ],
      "specifications": [
        "Gated community with grand entrance gate",
        "CCTV camera surveillance",
        "Adjacent to main road",
        "Wide internal concrete and paver-block roads",
        "Landscaped gardens and green areas",
        "Boundary wall around the project"
      ],
      "connectivity": [
        "Located near Airport, Indore",
        "Adjacent to the main road",
        "Close to hospital",
        "Close to temple",
        "Close to shopping mall"
      ],
      "vision": [
        "Pollution-free environment for a healthy lifestyle",
        "Posh and serene living surroundings",
        "Spacious plots at a decent cost",
        "Modern gated community infrastructure"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Krishna Vatika"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Configuration",
        "value": "Plots"
      },
      {
        "label": "Location",
        "value": "Airport Road, Indore, Madhya Pradesh"
      },
      {
        "label": "City",
        "value": "Indore"
      },
      {
        "label": "State",
        "value": "Madhya Pradesh"
      }
    ],
    "images": [
      "/propertyList/KRISHNA VATIKA/img1.jpg",
      "/propertyList/KRISHNA VATIKA/img2.jpg",
      "/propertyList/KRISHNA VATIKA/img3.jpg",
      "/propertyList/KRISHNA VATIKA/img4.jpg",
      "/propertyList/KRISHNA VATIKA/img5.jpg",
      "/propertyList/KRISHNA VATIKA/img6.jpg",
      "/propertyList/KRISHNA VATIKA/img7.jpg",
      "/propertyList/KRISHNA VATIKA/img8.png",
      "/propertyList/KRISHNA VATIKA/img9.jpg"
    ],
    "floorPlan": {
      "images": [
        "/propertyList/KRISHNA VATIKA/img8.png",
        "/propertyList/KRISHNA VATIKA/img9.jpg"
      ],
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink": ""
    },
    "developer": {
      "name": "",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Krishna Vatika details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 222,
    "title": "Krishnayan Corridor",
    "slug": "krishnayan-corridor",
    "location": "Super Corridor, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "",
    "description": "Krishnayan Corridor is an upcoming residential and mixed-use plotted development by Vibrant Building Inspiration on the Super Corridor, Indore. The TNCP-approved layout offers a wide range of residential, shop-cum-residential and multi-storey plots laid out in a well-planned grid. Currently in the Coming Soon pre-launch phase, it sits adjacent to major IT parks and Fintech City.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "TNCP-approved layout ensuring legal clarity and clear titles",
          "Prime Super Corridor, Indore location with excellent road access",
          "Mix of small, medium and large plot sizes catering to different buyers",
          "Proximity to major IT parks and Fintech City, ideal for professionals",
          "Adjacent to the Ex. ICG Golconda Township",
          "Shop-cum-residential plots along the main road for commercial use",
          "Plots for multi-storey use (~15,890 sq.ft.) along the 30.0 M wide road",
          "Connected by 150 ft Road, 100 ft Road and MR-5 (150 ft Road)",
          "Developer presence in surrounding projects like Krishnayan and Mahant",
          "Close proximity to Indore Airport and Indore Core City"
        ]
      }
    ],
    "sections": {
      "overview": "Krishnayan Corridor is a TNCP-approved residential and mixed-use plotted development by Vibrant Building Inspiration on the Super Corridor, Indore, currently in its Coming Soon pre-launch phase.",
      "amenities": [
        {
          "title": "TNCP Approved Layout Plan",
          "img": "/propertyList/KRISHNAYAN CORRIDOR/img1.jpg"
        },
        {
          "title": "Well-Planned Plotting Grid",
          "img": "/propertyList/KRISHNAYAN CORRIDOR/img1.jpg"
        },
        {
          "title": "Wide Internal Roads",
          "img": "/propertyList/KRISHNAYAN CORRIDOR/img1.jpg"
        },
        {
          "title": "Prime Super Corridor Location",
          "img": "/propertyList/KRISHNAYAN CORRIDOR/img1.jpg"
        }
      ],
      "specifications": [
        "TNCP Approved (Town & Country Planning) layout plan",
        "Plot sizes: 20' x 40', 20' x 45', 20' x 50', 20' x 54', 20' x 55'",
        "Plot sizes: 17' x 40', 17' x 45', 17' x 50'",
        "Plot sizes: 14' x 40', 14' x 45'",
        "Larger plots: 20' x 60', 120' x 40' (likely commercial / multi-use)",
        "Shops Cum Residential plots (20' x Var.) along the main road",
        "Plots for multi-storey use (~15,890 sq.ft.) along the 30.0 M wide road",
        "Internal roads 9.0 M wide throughout the layout",
        "Road connectivity: 150 ft Road, 100 ft Road, MR-5 (150 ft Road), internal 9.0 M and 30.0 M wide roads"
      ],
      "connectivity": [
        "Infosys Campus - 130 Acres (adjacent)",
        "Fintech City - 52 Acres (nearby)",
        "Mahant - 100 Acres (nearby)",
        "Indore Airport - in close proximity",
        "Indore Core City - well connected",
        "Neighbouring IT companies: Impetus, InfoBeans, ClearTrail, Yash Technologies",
        "Adjacent to Ex. ICG Golconda Township"
      ],
      "vision": [
        "A future-ready address on Indore's fastest-growing infrastructure zone",
        "Planned community living with legally clear, TNCP-approved plots",
        "Seamless connectivity to IT parks, Fintech City and the airport",
        "Flexible plot options for homes, shops and multi-storey use"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Krishnayan Corridor"
      },
      {
        "label": "Property Type",
        "value": "Plotting Project (Residential / Mixed-Use)"
      },
      {
        "label": "Location",
        "value": "Super Corridor, Indore, Madhya Pradesh"
      },
      {
        "label": "Developer",
        "value": "Vibrant Building Inspiration"
      },
      {
        "label": "Approval",
        "value": "TNCP Approved"
      },
      {
        "label": "Status",
        "value": "Coming Soon (Pre-launch)"
      },
      {
        "label": "Plot Sizes",
        "value": "14' to 120' wide plots; multi-storey plots ~15,890 sq.ft."
      },
      {
        "label": "Road Connectivity",
        "value": "150 ft Road, 100 ft Road, MR-5, internal 9.0 M & 30.0 M roads"
      }
    ],
    "images": [
      "/propertyList/KRISHNAYAN CORRIDOR/img1.jpg"
    ],
    "floorPlan": {
      "image": "/propertyList/KRISHNAYAN CORRIDOR/img1.jpg",
      "pdf": ""
    },
    "map": {
      "image": "/propertyList/KRISHNAYAN CORRIDOR/img1.jpg",
      "locationLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.7362903250223!2d75.82901796162417!3d22.760140931972487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963030ab2228a0d%3A0x4b24fb7103205a75!2sVibrant%20Krishnayan%20Corridor!5e1!3m2!1sen!2sin!4v1780422924153!5m2!1sen!2sin" 
    },
    "developer": {
      "name": "Vibrant Building Inspiration",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Krishnayan Corridor details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 223,
    "title": "Mahant Corridor",
    "slug": "mahant-corridor",
    "location": "Mahant, Super Corridor, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "Approx. 100 Acres",
    "description": "Mahant Corridor is a RERA-registered plotted residential township by Vibrant Building Inspiration, spread across approximately 100 acres on the Super Corridor, Indore. The project is actively under development with 50% of the work already complete, making it more advanced than many competitor projects. It caters to all buyer segments with EWS, LIG, and general category plots, directly connected to Indore's major IT campuses.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "RERA-registered plotted residential township (P-IND-20-2772) ensuring full legal transparency",
          "Spread across approximately 100 acres on the Super Corridor, Indore",
          "50% development already complete - lower risk for buyers",
          "Directly connected to Indore's major IT campuses (TCS & Infosys)",
          "Caters to all buyer segments - EWS, LIG, and general category plots",
          "Well-organized grid layout with internal 9.0 m wide roads throughout",
          "3 dedicated parks and evenly distributed green spaces within the colony",
          "Multiple home loan partners - PNB Housing, LIC HFL, Axis Bank and HDFC",
          "Part of Vibrant's larger Super Corridor ecosystem alongside Krishnayan project",
          "Access via 100 ft and 150 ft (MR-5) roads on the Super Corridor"
        ]
      }
    ],
    "sections": {
      "overview": "Mahant Corridor is a RERA-registered, 50% developed plotted residential township spread across approximately 100 acres on the Super Corridor, Indore, offering EWS, LIG and general category plots with strong IT-corridor connectivity.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/MAHANT CORRIDOR/img5.jpg"
        },
        {
          "title": "Kids Play Area",
          "img": "/propertyList/MAHANT CORRIDOR/img6.jpg"
        },
        {
          "title": "Solar Street Lighting",
          "img": "/propertyList/MAHANT CORRIDOR/img7.jpg"
        },
        {
          "title": "Landscaped Garden & Parks",
          "img": "/propertyList/MAHANT CORRIDOR/img10.jpg"
        },
        {
          "title": "Internal Paved Roads & Walkways",
          "img": "/propertyList/MAHANT CORRIDOR/img12.jpg"
        },
        {
          "title": "Central Green Avenue",
          "img": "/propertyList/MAHANT CORRIDOR/img13.jpg"
        },
        {
          "title": "Open Play Ground",
          "img": "/propertyList/MAHANT CORRIDOR/img14.jpg"
        },
        {
          "title": "Pergola Seating Lounge",
          "img": "/propertyList/MAHANT CORRIDOR/img16.jpg"
        }
      ],
      "specifications": [
        "Internal 9.0 m wide roads throughout the layout",
        "Road access via 100 ft Road and 150 ft (MR-5) Road on the Super Corridor",
        "General Plots: 6.10 x 12.20 m, 6.10 x 15.24 m, 6.10 x 13.72 m, 6.10 x 12.97 m (avg.)",
        "LIG Plots: 3.66 x 12.20 m (approx. 537 sq.ft.)",
        "EWS Plots: 3.05 x 12.20 m (approx. 400 sq.ft.) and 3.66 x 9.92 m (avg.)",
        "Large/Corner Plots: 8.96 x 17.44 m and 9.14 x 16.67 m (avg.) along the periphery",
        "Plot numbers range from 1 to 252+, spread across multiple rows and sectors",
        "3 dedicated parks: Park-1 (~1,456.64 sq.m.), Park-2 (~1,226.79 sq.m.), Park-3 (~1,191.70 sq.m.)",
        "RERA Registered: P-IND-20-2772 (MP RERA Approved)",
        "Home Loan Partners: PNB Housing Finance, LIC HFL, Axis Bank, HDFC Home Loans"
      ],
      "connectivity": [
        "Directly connected to TCS campus",
        "Infosys (130 Acres campus)",
        "MR-5 Road (150 ft Road)",
        "Fintech City - 52 Acres",
        "Krishnayan project (by the same developer)",
        "Indore Airport",
        "Indore Core City",
        "IT companies: Impetus, InfoBeans, ClearTrail, YASH Technologies"
      ],
      "vision": [
        "A future-ready plotted township on Indore's premier IT corridor",
        "Inclusive living with plots for every buyer segment",
        "Green, well-planned community with parks and open spaces",
        "Transparent, RERA-backed investment with easy financing",
        "Part of a larger thriving Super Corridor ecosystem"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Mahant Corridor"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Location",
        "value": "Mahant, Super Corridor, Indore"
      },
      {
        "label": "Developer",
        "value": "Vibrant Building Inspiration"
      },
      {
        "label": "Total Area",
        "value": "Approx. 100 Acres"
      },
      {
        "label": "RERA No.",
        "value": "P-IND-20-2772"
      },
      {
        "label": "Status",
        "value": "50% Development Complete"
      },
      {
        "label": "Plot Categories",
        "value": "EWS, LIG and General Category Plots"
      },
      {
        "label": "Internal Road Width",
        "value": "9.0 m"
      }
    ],
    "images": [
      "/propertyList/MAHANT CORRIDOR/img18.png",
      "/propertyList/MAHANT CORRIDOR/img1.jpg",
      "/propertyList/MAHANT CORRIDOR/img2.jpg",
      "/propertyList/MAHANT CORRIDOR/img3.jpg",
      "/propertyList/MAHANT CORRIDOR/img4.jpg",
      "/propertyList/MAHANT CORRIDOR/img5.jpg",
      "/propertyList/MAHANT CORRIDOR/img6.jpg",
      "/propertyList/MAHANT CORRIDOR/img7.jpg",
      "/propertyList/MAHANT CORRIDOR/img8.jpg",
      "/propertyList/MAHANT CORRIDOR/img9.jpg",
      "/propertyList/MAHANT CORRIDOR/img10.jpg",
      "/propertyList/MAHANT CORRIDOR/img11.jpg",
      "/propertyList/MAHANT CORRIDOR/img12.jpg",
      "/propertyList/MAHANT CORRIDOR/img13.jpg",
      "/propertyList/MAHANT CORRIDOR/img14.jpg",
      "/propertyList/MAHANT CORRIDOR/img15.jpg",
      "/propertyList/MAHANT CORRIDOR/img16.jpg",
      "/propertyList/MAHANT CORRIDOR/img17.jpg"
    ],
    "floorPlan": {
      "image": "/propertyList/MAHANT CORRIDOR/img11.jpg",
      "pdf": ""
    },
    "map": {
      "image": "/propertyList/MAHANT CORRIDOR/img11.jpg",
      "locationLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.3883157306896!2d75.7808093439026!3d22.772060967125867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396301bc2f3e44c9%3A0x353e0dddbaff026b!2sVibrant%20mahant!5e1!3m2!1sen!2sin!4v1780423033281!5m2!1sen!2sin",
      "name": "Vibrant Building Inspiration",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Mahant Corridor details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 224,
    "title": "MGR Princes Hilltop",
    "slug": "mgr-princes-hilltop",
    "location": "Sanwer, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "",
    "description": "MGR Princes Hilltop by Princes Buildtech and Infrastructure Developers is a ready-to-move plotted residential township located in Sanwer, Indore. Designed as a perfect combination of comfort and style, the hilltop development offers landscaped greens, scenic hill-cut roads and a range of lifestyle amenities. With families already moving in, it enjoys strong connectivity to key institutions, hospitals and commercial hubs across Indore.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Ready-to-move plotted housing society set on an elevated hilltop in Sanwer, Indore",
          "Grand themed entrance gate with landscaped surroundings",
          "Wide internal concrete roads with street lighting and tree-lined avenues",
          "Scenic hill-cut driveways offering panoramic city and valley views",
          "Swimming pool, gymnasium and well-appointed club house",
          "Multipurpose hall and multipurpose sports court for residents",
          "Dedicated overhead water supply system and rain water harvesting",
          "Vastu and Feng Shui compliant layout with landscaped central temple/garden zone",
          "Round-the-clock maintenance and property staff",
          "Strong connectivity to schools, hospitals, malls and business hubs of Indore"
        ]
      }
    ],
    "sections": {
      "overview": "MGR Princes Hilltop is a ready-to-move plotted residential township in Sanwer, Indore, offering a hilltop lifestyle with landscaped greens, modern amenities and excellent city connectivity.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/MRG Princess Hilltop/img6.jpg"
        },
        {
          "title": "Landscaped Temple Pavilion",
          "img": "/propertyList/MRG Princess Hilltop/img7.jpg"
        },
        {
          "title": "Multipurpose Sports Court",
          "img": "/propertyList/MRG Princess Hilltop/img12.png"
        },
        {
          "title": "Overhead Water Supply System",
          "img": "/propertyList/MRG Princess Hilltop/img4.jpg"
        },
        {
          "title": "Tree-Lined Internal Roads",
          "img": "/propertyList/MRG Princess Hilltop/img5.jpg"
        },
        {
          "title": "Hill-Cut Scenic Driveway",
          "img": "/propertyList/MRG Princess Hilltop/img18.png"
        },
        {
          "title": "Landscaped Green Lawns",
          "img": "/propertyList/MRG Princess Hilltop/img20.png"
        },
        {
          "title": "Hilltop City Views",
          "img": "/propertyList/MRG Princess Hilltop/img9.jpg"
        }
      ],
      "specifications": [
        "Plotted residential development on elevated hilltop terrain",
        "Wide internal concrete roads with curbing and street lighting",
        "Hill-cut driveways with retaining stone walls",
        "Landscaped central temple and garden zone",
        "Vastu compliant and Feng Shui compliant planning",
        "Car parking provision within the project",
        "Rain water harvesting system",
        "Dedicated overhead water storage and supply"
      ],
      "connectivity": [
        "Modern International - 5.9 Km",
        "Mohak Hitech Hospital - 6.1 Km",
        "Prestige University - 3.5 Km",
        "Aqua Imagicaa - 8.1 Km",
        "Palia - 10.6 Km",
        "Radisson Blu - 14 Km",
        "Antares Business - 14.8 Km",
        "C21 Mall - 14.5 Km",
        "Holkar Stadium - 16 Km",
        "Devi Ahilyabai - 17.0 Km",
        "Golf Greens - 22 Km"
      ],
      "vision": [
        "An elevated hilltop community blending nature with modern living",
        "Lush green landscapes and serene panoramic views",
        "Premium lifestyle amenities for an active community",
        "A well-connected and future-ready Indore neighbourhood"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "MGR Princes Hilltop"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Location",
        "value": "Sanwer, Indore, Madhya Pradesh"
      },
      {
        "label": "Developer",
        "value": "Princes Buildtech and Infrastructure Developers"
      },
      {
        "label": "Status",
        "value": "Ready to Move"
      },
      {
        "label": "Configuration",
        "value": "Residential Plots"
      }
    ],
    "images": [
      "/propertyList/MRG Princess Hilltop/img20.png",
      "/propertyList/MRG Princess Hilltop/img1.jpg",
      "/propertyList/MRG Princess Hilltop/img2.jpg",
      "/propertyList/MRG Princess Hilltop/img3.jpg",
      "/propertyList/MRG Princess Hilltop/img4.jpg",
      "/propertyList/MRG Princess Hilltop/img5.jpg",
      "/propertyList/MRG Princess Hilltop/img6.jpg",
      "/propertyList/MRG Princess Hilltop/img7.jpg",
      "/propertyList/MRG Princess Hilltop/img8.jpg",
      "/propertyList/MRG Princess Hilltop/img9.jpg",
      "/propertyList/MRG Princess Hilltop/img10.jpg",
      "/propertyList/MRG Princess Hilltop/img11.png",
      "/propertyList/MRG Princess Hilltop/img12.png",
      "/propertyList/MRG Princess Hilltop/img13.png",
      "/propertyList/MRG Princess Hilltop/img14.png",
      "/propertyList/MRG Princess Hilltop/img15.png",
      "/propertyList/MRG Princess Hilltop/img16.png",
      "/propertyList/MRG Princess Hilltop/img17.png",
      "/propertyList/MRG Princess Hilltop/img18.png",
      "/propertyList/MRG Princess Hilltop/img19.png",
      
    ],
    "floorPlan": {
      "image": "",
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.1435296648865!2d75.85022097563484!3d22.848815679295967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396305d3e1761dd1%3A0x99d97ab1b86be94b!2sMGR%20Princes%20Hilltop!5e1!3m2!1sen!2sin!4v1780423221260!5m2!1sen!2sin" 
    },
    "developer": {
      "name": "Princes Buildtech and Infrastructure Developers",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "MGR Princes Hilltop details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 225,
    "title": "Park Majesty",
    "slug": "park-majesty",
    "location": "Pulak City, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Residential Apartments",
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
    "bhk": "Plots",
    "id": 226,
    "title": "Ras Green",
    "slug": "ras-green",
    "location": "MR 11 Road, AB Bypass Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "area": "",
    "description": "Ras Green is a premium residential plotting project located on MR 11 Road, in front of Choithram School, near AB Bypass Road, Indore. The project offers a range of green, well-planned residential plots from 800 sq. ft. to over 2125 sq. ft., set amid landscaped gardens, wide internal roads and a grand gated entrance. Its branding emphasises an eco-friendly, green living environment with flexible plot sizes to suit diverse buyer needs.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Premium residential plots located on MR 11 Road, in front of Choithram School",
          "Excellent connectivity via AB Bypass Road, Indore",
          "Wide range of plot sizes from 800 sq. ft. to 2125 sq. ft.",
          "Plot size options starting from 800 sq. ft. and 1000 sq. ft.",
          "Grand gated entrance with RAS GREEN signature pillars",
          "Internal roads of 30.00 mt., 9.00 mt. and 6.00 mt. width",
          "Multiple landscaped gardens and green open spaces within the layout",
          "Flexible plot sizes catering to diverse residential development needs",
          "Green, eco-friendly living environment as the project's core theme",
          "Well-defined, ready infrastructure with paver pathways and street lighting"
        ]
      }
    ],
    "sections": {
      "overview": "Ras Green is a premium gated residential plotting project on MR 11 Road near AB Bypass Road, Indore, offering green, well-planned plots ranging from 800 to 2125 sq. ft.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/RAS GREEN/img6.jpg"
        },
        {
          "title": "Landscaped Garden",
          "img": "/propertyList/RAS GREEN/img4.png"
        },
        {
          "title": "Wide Internal Roads",
          "img": "/propertyList/RAS GREEN/img5.png"
        },
        {
          "title": "Paver Walkways",
          "img": "/propertyList/RAS GREEN/img3.png"
        },
        {
          "title": "Tree-Lined Pathways",
          "img": "/propertyList/RAS GREEN/img1.png"
        }
      ],
      "specifications": [
        "Plot size options of 800 sq. ft. and 1000 sq. ft.",
        "Largest plot listed at 2125 sq. ft. (Plot 156)",
        "Plot 179 measuring 1954 sq. ft.",
        "Plots 167 and 168 measuring 1008 sq. ft. each",
        "Plot 180 measuring 1483 sq. ft.",
        "Plot 203 measuring 1379 sq. ft.",
        "Plots 191 and 192 measuring 800 sq. ft. each",
        "Main road of 30.00 mt. width",
        "Internal roads of 9.00 mt. width",
        "Circulation road of 6.00 mt. width",
        "Internal pathways of 3.00 mt. width"
      ],
      "connectivity": [
        "Located on MR 11 Road",
        "In front of Choithram School",
        "Easy access through AB Bypass Road, Indore"
      ],
      "vision": [
        "Green, eco-friendly living environment",
        "Well-planned premium residential community",
        "Flexible plot sizes for diverse needs",
        "Landscaped gardens and open green spaces",
        "Modern gated-community infrastructure"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Ras Green"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Location",
        "value": "MR 11 Road, in front of Choithram School, AB Bypass Road, Indore, MP, India"
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
        "label": "Plot Size Options",
        "value": "800 sq. ft. and 1000 sq. ft."
      },
      {
        "label": "Plot Size Range",
        "value": "800 sq. ft. to 2125 sq. ft."
      }
    ],
    "images": [
      "/propertyList/RAS GREEN/img1.png",
      "/propertyList/RAS GREEN/img2.jpg",
      "/propertyList/RAS GREEN/img3.png",
      "/propertyList/RAS GREEN/img4.png",
      "/propertyList/RAS GREEN/img5.png",
      "/propertyList/RAS GREEN/img6.jpg"
    ],
    "floorPlan": {
      "image": "/propertyList/RAS GREEN/img2.jpg",
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink": ""
    },
    "developer": {
      "name": "",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Ras Green details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 227,
    "title": "Scape IT Park",
    "slug": "scape-it-park",
    "location": "Super Corridor, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Commercial",
    "bhk": "Office Units",
    "area": "850 to 3700 sq.ft. (built-up) office units",
    "price": [{ "type": "Starting Price", "label": "Starting Price", "value": "₹ 6800 /sq.ft. (built-up)" }],
    "description": "Scape IT Park is a ready-to-move commercial IT park located on the Super Corridor in Indore, positioned as the future of the city's corporate hub. The building features a bold, modern glass facade with a distinctive angled architectural design and offers a wide variety of office units from compact startup cabins to large corporate floors. Being RERA-registered with instant possession, it combines a premium location with modern amenities and legal transparency for buyers.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Ready-to-move commercial IT park with instant possession - no waiting period",
          "Prime location on the Super Corridor, Indore's rapidly developing corporate and IT zone",
          "Bold, modern glass facade with a distinctive angled architectural design",
          "Wide range of office unit sizes from 850 sq.ft. to 3,700 sq.ft. (built-up)",
          "Multiple office configurations across ground and upper floors to suit every business need",
          "Small offices ideal for startups, mid-size for growing businesses, larger for established companies",
          "RERA-registered project (RERA No.: A-IND-20-721) ensuring legal transparency",
          "Tagline: Where Growth Meets Address - premium location with modern amenities"
        ]
      }
    ],
    "sections": {
      "overview": "A ready-to-move, RERA-registered commercial IT park on Indore's Super Corridor offering a variety of modern office units in a striking glass-facade building.",
      "amenities": [
        {
          "title": "Modern Glass Facade Corporate Building",
          "img": "/propertyList/SCAPE IT PARK/img11.jpg"
        },
        {
          "title": "Angled Architectural Design Exterior",
          "img": "/propertyList/SCAPE IT PARK/img5.jpg"
        },
        {
          "title": "Spacious Office Floor Layout",
          "img": "/propertyList/SCAPE IT PARK/img6.jpg"
        },
        {
          "title": "Central Lift & Staircase Lobby",
          "img": "/propertyList/SCAPE IT PARK/img7.jpg"
        },
        {
          "title": "Ground Floor Lobby & Office Plan",
          "img": "/propertyList/SCAPE IT PARK/img1.jpg"
        },
        {
          "title": "Flexible Office Cabin Configurations",
          "img": "/propertyList/SCAPE IT PARK/img8.jpg"
        }
      ],
      "specifications": [
        "Ground Floor (G1-G6): 6 office units ranging from ~1,110 sq.ft. to ~2,650 sq.ft. built-up; total built-up ~11,045 sq.ft., super built-up ~15,463 sq.ft.",
        "1st Floor (101-114): 14 office units ranging from ~604 sq.ft. to ~1,193 sq.ft.; total built-up ~9,731 sq.ft., super built-up ~13,623 sq.ft.",
        "2nd Floor (201-214): 14 office units with similar layout to the 1st floor; slightly larger dimensions",
        "3rd Floor (301-314): 14 office units ranging from ~639 sq.ft. to ~1,249 sq.ft.; total built-up ~10,577 sq.ft., super built-up ~14,808 sq.ft.",
        "Upper Floors (e.g., 8th floor, 801-814): 14 office units ranging from ~621 sq.ft. to ~1,221 sq.ft.; total built-up ~10,143 sq.ft., super built-up ~14,200 sq.ft.",
        "Super built-up area calculated as Built-Up Area x 1.4 across all floors",
        "Small offices: ~600-640 sq.ft. built-up, ideal for startups or small teams",
        "Mid-size offices: ~730-850 sq.ft., suited for growing businesses",
        "Larger offices: ~1,100-2,650 sq.ft., for established companies needing more space"
      ],
      "connectivity": [
        "Located on the Super Corridor, Indore - a rapidly developing corporate and IT zone",
        "Situated in one of Indore's most sought-after commercial corridors",
        "Developer also operates in Ujjain, Dewas, and Bhopal"
      ],
      "vision": [
        "The future of Indore's corporate hub",
        "Where Growth Meets Address",
        "Premium location with modern amenities",
        "Instant possession for immediate business setup",
        "A landmark glass-facade address for ambitious businesses"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Scape IT Park"
      },
      {
        "label": "Property Type",
        "value": "Commercial / IT Park"
      },
      {
        "label": "Location",
        "value": "Super Corridor, Indore, Madhya Pradesh"
      },
      {
        "label": "Developer",
        "value": "Realmaker"
      },
      {
        "label": "RERA No.",
        "value": "A-IND-20-721"
      },
      {
        "label": "Possession",
        "value": "Ready to Move (Instant Possession)"
      },
      {
        "label": "Office Unit Range",
        "value": "~600 sq.ft. to ~2,650 sq.ft. (built-up)"
      },
      {
        "label": "Ground Floor Total Super Built-up",
        "value": "~15,463 sq.ft."
      },
      {
        "label": "Tagline",
        "value": "Where Growth Meets Address!"
      }
    ],
    "images": [
       "/propertyList/SCAPE IT PARK/img11.jpg",
      "/propertyList/SCAPE IT PARK/img5.jpg",
      "/propertyList/SCAPE IT PARK/img2.jpg",
      "/propertyList/SCAPE IT PARK/img3.jpg",
      "/propertyList/SCAPE IT PARK/img4.jpg",
      "/propertyList/SCAPE IT PARK/img10.jpg",
     
    ],
    "floorPlan": {
      "images": [
        "/propertyList/SCAPE IT PARK/img1.jpg" , 
        "/propertyList/SCAPE IT PARK/img6.jpg",
      "/propertyList/SCAPE IT PARK/img7.jpg",
      "/propertyList/SCAPE IT PARK/img8.jpg",
      "/propertyList/SCAPE IT PARK/img9.jpg",
      ],
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63771.881196779184!2d75.74880075820313!3d22.759925600000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303fe0b74af99%3A0x4d2f76a01e787f12!2sScape%20IT%20Park!5e1!3m2!1sen!2sin!4v1780423638465!5m2!1sen!2sin"
    },
    "developer": {
      "name": "Realmaker",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Scape IT Park details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 228,
    "title": "Shanti Marvella",
    "slug": "shanti-marvella",
    "location": "Rau-Mhow Main Road, Opposite Trinity Mall, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Residential Apartments",
    "bhk": "1/2/3 BHK",
    "area": "A BLOCK COMMERCIAL { B BLOCK RESIDANCIAL 2BHK 1050, 3BHK 1400) C BLOCK 1 BHK & 2 BHK",
    "price": [{ "type": "Starting Price", "label": "Starting Price", value: "₹ 3750 /sq.ft." } , {type: "Garden Facing", label: "", value: "₹ 3850 /sq.ft." }],
    "description": "Shanti Marvella is a T&CP and RERA-approved mixed-use development on Rau-Mhow Main Road, opposite Trinity Mall in Indore, offering 1, 2 and 3 BHK residential apartments along with ground-floor showrooms and office spaces. The project pairs modern interiors such as modular kitchens, branded lifts and POP-finished halls with family-friendly amenities including a kids play area, baby pool, open gym and walking track. Round-the-clock security, CCTV surveillance and intercom connectivity ensure a safe and convenient living environment.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "T&CP and RERA approved project (RERA No. P-OTH-25-5440)",
          "Prime location on Rau-Mhow Main Road, opposite Trinity Mall, Indore",
          "Mixed-use development with residential apartments, showrooms and offices",
          "1, 2 and 3 BHK apartments ranging from 637 to 1427 sq.ft.",
          "24x7 security guards, CCTV cameras and intercom facility",
          "Branded lifts with dedicated parking and lobby",
          "Modular kitchen, wooden floor tiles and POP finishes in hall and lobby",
          "Kids play area, baby pool, open gym and walking track",
          "Electronic game zone and on-premises temple",
          "Close to commercial landmarks such as Vikram Mall and D-Mart"
        ]
      }
    ],
    "sections": {
      "overview": "Shanti Marvella is a RERA-approved mixed-use project on Rau-Mhow Main Road in Indore offering 1/2/3 BHK apartments with modern amenities, alongside ground-floor showrooms and office spaces.",
      "amenities": [
        {
          "title": "Branded Lift",
          "img": "/propertyList/SHANTI MARVELLA/img5.jpg"
        },
        {
          "title": "Kids Play Area",
          "img": "/propertyList/SHANTI MARVELLA/img26.jpg"
        },
        {
          "title": "Baby Pool",
          "img": "/propertyList/SHANTI MARVELLA/img32.jpg"
        },
        {
          "title": "Open Gym",
          "img": "/propertyList/SHANTI MARVELLA/img36.jpg"
        },
        {
          "title": "Walking Track",
          "img": "/propertyList/SHANTI MARVELLA/img39.jpg"
        },
        {
          "title": "24x7 Security Guard",
          "img": "/propertyList/SHANTI MARVELLA/img21.jpg"
        },
        {
          "title": "CCTV Cameras",
          "img": "/propertyList/SHANTI MARVELLA/img34.jpg"
        },
        {
          "title": "Temple",
          "img": "/propertyList/SHANTI MARVELLA/img24.jpg"
        }
      ],
      "specifications": [
        "1 BHK, 2 BHK and 3 BHK residential apartments",
        "Residential unit sizes ranging from 637 to 1427 sq.ft.",
        "Ground floor + mezzanine showrooms (840 to 1123 sq.ft.) in Block-A",
        "Second floor office spaces (370 to 530 sq.ft.) in Block-A",
        "Modular kitchen installations",
        "Wooden floor tiles",
        "POP (Plaster of Paris) finishes in hall, parking and lobby",
        "Branded lifts",
        "Dedicated parking space with lobby",
        "Intercom facility for in-property communication",
        "Temple space on premises",
        "5 ft wide lobbies and corridors"
      ],
      "connectivity": [
        "Located on Rau-Mhow Main Road, opposite Trinity Mall",
        "Close to Vikram Mall",
        "Close to D-Mart"
      ],
      "vision": [
        "Comprehensive 24x7 security and surveillance",
        "Modern amenities and quality construction standards",
        "Family-friendly environment for all age groups",
        "Diverse recreational and lifestyle facilities",
        "Convenient location near major commercial landmarks"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Shanti Marvella"
      },
      {
        "label": "Property Type",
        "value": "Residential Apartments (Mixed-Use)"
      },
      {
        "label": "Configuration",
        "value": "1/2/3 BHK"
      },
      {
        "label": "Unit Sizes",
        "value": "637 - 1427 sq.ft."
      },
      {
        "label": "Location",
        "value": "Rau-Mhow Main Road, Opposite Trinity Mall, Indore"
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
        "label": "RERA No.",
        "value": "P-OTH-25-5440"
      },
      {
        "label": "Approvals",
        "value": "T&CP Approved, RERA Approved"
      },
      {
        "label": "Blocks",
        "value": "Block-A (Showroom/Office), Block-B, Block-C (Residential)"
      }
    ],
    "images": [
      "/propertyList/SHANTI MARVELLA/img40.png",
      "/propertyList/SHANTI MARVELLA/img1.jpg",
      "/propertyList/SHANTI MARVELLA/img2.jpg",
      "/propertyList/SHANTI MARVELLA/img3.jpg",
      "/propertyList/SHANTI MARVELLA/img4.jpg",
      "/propertyList/SHANTI MARVELLA/img5.jpg",
      "/propertyList/SHANTI MARVELLA/img6.jpg",
      "/propertyList/SHANTI MARVELLA/img7.jpg",
      "/propertyList/SHANTI MARVELLA/img8.jpg",
      "/propertyList/SHANTI MARVELLA/img9.jpg",
      "/propertyList/SHANTI MARVELLA/img10.jpg",
      "/propertyList/SHANTI MARVELLA/img11.jpg",
      "/propertyList/SHANTI MARVELLA/img12.jpg",
      "/propertyList/SHANTI MARVELLA/img13.jpg",
      "/propertyList/SHANTI MARVELLA/img14.jpg",
      "/propertyList/SHANTI MARVELLA/img15.jpg",
      "/propertyList/SHANTI MARVELLA/img16.jpg",
      "/propertyList/SHANTI MARVELLA/img17.jpg",
     
      "/propertyList/SHANTI MARVELLA/img19.png",
      "/propertyList/SHANTI MARVELLA/img20.jpg",
      "/propertyList/SHANTI MARVELLA/img21.jpg",
      "/propertyList/SHANTI MARVELLA/img22.jpg",
      "/propertyList/SHANTI MARVELLA/img23.jpg",
      "/propertyList/SHANTI MARVELLA/img24.jpg",
      "/propertyList/SHANTI MARVELLA/img25.jpg",
      "/propertyList/SHANTI MARVELLA/img26.jpg",
      "/propertyList/SHANTI MARVELLA/img27.jpg",
      "/propertyList/SHANTI MARVELLA/img28.jpg",
      "/propertyList/SHANTI MARVELLA/img29.jpg",
      "/propertyList/SHANTI MARVELLA/img30.jpg",
      "/propertyList/SHANTI MARVELLA/img31.jpg",
      "/propertyList/SHANTI MARVELLA/img32.jpg",
      "/propertyList/SHANTI MARVELLA/img33.jpg",
      "/propertyList/SHANTI MARVELLA/img34.jpg",
     
      "/propertyList/SHANTI MARVELLA/img36.jpg",
      "/propertyList/SHANTI MARVELLA/img37.jpg",
      "/propertyList/SHANTI MARVELLA/img38.jpg",
      "/propertyList/SHANTI MARVELLA/img39.jpg"
    ],
    "floorPlan": {
      "images":[ "/propertyList/SHANTI MARVELLA/img18.jpg", "/propertyList/SHANTI MARVELLA/img35.jpg", "/propertyList/SHANTI MARVELLA/img12.jpg", ],
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3990.2616335328185!2d75.79244643956434!3d22.604581187426124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f97702942a5b%3A0xccc3554bd452ebf5!2sShanti%20Marvella!5e1!3m2!1sen!2sin!4v1780423715450!5m2!1sen!2sin"
    },
    "developer": {
      "name": "",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Shanti Marvella details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 229,
    "title": "Shree Mangalam",
    "slug": "shree-mangalam",
    "location": "Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "1000 Sq.ft.",
    "description": "Shree Mangalam is a ready-to-move residential plotting project offering well-laid-out residential land and plots within a planned, gated township. Set amid landscaped gardens, internal roads and green open spaces, the project features a grand entrance gate and a host of lifestyle amenities. Plots start from 1000 Sq.ft. with pricing from 20 Lac.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Ready to Move residential land / plots",
          "Plot size starting from 1000 Sq.ft.",
          "Pricing starting from 20 Lac",
          "Planned, gated township with grand entrance gate",
          "Landscaped gardens and dedicated park areas",
          "Earthquake resistant structure and Vastu-compliant planning",
          "24x7 CCTV camera surveillance and security",
          "Power backup and dedicated water storage",
          "Kids play area and reserved parking",
          "Sewage treatment facility within the project"
        ]
      }
    ],
    "sections": {
      "overview": "A ready-to-move, gated residential plotting project in Indore offering planned plots from 1000 Sq.ft. amid landscaped gardens and modern lifestyle amenities.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/SHREE MANGALAM/img2.jpg"
        },
        {
          "title": "Landscaped Garden",
          "img": "/propertyList/SHREE MANGALAM/img5.png"
        },
        {
          "title": "Planned Plotted Layout",
          "img": "/propertyList/SHREE MANGALAM/img1.png"
        },
        {
          "title": "Internal Roads & Open Spaces",
          "img": "/propertyList/SHREE MANGALAM/img4.png"
        },
        {
          "title": "Site Master Plan",
          "img": "/propertyList/SHREE MANGALAM/img3.jpg"
        }
      ],
      "specifications": [
        "Property Type: Residential Land / Plots",
        "Area of Residential Land / Plots: 1000 Sq.ft.",
        "Pricing: 20 Lac",
        "Possession Status: Ready to Move",
        "Earthquake Resistant Structure",
        "Vastu compliant planning"
      ],
      "connectivity": [],
      "vision": [
        "Live amid landscaped gardens and green open spaces",
        "Secure, gated community living with round-the-clock surveillance",
        "Vastu-compliant, earthquake-resistant planned plots",
        "Modern amenities for comfortable family living"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Shree Mangalam"
      },
      {
        "label": "Property Type",
        "value": "Residential Land / Plots"
      },
      {
        "label": "Plot Area",
        "value": "1000 Sq.ft."
      },
      {
        "label": "Pricing",
        "value": "20 Lac"
      },
      {
        "label": "Possession Status",
        "value": "Ready to Move"
      },
      {
        "label": "Location",
        "value": "Indore, Madhya Pradesh"
      }
    ],
    "images": [
      "/propertyList/SHREE MANGALAM/img1.png",
      "/propertyList/SHREE MANGALAM/img2.jpg",
      "/propertyList/SHREE MANGALAM/img3.jpg",
      "/propertyList/SHREE MANGALAM/img4.png",
      "/propertyList/SHREE MANGALAM/img5.png"
    ],
    "floorPlan": {
      "image": "/propertyList/SHREE MANGALAM/img3.jpg",
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15935.853323712234!2d75.80082!3d22.820813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630181de3c1d35%3A0xfee99d14ec4a12fc!2sShree%20Manglam!5e1!3m2!1sen!2sus!4v1780423888956!5m2!1sen!2sus" 
    },
    "developer": {
      "name": "",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Shree Mangalam details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 230,
    "title": "Siddhi Olympia",
    "slug": "siddhi-olympia",
    "location": "Gram Limbodagari, Palakhedi Road, Super Corridor, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots / 3 BHK Row Villas",
    "area": "2.77 Hectares",
    "price":[{type:"3 BHK" , value:"₹ 68 Lakh" , label:"Lpa"}, {type:"4 BHK", value:"₹ 72 Lakh" , label:"Lpa"}],
    "description": "Siddhi Olympia is an integrated plotted development and luxury 3BHK row villa township spread across 2.77 hectares on the Super Corridor in Indore. Located just 900 meters from the 8-lane Super Corridor Main Road, it is the first township on the corridor to offer IGBC Pre-Certified Homes, with over 48% open space, Vastu-friendly East-West facing plots and world-class amenities. The project offers a wide variety of plot sizes alongside premium row villas with high-quality specifications.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Integrated Plotted Development and Luxury Row Villas (3BHK) spread over 2.77 hectares",
          "Only 900 meters from the 8-lane Super Corridor Main Road",
          "About 5 minutes from TCS and Infosys, within 15 minutes of Yash Technologies",
          "Around 15 minutes from Indore Airport with easy metro and flyover access",
          "First township on the Super Corridor to feature IGBC Pre-Certified Homes",
          "Over 48% of the campus dedicated to open space",
          "30-meter wide master plan roads with 12 and 9 meter internal roads",
          "Vastu-friendly East-West facing plots with scientific planning",
          "Underground electricity and water lines plus solar street lighting",
          "Exclusive Olympia Smart APP for residents"
        ]
      }
    ],
    "sections": {
      "overview": "Siddhi Olympia is an IGBC pre-certified integrated plotted township and luxury 3BHK row villa development on Indore's Super Corridor, blending green living, modern amenities and excellent connectivity.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/SIDDHI OLYMPIA/img8.jpg"
        },
        {
          "title": "Tree-Lined Entrance Avenue",
          "img": "/propertyList/SIDDHI OLYMPIA/img1.jpg"
        },
        {
          "title": "Lawn Tennis Court & Sports Area",
          "img": "/propertyList/SIDDHI OLYMPIA/img3.jpg"
        },
        {
          "title": "Luxury Row Villas",
          "img": "/propertyList/SIDDHI OLYMPIA/img4.jpg"
        },
        {
          "title": "Premium Villa Architecture",
          "img": "/propertyList/SIDDHI OLYMPIA/img7.jpg"
        },
        {
          "title": "Classical Villa Facade",
          "img": "/propertyList/SIDDHI OLYMPIA/img10.png"
        }
      ],
      "specifications": [
        "Total Land Area: 2.77 Hectares",
        "RERA Registration Number: P-IND-21-2983",
        "Project Type: Integrated Plotted Development & Luxury Row Villas (3BHK)",
        "Compact Plots: 420 sq. ft. (12'x35'), 450 sq. ft. (15'x30')",
        "Mid-Range Plots: 525 sq. ft., 600 sq. ft., 675 sq. ft. (15'x45'), 700 sq. ft. (20'x35')",
        "Large Plots: 800 sq. ft. (20'x40'), 850 sq. ft. (17'x50'), 1000 sq. ft. (25'x40')",
        "Premium Plots: 1200 sq. ft. (30'x60'), 1800 sq. ft. and other custom sizes",
        "Layout offers General Plotted Areas, EWS plots, LIG plots and commercial-cum-residential shops",
        "30-meter wide master plan roads; internal roads of 12 and 9 meters",
        "Vastu-friendly East-West facing plots",
        "Row Villas with RCC foundations, teak wood frame doors, UPVC white windows with mosquito nets and antique brass fittings",
        "Completely underground electricity and water lines with solar street lighting"
      ],
      "connectivity": [
        "Primary Location: Indore - Ujjain Road",
        "Only 900 meters from the 8-lane Super Corridor Main Road",
        "About 5 minutes from TCS & Infosys; within 15 minutes of Yash Technologies",
        "Around 15 minutes from Indore Airport",
        "Nearby Education Hubs: Symbiosis University, Narsee-Monjee University, Oriental University, LNCT College, Shri Vaishnav University and Shishukunj International School",
        "Healthcare & IT: Close to Aurobindo Hospital, proposed Medical Hub and the TCS/Infosys IT Hub",
        "Major Transit Points: Airport, Super Corridor, MR-10 Road, ISBT Bus Stand and proposed Railway Stations (Paliya)",
        "Easy access to nearby metro, 8-lane flyover bridge and proposed Interstate Bus Terminal (ISBT)"
      ],
      "vision": [
        "Eco-friendly IGBC pre-certified green township",
        "Lush tropical landscaping with mature trees retained",
        "Smart living through the Olympia Smart APP",
        "Secured campus with over 48% open space",
        "Sustainable systems with rainwater harvesting and STP"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Siddhi Olympia"
      },
      {
        "label": "Developer",
        "value": "Limbodagari Buildcon Pvt. Ltd. (Promoted by Realmaker)"
      },
      {
        "label": "Location",
        "value": "Gram Limbodagari, Palakhedi Road, Super Corridor, Indore (M.P.)"
      },
      {
        "label": "Property Type",
        "value": "Integrated Plotted Development & Luxury Row Villas (3BHK)"
      },
      {
        "label": "Total Land Area",
        "value": "2.77 Hectares"
      },
      {
        "label": "RERA Registration Number",
        "value": "P-IND-21-2983"
      },
      {
        "label": "Open Space",
        "value": "Over 48% of the campus"
      },
      {
        "label": "Master Plan Roads",
        "value": "30 Meter Wide"
      }
    ],
    "images": [
      "/propertyList/SIDDHI OLYMPIA/img4.jpg",
      "/propertyList/SIDDHI OLYMPIA/img1.jpg",
      "/propertyList/SIDDHI OLYMPIA/img2.jpg",
      "/propertyList/SIDDHI OLYMPIA/img3.jpg",
      
      "/propertyList/SIDDHI OLYMPIA/img5.jpg",
      "/propertyList/SIDDHI OLYMPIA/img6.jpg",
      "/propertyList/SIDDHI OLYMPIA/img7.jpg",
      "/propertyList/SIDDHI OLYMPIA/img8.jpg",
      "/propertyList/SIDDHI OLYMPIA/img9.jpg",
      "/propertyList/SIDDHI OLYMPIA/img10.png"
    ],
    "floorPlan": {
      "image": "/propertyList/SIDDHI OLYMPIA/img9.jpg",
      "pdf": ""
    },
    "map": {
      "image": "/propertyList/SIDDHI OLYMPIA/img6.jpg",
      "locationLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.9343133060233!2d75.81833602485347!3d22.78760416009248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303b1bd74b195%3A0x7bda7d4b5b0d9ed!2sSiddhi%20Olympia!5e1!3m2!1sen!2sus!4v1780423984497!5m2!1sen!2sus"
    },
    "developer": {
      "name": "Limbodagari Buildcon Pvt. Ltd. (Promoted by Realmaker)",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Siddhi Olympia details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
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
    "id": 234,
    "title": "Vardhman Residency",
    "slug": "vardhman-residency",
    "location": "Asrawad Khurd Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "",
    "description": "Vardhman Residency is a residential plotting project presented by Roots & Roofs in association with the IRIS Group, located in the Indore region along the 100 Ft Asrawad Khurd Road. Well-connected to the Mumbai-Agra National Highway, the project offers a range of plot sizes served by internal 30-foot roads for easy navigation. With the tagline \"Making Your Dream Real\", it is designed to help buyers turn their dream of owning a home into reality.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Residential plotting project by Roots & Roofs in association with the IRIS Group",
          "Well-connected to the Mumbai-Agra National Highway",
          "Situated along the 100 Ft Asrawad Khurd Road",
          "Internal 30-foot roads for easy navigation within the residency",
          "Multiple plot sizes ranging from 420 Sq. Ft. to 1000 Sq. Ft.",
          "Located in the Indore region (Pin code 452010)",
          "Close to Tejaji Nagar and Jai Gurudev Ashram Square",
          "Near Patel College of Science & Technology",
          "Tagline: Making Your Dream Real"
        ]
      }
    ],
    "sections": {
      "overview": "Vardhman Residency is a residential plotting project by Roots & Roofs in association with the IRIS Group, located along the 100 Ft Asrawad Khurd Road in the Indore region.",
      "amenities": [],
      "specifications": [
        "Internal 30-foot roads for easy navigation within the residency",
        "Plot size 12 x 35 (420 Sq. Ft.)",
        "Plot size 14 x 35 (490 Sq. Ft.)",
        "Plot size 15 x 40 (600 Sq. Ft.)",
        "Plot size 20 x 40 (800 Sq. Ft.)",
        "Plot size 20 x 50 (1000 Sq. Ft.)"
      ],
      "connectivity": [
        "Well-connected to the Mumbai-Agra National Highway",
        "Situated along the 100 Ft Asrawad Khurd Road",
        "Tejaji Nagar & Jai Gurudev Ashram Square",
        "Patel College of Science & Technology",
        "Shakti Mandir & local Water Tank",
        "Ashokraj Resort and Farms & Royal Imperia",
        "Nearby Petrol Pump in Mirjapur"
      ],
      "vision": [
        "Making your dream of home ownership real",
        "Well-planned residential community",
        "Variety of plot sizes to suit different needs",
        "Strong highway and road connectivity",
        "Serene location in the growing Indore region"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Vardhman Residency"
      },
      {
        "label": "Property Type",
        "value": "Residential Plots"
      },
      {
        "label": "Developer",
        "value": "Roots & Roofs (in association with IRIS Group)"
      },
      {
        "label": "Location",
        "value": "Asrawad Khurd Road, Indore, Madhya Pradesh"
      },
      {
        "label": "Pin Code",
        "value": "452010"
      },
      {
        "label": "Tagline",
        "value": "Making Your Dream Real"
      },
      {
        "label": "Road Network",
        "value": "Internal 30-foot roads"
      },
      {
        "label": "Plot Sizes",
        "value": "420 to 1000 Sq. Ft."
      }
    ],
    "images": [],
    "floorPlan": {
      "image": "",
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink": ""
    },
    "developer": {
      "name": "Roots & Roofs",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Vardhman Residency details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "bhk": "Plots",
    "propertyType": "Plot",
    "id": 235,
    "title": "Vimalshree Hills View",
    "slug": "vimalshree-hills-view",
    "location": "Nayta Mundla, Bypass, New RTO Road, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "area": "850 - 1750 sq. ft.",
    "description": "Vimalshree Hills View is a thoughtfully planned plotting project at Nayta Mundla, Bypass, New RTO Road, Indore (MP), offering residential plots ranging from 850 to 1750 sq. ft. Set against a scenic hill backdrop, it combines excellent connectivity with a peaceful lifestyle. The project features wide internal roads and a gated, well-developed layout for comfortable living.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Residential plots ranging from 850 to 1750 sq. ft.",
          "Located at Nayta Mundla, Bypass, New RTO Road, Indore (MP)",
          "Multiple plot sizes: 25x70 (1750 sqft), 20x60 (1200 sqft), 20x50 (1000 sqft), 17x50 (850 sqft) and 24x53'9\" (1290 sqft)",
          "45 m wide road connectivity",
          "Booking amount of approximately 25%",
          "Scenic hill-view setting with a developed gated layout",
          "Bypass Road connectivity to Sanavadiya",
          "Excellent connectivity with a peaceful lifestyle"
        ]
      }
    ],
    "sections": {
      "overview": "Vimalshree Hills View offers thoughtfully designed residential plots ranging from 850 to 1750 sq. ft. at Nayta Mundla, Bypass, New RTO Road, Indore, blending comfort, functionality and a peaceful hill-view lifestyle.",
      "amenities": [
        {
          "title": "Grand Entrance with Project Signage",
          "img": "/propertyList/VIMALSHREE HILLS VIEW/img1.png"
        },
        {
          "title": "Well-Developed Gated Plotting Layout",
          "img": "/propertyList/VIMALSHREE HILLS VIEW/img2.png"
        },
        {
          "title": "Wide Internal Roads",
          "img": "/propertyList/VIMALSHREE HILLS VIEW/img3.png"
        },
        {
          "title": "Scenic Hill-View Surroundings",
          "img": "/propertyList/VIMALSHREE HILLS VIEW/img1.png"
        }
      ],
      "specifications": [
        "Plot size 25 X 70 = 1750 sqft",
        "Plot size 20 X 60 = 1200 sqft",
        "Plot size 20 X 50 = 1000 sqft",
        "Plot size 17 X 50 = 850 sqft",
        "Plot size 24 X 53'9\" = 1290 sqft",
        "45 m wide road",
        "Homes ranging from 850 to 1750 sq. ft.",
        "Booking amount approximately 25%"
      ],
      "connectivity": [
        "Bypass Road to Sanavadiya",
        "Located on New RTO Road, Indore (MP)",
        "Excellent connectivity via Bypass"
      ],
      "vision": [
        "A peaceful lifestyle amid scenic hill views",
        "Thoughtfully designed plots balancing comfort and functionality",
        "Excellent connectivity to the city",
        "A gated and well-developed community living"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Vimalshree Hills View"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Project Type",
        "value": "Plots"
      },
      {
        "label": "Location",
        "value": "Nayta Mundla, Bypass, New RTO Road, Indore (MP)"
      },
      {
        "label": "Plot Sizes",
        "value": "850 - 1750 sq. ft."
      },
      {
        "label": "Road Width",
        "value": "45 m Wide Road"
      },
      {
        "label": "Booking Amount",
        "value": "~ 25%"
      }
    ],
    "images": [
      "/propertyList/VIMALSHREE HILLS VIEW/img1.png",
      "/propertyList/VIMALSHREE HILLS VIEW/img2.png",
      "/propertyList/VIMALSHREE HILLS VIEW/img3.png"
    ],
    "floorPlan": {
      "image": "",
      "pdf": ""
    },
    "map": {
      "image": "",
      "locationLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.605561994932!2d75.91965857562973!3d22.661626379428416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e30fbdda468f%3A0x26107f109aaf749f!2sVimalshree%20hills%20view!5e1!3m2!1sen!2sin!4v1780424363029!5m2!1sen!2sin"
    },
    "developer": {
      "name": "Vimalshree",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Vimalshree Hills View details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "id": 236,
    "title": "Prabhat Greens",
    "slug": "prabhat-greens",
    "location": "Opposite Marriott Hotel, Vijay Nagar, Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Buy",
    "propertyType": "Plot",
    "bhk": "Plots",
    "area": "16,410 sq meters (Planning Area)",
    "description": "Prabhat Greens is a large-scale, mixed-use plotted development in Indore (MP), located opposite Marriott Hotel in Vijay Nagar and adjacent to a 75 m wide RE3 road near the AB Bypass. The project offers a variety of residential cum commercial plots ranging mostly from 440 sq ft to 1,562 sq ft, catering to different segments including LIG and EWS categories. A well-planned internal road network, dedicated parks and pathways create a balanced community environment in a fast-growing neighborhood.",
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Strategically located opposite Marriott Hotel, Vijay Nagar, Indore (MP)",
          "Adjacent to a 75 m wide RE3 Road (AB Bypass near Exotica Hotel)",
          "Variety of plot sizes ranging from 440 sq ft to 1,562 sq ft",
          "Residential cum Commercial plots with flexible dimensions",
          "Well-planned internal road network of 9 m, 7.5 m and 12 m wide roads",
          "Dedicated parks, pathways and green community spaces",
          "LIG and EWS plot categories available",
          "Close to Dr. APJ Abdul Kalam University and reputed schools",
          "Surrounded by established residential, commercial and hospitality projects",
          "Grand designer entrance gate setting a premium tone"
        ]
      }
    ],
    "sections": {
      "overview": "Prabhat Greens is a mixed-use plotted development in Vijay Nagar, Indore, offering residential cum commercial plots along a 75 m wide RE3 road near the AB Bypass.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/Prabhat Greens/img1.png"
        },
        {
          "title": "Designer Gated Entry",
          "img": "/propertyList/Prabhat Greens/img2.png"
        },
        {
          "title": "Landscaped Greenery",
          "img": "/propertyList/Prabhat Greens/img1.png"
        },
        {
          "title": "Dedicated Parks",
          "img": "/propertyList/Prabhat Greens/img2.png"
        }
      ],
      "specifications": [
        "Plot sizes ranging from 440 sq ft to 1,562 sq ft",
        "Common plot sizes: 920, 930, 1000, 1035, 1150, 1380 sq ft",
        "Typical plot dimensions: 7.01 x 16.76 m and 7.01 x 15.24 m",
        "LIG plots around 1,428 sq ft, 1,260 sq ft and 1,233 sq ft",
        "EWS plots designated within the layout",
        "Primary 75 m wide RE3 approach road",
        "Internal roads of 9 m, 7.5 m and 12 m widths",
        "Pedestrian pathways of 3.6 m width",
        "Park areas of 528.79 to 901 sq meters within the layout",
        "Residential cum Commercial plot demarcation"
      ],
      "connectivity": [
        "Adjacent to 75 m wide RE3 Road (AB Bypass near Exotica Hotel)",
        "Dr. APJ Abdul Kalam University",
        "Ayurvedic Medical College and Hospital",
        "The Vedansh International School",
        "The Emerald Height World School",
        "The Exotica Hotel",
        "Emerald Paradise Cove",
        "Vista Park, The Grand Virasat, Micromitti and Madhuvan developments"
      ],
      "vision": [
        "A balanced urban community with abundant green spaces",
        "Smart connectivity through a well-planned road grid",
        "Inclusive plotting for diverse income groups",
        "Premium gated living near key landmarks",
        "Sustainable layout with parks and pathways"
      ]
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Prabhat Greens"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Location",
        "value": "Opposite Marriott Hotel, Vijay Nagar, Indore (MP)"
      },
      {
        "label": "Total Planning Area (2021)",
        "value": "16,410 sq meters"
      },
      {
        "label": "Plot Sizes",
        "value": "440 sq ft to 1,562 sq ft"
      },
      {
        "label": "Developer's Ratio",
        "value": "30% (88,576 sq ft)"
      },
      {
        "label": "Land Owner's Ratio",
        "value": "70% (181,176 sq ft)"
      },
      {
        "label": "Project Reference Code",
        "value": "P-IND-25-5824"
      },
      {
        "label": "Pincode",
        "value": "452010"
      }
    ],
    "images": [
      "/propertyList/Prabhat Greens/img1.png",
      "/propertyList/Prabhat Greens/img2.png"
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
      "name": "Prabhat Greens",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Prabhat Greens details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team."
  },
  {
    "area": "78,000 sq.ft.",
    "bhk": "Plots",
    "price": [{ "type": "Starting Price", "value": "₹ 3700 /sq.ft. ++" }],
    "city": "Indore",
    "description": "Shubh Labh Pushp Vihar is an exclusive RERA-registered plotting project (P-SWR-24-4579) offering just 24 premium bungalow plots within a covered, secured campus spread across 78,000 sq.ft. Designed for community living, it offers plot sizes ranging from 370 sq.ft (EWS) up to 1650 sq.ft (Shop cum Residential), with standard residential plots of 1100-1350 sq.ft. The project pairs modern amenities such as a landscaped garden, open gym, kids play zone and underground electrification with a strategic, well-connected location near Indore-Ujjain Road.",
    "developer": {
      "name": "Shubh Labh Parivar (A Sameer Parekh Venture)",
      "description": "Developer name is taken from the uploaded project brochure."
    },
    "disclaimer": "Shubh Labh Pushp Vihar details are prepared only from the uploaded brochure. Price, area, sizes and approvals should be verified with the official sales team.",
    "floorPlan": {
      "image": "/propertyList/Shubh Labh Pushp Vihar/img7.jpg",
      "pdf": ""
    },
    "id": 237,
    "images": [
      "/propertyList/Shubh Labh Pushp Vihar/img1.png",
      "/propertyList/Shubh Labh Pushp Vihar/img2.jpg",
      "/propertyList/Shubh Labh Pushp Vihar/img3.jpg",
      "/propertyList/Shubh Labh Pushp Vihar/img4.jpg",
      "/propertyList/Shubh Labh Pushp Vihar/img5.jpg",
      "/propertyList/Shubh Labh Pushp Vihar/img6.jpg",
      "/propertyList/Shubh Labh Pushp Vihar/img7.jpg",
      "/propertyList/Shubh Labh Pushp Vihar/img8.jpg"
    ],
    "keyHighlights": [
      {
        "title": "Key Highlights of the Project",
        "points": [
          "Exclusive community of only 24 premium bungalow plots",
          "RERA registered project (P-SWR-24-4579)",
          "Total area of 78,000 sq.ft with a covered and secured campus",
          "Standard residential plots of 1100-1350 sq.ft, plus LIG, EWS and Shop cum Residential options",
          "Underground electrification for safety and clean aesthetics",
          "Landscaped garden, fountain and gazebo for relaxation",
          "Dedicated kids play zone and open gym",
          "CCTV surveillance across the secured campus",
          "Strategically located near Indore-Ujjain Main Road",
          "Close to Prestige University, Oriental University and Aurobindo Hospital"
        ]
      }
    ],
    "location": "Indore-Ujjain Road, Indore, Madhya Pradesh",
    "map": {
      "image": "/propertyList/Shubh Labh Pushp Vihar/img4.jpg",
      "locationLink":""
    },
    "projectData": [
      {
        "label": "Project Name",
        "value": "Shubh Labh Pushp Vihar"
      },
      {
        "label": "Property Type",
        "value": "Plot"
      },
      {
        "label": "Location",
        "value": "Indore-Ujjain Road, Indore, Madhya Pradesh"
      },
      {
        "label": "Developer",
        "value": "Shubh Labh Parivar (A Sameer Parekh Venture)"
      },
      {
        "label": "RERA No.",
        "value": "P-SWR-24-4579"
      },
      {
        "label": "Total Area",
        "value": "78,000 sq.ft."
      },
      {
        "label": "Total Plots",
        "value": "24 Premium Bungalow Plots"
      },
      {
        "label": "Standard Plot Size",
        "value": "1100 - 1350 sq.ft."
      },
      {
        "label": "Plot Size Range",
        "value": "370 sq.ft (EWS) to 1650 sq.ft (Shop cum Residential)"
      }
    ],
    "propertyType": "Plot",
    "sections": {
      "overview": "Shubh Labh Pushp Vihar is an exclusive 78,000 sq.ft RERA-registered plotting project in Indore offering only 24 premium bungalow plots within a covered, secured and amenity-rich community.",
      "amenities": [
        {
          "title": "Grand Entrance Gate",
          "img": "/propertyList/Shubh Labh Pushp Vihar/img3.jpg"
        },
        {
          "title": "Fountain & Landscaped Garden",
          "img": "/propertyList/Shubh Labh Pushp Vihar/img2.jpg"
        },
        {
          "title": "Kids Play Area",
          "img": "/propertyList/Shubh Labh Pushp Vihar/img8.jpg"
        },
        {
          "title": "Gazebo Seating Pavilion",
          "img": "/propertyList/Shubh Labh Pushp Vihar/img6.jpg"
        },
        {
          "title": "Landscaped Park & Internal Roads",
          "img": "/propertyList/Shubh Labh Pushp Vihar/img5.jpg"
        }
      ],
      "specifications": [
        "24 exclusive premium bungalow plots",
        "Standard Residential plots: 1100 to 1350 sq.ft (avg. dimensions 22' x 50' to 22' x 60')",
        "LIG (Low-Income Group) plots: 17' x 50', 850 sq.ft",
        "EWS (Economically Weaker Section) plots: 12'4\" x 30', 370 sq.ft",
        "Shop cum Residential plots: 1300 to 1650 sq.ft for mixed-use",
        "9M wide internal roads and 7.5M wide road",
        "3M wide internal pathways",
        "30M wide proposed road frontage",
        "Underground electrification",
        "CCTV surveillance across the campus",
        "Dedicated park and service area"
      ],
      "connectivity": [
        "Located on the Indore-Ujjain Main Road, towards Bajrangpalia",
        "Aurobindo Hospital nearby",
        "Prestige University nearby",
        "Oriental University nearby",
        "Shri Vaishnav Vidyapeeth nearby",
        "Ringnodiya Square nearby",
        "Luv Kush Square nearby",
        "Malwa Khedi, Baroli and Dharampuri nearby"
      ],
      "vision": [
        "Exclusive gated community living for a select few",
        "Secure and weather-protected covered campus",
        "Inclusive plot options for all economic segments",
        "Modern lifestyle amenities amid landscaped greenery",
        "A premium yet affordable investment opportunity in Indore"
      ]
    },
    "slug": "shubh-labh-pushp-vihar",
    "state": "Madhya Pradesh",
    "title": "Shubh Labh Pushp Vihar",
    "type": "Buy"
  },
];

const propertyList = rawPropertyList.map(withDefaults);

export default propertyList;
