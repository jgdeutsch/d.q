"use client";

import { Location } from "@/types";
import { Star, MapPin, Clock, Phone } from "lucide-react";
import SponsoredListing from "./SponsoredListing";

interface LocationListProps {
  locations: Location[];
  selectedLocation: Location | null;
  onLocationSelect: (location: Location) => void;
}

export default function LocationList({
  locations,
  selectedLocation,
  onLocationSelect,
}: LocationListProps) {
  return (
    <div className="divide-y divide-gray-200">
      {/* Sponsored Listing at the top */}
      <div className="p-3 bg-gray-50">
        <SponsoredListing />
      </div>

      {/* Regular Locations */}
      {locations.length === 0 ? (
        <div className="p-8 text-center">
          <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 font-medium">No locations found</p>
          <p className="text-sm text-gray-400 mt-1">Try adjusting your search criteria</p>
        </div>
      ) : (
        locations.map((location) => (
          <div
            key={location.id}
            onClick={() => onLocationSelect(location)}
            className={`p-3 cursor-pointer transition-colors hover:bg-gray-50 ${
              selectedLocation?.id === location.id ? "bg-blue-50 border-l-4 border-blue-600" : ""
            }`}
          >
            <div className="space-y-1.5">
              {/* Name and Rating */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-gray-900 text-base leading-tight">
                  {location.name}
                </h3>
                {location.rating && (
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                    <span className="text-sm font-medium text-gray-700">
                      {location.rating.toFixed(1)}
                    </span>
                  </div>
                )}
              </div>

              {/* Address */}
              <div className="text-sm text-gray-600">
                {location.address}, {location.city}, {location.state} {location.zip}
              </div>

              {/* Hours */}
              {location.hours && (
                <div className="text-xs text-gray-500">
                  {Object.entries(location.hours).slice(0, 1).map(([day, hours]) => (
                    <span key={day}>
                      {day}: {hours}
                    </span>
                  ))}
                </div>
              )}

              {/* Directions Link */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors"
              >
                Get Directions →
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

