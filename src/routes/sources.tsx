import { createFileRoute } from "@tanstack/react-router";
import { SourceBadge } from "@/components/source-badge";
import { Card, CardBody } from "@/components/ui/card";
import { SOURCES } from "@/lib/content/sources";

export const Route = createFileRoute("/sources")({ component: SourcesPage });

function SourcesPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-[11px] tracking-[0.24em] text-muted-foreground">
          PROVENANCE
        </p>
        <h1 className="font-display text-3xl">출처</h1>
        <p className="max-w-xl text-sm text-pretty text-muted-foreground">
          이 아카이브는 Fun Formula / 北京欢乐扬帆科技有限公司와 무관한
          팬메이드입니다. 정보를 가져오는 경로와, 가져오지 않는 경로를 밝힙니다.
        </p>
      </header>

      <section className="space-y-3">
        {SOURCES.map((source) => (
          <Card key={source.id}>
            <CardBody className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h2 className="font-medium">{source.label}</h2>
                  <SourceBadge kind={source.kind} />
                </div>
                <p className="text-sm text-pretty text-muted-foreground">
                  {source.note}
                </p>
              </div>
              <a
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-sm text-sage underline-offset-2 hover:underline"
              >
                열기
              </a>
            </CardBody>
          </Card>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">갱신 방식</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            쿠폰은 GameRant 공개 HTML을 수 분 주기로 다시 읽습니다. 공식
            Discord 로그는 권한이 없어 수집하지 않습니다.
          </li>
          <li>
            커뮤니티 글은 Reddit r/ZombieWaves 공개 RSS입니다. 댓글·투표수는
            가져오지 않습니다.
          </li>
          <li>
            패치 기록과 공략 본문은 에디터가 스토어·Facebook을 확인하고 직접
            정리합니다. 라이브 스크랩이 아닙니다.
          </li>
          <li>
            코드 생성기, 다이아 해킹, 계정 입력을 요구하는 사이트는 출처에서
            제외합니다.
          </li>
        </ul>
      </section>
    </div>
  );
}
