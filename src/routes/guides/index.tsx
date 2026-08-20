import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { GUIDES } from "@/lib/content/guides";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/guides/")({ component: GuidesPage });

function GuidesPage() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return GUIDES;
    return GUIDES.filter((g) =>
      [g.title, g.summary, ...g.tags].join(" ").toLowerCase().includes(needle),
    );
  }, [q]);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-[11px] tracking-[0.24em] text-muted-foreground">
          FIELD NOTES
        </p>
        <h1 className="font-display text-3xl">공략</h1>
        <p className="max-w-xl text-sm text-pretty text-muted-foreground">
          에디터가 공식 채널과 커뮤니티 스레드를 교차 확인한 노트입니다. 패치 후
          수치가 바뀌면 원리만 유효할 수 있습니다.
        </p>
      </header>
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="키워드 — 스킬, 쿠폰, 성장…"
        aria-label="공략 검색"
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map((guide) => (
          <Link
            key={guide.slug}
            to="/guides/$slug"
            params={{ slug: guide.slug }}
            className="block no-underline"
          >
            <Card className="h-full transition-colors duration-150 hover:bg-accent">
              <CardBody className="flex h-full flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {guide.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-lg font-medium">{guide.title}</h2>
                <p className="flex-1 text-sm text-pretty text-muted-foreground">
                  {guide.summary}
                </p>
                <p className="text-xs text-muted-foreground">
                  {guide.minutes}분 읽기 · {formatDate(guide.updatedAt)}
                </p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">맞는 공략이 없습니다.</p>
      ) : null}
    </div>
  );
}
