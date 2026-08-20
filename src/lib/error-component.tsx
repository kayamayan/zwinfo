import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-background px-6 text-center text-foreground">
      <span className="text-rust" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="font-display text-2xl">페이지를 열지 못했습니다</h1>
      <p className="max-w-md text-sm break-words text-muted-foreground">
        {error.message || "잠시 후 다시 시도해 주세요."}
      </p>
    </main>
  );
}
