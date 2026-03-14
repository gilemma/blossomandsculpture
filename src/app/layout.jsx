import "../styles/globals.css";
import SiteTopBar from "../components/SiteTopBar";
import SiteTitleBar from "../components/SiteTitleBar";
import { CartProvider } from "../components/cart/CartProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body>
        <CartProvider>
          <SiteTopBar />
          <SiteTitleBar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}