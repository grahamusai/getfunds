import Link from "next/link";

import { HiOutlineViewGrid, HiOutlineChevronLeft } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between">
      <button>
        <HiOutlineChevronLeft size={30} />
      </button>
      <Link href="/" className="text-2xl font-black">
        Get Funds
      </Link>
      <button>
        <HiOutlineViewGrid size={30} />
      </button>
    </nav>
  );
};

export default Navbar;
