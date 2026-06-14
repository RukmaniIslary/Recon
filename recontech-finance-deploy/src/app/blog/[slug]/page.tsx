import AdUnit from "@/components/AdUnit";
import Image from "next/image";
import Link from "next/link";

const articles: Record<string, { title: string; category: string; date: string; image: string; content: string }> = {
  "best-credit-cards-2026": {
    title: "10 Best Credit Cards in India for 2026 - Complete Comparison Guide",
    category: "Credit Cards",
    date: "June 10, 2026",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    content: `Choosing the right credit card can save you thousands of rupees every year through cashback, rewards, and fee waivers. We analyzed over 50 credit cards from major Indian banks to bring you this definitive ranking for 2026.

Our top picks include the ICICI Amazon Pay Credit Card for online shoppers (5% cashback on Amazon, lifetime free), HDFC Regalia Gold for premium users (airport lounge access, 4X rewards), and SBI SimplyCLICK for budget-conscious buyers (10X rewards on partner brands, Rs 499 annual fee).

When choosing a credit card, consider your primary spending category. If you shop heavily on Amazon or Flipkart, co-branded cards offer the best value. For frequent travelers, premium cards from HDFC and Axis Bank provide complimentary lounge access and travel insurance.

Key factors we evaluated include annual fee vs. rewards ratio, cashback percentage on different categories, additional perks like lounge access, fuel surcharge waiver, and the ease of reward redemption.

For first-time credit card users, we recommend starting with a lifetime-free card like Kotak 811 Dream Different or ICICI Amazon Pay. These cards have no annual fee and provide decent cashback on everyday purchases.`,
  },
  "save-tax-section-80c": {
    title: "How to Save Up to Rs 1.5 Lakh in Income Tax Under Section 80C",
    category: "Income Tax",
    date: "June 5, 2026",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    content: `Section 80C of the Income Tax Act is the most popular tax-saving provision used by salaried individuals in India. It allows you to claim deductions up to Rs 1,50,000 from your taxable income by investing in specified instruments.

The best Section 80C investments depend on your risk appetite and financial goals. ELSS mutual funds offer the highest potential returns (12-15% CAGR historically) with the shortest lock-in period of 3 years. PPF offers guaranteed returns of 7.1% with sovereign safety but has a 15-year lock-in.

For a balanced approach, we recommend allocating Rs 50,000 to ELSS for growth, Rs 50,000 to PPF for safety, and Rs 50,000 to NPS for additional retirement planning (which also gives extra Rs 50,000 under 80CCD(1B)).

Remember that EPF contributions, children's tuition fees, and home loan principal repayment also count under 80C. Many salaried individuals have Rs 50,000-80,000 already covered through EPF before making additional investments.

Important: Section 80C deductions are only available under the Old Tax Regime. If you have opted for the New Tax Regime, these deductions cannot be claimed. Calculate your total tax under both regimes before deciding.`,
  },
  "sip-beginners-guide": {
    title: "SIP for Beginners: How to Start Investing with Rs 500 Per Month",
    category: "Investments",
    date: "May 28, 2026",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    content: `A Systematic Investment Plan (SIP) is the easiest way to start building wealth in India. You can begin with as little as Rs 500 per month and benefit from professional fund management and the power of compounding.

Step 1: Complete your KYC. You need PAN card, Aadhaar card, and a cancelled cheque. Platforms like Zerodha, Groww, and Paytm Money offer paperless e-KYC that takes just 5 minutes.

Step 2: Choose a platform. Zerodha Coin is best for experienced investors who want direct plans. Groww is ideal for beginners with its simple interface. Paytm Money offers good portfolio tracking features.

Step 3: Select your fund. For beginners, we recommend starting with a large-cap or flexi-cap fund. Parag Parikh Flexi Cap, Mirae Asset Large Cap, and Axis Bluechip are excellent choices with consistent track records.

Step 4: Set your SIP date and amount. Choose a date 2-3 days after your salary date. Start with an amount you can sustain for at least 3-5 years without interruption.

The power of SIP lies in rupee cost averaging and compounding. A Rs 10,000 monthly SIP in a fund returning 12% CAGR will grow to approximately Rs 50 lakh in 15 years (your total investment: Rs 18 lakh).`,
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    return (
      <div className="py-20 text-center container-main">
        <h1 className="text-3xl font-bold text-primary mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8">The article you are looking for does not exist or has been moved.</p>
        <Link href="/blog" className="btn-primary">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <span className="text-xs text-accent font-semibold uppercase">{article.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">{article.title}</h1>
          <p className="text-sm text-gray-500">{article.date}</p>
        </div>

        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={400}
          className="rounded-xl w-full object-cover mb-8"
        />

        <AdUnit format="horizontal" />

        <div className="prose prose-lg max-w-none">
          {article.content.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>
          ))}
        </div>

        <AdUnit format="rectangle" />

        <div className="mt-12 border-t pt-8">
          <h2 className="text-xl font-bold text-primary mb-4">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/best-credit-cards-2026" className="card p-4 hover:bg-gray-50">
              <span className="text-xs text-accent">Credit Cards</span>
              <h3 className="font-bold text-sm text-primary mt-1">10 Best Credit Cards in India for 2026</h3>
            </Link>
            <Link href="/blog/save-tax-section-80c" className="card p-4 hover:bg-gray-50">
              <span className="text-xs text-accent">Income Tax</span>
              <h3 className="font-bold text-sm text-primary mt-1">Save Rs 1.5 Lakh Under Section 80C</h3>
            </Link>
          </div>
        </div>

        <AdUnit format="horizontal" />
      </div>
    </article>
  );
}
