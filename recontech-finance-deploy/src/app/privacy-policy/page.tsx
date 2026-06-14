import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Recontech",
  description: "Recontech privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12">
      <div className="container-main max-w-4xl">
        <h1 className="section-title mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: June 1, 2026</p>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-primary">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or use our comparison tools. This may include your name, email address, and financial preferences.</p>
            <p>We also automatically collect certain information when you visit our website, including your IP address, browser type, device information, pages viewed, and referring URL.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide and improve our financial comparison services</li>
              <li>To send you relevant financial content and newsletters (with your consent)</li>
              <li>To display personalized advertisements through Google AdSense</li>
              <li>To analyze website traffic and user behavior for improving content</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">3. Advertising</h2>
            <p>We use Google AdSense to display advertisements on our website. Google may use cookies and tracking technologies to serve ads based on your prior visits to our website and other websites. You can opt out of personalized advertising by visiting Google's Ads Settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">4. Cookies</h2>
            <p>We use cookies to enhance your browsing experience, analyze site traffic, and serve targeted advertisements. You can control cookies through your browser settings. Disabling cookies may affect some functionality of our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">5. Third-Party Links</h2>
            <p>Our website contains links to bank websites, mutual fund platforms, and insurance companies. We are not responsible for the privacy practices of these third-party sites. We encourage you to review their privacy policies before providing personal information.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">6. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">7. Your Rights</h2>
            <p>Under applicable Indian data protection laws, you have the right to access, correct, or delete your personal information. Contact us at privacy@recontech.in to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary">8. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
            <p>Email: privacy@recontech.in<br />Address: WeWork, DLF Cyber City, Gurugram, Haryana 122002</p>
          </section>
        </div>
      </div>
    </div>
  );
}
