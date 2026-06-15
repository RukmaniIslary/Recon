import Image from "next/image";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best SIP & Mutual Funds in India 2026 - Start with Rs 500",
  description: "Compare top-performing mutual funds and SIP plans in India. Invest in equity, debt, and hybrid funds from SBI, HDFC, ICICI, Axis AMC. Start SIP with Rs 500.",
  keywords: ["SIP investment India", "best mutual funds 2026", "ELSS funds", "SBI mutual fund", "HDFC mutual fund", "Zerodha mutual fund"],
};

const topFunds = [
  {
    name: "SBI Small Cap Fund",
    category: "Equity - Small Cap",
    amc: "SBI Mutual Fund",
    returns3y: "28.5%",
    returns5y: "22.3%",
    minSIP: "Rs 500",
    aum: "Rs 26,000 Cr",
    rating: 5,
    risk: "Very High",
  },
  {
    name: "HDFC Mid-Cap Opportunities",
    category: "Equity - Mid Cap",
    amc: "HDFC AMC",
    returns3y: "25.8%",
    returns5y: "19.7%",
    minSIP: "Rs 500",
    aum: "Rs 45,000 Cr",
    rating: 5,
    risk: "High",
  },
  {
    name: "Axis Bluechip Fund",
    category: "Equity - Large Cap",
    amc: "Axis AMC",
    returns3y: "15.2%",
    returns5y: "14.8%",
    minSIP: "Rs 500",
    aum: "Rs 35,000 Cr",
    rating: 4,
    risk: "Moderate",
  },
  {
    name: "Parag Parikh Flexi Cap",
    category: "Equity - Flexi Cap",
    amc: "PPFAS AMC",
    returns3y: "20.1%",
    returns5y: "18.5%",
    minSIP: "Rs 1,000",
    aum: "Rs 55,000 Cr",
    rating: 5,
    risk: "High",
  },
  {
    name: "Mirae Asset Large Cap",
    category: "Equity - Large Cap",
    amc: "Mirae Asset",
    returns3y: "16.4%",
    returns5y: "15.2%",
    minSIP: "Rs 500",
    aum: "Rs 38,000 Cr",
    rating: 5,
    risk: "Moderate",
  },
  {
    name: "ICICI Prudential Balanced Advantage",
    category: "Hybrid - Balanced",
    amc: "ICICI Prudential AMC",
    returns3y: "13.8%",
    returns5y: "12.5%",
    minSIP: "Rs 500",
    aum: "Rs 52,000 Cr",
    rating: 4,
    risk: "Moderate",
  },
  {
    name: "Quant Tax Plan (ELSS)",
    category: "Equity - ELSS (Tax Saving)",
    amc: "Quant AMC",
    returns3y: "30.2%",
    returns5y: "25.8%",
    minSIP: "Rs 500",
    aum: "Rs 5,000 Cr",
    rating: 5,
    risk: "Very High",
  },
];

const platforms = [
  { name: "Zerodha (Coin)", logo: "https://logo.clearbit.com/zerodha.com", desc: "India's largest stockbroker, zero commission on direct MF" },
  { name: "Groww", logo: "https://logo.clearbit.com/groww.in", desc: "User-friendly app for beginners, paperless KYC" },
  { name: "Paytm Money", logo: "https://logo.clearbit.com/paytmmoney.com", desc: "Direct mutual fund plans with zero commission" },
  { name: "Kuvera", logo: "https://logo.clearbit.com/kuvera.in", desc: "Free direct plan investing with tax harvesting" },
  { name: "ET Money", logo: "https://logo.clearbit.com/etmoney.com", desc: "Smart deposit and SIP investing platform" },
];

