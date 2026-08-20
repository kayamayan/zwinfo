import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="grid min-h-dvh place-items-center bg-background px-6 text-foreground">
      <div className="w-full max-w-sm space-y-5">
        <div className="space-y-1">
          <p className="text-xs tracking-[0.2em] text-muted-foreground">
            OPTIONAL
          </p>
          <h1 className="font-display text-3xl">들어가기</h1>
          <p className="text-sm text-muted-foreground">
            공략과 쿠폰은 로그인 없이 볼 수 있습니다. 계정은 나중에 북마크용으로
            쓸 수 있습니다.
          </p>
        </div>
        {authEnabled ? (
          <div className="space-y-2">
            {GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                type="button"
                variant="secondary"
                className="w-full"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
              >
                {p.label}로 계속
              </Button>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">로그인이 꺼져 있습니다.</p>
        )}
        <Link
          to="/"
          className="block text-center text-sm text-muted-foreground no-underline hover:text-foreground"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
