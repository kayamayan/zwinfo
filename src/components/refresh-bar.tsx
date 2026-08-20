import { useRouter } from "@tanstack/react-router";
import { RefreshCw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { formatWhen } from "@/lib/format";
import { refreshLive } from "@/lib/live";

export function RefreshBar({
  fetchedAt,
  codesOk,
  communityOk,
}: {
  fetchedAt: string;
  codesOk: boolean;
  communityOk: boolean;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function onRefresh() {
    setBusy(true);
    try {
      await refreshLive();
      await router.invalidate();
      toast.success("목록을 다시 확인했습니다");
    } catch {
      toast.error("다시 확인하지 못했습니다. 큐레이션 목록을 유지합니다.");
    } finally {
      setBusy(false);
    }
  }

  const liveNote =
    codesOk && communityOk
      ? "쿠폰·커뮤니티 라이브"
      : codesOk
        ? "쿠폰 라이브 · 커뮤니티 대기"
        : communityOk
          ? "커뮤니티 라이브 · 쿠폰 대기"
          : "라이브 확인 실패 · 큐레이션";

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
      <p>
        {liveNote}
        <span className="mx-1.5 text-border">·</span>
        {formatWhen(fetchedAt)} 확인
      </p>
      <Button
        type="button"
        size="sm"
        variant="ghost"
        onClick={() => void onRefresh()}
        disabled={busy}
        className="h-8 gap-1.5 px-2 text-xs"
      >
        <RefreshCw className={busy ? "size-3.5 animate-spin" : "size-3.5"} />
        다시 확인
      </Button>
    </div>
  );
}
