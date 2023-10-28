// components/Navbar.tsx

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-white text-2xl font-bold">Your Brand</h1>
        </Link>

        <ul className="hidden sm:flex space-x-4">
          <li>
            <Link className="text-white" href="/about">
              <h1>About</h1> 
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/faq">
              <h1>FAQ</h1>
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/contact">
              <h1>Contact</h1> 
            </Link>
          </li>
         
        </ul>

        <div className="sm:hidden">
          {/* Mobile menu button */}
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
