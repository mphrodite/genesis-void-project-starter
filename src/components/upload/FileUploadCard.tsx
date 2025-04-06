
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { UploadIcon } from "lucide-react"
import { useState, useRef } from "react"
import { toast } from "@/hooks/use-toast"

export function FileUploadCard() {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelection(files[0])
    }
  }

  const handleFileSelection = (file: File) => {
    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file.",
        variant: "destructive"
      })
      return
    }
    
    toast({
      title: "File uploaded",
      description: `${file.name} has been uploaded successfully.`
    })
    
    // Here you would typically handle the file upload to your backend
    console.log("File selected:", file)
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileSelection(files[0])
    }
  }

  return (
    <Card 
      className={`flex flex-col items-center gap-4 p-8 bg-card rounded-lg border-2 border-dashed ${isDragging ? 'border-primary' : 'border-muted'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <CardContent className="flex flex-col items-center gap-4 p-0">
        <UploadIcon className="size-12 text-muted-foreground" />
        <p className="text-muted-foreground">Upload PDF file</p>
        <p className="text-sm text-muted-foreground">Drag and drop or click to browse</p>
        <Button variant="default" onClick={handleButtonClick}>
          Select PDF
        </Button>
        <input 
          type="file" 
          ref={fileInputRef} 
          accept=".pdf" 
          className="hidden" 
          onChange={handleFileInputChange} 
        />
      </CardContent>
    </Card>
  )
}
