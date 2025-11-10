import { CSSProperties } from 'react';
import { ReactNode } from 'react';
import { ReactPortal } from 'react';

export declare interface PromiseMessages {
    loading: string;
    success: string;
    error: string;
}

export declare interface Toast {
    id: string;
    message: string;
    variant: ToastVariant;
    options: ToastOptions;
    createdAt: number;
    isExiting?: boolean;
}

export declare const toast: {
    success: (message: string, options?: ToastOptions) => string;
    error: (message: string, options?: ToastOptions) => string;
    warning: (message: string, options?: ToastOptions) => string;
    info: (message: string, options?: ToastOptions) => string;
    loading: (message: string, options?: ToastOptions) => string;
    promise: <T>(promise: Promise<T>, messages: PromiseMessages, options?: ToastOptions) => Promise<T>;
    dismiss: (id?: string) => void;
};

export declare function ToastContainer({ position }: ToastContainerProps): ReactPortal | null;

declare interface ToastContainerProps {
    position?: ToastPosition;
}

export declare interface ToastOptions {
    duration?: number;
    position?: ToastPosition;
    icon?: ReactNode;
    className?: string;
    style?: CSSProperties;
    dismissible?: boolean;
}

export declare type ToastPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";

export declare type ToastVariant = "success" | "error" | "warning" | "info" | "loading";

export { }
