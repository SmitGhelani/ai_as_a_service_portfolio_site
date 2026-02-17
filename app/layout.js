import "./globals.css";

export const metadata = {
  title: "NeuralForge AI — Custom AI Solutions",
  description:
    "We craft bespoke artificial intelligence systems that transform business operations, automate complex workflows, and unlock competitive advantages at scale.",
  keywords: "AI solutions, machine learning, custom AI, LLM, computer vision, AI consulting",
  openGraph: {
    title: "NeuralForge AI — Custom AI Solutions",
    description: "Bespoke AI systems for enterprise businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
