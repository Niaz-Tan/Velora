import Icons from "./Icons";
import Logo from "./Logo";
import MobileResponsive from "./MobileResponsive";
import Navigation from "./Navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#EFE7DA] backdrop-blur-md overflow-hidden bg-white py-2 md:py-4">
      <div className="flex items-center justify-between px-4 md:px-8">
        {/* LEFT */}
        <div className="flex items-center gap-8">
          <Logo />
        </div>
        <Navigation />

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Icons />
          <MobileResponsive />
        </div>
      </div>
    </header>
  );
}
