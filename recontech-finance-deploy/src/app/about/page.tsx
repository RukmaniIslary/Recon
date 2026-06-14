import Image from "next/image";
import AdUnit from "@/components/AdUnit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Recontech - India's Trusted Personal Finance Platform",
  description: "Learn about Recontech's mission to help Indians make smarter financial decisions. Our team of SEBI-registered advisors and certified tax consultants.",
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container-main">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="section-title">About Recontech</h1>
          <p className="section-subtitle">
            Helping Indians make smarter money decisions since 2020. We compare, review, and recommend 
            financial products to save you time and money.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Recontech team working on financial content"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Recontech was founded with a simple belief: every Indian deserves access to unbiased, 
              clear financial information. We noticed that most people make financial decisions based on 
              bank relationship managers' advice, which often comes with hidden conflicts of interest.
            </p>
            <p className="text-gray-600 mb-4">
              We bridge this gap by providing transparent comparisons of credit cards, loans, mutual funds, 
              insurance plans, and tax-saving options. Our content is reviewed by SEBI-registered investment 
              advisors and certified tax professionals.
            </p>
            <p className="text-gray-600">
              Today, over 10 lakh Indians visit Recontech every month to make informed financial choices. 
              Our users collectively save crores in unnecessary fees, higher interest rates, and missed tax deductions.
            </p>
          </div>
        </div>

        <AdUnit format="horizontal" />

        {/* Stats */}
        <section className="bg-primary rounded-xl p-8 mb-16 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold">10L+</p>
              <p className="text-blue-200 text-sm mt-1">Monthly Readers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">500+</p>
              <p className="text-blue-200 text-sm mt-1">Products Compared</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">50+</p>
              <p className="text-blue-200 text-sm mt-1">Partner Institutions</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">4.8/5</p>
              <p className="text-blue-200 text-sm mt-1">User Rating</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-2">Transparency</h3>
              <p className="text-sm text-gray-600">
                We clearly disclose when content is sponsored or when we earn referral commissions. 
                Our editorial opinions remain independent.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-2">Education First</h3>
              <p className="text-sm text-gray-600">
                We believe financial literacy is the foundation of wealth building. 
                Our content educates before it recommends.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-2">User First</h3>
              <p className="text-sm text-gray-600">
                Every recommendation is made with the user's benefit in mind. 
                We never push products that don't serve our readers' best interests.
              </p>
            </div>
          </div>
        </section>

        <AdUnit format="rectangle" />

        {/* Team */}
        <section>
          <h2 className="text-2xl font-bold text-primary text-center mb-8">Our Editorial Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Financial Editor"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-primary">Rahul Mehta</h3>
              <p className="text-sm text-gray-500">Chief Financial Editor</p>
              <p className="text-xs text-gray-400 mt-1">SEBI Registered Investment Advisor</p>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
                alt="Tax Expert"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-primary">Priya Sharma</h3>
              <p className="text-sm text-gray-500">Tax & Compliance Head</p>
              <p className="text-xs text-gray-400 mt-1">Chartered Accountant (ICAI)</p>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                alt="Insurance Expert"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-primary">Amit Patel</h3>
              <p className="text-sm text-gray-500">Insurance & Loans Editor</p>
              <p className="text-xs text-gray-400 mt-1">Certified Financial Planner</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
