"use client";

import { Spinner } from "@/components/spinner";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const TrashBin = () => {
    const router = useRouter(); 
    const params = useParams();  
    const documents = useQuery(api.documents.getTrash); 
    const restore = useMutation(api.documents.restore); 
    const remove = useMutation(api.documents.remove); 

    const [search, setSearch] = useState(""); 

    const filteredDocuments = documents?.filter((document) => {
        return document.title.toLowerCase().includes(search.toLowerCase()); 
    });

    const onClick = (documentId: string) => {
        router.push(`/documents/${documentId}`);
    };

    const onRestore = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        documentId: Id<"documents">
    ) => {
        event.stopPropagation(); 
        const promise = restore({ id: documentId });
        toast.promise(promise, {
            loading: "Restoring Note...", 
            success: "Restored Note!",
            error: "Note could not be restored",
        });
    }

    const onRemove = (
        documentId: Id<"documents">
    ) => {
        const promise = remove({ id: documentId });
        toast.promise(promise, {
            loading: "Deleting Note...", 
            success: "Deleted Note!",
            error: "Note could not be deleted",
        });

        if (params.documentId === documentId) {
            router.push("/documents"); 
        }
    };

    if (documents === undefined) {
        return (
            <div className="h-full flex items-center justify-center p-4">
                <Spinner size="lg" />
            </div>
        )
    }

    return (
        <div>
            Trash
        </div>
    )
}