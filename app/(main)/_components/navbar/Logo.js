import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/VeloraWord.png"
        width={130}
        height={45}
        alt="logo"
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
