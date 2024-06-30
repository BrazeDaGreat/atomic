export default function Window({ children, title, className }: any) {
  return (
    <div
      className={[
        "w-max",
        "m-4",
        "rounded-lg shadow-lg",
        "flex items-center justify-center flex-col",
        "bg-white/60",
        "animate-zoom-in",
        className,
      ].join(" ")}
    >
      <div className="w-full bg-gray-400/40 rounded-t-lg px-2 py-1 text-center">
        <h1 className="text-sm font-semibold text-white">{title}</h1>
      </div>
      <div className="px-4 py-2 flex flex-col gap-4">{children}</div>
    </div>
  );
}
