"use client";

export default function Screen({ getTheme, children }: any) {
  return (
    <>
      <main
        className={[
          getTheme("bg"),
          getTheme("text"),
          "min-h-[100vh] min-w-[100vw] overflow-hidden",
        ].join(" ")}
      >
        {children}
      </main>
    </>
  );
}
