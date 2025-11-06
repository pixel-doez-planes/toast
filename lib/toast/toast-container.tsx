import { useEffect, useState } from "react";
import type { Toast, ToastPosition } from "@shared/toast-types";
import { toastManager } from "./toast-manager";
import { ToastItem } from "./toast-item";
import { cn } from "@/lib/utils";
import "./styles.css";

interface ToastContainerProps {
  position?: ToastPosition;
}

const positionStyles: Record<ToastPosition, string> = {
  "top-left": "top-6 left-6",
  "top-center": "top-6 left-0 right-0 flex-col items-center",
  "top-right": "top-6 right-6",
  "bottom-left": "bottom-6 left-6",
  "bottom-center": "bottom-6 left-0 right-0 flex-col items-center",
  "bottom-right": "bottom-6 right-6",
};

export function ToastContainer({ position = "top-right" }: ToastContainerProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const unsubscribe = toastManager.subscribe((newToasts) => {
      setToasts(newToasts);
    });
    return unsubscribe;
  }, []);

  const toastsByPosition = toasts.reduce((acc, toast) => {
    const pos = toast.options.position || position;
    if (!acc[pos]) {
      acc[pos] = [];
    }
    acc[pos].push(toast);
    return acc;
  }, {} as Record<ToastPosition, Toast[]>);

  return (
    <>
      {Object.entries(toastsByPosition).map(([pos, posToasts]) => (
        <div
          key={pos}
          className={cn(
            "pointer-events-none fixed z-[100] flex max-h-screen flex-col gap-2 overflow-hidden",
            positionStyles[pos as ToastPosition]
          )}
          data-testid={`toast-container-${pos}`}
        >
          {posToasts.map((toast) => (
            <ToastItem
              key={toast.id}
              toast={toast}
              onDismiss={(id) => toastManager.dismiss(id)}
              onRemove={(id) => toastManager.remove(id)}
            />
          ))}
        </div>
      ))}
    </>
  );
}
