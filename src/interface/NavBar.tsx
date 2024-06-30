"use client";

import { useEffect, useState } from "react";
import { Blockquote, IconButton } from "./Misc";
import VERSION from "@/VERSION";

export default function NavBar({ getTheme }: any) {
  // get the version form package.json file

  return (
    <>
      <div
        className={[
          // Margin
          "mx-auto my-2",
          // Padding
          "px-4 py-2",
          // Color
          "bg-white/60",
          getTheme("text"),
          // Width And Radius
          "max-w-[90vw] rounded-full",
          // Display
          "flex items-center  justify-between relative",
          // Shadow
          "shadow-lg",
        ].join(" ")}
      >
        <div className={["flex gap-2 font-semibold items-center"].join(" ")}>
          <h1>Atomic</h1>
          <Blockquote text={`v${VERSION}`} />
        </div>
        <div className="absolute left-[50%] translate-x-[-50%]">
          <Time />
        </div>
        <IconButton
          icon="gear"
          onClick={() => {
            alert("Ji");
          }}
          getTheme={getTheme}
        />
      </div>
    </>
  );
}

// Time
const Time = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const options: any = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        weekday: "short",
      };
      setCurrentTime(now.toLocaleString("en-US", options));
    };

    updateCurrentTime();
    const timerId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(timerId);
  }, []);

  return <div>{currentTime}</div>;
};
