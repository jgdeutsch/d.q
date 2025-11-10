#!/usr/bin/env node

/**
 * CSV Parser for Quest Diagnostics Locations
 * Parses the Google Maps CSV export and generates TypeScript location data
 */

const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvPath = path.join(__dirname, '../quest - Sheet3.csv');
console.log('📖 Reading CSV file...');

if (!fs.existsSync(csvPath)) {
  console.error('❌ CSV file not found at:', csvPath);
  process.exit(1);
}

const csvContent = fs.readFileSync(csvPath, 'utf-8');
const lines = csvContent.split('\n');

console.log(`📊 Found ${lines.length} lines in CSV`);

// CSV structure from the data:
// placeUrl,title,rating,reviewCount,category,address,plusCode,website,phoneNumber,currentStatus,imgUrl,isClaimed,latitude,longitude,query,timestamp,wednesday,thursday,friday,saturday,sunday,monday,tuesday,info,isBlackOwned,error

const locations = [];
let skipped = 0;

for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  
  // Parse CSV line (handling quoted commas)
  const values = [];
  let currentValue = '';
  let insideQuotes = false;
  
  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    
    if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      values.push(currentValue.trim());
      currentValue = '';
    } else {
      currentValue += char;
    }
  }
  values.push(currentValue.trim()); // Push last value
  
  // Extract fields
  const title = values[1] || '';
  const ratingStr = values[2] || '';
  const address = values[5] || '';
  const phone = values[8] || '';
  const latitude = parseFloat(values[12]);
  const longitude = parseFloat(values[13]);
  
  // Hours
  const wednesday = values[16] || '';
  const thursday = values[17] || '';
  const friday = values[18] || '';
  const saturday = values[19] || '';
  const sunday = values[20] || '';
  const monday = values[21] || '';
  const tuesday = values[22] || '';
  
  // Validation
  if (!title || title === 'No new results found' || title === 'Already found') {
    skipped++;
    continue;
  }
  
  if (!address || !address.includes(',')) {
    skipped++;
    continue;
  }
  
  if (isNaN(latitude) || isNaN(longitude) || latitude === 0 || longitude === 0) {
    skipped++;
    continue;
  }
  
  // Parse address to extract city, state, zip
  // Format: "Street Address, City, STATE ZIP, Country"
  const addressParts = address.split(',').map(p => p.trim());
  if (addressParts.length < 3) {
    skipped++;
    continue;
  }
  
  const street = addressParts[0];
  const city = addressParts[1];
  const stateZipPart = addressParts[2];
  
  // Extract state and zip from "STATE ZIP"
  const stateZipMatch = stateZipPart.match(/([A-Z]{2})\s+(\d{5})/);
  if (!stateZipMatch) {
    skipped++;
    continue;
  }
  
  const state = stateZipMatch[1];
  const zip = stateZipMatch[2];
  
  const rating = ratingStr ? parseFloat(ratingStr) : undefined;
  
  // Build location object
  const location = {
    name: title,
    address: street,
    city,
    state,
    zip,
    latitude: parseFloat(latitude.toFixed(7)),
    longitude: parseFloat(longitude.toFixed(7)),
  };
  
  if (rating && rating > 0) {
    location.rating = parseFloat(rating.toFixed(1));
  }
  
  if (phone && phone.trim()) {
    location.phone = phone.trim();
  }
  
  // Add hours if available
  const hours = {};
  if (monday) hours.Monday = monday;
  if (tuesday) hours.Tuesday = tuesday;
  if (wednesday) hours.Wednesday = wednesday;
  if (thursday) hours.Thursday = thursday;
  if (friday) hours.Friday = friday;
  if (saturday) hours.Saturday = saturday;
  if (sunday) hours.Sunday = sunday;
  
  if (Object.keys(hours).length > 0) {
    location.hours = hours;
  }
  
  locations.push(location);
}

console.log(`✅ Parsed ${locations.length} valid locations`);
console.log(`⚠️  Skipped ${skipped} invalid/duplicate entries`);

// Sort by state, then city for better organization
locations.sort((a, b) => {
  if (a.state !== b.state) return a.state.localeCompare(b.state);
  return a.city.localeCompare(b.city);
});

// Generate TypeScript file
const output = `import { Location } from "@/types";

/**
 * Comprehensive Quest Diagnostics Locations
 * Data sourced from Google Maps
 * Total locations: ${locations.length}
 * Last updated: ${new Date().toISOString().split('T')[0]}
 */

const questLocationsData: Omit<Location, "id">[] = ${JSON.stringify(locations, null, 2)};

// Add IDs and export as proper Location array
export const questLocations: Location[] = questLocationsData.map((loc, index) => ({
  ...loc,
  id: String(index + 1),
}));
`;

// Write to data/locations.ts
const outputPath = path.join(__dirname, '../data/locations.ts');
fs.writeFileSync(outputPath, output);

console.log(`\n📝 Generated locations file: data/locations.ts`);
console.log(`\n📍 Location breakdown by state:`);

// Count by state
const stateCounts = {};
locations.forEach(loc => {
  stateCounts[loc.state] = (stateCounts[loc.state] || 0) + 1;
});

// Sort and display
Object.entries(stateCounts)
  .sort(([, a], [, b]) => b - a)
  .slice(0, 15)
  .forEach(([state, count]) => {
    console.log(`   ${state}: ${count} locations`);
  });

console.log(`\n✨ Done! Import with: import { questLocations } from "@/data/locations";`);

