"use client";

import { useTheme } from "@/hooks/useTheme";
import { Icon, IconButton } from "@/interface/Misc";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// import the image in public/logo.png
// import Logo from "../public/Atomic.png";
import Logo from "@/../public/Atomic.png";
import Logo_Small from "@/../public/Atomic_Logo.png";

export default function Home() {
  const { getTheme } = useTheme();
  const router = useRouter();

  return (
    <main
      className={[
        getTheme("bg"),
        "w-[100vw] min-h-[100vh]",
        getTheme("text"),
        "p-5",
      ].join(" ")}
    >
      {/* Container */}
      <div className="w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] mx-auto">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b-2 border-white/30 pb-4">
          {/* Logo */}
          <div className="px-6">
            {/* Create a srcset image with Logo on bigger screens and Logo_Small on smaller */}
            <picture>
              <source media="(max-width:480px)" srcSet={Logo_Small.src} />
              <img src={Logo.src} alt="Atomic Logo" className="max-h-[64px]" />
            </picture>
          </div>
          {/* Buttons */}
          <div className="flex gap-2">
            <Button icon="graph-up-arrow" name="Report" onClick={() => true} />
            <Button icon="gear" name="Settings" onClick={() => true} />
            <Button icon="person-circle" name="Login" onClick={() => true} />
          </div>
        </div>

        {/* Controller Container */}
        <div
          className={[
            "my-6 mx-auto",
            "py-2 px-6",
            "w-max md:w-[480px]",
            // "my-6 mx-2 md:mx-8 lg:mx-12",
            "bg-white/10",
            "rounded-lg shadow-lg",
            "flex items-center justify-center",
            "flex-col gap-5",
          ].join(" ")}
        >
          {/* Control Buttons */}
          <div className="flex gap-2">
            <ControlButton name="Pomodoro" onClick={() => true} active />
            <ControlButton name="Sprint" onClick={() => true} />
            <ControlButton name="Break" onClick={() => true} />
          </div>
          {/* Display Grid */}
          <div className="flex flex-col gap-8 items-center justify-center my-8">
            {/* Time */}
            <div className="font-bold text-6xl md:text-8xl">25:00</div>
            {/* Start/Stop */}
            <BigWhiteButton
              getTheme={getTheme}
              name="Start"
              onClick={() => true}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

interface ButtonOptions {
  icon: string;
  name: string;
  onClick: () => void;
}
function Button({ icon, name, onClick }: ButtonOptions) {
  return (
    <button
      className={[
        // "bg-white/20 px-2 py-1 rounded-md text-sm flex gap-2",
        "bg-white/20",
        "px-3 py-2",
        "rounded-md shadow-md",
        "transition-all",
        "flex gap-2 items-center justify-center",
        "text-sm",
        "hover:bg-white/30",
      ].join(" ")}
    >
      <Icon icon={icon} />
      <span className="hidden md:inline">{name}</span>
    </button>
  );
}

interface ControlButtonOptions {
  name: string;
  onClick: () => void;
  active?: boolean;
}
function ControlButton({ name, onClick, active }: ControlButtonOptions) {
  if (!active) active = false;
  return (
    <button
      className={[
        "px-4 py-1",
        "rounded-md shadow-md",
        "transition-all",
        "flex gap-2 items-center justify-center",
        "text-sm",
        active ? "bg-black/80" : "bg-black/20",
        "hover:bg-black/40",
      ].join(" ")}
    >
      {name}
    </button>
  );
}

function BigWhiteButton({
  name,
  onClick,
  getTheme,
}: {
  name: string;
  onClick: () => void;
  getTheme: (key: string) => string;
}) {
  return (
    <button
      className={[
        "font-semibold uppercase",
        getTheme("bg_text"),
        getTheme("big_button"),
        "text-xl",
        "px-12 py-4",
        "rounded-md shadow-md",
        "transition-all",
        "hover:translate-y-[-10%]",
      ].join(" ")}
    >
      {name}
    </button>
  );
}
