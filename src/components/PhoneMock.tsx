import mockup from "@/assets/phone-hand.png.asset.json";

export function PhoneMock() {
  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-[420px]">
      <img
        src={mockup.url}
        alt=""
        className="block w-full select-none drop-shadow-[0_30px_50px_rgba(1,61,74,0.22)]"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
