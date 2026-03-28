'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const sections = [
  {
    year: '1848',
    title: 'Origin & Design',
    body: `The ground, located on the campus of IIEST Shibpur, was designed by the British and called the Oval for its shape — just like its celebrated counterpart at Kennington in South London. Unlike Calcutta's Eden Gardens, hailed as "cricket's answer to the Colosseum", Howrah's Oval has remained a college playground despite its history and leafy surroundings that evoke the atmosphere of an English village cricket ground.`,
  },
  {
    year: '1864',
    title: 'British Legacy',
    body: `The earliest available record dates to 1848, when the ground appears in a painting of Principal's House by British artist Charles D'Oyly — predating Eden Gardens' formal establishment in 1864. The rows of trees encircling the ground were all planted by the British, mostly tall deodars that don't grow naturally in India. "The setting is unlike any cricket ground you will find in the country," a professor noted.`,
  },
  {
    year: '1982',
    title: 'Community & Renovation',
    body: `Two small concrete stands on either side of the pavilion were renovated with contributions from the batch of 1982. A tin tent for ground staff bears "OVAL" in large white letters on its roof. From the ninth-floor terrace of the new academic building, the Oval is a roll of green with a rivulet and the Hooghly just 500 metres away — a clock tower and Victorian architecture completing an unmistakably English ambience.`,
  },
  {
    year: '1996',
    title: 'Notable Connections',
    body: `CAB joint secretary Sourav Ganguly — the first Indian to score a century on Test debut at Lord's in 1996 — signed an agreement with IIEST to develop the twin grounds. The CAB confirmed plans to make the Oval a first-class and club cricket venue, with four pitches, upgraded galleries, and an electronic scoreboard all part of the blueprint.`,
  },
  {
    year: 'Today',
    title: 'The Twin Grounds',
    body: `"Lord's" is just next door — in London, The Oval and Lord's are 7 km apart; at IIEST they are separated by a 200-metre winding walkway under a canopy of green. With the Hooghly a loud LBW appeal away, the afternoon river breeze is said to make the ball do things. The Oval's story is one of pride, tradition, and transformation — from a hidden college playground to a venue worthy of national recognition.`,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
};

