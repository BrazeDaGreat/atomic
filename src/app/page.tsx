"use client";

import { useTheme } from "@/hooks/useTheme";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { getTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);

  return (
    <main className={[getTheme("bg"), getTheme("text")].join(" ")}>
      <h1>Hello, World!</h1>
    </main>
  );
}
