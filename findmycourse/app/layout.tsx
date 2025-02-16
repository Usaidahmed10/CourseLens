import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Find My Course",
  description: "Best app to find courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
