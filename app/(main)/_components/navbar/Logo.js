import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/VeloraLogo.png"
        width={100}
        height={45}
        alt="logo"
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
