"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your best ideas, all in one place. Welcome to <span className="underline">Jotster</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Jotster is your one-stop-shop for your documents, plans, and ideas.
            </h3>

            <Button className="bg-red-400 hover:bg-red-500">
                Start Jotting
                <ArrowRight />
            </Button>
        </div>
    )
}