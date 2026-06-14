import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Income Tax Guide India 2026 - Tax Saving Tips, Sections 80C, 80D",
  description: "Complete income tax guide for India FY 2025-26. Learn about Section 80C, 80D deductions, new vs old tax regime, HRA exemption, and tax-saving investments.",
  keywords: ["income tax India", "Section 80C", "tax saving investments", "new tax regime", "old tax regime", "HRA exemption", "income tax calculator"],
};

const taxSlabsOld = [
  { range: "Up to Rs 2,50,000", rate: "Nil" },
  { range: "Rs 2,50,001 - Rs 5,00,000", rate: "5%" },
  { range: "Rs 5,00,001 - Rs 10,00,000", rate: "20%" },
  { range: "Above Rs 10,00,000", rate: "30%" },
];

const taxSlabsNew = [
  { range: "Up to Rs 3,00,000", rate: "Nil" },
  { range: "Rs 3,00,001 - Rs 7,00,000", rate: "5%" },
  { range: "Rs 7,00,001 - Rs 10,00,000", rate: "10%" },
  { range: "Rs 10,00,001 - Rs 12,00,000", rate: "15%" },
  { range: "Rs 12,00,001 - Rs 15,00,000", rate: "20%" },
  { range: "Above Rs 15,00,000", rate: "30%" },
];

const section80C = [
  { instrument: "ELSS Mutual Funds", lock: "3 years", returns: "12-15% (market-linked)", risk: "High" },
  { instrument: "PPF (Public Provident Fund)", lock: "15 years", returns: "7.1% (govt. guaranteed)", risk: "Low" },
  { instrument: "NPS (National Pension System)", lock: "Till 60 years", returns: "8-10% (market-linked)", risk: "Moderate" },
  { instrument: "5-Year Tax Saving FD", lock: "5 years", returns: "6.5-7.5%", risk: "Low" },
  { instrument: "NSC (National Savings Certificate)", lock: "5 years", returns: "7.7%", risk: "Low" },
  { instrument: "Life Insurance Premium", lock: "Policy term", returns: "4-6%", risk: "Low" },
  { instrument: "Sukanya Samriddhi Yojana", lock: "21 years", returns: "8.2%", risk: "Low" },
];

export default function IncomeTaxPage() {
  return (
    <div className="py-12">
      <div className="container-main">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="section-title">Income Tax Guide India - FY 2025-26</h1>
          <p className="section-subtitle">
            Complete guide to income tax slabs, deductions, and tax-saving strategies. 
            Save up to Rs 1.5 lakh under Section 80C and choose between old and new tax regimes.
          </p>
        </div>

        <AdUnit format="horizontal" />

        {/* Tax Slabs Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Income Tax Slabs FY 2025-26</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Old Regime */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">Old Regime</span>
                With Deductions
              </h3>
              <table className="w-full border-collapse bg-white rounded-xl shadow overflow-hidden">
                <thead className="bg-orange-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm">Income Range</th>
                    <th className="px-4 py-3 text-left text-sm">Tax Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {taxSlabsOld.map((slab) => (
                    <tr key={slab.range} className="border-b">
                      <td className="px-4 py-3 text-sm">{slab.range}</td>
                      <td className="px-4 py-3 text-sm font-semibold">{slab.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-2">+ 4% Health & Education Cess on total tax</p>
            </div>

            {/* New Regime */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">New Regime</span>
                Default from FY 2023-24
              </h3>
              <table className="w-full border-collapse bg-white rounded-xl shadow overflow-hidden">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm">Income Range</th>
                    <th className="px-4 py-3 text-left text-sm">Tax Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {taxSlabsNew.map((slab) => (
                    <tr key={slab.range} className="border-b">
                      <td className="px-4 py-3 text-sm">{slab.range}</td>
                      <td className="px-4 py-3 text-sm font-semibold">{slab.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-2">Standard deduction of Rs 75,000 available</p>
            </div>
          </div>
        </section>

        <AdUnit format="rectangle" />

        {/* Section 80C */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Section 80C - Save Up to Rs 1.5 Lakh</h2>
          <p className="text-gray-600 mb-6">
            Section 80C of the Income Tax Act allows you to claim deductions up to Rs 1,50,000 on specified investments and expenses. 
            Here are the best options:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">Investment</th>
                  <th className="px-4 py-3 text-left text-sm">Lock-in Period</th>
                  <th className="px-4 py-3 text-left text-sm">Expected Returns</th>
                  <th className="px-4 py-3 text-left text-sm">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                {section80C.map((item) => (
                  <tr key={item.instrument} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">{item.instrument}</td>
                    <td className="px-4 py-3 text-sm">{item.lock}</td>
                    <td className="px-4 py-3 text-sm text-green-700 font-medium">{item.returns}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.risk === "High" ? "bg-red-100 text-red-700" :
                        item.risk === "Moderate" ? "bg-yellow-100 text-yellow-700" :
                        "bg-green-100 text-green-700"
                      }`}>{item.risk}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Other Sections */}
        <section className="mb-12 grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-lg font-bold text-primary mb-3">Section 80D - Health Insurance</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Self & Family: Up to Rs 25,000 deduction</li>
              <li>Parents (below 60): Additional Rs 25,000</li>
              <li>Parents (above 60): Additional Rs 50,000</li>
              <li>Maximum total deduction: Rs 1,00,000</li>
              <li>Preventive health check-up: Rs 5,000 (within limit)</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-lg font-bold text-primary mb-3">HRA Exemption</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Actual HRA received</li>
              <li>50% of basic salary (metro) / 40% (non-metro)</li>
              <li>Rent paid minus 10% of basic salary</li>
              <li>Lowest of the three is exempt</li>
              <li>Only available under Old Tax Regime</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-lg font-bold text-primary mb-3">Section 80E - Education Loan</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Interest on education loan is fully deductible</li>
              <li>No upper limit on deduction amount</li>
              <li>Available for 8 years from start of repayment</li>
              <li>Loan must be from recognized financial institution</li>
              <li>Available for self, spouse, or children</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-lg font-bold text-primary mb-3">Section 80CCD(1B) - NPS</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Additional Rs 50,000 deduction over Section 80C</li>
              <li>Total 80C + 80CCD(1B) can be Rs 2,00,000</li>
              <li>Employer contribution up to 10% of basic salary</li>
              <li>Available under both old and new regimes</li>
              <li>Best for long-term retirement planning</li>
            </ul>
          </div>
        </section>

        <AdUnit format="horizontal" />

        {/* Old vs New Regime */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Old vs New Tax Regime - Which to Choose?</h2>
          <div className="text-gray-600 space-y-4">
            <p>
              <strong>Choose Old Regime</strong> if your total deductions (80C + 80D + HRA + home loan interest) exceed Rs 3-4 lakh per year. 
              This is common for salaried individuals living in rented accommodation in metros with home loans and health insurance.
            </p>
            <p>
              <strong>Choose New Regime</strong> if you have minimal investments and no HRA claims. 
              The lower slab rates and standard deduction of Rs 75,000 make it beneficial for those earning Rs 7-12 lakh with fewer deductions.
            </p>
            <div className="bg-white rounded-lg p-4 mt-4">
              <h3 className="font-bold text-primary mb-2">Quick Decision Rule</h3>
              <p className="text-sm">
                If your gross income is Rs 10 lakh and total deductions are above Rs 3.75 lakh, the old regime saves more tax. 
                Below that threshold, the new regime is likely better.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
