export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  shortDescription: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  image: string;
  stock: "In Stock" | "Made to Order" | "Pre-Order";
  leadTime: string;
};

export function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

const modules = import.meta.glob('../content/products/*.json', { eager: true });

const cmsProducts: Product[] = Object.values(modules).map((mod: any) => ({
  id: mod.id,
  name: mod.name,
  category: mod.category,
  price: mod.price,
  unit: mod.unit,
  shortDescription: mod.shortDescription,
  description: mod.description,
  features: mod.features,
  specs: mod.specs,
  image: mod.image,
  stock: mod.stock,
  leadTime: mod.leadTime,
}));

export const PRODUCTS: Product[] = cmsProducts.length > 0 ? cmsProducts : [
  {
    id: "cng-mother-station-500",
    name: "CNG Mother Station — 500 Nm³/h",
    category: "Gas Infrastructure",
    price: 185000000,
    unit: "per station",
    shortDescription: "Turnkey 500 Nm³/h CNG compression and dispensing station for fleet fueling and daughter-station supply.",
    description: "A complete, fully containerized CNG Mother Station designed for high-throughput fleet fueling and daughter-station bottling. Engineered for 24/7 industrial operation across Africa's commercial transport corridors. Includes inlet gas conditioning, two-stage compression, priority panel, storage cascade, dual-hose dispensers and full SCADA telemetry.",
    features: [
      "500 Nm³/h compression capacity (expandable)",
      "Dual-hose high-flow dispensers",
      "Priority panel with cascade storage",
      "ATEX / IECEx hazardous-area certification",
      "Remote SCADA & telemetry ready",
      "12-month commissioning warranty",
    ],
    specs: [
      { label: "Capacity", value: "500 Nm³/h" },
      { label: "Inlet pressure", value: "4 – 25 bar" },
      { label: "Discharge pressure", value: "250 bar" },
      { label: "Power", value: "400V / 3-phase / 50Hz" },
      { label: "Footprint", value: "20 ft + 40 ft container" },
      { label: "Lead time", value: "16 – 22 weeks" },
    ],
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1600&q=80",
    stock: "Made to Order",
    leadTime: "16 – 22 weeks",
  },
  {
    id: "lpg-skid-25mt",
    name: "LPG Storage Skid — 25 MT",
    category: "Gas Infrastructure",
    price: 42500000,
    unit: "per skid",
    shortDescription: "Pre-engineered 25 MT LPG storage and dispensing skid for industrial, hospitality and auto-gas operations.",
    description: "A code-compliant 25 MT LPG storage skid pre-assembled at our integration yard for rapid site deployment. Includes mounded or above-ground vessel, transfer pumps, vapour recovery, automated emergency shutdown valves, fire detection and a metered dispenser.",
    features: [
      "25 MT vessel (ASME U-stamp / DPR-approved)",
      "Pre-piped pump & meter skid",
      "Emergency shutdown valves & fire detection",
      "Vapour recovery system",
      "Lightning protection & earthing",
      "DPR / NMDPRA documentation included",
    ],
    specs: [
      { label: "Storage capacity", value: "25 MT (~50 m³)" },
      { label: "Working pressure", value: "17.5 barg" },
      { label: "Material", value: "Carbon steel SA-516 Gr.70" },
      { label: "Dispenser flow", value: "100 L/min" },
      { label: "Footprint", value: "12 m × 6 m" },
      { label: "Lead time", value: "10 – 12 weeks" },
    ],
    image: "https://images.unsplash.com/photo-1581094651181-35942459ef47?auto=format&fit=crop&w=1600&q=80",
    stock: "Made to Order",
    leadTime: "10 – 12 weeks",
  },
  {
    id: "industrial-solar-100kwp",
    name: "Industrial Solar Hybrid System — 100 kWp",
    category: "Solar & Hybrid",
    price: 78000000,
    unit: "per system",
    shortDescription: "100 kWp grid-tied solar PV with 200 kWh battery storage and intelligent diesel hybridization.",
    description: "A complete commercial & industrial solar hybrid system engineered to deliver 24/7 reliable power while cutting diesel consumption by up to 70%. Tier-1 mono-PERC modules, hybrid inverters with grid-zero export control, lithium-iron-phosphate (LFP) battery cabinet and remote monitoring portal.",
    features: [
      "100 kWp Tier-1 PV array",
      "200 kWh LFP battery storage",
      "Hybrid inverter with diesel synchronisation",
      "Remote monitoring & analytics portal",
      "10-year workmanship warranty",
      "25-year module performance warranty",
    ],
    specs: [
      { label: "Array size", value: "100 kWp" },
      { label: "Battery", value: "200 kWh LFP" },
      { label: "Inverter", value: "100 kW hybrid (3-phase)" },
      { label: "Diesel savings", value: "Up to 70%" },
      { label: "Roof / ground area", value: "~600 m²" },
      { label: "Lead time", value: "8 – 12 weeks" },
    ],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    stock: "In Stock",
    leadTime: "8 – 12 weeks",
  },
  {
    id: "ev-charger-dc-150kw",
    name: "DC Fast EV Charger — 150 kW",
    category: "EV Mobility",
    price: 18500000,
    unit: "per unit",
    shortDescription: "Dual-gun 150 kW DC fast charger for fleet depots, commercial parks and highway corridors.",
    description: "Liquid-cooled, dual-gun (CCS2 + CHAdeMO) 150 kW DC fast charger built for African grid conditions. OCPP 1.6/2.0.1 compliant, payment-terminal ready and remotely managed from our cloud back-office.",
    features: [
      "150 kW output, dual-gun simultaneous",
      "CCS2 + CHAdeMO connectors",
      "OCPP 2.0.1 cloud-managed",
      "Card / QR / RFID payment ready",
      "Wide grid tolerance (300 – 480 V)",
      "Liquid-cooled cables",
    ],
    specs: [
      { label: "Output", value: "150 kW" },
      { label: "Connectors", value: "CCS2 + CHAdeMO" },
      { label: "Input voltage", value: "AC 380 V ±20%" },
      { label: "Efficiency", value: "≥ 95%" },
      { label: "Protection", value: "IP55 / IK10" },
      { label: "Lead time", value: "6 – 8 weeks" },
    ],
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1600&q=80",
    stock: "In Stock",
    leadTime: "6 – 8 weeks",
  },
  {
    id: "gas-turbine-5mw",
    name: "Refurbished Gas Turbine — 5 MW",
    category: "Power Generation",
    price: 950000000,
    unit: "per unit",
    shortDescription: "Factory-refurbished 5 MW industrial gas turbine package, fully tested and warrantied.",
    description: "A fully refurbished, performance-tested 5 MW gas turbine generator package. Each unit is stripped, NDT-inspected, recoated and reassembled with new wear parts. Comes with control system upgrade, exhaust silencer and 12-month operational warranty.",
    features: [
      "5 MW continuous output",
      "Dual-fuel (natural gas + diesel)",
      "New Mark VIe control system",
      "Exhaust silencer & SCR-ready",
      "12-month operational warranty",
      "Optional O&M contract",
    ],
    specs: [
      { label: "Output", value: "5 MW @ ISO" },
      { label: "Heat rate", value: "~12,500 kJ/kWh" },
      { label: "Fuel", value: "Natural gas / diesel" },
      { label: "Voltage", value: "11 kV / 50 Hz" },
      { label: "Weight", value: "~85 t (skid)" },
      { label: "Lead time", value: "24 – 32 weeks" },
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    stock: "Pre-Order",
    leadTime: "24 – 32 weeks",
  },
  {
    id: "lng-iso-tank-40ft",
    name: "LNG ISO Tank Container — 40 ft / 45 m³",
    category: "LNG Logistics",
    price: 92000000,
    unit: "per container",
    shortDescription: "ISO-frame cryogenic LNG tank container, 45 m³, ideal for multi-modal LNG distribution.",
    description: "ISO-frame cryogenic LNG tank container for road, rail and sea transport of LNG. Vacuum-jacketed inner vessel for ultra-low boil-off, full LR/BV/ABS class certification and intermodal compatibility.",
    features: [
      "45 m³ usable LNG capacity",
      "Vacuum-perlite insulation",
      "Boil-off rate ≤ 0.25%/day",
      "LR / BV / ABS class certified",
      "ISO 1496-3 intermodal frame",
      "Bottom & top fill, vapour-return",
    ],
    specs: [
      { label: "Capacity", value: "45 m³ (≈ 18.5 t LNG)" },
      { label: "MAWP", value: "8 barg" },
      { label: "Inner vessel", value: "Stainless 304" },
      { label: "Boil-off rate", value: "≤ 0.25% / day" },
      { label: "Frame", value: "40 ft ISO" },
      { label: "Lead time", value: "14 – 18 weeks" },
    ],
    image: "https://images.unsplash.com/photo-1494412574745-0f56af89d8d2?auto=format&fit=crop&w=1600&q=80",
    stock: "Made to Order",
    leadTime: "14 – 18 weeks",
  },
];