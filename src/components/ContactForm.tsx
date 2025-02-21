import React from 'react'

const ContactForm = () => {
  return (
    <div className="container mx-auto px-8 py-16 text-center">
      <span className="text-green-500">Reach Out</span>
      <h2 className="text-4xl font-bold mt-2 mb-12">Connect with Us</h2>

      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <input 
            type="text" 
            placeholder="First name" 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <input 
            type="tel" 
            placeholder="Phone" 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500"
          />
          <input 
            type="text" 
            placeholder="Subject" 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500"
          />
        </div>

        <textarea 
          placeholder="Message" 
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500 mb-6"
        ></textarea>

        <div className="flex items-center gap-2 mb-8 justify-center">
          <input type="checkbox" id="policy" className="w-4 h-4 accent-green-500" />
          <label htmlFor="policy" className="text-gray-600">You agree to our friendly policy</label>
        </div>

        <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 w-full">
          Submit Form
        </button>
      </div>
    </div>
  )
}

export default ContactForm