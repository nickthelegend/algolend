"use client"; // Add this if you need client-side functionality

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Image from "next/image";
import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import LogoSVG from "@/components/ui/logo";

// Corrected component with default export
export default function Dashboard() {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex flex-col w-full">
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
      <div className="grid grid-cols-2 gap-4 p-4 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Supply</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-4xl font-bold">$1,234,567</div>
            <div className="text-muted-foreground text-sm">Supplied across all assets</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Borrow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-4xl font-bold">$987,654</div>
            <div className="text-muted-foreground text-sm">Borrowed across all assets</div>
          </CardContent>
        </Card>
      </div>
      <div className="p-4 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle>Available Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asset</TableHead>
                  <TableHead className="text-right">Supply APY</TableHead>
                  <TableHead className="text-right">Borrow APY</TableHead>
                  <TableHead className="text-right">Total Supply</TableHead>
                  <TableHead className="text-right">Total Borrow</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/usd-coin-usdc-logo.svg"
                        width={32}
                        height={32}
                        alt="USDC"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "contain" }}
                      />
                      <span>USDC</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">2.5%</TableCell>
                  <TableCell className="text-right">5.0%</TableCell>
                  <TableCell className="text-right">$500,000</TableCell>
                  <TableCell className="text-right">$250,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/ethereum-eth-logo.svg"
                        width={32}
                        height={32}
                        alt="ETH"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "contain" }}
                      />
                      <span>ETH</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">3.0%</TableCell>
                  <TableCell className="text-right">6.5%</TableCell>
                  <TableCell className="text-right">$750,000</TableCell>
                  <TableCell className="text-right">$500,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/bitcoin-btc-logo.svg"
                        width={32}
                        height={32}
                        alt="BTC"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "contain" }}
                      />
                      <span>BTC</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">4.0%</TableCell>
                  <TableCell className="text-right">8.0%</TableCell>
                  <TableCell className="text-right">$1,000,000</TableCell>
                  <TableCell className="text-right">$750,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="flex sm:flex-row gap-4 p-4 md:p-6 flex-col">
  {/* Left Section: Collateral Management */}
  <Card className="w-[100%] sm:w-1/2 ">
    <CardHeader>
      <CardTitle className="text-sm sm:text-2xl ">Collateral Management</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="text-xs text-muted-foreground sm:text-sm">Collateral Value</div>
            <div className="text-sm sm:text-2xl font-bold">$750,000</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground sm:text-sm">Liquidation Point</div>
            <div className="text-sm sm:text-2xl font-bold">$600,000</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="text-xs text-muted-foreground sm:text-sm">Borrow Capacity</div>
            <div className="text-sm sm:text-2xl font-bold">$450,000</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground sm:text-sm">Available to Borrow</div>
            <div className="text-sm sm:text-2xl font-bold">$150,000</div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Right Section: Another Collateral Management */}
  <Card className="w-[100%] sm:w-1/2">
    <CardHeader>
      <CardTitle className="text-sm sm:text-2xl ">Collateral Management</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="text-xs text-muted-foreground sm:text-sm">Collateral Value</div>
            <div className="text-sm sm:text-2xl font-bold">$750,000</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground sm:text-sm">Liquidation Point</div>
            <div className="text-sm sm:text-2xl font-bold">$600,000</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="text-xs text-muted-foreground sm:text-sm">Borrow Capacity</div>
            <div className="text-sm sm:text-2xl font-bold">$450,000</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground sm:text-sm">Available to Borrow</div>
            <div className="text-sm sm:text-2xl font-bold">$150,000</div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</div>

      
    </div>
  );
}

// Corrected component for the MountainIcon
function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
