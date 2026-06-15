import Image from "next/image";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Finance Blog - Expert Money Tips for India",
  description: "Read expert articles on credit cards, loans, investments, tax saving, and insurance in India. Updated weekly with actionable financial advice.",
  keywords: ["personal finance blog India", "money tips", "financial advice", "investment guide", "tax saving tips"],
};

const blogPosts = [
  {
    slug: "best-credit-cards-2026",
    title: "10 Best Credit Cards in India for 2026 - Complete Comparison Guide",
    excerpt: "We compared annual fees, rewards, cashback rates, and lounge access across 50+ credit cards from HDFC, SBI, ICICI, and Axis Bank to bring you the definitive list.",
    category: "Credit Cards",
    date: "June 10, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
  },
  {
    slug: "save-tax-section-80c",
    title: "How to Save Up to Rs 1.5 Lakh in Income Tax Under Section 80C",
    excerpt: "A detailed breakdown of all Section 80C instruments including ELSS, PPF, NPS, NSC, and tax-saving FDs. Find the best combination for your salary level.",
    category: "Income Tax",
    date: "June 5, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop",
  },
  {
    slug: "sip-beginners-guide",
    title: "SIP for Beginners: How to Start Investing with Rs 500 Per Month",
    excerpt: "Step-by-step guide to starting your first SIP through platforms like Zerodha Coin, Groww, and Paytm Money. Includes fund recommendations by risk profile.",
    category: "Investments",
    date: "May 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop",
  },
  {
    slug: "home-loan-tips-2026",
    title: "Home Loan Guide 2026: How to Get the Lowest Interest Rate",
    excerpt: "Tips to negotiate better rates with SBI, HDFC, and ICICI Bank. Learn about balance transfer, MCLR vs repo rate linked loans, and prepayment strategies.",
    category: "Loans",
    date: "May 20, 2026",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=300&fit=crop",
  },
  {
    slug: "health-insurance-mistakes",
    title: "7 Common Health Insurance Mistakes Indians Make (And How to Avoid Them)",
    excerpt: "From inadequate coverage to ignoring sub-limits, learn about the most common mistakes people make when buying health insurance in India.",
    category: "Insurance",
    date: "May 15, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop",
  },
  {
    slug: "new-vs-old-tax-regime",
    title: "New vs Old Tax Regime 2026: Which One Should You Choose?",
    excerpt: "Detailed comparison with real salary examples showing when the old regime saves more tax and when the new regime is better. Includes calculation tables.",
    category: "Income Tax",
    date: "May 8, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=300&fit=crop",
  },
  {
    slug: "emergency-fund-guide",
    title: "How to Build a 6-Month Emergency Fund in India",
    excerpt: "Why every Indian needs an emergency fund, how much to save, and the best places to park your emergency corpus for safety and liquidity.",
    category: "Financial Planning",
    date: "April 30, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=300&fit=crop",
  },
  {
    slug: "mutual-fund-taxation",
    title: "Mutual Fund Taxation in India 2026 - LTCG, STCG, and Indexation",
    excerpt: "Complete guide to how mutual fund gains are taxed in India after the 2024 budget changes. Covers equity, debt, hybrid funds and ELSS.",
    category: "Investments",
    date: "April 22, 2026",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="container-main">
        <div className="text-center mb-12">
          <h1 className="section-title">Recontech Finance Blog</h1>
          <p className="section-subtitle">
            Expert articles and guides on personal finance, investments, tax saving, and insurance in India. 
            Updated weekly with actionable advice.
          </p>
        </div>

        <AdUnit format="horizontal" />

        {/* Featured Post */}
        <div className="mb-12">
          <Link href={`/blog/${blogPosts[0].slug}`} className="block group">
            <div className="card p-0 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-xs text-accent font-semibold uppercase">{blogPosts[0].category}</span>
                  <h2 className="text-2xl font-bold text-primary mt-2 mb-3 group-hover:text-secondary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{blogPosts[0].date}</span>
                    <span className="mx-2">-</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card group p-0 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-accent font-semibold uppercase">{post.category}</span>
                <h3 className="font-bold text-primary mt-1 mb-2 group-hover:text-secondary transition-colors text-sm">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">-</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <AdUnit format="horizontal" />
      </div>
    </div>
  );
}
