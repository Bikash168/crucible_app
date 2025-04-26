export default function Contact() {
    return (
      <main className="min-h-screen bg-white px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          If you’re ready to innovate, collaborate, or support the next wave of entrepreneurs, we’d love to hear from you.
        </p>
  
        <div className="max-w-xl mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-left text-lg text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-left text-lg text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block text-left text-lg text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-900 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    );
  }
  