import { createFileRoute } from "@tanstack/react-router";
import { CopyCode } from "@/components/copy-code";
import { RefreshBar } from "@/components/refresh-bar";
import { Card, CardBody } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { loadLive } from "@/lib/live";

export const Route = createFileRoute("/codes")({
  loader: () => loadLive(),
  pendingComponent: CodesPending,
  component: CodesPage,
});

function CodesPage() {
  const live = Route.useLoaderData();
  const active = live.codes.items.filter((c) => c.status === "active");
  const expired = live.codes.items.filter((c) => c.status === "expired");

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-[11px] tracking-[0.24em] text-muted-foreground">
          BUNDLE CODES
        </p>
        <h1 className="font-display text-3xl">쿠폰</h1>
        <p className="max-w-xl text-sm text-pretty text-muted-foreground">
          GameRant 공개 목록을 주기적으로 다시 읽습니다. 1차 발표는 공식
          Discord와 Facebook입니다. 생성기·설문·계정 로그인을 요구하는 사이트는
          쓰지 마세요.
        </p>
      </header>

      <RefreshBar
        fetchedAt={live.fetchedAt}
        codesOk={live.codes.ok}
        communityOk={live.community.ok}
      />

      {!live.codes.ok ? (
        <p className="rounded-lg border border-border bg-secondary px-3 py-2 text-xs text-muted-foreground">
          라이브 확인에 실패해 에디터 큐레이션 목록을 보여 줍니다. 사용 전
          공식 Discord에서 한 번 더 확인하세요.
        </p>
      ) : null}

      <Card>
        <CardBody className="space-y-2 text-sm">
          <h2 className="font-medium">입력 방법</h2>
          <ol className="list-decimal space-y-1 pl-5 text-muted-foreground">
            <li>좌측 상단 아바타를 엽니다.</li>
            <li>번들 코드(Bundle Code)를 선택합니다.</li>
            <li>코드를 붙여 넣고 Exchange. 대소문자 그대로, 계정당 1회.</li>
          </ol>
        </CardBody>
      </Card>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">유효 추정 {active.length}</h2>
        <div className="grid gap-2">
          {active.map((item) => (
            <CopyCode key={item.code} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">만료 {expired.length}</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {expired.map((item) => (
            <CopyCode key={item.code} item={item} compact />
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground">
        출처:{" "}
        <a
          href={live.codes.sourceHref}
          target="_blank"
          rel="noreferrer"
          className="underline-offset-2 hover:underline"
        >
          GameRant Zombie Waves Codes
        </a>
      </p>
    </div>
  );
}

function CodesPending() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-10 w-32" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
    </div>
  );
}
