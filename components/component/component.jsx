/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/lKNM0WoRqFE
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

"use client"; // Add this at the top of the file

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import React, { useState } from 'react';

export function Component() {

  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    (<div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background">
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
            <span className="font-bold">Algo Lend</span>



            
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
            <Button className="px-6">Dashboard</Button>
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
      <main className="flex-1">
        <section className=" py-12 px-3 sm:py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Decentralized Peer-to-Peer Lending</h1>
              <p className="text-muted-foreground">
                Borrow and lend Algorand assets with customizable terms, secured by smart contracts.
              </p>
              <div className="flex gap-4">
                <Button>Become a Lender</Button>
                <Button variant="outline">Become a Borrower</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CreditCardIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="mb-2 text-lg font-bold">Loan Requests</h3>
                  <p className="text-muted-foreground">
                    Browse and select from a variety of loan requests with flexible terms.
                  </p>
                  <Button variant="outline" className="mt-4">
                    View Loan Requests
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <WalletIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="mb-2 text-lg font-bold">Lender Dashboard</h3>
                  <p className="text-muted-foreground">Manage your lending portfolio and monitor loan performance.</p>
                  <Button variant="outline" className="mt-4">
                    View Dashboard
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ContactIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="mb-2 text-lg font-bold">Smart Contracts</h3>
                  <p className="text-muted-foreground">
                    Learn how our secure smart contracts manage loan agreements and repayments.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <UsersIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="mb-2 text-lg font-bold">Community</h3>
                  <p className="text-muted-foreground">
                    Connect with other lenders and borrowers in our vibrant community.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Join Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-muted px-3 py-12 sm:py-16 md:py-20">
          <div className=" grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Flexible Loan Terms</h2>
              <p className="text-muted-foreground">
                Lenders can set their own loan terms, including interest rates, collateral requirements, and repayment
                schedules. Borrowers can browse and select the best fit for their needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Lender</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Interest Rate</span>
                        <span className="font-medium">8.5%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Loan Term</span>
                        <span className="font-medium">6 months</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Collateral</span>
                        <span className="font-medium">120%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Borrower</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Loan Amount</span>
                        <span className="font-medium">10,000 ALGO</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Collateral</span>
                        <span className="font-medium">12,000 ALGO</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Repayment</span>
                        <span className="font-medium">Monthly</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <HashIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="mb-2 text-lg font-bold">Algorand Blockchain</h3>
                  <p className="text-muted-foreground">
                    Our platform is built on the Algorand blockchain, ensuring fast, secure, and low-cost transactions.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <LockIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="mb-2 text-lg font-bold">Secure Lending</h3>
                  <p className="text-muted-foreground">
                    Our smart contracts and decentralized architecture provide robust security for your assets.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CoinsIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="mb-2 text-lg font-bold">Earn Yield</h3>
                  <p className="text-muted-foreground">
                    Lenders can earn attractive yields on their Algorand assets by providing them as loans.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CreditCardIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="mb-2 text-lg font-bold">Borrow Easily</h3>
                  <p className="text-muted-foreground">
                    Borrowers can access the funds they need quickly and conveniently through our platform.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className=" py-12 px-3 sm:py-16 md:py-20">
          <h2 className="mb-8 text-2xl font-bold sm:text-3xl md:text-4xl">Why Choose Algo Lend?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <HashIcon className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="mb-2 text-lg font-bold">Algorand Powered</h3>
                <p className="text-muted-foreground">
                  Our platform is built on the Algorand blockchain, ensuring fast, secure, and low-cost transactions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <ComponentIcon className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="mb-2 text-lg font-bold">Flexible Terms</h3>
                <p className="text-muted-foreground">
                  Lenders can set their own loan terms, and borrowers can find the best fit for their needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <LockIcon className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="mb-2 text-lg font-bold">Secure Lending</h3>
                <p className="text-muted-foreground">
                  Our smart contracts and decentralized architecture provide robust security for your assets.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div
          className=" flex items-center justify-between py-4 px-4 sm:px-6 md:px-8">
          <p className="text-sm text-muted-foreground">&copy; 2024 Algo Lend. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
              prefetch={false}>
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
              prefetch={false}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>)
  );

}

function CoinsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>)
  );
}


function ComponentIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>)
  );
}


function ContactIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>)
  );
}


function CreditCardIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>)
  );
}


function HashIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>)
  );
}


function LockIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}


function WalletIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>)
  );
}
