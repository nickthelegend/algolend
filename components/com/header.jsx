"use client"; // Add this if you need client-side functionality


import LogoSVG from "../ui/logo";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Link from "next/link"


export default function HeaderwithLogo() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="sticky top-0 z-40 border-b bg-background p-1 rounded-lg">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden p-2 rounded-md hover:bg-primary-hover transition-colors"
          >
            {/* Icon for the mobile menu button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {/* Logo Button*/}
          <div className="flex items-center gap-4">
           <LogoSVG/>



            
          </div>
          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center justify-center gap-4">
              {/* Menu Items */}

              <Button variant="outline">Loans</Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Community</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="#" className="hover:underline" prefetch={false}>
                      Discord
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="hover:underline" prefetch={false}>
                      Blog
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="hover:underline" prefetch={false}>
                      Forum
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Resources</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="#" className="hover:underline" prefetch={false}>
                      FAQs
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="hover:underline" prefetch={false}>
                      Stats
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="hover:underline" prefetch={false}>
                      Documentation
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {/* <div></div>
            <div></div>
            <div></div> */}
          {/* Right-side button */}
          <div className="flex items-center gap-4">
          <Button  className="w-32">Connect Wallet</Button>
          </div>
        </div>

        {/* Mobile Menu (shown when isMenuOpen is true) */}
        {isMenuOpen && (
          <div className="sm:hidden bg-background p-2">
            {/* Menu Items for Mobile */}


            <Button className="transition-colors w-full my-2">Loans</Button>
            <Button className="transition-colors w-full">Community</Button>





            <Button className="hover:bg-primary-hover transition-colors w-full my-2">Resources</Button>


          </div>
        )}
      </header>
  );
}
