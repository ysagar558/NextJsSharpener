import Link from "next/link";
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header>
          <h1>Products Store <span> <Image src = "/images/Store.jpg"
          alt="logo image"
          height={50}
          width={50}
          priority
          />
          </span></h1>
          
          
           <nav>
            <Link href="/">Home</Link>
            {" | "}
            <Link href="/products">Products</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer>
          <p>2026 Products Store. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}