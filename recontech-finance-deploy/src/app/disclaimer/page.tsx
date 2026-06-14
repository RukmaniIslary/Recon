import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - Recontech",
  description: "Important disclaimer about financial information provided on Recontech. Not financial advice.",
};

export default function DisclaimerPage() {
  return (
    <div className="py-12">
      <div className="container-main max-w-4xl">
        <h1 className="section-title mb-8">Disclaimer</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: June 1, 2026</p>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-primary">General Information</h2>
            <p>The information provided on Recontech (recontech.in) is for general informational and educational purposes only. It should not be construed as professional financial advice, investment advice, tax advice, or any form of recommendation.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">Not Financial Advice</h2>
            <p>Recontech is not a registered financial advisor, investment advisor, or tax consultant. The content on this website does not constitute personalized financial advice. Always consult with a SEBI-registered investment advisor or a qualified tax professional before making financial decisions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">Investment Risks</h2>
            <p>Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance of mutual funds does not guarantee future returns. The NAV of mutual fund units can go up or down based on market conditions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">Accuracy of Information</h2>
            <p>While we strive to provide accurate and up-to-date information about credit cards, loans, mutual funds, income tax, and insurance, interest rates, fees, terms, and conditions change frequently. We recommend verifying all information directly with the respective financial institution before making any decision.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">Affiliate Disclosure</h2>
            <p>Recontech may earn referral commissions when you apply for financial products (credit cards, loans, insurance) through links on our website. This does not affect our editorial independence or the ranking of products. We clearly mark sponsored content and affiliate links.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">Third-Party Products</h2>
            <p>All credit cards, loans, mutual funds, and insurance products mentioned on this website are offered by their respective banks, AMCs, and insurance companies. Recontech does not guarantee approval, interest rates, or terms offered by these institutions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">Limitation of Liability</h2>
            <p>Recontech shall not be held responsible for any financial loss, damage, or inconvenience arising from the use of information on this website. Users are advised to exercise due diligence and seek professional advice for their specific financial situations.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
