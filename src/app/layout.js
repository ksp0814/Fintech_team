import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="banner">
            <h1>Fisa Bank</h1>
          </div>
        </header>
        <div className="container">{children}</div>
        <footer>
          <p>&copy; 2024 Fisa Bank. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
