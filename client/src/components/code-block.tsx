import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border bg-muted/50",
        className
      )}
    >
      <div className="flex items-center justify-between border-b bg-muted/80 px-4 py-2">
        <span className="text-xs font-medium text-muted-foreground">
          {language}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-7 gap-2 px-2 text-xs"
          data-testid="button-copy-code"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
}
