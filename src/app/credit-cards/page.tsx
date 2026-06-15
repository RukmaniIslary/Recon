import Image from "next/image";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Credit Cards in India 2026 - Compare & Apply",
  description: "Compare the best credit cards in India from HDFC, SBI, ICICI, Axis Bank. Find cashback, travel, fuel, and rewards cards with zero annual fees.",
  keywords: ["best credit cards India", "HDFC credit card", "SBI credit card", "cashback credit cards", "travel credit cards India"],
};

const creditCards = [
  {
    name: "HDFC Regalia Gold",
    bank: "HDFC Bank",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=180&fit=crop",
    annualFee: "Rs 2,500",
    rewards: "4X reward points on all spends",
    cashback: "Up to 5% on dining and travel",
    features: ["Complimentary airport lounge access", "Fuel surcharge waiver", "Golf privileges", "Insurance cover up to Rs 1 Cr"],
    rating: 4.5,
    bestFor: "Premium lifestyle and travel",
  },
  {
    name: "SBI SimplyCLICK",
    bank: "State Bank of India",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=300&h=180&fit=crop",
    annualFee: "Rs 499",
    rewards: "10X rewards on partner sites",
    cashback: "Up to 2.5% on online shopping",
    features: ["Amazon, Swiggy, BookMyShow rewards", "Welcome gift of Rs 500", "Fuel surcharge waiver", "No annual fee on Rs 1L spend"],
    rating: 4.3,
    bestFor: "Online shopping",
  },
  {
    name: "ICICI Amazon Pay",
    bank: "ICICI Bank",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=180&fit=crop",
    annualFee: "Zero (Lifetime free)",
    rewards: "5% cashback on Amazon",
    cashback: "2% on digital payments, 1% on all other spends",
    features: ["No joining fee", "Unlimited cashback", "Works with Amazon Pay balance", "No minimum transaction required"],
    rating: 4.6,
    bestFor: "Amazon shopping and everyday use",
  },
  {
    name: "Axis Bank Flipkart",
    bank: "Axis Bank",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=180&fit=crop",
    annualFee: "Rs 500",
    rewards: "5% unlimited cashback on Flipkart",
    cashback: "4% on preferred partners",
    features: ["Flipkart, Myntra, 2GUD cashback", "1.5% on all other spends", "Welcome voucher Rs 500", "Fuel surcharge waiver"],
    rating: 4.4,
    bestFor: "Flipkart and online shopping",
  },
  {
    name: "HDFC Millennia",
    bank: "HDFC Bank",
    image: "https://images.unsplash.com/photo-1556742205-e10c9486e506?w=300&h=180&fit=crop",
    annualFee: "Rs 1,000",
    rewards: "5% cashback via PayZapp/SmartBuy",
    cashback: "2.5% on all online spends",
    features: ["1% on offline spends", "Airport lounge access 4/year", "Designed for millennials", "No-cost EMI available"],
    rating: 4.2,
    bestFor: "Millennials and digital spenders",
  },
  {
    name: "Kotak 811 Dream Different",
    bank: "Kotak Mahindra Bank",
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=300&h=180&fit=crop",
    annualFee: "Zero (Lifetime free)",
    rewards: "Reward points on all spends",
    cashback: "Up to 2% cashback",
    features: ["No annual fee forever", "Easy approval", "Virtual card instant issue", "UPI integration"],
    rating: 4.0,
    bestFor: "First credit card, students",
  },
];

export default function CreditCardsPage() {
  return (
    <div className="py-12">
      <div className="container-main">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="section-title">Best Credit Cards in India 2026</h1>
          <p className="section-subtitle">
            Compare top credit cards from HDFC Bank, SBI, ICICI Bank, Axis Bank, and Kotak Mahindra. 
            Find the best cashback, rewards, travel, and zero annual fee cards.
          </p>
        </div>

        <AdUnit format="horizontal" />

        {/* Cards Grid */}
        <div className="space-y-8">
          {creditCards.map((card, index) => (
            <div key={card.name} className="card">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={300}
                    height={180}
                    className="rounded-lg w-full object-cover"
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center">{card.bank}</p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-blue-100 text-secondary px-2 py-1 rounded font-medium">#{index + 1} Recommended</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-medium">Best for: {card.bestFor}</span>
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-2">{card.name}</h2>
                  <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                    <div><span className="text-gray-500">Annual Fee:</span> <strong>{card.annualFee}</strong></div>
                    <div><span className="text-gray-500">Rewards:</span> <strong>{card.rewards}</strong></div>
                    <div><span className="text-gray-500">Cashback:</span> <strong>{card.cashback}</strong></div>
                    <div><span className="text-gray-500">Rating:</span> <strong>{card.rating}/5</strong></div>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-1 flex flex-col justify-center items-center">
                  <Link href="#" className="btn-primary text-center w-full mb-2">Apply Now</Link>
                  <Link href="#" className="text-secondary text-sm hover:underline">Read Full Review</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <AdUnit format="rectangle" />

        {/* SEO Content */}
        <section className="mt-12 prose prose-lg max-w-none">
          <h2 className="section-title text-2xl">How to Choose the Right Credit Card in India</h2>
          <p className="text-gray-600">
            Choosing the right credit card depends on your spending habits, income level, and financial goals. 
            If you spend heavily on online shopping, cards like ICICI Amazon Pay or Axis Flipkart offer the best value. 
            For frequent travelers, HDFC Regalia or SBI Elite provide airport lounge access and travel rewards.
          </p>
          <h3 className="text-xl font-bold text-primary mt-6">Key Factors to Consider</h3>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Annual Fee vs Benefits:</strong> Calculate if the rewards outweigh the annual charges</li>
            <li><strong>Reward Structure:</strong> Match the card's reward categories with your spending patterns</li>
            <li><strong>Credit Limit:</strong> Higher-tier cards from HDFC and ICICI offer limits up to Rs 5-10 lakh</li>
            <li><strong>Interest Rate:</strong> Ranges from 2.5% to 3.5% per month across major Indian banks</li>
            <li><strong>Add-on Benefits:</strong> Look for fuel surcharge waivers, insurance, and EMI conversion options</li>
          </ul>
        </section>

        <AdUnit format="horizontal" />
      </div>
    </div>
  );
}
