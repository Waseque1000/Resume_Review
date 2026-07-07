import { Card, CardContent } from "@/components/ui/card";
import { FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileUploadDropzone } from "@/components/FileUploadDropzone";

export default function ResumesPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2 tracking-tight">My Resumes</h1>
          <p className="text-zinc-400 text-sm max-w-md">
            Manage your parsed resumes and tailor them for specific applications.
          </p>
        </div>
        <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg">
          <Plus className="w-4 h-4 mr-2" />
          Upload New
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FileUploadDropzone className="h-64 border-dashed border-zinc-700/50 hover:border-purple-500/50 bg-[#12121A] py-12" />
      </div>
    </div>
  );
}
