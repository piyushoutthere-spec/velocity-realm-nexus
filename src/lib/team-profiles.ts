export type Person = { name: string; role: string; why: string };
export type Moment = { year: string; event: string; why: string };
export type DriverProfile = {
  name: string;
  number?: string;
  nationality: string;
  note: string;
};
export type Fact = { label: string; value: string };

export type TeamProfile = {
  tagline: string;
  story: string[];
  people: Person[];
  moments: Moment[];
  lineup: [DriverProfile, DriverProfile];
  facts: Fact[];
};

export const TEAM_PROFILES: Record<string, TeamProfile> = {
  mercedes: {
    tagline: "Engineering excellence at the limit.",
    story: [
      "Mercedes raced in Formula 1 as a works team in 1954 and 1955, winning the drivers' title with Juan Manuel Fangio in both seasons, before withdrawing from motorsport after the 1955 Le Mans disaster.",
      "The marque returned as an engine supplier in the 1990s and 2000s, powering McLaren and Brawn GP to championships, then bought the Brawn team and returned as a full works entry in 2010.",
      "The hybrid era transformed the team: from 2014 Mercedes won eight consecutive constructors' championships, an unprecedented run built on the integration of chassis work at Brackley and power unit development at Brixworth.",
    ],
    people: [
      {
        name: "Juan Manuel Fangio",
        role: "Driver, 1954–1955",
        why: "Won the world championship in both of Mercedes' 1950s seasons, establishing the marque's Grand Prix reputation.",
      },
      {
        name: "Sir Lewis Hamilton",
        role: "Driver, 2013–2024",
        why: "Won six of his seven world titles with the team and became its defining figure of the hybrid era.",
      },
      {
        name: "Toto Wolff",
        role: "Team Principal and CEO",
        why: "Has led the team since 2013 through its record run of constructors' championships.",
      },
      {
        name: "Ross Brawn",
        role: "Team Principal, 2010–2013",
        why: "Founded the modern works team out of Brawn GP and laid the structural groundwork for its later dominance.",
      },
    ],
    moments: [
      { year: "1954", event: "Works Grand Prix return", why: "The W196 won on debut at Reims with Fangio." },
      { year: "1955", event: "Withdrawal from motorsport", why: "Mercedes left racing for decades after the Le Mans disaster." },
      { year: "2010", event: "Works team returns", why: "Mercedes bought Brawn GP and re-entered as a manufacturer." },
      { year: "2014", event: "Hybrid era begins", why: "The team's power unit set the benchmark for the new regulations." },
      { year: "2021", event: "Eighth straight constructors' title", why: "Completed the longest run of consecutive constructors' championships in F1." },
    ],
    lineup: [
      {
        name: "George Russell",
        number: "63",
        nationality: "British",
        note: "A Mercedes junior graduate who joined the works team in 2022 and now leads its driver line-up.",
      },
      {
        name: "Kimi Antonelli",
        number: "12",
        nationality: "Italian",
        note: "Promoted from the Mercedes junior programme, he stepped straight into a works seat for his F1 career.",
      },
    ],
    facts: [
      { label: "Headquarters", value: "Brackley, United Kingdom" },
      { label: "Power unit base", value: "Brixworth, United Kingdom" },
      { label: "Works seasons", value: "1954–1955, 2010–present" },
      { label: "Constructors' titles", value: "8 (2014–2021)" },
    ],
  },

  ferrari: {
    tagline: "The oldest name in Grand Prix racing.",
    story: [
      "Scuderia Ferrari was founded by Enzo Ferrari in 1929, initially running cars for Alfa Romeo, and has entered every Formula 1 world championship season since 1950.",
      "Its early titles came with Alberto Ascari, Juan Manuel Fangio and John Surtees, followed by the Niki Lauda years of the mid-1970s and the Jody Scheckter title of 1979.",
      "The team's most dominant period came in the early 2000s, when Michael Schumacher won five consecutive drivers' championships. Kimi Räikkönen took the team's most recent drivers' title in 2007.",
    ],
    people: [
      {
        name: "Enzo Ferrari",
        role: "Founder",
        why: "Created the team in 1929 and shaped its identity and racing philosophy until his death in 1988.",
      },
      {
        name: "Niki Lauda",
        role: "Driver, 1974–1977",
        why: "Won two world championships for Ferrari and returned to racing weeks after his near-fatal 1976 crash.",
      },
      {
        name: "Michael Schumacher",
        role: "Driver, 1996–2006",
        why: "Won five consecutive drivers' titles with Ferrari and led the team's most successful era.",
      },
      {
        name: "Jean Todt",
        role: "Team Principal, 1993–2007",
        why: "Rebuilt the team's structure and assembled the group that delivered its early-2000s dominance.",
      },
    ],
    moments: [
      { year: "1950", event: "Championship era begins", why: "Ferrari entered the first world championship season and has never left." },
      { year: "1952", event: "Ascari's first title", why: "Alberto Ascari delivered Ferrari's first drivers' championship." },
      { year: "1976", event: "Lauda's comeback", why: "One of the sport's defining stories of resilience." },
      { year: "2000", event: "Schumacher's first Ferrari title", why: "Ended a 21-year wait for a Ferrari drivers' championship." },
      { year: "2007", event: "Räikkönen wins the title", why: "Ferrari's most recent drivers' championship, decided at the final round." },
    ],
    lineup: [
      {
        name: "Charles Leclerc",
        number: "16",
        nationality: "Monegasque",
        note: "A Ferrari Driver Academy graduate who has raced for the team since 2019.",
      },
      {
        name: "Lewis Hamilton",
        number: "44",
        nationality: "British",
        note: "A seven-time world champion who joined Ferrari in 2025 after twelve seasons with Mercedes.",
      },
    ],
    facts: [
      { label: "Founded", value: "1929 (as Scuderia Ferrari)" },
      { label: "First F1 season", value: "1950" },
      { label: "Headquarters", value: "Maranello, Italy" },
      { label: "Distinction", value: "Only team present in every F1 season" },
    ],
  },

  mclaren: {
    tagline: "Innovation, sharpened by competition.",
    story: [
      "McLaren was founded by New Zealand driver Bruce McLaren in 1963 and entered Formula 1 in 1966. Bruce died testing a Can-Am car in 1970, but the team he built continued under Teddy Mayer.",
      "Under Ron Dennis from 1981, McLaren became a technical pacesetter: the MP4/1 introduced the carbon fibre monocoque, and the Honda-powered late-1980s cars of Ayrton Senna and Alain Prost dominated the sport.",
      "After championships with Mika Häkkinen and Lewis Hamilton, the team went through a long rebuild and returned to the front of the grid in the 2020s, winning the constructors' championship in 2024.",
    ],
    people: [
      {
        name: "Bruce McLaren",
        role: "Founder and driver",
        why: "Started the team in 1963 and gave it the engineering-led culture that still defines it.",
      },
      {
        name: "Ayrton Senna",
        role: "Driver, 1988–1993",
        why: "Won all three of his world championships with McLaren and became the team's most iconic driver.",
      },
      {
        name: "Alain Prost",
        role: "Driver, 1984–1989",
        why: "Won three titles with McLaren and formed one of the sport's most intense rivalries with Senna.",
      },
      {
        name: "Ron Dennis",
        role: "Team Principal, 1981–2009",
        why: "Professionalised the team and drove the technical programme behind its most successful decades.",
      },
    ],
    moments: [
      { year: "1966", event: "First Grand Prix entry", why: "Bruce McLaren started the team's F1 story as a driver-owner." },
      { year: "1981", event: "Carbon fibre monocoque", why: "The MP4/1 changed how every F1 car is built." },
      { year: "1988", event: "Senna and Prost dominate", why: "The MP4/4 won 15 of the season's 16 races." },
      { year: "1998", event: "Häkkinen's first title", why: "Returned McLaren to the top after a lean mid-1990s." },
      { year: "2024", event: "Constructors' championship", why: "Completed the team's long rebuild back to the front." },
    ],
    lineup: [
      {
        name: "Lando Norris",
        number: "4",
        nationality: "British",
        note: "A McLaren junior who has driven for the team since 2019 and became world champion in 2025.",
      },
      {
        name: "Oscar Piastri",
        number: "81",
        nationality: "Australian",
        note: "Joined McLaren in 2023 after winning titles in Formula Renault, Formula 3 and Formula 2.",
      },
    ],
    facts: [
      { label: "Founded", value: "1963" },
      { label: "First F1 season", value: "1966" },
      { label: "Headquarters", value: "Woking, United Kingdom" },
      { label: "Known for", value: "Introducing the carbon fibre chassis in 1981" },
    ],
  },

  "red-bull-racing": {
    tagline: "Racing built on relentless aerodynamic ambition.",
    story: [
      "Red Bull bought the Jaguar team ahead of the 2005 season, turning an underperforming operation into a race-winning organisation within a few years.",
      "With Adrian Newey's designs and Sebastian Vettel driving, the team won four consecutive drivers' and constructors' championships from 2010 to 2013.",
      "A second dominant era arrived with Max Verstappen, who won four consecutive drivers' titles from 2021, while the team built its own powertrains division for the new engine regulations.",
    ],
    people: [
      {
        name: "Adrian Newey",
        role: "Chief Technical Officer, 2006–2024",
        why: "Designed the cars behind both of the team's championship eras.",
      },
      {
        name: "Sebastian Vettel",
        role: "Driver, 2009–2014",
        why: "Won four consecutive world championships and made Red Bull a front-running team.",
      },
      {
        name: "Max Verstappen",
        role: "Driver, 2016–present",
        why: "Won on his debut for the team in 2016 and led its second championship dynasty.",
      },
      {
        name: "Christian Horner",
        role: "Team Principal, 2005–2025",
        why: "Ran the team from its first season through both title-winning eras.",
      },
    ],
    moments: [
      { year: "2005", event: "Team debuts", why: "Red Bull took over the Jaguar entry and entered F1 as a constructor." },
      { year: "2009", event: "First win", why: "Vettel won in China, signalling the team's arrival at the front." },
      { year: "2010", event: "First double championship", why: "Started four straight years of drivers' and constructors' titles." },
      { year: "2021", event: "Verstappen's first title", why: "Decided at the final round in Abu Dhabi." },
      { year: "2023", event: "Record-breaking season", why: "The team won 21 of the season's 22 Grands Prix." },
    ],
    lineup: [
      {
        name: "Max Verstappen",
        number: "1",
        nationality: "Dutch",
        note: "A four-time world champion who has raced for the team since 2016.",
      },
      {
        name: "Isack Hadjar",
        number: "6",
        nationality: "French",
        note: "A Red Bull junior promoted to the senior team after his rookie season with Racing Bulls.",
      },
    ],
    facts: [
      { label: "First F1 season", value: "2005" },
      { label: "Headquarters", value: "Milton Keynes, United Kingdom" },
      { label: "Racing licence", value: "Austrian" },
      { label: "Constructors' titles", value: "6 (2010–2013, 2022–2023)" },
    ],
  },

  "racing-bulls": {
    tagline: "Where the next generation earns its seat.",
    story: [
      "The Faenza-based team began life as Minardi in 1985, an independent Italian entry that spent two decades racing on modest budgets.",
      "Red Bull bought it in 2005 and renamed it Scuderia Toro Rosso. Sebastian Vettel gave the team a famous first win at Monza in 2008, and Pierre Gasly won again at the same circuit in 2020.",
      "Renamed several times, most recently as Racing Bulls, it continues as the proving ground for Red Bull's junior drivers.",
    ],
    people: [
      {
        name: "Giancarlo Minardi",
        role: "Founder of Minardi",
        why: "Created the original Faenza team and gave many young drivers their first F1 opportunity.",
      },
      {
        name: "Sebastian Vettel",
        role: "Driver, 2007–2008",
        why: "Took the team's first win at Monza in 2008, becoming F1's youngest race winner at the time.",
      },
      {
        name: "Pierre Gasly",
        role: "Driver, 2017–2020",
        why: "Won the 2020 Italian Grand Prix, the team's second victory.",
      },
      {
        name: "Franz Tost",
        role: "Team Principal, 2006–2023",
        why: "Led the team for its entire Toro Rosso era and oversaw the development of numerous junior drivers.",
      },
    ],
    moments: [
      { year: "1985", event: "Minardi enters F1", why: "The Faenza operation started as an independent Italian team." },
      { year: "2005", event: "Red Bull acquisition", why: "Reborn as Scuderia Toro Rosso and given a junior-team role." },
      { year: "2008", event: "Monza victory", why: "Vettel won from pole in the wet for the team's first win." },
      { year: "2020", event: "Monza again", why: "Gasly's win showed the team could still deliver on the biggest days." },
      { year: "2024", event: "Racing Bulls identity", why: "The team took its current name and branding." },
    ],
    lineup: [
      {
        name: "Liam Lawson",
        number: "30",
        nationality: "New Zealander",
        note: "A Red Bull junior with previous stand-in appearances before securing a full-time seat.",
      },
      {
        name: "Arvid Lindblad",
        nationality: "British",
        note: "A Red Bull junior graduate stepping up to Formula 1 with the team.",
      },
    ],
    facts: [
      { label: "Founded", value: "1985 (as Minardi)" },
      { label: "Headquarters", value: "Faenza, Italy" },
      { label: "Grand Prix wins", value: "2 (Italy 2008, Italy 2020)" },
      { label: "Role", value: "Red Bull junior team" },
    ],
  },

  alpine: {
    tagline: "A French works team with an English racing heart.",
    story: [
      "The Enstone factory has raced under many names. As Toleman it entered F1 in 1981 and gave Ayrton Senna his debut season in 1984; as Benetton it won the 1994 and 1995 drivers' titles with Michael Schumacher.",
      "Renault bought the team in 2000 and won drivers' and constructors' championships in 2005 and 2006 with Fernando Alonso.",
      "The operation was rebranded Alpine in 2021, aligning the F1 project with Renault's performance car brand.",
    ],
    people: [
      {
        name: "Fernando Alonso",
        role: "Driver, 2003–2006 and later spells",
        why: "Won both of the team's Renault-era world championships.",
      },
      {
        name: "Michael Schumacher",
        role: "Driver, 1991–1995 (Benetton)",
        why: "Won his first two world titles with the Enstone team.",
      },
      {
        name: "Flavio Briatore",
        role: "Team Principal across Benetton and Renault eras",
        why: "Led the team through both of its championship periods.",
      },
      {
        name: "Pat Symonds",
        role: "Engineer and technical leader",
        why: "A key technical figure at Enstone through its most successful seasons.",
      },
    ],
    moments: [
      { year: "1981", event: "Toleman enters F1", why: "The Enstone lineage begins." },
      { year: "1984", event: "Senna's debut season", why: "The team gave the future champion his first F1 drive." },
      { year: "1994", event: "Schumacher's first title", why: "Benetton's breakthrough championship." },
      { year: "2005", event: "Renault double title", why: "Alonso and the team beat Ferrari to both championships." },
      { year: "2021", event: "Alpine rebrand", why: "The works entry took on Renault's sports car identity." },
    ],
    lineup: [
      {
        name: "Pierre Gasly",
        number: "10",
        nationality: "French",
        note: "A French race winner leading the team's home-branded project since 2023.",
      },
      {
        name: "Franco Colapinto",
        number: "43",
        nationality: "Argentine",
        note: "Stepped up through the Alpine programme after a mid-season debut with Williams in 2024.",
      },
    ],
    facts: [
      { label: "Factory", value: "Enstone, United Kingdom" },
      { label: "First season at Enstone", value: "1981 (as Toleman)" },
      { label: "Racing licence", value: "French" },
      { label: "Constructors' titles", value: "4 (1995, 2005, 2006 and Benetton/Renault era)" },
    ],
  },

  haas: {
    tagline: "The lean American challenger.",
    story: [
      "Founded by American industrialist Gene Haas, the team entered Formula 1 in 2016 as the sport's first new constructor in several years.",
      "Its model is deliberately different: Haas buys as many permitted components as possible from Ferrari and works with Dallara on chassis production, keeping headcount low.",
      "Kevin Magnussen scored points on the team's debut in Australia, and Haas has since operated as a compact team fighting in the midfield.",
    ],
    people: [
      {
        name: "Gene Haas",
        role: "Founder and owner",
        why: "Funded and created the team, bringing an American constructor back to the F1 grid.",
      },
      {
        name: "Guenther Steiner",
        role: "Team Principal, 2016–2023",
        why: "Built the team from nothing and became one of the sport's best-known figures.",
      },
      {
        name: "Romain Grosjean",
        role: "Driver, 2016–2020",
        why: "Scored the team's first points on debut and survived a severe crash in Bahrain in 2020.",
      },
      {
        name: "Kevin Magnussen",
        role: "Driver, 2017–2020, 2022–2024",
        why: "The team's most experienced driver across two separate spells.",
      },
    ],
    moments: [
      { year: "2014", event: "Entry approved", why: "Haas secured a place on the F1 grid." },
      { year: "2016", event: "Points on debut", why: "Grosjean finished sixth in Australia in the team's first race." },
      { year: "2018", event: "Best constructors' finish", why: "Haas finished fifth in the championship." },
      { year: "2022", event: "First pole position", why: "Magnussen took pole in a wet qualifying session at Interlagos." },
      { year: "2024", event: "New leadership", why: "Ayao Komatsu took over as team principal." },
    ],
    lineup: [
      {
        name: "Esteban Ocon",
        number: "31",
        nationality: "French",
        note: "A Grand Prix winner who joined Haas in 2025 to lead its technical direction on track.",
      },
      {
        name: "Oliver Bearman",
        number: "87",
        nationality: "British",
        note: "A Ferrari Driver Academy member who impressed in stand-in appearances before joining full time.",
      },
    ],
    facts: [
      { label: "First F1 season", value: "2016" },
      { label: "Headquarters", value: "Kannapolis, United States" },
      { label: "European base", value: "Banbury, United Kingdom" },
      { label: "Model", value: "Maximum use of permitted customer components" },
    ],
  },

  audi: {
    tagline: "A manufacturer project built from the ground up.",
    story: [
      "The Hinwil factory entered Formula 1 as Sauber in 1993, an independent Swiss team founded by Peter Sauber that built a reputation for punching above its budget.",
      "It raced as BMW Sauber between 2006 and 2009, taking its only Grand Prix victory with Robert Kubica in Canada in 2008, and later returned to independent status.",
      "Audi acquired the operation and took over as a full works entry from 2026, developing its own power unit in Neuburg alongside the chassis programme in Switzerland.",
    ],
    people: [
      {
        name: "Peter Sauber",
        role: "Founder",
        why: "Created the Hinwil team and kept it competitive as an independent for decades.",
      },
      {
        name: "Robert Kubica",
        role: "Driver, 2006–2009",
        why: "Delivered the team's only Grand Prix win at Montreal in 2008.",
      },
      {
        name: "Kimi Räikkönen",
        role: "Driver, 2001, 2019–2021",
        why: "Made his F1 debut with Sauber and returned to finish his career there.",
      },
      {
        name: "Mattia Binotto",
        role: "Head of the Audi F1 project",
        why: "Leads the technical and operational build-up of the works programme.",
      },
    ],
    moments: [
      { year: "1993", event: "Sauber enters F1", why: "The Hinwil team joined the grid as a Swiss independent." },
      { year: "2006", event: "BMW takeover", why: "The team became a manufacturer entry for the first time." },
      { year: "2008", event: "Canadian Grand Prix win", why: "Kubica led a one-two, the team's only victory." },
      { year: "2010", event: "Return to independence", why: "BMW left and the team continued under the Sauber name." },
      { year: "2026", event: "Audi works entry", why: "A full manufacturer programme with its own power unit." },
    ],
    lineup: [
      {
        name: "Nico Hulkenberg",
        number: "27",
        nationality: "German",
        note: "A highly experienced German driver leading the works project's first season.",
      },
      {
        name: "Gabriel Bortoleto",
        number: "5",
        nationality: "Brazilian",
        note: "A Formula 3 and Formula 2 champion who reached F1 with the team in 2025.",
      },
    ],
    facts: [
      { label: "Chassis base", value: "Hinwil, Switzerland" },
      { label: "Power unit base", value: "Neuburg an der Donau, Germany" },
      { label: "Team lineage", value: "Sauber, F1 entrant since 1993" },
      { label: "Grand Prix wins", value: "1 (Canada 2008, as BMW Sauber)" },
    ],
  },

  williams: {
    tagline: "An independent name written into F1 history.",
    story: [
      "Frank Williams and Patrick Head founded Williams Grand Prix Engineering in 1977. The team won its first championships in the early 1980s and became one of the sport's great constructors.",
      "Through the 1980s and 1990s Williams won nine constructors' championships with drivers including Alan Jones, Nelson Piquet, Nigel Mansell, Alain Prost, Damon Hill and Jacques Villeneuve.",
      "After a long decline the team was sold in 2020 and is now rebuilding with new investment, leadership and infrastructure at Grove.",
    ],
    people: [
      {
        name: "Sir Frank Williams",
        role: "Founder and team principal",
        why: "Built the team from nothing and led it through every one of its championship seasons.",
      },
      {
        name: "Patrick Head",
        role: "Co-founder and technical director",
        why: "Designed and led the engineering behind the team's title-winning cars.",
      },
      {
        name: "Nigel Mansell",
        role: "Driver, 1985–1988, 1991–1992",
        why: "Won the 1992 world championship in the dominant Williams FW14B.",
      },
      {
        name: "Adrian Newey",
        role: "Chief designer, 1991–1996",
        why: "Designed the cars that delivered the team's most dominant seasons.",
      },
    ],
    moments: [
      { year: "1977", event: "Team founded", why: "Frank Williams and Patrick Head started the constructor." },
      { year: "1980", event: "First titles", why: "Alan Jones won the drivers' championship and the team its first constructors' title." },
      { year: "1992", event: "FW14B era", why: "Active suspension made the car the class of the field." },
      { year: "1997", event: "Last championship", why: "Villeneuve took the team's most recent drivers' title." },
      { year: "2020", event: "New ownership", why: "The Williams family stepped back and a rebuild began." },
    ],
    lineup: [
      {
        name: "Carlos Sainz",
        number: "55",
        nationality: "Spanish",
        note: "A multiple Grand Prix winner who joined Williams in 2025 after four seasons with Ferrari.",
      },
      {
        name: "Alexander Albon",
        number: "23",
        nationality: "Thai",
        note: "The team's established reference driver, with Williams since 2022.",
      },
    ],
    facts: [
      { label: "Founded", value: "1977" },
      { label: "Headquarters", value: "Grove, United Kingdom" },
      { label: "Constructors' titles", value: "9" },
      { label: "Drivers' titles", value: "7" },
    ],
  },

  "aston-martin": {
    tagline: "Green ambition, backed by serious investment.",
    story: [
      "The Silverstone team traces its modern lineage to Jordan Grand Prix, founded by Eddie Jordan and entering F1 in 1991, later racing as Midland, Spyker, Force India and Racing Point.",
      "As Force India the team became a respected midfield operation, and in 2020 Racing Point won the Sakhir Grand Prix with Sergio Perez.",
      "Lawrence Stroll's investment brought the Aston Martin name back to F1 in 2021, along with a new factory and wind tunnel at Silverstone.",
    ],
    people: [
      {
        name: "Eddie Jordan",
        role: "Founder of Jordan Grand Prix",
        why: "Created the team in 1991 and gave Michael Schumacher his F1 debut.",
      },
      {
        name: "Vijay Mallya",
        role: "Force India team owner",
        why: "Backed the team through its most competitive midfield years.",
      },
      {
        name: "Lawrence Stroll",
        role: "Executive Chairman",
        why: "Led the takeover and the investment programme behind the Aston Martin works project.",
      },
      {
        name: "Adrian Newey",
        role: "Managing Technical Partner",
        why: "Joined the team in 2025, bringing the sport's most successful design record.",
      },
    ],
    moments: [
      { year: "1991", event: "Jordan enters F1", why: "The Silverstone lineage begins." },
      { year: "1998", event: "Jordan's first win", why: "Damon Hill led a one-two at Spa." },
      { year: "2018", event: "Force India rescued", why: "New ownership saved the team from collapse mid-season." },
      { year: "2020", event: "Sakhir Grand Prix win", why: "Perez took the team's most recent victory." },
      { year: "2021", event: "Aston Martin returns", why: "The marque returned to F1 after more than 60 years." },
    ],
    lineup: [
      {
        name: "Fernando Alonso",
        number: "14",
        nationality: "Spanish",
        note: "A two-time world champion and the most experienced driver on the grid.",
      },
      {
        name: "Lance Stroll",
        number: "18",
        nationality: "Canadian",
        note: "An F1 race podium finisher who has been with the team since its Racing Point era.",
      },
    ],
    facts: [
      { label: "Team lineage", value: "Jordan, Midland, Spyker, Force India, Racing Point" },
      { label: "Headquarters", value: "Silverstone, United Kingdom" },
      { label: "Aston Martin era", value: "Since 2021" },
      { label: "Facility", value: "New factory and in-house wind tunnel" },
    ],
  },

  cadillac: {
    tagline: "America's newest entry on the world stage.",
    story: [
      "Cadillac joined the Formula 1 grid in 2026 as the sport's eleventh team, the result of a long entry process led by the American motorsport group behind the project.",
      "The programme is backed by General Motors, which is developing its own Formula 1 power unit for later in the regulation cycle while the team races with a customer supply at the start.",
      "For its debut the team chose experience over youth, pairing two drivers with more than a decade of Grand Prix racing between them.",
    ],
    people: [
      {
        name: "Mario Andretti",
        role: "Board member and 1978 world champion",
        why: "A central advocate for the entry and the last American to win the F1 drivers' title.",
      },
      {
        name: "Graeme Lowdon",
        role: "Team Principal",
        why: "An experienced F1 team leader brought in to run the new operation.",
      },
      {
        name: "Sergio Perez",
        role: "Driver",
        why: "A multiple Grand Prix winner giving the new team proven race-winning experience.",
      },
      {
        name: "Valtteri Bottas",
        role: "Driver",
        why: "A ten-time Grand Prix winner with extensive works-team development experience.",
      },
    ],
    moments: [
      { year: "2023", event: "Entry bid launched", why: "The American project formally applied to join the grid." },
      { year: "2024", event: "Entry accepted", why: "Formula 1 approved the eleventh team for 2026." },
      { year: "2025", event: "Driver line-up confirmed", why: "The team selected two experienced Grand Prix winners." },
      { year: "2026", event: "Championship debut", why: "Cadillac's first season as an F1 constructor." },
    ],
    lineup: [
      {
        name: "Sergio Perez",
        number: "11",
        nationality: "Mexican",
        note: "A multiple Grand Prix winner returning to the grid to lead a new project.",
      },
      {
        name: "Valtteri Bottas",
        number: "77",
        nationality: "Finnish",
        note: "A ten-time Grand Prix winner with years of front-running and development experience.",
      },
    ],
    facts: [
      { label: "First F1 season", value: "2026" },
      { label: "Backing", value: "General Motors / Cadillac" },
      { label: "Operations", value: "United States and United Kingdom" },
      { label: "Status", value: "The grid's eleventh team" },
    ],
  },
};