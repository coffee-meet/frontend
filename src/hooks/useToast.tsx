import type { ReactNode } from "react";
import { toast } from "sonner";

type ToastType = "success" | "error" | "info" | "warning";

type ToastProps = {
  message: string | ReactNode;
  type?: ToastType;
};

export const useToast = () => {
  const showToast = ({ message, type }: ToastProps) => {
    switch (type) {
      case "success":
        toast.success(message);
        return;
      case "error":
        toast.error(message);
        return;
      case "info":
        toast.info(message);
        return;
      case "warning":
        toast.warning(message);
        return;
    }
    toast(message);
  };

  return { showToast };
};

export default useToast;
