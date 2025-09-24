"use client";
import Logo from "../navbar/Logo";
import SearchBar from "../navbar/Searchbar";
import UserMenu from "../navbar/UserMenu";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  // Example state; you might use a context or other state management for authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-gray-100 shadow-sm">
      <div className="flex flex-col">
        <div className="flex items-center justify-between w-[90%] mx-auto py-3">
          <Logo />
          <SearchBar />
          {isLoggedIn ? (
            <>
              <UserMenu isLoggedIn={isLoggedIn} />
            </>
          ) : (
            <UserMenu isLoggedIn={isLoggedIn} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
