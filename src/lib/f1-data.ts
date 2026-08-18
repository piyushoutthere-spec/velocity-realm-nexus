export type Tier = "front" | "midfield" | "new";

export type Team = {
  name: string;
  country: string;
  drivers: [string, string];
  description: string;
  detail: string;
  tier: Tier;
  accent: string;
};

export const TEAMS: Team[] = [
  {
    name: "Mercedes",
    country: "Germany",
    drivers: ["George Russell", "Kimi Antonelli"],
    description:
      "A works team built around long-term engineering depth and one of the sport's most complete race operations.",
    detail: "Based in Brackley, United Kingdom, with power units developed in Brixworth.",
    tier: "front",
    accent: "oklch(0.78 0.12 180)",
  },
  {
    name: "Ferrari",
    country: "Italy",
    drivers: ["Charles Leclerc", "Lewis Hamilton"],
    description:
      "The only team to have competed in every Formula 1 season, designing chassis and power unit in-house.",
    detail: "Operates from Maranello, Italy, with its own test track at Fiorano.",
    tier: "front",
    accent: "oklch(0.6 0.22 27)",
  },
  {
    name: "McLaren",
    country: "United Kingdom",
    drivers: ["Lando Norris", "Oscar Piastri"],
    description:
      "A racing institution known for aerodynamic innovation and a highly disciplined pit-lane operation.",
    detail: "Based at the McLaren Technology Centre in Woking, United Kingdom.",
    tier: "front",
    accent: "oklch(0.76 0.16 62)",
  },
  {
    name: "Red Bull Racing",
    country: "Austria",
    drivers: ["Max Verstappen", "Isack Hadjar"],
    description:
      "An aggressive design culture paired with an in-house powertrain programme for the new engine era.",
    detail: "Operates from Milton Keynes, United Kingdom, under an Austrian licence.",
    tier: "front",
    accent: "oklch(0.55 0.19 265)",
  },
  {
    name: "Racing Bulls",
    country: "Italy",
    drivers: ["Liam Lawson", "Arvid Lindblad"],
    description:
      "A development-focused team that gives emerging talent a route into the front of the grid.",
    detail: "Based in Faenza, Italy, with technical facilities in the United Kingdom.",
    tier: "midfield",
    accent: "oklch(0.68 0.15 250)",
  },
  {
    name: "Alpine",
    country: "France",
    drivers: ["Pierre Gasly", "Franco Colapinto"],
    description:
      "The French manufacturer entry, combining a road-car performance brand with a full works race team.",
    detail: "Chassis built in Enstone, United Kingdom; the team races under a French licence.",
    tier: "midfield",
    accent: "oklch(0.7 0.14 235)",
  },
  {
    name: "Haas F1 Team",
    country: "United States",
    drivers: ["Esteban Ocon", "Oliver Bearman"],
    description:
      "A lean American operation that leans on technical partnerships instead of building every component itself.",
    detail: "Split between Kannapolis in the United States and Banbury in the United Kingdom.",
    tier: "midfield",
    accent: "oklch(0.8 0.02 285)",
  },
  {
    name: "Audi",
    country: "Germany",
    drivers: ["Nico Hulkenberg", "Gabriel Bortoleto"],
    description:
      "A full manufacturer project developing its own power unit alongside the chassis programme.",
    detail: "Chassis operations in Hinwil, Switzerland; power unit work in Neuburg, Germany.",
    tier: "new",
    accent: "oklch(0.7 0.05 150)",
  },
  {
    name: "Williams",
    country: "United Kingdom",
    drivers: ["Carlos Sainz", "Alexander Albon"],
    description:
      "One of the sport's historic independents, rebuilding around new infrastructure and processes.",
    detail: "Based at Grove, United Kingdom, with a customer power unit supply.",
    tier: "midfield",
    accent: "oklch(0.72 0.14 245)",
  },
  {
    name: "Aston Martin",
    country: "United Kingdom",
    drivers: ["Fernando Alonso", "Lance Stroll"],
    description:
      "A heavily invested project with a new factory and wind tunnel aimed at closing the gap to the front.",
    detail: "Based at Silverstone, United Kingdom, next to the circuit.",
    tier: "midfield",
    accent: "oklch(0.62 0.12 168)",
  },
  {
    name: "Cadillac",
    country: "United States",
    drivers: ["Sergio Perez", "Valtteri Bottas"],
    description:
      "The newest entry on the grid, pairing an experienced driver line-up with a fresh American programme.",
    detail: "Operations across the United States and the United Kingdom for its debut era.",
    tier: "new",
    accent: "oklch(0.78 0.09 85)",
  },
];

export const TIER_LABEL: Record<Tier, string> = {
  front: "Front Runners",
  midfield: "Midfield",
  new: "New / Returning",
};