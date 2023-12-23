"use client";

import { ConfirmModal } from "@/components/modals/confirm_modal";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface BannerProps { 
    documentId: Id<"documents">;
}

export const Banner = ({
    documentId,
}: BannerProps ) => {
    const router = useRouter(); 
    const remove = useMutation(api.documents.remove);
    const restore = useMutation(api.documents.restore);
    
    const onRemove = () => {
        const promise = remove({ id: documentId })

        toast.promise(promise, {
            loading: "Deleting Note...",
            success: "Note Deleted!",
            error: "Failed to Delete Note!"
        });

        router.push("/documents")
    }

    const onRestore = () => {
        const promise = restore({ id: documentId })
        toast.promise(promise, {
            loading: "Restoring Note...",
            success: "Note Restored!",
            error: "Failed to restore Note!"
        })
    }

    return ( 
        <div className="w-full bg-red-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center">
            <p>This page is in the Trash.</p>
            <Button size="sm" onClick={onRestore} variant="outline" className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 auto font-normal">
                Restore Page
            </Button>
            <ConfirmModal onConfirm={onRemove}>
            <Button size="sm" variant="outline" className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 auto font-normal">
                Delete Forever
            </Button>
            </ConfirmModal>
        </div>
     );
}
 