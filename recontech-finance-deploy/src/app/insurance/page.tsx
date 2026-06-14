import Image from "next/image";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Insurance Plans in India 2026 - Health, Life, Term Insurance",
  description: "Compare health insurance, term life insurance, motor insurance from LIC, HDFC Life, ICICI Prudential, Max Life, Star Health. Get quotes online.",
  keywords: ["health insurance India", "term insurance", "LIC policy", "HDFC Life insurance", "best health insurance", "car insurance"],
};

const termInsurance = [
  { company: "HDFC Life Click 2 Protect", cover: "Rs 1 Cr", premium: "Rs 700/month (30 yr male)", claimRatio: "99.07%", logo: "https://logo.clearbit.com/hdfclife.com" },
  { company: "ICICI Prudential iProtect Smart", cover: "Rs 1 Cr", premium: "Rs 750/month (30 yr male)", claimRatio: "97.83%", logo: "https://logo.clearbit.com/iciciprulife.com" },
  { company: "Max Life Smart Secure Plus", cover: "Rs 1 Cr", premium: "Rs 680/month (30 yr male)", claimRatio: "99.51%", logo: "https://logo.clearbit.com/maxlifeinsurance.com" },
  { company: "Tata AIA Sampoorna Raksha", cover: "Rs 1 Cr", premium: "Rs 720/month (30 yr male)", claimRatio: "98.54%", logo: "https://logo.clearbit.com/tataaia.com" },
  { company: "LIC Tech Term", cover: "Rs 1 Cr", premium: "Rs 850/month (30 yr male)", claimRatio: "98.62%", logo: "https://logo.clearbit.com/licindia.in" },
];

const healthInsurance = [
  { company: "Star Health & Allied", plan: "Family Health Optima", cover: "Rs 10 Lakh", premium: "Rs 12,000/year (family)", logo: "https://logo.clearbit.com/starhealth.in" },
  { company: "HDFC Ergo", plan: "Optima Secure", cover: "Rs 10 Lakh", premium: "Rs 14,000/year (family)", logo: "https://logo.clearbit.com/hdfcergo.com" },
  { company: "ICICI Lombard", plan: "Complete Health Insurance", cover: "Rs 10 Lakh", premium: "Rs 13,500/year (family)", logo: "https://logo.clearbit.com/icicilombard.com" },
  { company: "Niva Bupa", plan: "Health Companion", cover: "Rs 10 Lakh", premium: "Rs 11,500/year (family)", logo: "https://logo.clearbit.com/nivabupa.com" },
  { company: "Care Health", plan: "Care Supreme", cover: "Rs 10 Lakh", premium: "Rs 12,800/year (family)", logo: "https://logo.clearbit.com/careinsurance.com" },
];

export default function InsurancePage() {
  return (
    <div className="py-12">
      <div className="container-main">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="section-title">Best Insurance Plans in India 2026</h1>
          <p className="section-subtitle">
            Compare term life insurance, health insurance, and motor insurance from India's top insurers. 
            Protect your family with the right coverage at affordable premiums.
          </p>
        </div>

        <AdUnit format="horizontal" />

        {/* Term Insurance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-2">Best Term Life Insurance Plans</h2>
          <p className="text-gray-600 mb-6 text-sm">Term insurance provides pure life cover at the lowest premiums. Get Rs 1 Crore cover for less than Rs 1,000/month.</p>
          
          <div className="space-y-4">
            {termInsurance.map((ins) => (
              <div key={ins.company} className="card">
                <div className="grid md:grid-cols-5 gap-4 items-center">
                  <div className="flex items-center gap-3">
                    <Image src={ins.logo} alt={ins.company} width={36} height={36} className="rounded" />
                    <div>
                      <p className="font-bold text-sm text-primary">{ins.company}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Cover</p>
                    <p className="font-semibold text-sm">{ins.cover}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Premium</p>
                    <p className="font-semibold text-sm text-green-700">{ins.premium}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Claim Settlement</p>
                    <p className="font-semibold text-sm">{ins.claimRatio}</p>
                  </div>
                  <div className="text-center">
                    <Link href="#" className="btn-primary text-sm py-2 px-4 inline-block">Get Quote</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdUnit format="rectangle" />

        {/* Health Insurance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-2">Best Health Insurance Plans</h2>
          <p className="text-gray-600 mb-6 text-sm">Medical inflation in India is 14% per year. A good health insurance plan protects your savings from unexpected hospital bills.</p>
          
          <div className="space-y-4">
            {healthInsurance.map((ins) => (
              <div key={ins.company} className="card">
                <div className="grid md:grid-cols-5 gap-4 items-center">
                  <div className="flex items-center gap-3">
                    <Image src={ins.logo} alt={ins.company} width={36} height={36} className="rounded" />
                    <div>
                      <p className="font-bold text-sm text-primary">{ins.company}</p>
                      <p className="text-xs text-gray-500">{ins.plan}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Sum Insured</p>
                    <p className="font-semibold text-sm">{ins.cover}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Premium</p>
                    <p className="font-semibold text-sm text-green-700">{ins.premium}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Type</p>
                    <p className="font-semibold text-sm">Family Floater</p>
                  </div>
                  <div className="text-center">
                    <Link href="#" className="btn-primary text-sm py-2 px-4 inline-block">Compare</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Insurance Tips */}
        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Insurance Buying Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg text-primary mb-3">Term Insurance Tips</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Cover should be 10-15 times your annual income</li>
                <li>Buy early (in your 20s) for lowest premiums</li>
                <li>Choose plan tenure till age 60-65</li>
                <li>Check claim settlement ratio (above 97% is good)</li>
                <li>Add critical illness rider for comprehensive protection</li>
                <li>Avoid investment-cum-insurance plans (ULIPs, endowment)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary mb-3">Health Insurance Tips</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Minimum Rs 10 Lakh cover for a family in metros</li>
                <li>Check network hospital list in your city</li>
                <li>Look for no co-payment and no room rent capping</li>
                <li>Sub-limits on specific treatments reduce real coverage</li>
                <li>Waiting period for pre-existing diseases (usually 2-4 years)</li>
                <li>Get a super top-up for cost-effective higher coverage</li>
              </ul>
            </div>
          </div>
        </section>

        <AdUnit format="horizontal" />

        {/* Tax Benefits */}
        <section className="card">
          <h2 className="text-xl font-bold text-primary mb-3">Tax Benefits on Insurance</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-primary">Life Insurance (Section 80C)</h3>
              <p>Premium paid for life/term insurance qualifies for deduction up to Rs 1.5 lakh under Section 80C of the Income Tax Act.</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Health Insurance (Section 80D)</h3>
              <p>Premium for health insurance qualifies for deduction up to Rs 25,000 (self) + Rs 50,000 (senior citizen parents) under Section 80D.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
