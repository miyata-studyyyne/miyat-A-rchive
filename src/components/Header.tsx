"use client";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              miyat-A-rchive
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              <li>
                <a
                  href="/works"
                  className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/milestone"
                  className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Milestone
                </a>
              </li>
              <li>
                <a
                  href="contact"
                  className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="portfolio"
                  className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
