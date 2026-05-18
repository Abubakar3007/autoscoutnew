import "../styles/globals.css";
import Navbar from "@/components/layout/Header.jsx";
import Footer from "@/components/layout/Footer.jsx";
import TopProgressBar from "@/components/ui/TopProgressBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>

        {/* ✅ Google Font CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-gray-800 bg-neutral-50">
        <Navbar />
        <main>
          <TopProgressBar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
