import DividerIcon from "@/../public/icons/pattern-divider-desktop.svg";
import DiceIcon from "@/../public/icons/icon-dice.svg";

export default function Home() {
  return (
    <main className="bg-dark-blue flex h-dvh max-h-dvh w-full items-center justify-center font-[700]">
      <div className="bg-dark-grayish-blue relative flex w-[540px] flex-col items-center rounded-2xl shadow-2xl">
        <h1 className="text-neon-green mb-8 mt-12 text-xs uppercase tracking-[0.4em]">
          advice #117
        </h1>
        <p className="text-light-cyan max-w-[440px] text-center text-[28px] leading-snug">
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action"
        </p>
        <div className="mb-[72px] mt-10">
          <DividerIcon />
        </div>

        <button className="bg-neon-green absolute bottom-0 flex h-16 w-16 translate-y-1/2 items-center justify-center rounded-full">
          <DiceIcon />
        </button>
      </div>
    </main>
  );
}
