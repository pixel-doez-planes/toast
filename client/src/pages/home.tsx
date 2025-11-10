import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <section className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Code Interpreter
              <span className="block text-primary mt-2">Playground</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Write, execute, and experiment with code in multiple languages. 
              A powerful interpreter right in your browser.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/interpreter">
                <Button size="lg" className="gap-2" data-testid="button-get-started">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Multiple Languages</h3>
                  <p className="text-sm text-muted-foreground">
                    Execute JavaScript, TypeScript, Python, and more with real-time output
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Instant Execution</h3>
                  <p className="text-sm text-muted-foreground">
                    Run your code instantly and see results in real-time with no setup required
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
