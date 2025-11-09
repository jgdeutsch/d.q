"use client";

import { useEffect, useRef, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { Location } from "@/types";
import { MapPin, Star, Navigation } from "lucide-react";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapViewProps {
  locations: Location[];
  selectedLocation: Location | null;
  onLocationSelect: (location: Location) => void;
  userLocation: { lat: number; lng: number };
}

export default function MapView({
  locations,
  selectedLocation,
  onLocationSelect,
  userLocation,
}: MapViewProps) {
  const mapRef = useRef<any>(null);
  const [popupInfo, setPopupInfo] = useState<Location | null>(null);
  const [viewState, setViewState] = useState({
    longitude: userLocation.lng,
    latitude: userLocation.lat,
    zoom: 9,
  });

  // Update map center when selected location changes
  useEffect(() => {
    if (selectedLocation && mapRef.current) {
      mapRef.current.flyTo({
        center: [selectedLocation.longitude, selectedLocation.latitude],
        zoom: 12,
        duration: 1500,
      });
      setPopupInfo(selectedLocation);
    }
  }, [selectedLocation]);

  // Update map when user location changes
  useEffect(() => {
    setViewState({
      longitude: userLocation.lng,
      latitude: userLocation.lat,
      zoom: 9,
    });
  }, [userLocation]);

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  if (!mapboxToken) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="text-center p-8">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600 font-medium">Map unavailable</p>
          <p className="text-sm text-gray-500 mt-1">
            Please configure NEXT_PUBLIC_MAPBOX_TOKEN
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Map
        ref={mapRef}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={mapboxToken}
        style={{ width: "100%", height: "100%" }}
      >
        {/* User Location Marker */}
        <Marker
          longitude={userLocation.lng}
          latitude={userLocation.lat}
          anchor="center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary-400 rounded-full animate-ping opacity-75"></div>
            <Navigation className="w-6 h-6 text-primary-600 relative z-10" fill="currentColor" />
          </div>
        </Marker>

        {/* Location Markers */}
        {locations.map((location) => (
          <Marker
            key={location.id}
            longitude={location.longitude}
            latitude={location.latitude}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              onLocationSelect(location);
              setPopupInfo(location);
            }}
          >
            <div
              className={`cursor-pointer transition-transform hover:scale-110 ${
                selectedLocation?.id === location.id ? "scale-125" : ""
              }`}
            >
              <MapPin
                className={`w-8 h-8 ${
                  selectedLocation?.id === location.id
                    ? "text-red-600 fill-red-600"
                    : "text-red-500 fill-red-500"
                }`}
              />
            </div>
          </Marker>
        ))}

        {/* Popup */}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            onClose={() => setPopupInfo(null)}
            closeButton={true}
            closeOnClick={false}
            className="map-popup"
          >
            <div className="p-3 min-w-[250px]">
              <h3 className="font-semibold text-gray-900 mb-2 pr-4">
                {popupInfo.name}
              </h3>
              
              {popupInfo.rating && (
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">
                    {popupInfo.rating.toFixed(1)}
                  </span>
                </div>
              )}

              <p className="text-sm text-gray-600 mb-3">
                {popupInfo.address}
                <br />
                {popupInfo.city}, {popupInfo.state} {popupInfo.zip}
              </p>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${popupInfo.latitude},${popupInfo.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Get Directions
              </a>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

