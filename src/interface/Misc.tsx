"use client";

export function Icon({ icon }: { icon: string }) {
  return <i className={`bi bi-${icon}`}></i>;
}

export function IconButton({
  icon,
  onClick,
  getTheme,
}: {
  icon: string;
  onClick: () => void;
  getTheme: (a: string) => string;
}) {
  return (
    <button
      className={[
        getTheme("iconButton"),
        "w-8 h-8 rounded-full",
        "transition-all",
        "bg-gray-300",
        "shadow-lg",
      ].join(" ")}
      onClick={onClick}
    >
      <Icon icon={icon} />
    </button>
  );
}

export function Blockquote({ text }: { text: string }) {
  return (
    <span
      className={[
        "bg-gray-800 text-xs py-1 px-2 rounded-md text-gray-300 font-mono",
        "border border-gray-600",
      ].join(" ")}
    >
      {text}
    </span>
  );
}
