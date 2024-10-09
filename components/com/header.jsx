"use client"; // Add this if you need client-side functionality

import LogoSVG from "../ui/logo";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { PeraWalletConnect } from "@perawallet/connect";
// import { useEffect, useState } from "react";
import algosdk from "algosdk";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// Correct Algod node URL (Using AlgoExplorer)
const algodClient = new algosdk.Algodv2(
  "",
  "https://testnet-api.algonode.cloud",
  ""
);

const peraWallet = new PeraWalletConnect();
export default function HeaderwithLogo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accountAddress, setAccountAddress] = useState(null);
  const [balance, setBalance] = useState(null); // Store wallet balance
  const isConnectedToPeraWallet = !!accountAddress;

  useEffect(() => {
    // Reconnect to the session when the component is mounted
    peraWallet
      .reconnectSession()
      .then((accounts) => {
        peraWallet.connector.on("disconnect", handleDisconnectWalletClick);

        if (accounts.length) {
          setAccountAddress(accounts[0]);
          fetchAccountBalance(accounts[0]); // Fetch balance when wallet is reconnected
        }
      })
      .catch((e) => console.log(e));
  }, []);

  // Fetch the account balance
  const fetchAccountBalance = async (address) => {
    try {
      const accountInfo = await algodClient.accountInformation(address).do();
      const accountBalance = algosdk.microalgosToAlgos(accountInfo.amount); // Convert microAlgos to Algos
      setBalance(accountBalance);
    } catch (error) {
      console.log("Failed to fetch account balance", error);
    }
  };
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
        <div className="hidden md:flex items-center justify-center gap-4">
          {/* Menu Items */}

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* <NavigationMenuLink href="#" className="text-lg font-semibold">
                  Dashboard
                </NavigationMenuLink> */}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-semibold ">
                  Markets
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Crypto Markets
                        </div>
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
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Fiat Markets
                        </div>
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
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Derivatives
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Trade futures, options, and other derivatives.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-semibold">
                  Portfolio
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 w-[800px] p-2 gap-4">
                    <div className="grid gap-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="#"
                          className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                          prefetch={false}
                        >
                          <div className="text-sm font-medium leading-none group-hover:underline">
                            Overview
                          </div>
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
                          <div className="text-sm font-medium leading-none group-hover:underline">
                            Transactions
                          </div>
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
                          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground"></div>
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
                <NavigationMenuTrigger className="text-lg font-semibold">
                  Community
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Forums
                        </div>
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
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Events
                        </div>
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
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Leaderboard
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          See who's leading the community.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-semibold">
                  Help
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          FAQ
                        </div>
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
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Support
                        </div>
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
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Documentation
                        </div>
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

        {isConnectedToPeraWallet ? (
          <div className="flex items-center gap-1">
            {/* <Button
              onClick={
                isConnectedToPeraWallet
                  ? handleDisconnectWalletClick
                  : handleConnectWalletClick
              }
              style={{
                backgroundColor: isConnectedToPeraWallet
                  ? "#f44336"
                  : "#4caf50", // Red for disconnect, green for connect
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s ease, transform 0.2s",
                // marginBottom: '16px',
              }}
            >
              <text className="text-white">Disconnect</text>
            </Button> */}

            <Button variant="ghost" className="text-white">
              <SettingsIcon className="w-6 h-6" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white">
                  <UserIcon className="w-6 h-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <div onClick={
                isConnectedToPeraWallet
                  ? handleDisconnectWalletClick
                  : handleConnectWalletClick
              } className="flex items-center gap-2 w-full p-2 cursor-pointer rounded-btn text-sm font-medium text-red-500	 hover:bg-zinc-800">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4 "
                  >
                    <path
                      d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Disconnect
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Button
            onClick={
              isConnectedToPeraWallet
                ? handleDisconnectWalletClick
                : handleConnectWalletClick
            }
            // className="w-32"
            // style={{

            //   backgroundColor: isConnectedToPeraWallet ? '#f44336' : '#4caf50', // Red for disconnect, green for connect

            // }}
          >
            Connect Wallet
          </Button>
        )}
      </div>

      {/* Mobile Menu (shown when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="sm:hidden bg-background p-2">
          {/* Menu Items for Mobile */}

          <Button className="transition-colors w-full my-2">Loans</Button>
          <Button className="transition-colors w-full">Community</Button>

          <Button className="hover:bg-primary-hover transition-colors w-full my-2">
            Resources
          </Button>
        </div>
      )}
    </header>
  );

  function handleConnectWalletClick() {
    peraWallet
      .connect()
      .then((newAccounts) => {
        peraWallet.connector.on("disconnect", handleDisconnectWalletClick);
        setAccountAddress(newAccounts[0]);
        fetchAccountBalance(newAccounts[0]); // Fetch balance after wallet is connected
      })
      .catch((error) => {
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
          console.log(error);
        }
      });
  }

  function handleDisconnectWalletClick() {
    if (!isConnectedToPeraWallet) {
      return;
    }

    peraWallet.disconnect();
    setAccountAddress(null);
    setBalance(null); // Clear balance on disconnect
  }
}

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
);

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
