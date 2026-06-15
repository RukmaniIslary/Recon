import Link from "next/link";
import Image from "next/image";
import AdUnit from "@/components/AdUnit";

const categories = [
  {
    title: "Credit Cards",
    description: "Compare the best credit cards from HDFC, SBI, ICICI, Axis Bank and more. Find cashback, travel, and rewards cards.",
    href: "/credit-cards",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
  },
  {
    title: "Personal & Home Loans",
    description: "Get the lowest interest rates on personal loans, home loans, and education loans from top Indian banks.",
    href: "/loans",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=250&fit=crop",
  },
  {
    title: "SIP & Mutual Funds",
    description: "Start investing with as little as Rs 500/month. Compare top-performing mutual funds and SIP plans.",
    href: "/investments",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
  },
  {
    title: "Income Tax",
    description: "Save tax legally with Section 80C, 80D, HRA exemptions, and new tax regime comparisons for FY 2025-26.",
    href: "/income-tax",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
  },
  {
    title: "Insurance",
    description: "Compare term life, health, motor, and travel insurance plans from LIC, HDFC Life, ICICI Prudential, and more.",
    href: "/insurance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
  },
  {
    title: "Financial Blog",
    description: "Expert articles on budgeting, investing, tax planning, and building wealth in India.",
    href: "/blog",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
  },
];

const trustedBy = [
  { name: "HDFC Bank", logo: "https://logo.clearbit.com/hdfcbank.com" },
  { name: "SBI", logo: "https://logo.clearbit.com/sbi.co.in" },
  { name: "ICICI Bank", logo: "https://logo.clearbit.com/icicibank.com" },
  { name: "Axis Bank", logo: "https://logo.clearbit.com/axisbank.com" },
  { name: "Kotak Mahindra", logo: "https://logo.clearbit.com/kotak.com" },
  { name: "Bajaj Finserv", logo: "https://logo.clearbit.com/bajajfinserv.in" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=800&fit=crop"
            alt="Finance background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-main relative py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Make Smarter Money Decisions in India
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Compare credit cards, loans, mutual funds, insurance and save on income tax. 
                Trusted by over 10 lakh Indians for financial guidance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/credit-cards" className="btn-accent">
                  Compare Credit Cards
                </Link>
                <Link href="/investments" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Investing
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-blue-200">
                <span>100% Free</span>
                <span>Unbiased Comparisons</span>
                <span>Expert Reviews</span>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=500&fit=crop"
                alt="Personal finance planning in India"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ad Unit */}
      <div className="container-main">
        <AdUnit format="horizontal" />
      </div>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-main">
          <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wide font-medium">
            Partnered with India's leading financial institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedBy.map((partner) => (
              <div key={partner.name} className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={40}
                  height={40}
                  className="rounded"
                />
                <span className="text-sm font-medium text-gray-600">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Explore Financial Products</h2>
            <p className="section-subtitle">
              From credit cards to insurance, find the best financial products tailored for Indian consumers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="card group">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{cat.title}</h3>
                <p className="text-gray-600 text-sm">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Unit */}
      <div className="container-main">
        <AdUnit format="rectangle" />
      </div>

      {/* Why Recontech */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Why 10 Lakh+ Indians Trust Recontech</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Unbiased Comparisons</h3>
              <p className="text-gray-600 text-sm">We compare products from all major banks and NBFCs without any hidden bias or paid rankings.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Save Money</h3>
              <p className="text-gray-600 text-sm">Our users save an average of Rs 15,000 per year by choosing the right financial products.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Expert Guidance</h3>
              <p className="text-gray-600 text-sm">Content reviewed by SEBI-registered financial advisors and certified tax consultants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Preview */}
      <section className="py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Latest Financial Insights</h2>
            <p className="section-subtitle">Stay updated with expert articles on personal finance in India.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="card">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop"
                alt="Best credit cards 2026"
                width={400}
                height={200}
                className="rounded-lg mb-4 w-full object-cover"
              />
              <span className="text-xs text-accent font-semibold uppercase">Credit Cards</span>
              <h3 className="font-bold text-primary mt-1 mb-2">10 Best Credit Cards in India for 2026 - Complete Comparison</h3>
              <p className="text-sm text-gray-600">Compare features, rewards, and annual fees of the top credit cards available in India right now.</p>
              <Link href="/blog/best-credit-cards-2026" className="text-secondary text-sm font-medium mt-3 inline-block hover:underline">
                Read More
              </Link>
            </article>
            <article className="card">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop"
                alt="Tax saving tips"
                width={400}
                height={200}
                className="rounded-lg mb-4 w-full object-cover"
              />
              <span className="text-xs text-accent font-semibold uppercase">Income Tax</span>
              <h3 className="font-bold text-primary mt-1 mb-2">How to Save Up to Rs 1.5 Lakh in Income Tax Under Section 80C</h3>
              <p className="text-sm text-gray-600">Complete guide to tax-saving investments including ELSS, PPF, NPS, and life insurance premiums.</p>
              <Link href="/blog/save-tax-section-80c" className="text-secondary text-sm font-medium mt-3 inline-block hover:underline">
                Read More
              </Link>
            </article>
            <article className="card">
              <Image
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop"
                alt="SIP investment guide"
                width={400}
                height={200}
                className="rounded-lg mb-4 w-full object-cover"
              />
              <span className="text-xs text-accent font-semibold uppercase">Investments</span>
              <h3 className="font-bold text-primary mt-1 mb-2">SIP for Beginners: How to Start Investing with Rs 500 Per Month</h3>
              <p className="text-sm text-gray-600">Step-by-step guide to starting your first SIP through Zerodha, Groww, or Paytm Money.</p>
              <Link href="/blog/sip-beginners-guide" className="text-secondary text-sm font-medium mt-3 inline-block hover:underline">
                Read More
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Ad Unit */}
      <div className="container-main">
        <AdUnit format="horizontal" />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Financial Journey Today</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Join lakhs of Indians who are making smarter money decisions with Recontech's free tools and expert advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/credit-cards" className="btn-accent">Compare Credit Cards</Link>
            <Link href="/investments" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Mutual Funds
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
