"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, File, X, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface FileUploadDropzoneProps {
  className?: string;
  onFileAccepted?: (file: File) => void;
}

export function FileUploadDropzone({ className, onFileAccepted }: FileUploadDropzoneProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setSelectedFile(file);
        if (onFileAccepted) {
          onFileAccepted(file);
        }
      }
    },
    [onFileAccepted]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  const handleUpload = () => {
    if (!selectedFile) return;
    setIsUploading(true);
    
    // TODO: Connect this to actual backend upload (UploadThing)
    setTimeout(() => {
      setIsUploading(false);
      setIsSuccess(true);
      
      // Navigate to the review detail page after a short delay
      setTimeout(() => {
        router.push("/dashboard/reviews/demo-id");
      }, 1000);
    }, 1500);
  };

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    setIsSuccess(false);
  };

  if (selectedFile) {
    return (
      <div className={cn("flex flex-col items-center justify-center p-4 border-2 border-zinc-700 rounded-xl bg-zinc-900/50 relative", className)}>
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
            <CheckCircle2 className="w-10 h-10 text-teal-400 mb-3" />
            <span className="text-sm font-medium text-white">Upload Complete</span>
            <span className="text-xs text-zinc-400 mt-1">Ready for analysis</span>
          </div>
        ) : (
          <>
            <button 
              onClick={clearFile}
              className="absolute top-2 right-2 p-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
              disabled={isUploading}
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
              <File className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-zinc-200 truncate max-w-[90%] mb-1">{selectedFile.name}</span>
            <span className="text-xs text-zinc-500 mb-3">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</span>
            <Button 
              size="sm" 
              onClick={(e) => {
                e.stopPropagation();
                handleUpload();
              }}
              disabled={isUploading}
              className="bg-purple-600 hover:bg-purple-500 text-white w-full rounded-lg"
            >
              {isUploading ? "Uploading..." : "Analyze Resume"}
            </Button>
          </>
        )}
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={cn(
        "flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-xl cursor-pointer transition-colors group relative",
        isDragActive 
          ? "border-purple-500 bg-purple-500/10" 
          : "border-zinc-700/50 hover:border-purple-500/50 bg-zinc-900/20 hover:bg-purple-500/5",
        className
      )}
    >
      <input {...getInputProps()} />
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors",
        isDragActive ? "bg-purple-500 text-white" : "bg-zinc-800 text-zinc-400 group-hover:bg-purple-500/20 group-hover:text-purple-400"
      )}>
        <UploadCloud className="w-5 h-5" />
      </div>
      <span className={cn(
        "text-sm font-medium transition-colors",
        isDragActive ? "text-purple-400" : "text-zinc-200"
      )}>
        {isDragActive ? "Drop resume here" : "Upload Resume"}
      </span>
      <span className="text-xs text-zinc-500 mt-1 text-center">Drag & drop or click<br/>PDF or DOCX (Max 10MB)</span>
    </div>
  );
}
