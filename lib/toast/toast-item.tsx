import { useEffect } from "react";
import type { Toast } from "./types";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  Loader2,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ToastItemProps {
  toast: Toast;
  onDismiss: (id: string) => void;
  onRemove: (id: string) => void;
}

const variantIcons = {
  success: CheckCircle2,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
  loading: Loader2,
};

const variantStyles = {
  success: "toast-variant-success",
  error: "toast-variant-error",
  warning: "toast-variant-warning",
  info: "toast-variant-info",
  loading: "toast-variant-loading",
};

const iconStyles = {
  success: "toast-icon-success",
  error: "toast-icon-error",
  warning: "toast-icon-warning",
  info: "toast-icon-info",
  loading: "toast-icon-loading animate-spin",
};

export function ToastItem({ toast, onDismiss, onRemove }: ToastItemProps) {
  const Icon = variantIcons[toast.variant];

  useEffect(() => {
    if (toast.isExiting) {
      const timer = setTimeout(() => {
        onRemove(toast.id);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [toast.isExiting, toast.id, onRemove]);

  const handleDismiss = () => {
    onDismiss(toast.id);
  };

  return (
    <div
      className={cn(
        "toast-item pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg border shadow-lg",
        variantStyles[toast.variant],
        toast.isExiting && "toast-exit",
        toast.className
      )}
      style={toast.style}
      data-testid={`toast-${toast.variant}`}
    >
      <div className="flex items-start gap-3 p-4">
        {toast.icon !== undefined ? (
          toast.icon
        ) : (
          <Icon className={cn("h-5 w-5 flex-shrink-0", iconStyles[toast.variant])} />
        )}
        <div className="flex-1">
          <div className="text-sm font-semibold text-foreground">
            {toast.title}
          </div>
          {toast.description && (
            <div className="mt-1 text-sm text-muted-foreground">
              {toast.description}
            </div>
          )}
        </div>
        {toast.dismissible && (
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 rounded-md p-1 hover-elevate active-elevate-2 transition-colors"
            data-testid={`button-dismiss-toast-${toast.id}`}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
