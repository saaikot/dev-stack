import logo from '../assets/logo-text.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Block */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Dev Stack Logo" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-gray-600">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-gray-600">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-gray-600">LinkedIn</a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-500">Home</a></li>
              <li><a href="#" className="hover:text-pink-500">Technologies</a></li>
              <li><a href="#" className="hover:text-pink-500">Projects</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-500">About</a></li>
              <li><a href="#" className="hover:text-pink-500">Contact</a></li>
              <li><a href="#" className="hover:text-pink-500">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <a href="#" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}