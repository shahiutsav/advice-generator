import style from "./card.module.scss";
import clsx from "clsx";
import DividerIcon from "@/../public/icons/pattern-divider-desktop.svg";
import DiceIcon from "@/../public/icons/icon-dice.svg";

export default function Card() {
  return (
    <div className="relative flex w-[540px] flex-col items-center rounded-2xl bg-dark-grayish-blue shadow-2xl">
      <h1 className="mb-8 mt-12 text-xs uppercase tracking-[0.4em] text-neon-green">
        advice #117
      </h1>
      <p className="max-w-[440px] text-center text-[28px] leading-snug text-light-cyan">
        "It is easy to sit up and take notice, what's difficult is getting up
        and taking action"
      </p>
      <Divider />
      <div className="absolute bottom-0 translate-y-1/2">
        <RandomizeButton />
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="mb-[72px] mt-10">
      <DividerIcon />
    </div>
  );
}

function RandomizeButton() {
  return (
    <button
      className={clsx(
        `flex h-16 w-16 items-center justify-center rounded-full bg-neon-green`,
        style.button,
      )}
    >
      <DiceIcon />
    </button>
  );
}
