import { images } from "./images";

// group: "power" = core MV/HV work, "building" = building, enterprise and industrial systems
export const services = [
  {
    slug: "mv-hv-overhead-lines",
    group: "power",
    title: "MV/HV overhead line construction",
    short: "Design, pole setting, stringing, line shifting and commissioning of 11 kV and 33 kV distribution networks.",
    image: images.lineWorker,
    intro:
      "We build and rehabilitate 11 kV and 33 kV overhead networks for industrial sites, developers and utility interconnections, working to TANESCO construction and interconnection standards from survey to energisation.",
    scope: [
      "Route survey, line design and bill of quantities",
      "Pole erection: wooden, concrete and steel-reinforced structures",
      "Conductor stringing, sagging and termination",
      "Line shifting and rerouting for road and building works",
      "Rehabilitation of ageing 11 kV and 33 kV lines",
      "Drop-out fuses, surge arresters and earthing at each structure",
      "Pre-energisation testing and utility coordination",
    ],
    deliverables: ["Line drawings and as-built records", "Test reports", "TANESCO interconnection support"],
  },
  {
    slug: "substations-transformers",
    group: "power",
    title: "Substation & transformer installation",
    short: "Supply, pole or ground mounting, oil testing and protection for 315 kVA to 1250 kVA+ transformers.",
    image: images.poleTransformer,
    intro:
      "From pole-mounted distribution transformers to ground-mounted substations with metering and auto-reclosers, we deliver complete step-down installations, tested and ready for connection.",
    scope: [
      "Supply of 11/0.415 kV and 33/0.415 kV distribution transformers",
      "Pole-mounted and ground-mounted substation construction",
      "Transformer plinths, fencing and earthing grids",
      "Transformer oil sampling and breakdown voltage (BDV) testing",
      "Drop-out fuse and surge arrester protection",
      "Servicing and repair of existing transformers",
      "11/33 kV substation construction for generation sites",
    ],
    deliverables: ["Ratio, insulation and oil test results", "Earthing resistance report", "Commissioning certificate"],
  },
  {
    slug: "switchgear-metering",
    group: "power",
    title: "Switchgear & metering panels",
    short: "Assembly, supply and installation of 630–800 A metering cabinets, auto-reclosers and main LV boards.",
    image: images.breakerPanel,
    intro:
      "We assemble, install and maintain the equipment that controls and measures power: MV switchgear, auto-reclosers, primary metering panels and main low-voltage distribution boards.",
    scope: [
      "630–800 A primary metering cabinets",
      "Pole-mounted auto-recloser installation and settings",
      "MV switchgear installation, upgrades and maintenance",
      "Main LV distribution boards and sub-boards",
      "HV protection relay setting and calibration",
      "Breaker servicing for 11 kV and 33 kV circuit breakers",
    ],
    deliverables: ["Protection settings sheet", "Panel schedules and wiring diagrams", "Functional test records"],
  },
  {
    slug: "testing-commissioning",
    group: "power",
    title: "Testing, diagnostics & commissioning",
    short: "CT/PT analysis, dielectric and partial discharge testing, breaker diagnostics, thermography and commissioning.",
    image: images.testingPanel,
    intro:
      "Our testing team verifies that HV equipment is safe to energise and keeps it that way. We test new installations before commissioning and run periodic diagnostics on assets already in service.",
    scope: [
      "CT and PT ratio, polarity, excitation and insulation analysis",
      "Dielectric and insulation resistance testing",
      "Partial discharge measurement",
      "AC/DC and VLF voltage withstand testing",
      "Transformer turns ratio, winding resistance and power factor tests",
      "HV circuit breaker timing and contact resistance",
      "Thermographic (infrared) surveys of panels and connections",
      "Power quality analysis and power factor correction",
      "Substation commissioning",
    ],
    deliverables: ["Signed test reports with measured values", "Thermography report with images", "Remedial recommendations"],
  },
  {
    slug: "electrical-installation-standby-power",
    group: "building",
    title: "Electrical installation & standby power",
    short: "Building installations, distribution panels, generators, ATS integration and hybrid solar systems.",
    image: images.electrician,
    intro:
      "We wire and power residential, commercial and industrial buildings, and keep them running when the grid doesn't, with standby generators, automatic transfer switching and hybrid solar.",
    scope: [
      "Electrical installation for residential, commercial and industrial projects",
      "Assembly of distribution panels",
      "Standby generator installation and commissioning (up to 1 MVA+)",
      "Automatic transfer switch (ATS) configuration and synchronisation",
      "Generator controller tuning (e.g. DGC-6D, EM 3000)",
      "Hybrid solar PV systems with battery storage",
      "Electrical audits and preventive maintenance contracts",
    ],
    deliverables: ["Installation certificate", "Generator and ATS commissioning sheet", "Maintenance schedule"],
  },
  {
    slug: "ict-security",
    group: "building",
    title: "ICT & security systems",
    short: "Network design, structured cabling, telephony, IP-CCTV, access control and electric fencing.",
    image: images.cctvPole,
    intro:
      "We design and install the networks and security systems that businesses run on, from structured cabling and Wi-Fi to IP-CCTV surveillance and biometric access control.",
    scope: [
      "Network design and implementation",
      "Structured fibre and copper cabling",
      "PBX, VoIP and unified communication systems",
      "IP-CCTV surveillance (e.g. Hikvision) with PoE NVRs",
      "Biometric and card access control",
      "Electric perimeter fencing",
      "IT support and maintenance",
    ],
    deliverables: ["Network and camera layout drawings", "Cable test results", "Handover and user training"],
  },
  {
    slug: "automation-control",
    group: "building",
    title: "Automation & control systems",
    short: "Industrial automation and smart control for manufacturing, buildings and utilities.",
    image: images.automation,
    intro:
      "We automate processes and building services so they run more efficiently and safely, from PLC-based control panels to monitoring and remote operation.",
    scope: [
      "Industrial automation for manufacturing processes",
      "PLC and control panel design, programming and commissioning",
      "Motor control centres and drives",
      "Building management and smart control solutions",
      "SCADA and remote monitoring integration",
    ],
    deliverables: ["Control philosophy and I/O schedule", "Program backups", "Operator training"],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
