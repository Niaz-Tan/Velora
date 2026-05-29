import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
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
