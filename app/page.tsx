"use client";

import { useState, useEffect } from "react";
import MapView from "@/components/MapView";
import LocationList from "@/components/LocationList";
import SearchBar from "@/components/SearchBar";
import { questLocations } from "@/data/quest-locations-full";
import { Location } from "@/types";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState<Location[]>(questLocations);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Get user's location
  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Geolocation not available, using default location");
          // Default to center of US
          setUserLocation({ lat: 39.8283, lng: -98.5795 });
        }
      );
    } else {
      setUserLocation({ lat: 39.8283, lng: -98.5795 });
    }
  }, []);

  // Filter locations based on search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredLocations(questLocations);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = questLocations.filter((location) => {
      return (
        location.name.toLowerCase().includes(query) ||
        location.address.toLowerCase().includes(query) ||
        location.city.toLowerCase().includes(query) ||
        location.state.toLowerCase().includes(query) ||
        location.zip.includes(query)
      );
    });

    setFilteredLocations(filtered);
  }, [searchQuery]);

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Compact Header Section */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Quest Diagnostics Locations</h1>
          <SearchBar onSearch={setSearchQuery} />
          <div className="mt-3 text-sm text-gray-600">
            Showing {filteredLocations.length} locations of {questLocations.length}.{" "}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Map and List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Location List */}
          <div className="h-[calc(100vh-200px)] overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-sm">
            <LocationList
              locations={filteredLocations}
              selectedLocation={selectedLocation}
              onLocationSelect={setSelectedLocation}
            />
          </div>

          {/* Map */}
          <div className="h-[calc(100vh-200px)] rounded-lg overflow-hidden shadow-lg border border-gray-200 sticky top-24">
            {userLocation && (
              <MapView
                locations={filteredLocations}
                selectedLocation={selectedLocation}
                onLocationSelect={setSelectedLocation}
                userLocation={userLocation}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

