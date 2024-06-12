"use client";

import { PulseLoader, RingLoader, FadeLoader } from "react-spinners";

interface LoadingProps {
    color?: string;
    loading: boolean;
    size?: number;
    height?: string
}

export function Loading({ color, loading, size }: LoadingProps) {
    return (
        <span
            className="flex gap-1 items-center justify-center h-[1.75rem]"
        >
            <PulseLoader
                color={color || "#FF6347"}
                loading={loading}
                size={size || 10}
                data-testid="loader"
            />
        </span>
    );
}
