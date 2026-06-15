import Image from "next/image";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Personal & Home Loans in India 2026 - Compare Interest Rates",
  description: "Compare personal loans, home loans, and education loans from SBI, HDFC, ICICI, Axis Bank. Find lowest interest rates starting from 8.5% p.a.",
  keywords: ["personal loan India", "home loan interest rate", "SBI home loan", "HDFC personal loan", "education loan India"],
};

const personalLoans = [
  { bank: "HDFC Bank", rate: "10.50% - 24.00%", amount: "Up to Rs 40 Lakh", tenure: "12-60 months", processing: "Up to 2.50%", logo: "https://logo.clearbit.com/hdfcbank.com" },
  { bank: "SBI", rate: "11.00% - 15.00%", amount: "Up to Rs 20 Lakh", tenure: "12-72 months", processing: "1.50%", logo: "https://logo.clearbit.com/sbi.co.in" },
  { bank: "ICICI Bank", rate: "10.75% - 19.00%", amount: "Up to Rs 50 Lakh", tenure: "12-60 months", processing: "Up to 2.25%", logo: "https://logo.clearbit.com/icicibank.com" },
  { bank: "Axis Bank", rate: "10.49% - 22.00%", amount: "Up to Rs 15 Lakh", tenure: "12-60 months", processing: "1.50% - 2.00%", logo: "https://logo.clearbit.com/axisbank.com" },
  { bank: "Bajaj Finserv", rate: "11.00% - 26.00%", amount: "Up to Rs 35 Lakh", tenure: "12-84 months", processing: "Up to 3.00%", logo: "https://logo.clearbit.com/bajajfinserv.in" },
  { bank: "Kotak Mahindra", rate: "10.99% - 24.00%", amount: "Up to Rs 40 Lakh", tenure: "12-60 months", processing: "Up to 2.50%", logo: "https://logo.clearbit.com/kotak.com" },
];

const homeLoans = [
  { bank: "SBI", rate: "8.50% - 9.65%", amount: "Up to Rs 10 Cr", tenure: "Up to 30 years", processing: "0.35% (min Rs 2,000)", logo: "https://logo.clearbit.com/sbi.co.in" },
  { bank: "HDFC Ltd", rate: "8.75% - 9.50%", amount: "No upper limit", tenure: "Up to 30 years", processing: "0.50% or Rs 3,000", logo: "https://logo.clearbit.com/hdfc.com" },
  { bank: "ICICI Bank", rate: "8.75% - 9.85%", amount: "Up to Rs 5 Cr", tenure: "Up to 30 years", processing: "0.50%", logo: "https://logo.clearbit.com/icicibank.com" },
  { bank: "Bank of Baroda", rate: "8.40% - 10.65%", amount: "Up to Rs 10 Cr", tenure: "Up to 30 years", processing: "Rs 8,500", logo: "https://logo.clearbit.com/bankofbaroda.in" },
  { bank: "LIC Housing Finance", rate: "8.50% - 10.75%", amount: "Up to Rs 15 Cr", tenure: "Up to 30 years", processing: "0.50%", logo: "https://logo.clearbit.com/lichousing.com" },
];

export default function LoansPage() {
  return (
    <div className="py-12">
      <div className="container-main">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="section-title">Best Loans in India 2026</h1>
          <p className="section-subtitle">
            Compare personal loans, home loans, and education loans from India's top banks. 
            Find the lowest interest rates and fastest approval.
          </p>
        </div>

        <AdUnit format="horizontal" />

        {/* Personal Loans */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6">Personal Loan Interest Rates Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">Bank</th>
                  <th className="px-4 py-3 text-left text-sm">Interest Rate (p.a.)</th>
                  <th className="px-4 py-3 text-left text-sm">Loan Amount</th>
                  <th className="px-4 py-3 text-left text-sm">Tenure</th>
                  <th className="px-4 py-3 text-left text-sm">Processing Fee</th>
                  <th className="px-4 py-3 text-left text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {personalLoans.map((loan) => (
                  <tr key={loan.bank} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Image src={loan.logo} alt={loan.bank} width={24} height={24} className="rounded" />
                        <span className="font-medium text-sm">{loan.bank}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-green-700">{loan.rate}</td>
                    <td className="px-4 py-4 text-sm">{loan.amount}</td>
                    <td className="px-4 py-4 text-sm">{loan.tenure}</td>
                    <td className="px-4 py-4 text-sm">{loan.processing}</td>
                    <td className="px-4 py-4">
                      <Link href="#" className="text-secondary text-sm font-medium hover:underline">Check Eligibility</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <AdUnit format="rectangle" />

        {/* Home Loans */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6">Home Loan Interest Rates Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">Bank/HFC</th>
                  <th className="px-4 py-3 text-left text-sm">Interest Rate (p.a.)</th>
                  <th className="px-4 py-3 text-left text-sm">Loan Amount</th>
                  <th className="px-4 py-3 text-left text-sm">Max Tenure</th>
                  <th className="px-4 py-3 text-left text-sm">Processing Fee</th>
                  <th className="px-4 py-3 text-left text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {homeLoans.map((loan) => (
                  <tr key={loan.bank} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Image src={loan.logo} alt={loan.bank} width={24} height={24} className="rounded" />
                        <span className="font-medium text-sm">{loan.bank}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-green-700">{loan.rate}</td>
                    <td className="px-4 py-4 text-sm">{loan.amount}</td>
                    <td className="px-4 py-4 text-sm">{loan.tenure}</td>
                    <td className="px-4 py-4 text-sm">{loan.processing}</td>
                    <td className="px-4 py-4">
                      <Link href="#" className="text-secondary text-sm font-medium hover:underline">Apply Now</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* EMI Calculator Info */}
        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">EMI Calculation Guide</h2>
          <p className="text-gray-600 mb-4">
            Your monthly EMI depends on the loan amount, interest rate, and tenure. Here is a quick reference 
            for a Rs 10 Lakh personal loan:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-sm text-gray-500">3 Year Tenure at 11%</p>
              <p className="text-2xl font-bold text-primary">Rs 32,739/month</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-sm text-gray-500">4 Year Tenure at 11%</p>
              <p className="text-2xl font-bold text-primary">Rs 25,846/month</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-sm text-gray-500">5 Year Tenure at 11%</p>
              <p className="text-2xl font-bold text-primary">Rs 21,742/month</p>
            </div>
          </div>
        </section>

        <AdUnit format="horizontal" />

        {/* SEO Content */}
        <section className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-primary">Documents Required for Loan Application</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="font-bold text-lg">Salaried Employees</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>PAN Card and Aadhaar Card</li>
                <li>Last 3 months salary slips</li>
                <li>Last 6 months bank statements</li>
                <li>Form 16 or ITR for last 2 years</li>
                <li>Address proof (utility bill/passport)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg">Self-Employed</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>PAN Card and Aadhaar Card</li>
                <li>ITR for last 3 years</li>
                <li>Business proof (GST registration)</li>
                <li>Last 12 months bank statements</li>
                <li>Balance sheet and P&L statement</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
