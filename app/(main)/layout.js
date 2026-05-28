import Footer from "@/components/Footer";
import MobileNavigation from "./_components/navbar/MobileNavigation";
import Navbar from "./_components/navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Navbar />
        <main>{children}</main>
        <MobileNavigation />
      </div>
      <Footer />
    </div>
  );
}
