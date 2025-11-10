// Script to parse CSV and generate locations.ts
const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvPath = path.join(__dirname, '../quest - Sheet3.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Parse CSV
const lines = csvContent.split('\n');
const headers = lines[0].split(',');

const locations = [];
let id = 1;

for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  if (!line.trim()) continue;
  
  // Split by comma but handle quoted fields
  const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
  
  if (values.length < 10) continue; // Skip incomplete lines
  
  const title = values[1]?.replace(/"/g, '').trim();
  const rating = parseFloat(values[2]) || undefined;
  const address = values[5]?.replace(/"/g, '').trim();
  const phone = values[8]?.replace(/"/g, '').trim();
  const latitude = parseFloat(values[12]);
  const longitude = parseFloat(values[13]);
  
  if (!title || !address || isNaN(latitude) || isNaN(longitude)) continue;
  
  // Extract city, state, zip from address
  const addressMatch = address.match(/^(.+?),\s*([A-Z]{2})\s+(\d{5})/);
  if (!addressMatch) continue;
  
  const street = addressMatch[1];
  const state = addressMatch[2];
  const zip = addressMatch[3];
  
  // Extract city
  const cityMatch = address.match(/,\s*([^,]+),\s*[A-Z]{2}/);
  const city = cityMatch ? cityMatch[1].trim() : '';
  
  // Parse hours
  const monday = values[20]?.replace(/"/g, '').trim() || 'Closed';
  const tuesday = values[21]?.replace(/"/g, '').trim() || 'Closed';
  const wednesday = values[16]?.replace(/"/g, '').trim() || 'Closed';
  const thursday = values[17]?.replace(/"/g, '').trim() || 'Closed';
  const friday = values[18]?.replace(/"/g, '').trim() || 'Closed';
  const saturday = values[19]?.replace(/"/g, '').trim() || 'Closed';
  const sunday = values[20]?.replace(/"/g, '').trim() || 'Closed';
  
  locations.push({
    id: String(id++),
    name: title,
    address: street,
    city,
    state,
    zip,
    latitude,
    longitude,
    rating,
    phone: phone || undefined,
    hours: {
      Monday: monday,
      Tuesday: tuesday,
      Wednesday: wednesday,
      Thursday: thursday,
      Friday: friday,
      Saturday: saturday,
      Sunday: sunday,
    }
  });
}

// Generate TypeScript file
const output = `import { Location } from "@/types";

// Quest Diagnostics locations from Google Maps data (${locations.length} locations)
export const questLocations: Location[] = ${JSON.stringify(locations, null, 2)};
`;

// Write to file
const outputPath = path.join(__dirname, '../data/locations-generated.ts');
fs.writeFileSync(outputPath, output);

console.log(`✅ Generated ${locations.length} locations to data/locations-generated.ts`);

