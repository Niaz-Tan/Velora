import Icons from "./Icons";
import Logo from "./Logo";
import MobileResponsive from "./MobileResponsive";
import Navigation from "./Navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#EFE7DA] bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 md:px-8 h-16">
        {/* LEFT */}
        <div className="flex items-center gap-8">
          <Logo />
          <Navigation />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Icons />
          <MobileResponsive />
        </div>
      </div>
    </header>
  );
}
