import type { ReactNode } from "react";
import { toast } from "react-toastify";

type ToastType = "success" | "error" | "info" | "warning";

type ToastProps = {
  message: string | ReactNode;
  type: ToastType;
  isDarkMode: boolean;
};

export const useToast = () => {
  const showToast = ({ message, type, isDarkMode }: ToastProps) => {
    toast(message, {
      position: "top-center",
      draggable: true,
      theme: isDarkMode ? "dark" : "light",
      type,
    });
  };

  return { showToast };
};

export default useToast;
