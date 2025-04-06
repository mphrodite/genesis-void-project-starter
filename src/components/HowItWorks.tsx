
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StepProps {
  number: string
  title: string
  description: string
}

function Step({ number, title, description }: StepProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl text-primary">{number}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Your PDF",
      description: "Select and upload any PDF document you want to summarize."
    },
    {
      number: "02",
      title: "Process with AI",
      description: "Our local AI model will analyze your document and extract the key information."
    },
    {
      number: "03",
      title: "Review Summary",
      description: "Get a concise summary of your document and save it for future reference."
    }
  ]

  return (
    <section className="my-10">
      <h2 className="mb-6 text-2xl font-semibold">How It Works</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <Step 
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  )
}
