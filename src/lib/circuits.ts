export type Region = "europe" | "americas" | "asia" | "middle-east" | "australia";
export type Trait = "high-speed" | "street" | "technical" | "high-downforce";

export type Circuit = {
  slug: string;
  round: number;
  gp: string;
  circuit: string;
  country: string;
  city: string;
  capital: string;
  region: Region;
  traits: Trait[];
  special: string;
  character: string[];
  facts: { label: string; value: string }[];
};

export const REGION_LABEL: Record<Region, string> = {
  europe: "Europe",
  americas: "Americas",
  asia: "Asia",
  "middle-east": "Middle East",
  australia: "Australia",
};

export const TRAIT_LABEL: Record<Trait, string> = {
  "high-speed": "High Speed",
  street: "Street Circuit",
  technical: "Technical",
  "high-downforce": "High Downforce",
};

export const CIRCUITS: Circuit[] = [
  {
    slug: "australia",
    round: 1,
    gp: "Australian Grand Prix",
    circuit: "Albert Park Circuit",
    country: "Australia",
    city: "Melbourne",
    capital: "Canberra",
    region: "australia",
    traits: ["high-speed", "street"],
    special:
      "A parkland street circuit around a lake that opens the season with fast, flowing corners and very little run-off.",
    character: ["Fast flowing corners", "Street layout", "Low grip early in the weekend"],
    facts: [
      { label: "Layout type", value: "Semi-permanent street circuit" },
      { label: "First F1 race here", value: "1996" },
      { label: "Season position", value: "Opening round" },
    ],
  },
  {
    slug: "china",
    round: 2,
    gp: "Chinese Grand Prix",
    circuit: "Shanghai International Circuit",
    country: "China",
    city: "Shanghai",
    capital: "Beijing",
    region: "asia",
    traits: ["technical", "high-speed"],
    special:
      "Famous for its endless opening corner sequence and one of the longest straights on the calendar.",
    character: ["Long straight", "Heavy braking", "Technical opening complex"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "2004" },
      { label: "Signature", value: "Turn 1–2 spiral" },
    ],
  },
  {
    slug: "japan",
    round: 3,
    gp: "Japanese Grand Prix",
    circuit: "Suzuka International Racing Course",
    country: "Japan",
    city: "Suzuka",
    capital: "Tokyo",
    region: "asia",
    traits: ["technical", "high-speed"],
    special:
      "A figure-of-eight layout widely regarded as the finest driver's circuit in the world, with rhythm-critical esses.",
    character: ["Elevation changes", "Fast esses", "Crossover figure-of-eight"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "1987" },
      { label: "Signature", value: "130R and the Esses" },
    ],
  },
  {
    slug: "bahrain",
    round: 4,
    gp: "Bahrain Grand Prix",
    circuit: "Bahrain International Circuit",
    country: "Bahrain",
    city: "Sakhir",
    capital: "Manama",
    region: "middle-east",
    traits: ["technical"],
    special:
      "A desert circuit run under floodlights, where heavy braking zones and abrasive asphalt make tyre management decisive.",
    character: ["Heavy braking", "Traction demanding", "Abrasive surface"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "2004" },
      { label: "Session time", value: "Night race" },
    ],
  },
  {
    slug: "saudi-arabia",
    round: 5,
    gp: "Saudi Arabian Grand Prix",
    circuit: "Jeddah Corniche Circuit",
    country: "Saudi Arabia",
    city: "Jeddah",
    capital: "Riyadh",
    region: "middle-east",
    traits: ["street", "high-speed"],
    special:
      "The fastest street circuit in Formula 1, with walls lining a near-continuous sequence of flat-out kinks.",
    character: ["Very high average speed", "Walls close to the track", "Long straights"],
    facts: [
      { label: "Layout type", value: "Street circuit" },
      { label: "First F1 race here", value: "2021" },
      { label: "Session time", value: "Night race" },
    ],
  },
  {
    slug: "miami",
    round: 6,
    gp: "Miami Grand Prix",
    circuit: "Miami International Autodrome",
    country: "United States",
    city: "Miami Gardens",
    capital: "Washington, D.C.",
    region: "americas",
    traits: ["street", "high-speed"],
    special:
      "A temporary layout around a stadium complex, mixing long straights with a slow, twisting middle section.",
    character: ["Long straights", "Tight technical middle sector", "Temporary layout"],
    facts: [
      { label: "Layout type", value: "Temporary circuit" },
      { label: "First F1 race here", value: "2022" },
      { label: "Setting", value: "Hard Rock Stadium complex" },
    ],
  },
  {
    slug: "canada",
    round: 7,
    gp: "Canadian Grand Prix",
    circuit: "Circuit Gilles Villeneuve",
    country: "Canada",
    city: "Montreal",
    capital: "Ottawa",
    region: "americas",
    traits: ["high-speed", "technical"],
    special:
      "A low-grip island circuit of straights and chicanes, where the exit wall at the final corner has caught out champions.",
    character: ["Heavy braking", "Long straights", "Unforgiving walls"],
    facts: [
      { label: "Layout type", value: "Semi-permanent circuit" },
      { label: "First F1 race here", value: "1978" },
      { label: "Signature", value: "The Wall of Champions" },
    ],
  },
  {
    slug: "monaco",
    round: 8,
    gp: "Monaco Grand Prix",
    circuit: "Circuit de Monaco",
    country: "Monaco",
    city: "Monte Carlo",
    capital: "Monaco",
    region: "europe",
    traits: ["street", "high-downforce", "technical"],
    special:
      "The most famous street race in the world, run through narrow city roads where qualifying often decides the result.",
    character: ["Tight corners", "Street layout", "Elevation changes", "Almost no overtaking room"],
    facts: [
      { label: "Layout type", value: "Street circuit" },
      { label: "First F1 race here", value: "1950" },
      { label: "Signature", value: "The tunnel and Grand Hotel hairpin" },
    ],
  },
  {
    slug: "spain",
    round: 9,
    gp: "Spanish Grand Prix",
    circuit: "Circuit de Barcelona-Catalunya",
    country: "Spain",
    city: "Montmeló",
    capital: "Madrid",
    region: "europe",
    traits: ["technical", "high-downforce"],
    special:
      "A long-standing testing venue whose mix of corner types makes it the sport's traditional benchmark for aerodynamic performance.",
    character: ["Long corners", "High aero sensitivity", "Front tyre wear"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "1991" },
      { label: "Reputation", value: "Reference circuit for car performance" },
    ],
  },
  {
    slug: "austria",
    round: 10,
    gp: "Austrian Grand Prix",
    circuit: "Red Bull Ring",
    country: "Austria",
    city: "Spielberg",
    capital: "Vienna",
    region: "europe",
    traits: ["high-speed"],
    special:
      "A short, steep Styrian circuit where lap times are tight and the climb out of Turn 1 rewards traction and power.",
    character: ["Elevation changes", "Short lap", "Heavy braking"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "1970 (Österreichring)" },
      { label: "Signature", value: "One of the shortest laps of the year" },
    ],
  },
  {
    slug: "britain",
    round: 11,
    gp: "British Grand Prix",
    circuit: "Silverstone Circuit",
    country: "United Kingdom",
    city: "Silverstone",
    capital: "London",
    region: "europe",
    traits: ["high-speed", "high-downforce"],
    special:
      "The venue of the first world championship race, still defined by the fast, committed sweep through Maggotts and Becketts.",
    character: ["High-speed corners", "High lateral loads", "Exposed to changeable weather"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "1950" },
      { label: "Distinction", value: "Hosted the first F1 world championship race" },
    ],
  },
  {
    slug: "belgium",
    round: 12,
    gp: "Belgian Grand Prix",
    circuit: "Circuit de Spa-Francorchamps",
    country: "Belgium",
    city: "Stavelot",
    capital: "Brussels",
    region: "europe",
    traits: ["high-speed"],
    special:
      "A long forest circuit through the Ardennes, home to Eau Rouge and Raidillon and famously unpredictable weather.",
    character: ["Long straights", "Big elevation changes", "Split-weather conditions"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "1950" },
      { label: "Signature", value: "Eau Rouge / Raidillon" },
    ],
  },
  {
    slug: "hungary",
    round: 13,
    gp: "Hungarian Grand Prix",
    circuit: "Hungaroring",
    country: "Hungary",
    city: "Mogyoród",
    capital: "Budapest",
    region: "europe",
    traits: ["high-downforce", "technical"],
    special:
      "A tight, twisting circuit often compared to a kart track, where downforce and track position matter more than top speed.",
    character: ["Tight corners", "High downforce", "Difficult to overtake"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "1986" },
      { label: "Conditions", value: "Typically hot and dusty" },
    ],
  },
  {
    slug: "netherlands",
    round: 14,
    gp: "Dutch Grand Prix",
    circuit: "Circuit Zandvoort",
    country: "Netherlands",
    city: "Zandvoort",
    capital: "Amsterdam",
    region: "europe",
    traits: ["technical", "high-downforce"],
    special:
      "A narrow circuit in the dunes with banked corners that keep cars committed and make overtaking difficult.",
    character: ["Banked corners", "Narrow track", "Elevation changes"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "1952" },
      { label: "Signature", value: "Banking at Hugenholtzbocht and Arie Luyendyk" },
    ],
  },
  {
    slug: "italy",
    round: 15,
    gp: "Italian Grand Prix",
    circuit: "Autodromo Nazionale Monza",
    country: "Italy",
    city: "Monza",
    capital: "Rome",
    region: "europe",
    traits: ["high-speed"],
    special:
      "One of F1's fastest circuits, famous for long straights and low-downforce setups inside a historic royal park.",
    character: ["Very long straights", "Heavy braking into chicanes", "Lowest downforce of the year"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "1950" },
      { label: "Nickname", value: "The Temple of Speed" },
    ],
  },
  {
    slug: "madrid",
    round: 16,
    gp: "Madrid Grand Prix",
    circuit: "Madring",
    country: "Spain",
    city: "Madrid",
    capital: "Madrid",
    region: "europe",
    traits: ["street", "technical"],
    special":
      "A new mixed street and permanent layout around the IFEMA exhibition district, joining the calendar for 2026.",
    character: ["Street sections", "Banked corner", "Mixed permanent and temporary layout"],
    facts: [
      { label: "Layout type", value: "Mixed street and permanent" },
      { label: "First F1 race here", value: "2026" },
      { label: "Setting", value: "IFEMA district, Madrid" },
    ],
  },
  {
    slug: "azerbaijan",
    round: 17,
    gp: "Azerbaijan Grand Prix",
    circuit: "Baku City Circuit",
    country: "Azerbaijan",
    city: "Baku",
    capital: "Baku",
    region: "asia",
    traits: ["street", "high-speed"],
    special:
      "A city circuit combining an extremely long straight with a narrow climb through the medieval old town walls.",
    character: ["Very long straight", "Tight walled section", "High slipstream effect"],
    facts: [
      { label: "Layout type", value: "Street circuit" },
      { label: "First F1 race here", value: "2016" },
      { label: "Signature", value: "The castle section" },
    ],
  },
  {
    slug: "singapore",
    round: 18,
    gp: "Singapore Grand Prix",
    circuit: "Marina Bay Street Circuit",
    country: "Singapore",
    city: "Singapore",
    capital: "Singapore",
    region: "asia",
    traits: ["street", "high-downforce", "technical"],
    special":
      "F1's original night race, a humid and physically brutal street event where concentration lapses end races.",
    character: ["Street layout", "Tight corners", "Extreme heat and humidity"],
    facts: [
      { label: "Layout type", value: "Street circuit" },
      { label: "First F1 race here", value: "2008" },
      { label: "Distinction", value: "F1's first night race" },
    ],
  },
  {
    slug: "united-states",
    round: 19,
    gp: "United States Grand Prix",
    circuit: "Circuit of the Americas",
    country: "United States",
    city: "Austin",
    capital: "Washington, D.C.",
    region: "americas",
    traits: ["technical", "high-speed"],
    special:
      "A purpose-built circuit with a steep uphill first corner and sequences inspired by classic European tracks.",
    character: ["Steep uphill Turn 1", "Fast esses", "Bumpy surface"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "2012" },
      { label: "Signature", value: "The climb to Turn 1" },
    ],
  },
  {
    slug: "mexico",
    round: 20,
    gp: "Mexico City Grand Prix",
    circuit: "Autódromo Hermanos Rodríguez",
    country: "Mexico",
    city: "Mexico City",
    capital: "Mexico City",
    region: "americas",
    traits: ["high-downforce", "technical"],
    special:
      "The highest-altitude race of the year, where thin air reduces aerodynamic grip and pushes cooling to its limits.",
    character: ["High altitude", "Low air density", "Stadium section"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "1963" },
      { label: "Signature", value: "The Foro Sol stadium section" },
    ],
  },
  {
    slug: "brazil",
    round: 21,
    gp: "São Paulo Grand Prix",
    circuit: "Autódromo José Carlos Pace (Interlagos)",
    country: "Brazil",
    city: "São Paulo",
    capital: "Brasília",
    region: "americas",
    traits: ["technical", "high-speed"],
    special:
      "A short anti-clockwise circuit with constant elevation change and a history of dramatic, weather-affected races.",
    character: ["Anti-clockwise", "Elevation changes", "Changeable weather"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "1973" },
      { label: "Signature", value: "The Senna S" },
    ],
  },
  {
    slug: "las-vegas",
    round: 22,
    gp: "Las Vegas Grand Prix",
    circuit: "Las Vegas Strip Circuit",
    country: "United States",
    city: "Las Vegas",
    capital: "Washington, D.C.",
    region: "americas",
    traits: ["street", "high-speed"],
    special":
      "A late-night run down the Strip with very long straights and cold track temperatures that challenge tyre warm-up.",
    character: ["Long straights", "Street layout", "Cold night conditions"],
    facts: [
      { label: "Layout type", value: "Street circuit" },
      { label: "First F1 race here", value: "2023" },
      { label: "Session time", value: "Late-night race" },
    ],
  },
  {
    slug: "qatar",
    round: 23,
    gp: "Qatar Grand Prix",
    circuit: "Lusail International Circuit",
    country: "Qatar",
    city: "Lusail",
    capital: "Doha",
    region: "middle-east",
    traits: ["high-speed", "high-downforce"],
    special:
      "A flowing former motorcycle circuit run at night, with sustained high-speed corners that load the tyres heavily.",
    character: ["Fast flowing corners", "High tyre loads", "Night race"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "2021" },
      { label: "Origin", value: "Built for motorcycle racing" },
    ],
  },
  {
    slug: "abu-dhabi",
    round: 24,
    gp: "Abu Dhabi Grand Prix",
    circuit: "Yas Marina Circuit",
    country: "United Arab Emirates",
    city: "Abu Dhabi",
    capital: "Abu Dhabi",
    region: "middle-east",
    traits: ["technical"],
    special:
      "The season finale, run from daylight into darkness on a marina circuit that has decided multiple championships.",
    character: ["Day-to-night transition", "Long straights", "Traction-limited corners"],
    facts: [
      { label: "Layout type", value: "Permanent circuit" },
      { label: "First F1 race here", value: "2009" },
      { label: "Season position", value: "Final round" },
    ],
  },
];