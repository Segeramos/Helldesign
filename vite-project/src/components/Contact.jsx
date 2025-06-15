import React from 'react';

export default function Contact() {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <div>
          <p className="text-blue-600 font-semibold text-sm">GET IN TOUCH</p>
          <h2 className="text-3xl font-bold text-black mt-2 mb-8">
            We're here to answer your questions!
          </h2>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block font-semibold mb-1">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full border px-4 py-2 rounded-md"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-1">Email address <span className="text-red-500">*</span></label>
              <input
                type="email"
                placeholder="email@website.com"
                className="w-full border px-4 py-2 rounded-md"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold mb-1">Phone number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                placeholder="55-555-5555"
                className="w-full border px-4 py-2 rounded-md"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full border px-4 py-2 rounded-md"
                placeholder="Write your message..."
              />
            </div>

            {/* Consent */}
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" required />
              <label className="text-sm">
                I allow this website to store my submission so they can respond to my inquiry. <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-400 text-white w-full py-3 rounded-md font-semibold"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-6 text-gray-700">
          {/* Placeholder map area */}
          <div className="bg-gray-200 h-64 flex items-center justify-center text-center text-sm text-white font-medium bg-opacity-80 p-4">
            ⚠️ We are unable to show a map because the location is not full or incorrect. Please check your address details and try again.
            <br />
            <span className="text-xs mt-2 italic">Note: this message will not show on your published website.</span>
          </div>

          <div>
            <h3 className="font-bold text-black mb-1">Get in touch</h3>
            <p>
              <a href="mailto:segeramos89@gmail.com" className="underline text-blue-600">
                segeramos89@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-1">Location</h3>
            <p>
              <a
                href="https://maps.google.com/?q=Nairobi, 30 KE"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-600"
              >
                Nairobi, 30 KE
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-1">Hours</h3>
            <ul className="text-sm space-y-1">
              <li>Monday – Friday: 9:00am – 10:00pm</li>
              <li>Saturday: 9:00am – 6:00pm</li>
              <li>Sunday: 9:00am – 10:00pm</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
