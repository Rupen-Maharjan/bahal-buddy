import { CheckCircle, Home, MessageSquare, Search } from "lucide-react"

const HowItWorks =() => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search",
      description: "Browse our extensive collection of properties and find the perfect match for your needs.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Connect",
      description: "Contact property owners directly to ask questions and schedule viewings.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Book",
      description: "Secure your rental with our simple booking process and payment system.",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Move In",
      description: "Get the keys to your new space and start enjoying your new home.",
    },
  ]

  return (
    <section className="my-16">
      <h2 className="mb-8 text-2xl font-bold md:text-3xl text-center">How it works</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary">
              {step.icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks;