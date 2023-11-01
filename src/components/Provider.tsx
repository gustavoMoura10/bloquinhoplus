"use client";
import { SessionProvider } from "next-auth/react";
import ReactProps from "@/interfaces/ReactProps";
export default function Provider({ children }: ReactProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}