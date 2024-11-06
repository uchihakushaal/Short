"use client";

import { Copy, Check } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useOrigin } from "@/hooks/use-origin";

export default function CopyLink({ url }: { url: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const origin=useOrigin()

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(`${origin}/${url}`)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);

        toast.success("Url copied successfully");
      })
      .catch((error) => console.error("Error copying text: ", error));
  };

  return (
    <TooltipProvider delayDuration={500}>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex items-center">
            {!isCopied && (
              <Copy
                onClick={handleCopyClick}
                className="cursor-pointer w-5 h-5 mr-2"
              />
            )}
            {isCopied && <Check className="text-green-500  mr-2 w-5 h-5" />}
          </div>
        </TooltipTrigger>
        <TooltipContent >
          <p>Copy short url</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
