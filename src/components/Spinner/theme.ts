import { createTheme } from "@/helpers/create-theme";
import { SpinnerTheme } from "./Spinner";

export const spinnerTheme: SpinnerTheme = createTheme({
  root: {
    base: "inline animate-spin text-gray-200",
  },
  color: {
    failure: "fill-red-600",
    gray: "fill-gray-600",
    info: "fill-cyan-600",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    success: "fill-green-500",
    warning: "fill-yellow-400",
  },
  size: {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-10 w-10",
  },
});