export default function InvestmentsPage() {
  return (
    <div className="py-12">
      <div className="container-main">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="section-title">Best SIP & Mutual Funds in India 2026</h1>
          <p className="section-subtitle">
            Start your wealth creation journey with systematic investment plans. Compare top mutual funds 
            across equity, debt, and hybrid categories.
          </p>
        </div>

        <AdUnit format="horizontal" />

        {/* SIP Calculator Section */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">SIP Returns Calculator</h2>
          <p className="text-gray-600 mb-6">See how much your monthly SIP can grow over time:</p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <p className="text-xs text-gray-500">Rs 5,000/month for 10 years</p>
              <p className="text-sm text-gray-400">at 12% return</p>
              <p className="text-2xl font-bold text-green-700 mt-1">Rs 11.6 Lakh</p>
              <p className="text-xs text-gray-400">Investment: Rs 6 Lakh</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <p className="text-xs text-gray-500">Rs 10,000/month for 15 years</p>
              <p className="text-sm text-gray-400">at 12% return</p>
              <p className="text-2xl font-bold text-green-700 mt-1">Rs 50.5 Lakh</p>
              <p className="text-xs text-gray-400">Investment: Rs 18 Lakh</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <p className="text-xs text-gray-500">Rs 15,000/month for 20 years</p>
              <p className="text-sm text-gray-400">at 12% return</p>
              <p className="text-2xl font-bold text-green-700 mt-1">Rs 1.5 Cr</p>
              <p className="text-xs text-gray-400">Investment: Rs 36 Lakh</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <p className="text-xs text-gray-500">Rs 25,000/month for 25 years</p>
              <p className="text-sm text-gray-400">at 12% return</p>
              <p className="text-2xl font-bold text-green-700 mt-1">Rs 4.7 Cr</p>
              <p className="text-xs text-gray-400">Investment: Rs 75 Lakh</p>
            </div>
          </div>
        </section>

        {/* Top Funds Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Top Performing Mutual Funds</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">Fund Name</th>
                  <th className="px-4 py-3 text-left text-sm">Category</th>
                  <th className="px-4 py-3 text-left text-sm">3Y Returns</th>
                  <th className="px-4 py-3 text-left text-sm">5Y Returns</th>
                  <th className="px-4 py-3 text-left text-sm">Min SIP</th>
                  <th className="px-4 py-3 text-left text-sm">Risk</th>
                  <th className="px-4 py-3 text-left text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {topFunds.map((fund) => (
                  <tr key={fund.name} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <p className="font-medium text-sm">{fund.name}</p>
                      <p className="text-xs text-gray-500">{fund.amc}</p>
                    </td>
                    <td className="px-4 py-4 text-sm">{fund.category}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-green-700">{fund.returns3y}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-green-700">{fund.returns5y}</td>
                    <td className="px-4 py-4 text-sm">{fund.minSIP}</td>
                    <td className="px-4 py-4">
                      <span className={`text-xs px-2 py-1 rounded ${
                        fund.risk === "Very High" ? "bg-red-100 text-red-700" :
                        fund.risk === "High" ? "bg-orange-100 text-orange-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>{fund.risk}</span>
                    </td>
                    <td className="px-4 py-4">
                      <Link href="#" className="text-secondary text-sm font-medium hover:underline">Invest Now</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Past performance does not guarantee future returns. Returns are CAGR as of June 2026. 
            Mutual fund investments are subject to market risks.
          </p>
        </section>

        <AdUnit format="rectangle" />

        {/* Investment Platforms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Best Platforms to Invest in Mutual Funds</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <div key={p.name} className="card flex items-start gap-4">
                <Image src={p.logo} alt={p.name} width={40} height={40} className="rounded" />
                <div>
                  <h3 className="font-bold text-primary">{p.name}</h3>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SIP Basics */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">What is SIP? A Beginner's Guide</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Systematic Investment Plan (SIP)</strong> is a method of investing a fixed amount regularly in mutual funds. 
              It allows you to invest in equity and debt markets without timing the market, leveraging the power of rupee cost averaging.
            </p>
            <h3 className="font-bold text-primary text-lg">Benefits of SIP</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Disciplined Investing:</strong> Automated monthly deductions build consistency</li>
              <li><strong>Rupee Cost Averaging:</strong> Buy more units when markets are low, fewer when high</li>
              <li><strong>Power of Compounding:</strong> Small amounts grow significantly over long periods</li>
              <li><strong>Flexible:</strong> Start with Rs 500, increase, pause, or stop anytime</li>
              <li><strong>Tax Benefits:</strong> ELSS funds offer up to Rs 1.5 lakh deduction under Section 80C</li>
            </ul>
          </div>
        </section>

        <AdUnit format="horizontal" />
      </div>
    </div>
  );
}
