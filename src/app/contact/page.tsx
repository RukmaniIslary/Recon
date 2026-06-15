import AdUnit from "@/components/AdUnit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Recontech Finance",
  description: "Get in touch with Recontech for partnership inquiries, advertising, content suggestions, or general questions about personal finance in India.",
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container-main">
        <div className="text-center mb-12">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">
            Have a question about personal finance? Want to partner with us? We would love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card">
            <h2 className="text-xl font-bold text-primary mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership / Advertising</option>
                  <option value="content">Content Suggestion</option>
                  <option value="correction">Report an Error</option>
                  <option value="complaint">Complaint</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none resize-none"
                  placeholder="Type your message here..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="font-bold text-primary mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-sm text-gray-600">contact@recontech.in</p>
                    <p className="text-sm text-gray-600">partnerships@recontech.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-sm">Office Address</p>
                    <p className="text-sm text-gray-600">WeWork, DLF Cyber City</p>
                    <p className="text-sm text-gray-600">Gurugram, Haryana 122002</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-sm">Working Hours</p>
                    <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p className="text-sm text-gray-600">Saturday: 10:00 AM - 2:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="font-bold text-primary mb-4">For Advertisers & Partners</h3>
              <p className="text-sm text-gray-600 mb-4">
                Recontech reaches 10 lakh+ monthly readers interested in personal finance, 
                banking, and investments. We offer display advertising, sponsored content, 
                and affiliate partnerships.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Display advertising on high-traffic pages</li>
                <li>Sponsored reviews and comparisons</li>
                <li>Lead generation for financial products</li>
                <li>Custom content partnerships</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                Email: partnerships@recontech.in
              </p>
            </div>

            <AdUnit format="rectangle" />
          </div>
        </div>
      </div>
    </div>
  );
}
