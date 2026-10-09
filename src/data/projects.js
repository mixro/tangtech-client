import { images } from "./images";

export const projectTypes = [
  { id: "substations", name: "Substations & lines" },
  { id: "testing", name: "Testing & maintenance" },
  { id: "standby", name: "Generators & standby power" },
  { id: "solar", name: "Solar" },
  { id: "ict", name: "ICT & security" },
  { id: "installation", name: "Installation & audits" },
];

export const featuredProject = {
  title: "800 kVA substation and 33 kV line for heavy industry",
  client: "Industrial manufacturing client",
  summary:
    "Turnkey installation, testing and commissioning of an 800 kVA ground-mounted substation and a 33 kV high-tension utility line to support expanded production.",
  image: images.substation,
  scope: [
    "33 kV medium-voltage overhead line",
    "800 kVA, 33/0.415 kV ground-mounted step-down transformer",
    "Auto-recloser protection system",
    "800 A primary metering panel",
  ],
  challenge:
    "Integrating a high-capacity substation without disrupting live facility lines. The site demanded careful structural work, precise route clearing, dielectric testing and close coordination with utility grid operators.",
  solution:
    "Certified line crews erected steel-reinforced pole structures and made the HV cable terminations. Our engineers ran thermographic, ratio and dielectric tests and calibrated the protection relays before energisation.",
  outcome: "Energised smoothly with zero safety incidents and full TANESCO regulatory compliance.",
};

export const projects = [
  { client: "Cosmos Properties Ltd / Uhuru Heights", type: "testing", status: "Completed", title: "Servicing of 2 × 2 MVA 33 kV transformers and 33 kV breakers, including testing of three 33 kV breakers" },
  { client: "Sahara Tanzania Ltd", type: "standby", status: "Completed", title: "Maintenance of depot fuel pumps and generator engine" },
  { client: "Sunplaza Building", type: "standby", status: "Completed", title: "Installation and commissioning of DGC-6D control relay for MCB/GCB switching, and calibration of a 400 kVA generator" },
  { client: "Cosmos Properties Ltd", type: "substations", status: "Completed", title: "Supply and installation of 33 kV 120 mm² cable, plus servicing of breaker and transformer" },
  { client: "Ashna's Convenience Supermarket", type: "ict", status: "Completed", title: "Installation of 36 Hikvision cameras and a 37.5 kVA generator" },
  { client: "Eco Residence", type: "testing", status: "Completed", title: "Servicing of 11 kV breaker and transformer" },
  { client: "Reef Hotel, Zanzibar Bay", type: "installation", status: "Completed", title: "Electrical installation and thermographic (infrared) electrical audit" },
  { client: "Kush Apartment", type: "testing", status: "Completed", title: "Maintenance of changeover switch panel and AVR" },
  { client: "Bagamoyo Sugar", type: "standby", status: "Completed", title: "Installation and commissioning of a 1 MVA generator" },
  { client: "Msimbazi Centre (Archdiocese)", type: "solar", status: "In progress", title: "Hybrid solar system: 9 × 550 W panels, inverter and 8 × 200 Ah batteries" },
  { client: "Aisha Shariff", type: "ict", status: "In progress", title: "25 IP cameras with 32-channel PoE NVR and 8-channel PoE switch, Kariakoo" },
  { client: "Franciscan Sisters of Charity", type: "substations", status: "In progress", title: "Rehabilitation of 11 kV line and construction of 11/33 kV substation at Ifumbo mini hydropower plant" },
  { client: "CRJE (East Africa) Ltd — Civil Aviation Project", type: "substations", status: "In progress", title: "MV line construction and installation of a 500 kVA 33/0.4 kV substation" },
];
