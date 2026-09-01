import screen from "@/assets/tum-kitaplar.png.asset.json";

export function PhoneMock() {
  return (
    <div className="[perspective:1600px]" aria-hidden="true">
      <div
        className="relative mx-auto w-[262px] max-w-full sm:w-[300px]"
        style={{ transform: "rotateY(-16deg) rotateX(4deg) rotateZ(-4deg)" }}
      >
        {/* Yan tuşlar */}
        <div className="absolute top-[110px] -left-[3px] h-9 w-[3px] rounded-l-sm bg-mure/40" />
        <div className="absolute top-[160px] -left-[3px] h-14 w-[3px] rounded-l-sm bg-mure/40" />
        <div className="absolute top-[230px] -left-[3px] h-14 w-[3px] rounded-l-sm bg-mure/40" />
        <div className="absolute top-[180px] -right-[3px] h-20 w-[3px] rounded-r-sm bg-mure/40" />

        {/* Gövde */}
        <div
          className="rounded-[3rem] bg-gradient-to-b from-mure/70 via-mure/90 to-mure/70 p-[3px]"
          style={{ boxShadow: "0 30px 60px rgba(1, 61, 74, 0.28)" }}
        >
          <div className="rounded-[2.9rem] bg-[#0b0f10] p-[9px]">
            <div className="relative overflow-hidden rounded-[2.35rem] bg-white">
              <img
                src={screen.url}
                alt=""
                className="block aspect-[9/19.5] w-full object-cover object-top"
                loading="eager"
                decoding="async"
              />
              {/* Dynamic Island */}
              <div className="absolute top-[10px] left-1/2 h-[26px] w-[86px] -translate-x-1/2 rounded-full bg-black" />
              {/* Ekran parlaması */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/25" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
