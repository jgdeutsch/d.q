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
      <div className="p-4">
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
            className={`p-4 cursor-pointer transition-colors hover:bg-gray-50 ${
              selectedLocation?.id === location.id ? "bg-primary-50 border-l-4 border-primary-600" : ""
            }`}
          >
            <div className="space-y-2">
              {/* Name and Rating */}
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                  {location.name}
                </h3>
                {location.rating && (
                  <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">
                      {location.rating.toFixed(1)}
                    </span>
                  </div>
                )}
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                <span>
                  {location.address}, {location.city}, {location.state} {location.zip}
                </span>
              </div>

              {/* Phone */}
              {location.phone && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a 
                    href={`tel:${location.phone}`}
                    className="hover:text-primary-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {location.phone}
                  </a>
                </div>
              )}

              {/* Hours */}
              {location.hours && (
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                  <div>
                    {Object.entries(location.hours).slice(0, 1).map(([day, hours]) => (
                      <div key={day}>
                        <span className="font-medium">{day}:</span> {hours}
                      </div>
                    ))}
                    {Object.keys(location.hours).length > 1 && (
                      <span className="text-xs text-gray-500">+ more hours</span>
                    )}
                  </div>
                </div>
              )}

              {/* Directions Link */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
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

