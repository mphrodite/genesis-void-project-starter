import { AppSidebar } from "@/components/sidebar/appSidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarProvider } from "@/components/ui/sidebar"
import { UploadIcon } from "lucide-react"

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
          <div className="flex flex-col items-center gap-4 p-8 bg-card rounded-lg">
            <UploadIcon className="size-12 text-muted-foreground" />
            <p className="text-muted-foreground">Upload PDF file</p>
            <Button variant="primary">Select PDF</Button>
          </div>
        </section>

        {/* How It Works Section */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">How It Works</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl">01</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upload your PDF. Select and upload any PDF document you want to summarize.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl">02</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Process with AI. Our local AI model will analyze your document and extract the key information.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl">03</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Review Summary. Get a concise summary of your document and save it for future reference.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </SidebarProvider>
  )
}
