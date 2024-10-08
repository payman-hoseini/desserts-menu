'use client'
import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./components/store/store";



 const metadata: Metadata = {
  title: "Product List",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Order Dessert</title>
      </head>
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
