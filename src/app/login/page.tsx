"use client";

import { useTheme } from "@/hooks/useTheme";
import NavBar from "@/interface/NavBar";
import Screen from "@/interface/Screen";
import Window from "@/interface/Window";
import WindowGrid from "@/interface/WindowGrid";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default async function Login() {
  const { getTheme, getGlobal } = useTheme();

  // useEffect(() => {
  //   async function test() {
  //     let data = await fetch("http://localhost:3000/api/auth");
  //     console.log(await data.json());
  //   }
  //   test();
  // }, []);

  return (
    <Screen getTheme={getTheme}>
      <NavBar getTheme={getTheme} />
      <WindowGrid>
        <Window title="Welcome to Atomic" className="max-w-[320px]">
          <p className="text-justify text-last-center">
            Welcome to Atomic. Your all-in-one productivity solution. Track your
            time, manage your streaks, and stay organized all from within
            Atomic.
          </p>
        </Window>
        <Window title="Login with Discord" className="max-w-[320px]">
          <p className="text-justify text-last-center">
            Login with your Discord account to easily get started with Atomic.
          </p>
          <LoginWithDiscord />
        </Window>
      </WindowGrid>
    </Screen>
  );

  // return (
  //   <main
  //     className={[
  //       getTheme("bg"),
  //       getTheme("text"),
  //       "min-h-[100vh] min-w-[100vw] overflow-hidden place-items-center grid",
  //     ].join(" ")}
  //   >
  //     <div
  //       className={[
  //         getTheme("container"),
  //         "px-6 py-4 rounded-md flex flex-col gap-4 text-center max-w-[480px] bg-white/40 animate-zoom-in",
  //       ].join(" ")}
  //     >
  //       <h1 className="text-2xl font-bold">Welcome to Atomic</h1>
  //       <p className="text-sm">
  //         Atomic is your ultimate time tracking companion, designed to help you
  //         stay productive and organized. <br />
  //         Seamlessly login with your Discord account.
  //       </p>
  //       {true ? <LoginWithDiscord /> : <LoggedIn />}
  //     </div>
  //   </main>
  // );
}

const LoggedIn = () => (
  <button
    className={[
      "flex self-center items-center text-white justify-center bg-[#525ba7] px-4 py-2 rounded-md",
      "text-sm font-semibold",
    ].join(" ")}
  >
    <DiscordSVG />
    <span>Connected with Discord</span>
  </button>
);

const LoginWithDiscord = () => (
  <button
    onClick={() => true}
    className={[
      "flex self-center items-center justify-center text-white bg-[#5865F2] px-4 py-2 rounded-md hover:bg-[#525ba7] transition-all duration-75",
      "text-sm font-semibold",
    ].join(" ")}
  >
    <DiscordSVG />
    <span>Connect with Discord</span>
  </button>
);

const DiscordSVG = () => (
  <svg
    className="h-6 w-6 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    width="800px"
    height="800px"
    viewBox="0 -28.5 256 256"
    version="1.1"
    preserveAspectRatio="xMidYMid"
  >
    <g>
      <path
        d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
        fill="#FFFFFF"
        fill-rule="nonzero"
      ></path>
    </g>
  </svg>
);
