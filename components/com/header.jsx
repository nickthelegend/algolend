"use client"; // Add this if you need client-side functionality


import LogoSVG from "../ui/logo";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuContent,NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { CaretDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';

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
          <LogoSVG />




        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center gap-4">
          {/* Menu Items */}

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* <NavigationMenuLink href="#" className="text-lg font-semibold">
                  Dashboard
                </NavigationMenuLink> */}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-semibold">Markets</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Crypto Markets</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Trade cryptocurrencies and digital assets.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Fiat Markets</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Trade traditional fiat currencies.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Derivatives</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Trade futures, options, and other derivatives.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-semibold">Portfolio</NavigationMenuTrigger>
                <NavigationMenuContent>
                <div className="grid grid-cols-2 w-[800px] p-2 gap-4">
                    <div className="grid gap-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="#"
                          className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                          prefetch={false}
                        >
                          <div className="text-sm font-medium leading-none group-hover:underline">Overview</div>
                          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            View your overall portfolio performance.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="#"
                          className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                          prefetch={false}
                        >
                          <div className="text-sm font-medium leading-none group-hover:underline">Transactions</div>
                          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            View your past transactions and activity.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="grid gap-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="#"
                          className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                          prefetch={false}
                        >
                          <div className="text-sm font-medium leading-none group-hover:underline"></div>
                          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      {/* <div className="bg-accent/10 rounded-md p-4">
                        <h4 className="text-sm font-semibold">Portfolio Callout</h4>
                        <p className="text-sm text-muted-foreground">
                          Get insights and analysis on your portfolio performance.
                        </p>
                      </div> */}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-semibold">Community</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Forums</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Discuss and collaborate with other users.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Events</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Stay up to date with community events.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Leaderboard</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          See who's leading the community.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-semibold">Help</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">FAQ</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Find answers to common questions.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Support</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Get help from our support team.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Documentation</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Read our comprehensive documentation.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* <div></div>
            <div></div>
            <div></div> */}
        {/* Right-side button */}
        <div className="flex items-center gap-4">
          <Button className="w-32">Connect Wallet</Button>
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


const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenuLink asChild>
      <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
));

