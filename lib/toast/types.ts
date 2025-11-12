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
  title: string;
  description?: string;
  variant: ToastVariant;
  position?: ToastPosition;
  duration?: number;
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
  dismissible?: boolean;
  promise?: {
    promise: Promise<any>;
    loading: string;
    success: string;
    error: string;
  };
}

export interface Toast {
  id: string;
  title: string;
  description?: string;
  variant: ToastVariant;
  position: ToastPosition;
  duration: number;
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
  dismissible: boolean;
  createdAt: number;
  isExiting?: boolean;
}

export interface ToastState {
  toasts: Toast[];
}

export type ToastFunction = (options: ToastOptions) => Promise<string>;
