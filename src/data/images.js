// Placeholder photography from Unsplash (free for commercial use under the
// Unsplash License: https://unsplash.com/license). Replace any entry with your
// own project photos by setting `src` to a local file in /public/images/…
// Every image used on the site is listed on /image-credits.

const u = (id, alt, page, by) => ({ id, alt, page, by, provider: "Unsplash" });

export const images = {
  substation: u("photo-1509390673020-a5b2450e33f1", "Outdoor electrical substation with steel structures, insulators and high-voltage equipment", "https://unsplash.com/photos/gray-metal-power-station-u719UbWj0us", "American Public Power Association"),  lineWorker: u("photo-1597502310092-31cdaa35b46d", "Line technician in a hard hat and harness working on overhead power lines", "https://unsplash.com/photos/utility-worker-repairing-overhead-power-lines-Q3WVbAfdOoY", "Anton Dmitriev"),
  poleTransformer: u("photo-1760789149696-30ce2d28b331", "Distribution transformer mounted on a utility pole", "https://unsplash.com/photos/electrical-transformer-mounted-on-a-utility-pole-HeU5iFfiTeE", "lee seunghyub"),
  twinTransformers: u("photo-1786561159138-761c4141424d", "Two pole-mounted distribution transformers against a blue sky", "https://unsplash.com/photos/utility-pole-with-two-electrical-transformers-ONBqQkBk7m0"),
  poleHardware: u("photo-1783730961436-77f45eec50be", "Utility pole with overhead conductors and line equipment", "https://unsplash.com/photos/electrical-utility-pole-with-wires-and-transformers-against-blue-sky-fMqob9FAcf0"),
  insulators: u("photo-1776251896448-a5eb8ae25e35", "Close-up of high-voltage insulators at a substation", "https://unsplash.com/photos/close-up-of-electrical-insulators-at-a-substation-9RabCrFVmuM"),
  oldTransformer: u("photo-1777575764649-c8e5933e9ece", "Oil-filled power transformer with radiators and bushings", "https://unsplash.com/photos/old-electrical-transformer-with-red-pipes-and-insulators-ESZsVtYtdR0"),
  pylon: u("photo-1473341304170-971dccb5ac1e", "Steel transmission towers carrying high-voltage lines", "https://unsplash.com/photos/photo-of-truss-towers-yETqkLnhsUI"),
  breakerPanel: u("photo-1544724569-5f546fd6f2b5", "Distribution board with circuit breakers and control wiring", "https://unsplash.com/photos/electrical-switch-box-with-circuit-breakers-kK7uPfb2YWU", "Markus Spiske"),
  breakersWhite: u("photo-1576446470246-499c738d1c8e", "Row of modular circuit breakers in a distribution board", "https://unsplash.com/photos/white-circuit-breakers-oj1zW_PNI4k"),
  switchBox: u("photo-1566417110090-6b15a06ec800", "Grey metal electrical enclosure", "https://unsplash.com/photos/gray-power-switch-box-maXnRLszYY0"),
  testingPanel: u("photo-1758101755915-462eddc23f57", "Electrician testing a distribution panel with a multimeter", "https://unsplash.com/photos/electrician-testing-electrical-panel-with-multimeter-PkHf7BUWbtk", "Toolmash Expo"),
  panelWork: u("photo-1660330589693-99889d60181e", "Technician working inside an electrical panel", "https://unsplash.com/photos/electrician-working-on-electrical-panel-GXLPLG3_Vf4"),
  wiringPanel: u("photo-1635335874521-7987db781153", "Control wiring terminated inside a switch panel", "https://unsplash.com/photos/a-bunch-of-wires-are-plugged-into-a-switch-box-47jO5Y8nsYo"),
  electrician: u("photo-1621905251189-08b45d6a269e", "Electrician in a yellow hard hat installing wiring", "https://unsplash.com/photos/electrician-installing-wiring-with-yellow-hardhat-_2AlIm-F6pw"),
  controlRoom: u("photo-1761141535640-c78744c4f369", "Control room with electrical panels and gauges", "https://unsplash.com/photos/control-room-with-electrical-panels-and-gauges-KvG756qL6jI", "Tao Yuan"),
  controlPanel: u("photo-1655204903983-73007f15cb3e", "Close-up of a control panel with indicators and switches", "https://unsplash.com/photos/a-close-up-of-a-control-panel-AGQZprOABgQ"),
  testDevice: u("photo-1655165312008-5feda4a1e989", "Close-up of an electronic measuring device", "https://unsplash.com/photos/a-close-up-of-a-device-QpVVK9oY6uA"),
  multimeter: u("photo-1758295746012-41650245a9bb", "Digital multimeter display", "https://unsplash.com/photos/digital-multimeter-displaying-zero-volts-on-screen-LyU3JeqXUqM"),
  clampMeter: u("photo-1553873002-785d775854c9", "Clamp meter used for current measurement", "https://unsplash.com/photos/black-and-yellow-clamp-meter-NLBJ2I0lNr4"),
  cableReel: u("photo-1758965364875-e090e5423d2d", "Large industrial reel of black power cable", "https://unsplash.com/photos/large-industrial-reel-with-black-coiled-cable-R20htWnyWxE"),
  cableSpools: u("photo-1775714351784-51e93e4c12a7", "Spools of black power cable on site", "https://unsplash.com/photos/several-large-spools-of-black-cable-on-a-concrete-surface-_jVZcb-Aovs"),
  networkCables: u("photo-1558494949-ef010cbdcc31", "Structured network cabling in a server rack", "https://unsplash.com/photos/cable-network-M5tzZtFCOfs"),
  serverRack: u("photo-1698668975271-2ba9a323be6b", "Server rack with patched network cables", "https://unsplash.com/photos/a-rack-of-servers-with-wires-and-wires-attached-to-them-c-lSQecD9oI"),
  cctvPole: u("photo-1589935447067-5531094415d1", "Two security cameras mounted on a pole", "https://unsplash.com/photos/security-cameras-on-pole-against-sky-oQD9uq4Rd4I"),
  cctvSet: u("photo-1557597774-9d273605dfa9", "Assorted IP security cameras", "https://unsplash.com/photos/assorted-color-security-cameras-LfaN1gswV5c"),
  cctvPost: u("photo-1528312635006-8ea0bc49ec63", "Security camera on a post", "https://unsplash.com/photos/white-security-camera-on-post-zBTYRFCeaS0"),
  fingerprint: u("photo-1585079374502-415f8516dcc3", "Biometric fingerprint scanner", "https://unsplash.com/photos/glowing-fingerprint-on-circular-scanner-SRFG7iwktDk"),
  automation: u("photo-1717386255773-a456c611dc4e", "Touchscreen control panel on an industrial machine", "https://unsplash.com/photos/industrial-manufacturing-machine-control-panel-_XDK4naBbgw"),
  factoryLine: u("photo-1716191300020-b52dec5b70a8", "Line of electrical equipment in a factory", "https://unsplash.com/photos/a-line-of-electrical-equipment-in-a-factory-ERXFD4jLpJc"),
  solarWork: u("photo-1668097613572-40b7c11c8727", "Technician installing a solar panel", "https://unsplash.com/photos/a-person-working-on-a-solar-panel-rNn_TU8dvoY"),
  solarArray: u("photo-1617269778723-73a40cf299bd", "Rows of solar photovoltaic panels", "https://unsplash.com/photos/black-and-white-solar-panels-aQOzmgcT6sI"),
  drawings: u("photo-1581092160562-40aa08e78837", "Engineer measuring technical drawings on a desk", "https://unsplash.com/photos/engineer-measuring-technical-drawings-on-desk-WDCE0T4khsE"),
  workshop: u("photo-1581092160607-ee22621dd758", "Trainee operating equipment in an engineering workshop", "https://unsplash.com/photos/student-operating-machinery-in-engineering-workshop-omrpeqLz6Po"),
  siteTeam: u("photo-1581094488379-6a10d04c0f04", "Two engineers in uniform reviewing a site plan", "https://unsplash.com/photos/people-in-uniforms-pointing-at-map-xYCBw1uIP_M"),
  laptopTeam: u("photo-1581091226033-d5c48150dbaa", "Engineers reviewing data on a laptop in a workshop", "https://unsplash.com/photos/people-looking-at-laptop-in-workspace-bIltCMXIwRE"),
  generator: u("photo-1700318092011-6e4666e94ab5", "Engine generator set in a steel frame", "https://unsplash.com/photos/a-small-red-and-black-engine-inside-of-a-red-frame--XE7uhxtUHM"),
};

const WIDTHS = [480, 800, 1200, 1600, 2000];

/** Build src/srcSet for an image entry (Unsplash CDN or local file). */
export function imageSources(img, { max = 1600, ratio } = {}) {
  if (!img) return {};
  if (img.src) return { src: img.src };
  const base = `https://images.unsplash.com/${img.id}`;
  const crop = ratio ? `&fit=crop&crop=entropy&ar=${ratio}` : "";
  const url = (w) => `${base}?auto=format&q=68&w=${w}${crop}`;
  const widths = WIDTHS.filter((w) => w <= max);
  return {
    src: url(widths[widths.length - 1] >= 800 ? 800 : widths[widths.length - 1]),
    srcSet: widths.map((w) => `${url(w)} ${w}w`).join(", "),
  };
}
