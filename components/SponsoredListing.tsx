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
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-4 shadow-md hover:shadow-lg transition-shadow">
      {/* Sponsored Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-200 text-amber-900">
          <Sparkles className="w-3 h-3 mr-1" />
          Sponsored Listing
        </span>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 fill-amber-500 text-amber-500" />
          ))}
          <span className="ml-1 text-sm font-semibold text-gray-700">5.0</span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Quest Diagnostics Biomarker Testing
          </h3>
          <p className="text-lg font-semibold text-primary-700 mb-1">
            Powered by Superpower
          </p>
          <p className="text-gray-700 leading-relaxed">
            Get comprehensive biomarker testing with personalized health insights, 
            actionable recommendations, and ongoing health tracking—all from the comfort 
            of your home or at any Quest location.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
            <span className="text-sm text-gray-700">100+ biomarkers analyzed</span>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
            <span className="text-sm text-gray-700">Personalized health dashboard</span>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
            <span className="text-sm text-gray-700">Doctor-reviewed results</span>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
            <span className="text-sm text-gray-700">Test at any Quest location</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center group"
        >
          <span className="text-lg">Get Started with Superpower Testing</span>
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-xs text-center text-gray-500 italic">
          Special offer: Comprehensive health testing from $199
        </p>
      </div>
    </div>
  );
}

