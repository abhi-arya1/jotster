"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { Id } from "@/convex/_generated/dataModel";
import { 
    DropdownMenu, 
    DropdownMenuContent,
    DropdownMenuItem, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"; 
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { MoreHorizontal, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
 

interface MenuProps { 
    documentId: Id<"documents">;
}

export const Menu = ({
    documentId,
}: MenuProps ) => {
    const router = useRouter()
    const { user } = useUser(); 
    const archive = useMutation(api.documents.archiveDoc); 

    const onArchive = () => {
        const promise = archive({ id: documentId });
        toast.promise(promise, {
            loading: "Moving to Trash...",
            success: "Moved Note to Trash",
            error: "Failed to Archive Note",
        });
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="sm" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60" align="end" alignOffset={8} forceMount>
                <DropdownMenuItem onClick={onArchive}>
                    <Trash className="h-4 w-4 text-muted-foreground mr-2"/> 
                    <div>Delete Note</div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="text-xs text-muted-foreground p-2">
                    Last edited by: {user?.fullName}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}