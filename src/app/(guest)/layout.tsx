import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "../api/auth/[...nextauth]/route";
import ReactProps from "@/interfaces/ReactProps";

export default async function GuestLayout({ children }: ReactProps) {
    const session = await getServerSession(authOptions);

    if (session?.user)
        redirect('/dashboard');

    return <>{children}</>
}