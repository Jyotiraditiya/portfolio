// config/themes.ts

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    muted: string;
  };
  gradient: {
    primary: string;
    secondary: string;
  };
}

export const themes: Record<string, Theme> = {
  purple: {
    name: "Purple",
    colors: {
      primary: "#8B5CF6",
      secondary: "#A855F7",
      accent: "#C084FC",
      background: "#FAFAFA",
      surface: "#FFFFFF",
      text: "#1F2937",
      muted: "#6B7280",
    },
    gradient: {
      primary: "from-purple-500 to-violet-600",
      secondary: "from-purple-100 via-white to-white",
    },
  },
  blue: {
    name: "Blue",
    colors: {
      primary: "#3B82F6",
      secondary: "#1D4ED8",
      accent: "#60A5FA",
      background: "#FAFAFA",
      surface: "#FFFFFF",
      text: "#1F2937",
      muted: "#6B7280",
    },
    gradient: {
      primary: "from-blue-500 to-blue-600",
      secondary: "from-blue-100 via-white to-white",
    },
  },
  green: {
    name: "Green",
    colors: {
      primary: "#10B981",
      secondary: "#059669",
      accent: "#34D399",
      background: "#FAFAFA",
      surface: "#FFFFFF",
      text: "#1F2937",
      muted: "#6B7280",
    },
    gradient: {
      primary: "from-green-500 to-emerald-600",
      secondary: "from-green-100 via-white to-white",
    },
  },
  orange: {
    name: "Orange",
    colors: {
      primary: "#F97316",
      secondary: "#EA580C",
      accent: "#FB923C",
      background: "#FAFAFA",
      surface: "#FFFFFF",
      text: "#1F2937",
      muted: "#6B7280",
    },
    gradient: {
      primary: "from-orange-500 to-red-600",
      secondary: "from-orange-100 via-white to-white",
    },
  },
  pink: {
    name: "Pink",
    colors: {
      primary: "#EC4899",
      secondary: "#DB2777",
      accent: "#F472B6",
      background: "#FAFAFA",
      surface: "#FFFFFF",
      text: "#1F2937",
      muted: "#6B7280",
    },
    gradient: {
      primary: "from-pink-500 to-rose-600",
      secondary: "from-pink-100 via-white to-white",
    },
  },
};
