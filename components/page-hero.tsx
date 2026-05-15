import Image from "next/image";

    export function PageHero({ title }: { title: string }) {
      return (
        <>
        <section className="relative">
          <div className="relative h-64 w-full sm:h-80 md:h-96">
            <Image
              src="/jacksonville-hero.webp"
              alt="Jacksonville Florida Skyline - Pro Tax Payers Headquarters"
              fill
              unoptimized
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-balance text-center text-3xl font-bold text-white drop-shadow-lg sm:text-4xl md:text-5xl">
                { title }
              </h1>
            </div>
          </div>

          {/* Overlapping Logo */}
          <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-1/2">
            <div className="flex h-28 w-28 items-center justify-center rounded-2xl border-4 border-background bg-white shadow-xl sm:h-32 sm:w-32 md:h-36 md:w-36">
              <Image
                src="/protaxpayers-logo.webp"
                alt="Pro Tax Payers Logo"
                width={120}
                height={120}
                unoptimized
                className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28"
              />
            </div>
          </div>
        </section>

        <div className="h-24 sm:h-28 md:h-32" />
        </>
      );
    }