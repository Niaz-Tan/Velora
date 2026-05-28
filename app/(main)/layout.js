import Footer from "@/components/Footer";
import MobileNavigation from "./_components/navbar/MobileNavigation";
import Navbar from "./_components/navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <MobileNavigation />
      <Footer />
    </div>
  );
}
