import "../styles/globals.css";
import SiteTopBar from "../components/SiteTopBar";
import SiteTitleBar from "../components/SiteTitleBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body>
        <SiteTopBar />
        <SiteTitleBar />
        {children}
      </body>
    </html>
  );
}