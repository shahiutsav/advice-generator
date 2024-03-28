"use client";

import style from "./card.module.scss";
import clsx from "clsx";
import DividerIcon from "@/../public/icons/pattern-divider-desktop.svg";
import DividerMobielIcon from "@/../public/icons/pattern-divider-mobile.svg";
import DiceIcon from "@/../public/icons/icon-dice.svg";
import React from "react";
import { getRandomAdvice } from "@/data/data";

type Slip = {
  id: string;
  advice: string;
};

export default function Card() {
  const [slip, setSlip] = React.useState<Slip>();
  const [isLoading, setIsLoading] = React.useState(false);

  function fetchAdvice() {
    setIsLoading(true);
    getRandomAdvice().then((data) => {
      setSlip(data);
      setIsLoading(false);
    });
  }

  React.useEffect(() => {
    fetchAdvice();
  }, []);

  const handleClick = () => {
    setIsLoading(!isLoading);
    fetchAdvice();
  };

  return (
    <div className="relative flex w-5/6 flex-col items-center rounded-2xl bg-dark-grayish-blue px-4 shadow-2xl sm:w-[540px]">
      <h1 className="mb-8 mt-12 text-xs uppercase tracking-[0.4em] text-neon-green">
        advice #{slip?.id}
      </h1>
      <p className="max-w-[440px] text-center text-[28px] leading-snug text-light-cyan">
        &quot;{slip?.advice}&quot;
      </p>
      <Divider />
      <div className="absolute bottom-0 translate-y-1/2">
        <RandomizeButton onClick={handleClick} isLoading={isLoading} />
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="mb-[72px] mt-10">
      <DividerIcon className="hidden sm:block" />
      <DividerMobielIcon className="block sm:hidden" />
    </div>
  );
}

function RandomizeButton({
  onClick,
  isLoading,
}: {
  onClick?: () => void;
  isLoading?: boolean;
}) {
  return (
    <button
      disabled={isLoading}
      className={clsx(
        `flex h-16 w-16 items-center justify-center rounded-full bg-neon-green disabled:opacity-50`,
        isLoading && "cursor-not-allowed",
        style.button,
      )}
      aria-label="Randomize advice"
      onClick={onClick}
    >
      <DiceIcon className={clsx(isLoading && "animate-spin")} />
    </button>
  );
}
