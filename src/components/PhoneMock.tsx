import mockup from "@/assets/phone-hand.png.asset.json";

export function PhoneMock() {
  return (
    <div aria-hidden="true" className="w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[420px]">
      <img
        src={mockup.url}
        alt=""
        className="block w-full select-none drop-shadow-[0_18px_28px_rgba(1,61,74,0.16)]"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
