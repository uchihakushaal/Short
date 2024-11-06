"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Check, Copy, Globe, Share, Share2 } from "lucide-react";


import {
  PopoverTrigger,
  Popover,
  PopoverContent
} from "@/components/ui/popover"

import { Button } from "@/components/ui/button";
import { useOrigin } from "@/hooks/use-origin";



export const ShareButton = ({id,name}:{id:any,name:string}) => {
    const origin =useOrigin()
 

  const [copied, setCopied] = useState(false);
  const url = `${origin}/share/${id}/${name}`;
  const onCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button  variant="secondary">
          Share
          
            <Share2
              className=" w-4 h-4 ml-2"
            />
         
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-72" 
        align="end"
        alignOffset={8}
        forceMount
      >
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
            </div>
            <div className="flex items-center">
              <input 
                className="flex-1 px-2 text-xs border rounded-l-md h-8 bg-muted truncate"
                value={url}
                disabled
              />
              <Button
                onClick={onCopy}
                disabled={copied}
                className="h-8 rounded-l-none"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          
          </div>
        
      </PopoverContent>
    </Popover>
  )
}