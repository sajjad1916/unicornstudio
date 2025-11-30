import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unicorn Studio - Turn Your Idea Into Scalable AI & SaaS Products",
  description: "We handle the entire journey from concept to launch. Full-service AI and SaaS product development without the hiring hassle.",
  keywords: ["AI development", "SaaS development", "product development", "startup", "MVP"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
