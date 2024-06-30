// @/themes.ts

interface Theme {
  [key: string]: string;
}
interface Themes {
  [key: string]: Theme;
}

const themes: Themes = {
  global: {},
  dark: {
    bg: "bg-slate-900",
    text: "text-slate-50",
  },
  light: {
    bg: "bg-slate-50",
    text: "text-slate-900",
  },
  green: {
    bg: "bg-green-800",
    text: "text-green-950",
    container: "",
    iconButton: "hover:text-white hover:bg-green-700",
  },
};

export const safelist = (): string[] => {
  const classes: Set<string> = new Set();

  // Iterate through each theme
  Object.values(themes).forEach((theme: Themes[keyof Themes]) => {
    // Iterate through each property of the theme
    Object.values(theme).forEach((className: string) => {
      // Extract class names from values (assuming they are Tailwind classes)
      const tailwindClasses = className.split(" ");

      // Add each class name to the set (to ensure uniqueness)
      tailwindClasses.forEach((cls) => {
        classes.add(cls.trim());
      });
    });
  });

  // Convert set to array and return
  return Array.from(classes);
};

export default themes;
