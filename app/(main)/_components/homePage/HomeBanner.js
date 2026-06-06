import Image from "next/image";

const HomeBanner = () => {
  return (
    <section className="relative w-full h-75 sm:h-100 md:h-125 lg:h-150 overflow-hidden">
      <Image
        src="/pouchBanner.jpg"
        alt="Crochet products banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-xs sm:max-w-md lg:max-w-xl text-white">
            <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs sm:text-sm backdrop-blur-sm">
              Handmade with Love
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Beautiful Crochet
              <br />
              Made Just for You
            </h1>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/90">
              Discover handcrafted crochet bags, plushies, accessories, and
              custom creations designed with care and attention to every detail.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap gap-3">
              <button className="rounded-lg bg-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-black transition hover:scale-105 cursor-pointer">
                Shop Now
              </button>

              <button className="rounded-lg border border-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-white hover:text-black cursor-pointer">
                Custom Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
