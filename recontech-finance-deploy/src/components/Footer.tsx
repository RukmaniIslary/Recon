import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-white text-xl font-bold">Recontech</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              India's trusted personal finance platform. Compare, choose, and grow your money wisely.
            </p>
            <p className="text-xs text-gray-500">
              Recontech provides information for educational purposes. Always consult a certified financial advisor before making investment decisions.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/credit-cards" className="hover:text-white transition-colors">Credit Cards</Link></li>
              <li><Link href="/loans" className="hover:text-white transition-colors">Personal Loans</Link></li>
              <li><Link href="/loans" className="hover:text-white transition-colors">Home Loans</Link></li>
              <li><Link href="/investments" className="hover:text-white transition-colors">SIP & Mutual Funds</Link></li>
              <li><Link href="/income-tax" className="hover:text-white transition-colors">Income Tax</Link></li>
              <li><Link href="/insurance" className="hover:text-white transition-colors">Insurance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Partners</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>State Bank of India</li>
              <li>HDFC Bank</li>
              <li>ICICI Bank</li>
              <li>Axis Bank</li>
              <li>SBI Mutual Fund</li>
              <li>HDFC Life Insurance</li>
              <li>LIC of India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            2024-2026 Recontech. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2 md:mt-0">
            Mutual fund investments are subject to market risks. Read all scheme-related documents carefully.
          </p>
        </div>
      </div>
    </footer>
  );
}
