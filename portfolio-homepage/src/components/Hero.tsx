import Image from "next/image";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-[clamp(32px,6vw,88px)] items-center py-8 lg:py-[clamp(32px,5vw,56px)]">
        <div className="min-w-0">
          <h1 id="hero-heading" className="m-0 text-hero">
            Good design
            <br />
            moves you
            <br />
            {/* accent-dark, not accent: raw #FC890C on white is ~2.4:1,
                below WCAG AA even at this large size (needs 3:1). */}
            <span className="text-accent-dark">forward.</span>
          </h1>
          <p className="mt-8 max-w-prose text-lead text-body">
            Make your product easier to use. Give your team a clearer way forward. Turn
            complexity into value that people can feel.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#key-skills"
              className="inline-block bg-ink text-white text-nav font-semibold py-4 px-8 rounded-pill whitespace-nowrap hover:bg-ink-alt"
            >
              Find your starting point
            </a>
            <a
              href="#case-studies"
              className="inline-block border border-rule-strong text-ink text-nav font-semibold py-4 px-8 rounded-pill whitespace-nowrap hover:border-ink"
            >
              See the work
            </a>
          </div>
        </div>

        <div className="min-w-0 flex flex-col justify-center">
          {/* Hand-drawn flourish, matching the logo's mark treatment
              (swapped in from the Claude Design canvas — was concentric
              orbit ellipses before). */}
          <svg
            viewBox="0 0 420 260"
            role="presentation"
            aria-hidden="true"
            className="w-full h-auto block overflow-visible"
          >
            <g fill="none" stroke="#FC890C" strokeLinecap="round" strokeLinejoin="round">
              <path
                d="M 8 24 C 23 20 33 33 41 49 C 49 65 61 74 82 74 C 111 74 143 71 158 78"
                strokeWidth="13"
              />
              <path
                d="M 10 27 C 26 25 35 37 43 52 C 52 69 63 77 84 77 C 113 77 142 74 156 80"
                strokeWidth="7"
                opacity="0.85"
              />
              <path
                d="M 158 78 C 170 83 172 96 162 108 C 152 120 152 132 164 138"
                strokeWidth="11"
              />
              <path
                d="M 156 81 C 168 87 169 98 159 110 C 150 121 151 130 162 136"
                strokeWidth="6.5"
                opacity="0.8"
              />
              <path
                d="M 164 138 C 182 147 217 148 251 156 C 287 165 311 181 335 203"
                strokeWidth="12.5"
              />
              <path
                d="M 166 141 C 185 150 219 151 252 159 C 287 168 310 184 333 205"
                strokeWidth="6"
                opacity="0.8"
              />
              <path d="M 335 203 C 348 215 358 226 366 236" strokeWidth="10" />
              <path d="M 366 236 C 371 242 375 246 379 249" strokeWidth="6" />
              <path d="M 379 249 C 383 252 386 254 389 255" strokeWidth="3.2" opacity="0.85" />
              <path d="M 152 102 C 147 111 148 121 155 128" strokeWidth="5" opacity="0.75" />
              <path d="M 88 72 C 104 68 122 67 138 69" strokeWidth="4.5" opacity="0.6" />
              <path d="M 244 154 C 268 158 290 166 308 178" strokeWidth="4.5" opacity="0.55" />
            </g>
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-6 py-2 pb-[clamp(48px,7vw,88px)]">
        <Image
          src="/photo.png"
          alt="Berit Alasmäki"
          width={92}
          height={92}
          className="w-[92px] h-[92px] object-contain block"
        />
        <p className="m-0 text-body-em font-semibold text-ink max-w-[22em]">
          Berit, your partner in untangling complexity.
        </p>
      </div>
    </section>
  );
}
