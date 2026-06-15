import AdUnit from "@/components/AdUnit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Personal Finance India | Recontech",
  description: "Find answers to common questions about credit cards, loans, mutual funds, SIPs, income tax, and insurance in India.",
};

const faqs = [
  {
    category: "Credit Cards",
    questions: [
      {
        q: "What is the minimum salary required for a credit card in India?",
        a: "Most banks require a minimum annual income of Rs 2-3 lakh for entry-level credit cards. HDFC, ICICI, and Axis Bank offer cards for income as low as Rs 15,000/month. Some banks like Kotak also offer secured credit cards against fixed deposits with no income requirement.",
      },
      {
        q: "Does applying for a credit card affect my CIBIL score?",
        a: "Yes, each credit card application results in a hard inquiry on your credit report, which can temporarily lower your score by 5-10 points. Multiple applications in a short period can significantly impact your score. We recommend applying for only 1-2 cards at a time.",
      },
      {
        q: "What is the best lifetime-free credit card in India?",
        a: "The ICICI Amazon Pay Credit Card and Kotak 811 Dream Different are among the best lifetime-free cards. They offer no annual fee, decent cashback (1-5% depending on category), and no minimum spend requirements to waive fees.",
      },
    ],
  },
  {
    category: "Loans",
    questions: [
      {
        q: "What CIBIL score is needed for a personal loan?",
        a: "Most banks require a minimum CIBIL score of 700-750 for personal loan approval. SBI, HDFC, and ICICI typically approve loans for scores above 725. A score above 750 can help you get lower interest rates. Some NBFCs like Bajaj Finserv may approve loans at 650+.",
      },
      {
        q: "Can I transfer my home loan to another bank for lower interest?",
        a: "Yes, home loan balance transfer is available from most banks. If your current rate is more than 0.5% higher than prevailing rates, a transfer can save significant money. SBI, HDFC, and Bank of Baroda offer competitive balance transfer rates starting from 8.40% p.a.",
      },
      {
        q: "Is it better to prepay a home loan or invest the money?",
        a: "If your home loan interest rate is below 9% and you can earn 12%+ returns from equity mutual funds, investing may be more beneficial in the long term (considering tax benefits on home loan interest under Section 24). However, prepayment provides guaranteed interest savings and peace of mind.",
      },
    ],
  },
  {
    category: "SIP & Mutual Funds",
    questions: [
      {
        q: "What is the difference between direct and regular mutual fund plans?",
        a: "Direct plans have lower expense ratios (typically 0.5-1% less) because they don't pay distributor commissions. Over 20 years, this difference can result in 15-20% more corpus. Platforms like Zerodha Coin, Groww, and Kuvera offer direct plan investing at zero cost.",
      },
      {
        q: "Can I lose all my money in SIP?",
        a: "While mutual fund investments are subject to market risks, losing all money in a diversified mutual fund is extremely unlikely. Even during market crashes (2008, 2020), diversified funds recovered within 1-2 years. SIP through market cycles reduces risk via rupee cost averaging.",
      },
      {
        q: "How much should I invest in SIP for Rs 1 Crore in 15 years?",
        a: "Assuming 12% average annual returns (achievable with good equity funds), you need a monthly SIP of approximately Rs 20,000 to accumulate Rs 1 Crore in 15 years. Your total investment would be Rs 36 lakh, with Rs 64 lakh as returns from compounding.",
      },
    ],
  },
  {
    category: "Income Tax",
    questions: [
      {
        q: "Which is better - old or new tax regime?",
        a: "If your total deductions (80C + 80D + HRA + home loan interest) exceed Rs 3.75 lakh on a Rs 10 lakh income, the old regime saves more tax. For those with fewer deductions, the new regime with its lower slab rates and Rs 75,000 standard deduction is typically better.",
      },
      {
        q: "Do I need to file ITR if my income is below Rs 5 lakh?",
        a: "While income up to Rs 5 lakh is effectively tax-free (under both regimes with rebate u/s 87A), filing ITR is still recommended. It helps build financial documentation for loan applications, visa processing, and claiming TDS refunds.",
      },
      {
        q: "What is the deadline for filing income tax return?",
        a: "For individuals and HUFs (non-audit cases), the ITR filing deadline is typically July 31 of the assessment year. For FY 2025-26, the deadline to file ITR would be July 31, 2026. Late filing attracts a penalty of Rs 5,000 (Rs 1,000 if income is below Rs 5 lakh).",
      },
    ],
  },
  {
    category: "Insurance",
    questions: [
      {
        q: "How much term insurance cover do I need?",
        a: "A common rule is 10-15 times your annual income. For a 30-year-old earning Rs 10 lakh/year with dependents, a cover of Rs 1-1.5 Crore is recommended. Factor in outstanding loans, children's education costs, and inflation when deciding.",
      },
      {
        q: "Is it better to buy health insurance online or through an agent?",
        a: "Online purchase is recommended as it often comes with lower premiums (5-10% discount), instant policy issuance, and no agent bias. You also get a 15-day free look period to cancel if not satisfied. Compare on aggregators like Policybazaar before buying.",
      },
      {
        q: "Should I buy LIC endowment plans?",
        a: "For pure protection, term insurance (Rs 700-1000/month for Rs 1 Cr cover) is far more cost-effective than endowment plans. Endowment plans mix insurance with investment and typically give 4-6% returns, which barely beats inflation. Separate your insurance and investment needs.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="py-12">
      <div className="container-main">
        <div className="text-center mb-12">
          <h1 className="section-title">Frequently Asked Questions</h1>
          <p className="section-subtitle">
            Find answers to common questions about personal finance, banking, investments, and insurance in India.
          </p>
        </div>

        <AdUnit format="horizontal" />

        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((section) => (
            <section key={section.category}>
              <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-gray-200">
                {section.category}
              </h2>
              <div className="space-y-6">
                {section.questions.map((faq) => (
                  <div key={faq.q} className="card">
                    <h3 className="font-bold text-primary mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <AdUnit format="rectangle" />

        {/* CTA */}
        <div className="text-center mt-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-xl font-bold text-primary mb-3">Still have questions?</h2>
          <p className="text-gray-600 mb-6">Our team is happy to help with any personal finance queries.</p>
          <a href="/contact" className="btn-primary inline-block">Contact Us</a>
        </div>
      </div>
    </div>
  );
}
