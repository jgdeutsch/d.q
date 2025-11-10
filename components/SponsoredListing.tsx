"use client";

import { Star, ArrowRight, Sparkles } from "lucide-react";

export default function SponsoredListing() {
  const handleClick = () => {
    window.open(
      process.env.NEXT_PUBLIC_SUPERPOWER_SIGNUP_URL || "https://app.superpower.com/register",
      "_blank"
    );
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-lg p-4 mb-3 hover:shadow-md transition-shadow">
      {/* Sponsored Badge */}
      <div className="flex items-center justify-between mb-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-200 text-orange-900">
          Sponsored result
        </span>
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-4">
        {/* Icon/Image placeholder */}
        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-orange-600" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 mb-0.5">
            Quest Diagnostics Biomarker <br className="hidden sm:inline" />Testing by Superpower
          </h3>
          <p className="text-xs text-gray-600 mb-2">
            Comprehensive biomarker testing • Personalized insights • Doctor-reviewed results
          </p>
          
          {/* CTA Button */}
          <button
            onClick={handleClick}
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-all text-sm group"
          >
            <span>Start Testing</span>
            <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

