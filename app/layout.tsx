import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vistara Valley | Premium Residential & Commercial Plots in Khargone",

  description:
    "Vistara Valley is a premium residential and commercial plotted development on Khandwa Road, Khargone, Madhya Pradesh.",

  keywords: [
    "Vistara Valley",
    "Vistara Valley Khargone",
    "best colony in Khargone",
    "residential plots in Khargone",
    "commercial plots in Khargone",
    "plots in Khargone",
    "residential plots on Khandwa Road",
    "commercial plots on Khandwa Road",
    "premium plots in Khargone",
    "Khandwa Road Khargone",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Vistara Valley | Premium Residential & Commercial Plots in Khargone",

    description:
      "Premium residential and commercial plots on Khandwa Road, Khargone.",

    type: "website",

    locale: "en_IN",

    siteName: "Vistara Valley",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}