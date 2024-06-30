import React from "react";

export default function WindowGrid({ children }: any) {
  const childCount = React.Children.count(children);
  const centerItemsClass = childCount < 3 ? "place-items-center" : "";

  const gridCols2 = childCount >= 2 ? "grid-cols-2" : "grid-cols-1";
  const gridCols3 = childCount >= 3 ? "grid-cols-3" : "grid-cols-1";

  return (
    <div
      className={[
        "flex",
        "flex-wrap",
        "items-center justify-center",
        "max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw]",
        "mx-auto my-6 gap-6",
        centerItemsClass,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
