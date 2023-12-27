"use client"; 

import { 
    Dialog,
    DialogContent,
    DialogHeader,
} from "@/components/ui/dialog"; 
import { useCoverImage } from "@/hooks/use_cover_image";

export const CoverImageModal = () => {
    const coverImage = useCoverImage(); 

    return (
        <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
            <DialogContent>
                <DialogHeader>
                    <h2 className="text-center text-lg font-semibold">
                        Cover Image
                    </h2>
                </DialogHeader>
                <div>
                    Todo: Upload Image
                </div>
            </DialogContent>
        </Dialog>
    )
}