"use client"; // Add this if you need client-side functionality

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

// Corrected component with default export
export default function Dashboard() {
  return (
    <div className="flex flex-col w-full">
      <header className="bg-background border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Lending</span>
        </div>
        <Button>Connect Wallet</Button>
      </header>
      <div className="grid grid-cols-2 gap-4 p-4 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Supply</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">$1,234,567</div>
            <div className="text-muted-foreground text-sm">Supplied across all assets</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Borrow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">$987,654</div>
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
                      <img
                        src="@/components/component/svg/ethereum-eth-logo.svg"
                        width={32}
                        height={32}
                        alt="USDC"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
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
                      <img
                        src="@/components/component/svg/ethereum-eth-logo.svg"
                        width={32}
                        height={32}
                        alt="ETH"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
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
                      <img
                        src="@/components/component/svg/ethereum-eth-logo.svg"
                        width={32}
                        height={32}
                        alt="BTC"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
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
      <div className="grid grid-cols-2 gap-4 p-4 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle>Collateral Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-muted-foreground text-sm">Collateral Value</div>
                  <div className="text-2xl font-bold">$750,000</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Liquidation Point</div>
                  <div className="text-2xl font-bold">$600,000</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-muted-foreground text-sm">Borrow Capacity</div>
                  <div className="text-2xl font-bold">$450,000</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Available to Borrow</div>
                  <div className="text-2xl font-bold">$150,000</div>
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
