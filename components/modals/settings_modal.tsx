"use client"; 

import {
    Dialog, 
    DialogContent,
    DialogHeader
} from "@/components/ui/dialog"

import { useSettings } from "@/hooks/use_settings";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode_toggle";

export const SettingsModal = () => {
    const settings = useSettings(); 

    return ( 
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <h2 className="text-lg font-medium">
                        Jotster Settings
                    </h2>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1">
                        <Label>
                            Appearance
                        </Label>
                        <span
                        className="text-[0.8rem] text-muted-foreground"
                        >
                            Customize the Jotster UI
                        </span>
                    </div>
                    <ModeToggle />
                </div>
            </DialogContent>
        </Dialog>
    )
}