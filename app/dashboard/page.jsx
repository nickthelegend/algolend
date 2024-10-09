"use client"; // Add this if you need client-side functionality

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Image from "next/image";
import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import LogoSVG from "@/components/ui/logo";
import HeaderwithLogo from "@/components/com/header";
import { Switch } from "@/components/ui/switch"
import { useWalletStore } from "@/state/useWalletStore";

// Corrected component with default export
export default function Dashboard() {

  const accountAddress = useWalletStore((state) => state.accountAddress);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex flex-col w-full bg-black">
      <HeaderwithLogo/>
      <section className="p-4 bg-blue-600 rounded-md">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Personal Stats</h2>
            <span>{accountAddress }</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">View your stats</span>
              <Switch id="view-stats" />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex space-x-4">
              <div className="text-sm">
                Total Collateralized: <span className="font-bold">$1.04</span>
              </div>
              <div className="text-sm">
                Total Borrowed: <span className="font-bold">$0.00</span>
              </div>
              <div className="text-sm">
                Net APY: <span className="font-bold">3.92%</span>
              </div>
            </div>
          </div>
        </section>
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


function SettingsIcon(props) {
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
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}
