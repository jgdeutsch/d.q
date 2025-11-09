import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Diagnostics<span className="text-primary-400">.Quest</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              An independent directory helping you find Quest Diagnostics lab locations 
              across the United States. We aggregate location data to make your search easier.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Find Labs
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.questdiagnostics.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  Quest Diagnostics Official Site
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="text-white font-semibold mb-4">Disclaimer</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Diagnostics.Quest is an independent directory service and is not affiliated with, 
              endorsed by, or sponsored by Quest Diagnostics. We provide location information 
              as a public service. This site may contain sponsored listings from third-party 
              service providers.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Diagnostics.Quest. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Quest Diagnostics® is a registered trademark of Quest Diagnostics Incorporated.
          </p>
        </div>
      </div>
    </footer>
  );
}

