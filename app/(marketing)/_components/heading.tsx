"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your best ideas, all in one place. Welcome to <span className="underline">Jotster</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Jotster is your one-stop-shop for your documents, plans, and ideas.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                <Spinner size="lg" />
                </div>
            )}

            {isAuthenticated && !isLoading && (
                <Button className="bg-red-400 hover:bg-red-500" asChild>
                    <Link href="/documents">
                        Enter Jotster
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Link>
                </Button>
            // <Button className="bg-red-400 hover:bg-red-500">
            //     Start Jotting
            //     <ArrowRight />
            // </Button>
            )}

            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                <Button className="bg-red-400 hover:bg-red-500">
                    Start Jotting
                    <ArrowRight className="h-4 w-4 ml-2"/>
                </Button>
                </SignInButton>
            )}
        </div>
    )
}