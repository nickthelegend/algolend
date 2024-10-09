"use client"

import { PeraWalletConnect } from "@perawallet/connect";
import { useEffect, useState } from "react";
import algosdk from "algosdk";

// Correct Algod node URL (Using AlgoExplorer)
const algodClient = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');

const peraWallet = new PeraWalletConnect();

export default function IndexPage() {
  const [accountAddress, setAccountAddress] = useState(null);
  const [balance, setBalance] = useState(null);  // Store wallet balance
  const isConnectedToPeraWallet = !!accountAddress;

  useEffect(() => {
    // Reconnect to the session when the component is mounted
    peraWallet
      .reconnectSession()
      .then((accounts) => {
        peraWallet.connector.on("disconnect", handleDisconnectWalletClick);

        if (accounts.length) {
          setAccountAddress(accounts[0]);
          fetchAccountBalance(accounts[0]);  // Fetch balance when wallet is reconnected
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

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <button
        onClick={
          isConnectedToPeraWallet
            ? handleDisconnectWalletClick
            : handleConnectWalletClick
        }
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: isConnectedToPeraWallet ? '#f44336' : '#4caf50', // Red for disconnect, green for connect
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease, transform 0.2s',
          marginBottom: '16px',
        }}
      >
        {isConnectedToPeraWallet ? "Disconnect" : "Connect to Pera Wallet"}
      </button>
      {isConnectedToPeraWallet && (
        <div style={{ textAlign: 'center' }}>
          <p>Connected Wallet Address: {accountAddress}</p>
          <p>Balance: {balance !== null ? `${balance} ALGO` : "Fetching balance..."}</p>
        </div>
      )}
    </div>
  );

  function handleConnectWalletClick() {
    peraWallet
      .connect()
      .then((newAccounts) => {
        peraWallet.connector.on("disconnect", handleDisconnectWalletClick);
        setAccountAddress(newAccounts[0]);
        fetchAccountBalance(newAccounts[0]);  // Fetch balance after wallet is connected
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
    setBalance(null);  // Clear balance on disconnect
  }
}