export default function HistoryPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.12]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <main className="bg-[#080b08] text-[#e8e3d8] overflow-x-hidden min-h-screen">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-end overflow-hidden">

        {/* parallax bg */}
        <motion.div className="absolute inset-0 will-change-transform" style={{ y: bgY, scale: bgScale }}>
          <Image
            src="https://res.cloudinary.com/dwr8472qb/image/upload/v1774287758/ChatGPT_Image_Mar_19_2026_04_44_27_PM_yrnfhi.png"
            alt="The Oval, IIEST Shibpur"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
        </motion.div>

        {/* overlays */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#080b08] via-[#080b08]/60 to-transparent" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#080b08]/80 via-[#080b08]/25 to-transparent" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_70%_40%,rgba(184,148,60,0.07)_0%,transparent_60%)]" />

        {/* gold top rule */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] z-20 origin-center"
          style={{ background: 'linear-gradient(90deg, transparent, #c9a84c 25%, #e8c97a 60%, transparent)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* hero text */}
        <motion.div className="relative z-10 px-14 pb-20 max-w-3xl" style={{ opacity: heroOpacity }}>
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="block w-14 h-px bg-[#c9a84c] opacity-60" />
            <span className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] font-medium">
              IIEST Shibpur · Est. 1848
            </span>
            <span className="block w-14 h-px bg-[#c9a84c] opacity-60" />
          </motion.div>

          <motion.h1
            className="font-[family-name:var(--font-cormorant)] text-[clamp(68px,10.5vw,140px)] font-light leading-[0.9] tracking-[-1px] text-[#f0ebe0]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            History of
            <em className="block not-italic italic text-[#c9a84c]">The Oval</em>
          </motion.h1>

          <motion.p
            className="mt-5 text-[15px] font-light leading-relaxed text-[#e8e3d8]/50 max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            150+ years of sporting heritage on the banks of the Hooghly
          </motion.p>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-[8px] tracking-[3px] uppercase text-[#e8e3d8]/30">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c]/60 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="relative px-14 py-24 bg-[#0c100c] border-y border-[#c9a84c]/15 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,0.04)_0%,transparent_65%)] pointer-events-none" />
        <motion.div className="max-w-4xl mx-auto relative" {...fadeUp}>
          <div
            className="font-[family-name:var(--font-cormorant)] text-[100px] leading-[0.6] select-none mb-2"
            style={{ color: 'rgba(201,168,76,0.16)' }}
          >
            &ldquo;
          </div>
          <blockquote className="font-[family-name:var(--font-cormorant)] text-[clamp(20px,2.6vw,28px)] font-light italic leading-[1.55] text-[#f0ebe0]/87 tracking-[0.2px]">
            A quaint cricket ground in a sylvan setting on the banks of the Hooghly has
            emerged from more than 150 years of obscurity to demand a place beside the
            Eden Gardens as a sporting venue befitting its famous name:{' '}
            <strong className="not-italic font-semibold text-[#c9a84c]">the Oval</strong>.
          </blockquote>
        </motion.div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="relative max-w-5xl mx-auto px-7 py-24">
        {/* spine */}
        <div
          className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 hidden md:block"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.28) 8%, rgba(201,168,76,0.28) 92%, transparent)' }}
        />

        {sections.map((sec, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.article
              key={sec.year}
              className={`relative mb-14 w-full md:w-[44%] ${isLeft ? 'md:ml-[3%]' : 'md:ml-[53%]'}`}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* timeline dot */}
              <div className={`absolute top-7 hidden md:flex items-center justify-center w-3 h-3 z-10 ${isLeft ? '-right-[26px]' : '-left-[26px]'}`}>
                <div className="w-2 h-2 rounded-full bg-[#c9a84c] shadow-[0_0_0_3px_rgba(201,168,76,0.2),0_0_0_6px_rgba(201,168,76,0.07)]" />
              </div>

              {/* card */}
              <div className="relative p-7 border border-[#c9a84c]/15 bg-white/[0.025] transition-all duration-300 hover:border-[#c9a84c]/35 hover:bg-white/[0.04] group">
                {/* corner brackets */}
                <span className="absolute top-[-1px] left-[-1px] w-6 h-6 border-t-2 border-l-2 border-[#c9a84c]" />
                <span className="absolute bottom-[-1px] right-[-1px] w-6 h-6 border-b-2 border-r-2 border-[#c9a84c]" />

                <div className="font-[family-name:var(--font-cormorant)] text-[42px] font-light italic text-[#c9a84c]/38 leading-none mb-2 tracking-[-0.5px]">
                  {sec.year}
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-[22px] font-semibold text-[#f0ebe0] tracking-[0.3px] mb-3">
                  {sec.title}
                </h2>
                <div className="w-9 h-px mb-4" style={{ background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
                <p className="text-[13.5px] font-light leading-[1.8] text-[#e8e3d8]/60">
                  {sec.body}
                </p>
              </div>
            </motion.article>
          );
        })}
      </section>

      {/* ── LEGACY BANNER ── */}
      <section className="relative px-14 py-28 text-center border-t border-[#c9a84c]/12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dwr8472qb/image/upload/v1774287761/IMG-20250825-WA0139_y7bl8k.jpg"
            alt="The Oval"
            fill
            quality={60}
            sizes="100vw"
            className="object-cover object-[center_60%] saturate-50"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-[#080b08]/88" />

        <motion.div 
          className="relative z-10 mx-auto"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dwr8472qb/image/upload/v1774680666/Paper_PNG-removebg-preview_rwbrba.png)',
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '540px',
            maxWidth: '90vw',
            aspectRatio: '1.2 / 1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '80px',
            paddingRight: '50px',
            paddingTop: '60px',
            paddingBottom: '60px'
          }}
          {...fadeUp}
        >
          <div
            className="w-20 h-px mx-auto mb-10"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
          />
          <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(28px,3.5vw,36px)] font-light italic text-black mb-4">
            A Living Legacy
          </h3>
          <p className="text-[13px] font-light leading-[1.7] text-[#280905] mb-6">
            The Oval stands as a testament to over 150 years of sporting heritage —
            combining British colonial architecture with modern Indian achievement.
            From a hidden college playground to a venue worthy of national recognition,
            its story is one of pride, tradition, and transformation.
          </p>
          <div
            className="w-20 h-px mx-auto mb-10"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
          />
          <p className="text-[11px] tracking-[2px] uppercase text-[#4C5C2D]">
            Source:{' '}
            <a
              href="https://www.telegraphindia.com/west-bengal/the-oval-hidden-in-howrah/cid/1496209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DB1A1A] hover:text-[#e8c97a] transition-colors"
            >
              Telegraph India
            </a>
          </p>
        </motion.div>
      </section>

    </main>
  );
}