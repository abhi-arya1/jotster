"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Error = () => {
    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image 
            src="/error.png"
            height="300"
            width="300"
            alt="Error"
            className="dark:hidden"
            />
            <Image 
            src="/error-dark.png"
            height="300"
            width="300"
            alt="Error"
            className="hidden dark:block"
            />
            <h2 className="text-xl font-semibold">
                Oh No! Something Went Wrong!
            </h2>
            <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/documents">
                    Return to Safety
                </Link>
            </Button>
        </div>
     );
}
 
export default Error;