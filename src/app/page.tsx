"use client";

import { useTheme } from "@/hooks/useTheme";
import NavBar from "@/interface/NavBar";
import Screen from "@/interface/Screen";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { getTheme } = useTheme();
  const router = useRouter();

  return (
    <Screen getTheme={getTheme}>
      <NavBar getTheme={getTheme} />
      <h1>Wow</h1>
    </Screen>
  );
}
