// app/layout.js
export const metadata = {
    title: "Algo Lend", // Your page title
    description: "Decentralized Peer-to-Peer Lending", // Your description
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          {/* Link to the favicon */}
          <link rel="icon" href="/logo/favicon.ico" />
        </head>
        <body>{children}</body>
      </html>
    );
  }