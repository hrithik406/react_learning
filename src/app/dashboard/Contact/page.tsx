export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="min-h-screen flex items-center justify-center px-4 md:px-8 pb-8 md:pb-10">
        <div className="w-full max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Section - Contact Form */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h1>
                <p className="text-lg text-gray-600">
                  Please feel free to contact us and we will get back to you as soon as we can.
                </p>
              </div>

              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full pt-2 border-b-2 border-gray-300 focus:border-yellow-400 outline-none transition-colors bg-transparent text-gray-900"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full pt-2 border-b-2 border-gray-300 focus:border-yellow-400 outline-none transition-colors bg-transparent text-gray-900"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Your message..."
                    className="w-full h-20 border-2 border-gray-300 focus:border-yellow-400 outline-none transition-colors bg-transparent text-gray-900 resize-none">
                </textarea>
              </div>

              {/* Feedback Input */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Feedback
                </label>
                <textarea
                  placeholder="Share your feedback with us..."
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-yellow-400 outline-none transition-colors bg-transparent text-gray-900 resize-none"
                ></textarea>
              </div> */}

              {/* Send Button */}
              <button className="w-full bg-gray-400 hover:bg-yellow-400 text-white hover:text-gray-900 font-semibold py-4 rounded-lg transition-all duration-300 hover:cursor-pointer">
                Send
              </button>
            </div>
          </div>

          {/* Right Section - Contact Information */}
          <div className="space-y-8">
            {/* Visit Us */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Visit us
              </h2>
              <div className="space-y-2 text-gray-600">
                <p className="text-lg">263 Homebush Road</p>
                <p className="text-lg">Strathfield South 2136</p>
              </div>
            </div>

            {/* Talk to Us */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Talk to us
              </h2>
              <div className="space-y-2 text-gray-600">
                <p className="text-lg">+61 421 307 998</p>
                <p className="text-lg">helen@helenarvan.com</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Connect with us
              </h2>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-900 hover:text-yellow-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-900 hover:text-yellow-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-900 hover:text-yellow-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-900 hover:text-yellow-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.004 0C5.379 0 0 5.379 0 12.004c0 6.625 5.379 12.004 12.004 12.004 6.625 0 12.004-5.379 12.004-12.004C24.008 5.379 18.629 0 12.004 0zm3.539 14.462c-.233.233-.604.233-.837 0l-2.163-2.163v5.577c0 .326-.267.592-.592.592s-.592-.266-.592-.592V12.3l-2.163 2.163c-.233.233-.604.233-.837 0-.233-.233-.233-.604 0-.837l3.297-3.297c.116-.116.267-.175.419-.175s.302.059.419.175l3.297 3.297c.233.233.233.604-.002.837zm-.256-5.881c0 .326-.267.592-.592.592H9.305c-.326 0-.592-.266-.592-.592s.266-.592.592-.592h5.39c.325 0 .592.266.592.592z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div >
  )
}