import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  Crosshair,
  House,
  Radio,
  Ticket,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "홈", icon: House },
  { to: "/guides", label: "공략", icon: BookOpen },
  { to: "/news", label: "소식", icon: Radio },
  { to: "/codes", label: "쿠폰", icon: Ticket },
  { to: "/codex", label: "도감", icon: Crosshair },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hideChrome = pathname === "/login";

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/92 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link to="/" className="flex items-baseline gap-2 no-underline">
            <span className="font-display text-lg tracking-tight">
              아카이브
            </span>
            <span className="text-xs text-muted-foreground">
              좀비 웨이브스
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <NavItem
                key={item.to}
                {...item}
                active={isActive(pathname, item.to)}
                compact
              />
            ))}
            <Link
              to="/sources"
              className="ml-2 px-2 py-1 text-xs text-muted-foreground no-underline hover:text-foreground"
            >
              출처
            </Link>
          </nav>
          <Link
            to="/sources"
            className="text-xs text-muted-foreground no-underline hover:text-foreground md:hidden"
          >
            출처
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 pb-24 pt-5 md:pb-16 md:pt-8">
        {children}
      </main>

      <nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-sm md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="mx-auto grid max-w-lg grid-cols-5">
          {NAV.map((item) => (
            <li key={item.to}>
              <NavItem
                {...item}
                active={isActive(pathname, item.to)}
                stacked
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

function NavItem({
  to,
  label,
  icon: Icon,
  active,
  stacked,
  compact,
}: {
  to: string;
  label: string;
  icon: typeof House;
  active: boolean;
  stacked?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center no-underline transition-colors duration-150",
        stacked && "flex-col gap-0.5 py-2 text-[11px]",
        compact && "rounded-sm px-3 py-1.5 text-sm",
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
      )}
      aria-current={active ? "page" : undefined}
    >
      <Icon
        className={cn(stacked ? "size-5" : "mr-1.5 size-4")}
        strokeWidth={active ? 2.2 : 1.7}
      />
      {label}
    </Link>
  );
}
