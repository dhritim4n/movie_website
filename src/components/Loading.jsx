import { Loader2 } from "lucide-react";

export default function Loading() {
    return (

        <div className="fixed w-screen h-screen text-primary flex items-center justify-center bg-background">
            <span className="flex gap-1">
                <label className="text-3xl">Please Wait</label>
                <Loader2 className="animate-spin w-10 h-10" />
            </span>
        </div>

    )
}