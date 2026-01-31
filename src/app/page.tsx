import { AccordionItem } from "./components/accordion";
import { ScrollReveal, HeroReveal } from "./components/scroll-reveal";
import { MobileNav } from "./components/mobile-nav";

const SERVICES = [
  {
    title: "Full Sets",
    price: "$65+",
    icon: "diamond",
    features: [
      "Acrylic Full Set",
      "Gel-X Extensions",
      "Custom Shaping (Coffin, Stiletto, etc.)",
      "Solid Gel Color Included",
    ],
    cta: "Book Full Set",
    popular: false,
  },
  {
    title: "Maintenance",
    price: "$45+",
    icon: "auto_fix_high",
    features: [
      "Acrylic / Gel Fills (2-3 weeks)",
      "Nail Repairs",
      "Re-shaping",
      "Safe Gel Removal",
    ],
    cta: "Book Maintenance",
    popular: true,
  },
  {
    title: "Natural Nails",
    price: "$40+",
    icon: "spa",
    features: [
      "Gel Manicure",
      "Luxury Pedicure",
      "Structured Gel Overlay (BIAB)",
      "Cuticle Care",
    ],
    cta: "Book Mani/Pedi",
    popular: false,
  },
];

const GALLERY_IMAGES = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK_AHs4HMHvSk_S_4-KLBhRUkFrO5Z1DoJ8hprE29bLOFl_LkNW4KOl-c6_sTZKA1T_zXW9iKLWnwCTHE3gniirQzEyFFdgALJjEua11i2hpbHIhMtV6AEo7WFUTRXCuy-ve_1ig2rDGjTTQP3OFxWHQkX7IcboY_YqAKoGg4hyzOTUZpO4B5w6JMXuhDZF44uFfCcZNJgVSkoehICQTsHDJr8zI0bUE8AUMYhzpM4oO87eGfCW8Cd9uJaR1umtWKAdMT40kHWcPM",
    alt: "Long almond shape acrylic nails with pink french tip design",
    label: "Pink Frenchies",
    sub: "Acrylic Set",
    className: "row-span-2 col-span-2 md:col-span-1 md:row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTnz1xvtzztr7crAMAkQ1Z92IHpAZX_Z-SVYZ8153wVowOnT1GitjdepCQjKh9l0JRn0R30uM-bFGuCoe8CuPMvxBS7DzDmKIpaaHPYsNOjNGkfUbYSeR2P04qcU_KgnEru_VVOkpki1O0maKDoWc6S8k1US2x_qmKuosrPMXQEATDSDFO1SJOjpZqjMoaFvz6JB0YLSah4sZAKBAjG1IllD1UOs6e8-YSLjeClbm4-z3MHmYGK_yFdYC_WptGH-afbMvRWVtd1aA",
    alt: "Abstract swirl nail art design in pastel colors",
    label: "",
    sub: "",
    className: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPAVYnDcDkVsFbvGGcsM4Qyezq_cycpoPCKV-Ua9PwwR8bqskSlUnagjEGGS4dYs6Rpu508wQbA9Rs7ECb8nwu_eb6YpmlKTwPlu6LlSd2DMUz6cgRSN70XSC6N9X0H8wzUKJsRzXmV6S-p3Gpif7cZZ_fz2enURQ6Rgu2_ANIxRUjBQSTxulEfGsC38R0dpfv1nvDtXXFGx2aKhkfBzwIQ_E47EzAMnpsxpIgst12LA55k5c9DnJoWRSvaWVmrn4r1RDiYkNNOpk",
    alt: "Close up of glitter gel manicure",
    label: "",
    sub: "",
    className: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Ay7dELGnGzC-LuhCRM75mmItley0z6oqUTCGL4O__DxhaJYXCpqQQ7VonEeuwdxa72nfJldv9EDc4xqHa56G542ef_sf_EPypLI_0ht8l0ll5c5QcpZUpaK0qi-csyePse_RERTZZ-_aD7a2se5R2wU-duZGYB_-9_rabGUhkyIkIqPl5VWIHml3MwkdLNEwpNjYdb_0u35vmjuAl5B8VTxs434HRybItPuY2YuQGznb-7EmePDrUdeY1t310mp_XsuI6Hps0_s",
    alt: "White marble nail art design",
    label: "",
    sub: "",
    className: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5xzMeNF_gp8T2QDDPQWtOtH0caLWxyBJ-tOR0Sqe1_3tpY4v0-QHt2_sMvB5vfg4Z_MxHkG_S4p4natsjWZBX69bX8cKOb6ubXyo1kLT2XyQF2AC53SlBMocQiVIAvtBquYYa3jv9P67BhPxTn23pioWZmguLQ5nfMBRCijOX7hcHiWimZquNiAbnjXQUCGcDR-C2fEM4SOVtFji3aZSAuFiYmT5YcsWC4nfaNCBCpEL74FF32n_OvURbV_5B5XCjuFesVuQbszw",
    alt: "Seasonal holiday nail art design",
    label: "",
    sub: "",
    className: "col-span-2 md:col-span-1",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The absolute best! Having Katelyn come to my house while my baby naps is a game changer. My nails have never looked better!",
    name: "Sarah Jenkins",
    location: "Riverside, CA",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCR_PBlzqInZqFUtCEpSjtRlzXt1xyM5ubQtd4D-VcniMUQ4NqcSkW2KWdrU_0qdsuFsi9BmRHIdGjHAXC6nMnaiWpDwaNfxzUYvrRr58ciqCV5tTirSB8_MdZv2_EIAXX6RhOO1rrqypZOr3wFqKHb-EfGTkYjuafx4gxlSZU06GH_0Oek0gReG8B-pa0BuTiRPSgkBNEQrm5n2B0IAHqAXt680PMprVInGerod02EOo8JJzFT2pcuJawS_9Z2HkUe_k4WsgNiSgA",
    elevated: false,
  },
  {
    quote:
      "I'm obsessed with my Gel-X set. She is so meticulous with the shaping and the art is exactly like the picture I showed her.",
    name: "Michelle T.",
    location: "Moreno Valley, CA",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCNfVyKqLeI88wG-UuYZ0zAvLyyHkVf3FPQ-OMUaicg61YNSf1fyPxwC1dn3WcPrpNr_3zj3qo4UxqRNQTY8RVnTFM4tV3mX06r0i8hJLhA2ZcMz34Lj6iXFaW_cpEqmdo_W9ZSta1wnhpuJdz852wonHI6DwafRj-mZXD9K1TLDeM8p30-dfUorBUlv9Ru7Uuomi0Ai5-R1yzrdW_cikgpn67GR4Ko5s-AIH74kUiqzzi_ywQ0hdkJJvO3BPgmxpVNXaJPjZs7yH8",
    elevated: true,
  },
  {
    quote:
      "Professional, clean, and so talented. I love that I don't have to drive anywhere. Highly recommend Kay's Nail Wagon!",
    name: "Jessica R.",
    location: "Corona, CA",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpSWTkZvztV6n5VkVQba1ly1_nIvKj2GKQUNM8wTRoclau2_HtDZMYc_gHjg98FJuv_9kGBC9F6Rz9DxW63D951iTvoFL2ER2R7qRxf6ZPA6FmnWeLyI5-LWf_L1D2uijQNM483qDz7myhuMOc5LrYuHK85JWLsYIdxnfu9uqj_N6qcgVpw2s9jVeOCOeKviCXO-0wbe5Vn7oriN19Bq9N98db-hrrPfdAyo1PdXUcUYhN3zPi9WcPeBLtrNgT5432pxYEKqrmYVI",
    elevated: false,
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* ─── NAVBAR ─── */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#f4f0f2] transition-all duration-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark">
              <span className="material-symbols-outlined text-[24px]">
                local_shipping
              </span>
            </div>
            <h2 className="text-text-dark text-2xl font-script font-bold leading-tight tracking-wide">
              Kay&apos;s Nail Wagon
            </h2>
          </div>
          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <nav className="flex items-center gap-6">
              {["About", "Services", "Gallery", "Testimonials", "Policies"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-text-dark text-sm font-medium hover:text-primary-dark transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
            <a
              href="#"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary-dark transition-colors text-text-dark text-sm font-bold shadow-sm"
            >
              Book Now
            </a>
          </div>
          {/* Mobile nav */}
          <MobileNav />
        </div>
      </header>

      <main className="flex-1">
        {/* ─── HERO ─── */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-[#fff0f7] to-[#fce7f3] py-16 md:py-24">
          {/* Dot pattern bg */}
          <div className="absolute inset-0 opacity-10 dot-pattern" />
          <div className="max-w-[1280px] mx-auto px-4 sm:px-10 relative z-10">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12">
              {/* Text */}
              <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
                <HeroReveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-primary/20 w-fit mx-auto md:mx-0">
                    <span className="material-symbols-outlined text-primary-dark text-sm">
                      location_on
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-dark">
                      Riverside, CA &amp; Surrounding
                    </span>
                  </div>
                </HeroReveal>

                <HeroReveal delay={0.1}>
                  <h1 className="text-text-dark text-5xl md:text-7xl font-serif font-black leading-tight">
                    Luxury Manicures <br />
                    <span className="font-script text-primary-dark block mt-2 text-6xl md:text-8xl">
                      at your doorstep
                    </span>
                  </h1>
                </HeroReveal>

                <HeroReveal delay={0.2}>
                  <p className="text-text-dark/80 text-lg md:text-xl font-normal leading-relaxed max-w-lg mx-auto md:mx-0">
                    Experience a hygienic, creative, and convenient salon
                    experience right in the comfort of your home or office.
                  </p>
                </HeroReveal>

                <HeroReveal delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-primary-dark text-text-dark text-base font-bold shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1"
                    >
                      Book Appointment
                    </a>
                    <a
                      href="#services"
                      className="flex items-center justify-center rounded-full h-12 px-8 bg-white border border-gray-200 text-text-dark text-base font-bold hover:bg-gray-50 transition-all"
                    >
                      View Services
                    </a>
                  </div>
                </HeroReveal>
              </div>

              {/* Hero image */}
              <HeroReveal delay={0.15} className="flex-1 w-full flex justify-center relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform scale-90 translate-y-4" />
                <div className="relative w-full max-w-[500px] aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgbxvXH5XS9j-c96Vx0-nLzYB9E_mGO6PlJt2LLTa4xLxyHItX6nf4-x45R37n2VDKARunQBi1JSg9YLpXoKaGw0n1NHDXKgVG7bKWFvGhclJumfB-onFurpl-EVjjFAgKAW7O0Q1mo-1fdRufgUlRvQVBrfK6krMaqfW0C0gYu6nzKWIAqCxyn2G_lOgsA4F0tRTjSO31RKXeOsCZm0phiNc9BfB2X5h85AABz3movIQSWbaEktSJ_I5QZN92gD3rG2zjDie0z2M"
                    alt="Close up of elegant pink nail art with gold flakes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </HeroReveal>
            </div>
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section className="py-20 bg-white" id="about">
          <div className="max-w-[960px] mx-auto px-6">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row items-center gap-10 bg-bg-light rounded-2xl p-6 md:p-10 border border-[#f4f0f2] shadow-sm">
                <div className="w-full md:w-1/3 aspect-[3/4] rounded-xl overflow-hidden shadow-md shrink-0 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-gQVnxRbZienBGg6jggC0Poa9A_ATbjAVTHWQQYRxbwJADYnoripE3Tp3gAolt5lVY_sOf36z5OMUIlpU4S4ziU5rpfZsxzZUdTzjEHzMNU-dPIf5jLoVnCLu_wOhr0NSpTzd7Tfic6cOss7U78EiyjCYe295pgMiYAjbjWFPqucI4Yc0ax55woE9G36xzY90n5-_XOmtS1G4Lrtd8wmCh3dZwtKP8gQRIICZhuWpMZycbB1UN0ssHNu5jNc5SI68-bQXAY_sahY"
                    alt="Portrait of Katelyn the nail technician smiling"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
                  <div>
                    <h3 className="font-script text-3xl text-primary-dark mb-2">
                      Hello beautiful,
                    </h3>
                    <h2 className="text-3xl font-serif font-bold text-text-dark">
                      I&apos;m Katelyn
                    </h2>
                  </div>
                  <p className="text-text-dark/70 leading-relaxed">
                    I am a licensed mobile nail technician dedicated to bringing
                    you a hygienic, creative, and convenient salon experience. I
                    started Kay&apos;s Nail Wagon to bridge the gap between
                    luxury and accessibility. No more waiting in crowded
                    salons&mdash;I bring the sparkle to you!
                  </p>
                  <p className="text-text-dark/70 leading-relaxed">
                    Specializing in structured gel and intricate nail art, I use
                    only premium products to ensure the health and longevity of
                    your natural nails.
                  </p>
                  <div className="flex gap-6 justify-center md:justify-start pt-2">
                    {[
                      { icon: "verified_user", label: "Licensed" },
                      { icon: "sanitizer", label: "Hygienic" },
                      { icon: "palette", label: "Creative" },
                    ].map((badge) => (
                      <div
                        key={badge.label}
                        className="flex flex-col items-center md:items-start gap-1"
                      >
                        <span className="material-symbols-outlined text-primary-dark text-3xl">
                          {badge.icon}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider">
                          {badge.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section className="py-20 bg-bg-light" id="services">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="font-script text-3xl text-primary-dark block mb-2">
                  Service Menu
                </span>
                <h2 className="text-4xl font-serif font-bold text-text-dark mb-4">
                  Pricing &amp; Packages
                </h2>
                <p className="text-text-dark/60">
                  Clear, transparent pricing. All services include travel within
                  10 miles of Riverside center.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <ScrollReveal key={service.title} delay={i * 0.1}>
                  <div
                    className={`group flex flex-col gap-4 rounded-xl bg-white p-8 transition-all duration-300 relative h-full ${
                      service.popular
                        ? "border-2 border-primary/30 shadow-lg md:-translate-y-4 z-10"
                        : "border border-primary/20 hover:shadow-xl hover:border-primary/50 overflow-hidden"
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-text-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        Most Popular
                      </div>
                    )}

                    {!service.popular && (
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-6xl text-primary">
                          {service.icon}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col gap-2 relative z-10">
                      <h3 className="text-text-dark text-xl font-bold font-serif">
                        {service.title}
                      </h3>
                      <p className="flex items-baseline gap-1 text-accent-gold">
                        <span className="text-4xl font-black tracking-tight">
                          {service.price}
                        </span>
                        <span className="text-sm font-bold text-text-dark/50">
                          starting price
                        </span>
                      </p>
                    </div>

                    <hr className="border-gray-100 my-2" />

                    <div className="flex flex-col gap-3 flex-1">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="text-sm text-text-dark flex gap-3 items-center"
                        >
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            check_circle
                          </span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <button
                      className={`mt-6 w-full py-3 rounded-lg text-sm font-bold transition-colors cursor-pointer ${
                        service.popular
                          ? "bg-primary text-text-dark hover:brightness-110 shadow-md"
                          : "bg-bg-light text-text-dark group-hover:bg-primary group-hover:text-black"
                      }`}
                    >
                      {service.cta}
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 text-center">
                <p className="text-sm text-text-dark/60 italic">
                  * Nail art prices vary by complexity. Please send inspiration
                  pics for a quote!
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── GALLERY ─── */}
        <section className="py-20 bg-white" id="gallery">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                <div>
                  <span className="font-script text-3xl text-primary-dark block mb-1">
                    Portfolio
                  </span>
                  <h2 className="text-4xl font-serif font-bold text-text-dark">
                    Recent Works
                  </h2>
                </div>
                <a
                  className="text-sm font-bold underline decoration-primary decoration-2 underline-offset-4 hover:text-primary-dark transition-colors"
                  href="#"
                >
                  View Instagram
                </a>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
              {GALLERY_IMAGES.map((img, i) => (
                <ScrollReveal
                  key={i}
                  delay={i * 0.08}
                  className={img.className}
                >
                  <div className="relative group overflow-hidden rounded-xl w-full h-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 transition-colors ${
                        img.label
                          ? "bg-black/20 group-hover:bg-black/40"
                          : "group-hover:bg-black/20"
                      }`}
                    />
                    {img.label && (
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="font-bold text-lg">{img.label}</p>
                        <p className="text-xs uppercase tracking-widest">
                          {img.sub}
                        </p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="py-20 bg-bg-light" id="testimonials">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="font-script text-3xl text-primary-dark block mb-2">
                  Client Love
                </span>
                <h2 className="text-4xl font-serif font-bold text-text-dark">
                  Happy Hands
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <ScrollReveal key={t.name} delay={i * 0.12}>
                  <div
                    className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4 h-full ${
                      t.elevated ? "md:-translate-y-4" : ""
                    }`}
                  >
                    <div className="flex text-accent-gold">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <span
                          key={j}
                          className="material-symbols-outlined text-[20px]"
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-text-dark/80 italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-auto flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={t.avatar}
                        alt={`${t.name} profile`}
                        className="size-10 rounded-full object-cover bg-gray-200"
                      />
                      <div>
                        <p className="font-bold text-sm text-text-dark">
                          {t.name}
                        </p>
                        <p className="text-xs text-gray-500">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── POLICIES ─── */}
        <section className="py-20 bg-white" id="policies">
          <div className="max-w-[800px] mx-auto px-4 sm:px-10">
            <ScrollReveal>
              <h2 className="text-3xl font-serif font-bold text-text-dark mb-8 text-center">
                Policies &amp; Travel Info
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                <AccordionItem title="Deposits & Payments">
                  A non-refundable deposit of $20 is required to secure your
                  appointment. This goes towards your final service total. The
                  remaining balance can be paid via Cash, Zelle, or Card (3% fee
                  applies).
                </AccordionItem>

                <AccordionItem title="Travel Fees" defaultOpen>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      0-10 miles from Riverside Plaza: <strong>FREE</strong>
                    </li>
                    <li>
                      11-20 miles: <strong>$15 Travel Fee</strong>
                    </li>
                    <li>20+ miles: Please contact for a quote.</li>
                    <li>
                      I require a flat, well-lit surface and access to an
                      electrical outlet.
                    </li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Cancellations & Rescheduling">
                  Please provide at least 24 hours notice for cancellations or
                  rescheduling. Cancellations within 24 hours will forfeit the
                  deposit. No-shows will be banned from future booking.
                </AccordionItem>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-bg-dark text-white py-12 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="size-8 rounded-full bg-primary flex items-center justify-center text-bg-dark">
                  <span className="material-symbols-outlined text-[18px]">
                    local_shipping
                  </span>
                </div>
                <h2 className="text-2xl font-script font-bold">
                  Kay&apos;s Nail Wagon
                </h2>
              </div>
              <p className="text-white/60 text-sm max-w-xs">
                Mobile nail artistry bringing luxury to Riverside &amp; beyond.
              </p>
            </div>
            <div className="flex gap-8">
              {["Services", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  className="text-white/80 hover:text-primary transition-colors text-sm font-medium"
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex gap-4">
              {[
                { label: "IG", icon: null },
                { label: "FB", icon: null },
                { label: null, icon: "mail" },
              ].map((social, i) => (
                <a
                  key={i}
                  className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                  href="#"
                >
                  {social.icon ? (
                    <span className="material-symbols-outlined text-[20px]">
                      {social.icon}
                    </span>
                  ) : (
                    <span className="text-sm font-bold">{social.label}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
            <p>&copy; 2025 Kay&apos;s Nail Wagon. All rights reserved.</p>
            <p>Designed with love.</p>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING MOBILE CTA ─── */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <a
          href="#"
          className="size-14 rounded-full bg-primary text-text-dark shadow-2xl flex items-center justify-center hover:bg-primary-dark transition-colors animate-bounce"
        >
          <span className="material-symbols-outlined">calendar_month</span>
        </a>
      </div>
    </div>
  );
}
