import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className="flex align-element justify-center sm:justify-end">
        {/* user */}
        {/* links */}
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Sign in / Guest
          </Link>
          <Link to="/register" className="link link-hover text-xs sm:text-sm">
            Create account
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
