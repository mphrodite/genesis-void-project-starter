
import { AppSidebar } from "@/components/sidebar/appSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { FileUploadCard } from "@/components/upload/FileUploadCard"
import { HowItWorks } from "@/components/HowItWorks"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-1 flex-col gap-8 p-8 text-white">
        {/* Header Section */}
        <section className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold">PDF Summarizer</h1>
          <p className="text-muted-foreground">
            Upload a PDF to get an AI-powered summary using a local LLM
          </p>
          <div className="w-full max-w-2xl mx-auto">
            <FileUploadCard />
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks />
      </main>
    </SidebarProvider>
  )
}
