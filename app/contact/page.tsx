export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-white px-4 py-16 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
        <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-12">
          If you’re ready to innovate, collaborate, or support the next wave of entrepreneurs, we’d love to hear from you. Reach out to us today and let’s make an impact together!
        </p>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            {/* Full Name Input */}
            <div>
              <label htmlFor="name" className="block text-left text-lg font-semibold text-gray-800 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-left text-lg font-semibold text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Email"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-left text-lg font-semibold text-gray-800 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-800 text-white px-8 py-3 rounded-md text-lg font-semibold transition duration-300 hover:bg-blue-900"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Additional Section: Contact Information */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Visit Us</h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            We’re located at the heart of the innovation district. Visit us to discuss your next big idea!
          </p>

          {/* Address and Contact Info */}
          <div className="flex flex-col lg:flex-row justify-center gap-y-10 lg:gap-x-16 text-white text-center text-lg mb-12">
            <div>
              <p className="font-semibold">Address</p>
              <p>
                F-2, Chandaka Industrial Estate,<br />
                In front of Infocity, Chandrasekharpur,<br />
                Bhubaneswar, Odisha - 751024
              </p>
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p>+91 - 9439173220</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p>contact@crucibleforum.com</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="h-64 sm:h-96 w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7482.0614668432645!2d85.807754!3d20.340349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190902b2a59ce5%3A0xdfb554a4e0bafffb!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sus!4v1738245957890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
