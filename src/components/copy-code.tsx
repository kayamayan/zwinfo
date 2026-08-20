import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { LiveCode } from "@/lib/live";

export function CopyCode({
  item,
  compact,
}: {
  item: LiveCode;
  compact?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const expired = item.status === "expired";

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(item.code);
      setCopied(true);
      toast.success("코드를 복사했습니다");
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      toast.error("복사에 실패했습니다. 길게 눌러 복사하세요.");
    }
  }

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border border-border bg-secondary/60 p-3",
        expired && "opacity-60",
        compact && "p-2.5",
      )}
    >
      <div className="min-w-0 flex-1">
        <p className="font-mono text-sm tracking-wide text-foreground">
          {item.code}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-1.5">
          {expired ? (
            <Badge variant="expired">만료</Badge>
          ) : (
            <Badge variant="live">유효 추정</Badge>
          )}
          {item.isNew && !expired ? <Badge variant="editor">신규</Badge> : null}
          {item.live ? (
            <span className="text-[11px] text-muted-foreground">라이브 확인</span>
          ) : (
            <span className="text-[11px] text-muted-foreground">큐레이션</span>
          )}
          {item.note ? (
            <span className="text-[11px] text-muted-foreground">{item.note}</span>
          ) : null}
        </div>
      </div>
      <Button
        type="button"
        size="icon"
        variant={expired ? "ghost" : "secondary"}
        onClick={() => void onCopy()}
        aria-label={`${item.code} 복사`}
        disabled={expired}
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </Button>
    </div>
  );
}
