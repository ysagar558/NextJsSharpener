import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header>
          <h1>Products Store</h1>
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