import { CSSProperties, ReactNode } from "react";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type ToastVariant = "success" | "error" | "warning" | "info" | "loading";

export interface ToastOptions {
  duration?: number;
  position?: ToastPosition;
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
  dismissible?: boolean;
}

export interface Toast {
  id: string;
  message: string;
  variant: ToastVariant;
  options: ToastOptions;
  createdAt: number;
  isExiting?: boolean;
}

export interface PromiseMessages {
  loading: string;
  success: string;
  error: string;
}

export interface ToastState {
  toasts: Toast[];
}

export interface ToastAPI {
  success: (message: string, options?: ToastOptions) => string;
  error: (message: string, options?: ToastOptions) => string;
  warning: (message: string, options?: ToastOptions) => string;
  info: (message: string, options?: ToastOptions) => string;
  loading: (message: string, options?: ToastOptions) => string;
  promise: <T>(
    promise: Promise<T>,
    messages: PromiseMessages,
    options?: ToastOptions
  ) => Promise<T>;
  dismiss: (id?: string) => void;
}
