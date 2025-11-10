import { Location } from "@/types";

/**
 * Comprehensive Quest Diagnostics Locations
 * Data sourced from Google Maps
 * Total locations: 195
 * Last updated: 2025-11-10
 */

const questLocationsData: Omit<Location, "id">[] = [
  {
    "name": "Quest Diagnostics St. Vincent's 119 - Employer Drug Testing Not Offered",
    "address": "7191 Cahaba Valley Rd #104",
    "city": "Birmingham",
    "state": "AL",
    "zip": "35242",
    "latitude": 33.4239375,
    "longitude": -86.6693125,
    "rating": 1,
    "phone": "+1 205-552-2655",
    "hours": {
      "Monday": "7:30 am–12 pm, 1–4:30 pm",
      "Tuesday": "7:30 am–12 pm, 1–4:30 pm",
      "Wednesday": "7:30 am–12 pm, 1–4:30 pm",
      "Thursday": "7:30 am–12 pm, 1–4:30 pm",
      "Friday": "7:30 am–12 pm, 1–4:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "6140A University Dr NW",
    "city": "Huntsville",
    "state": "AL",
    "zip": "35806",
    "latitude": 34.7470625,
    "longitude": -86.6756875,
    "rating": 3.9,
    "phone": "+1 256-217-4819"
  },
  {
    "name": "Quest Diagnostics",
    "address": "300 Towncenter Blvd D",
    "city": "Tuscaloosa",
    "state": "AL",
    "zip": "35406",
    "latitude": 33.2339375,
    "longitude": -87.5359375,
    "rating": 2.9,
    "phone": "+1 205-752-2112"
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "865 S Watson Rd Suite 112",
    "city": "Buckeye",
    "state": "AZ",
    "zip": "85326",
    "latitude": 33.4386875,
    "longitude": -112.5549375,
    "rating": 3.3,
    "phone": "+1 480-214-5334",
    "hours": {
      "Monday": "6 am–3 pm",
      "Tuesday": "6 am–3 pm",
      "Wednesday": "6 am–3 pm",
      "Thursday": "6 am–3 pm",
      "Friday": "6 am–3 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Q-Lab Arizona Outdoor & Accelerated Testing",
    "address": "24742 Durango St",
    "city": "Buckeye",
    "state": "AZ",
    "zip": "85326",
    "latitude": 33.4303125,
    "longitude": -112.5840625,
    "rating": 5,
    "phone": "+1 623-386-5140",
    "hours": {
      "Monday": "8:30 am–5 pm",
      "Tuesday": "8:30 am–5 pm",
      "Wednesday": "8:30 am–5 pm",
      "Thursday": "8:30 am–5 pm",
      "Friday": "8:30 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "2081 W Frye Rd Ste 107",
    "city": "Chandler",
    "state": "AZ",
    "zip": "85224",
    "latitude": 33.2976875,
    "longitude": -111.8781875,
    "rating": 2.6,
    "phone": "+1 480-814-8066",
    "hours": {
      "Monday": "6 am–3 pm",
      "Tuesday": "6 am–3 pm",
      "Wednesday": "6 am–3 pm",
      "Thursday": "6 am–3 pm",
      "Friday": "6 am–3 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "1060 E Ray Rd",
    "city": "Chandler",
    "state": "AZ",
    "zip": "85225",
    "latitude": 33.3219375,
    "longitude": -111.8221875,
    "rating": 3.2,
    "phone": "+1 480-857-4877",
    "hours": {
      "Monday": "8 am–12 pm, 1–4:30 pm",
      "Tuesday": "8 am–12 pm, 1–4:30 pm",
      "Wednesday": "8 am–12 pm, 1–4:30 pm",
      "Thursday": "8 am–12 pm, 1–4:30 pm",
      "Friday": "8 am–12 pm, 1–4:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories Banner",
    "address": "2940 E Banner Gateway Dr #325",
    "city": "Gilbert",
    "state": "AZ",
    "zip": "85234",
    "latitude": 33.3841875,
    "longitude": -111.7256875,
    "rating": 2.5,
    "phone": "+1 480-543-2460",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest",
    "address": "3530 S Val Vista Dr #206",
    "city": "Gilbert",
    "state": "AZ",
    "zip": "85297",
    "latitude": 33.2860625,
    "longitude": -111.7574375,
    "rating": 3.1,
    "phone": "+1 480-722-2738",
    "hours": {
      "Monday": "6 am–3 pm",
      "Tuesday": "6 am–3 pm",
      "Wednesday": "6 am–3 pm",
      "Thursday": "6 am–3 pm",
      "Friday": "6 am–3 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "9980 W Glendale Ave #120",
    "city": "Glendale",
    "state": "AZ",
    "zip": "85307",
    "latitude": 33.5375625,
    "longitude": -112.2758125,
    "rating": 2.9,
    "phone": "+1 623-877-2297",
    "hours": {
      "Monday": "6:30 am–3 pm",
      "Tuesday": "6:30 am–3 pm",
      "Wednesday": "6:30 am–3 pm",
      "Thursday": "6:30 am–3 pm",
      "Friday": "6:30 am–3 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Walmart-Quest_GLENDALE_GLENDALE_P0641",
    "address": "7450 W Glendale Ave",
    "city": "Glendale",
    "state": "AZ",
    "zip": "85303",
    "latitude": 33.5393125,
    "longitude": -112.2186875,
    "rating": 4.3,
    "phone": "+1 866-697-8378",
    "hours": {
      "Monday": "Closed",
      "Tuesday": "8–9 am",
      "Wednesday": "Closed",
      "Thursday": "8–9 am",
      "Friday": "Closed",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest diagnostics",
    "address": "6320 W Union Hills Dr SUITE A265",
    "city": "Glendale",
    "state": "AZ",
    "zip": "85308",
    "latitude": 33.6553125,
    "longitude": -112.1990625
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "9890 Estrella Pkwy",
    "city": "Goodyear",
    "state": "AZ",
    "zip": "85338",
    "latitude": 33.3576875,
    "longitude": -112.4284375,
    "rating": 4.1,
    "phone": "+1 623-386-1676",
    "hours": {
      "Monday": "7 am–3:30 pm",
      "Tuesday": "7 am–3:30 pm",
      "Wednesday": "7 am–3:30 pm",
      "Thursday": "7 am–3:30 pm",
      "Friday": "7 am–3:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Walmart-Quest_GOODYEAR_P0632",
    "address": "14200 W Indian School Rd",
    "city": "Goodyear",
    "state": "AZ",
    "zip": "85395",
    "latitude": 33.4871875,
    "longitude": -112.3641875,
    "rating": 5,
    "phone": "+1 866-697-8378",
    "hours": {
      "Monday": "Closed",
      "Tuesday": "8–9 am",
      "Wednesday": "Closed",
      "Thursday": "8–9 am",
      "Friday": "Closed",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "1225 W Guadalupe Rd",
    "city": "Mesa",
    "state": "AZ",
    "zip": "85202",
    "latitude": 33.3630625,
    "longitude": -111.8596875,
    "rating": 3.7,
    "phone": "+1 480-534-5886",
    "hours": {
      "Monday": "6–11 am, 12–3 pm",
      "Tuesday": "6–11 am, 11:30 am–3 pm",
      "Wednesday": "6–11 am, 12–3 pm",
      "Thursday": "6–11 am, 12–3 pm",
      "Friday": "6–11 am, 12–3 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "2345 E Southern Ave #101",
    "city": "Mesa",
    "state": "AZ",
    "zip": "85204",
    "latitude": 33.3933125,
    "longitude": -111.7803125,
    "rating": 3.4,
    "phone": "+1 480-550-5131",
    "hours": {
      "Monday": "6 am–3 pm",
      "Tuesday": "6 am–3 pm",
      "Wednesday": "6 am–3 pm",
      "Thursday": "6 am–3 pm",
      "Friday": "6 am–3 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Walmart-Quest_MESA_LINDSAY_P0638",
    "address": "1916 S Lindsay Rd",
    "city": "Mesa",
    "state": "AZ",
    "zip": "85204",
    "latitude": 33.3803125,
    "longitude": -111.7728125,
    "phone": "+1 866-697-8378",
    "hours": {
      "Monday": "Closed",
      "Tuesday": "8–9 am",
      "Wednesday": "Closed",
      "Thursday": "8–9 am",
      "Friday": "Closed",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "7757 W Deer Valley Rd #265",
    "city": "Peoria",
    "state": "AZ",
    "zip": "85382",
    "latitude": 33.6799375,
    "longitude": -112.2261875,
    "rating": 3.4,
    "phone": "+1 623-362-3410",
    "hours": {
      "Monday": "7 am–12 pm, 1–4 pm",
      "Tuesday": "7 am–12 pm, 1–4 pm",
      "Wednesday": "7 am–12 pm, 1–4 pm",
      "Thursday": "7 am–12 pm, 1–4 pm",
      "Friday": "7 am–12 pm, 1–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Walmart-Quest_PEORIA_P0635",
    "address": "7421 W Thunderbird Rd",
    "city": "Peoria",
    "state": "AZ",
    "zip": "85381",
    "latitude": 33.6091875,
    "longitude": -112.2184375,
    "phone": "+1 866-697-8378",
    "hours": {
      "Monday": "Closed",
      "Tuesday": "8–9 am",
      "Wednesday": "Closed",
      "Thursday": "8–9 am",
      "Friday": "Closed",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "926 E McDowell Rd UNIT 122",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85006",
    "latitude": 33.4660625,
    "longitude": -112.0610625,
    "rating": 2.8,
    "phone": "+1 602-612-3607",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "3805 E Bell Rd #1500",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85032",
    "latitude": 33.6403125,
    "longitude": -111.9999375,
    "rating": 3.1,
    "phone": "+1 602-493-7133",
    "hours": {
      "Monday": "6 am–3 pm",
      "Tuesday": "6 am–3 pm",
      "Wednesday": "6 am–3 pm",
      "Thursday": "6 am–3 pm",
      "Friday": "6 am–3 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "3132 E Camelback Rd",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85016",
    "latitude": 33.5115625,
    "longitude": -112.0143125,
    "rating": 3.1,
    "phone": "+1 602-281-6290",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "5111 N Scottsdale Rd Suite 160",
    "city": "Scottsdale",
    "state": "AZ",
    "zip": "85250",
    "latitude": 33.5118125,
    "longitude": -111.9254375,
    "rating": 3.1,
    "phone": "+1 480-825-7753",
    "hours": {
      "Monday": "8 am–5 pm",
      "Tuesday": "8 am–5 pm",
      "Wednesday": "8 am–5 pm",
      "Thursday": "8 am–5 pm",
      "Friday": "8 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "21803 N Scottsdale Rd #A-210",
    "city": "Scottsdale",
    "state": "AZ",
    "zip": "85255",
    "latitude": 33.6846875,
    "longitude": -111.9245625,
    "rating": 3.4,
    "phone": "+1 480-342-9950",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "32551 N Scottsdale Rd",
    "city": "Scottsdale",
    "state": "AZ",
    "zip": "85266",
    "latitude": 33.7810625,
    "longitude": -111.9224375,
    "rating": 3.6,
    "phone": "+1 480-488-7457",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "quest diagnostics",
    "address": "9445 E Ironwood Square Dr # 110",
    "city": "Scottsdale",
    "state": "AZ",
    "zip": "85258",
    "latitude": 33.5775625,
    "longitude": -111.8775625
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "15331 W Bell Rd STE 110",
    "city": "Surprise",
    "state": "AZ",
    "zip": "85374",
    "latitude": 33.6376875,
    "longitude": -112.3901875,
    "rating": 2.8,
    "phone": "+1 623-584-0161",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "2000 E Southern Ave #101",
    "city": "Tempe",
    "state": "AZ",
    "zip": "85282",
    "latitude": 33.3934375,
    "longitude": -111.9001875,
    "rating": 2.8,
    "phone": "+1 480-839-6638",
    "hours": {
      "Monday": "6 am–4 pm",
      "Tuesday": "6 am–4 pm",
      "Wednesday": "6 am–4 pm",
      "Thursday": "6 am–4 pm",
      "Friday": "6 am–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "1925 W Orange Grove Rd STE 100",
    "city": "Tucson",
    "state": "AZ",
    "zip": "85704",
    "latitude": 32.3226875,
    "longitude": -111.0083125,
    "rating": 2.9,
    "phone": "+1 520-297-7526",
    "hours": {
      "Monday": "6 am–5 pm",
      "Tuesday": "6 am–5 pm",
      "Wednesday": "6 am–5 pm",
      "Thursday": "6 am–5 pm",
      "Friday": "6 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "6360 E Golf Links Rd",
    "city": "Tucson",
    "state": "AZ",
    "zip": "85730",
    "latitude": 32.1905625,
    "longitude": -110.8559375,
    "rating": 3.6,
    "phone": "+1 520-647-2071",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "603 N Wilmot Rd #141",
    "city": "Tucson",
    "state": "AZ",
    "zip": "85711",
    "latitude": 32.2295625,
    "longitude": -110.8585625,
    "rating": 3.1,
    "phone": "+1 520-296-0426",
    "hours": {
      "Monday": "8 am–5 pm",
      "Tuesday": "8 am–5 pm",
      "Wednesday": "8 am–5 pm",
      "Thursday": "8 am–5 pm",
      "Friday": "8 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Sonora Quest Laboratories",
    "address": "2270 Ridgeview Dr Ste 301",
    "city": "Yuma",
    "state": "AZ",
    "zip": "85364",
    "latitude": 32.6860625,
    "longitude": -114.6386875,
    "rating": 3.2,
    "phone": "+1 928-782-1684",
    "hours": {
      "Monday": "6 am–4 pm",
      "Tuesday": "6 am–4 pm",
      "Wednesday": "6 am–4 pm",
      "Thursday": "6 am–4 pm",
      "Friday": "6 am–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Imaging - Stockdale",
    "address": "9602 Stockdale Hwy",
    "city": "Bakersfield",
    "state": "CA",
    "zip": "93311",
    "latitude": 35.3554375,
    "longitude": -119.1091875,
    "rating": 4.8,
    "phone": "+1 661-633-5000",
    "hours": {
      "Monday": "8 am–5 pm",
      "Tuesday": "8 am–5 pm",
      "Wednesday": "8 am–5 pm",
      "Thursday": "8 am–5 pm",
      "Friday": "8 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "3439 Via Montebello",
    "city": "Carlsbad",
    "state": "CA",
    "zip": "92009",
    "latitude": 33.0815625,
    "longitude": -117.2320625,
    "rating": 2.7,
    "phone": "+1 442-232-0579"
  },
  {
    "name": "Quest Diagnostics Carlsbad Camino De Los Coches - Employer Drug Testing Not Offered",
    "address": "3257 Camino De Los Coches Ste 201",
    "city": "Carlsbad",
    "state": "CA",
    "zip": "92009",
    "latitude": 33.0759375,
    "longitude": -117.2390625,
    "rating": 2.5,
    "phone": "+1 760-632-8464"
  },
  {
    "name": "Quest Diagnostics Chino Philadelphia St",
    "address": "5562 Philadelphia St Ste 206",
    "city": "Chino",
    "state": "CA",
    "zip": "91710",
    "latitude": 34.0344375,
    "longitude": -117.6836875,
    "rating": 3.6,
    "phone": "+1 909-203-2625",
    "hours": {
      "Monday": "7 am–1 pm",
      "Tuesday": "7 am–1 pm",
      "Wednesday": "7 am–1 pm",
      "Thursday": "7 am–1 pm",
      "Friday": "7 am–1 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Clovis - West Bullard",
    "address": "255 W Bullard Ave #107",
    "city": "Clovis",
    "state": "CA",
    "zip": "93612",
    "latitude": 36.8234375,
    "longitude": -119.7149375,
    "rating": 2.8,
    "phone": "+1 866-697-8378"
  },
  {
    "name": "Quest Diagnostics",
    "address": "308 W 6th St Suite 201",
    "city": "Corona",
    "state": "CA",
    "zip": "92882",
    "latitude": 33.8744375,
    "longitude": -117.5696875,
    "rating": 3,
    "phone": "+1 951-415-5610",
    "hours": {
      "Monday": "7 am–4:30 pm",
      "Tuesday": "7 am–4:30 pm",
      "Wednesday": "7 am–4:30 pm",
      "Thursday": "7 am–4:30 pm",
      "Friday": "7 am–4:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "12730 Heacock St Ste 2",
    "city": "Moreno Valley",
    "state": "CA",
    "zip": "92553",
    "latitude": 33.9356875,
    "longitude": -117.2434375,
    "rating": 3.5,
    "phone": "+1 951-208-5470"
  },
  {
    "name": "Quest Diagnostics, Scott Rd",
    "address": "33050 Antelope Rd #204",
    "city": "Murrieta",
    "state": "CA",
    "zip": "92563",
    "latitude": 33.6391875,
    "longitude": -117.1669375,
    "rating": 3.7,
    "phone": "+1 951-954-2424",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "1701 N Lombard St suite 106",
    "city": "Oxnard",
    "state": "CA",
    "zip": "93030",
    "latitude": 34.2169375,
    "longitude": -119.1500625,
    "rating": 4,
    "phone": "+1 805-263-5778",
    "hours": {
      "Monday": "5:30 am–3:30 pm",
      "Tuesday": "5:30 am–3:30 pm",
      "Wednesday": "5:30 am–3:30 pm",
      "Thursday": "5:30 am–3:30 pm",
      "Friday": "5:30 am–3:30 pm",
      "Saturday": "7:30–11:30 am",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Oxnard Saviers",
    "address": "2600 Saviers Rd",
    "city": "Oxnard",
    "state": "CA",
    "zip": "93033",
    "latitude": 34.1759375,
    "longitude": -119.1773125,
    "rating": 3.9,
    "phone": "+1 805-417-7622",
    "hours": {
      "Monday": "6:30 am–3:30 pm",
      "Tuesday": "6:30 am–3:30 pm",
      "Wednesday": "6:30 am–3:30 pm",
      "Thursday": "6:30 am–3:30 pm",
      "Friday": "6:30 am–3:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "3650 S Bristol St",
    "city": "Santa Ana",
    "state": "CA",
    "zip": "92704",
    "latitude": 33.6983125,
    "longitude": -117.8866875,
    "rating": 4.1,
    "phone": "+1 866-697-8378",
    "hours": {
      "Monday": "7–11 am, 12–3:30 pm",
      "Tuesday": "7–11 am, 12–3:30 pm",
      "Wednesday": "7–11 am, 12–3:30 pm",
      "Thursday": "7–11 am, 12–3:30 pm",
      "Friday": "7–11 am, 12–3:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "7561 W 80th Ave",
    "city": "Arvada",
    "state": "CO",
    "zip": "80003",
    "latitude": 39.8435625,
    "longitude": -105.0804375,
    "rating": 3.6,
    "phone": "+1 720-417-3429",
    "hours": {
      "Monday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Tuesday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Wednesday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Thursday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Friday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "1411 S Potomac St Ste 290",
    "city": "Aurora",
    "state": "CO",
    "zip": "80012",
    "latitude": 39.6910625,
    "longitude": -104.8326875,
    "rating": 3.2,
    "phone": "+1 303-283-0838",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "7 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "18730 E Hampden Ave",
    "city": "Aurora",
    "state": "CO",
    "zip": "80013",
    "latitude": 39.6513125,
    "longitude": -104.7698125,
    "rating": 4.1,
    "phone": "+1 303-358-4641",
    "hours": {
      "Monday": "7 am–12 pm, 1–4 pm",
      "Tuesday": "7 am–12 pm, 1–4 pm",
      "Wednesday": "7 am–12 pm, 1–4 pm",
      "Thursday": "7 am–12 pm, 1–4 pm",
      "Friday": "7 am–12 pm, 1–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "2798 Arapahoe Ave",
    "city": "Boulder",
    "state": "CO",
    "zip": "80302",
    "latitude": 40.0133125,
    "longitude": -105.2595625,
    "rating": 3.5,
    "phone": "+1 303-328-1952",
    "hours": {
      "Monday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Tuesday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Wednesday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Thursday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Friday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "7375 E Arapahoe Rd",
    "city": "Centennial",
    "state": "CO",
    "zip": "80112",
    "latitude": 39.5963125,
    "longitude": -104.9033125,
    "rating": 3.8,
    "phone": "+1 303-386-2060",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "6140 Tutt Blvd Ste 130",
    "city": "Colorado Springs",
    "state": "CO",
    "zip": "80923",
    "latitude": 38.9201875,
    "longitude": -104.7180625,
    "rating": 3,
    "phone": "+1 719-637-7997",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "7 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "1380 E Fillmore St Ste 110",
    "city": "Colorado Springs",
    "state": "CO",
    "zip": "80907",
    "latitude": 38.8738125,
    "longitude": -104.7999375,
    "rating": 3.3,
    "phone": "+1 719-465-1593",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "1815 Jet Wing Dr Ste 150",
    "city": "Colorado Springs",
    "state": "CO",
    "zip": "80916",
    "latitude": 38.8070625,
    "longitude": -104.7400625,
    "rating": 2.9,
    "phone": "+1 719-367-4055",
    "hours": {
      "Monday": "8 am–5 pm",
      "Tuesday": "8 am–5 pm",
      "Wednesday": "8 am–5 pm",
      "Thursday": "8 am–5 pm",
      "Friday": "8 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "695 S Broadway",
    "city": "Denver",
    "state": "CO",
    "zip": "80209",
    "latitude": 39.7044375,
    "longitude": -104.9888125,
    "rating": 3,
    "phone": "+1 303-482-5232",
    "hours": {
      "Monday": "7 am–4:30 pm",
      "Tuesday": "7 am–4:30 pm",
      "Wednesday": "7 am–4:30 pm",
      "Thursday": "7 am–4:30 pm",
      "Friday": "7 am–4:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "4500 E 9th Ave #160",
    "city": "Denver",
    "state": "CO",
    "zip": "80220",
    "latitude": 39.7308125,
    "longitude": -104.9343125,
    "rating": 3.3,
    "phone": "+1 303-393-1020",
    "hours": {
      "Monday": "7:30 am–4:30 pm",
      "Tuesday": "7:30 am–4:30 pm",
      "Wednesday": "7:30 am–4:30 pm",
      "Thursday": "7:30 am–4:30 pm",
      "Friday": "7:30 am–4:30 pm",
      "Saturday": "7 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "1426 E Harmony Rd",
    "city": "Fort Collins",
    "state": "CO",
    "zip": "80525",
    "latitude": 40.5250625,
    "longitude": -105.0519375,
    "rating": 3.4,
    "phone": "+1 970-596-8533",
    "hours": {
      "Monday": "7–11:30 am, 12–3:30 pm",
      "Tuesday": "7–11:30 am, 12–3:30 pm",
      "Wednesday": "7–11:30 am, 12–3:30 pm",
      "Thursday": "7–11:30 am, 12–3:30 pm",
      "Friday": "7–11:30 am, 12–3:30 pm",
      "Saturday": "8 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "4548 Centerplace Dr",
    "city": "Greeley",
    "state": "CO",
    "zip": "80634",
    "latitude": 40.3943125,
    "longitude": -104.7526875,
    "rating": 3.2,
    "phone": "+1 970-216-3299",
    "hours": {
      "Monday": "7 am–12 pm, 1–4 pm",
      "Tuesday": "7 am–12 pm, 1–4 pm",
      "Wednesday": "7 am–12 pm, 1–4 pm",
      "Thursday": "7 am–12 pm, 1–4 pm",
      "Friday": "7 am–12 pm, 1–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "11088 W Jewell Ave",
    "city": "Lakewood",
    "state": "CO",
    "zip": "80232",
    "latitude": 39.6813125,
    "longitude": -105.1226875,
    "rating": 4.1,
    "phone": "+1 303-345-4220",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "100 E 120th Ave f130",
    "city": "Northglenn",
    "state": "CO",
    "zip": "80233",
    "latitude": 39.9124375,
    "longitude": -104.9870625,
    "rating": 3.7,
    "phone": "+1 720-403-7638",
    "hours": {
      "Monday": "7:30 am–5 pm",
      "Tuesday": "7:30 am–5 pm",
      "Wednesday": "7:30 am–5 pm",
      "Thursday": "7:30 am–5 pm",
      "Friday": "7:30 am–5 pm",
      "Saturday": "8 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "1600 N Grand Ave Ste 139",
    "city": "Pueblo",
    "state": "CO",
    "zip": "81003",
    "latitude": 38.2819375,
    "longitude": -104.6109375,
    "rating": 4.7,
    "phone": "+1 719-500-1908",
    "hours": {
      "Monday": "7 am–12 pm, 1–4 pm",
      "Tuesday": "7 am–12 pm, 1–4 pm",
      "Wednesday": "7 am–12 pm, 1–4 pm",
      "Thursday": "7 am–12 pm, 1–4 pm",
      "Friday": "7 am–12 pm, 1–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "1601 Coalton Rd",
    "city": "Superior",
    "state": "CO",
    "zip": "80027",
    "latitude": 39.9293125,
    "longitude": -105.1488125,
    "rating": 2.6,
    "phone": "+1 303-494-4940",
    "hours": {
      "Monday": "7 am–12:30 pm, 1:30–4 pm",
      "Tuesday": "7 am–12:30 pm, 1:30–4 pm",
      "Wednesday": "7 am–12:30 pm, 1:30–4 pm",
      "Thursday": "7 am–12:30 pm, 1:30–4 pm",
      "Friday": "7 am–12:30 pm, 1:30–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Thornton PSC",
    "address": "3250 E 104th Ave",
    "city": "Thornton",
    "state": "CO",
    "zip": "80233",
    "latitude": 39.8839375,
    "longitude": -104.9491875,
    "rating": 5,
    "phone": "+1 866-697-8378"
  },
  {
    "name": "Quest Diagnostics Inside Westminster Safeway Store",
    "address": "7353 Federal Blvd",
    "city": "Westminster",
    "state": "CO",
    "zip": "80030",
    "latitude": 39.8296875,
    "longitude": -105.0274375,
    "rating": 2.7,
    "phone": "+1 866-697-8378"
  },
  {
    "name": "Quest Diagnostics Incorporated",
    "address": "8400 Alcott St",
    "city": "Westminster",
    "state": "CO",
    "zip": "80031",
    "latitude": 39.8495625,
    "longitude": -105.0163125,
    "phone": "+1 303-429-7949"
  },
  {
    "name": "Quest Diagnostics",
    "address": "4695 Main St",
    "city": "Bridgeport",
    "state": "CT",
    "zip": "06606",
    "latitude": 41.2241875,
    "longitude": -73.2196875,
    "rating": 3.1,
    "phone": "+1 475-988-0511"
  },
  {
    "name": "Quest Diagnostics",
    "address": "85 Seymour St Ste 215",
    "city": "Hartford",
    "state": "CT",
    "zip": "06106",
    "latitude": 41.7546875,
    "longitude": -72.6810625,
    "rating": 4,
    "phone": "+1 860-200-7484",
    "hours": {
      "Monday": "7 am–5 pm",
      "Tuesday": "7 am–5 pm",
      "Wednesday": "7 am–5 pm",
      "Thursday": "7 am–5 pm",
      "Friday": "7 am–5 pm",
      "Saturday": "7 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Stamford",
    "address": "1250 Summer St Ste 206",
    "city": "Stamford",
    "state": "CT",
    "zip": "06905",
    "latitude": 41.0615625,
    "longitude": -73.5419375,
    "rating": 2.3,
    "hours": {
      "Monday": "6 am–5 pm",
      "Tuesday": "6 am–5 pm",
      "Wednesday": "6 am–5 pm",
      "Thursday": "6 am–5 pm",
      "Friday": "6 am–5 pm",
      "Saturday": "7 am–1 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "21653 FL-7",
    "city": "Boca Raton",
    "state": "FL",
    "zip": "33428",
    "latitude": 26.3545625,
    "longitude": -80.2048125,
    "rating": 3.4,
    "phone": "+1 561-470-7137",
    "hours": {
      "Monday": "6:30 am–3:30 pm",
      "Tuesday": "6:30 am–3:30 pm",
      "Wednesday": "6:30 am–3:30 pm",
      "Thursday": "6:30 am–3:30 pm",
      "Friday": "6:30 am–3:30 pm",
      "Saturday": "7–11 am",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Lab",
    "address": "1219 Cleveland St",
    "city": "Clearwater",
    "state": "FL",
    "zip": "33755",
    "latitude": 27.9655625,
    "longitude": -82.7865625,
    "rating": 4.5
  },
  {
    "name": "Quest Diagnostics Walmart-Quest_MIAMI GARDENS",
    "address": "3791 NW 167th St",
    "city": "Miami Gardens",
    "state": "FL",
    "zip": "33055",
    "latitude": 25.9266875,
    "longitude": -80.2621875,
    "phone": "+1 866-697-8378"
  },
  {
    "name": "Quest Diagnostics",
    "address": "10200 Commerce Pkwy",
    "city": "Miramar",
    "state": "FL",
    "zip": "33025",
    "latitude": 25.9721875,
    "longitude": -80.2833125,
    "rating": 4,
    "phone": "+1 305-829-9977",
    "hours": {
      "Monday": "6 am–2 pm",
      "Tuesday": "6 am–2 pm",
      "Wednesday": "6 am–2 pm",
      "Thursday": "6 am–2 pm",
      "Friday": "6 am–2 pm",
      "Saturday": "6:30–10:30 am",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Orlando - Mills",
    "address": "1430 N Mills Ave #140",
    "city": "Orlando",
    "state": "FL",
    "zip": "32803",
    "latitude": 28.5643125,
    "longitude": -81.3651875,
    "rating": 3.9,
    "phone": "+1 407-815-6563",
    "hours": {
      "Monday": "6:30 am–3:30 pm",
      "Tuesday": "6:30 am–3:30 pm",
      "Wednesday": "6:30 am–3:30 pm",
      "Thursday": "6:30 am–3:30 pm",
      "Friday": "6:30 am–3:30 pm",
      "Saturday": "7–11 am",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "21 Hospital Dr Suite 265",
    "city": "Palm Coast",
    "state": "FL",
    "zip": "32164",
    "latitude": 29.4798125,
    "longitude": -81.1926875,
    "rating": 2.6,
    "phone": "+1 386-586-3364"
  },
  {
    "name": "Quest Diagnostics Plantation",
    "address": "1867 N Pine Island Rd",
    "city": "Plantation",
    "state": "FL",
    "zip": "33322",
    "latitude": 26.1488125,
    "longitude": -80.2703125,
    "rating": 3.1,
    "phone": "+1 866-697-8378",
    "hours": {
      "Monday": "6 am–4 pm",
      "Tuesday": "6 am–4 pm",
      "Wednesday": "6 am–4 pm",
      "Thursday": "6 am–4 pm",
      "Friday": "6 am–4 pm",
      "Saturday": "6:30–11 am",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "7019 W Broward Blvd",
    "city": "Plantation",
    "state": "FL",
    "zip": "33317",
    "latitude": 26.1215625,
    "longitude": -80.2424375,
    "rating": 2.4,
    "phone": "+1 786-742-8023"
  },
  {
    "name": "Quest Diagnostics",
    "address": "100 NW 82nd Ave suite 403",
    "city": "Plantation",
    "state": "FL",
    "zip": "33324",
    "latitude": 26.1226875,
    "longitude": -80.2576875,
    "rating": 2.9,
    "phone": "+1 954-382-9246"
  },
  {
    "name": "Quest Diagnostics",
    "address": "1400 South Goldtree Dr STE 106",
    "city": "Port St. Lucie",
    "state": "FL",
    "zip": "34952",
    "latitude": 27.2835625,
    "longitude": -80.2949375,
    "rating": 4.2,
    "phone": "+1 772-398-8019",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "7 am–2 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "12651 W Sunrise Blvd Ste 302",
    "city": "Sunrise",
    "state": "FL",
    "zip": "33323",
    "latitude": 26.1459375,
    "longitude": -80.3211875,
    "rating": 2.8,
    "phone": "+1 786-742-7951"
  },
  {
    "name": "Quest Diagnostics",
    "address": "1594 Capital Cir NW #1",
    "city": "Tallahassee",
    "state": "FL",
    "zip": "32303",
    "latitude": 30.4718125,
    "longitude": -84.3624375,
    "rating": 3.3,
    "phone": "+1 850-574-3012",
    "hours": {
      "Monday": "6:30 am–3:30 pm",
      "Tuesday": "6:30 am–3:30 pm",
      "Wednesday": "6:30 am–3:30 pm",
      "Thursday": "6:30 am–3:30 pm",
      "Friday": "6:30 am–3:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics St Joseph's Doctors - Employer Drug Testing Not Offered",
    "address": "5667 Peachtree Dunwoody Rd Ste 190",
    "city": "Atlanta",
    "state": "GA",
    "zip": "30342",
    "latitude": 33.9094375,
    "longitude": -84.3506875,
    "rating": 1.9,
    "phone": "+1 404-255-0469",
    "hours": {
      "Monday": "8 am–5 pm",
      "Tuesday": "8 am–5 pm",
      "Wednesday": "8 am–5 pm",
      "Thursday": "8 am–5 pm",
      "Friday": "8 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Augusta",
    "address": "1109 Medical Center Dr #2A",
    "city": "Augusta",
    "state": "GA",
    "zip": "30909",
    "latitude": 33.4836875,
    "longitude": -82.0928125,
    "rating": 1,
    "phone": "+1 706-447-4059"
  },
  {
    "name": "Quest Diagnostics",
    "address": "4100 Riverside Dr Ste 140",
    "city": "Macon",
    "state": "GA",
    "zip": "31210",
    "latitude": 32.9071875,
    "longitude": -83.6944375,
    "rating": 3.9,
    "phone": "+1 478-342-2628"
  },
  {
    "name": "Diagnostic Laboratory Services, Inc.",
    "address": "1441 Kapiolani Blvd # 510",
    "city": "Honolulu",
    "state": "HI",
    "zip": "96814",
    "latitude": 21.2926875,
    "longitude": -157.8430625,
    "rating": 3.9,
    "phone": "+1 808-945-3124",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "7 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Diagnostic Laboratory Services, Inc.",
    "address": "1481 S King St #104",
    "city": "Honolulu",
    "state": "HI",
    "zip": "96814",
    "latitude": 21.2975625,
    "longitude": -157.8384375,
    "rating": 4.7,
    "phone": "+1 808-973-3805",
    "hours": {
      "Monday": "6 am–5 pm",
      "Tuesday": "6 am–5 pm",
      "Wednesday": "6 am–5 pm",
      "Thursday": "6 am–5 pm",
      "Friday": "6 am–5 pm",
      "Saturday": "6 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Diagnostic Laboratory Services, Inc.",
    "address": "2153 N King St #100B",
    "city": "Honolulu",
    "state": "HI",
    "zip": "96819",
    "latitude": 21.3339375,
    "longitude": -157.8801875,
    "rating": 4.7,
    "phone": "+1 808-832-6468",
    "hours": {
      "Monday": "6 am–4 pm",
      "Tuesday": "6 am–4 pm",
      "Wednesday": "6 am–4 pm",
      "Thursday": "6 am–4 pm",
      "Friday": "6 am–4 pm",
      "Saturday": "6 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Diagnostic Laboratory Services, Inc.",
    "address": "500 Ala Moana Blvd bldg 6 suite h",
    "city": "Honolulu",
    "state": "HI",
    "zip": "96813",
    "latitude": 21.3010625,
    "longitude": -157.8621875,
    "rating": 3.9,
    "phone": "+1 808-485-6501",
    "hours": {
      "Monday": "8 am–12:15 pm, 12:45–4:30 pm",
      "Tuesday": "8 am–12:15 pm, 12:45–4:30 pm",
      "Wednesday": "8 am–12:15 pm, 12:45–4:30 pm",
      "Thursday": "8 am–12:15 pm, 12:45–4:30 pm",
      "Friday": "8 am–12:15 pm, 12:45–4:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Diagnostic Laboratory Services, Inc.",
    "address": "550 S Beretania St.",
    "city": "Honolulu",
    "state": "HI",
    "zip": "96813",
    "latitude": 21.3065625,
    "longitude": -157.8545625,
    "rating": 3.7,
    "phone": "+1 808-537-3100",
    "hours": {
      "Monday": "6 am–5 pm",
      "Tuesday": "6 am–5 pm",
      "Wednesday": "6 am–5 pm",
      "Thursday": "6 am–5 pm",
      "Friday": "6 am–5 pm",
      "Saturday": "6 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "ERS, Inc.",
    "address": "625 1st Ave SW",
    "city": "Cedar Rapids",
    "state": "IA",
    "zip": "52405",
    "latitude": 41.9738125,
    "longitude": -91.6804375,
    "rating": 2.5,
    "phone": "+1 319-369-6911",
    "hours": {
      "Monday": "9–11:30 am, 12:30–4 pm",
      "Tuesday": "9–11:30 am, 12:30–4 pm",
      "Wednesday": "9–11:30 am, 12:30–4 pm",
      "Thursday": "9–11:30 am, 12:30–4 pm",
      "Friday": "9–11:30 am, 12:30–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Walmart-Quest_DES MOINES_P0597",
    "address": "1001 73rd St",
    "city": "Des Moines",
    "state": "IA",
    "zip": "50324",
    "latitude": 41.5971875,
    "longitude": -93.7140625,
    "rating": 1,
    "phone": "+1 866-697-8378",
    "hours": {
      "Monday": "7–9 am",
      "Tuesday": "Closed",
      "Wednesday": "7–9 am",
      "Thursday": "Closed",
      "Friday": "7–9 am",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Downtown",
    "address": "111 N Wabash Ave STE 1514",
    "city": "Chicago",
    "state": "IL",
    "zip": "60602",
    "latitude": 41.8834375,
    "longitude": -87.6258125,
    "rating": 4.8,
    "phone": "+1 312-332-5960",
    "hours": {
      "Monday": "7 am–4:30 pm",
      "Tuesday": "7 am–4:30 pm",
      "Wednesday": "7 am–4:30 pm",
      "Thursday": "7 am–4:30 pm",
      "Friday": "7 am–4:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "6926 N University St suite f",
    "city": "Peoria",
    "state": "IL",
    "zip": "61614",
    "latitude": 40.7729375,
    "longitude": -89.6161875,
    "rating": 4.2,
    "phone": "+1 309-692-1485",
    "hours": {
      "Monday": "8 am–2 pm",
      "Tuesday": "8 am–2 pm",
      "Wednesday": "8 am–2 pm",
      "Thursday": "8 am–2 pm",
      "Friday": "8 am–2 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "5901 E Riverside Blvd",
    "city": "Rockford",
    "state": "IL",
    "zip": "61114",
    "latitude": 42.3173125,
    "longitude": -89.0011875,
    "rating": 3.1,
    "phone": "+1 779-221-1482",
    "hours": {
      "Monday": "6 am–8 pm",
      "Tuesday": "6 am–8 pm",
      "Wednesday": "6 am–8 pm",
      "Thursday": "6 am–8 pm",
      "Friday": "6 am–8 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Tristate Diagnostic Laboratory",
    "address": "955 S Hebron Ave",
    "city": "Evansville",
    "state": "IN",
    "zip": "47714",
    "latitude": 37.9645625,
    "longitude": -87.4956875,
    "rating": 3.7,
    "phone": "+1 812-401-4522",
    "hours": {
      "Monday": "7 am–4:30 pm",
      "Tuesday": "7 am–4:30 pm",
      "Wednesday": "7 am–4:30 pm",
      "Thursday": "7 am–4:30 pm",
      "Friday": "7 am–4:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Any Lab Test Now",
    "address": "915 E Dupont Rd",
    "city": "Fort Wayne",
    "state": "IN",
    "zip": "46825",
    "latitude": 41.1786875,
    "longitude": -85.1294375,
    "rating": 4.9,
    "phone": "+1 260-888-3522",
    "hours": {
      "Monday": "8 am–5 pm",
      "Tuesday": "8 am–5 pm",
      "Wednesday": "8 am–5 pm",
      "Thursday": "8 am–5 pm",
      "Friday": "8 am–5 pm",
      "Saturday": "9 am–1 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Fort Wayne Medical Laboratory Corp",
    "address": "2470 Lake Ave",
    "city": "Fort Wayne",
    "state": "IN",
    "zip": "46805",
    "latitude": 41.0896875,
    "longitude": -85.1055625,
    "rating": 2,
    "phone": "+1 260-484-8445",
    "hours": {
      "Monday": "8:30 am–5 pm",
      "Tuesday": "8:30 am–5 pm",
      "Wednesday": "8:30 am–5 pm",
      "Thursday": "8:30 am–5 pm",
      "Friday": "8:30 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "3030 Lake Ave #23",
    "city": "Fort Wayne",
    "state": "IN",
    "zip": "46805",
    "latitude": 41.0889375,
    "longitude": -85.0994375,
    "rating": 2.6,
    "phone": "+1 260-234-9927"
  },
  {
    "name": "Quest Diagnostics",
    "address": "7972 W Jefferson Blvd",
    "city": "Fort Wayne",
    "state": "IN",
    "zip": "46804",
    "latitude": 41.0430625,
    "longitude": -85.2499375,
    "rating": 2.8,
    "phone": "+1 260-234-9927"
  },
  {
    "name": "LabCorp",
    "address": "3217 Lake Ave",
    "city": "Fort Wayne",
    "state": "IN",
    "zip": "46805",
    "latitude": 41.0905625,
    "longitude": -85.0976875,
    "rating": 2.5,
    "phone": "+1 260-422-6567"
  },
  {
    "name": "Quest Diagnostics South Bend",
    "address": "16597 IN-23",
    "city": "South Bend",
    "state": "IN",
    "zip": "46635",
    "latitude": 41.7190625,
    "longitude": -86.1944375,
    "rating": 1.8,
    "phone": "+1 574-273-3323"
  },
  {
    "name": "Quest Diagnostics",
    "address": "1725 Harrodsburg Rd",
    "city": "Lexington",
    "state": "KY",
    "zip": "40504",
    "latitude": 38.0316875,
    "longitude": -84.5283125,
    "phone": "+1 859-276-5452"
  },
  {
    "name": "Quest Diagnostics",
    "address": "1340 Boylston St",
    "city": "Boston",
    "state": "MA",
    "zip": "02215",
    "latitude": 42.3440625,
    "longitude": -71.0989375,
    "rating": 2.4,
    "phone": "+1 866-697-8378",
    "hours": {
      "Monday": "8 am–7:30 pm",
      "Tuesday": "8 am–7:30 pm",
      "Wednesday": "8 am–7:30 pm",
      "Thursday": "8 am–7:30 pm",
      "Friday": "8 am–6:30 pm",
      "Saturday": "9 am–1:30 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "11 Nevins St #502",
    "city": "Brighton",
    "state": "MA",
    "zip": "02135",
    "latitude": 42.3489375,
    "longitude": -71.1473125,
    "rating": 3.1,
    "phone": "+1 617-789-3000",
    "hours": {
      "Monday": "8:30 am–5 pm",
      "Tuesday": "8:30 am–5 pm",
      "Wednesday": "8:30 am–5 pm",
      "Thursday": "8:30 am–5 pm",
      "Friday": "8:30 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Cambridge",
    "address": "415 Massachusetts Ave",
    "city": "Cambridge",
    "state": "MA",
    "zip": "02139",
    "latitude": 42.3638125,
    "longitude": -71.1003125,
    "phone": "+1 866-697-8378"
  },
  {
    "name": "Quest Diagnostics",
    "address": "1715 Twin Springs Rd",
    "city": "Baltimore",
    "state": "MD",
    "zip": "21227",
    "latitude": 39.2558125,
    "longitude": -76.6708125,
    "rating": 1.8,
    "phone": "+1 866-697-8378",
    "hours": {
      "Monday": "8:30 am–5 pm",
      "Tuesday": "8:30 am–5 pm",
      "Wednesday": "8:30 am–5 pm",
      "Thursday": "8:30 am–5 pm",
      "Friday": "8:30 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Center Line",
    "address": "26400 Van Dyke Ave",
    "city": "Center Line",
    "state": "MI",
    "zip": "48015",
    "latitude": 42.4876875,
    "longitude": -83.0271875,
    "rating": 2.6,
    "phone": "+1 866-697-8378"
  },
  {
    "name": "ARCpoint Labs of Lansing",
    "address": "6810 S Cedar St Ste 7",
    "city": "Lansing",
    "state": "MI",
    "zip": "48911",
    "latitude": 42.6584375,
    "longitude": -84.5381875,
    "rating": 2.4,
    "phone": "+1 517-507-3839",
    "hours": {
      "Monday": "7 am–5 pm",
      "Tuesday": "7 am–5 pm",
      "Wednesday": "7 am–5 pm",
      "Thursday": "7 am–5 pm",
      "Friday": "7 am–5 pm",
      "Saturday": "8 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "AmeriLabs24",
    "address": "6810 S Cedar St Ste 8",
    "city": "Lansing",
    "state": "MI",
    "zip": "48911",
    "latitude": 42.6585625,
    "longitude": -84.5385625,
    "rating": 3.7,
    "phone": "+1 517-215-7209",
    "hours": {
      "Monday": "7 am–3:30 pm",
      "Tuesday": "7 am–3:30 pm",
      "Wednesday": "7 am–3:30 pm",
      "Thursday": "7 am–3:30 pm",
      "Friday": "7 am–3:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "14900 Metro Pkwy",
    "city": "Sterling Heights",
    "state": "MI",
    "zip": "48312",
    "latitude": 42.5643125,
    "longitude": -82.9761875
  },
  {
    "name": "Quest Diagnostics",
    "address": "29176 Van Dyke Ave",
    "city": "Warren",
    "state": "MI",
    "zip": "48093",
    "latitude": 42.5083125,
    "longitude": -83.0265625,
    "rating": 2.4,
    "phone": "+1 586-221-0162"
  },
  {
    "name": "Quest Diagnostics",
    "address": "11900 12 Mile Rd #300",
    "city": "Warren",
    "state": "MI",
    "zip": "48093",
    "latitude": 42.5058125,
    "longitude": -83.0030625,
    "phone": "+1 800-222-0446"
  },
  {
    "name": "Quest Diagnostics",
    "address": "6525 France Ave S Ste 320",
    "city": "Edina",
    "state": "MN",
    "zip": "55435",
    "latitude": 44.8849375,
    "longitude": -93.3273125,
    "rating": 2.8,
    "phone": "+1 952-925-9429"
  },
  {
    "name": "Diagnosis-Now",
    "address": "4825 Minnetonka Blvd",
    "city": "Minneapolis",
    "state": "MN",
    "zip": "55416",
    "latitude": 44.9483125,
    "longitude": -93.3411875,
    "rating": 5,
    "hours": {
      "Monday": "7 am–9 pm",
      "Tuesday": "7 am–9 pm",
      "Wednesday": "7 am–9 pm",
      "Thursday": "7 am–9 pm",
      "Friday": "7 am–9 pm",
      "Saturday": "7 am–9 pm",
      "Sunday": "7 am–9 pm"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "825 Nicollet Mall Ste 406",
    "city": "Minneapolis",
    "state": "MN",
    "zip": "55402",
    "latitude": 44.9751875,
    "longitude": -93.2734375,
    "rating": 2.5,
    "phone": "+1 612-201-3401"
  },
  {
    "name": "FREE Rapid & PCR Testing Saint Paul",
    "address": "729 E 7th St",
    "city": "St Paul",
    "state": "MN",
    "zip": "55106",
    "latitude": 44.9593125,
    "longitude": -93.0716875,
    "rating": 4.2,
    "phone": "+1 630-915-6976"
  },
  {
    "name": "Dms Portable X Ray",
    "address": "393 N Dunlap St",
    "city": "St Paul",
    "state": "MN",
    "zip": "55104",
    "latitude": 44.9529375,
    "longitude": -93.1499375,
    "phone": "+1 651-644-2124"
  },
  {
    "name": "Quest Diagnostics",
    "address": "2475 Broadway Bluffs Dr Suite 120",
    "city": "Columbia",
    "state": "MO",
    "zip": "65201",
    "latitude": 38.9478125,
    "longitude": -92.3020625,
    "rating": 3.1,
    "phone": "+1 573-443-0800",
    "hours": {
      "Monday": "7 am–12 pm, 1–5 pm",
      "Tuesday": "7 am–12 pm, 1–5 pm",
      "Wednesday": "7 am–12 pm, 1–5 pm",
      "Thursday": "7 am–12 pm, 1–5 pm",
      "Friday": "7 am–12 pm, 1–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "9151 NE 81st Terrace Ste 120",
    "city": "Kansas City",
    "state": "MO",
    "zip": "64158",
    "latitude": 39.2389375,
    "longitude": -94.4639375,
    "rating": 3.6,
    "phone": "+1 816-610-0113",
    "hours": {
      "Monday": "6:30 am–4:30 pm",
      "Tuesday": "6:30 am–4:30 pm",
      "Wednesday": "6:30 am–4:30 pm",
      "Thursday": "6:30 am–4:30 pm",
      "Friday": "6:30 am–4:30 pm",
      "Saturday": "8 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "1628 E 63rd St",
    "city": "Kansas City",
    "state": "MO",
    "zip": "64110",
    "latitude": 39.0143125,
    "longitude": -94.5668125,
    "rating": 3.3,
    "phone": "+1 816-361-3708"
  },
  {
    "name": "Quest Diagnostics",
    "address": "1555 NE Douglas St",
    "city": "Lee's Summit",
    "state": "MO",
    "zip": "64086",
    "latitude": 38.9399375,
    "longitude": -94.3764375,
    "rating": 3.9,
    "phone": "+1 816-554-9300",
    "hours": {
      "Monday": "7 am–4:30 pm",
      "Tuesday": "7 am–4:30 pm",
      "Wednesday": "7 am–4:30 pm",
      "Thursday": "7 am–4:30 pm",
      "Friday": "7 am–4:30 pm",
      "Saturday": "8 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "2700 Clay Edwards Dr Ste 350",
    "city": "North Kansas City",
    "state": "MO",
    "zip": "64116",
    "latitude": 39.1485625,
    "longitude": -94.5528125,
    "rating": 3.3,
    "phone": "+1 816-421-7383",
    "hours": {
      "Monday": "7–11:30 am, 12:30–4 pm",
      "Tuesday": "7–11:30 am, 12:30–4 pm",
      "Wednesday": "7–11:30 am, 12:30–4 pm",
      "Thursday": "7–11:30 am, 12:30–4 pm",
      "Friday": "7–11:30 am, 12:30–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "1965 S Fremont Ave Ste 260",
    "city": "Springfield",
    "state": "MO",
    "zip": "65804",
    "latitude": 37.1791875,
    "longitude": -93.2723125,
    "rating": 3.5,
    "phone": "+1 417-689-5543",
    "hours": {
      "Monday": "7 am–5 pm",
      "Tuesday": "7 am–5 pm",
      "Wednesday": "7 am–5 pm",
      "Thursday": "7 am–5 pm",
      "Friday": "7 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Walmart-Quest_CHARLOTTE",
    "address": "11530 N Tryon St",
    "city": "Charlotte",
    "state": "NC",
    "zip": "28262",
    "latitude": 35.3341875,
    "longitude": -80.7125625,
    "phone": "+1 866-697-8378",
    "hours": {
      "Monday": "Closed",
      "Tuesday": "8–9 am",
      "Wednesday": "Closed",
      "Thursday": "8:30–9 am",
      "Friday": "Closed",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "TRU LABS DIAGNOSTICS",
    "address": "1819 Sardis Rd N Suite 350",
    "city": "Charlotte",
    "state": "NC",
    "zip": "28270",
    "latitude": 35.1414375,
    "longitude": -80.7349375,
    "rating": 4.1,
    "phone": "+1 980-430-3669"
  },
  {
    "name": "Quest Diagnostics",
    "address": "4315 Ben Franklin Blvd",
    "city": "Durham",
    "state": "NC",
    "zip": "27704",
    "latitude": 36.0479375,
    "longitude": -78.8935625,
    "phone": "+1 919-477-3035"
  },
  {
    "name": "Quest Diagnostics",
    "address": "4380 Federal Dr Suite 100",
    "city": "Greensboro",
    "state": "NC",
    "zip": "27410",
    "latitude": 36.0630625,
    "longitude": -79.9480625,
    "rating": 3.5,
    "phone": "+1 336-664-6100"
  },
  {
    "name": "Quest Diagnostics Greensboro Logistics Hub",
    "address": "4361 Federal Dr",
    "city": "Greensboro",
    "state": "NC",
    "zip": "27410",
    "latitude": 36.0645625,
    "longitude": -79.9514375,
    "rating": 4.7
  },
  {
    "name": "Quest Diagnostics",
    "address": "8000 Town Dr",
    "city": "Raleigh",
    "state": "NC",
    "zip": "27616",
    "latitude": 35.8700625,
    "longitude": -78.5650625,
    "rating": 3.2,
    "phone": "+1 919-772-2853",
    "hours": {
      "Monday": "7 am–4 pm",
      "Tuesday": "7 am–4 pm",
      "Wednesday": "7 am–4 pm",
      "Thursday": "7 am–4 pm",
      "Friday": "7 am–4 pm",
      "Saturday": "7 am–2 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "ExamOne",
    "address": "1401 32nd St SW",
    "city": "Fargo",
    "state": "ND",
    "zip": "58103",
    "latitude": 46.8594375,
    "longitude": -96.8308125,
    "rating": 4,
    "phone": "+1 701-293-9900",
    "hours": {
      "Monday": "8 am–5 pm",
      "Tuesday": "8 am–5 pm",
      "Wednesday": "8 am–5 pm",
      "Thursday": "8 am–5 pm",
      "Friday": "8 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Schmidt & Associates",
    "address": "3332 4th Ave S #1b",
    "city": "Fargo",
    "state": "ND",
    "zip": "58103",
    "latitude": 46.8709375,
    "longitude": -96.8346875,
    "rating": 3.3,
    "phone": "+1 701-282-4077",
    "hours": {
      "Monday": "8 am–4 pm",
      "Tuesday": "8 am–4 pm",
      "Wednesday": "8 am–4 pm",
      "Thursday": "8 am–4 pm",
      "Friday": "8 am–12 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "2854 John F. Kennedy Blvd",
    "city": "Jersey City",
    "state": "NJ",
    "zip": "07306",
    "latitude": 40.7313125,
    "longitude": -74.0651875,
    "rating": 2.3,
    "phone": "+1 201-222-1717"
  },
  {
    "name": "Quest Diagnostics Lakewood",
    "address": "1195 NJ-70",
    "city": "Lakewood",
    "state": "NJ",
    "zip": "08701",
    "latitude": 40.0544375,
    "longitude": -74.1801875,
    "rating": 3.7,
    "phone": "+1 732-363-3332"
  },
  {
    "name": "Ridgewood Diagnostic Lab- Newark",
    "address": "519 Broadway",
    "city": "Newark",
    "state": "NJ",
    "zip": "07104",
    "latitude": 40.7681875,
    "longitude": -74.1631875,
    "phone": "+1 973-346-9128",
    "hours": {
      "Monday": "11 am–5 pm",
      "Tuesday": "11 am–5 pm",
      "Wednesday": "11 am–5 pm",
      "Thursday": "11 am–5 pm",
      "Friday": "11 am–5 pm",
      "Saturday": "11 am–5 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "680 Broadway",
    "city": "Paterson",
    "state": "NJ",
    "zip": "07514",
    "latitude": 40.9180625,
    "longitude": -74.1444375,
    "phone": "+1 973-345-5046"
  },
  {
    "name": "Quest Diagnostics",
    "address": "8900 San Mateo Blvd NE",
    "city": "Albuquerque",
    "state": "NM",
    "zip": "87113",
    "latitude": 35.1866875,
    "longitude": -106.5859375,
    "rating": 3,
    "phone": "+1 505-822-5523"
  },
  {
    "name": "Quest Diagnostics Henderson Green Valley",
    "address": "2265 N Green Valley Pkwy Ste 100",
    "city": "Henderson",
    "state": "NV",
    "zip": "89014",
    "latitude": 36.0553125,
    "longitude": -115.0848125,
    "rating": 4.1,
    "phone": "+1 702-306-0436",
    "hours": {
      "Monday": "7 am–3 pm",
      "Tuesday": "7 am–3 pm",
      "Wednesday": "7 am–3 pm",
      "Thursday": "7 am–3 pm",
      "Friday": "7 am–3 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Las Vegas S. Rainbow/Russell",
    "address": "5608 S Rainbow Blvd",
    "city": "Las Vegas",
    "state": "NV",
    "zip": "89118",
    "latitude": 36.0866875,
    "longitude": -115.2420625,
    "rating": 4.3,
    "phone": "+1 866-697-8378",
    "hours": {
      "Monday": "6 am–4 pm",
      "Tuesday": "6 am–4 pm",
      "Wednesday": "6 am–4 pm",
      "Thursday": "6 am–4 pm",
      "Friday": "6 am–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Las Vegas West Charleston Boulevard",
    "address": "900 S Rancho Dr",
    "city": "Las Vegas",
    "state": "NV",
    "zip": "89106",
    "latitude": 36.1600625,
    "longitude": -115.1730625,
    "rating": 2.9,
    "phone": "+1 702-271-7546",
    "hours": {
      "Monday": "7 am–3 pm",
      "Tuesday": "7 am–3 pm",
      "Wednesday": "7 am–3 pm",
      "Thursday": "7 am–3 pm",
      "Friday": "7 am–3 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "890 Mill St Ste 302",
    "city": "Reno",
    "state": "NV",
    "zip": "89502",
    "latitude": 39.5254375,
    "longitude": -119.7988125,
    "rating": 2.1,
    "phone": "+1 775-276-1029"
  },
  {
    "name": "Quest Diagnostics",
    "address": "780 Vista Blvd Ste 600",
    "city": "Sparks",
    "state": "NV",
    "zip": "89434",
    "latitude": 39.5411875,
    "longitude": -119.7028125,
    "rating": 3,
    "phone": "+1 775-221-6716"
  },
  {
    "name": "UR Medicine Labs – Rochester (Westside Health)",
    "address": "340 Lake Ave",
    "city": "Rochester",
    "state": "NY",
    "zip": "14608",
    "latitude": 43.1710625,
    "longitude": -77.6266875,
    "rating": 3.8,
    "phone": "+1 585-758-0510",
    "hours": {
      "Monday": "8 am–12 pm, 1–5 pm",
      "Tuesday": "8 am–12 pm, 1–5 pm",
      "Wednesday": "8 am–12 pm, 1–5 pm",
      "Thursday": "8 am–12 pm, 1–5 pm",
      "Friday": "8 am–12 pm, 1–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "The IMA Group",
    "address": "214 Alexander St Suite 200",
    "city": "Rochester",
    "state": "NY",
    "zip": "14607",
    "latitude": 43.1490625,
    "longitude": -77.5966875,
    "rating": 1.7,
    "phone": "+1 585-473-4890",
    "hours": {
      "Monday": "7:30 am–5 pm",
      "Tuesday": "7:30 am–5 pm",
      "Wednesday": "7:30 am–5 pm",
      "Thursday": "7:30 am–5 pm",
      "Friday": "7:30 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "200 Gateway Park Dr # 6",
    "city": "Syracuse",
    "state": "NY",
    "zip": "13212",
    "latitude": 43.1256875,
    "longitude": -76.1273125,
    "rating": 1,
    "phone": "+1 315-458-5592",
    "hours": {
      "Monday": "7:30 am–12:30 pm, 1–2:30 pm",
      "Tuesday": "7:30 am–12:30 pm, 1–2:30 pm",
      "Wednesday": "7:30 am–12:30 pm, 1–2:30 pm",
      "Thursday": "7:30 am–12:30 pm, 1–2:30 pm",
      "Friday": "7:30 am–12:30 pm, 1–2:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "1493 S Hawkins Ave",
    "city": "Akron",
    "state": "OH",
    "zip": "44320",
    "latitude": 41.06875,
    "longitude": -81.56875,
    "rating": 4.2,
    "phone": "+1 330-814-6732"
  },
  {
    "name": "Quest diagnostics UH Cleveland medical center",
    "address": "11100 Euclid Ave",
    "city": "Cleveland",
    "state": "OH",
    "zip": "44106",
    "latitude": 41.5063125,
    "longitude": -81.6053125,
    "rating": 5
  },
  {
    "name": "Quest Diagnostics",
    "address": "3430 OhioHealth Pkwy Ste1250",
    "city": "Columbus",
    "state": "OH",
    "zip": "43202",
    "latitude": 40.03125,
    "longitude": -83.02625,
    "rating": 2,
    "phone": "+1 614-306-4000",
    "hours": {
      "Monday": "7:30 am–12:30 pm, 1–4 pm",
      "Tuesday": "7:30 am–12:30 pm, 1–4 pm",
      "Wednesday": "7:30 am–12:30 pm, 1–4 pm",
      "Thursday": "7:30 am–12:30 pm, 1–4 pm",
      "Friday": "7:30 am–12:30 pm, 1–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "3535 Olentangy River Rd Suite S1517",
    "city": "Columbus",
    "state": "OH",
    "zip": "43214",
    "latitude": 40.0315625,
    "longitude": -83.0345625,
    "rating": 2,
    "phone": "+1 614-857-5085",
    "hours": {
      "Monday": "7:30 am–12:30 pm, 1–3:30 pm",
      "Tuesday": "7:30 am–12:30 pm, 1–3:30 pm",
      "Wednesday": "7:30 am–12:30 pm, 1–3:30 pm",
      "Thursday": "7:30 am–12:30 pm, 1–3:30 pm",
      "Friday": "7:30 am–12:30 pm, 1–3:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "1150 E Lansing St",
    "city": "Broken Arrow",
    "state": "OK",
    "zip": "74012",
    "latitude": 36.0631875,
    "longitude": -95.7766875,
    "phone": "+1 918-258-8524"
  },
  {
    "name": "Quest Diagnostics",
    "address": "950 N Porter Ave",
    "city": "Norman",
    "state": "OK",
    "zip": "73071",
    "latitude": 35.2301875,
    "longitude": -97.4415625,
    "rating": 1.7,
    "phone": "+1 405-292-6002",
    "hours": {
      "Monday": "7:30 am–5 pm",
      "Tuesday": "7:30 am–5 pm",
      "Wednesday": "7:30 am–5 pm",
      "Thursday": "7:30 am–5 pm",
      "Friday": "7:30 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "5220 NE 122nd Ave",
    "city": "Portland",
    "state": "OR",
    "zip": "97230",
    "latitude": 45.5604375,
    "longitude": -122.5364375,
    "rating": 2.8,
    "phone": "+1 866-697-8378"
  },
  {
    "name": "Quest Diagnostics",
    "address": "5660 Commercial St SE",
    "city": "Salem",
    "state": "OR",
    "zip": "97306",
    "latitude": 44.8729375,
    "longitude": -123.0220625,
    "rating": 3.4,
    "phone": "+1 503-564-3054",
    "hours": {
      "Monday": "6 am–12 pm, 1–6 pm",
      "Tuesday": "6 am–12 pm, 1–6 pm",
      "Wednesday": "6 am–12 pm, 1–6 pm",
      "Thursday": "6 am–12 pm, 1–6 pm",
      "Friday": "6 am–12 pm, 1–6 pm",
      "Saturday": "8 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "1 Randall Square",
    "city": "Providence",
    "state": "RI",
    "zip": "02904",
    "latitude": 41.8369375,
    "longitude": -71.4105625,
    "rating": 2.4,
    "phone": "+1 401-456-0545"
  },
  {
    "name": "Quest Diagnostics Smith St",
    "address": "1352 Smith St",
    "city": "Providence",
    "state": "RI",
    "zip": "02911",
    "latitude": 41.8483125,
    "longitude": -71.4578125,
    "rating": 2,
    "phone": "+1 866-697-8378"
  },
  {
    "name": "Diagnostics & Labs",
    "address": "2233 Northwoods Blvd",
    "city": "North Charleston",
    "state": "SC",
    "zip": "29406",
    "latitude": 32.9419375,
    "longitude": -80.0454375,
    "phone": "+1 843-824-2481"
  },
  {
    "name": "Quest Diagnostics",
    "address": "4365 Dorchester Rd",
    "city": "North Charleston",
    "state": "SC",
    "zip": "29405",
    "latitude": 32.8531875,
    "longitude": -80.0086875,
    "rating": 4,
    "phone": "+1 843-554-7037"
  },
  {
    "name": "Mobile Neurodiagnostic Services Inc",
    "address": "1301 S Cliff Ave Suite 506",
    "city": "Sioux Falls",
    "state": "SD",
    "zip": "57105",
    "latitude": 43.5343125,
    "longitude": -96.7119375,
    "rating": 5,
    "phone": "+1 605-339-3439"
  },
  {
    "name": "Clinical Labs of the Midwest",
    "address": "3401 W 49th St",
    "city": "Sioux Falls",
    "state": "SD",
    "zip": "57106",
    "latitude": 43.5071875,
    "longitude": -96.7678125,
    "phone": "+1 605-362-9831"
  },
  {
    "name": "Quest Diagnostics",
    "address": "751 Chesapeake Ln Ste 103",
    "city": "Clarksville",
    "state": "TN",
    "zip": "37040",
    "latitude": 36.5771875,
    "longitude": -87.2731875,
    "rating": 2.7,
    "phone": "+1 931-503-8321"
  },
  {
    "name": "Quest Diagnostics Clarksville",
    "address": "1836 Memorial Dr",
    "city": "Clarksville",
    "state": "TN",
    "zip": "37043",
    "latitude": 36.5203125,
    "longitude": -87.3039375,
    "phone": "+1 866-697-8378"
  },
  {
    "name": "Quest Diagnostics",
    "address": "5846 Distribution Dr",
    "city": "Memphis",
    "state": "TN",
    "zip": "38141",
    "latitude": 35.0188125,
    "longitude": -89.8683125,
    "rating": 3.8,
    "phone": "+1 877-598-2522"
  },
  {
    "name": "Quest Diagnostics",
    "address": "776 Mt Moriah Rd",
    "city": "Memphis",
    "state": "TN",
    "zip": "38117",
    "latitude": 35.1096875,
    "longitude": -89.8949375,
    "phone": "+1 800-697-9302"
  },
  {
    "name": "Quest Diagnostics",
    "address": "6400 Poplar Ave",
    "city": "Memphis",
    "state": "TN",
    "zip": "38197",
    "latitude": 35.1013125,
    "longitude": -89.8499375,
    "phone": "+1 901-761-9704"
  },
  {
    "name": "Quest Diagnostics",
    "address": "536 N Thompson Ln Suite F",
    "city": "Murfreesboro",
    "state": "TN",
    "zip": "37129",
    "latitude": 35.8561875,
    "longitude": -86.4290625,
    "rating": 3.5,
    "phone": "+1 615-900-3346"
  },
  {
    "name": "Quest Diagnostics(no drugtests)",
    "address": "525 Mainstream Dr",
    "city": "Nashville",
    "state": "TN",
    "zip": "37228",
    "latitude": 36.2000625,
    "longitude": -86.8090625,
    "rating": 3.1,
    "phone": "+1 615-687-2000"
  },
  {
    "name": "Quest Diagnostics",
    "address": "5145 N FM 620",
    "city": "Austin",
    "state": "TX",
    "zip": "78732",
    "latitude": 30.3893125,
    "longitude": -97.8838125,
    "rating": 3,
    "phone": "+1 512-702-9208"
  },
  {
    "name": "Quest Diagnostics Inside Brownsville Walmart Store",
    "address": "2721 Boca Chica Blvd",
    "city": "Brownsville",
    "state": "TX",
    "zip": "78521",
    "latitude": 25.9251875,
    "longitude": -97.4769375,
    "rating": 3,
    "phone": "+1 956-203-0686"
  },
  {
    "name": "Quest Diagnostics Edinburg",
    "address": "2723 W Trenton Rd",
    "city": "Edinburg",
    "state": "TX",
    "zip": "78539",
    "latitude": 26.2664375,
    "longitude": -98.2004375,
    "rating": 2.5,
    "phone": "+1 956-683-7620"
  },
  {
    "name": "Quest Diagnostics",
    "address": "1700 E Cliff Dr Bldg C",
    "city": "El Paso",
    "state": "TX",
    "zip": "79902",
    "latitude": 31.7764375,
    "longitude": -106.4788125,
    "rating": 4,
    "phone": "+1 915-494-9370",
    "hours": {
      "Monday": "6 am–4 pm",
      "Tuesday": "6 am–4 pm",
      "Wednesday": "6 am–4 pm",
      "Thursday": "6 am–4 pm",
      "Friday": "6 am–4 pm",
      "Saturday": "7 am–12 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Harris Parkway",
    "address": "6844 Harris Pkwy Suite 100",
    "city": "Fort Worth",
    "state": "TX",
    "zip": "76132",
    "latitude": 32.6514375,
    "longitude": -97.4199375,
    "rating": 3.9,
    "phone": "+1 866-697-8378",
    "hours": {
      "Monday": "8 am–5 pm",
      "Tuesday": "8 am–5 pm",
      "Wednesday": "8 am–5 pm",
      "Thursday": "8 am–5 pm",
      "Friday": "8 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Irving Corporate Office",
    "address": "4770 Regent Blvd",
    "city": "Irving",
    "state": "TX",
    "zip": "75063",
    "latitude": 32.9323125,
    "longitude": -97.0121875,
    "rating": 3.3,
    "phone": "+1 972-916-3200",
    "hours": {
      "Monday": "8 am–5 pm",
      "Tuesday": "8 am–5 pm",
      "Wednesday": "8 am–5 pm",
      "Thursday": "8 am–5 pm",
      "Friday": "8 am–5 pm",
      "Saturday": "8 am–5 pm",
      "Sunday": "8 am–5 pm"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "420 W Round Grove Rd",
    "city": "Lewisville",
    "state": "TX",
    "zip": "75067",
    "latitude": 33.0021875,
    "longitude": -97.0006875,
    "rating": 4.2,
    "phone": "+1 972-966-7000"
  },
  {
    "name": "Quest Diagnostics",
    "address": "540 Surf St",
    "city": "Lewisville",
    "state": "TX",
    "zip": "75067",
    "latitude": 33.0439375,
    "longitude": -97.0144375,
    "phone": "+1 972-353-2810"
  },
  {
    "name": "Quest Diagnostics Walmart-Quest",
    "address": "915 N Town E Blvd",
    "city": "Mesquite",
    "state": "TX",
    "zip": "75150",
    "latitude": 32.8130625,
    "longitude": -96.6099375,
    "rating": 2.3,
    "phone": "+1 972-613-7950",
    "hours": {
      "Monday": "Closed",
      "Tuesday": "8–9 am",
      "Wednesday": "Closed",
      "Thursday": "8–9 am",
      "Friday": "Closed",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Midland Certified Reagent Co",
    "address": "3112 W Cuthbert Ave A",
    "city": "Midland",
    "state": "TX",
    "zip": "79701",
    "latitude": 31.9998125,
    "longitude": -102.1154375,
    "rating": 5,
    "phone": "+1 432-694-7950",
    "hours": {
      "Monday": "8 am–6 pm",
      "Tuesday": "8 am–6 pm",
      "Wednesday": "8 am–6 pm",
      "Thursday": "8 am–6 pm",
      "Friday": "8 am–6 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "CRS Diagnostic Service LLC",
    "address": "1308 S Midkiff Rd #103",
    "city": "Midland",
    "state": "TX",
    "zip": "79701",
    "latitude": 31.9758125,
    "longitude": -102.1111875,
    "rating": 3.1,
    "phone": "+1 432-570-5900",
    "hours": {
      "Monday": "7 am–6 pm",
      "Tuesday": "7 am–6 pm",
      "Wednesday": "7 am–6 pm",
      "Thursday": "7 am–6 pm",
      "Friday": "7 am–6 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest",
    "address": "7600-A I-20",
    "city": "Midland",
    "state": "TX",
    "zip": "79706",
    "latitude": 31.8995625,
    "longitude": -102.2403125
  },
  {
    "name": "Any Lab Test Now",
    "address": "1913 Heritage Blvd",
    "city": "Midland",
    "state": "TX",
    "zip": "79707",
    "latitude": 31.9998125,
    "longitude": -102.1579375,
    "rating": 4.1,
    "phone": "+1 432-618-1550",
    "hours": {
      "Monday": "8 am–5 pm",
      "Tuesday": "8 am–5 pm",
      "Wednesday": "8 am–5 pm",
      "Thursday": "8 am–5 pm",
      "Friday": "8 am–5 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics New Braunfels PSC 46",
    "address": "1770 TX-46 Ste 1105",
    "city": "New Braunfels",
    "state": "TX",
    "zip": "78132",
    "latitude": 29.7189375,
    "longitude": -98.1620625,
    "rating": 3.9,
    "phone": "+1 210-225-5101",
    "hours": {
      "Monday": "7 am–12 pm, 1–4 pm",
      "Tuesday": "7 am–12 pm, 1–4 pm",
      "Wednesday": "7 am–12 pm, 1–4 pm",
      "Thursday": "7 am–12 pm, 1–4 pm",
      "Friday": "7 am–12 pm, 1–4 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "523 N Alleghaney Ave",
    "city": "Odessa",
    "state": "TX",
    "zip": "79761",
    "latitude": 31.8461875,
    "longitude": -102.3758125,
    "rating": 2.9,
    "phone": "+1 432-332-9045"
  },
  {
    "name": "Concho Diagnostics",
    "address": "101 N Oakes St B",
    "city": "San Angelo",
    "state": "TX",
    "zip": "76903",
    "latitude": 31.4658125,
    "longitude": -100.4363125,
    "rating": 5,
    "phone": "+1 325-653-3000"
  },
  {
    "name": "Clinical Pathology Laboratories (CPL) - San Angelo",
    "address": "2141 Office Park Dr STE 7",
    "city": "San Angelo",
    "state": "TX",
    "zip": "76904",
    "latitude": 31.4219375,
    "longitude": -100.4649375,
    "rating": 5,
    "phone": "+1 325-939-2422",
    "hours": {
      "Monday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Tuesday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Wednesday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Thursday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Friday": "7:30 am–12:30 pm, 1:30–4:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics",
    "address": "1518 10th St",
    "city": "Wichita Falls",
    "state": "TX",
    "zip": "76301",
    "latitude": 33.9043125,
    "longitude": -98.5009375,
    "rating": 3.4,
    "phone": "+1 940-720-6626"
  },
  {
    "name": "Quest Diagnostics Murray",
    "address": "348 E 4500 S Ste 210",
    "city": "Murray",
    "state": "UT",
    "zip": "84123",
    "latitude": 40.6731875,
    "longitude": -111.8814375,
    "rating": 3.2,
    "phone": "+1 801-573-2740",
    "hours": {
      "Monday": "7:30 am–4:30 pm",
      "Tuesday": "7:30 am–4:30 pm",
      "Wednesday": "7:30 am–4:30 pm",
      "Thursday": "7:30 am–4:30 pm",
      "Friday": "7:30 am–4:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics 39th South PSC",
    "address": "470 E 3900 S #100",
    "city": "Salt Lake City",
    "state": "UT",
    "zip": "84107",
    "latitude": 40.6868125,
    "longitude": -111.8778125,
    "phone": "+1 801-262-4421"
  },
  {
    "name": "Any Lab Test Now",
    "address": "175 W 900 S Ste 5",
    "city": "St. George",
    "state": "UT",
    "zip": "84770",
    "latitude": 37.0921875,
    "longitude": -113.5874375,
    "rating": 4.1,
    "phone": "+1 435-628-2220",
    "hours": {
      "Monday": "8 am–5 pm",
      "Tuesday": "8 am–5 pm",
      "Wednesday": "8 am–5 pm",
      "Thursday": "8 am–5 pm",
      "Friday": "8 am–5 pm",
      "Saturday": "9 am–1 pm",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostic",
    "address": "368 E Riverside Dr #8",
    "city": "St. George",
    "state": "UT",
    "zip": "84790",
    "latitude": 37.0826875,
    "longitude": -113.5751875,
    "rating": 3,
    "phone": "+1 435-688-2900"
  },
  {
    "name": "Quest Diagnostics St. George PSC",
    "address": "736 S 900 E #103",
    "city": "St. George",
    "state": "UT",
    "zip": "84790",
    "latitude": 37.0956875,
    "longitude": -113.5650625,
    "phone": "+1 866-697-8378"
  },
  {
    "name": "Quest Diagnostics Walmart",
    "address": "673 Cedar Rd",
    "city": "Chesapeake",
    "state": "VA",
    "zip": "23322",
    "latitude": 36.7093125,
    "longitude": -76.2636875,
    "phone": "+1 866-697-8378",
    "hours": {
      "Monday": "Closed",
      "Tuesday": "8–9 am",
      "Wednesday": "Closed",
      "Thursday": "8–9 am",
      "Friday": "Closed",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Quest Diagnostics Walmart",
    "address": "117 Marketplace Dr",
    "city": "Hampton",
    "state": "VA",
    "zip": "23666",
    "latitude": 37.0364375,
    "longitude": -76.4034375,
    "rating": 1,
    "phone": "+1 757-637-4861"
  },
  {
    "name": "Health Diagnostic Laboratory, Inc. - Harbour View Professional Center",
    "address": "1035 Champions Way #200",
    "city": "Suffolk",
    "state": "VA",
    "zip": "23435",
    "latitude": 36.8721875,
    "longitude": -76.4430625,
    "phone": "+1 855-388-5293"
  },
  {
    "name": "Quest Diagnostics Walmart",
    "address": "1832 Kempsville Rd",
    "city": "Virginia Beach",
    "state": "VA",
    "zip": "23464",
    "latitude": 36.7804375,
    "longitude": -76.1895625,
    "rating": 1,
    "phone": "+1 866-697-8378"
  },
  {
    "name": "Quest Diagnostics Bellevue - 116th",
    "address": "1310 116th Ave NE",
    "city": "Bellevue",
    "state": "WA",
    "zip": "98004",
    "latitude": 47.6219375,
    "longitude": -122.1851875,
    "rating": 2.8,
    "phone": "+1 866-697-8378",
    "hours": {
      "Monday": "7:30 am–12 pm, 1–4:30 pm",
      "Tuesday": "7:30 am–12 pm, 1–4:30 pm",
      "Wednesday": "7:30 am–12 pm, 1–4:30 pm",
      "Thursday": "7:30 am–12 pm, 1–4:30 pm",
      "Friday": "7:30 am–12 pm, 1–4:30 pm",
      "Saturday": "Closed",
      "Sunday": "Closed"
    }
  },
  {
    "name": "Any Lab Test Now",
    "address": "1205 SE Everett Mall Way Suite D",
    "city": "Everett",
    "state": "WA",
    "zip": "98208",
    "latitude": 47.9135625,
    "longitude": -122.2163125,
    "rating": 4.6,
    "phone": "+1 425-348-7673"
  },
  {
    "name": "Quest Diagnostics",
    "address": "1737 Airport Wy S Suite 200",
    "city": "Seattle",
    "state": "WA",
    "zip": "98134",
    "latitude": 47.5870625,
    "longitude": -122.3225625,
    "rating": 2.4,
    "phone": "+1 206-623-8100"
  },
  {
    "name": "Quest Diagnostics Inside Safeway Spokane Sprague - Employer Drug Testing Not Offered",
    "address": "14020 E Sprague Ave",
    "city": "Spokane Valley",
    "state": "WA",
    "zip": "99216",
    "latitude": 47.6556875,
    "longitude": -117.2161875,
    "rating": 4,
    "phone": "+1 509-381-6975"
  },
  {
    "name": "Quest Diagnostics",
    "address": "621 N Argonne Rd",
    "city": "Spokane Valley",
    "state": "WA",
    "zip": "99212",
    "latitude": 47.6631875,
    "longitude": -117.2833125
  },
  {
    "name": "Quest Diagnostics",
    "address": "760 Pilgrim Way",
    "city": "Green Bay",
    "state": "WI",
    "zip": "54304",
    "latitude": 44.4815625,
    "longitude": -88.0640625
  },
  {
    "name": "Quest Diagnostics",
    "address": "1320 Mendota St # 104",
    "city": "Madison",
    "state": "WI",
    "zip": "53714",
    "latitude": 43.1184375,
    "longitude": -89.3194375,
    "phone": "+1 608-249-4563"
  }
];

// Add IDs and export as proper Location array
export const questLocations: Location[] = questLocationsData.map((loc, index) => ({
  ...loc,
  id: String(index + 1),
}));
