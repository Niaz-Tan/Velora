import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative w-full h-50 sm:h-75 md:h-100 lg:h-125 xl:h-150 overflow-hidden">
      <Image
        src="/pouchBanner.jpg"
        alt="banner"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
};

export default HomeBanner;
