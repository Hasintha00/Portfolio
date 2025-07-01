import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-slate-700/50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="flex items-center">
              Made  by Hasintha Meegahawala
            </p>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Hasintha Meegahawala. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
