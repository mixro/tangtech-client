import { images } from "./images";

export const partners = [
  { name: "Schneider Electric", logo: "/images/logos/schneider-electric.webp", w: 332, h: 99, text: "Global leader in energy management and automation: MV/LV switchgear, protection, smart-grid and power distribution solutions." },
  { name: "ABB", logo: "/images/logos/abb.webp", w: 312, h: 120, text: "Electrification and automation technology, including MV switchgear, breakers, drives and power solutions for industry and utilities." },
  { name: "Africab", logo: "/images/logos/africab.webp", w: 360, h: 104, text: "Manufacturer of electrical cables and wiring accessories for power distribution and industrial applications." },
  { name: "TELA Technology", logo: "/images/logos/tela.webp", w: 120, h: 120, text: "ICT infrastructure, networking and security technology for businesses across the region." },
  { name: "DIT Teaching Factory", logo: "/images/logos/dit.webp", w: 103, h: 120, text: "Dar es Salaam Institute of Technology's hands-on facility for technical training in electrical, automation and engineering fields." },
];

// Clients with logos on file
export const clientLogos = [
  { name: "Sahara Group", logo: "/images/logos/sahara.webp", w: 410, h: 115 },
  { name: "Johari Rotana", logo: "/images/logos/johari-rotana.webp", w: 216, h: 120 },
  { name: "Hyatt Regency Dar es Salaam", logo: "/images/logos/hyatt-regency.webp", w: 305, h: 86 },
  { name: "National Housing Corporation", logo: "/images/logos/nhc.webp", w: 115, h: 120 },
  { name: "Jubilee Allianz", logo: "/images/logos/jubilee-allianz.webp", w: 185, h: 32 },
  { name: "Multi Cable Ltd", logo: "/images/logos/mcl.webp", w: 212, h: 92 },
  { name: "Cosmos Group", logo: "/images/logos/cosmos.webp", w: 196, h: 86 },
];

// Project clients without a logo on file (shown as name tiles)
export const clientNames = [
  "Sunplaza Building",
  "Ashna's Convenience Supermarket",
  "Eco Residence",
  "Reef Hotel, Zanzibar Bay",
  "Kush Apartment",
  "Bagamoyo Sugar",
  "Msimbazi Centre (Archdiocese)",
  "Franciscan Sisters of Charity",
  "CRJE (East Africa) Ltd",
];

export const trainings = [
  {
    slug: "switchgear-assembly",
    title: "Switchgear assembly",
    image: images.wiringPanel,
    summary: "Assembly, installation and maintenance of LV and MV switchgear, including circuit breakers, relays and control panels.",
    duration: "4 weeks",
    field: "Electrical engineering",
    topics: ["Switchgear types and ratings", "Busbar and control wiring", "Breaker and relay installation", "Inspection and maintenance"],
  },
  {
    slug: "testing-commissioning",
    title: "Testing & commissioning",
    image: images.clampMeter,
    summary: "Procedures for testing, commissioning and troubleshooting electrical systems safely and to standard.",
    duration: "4 weeks",
    field: "Electrical testing & safety",
    topics: ["Insulation and earth testing", "Transformer and breaker tests", "Protection relay checks", "Safe isolation and permits"],
  },
  {
    slug: "automation",
    title: "Industrial automation",
    image: images.workshop,
    summary: "PLC programming, SCADA systems and smart control technologies for industrial processes.",
    duration: "5 weeks",
    field: "Industrial automation",
    topics: ["PLC hardware and I/O", "Ladder logic programming", "HMI and SCADA basics", "Motor control and drives"],
  },
  {
    slug: "autocad",
    title: "AutoCAD for electrical design",
    image: images.drawings,
    summary: "Electrical schematics, single-line diagrams, layouts and technical drawings for engineering projects.",
    duration: "6 weeks",
    field: "Engineering design",
    topics: ["Drawing setup and standards", "Single-line and schematic diagrams", "Lighting and power layouts", "Panel general arrangements"],
  },
  {
    slug: "security-systems",
    title: "Security systems",
    image: images.cctvPost,
    summary: "Installing, configuring and maintaining CCTV, access control and surveillance systems.",
    duration: "3 weeks",
    field: "Security & surveillance",
    topics: ["IP camera selection and placement", "NVR setup and remote viewing", "Access control wiring", "Electric fence basics"],
  },
];
