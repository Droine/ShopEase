import React from "react";

const ContactUs = () => {
  return (
    <div className="px-4 md:px-20 py-10 bg-white text-black">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-4">Home / Contact</p>

      {/* Page Title */}
      <h2 className="text-3xl font-bold mb-10">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div className="bg-gray-50 border p-6 rounded-md space-y-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-red-500 p-2 rounded-full text-white">📞</div>
              <h4 className="font-semibold text-lg">Call To Us</h4>
            </div>
            <p className="text-gray-700">
              We are available 24/7, 7 days a week.
            </p>
            <p className="font-medium mt-1">Phone: +880611122222</p>
          </div>

          <hr className="border-gray-300" />

          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-red-500 p-2 rounded-full text-white">✉️</div>
              <h4 className="font-semibold text-lg">Write To Us</h4>
            </div>
            <p className="text-gray-700">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="mt-1 text-sm">
              Emails: <br />
              <a
                href="mailto:customer@exclusive.com"
                className="underline text-blue-600"
              >
                customer@exclusive.com
              </a>
              <br />
              <a
                href="mailto:support@exclusive.com"
                className="underline text-blue-600"
              >
                support@exclusive.com
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 border p-6 rounded-md">
          <form className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="border px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="border px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="border px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
