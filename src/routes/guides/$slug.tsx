import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SourceBadge } from "@/components/source-badge";
import { Badge } from "@/components/ui/badge";
import { getGuide } from "@/lib/content/guides";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    return guide;
  },
  component: GuidePage,
});

function GuidePage() {
  const guide = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-2xl space-y-8">
      <Link
        to="/guides"
        className="inline-flex items-center gap-1 text-xs text-muted-foreground no-underline hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        공략 목록
      </Link>
      <header className="space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {guide.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="font-display text-3xl text-balance sm:text-4xl">
          {guide.title}
        </h1>
        <p className="text-sm text-pretty text-muted-foreground">
          {guide.summary}
        </p>
        <p className="text-xs text-muted-foreground">
          {guide.minutes}분 · {formatDate(guide.updatedAt)} 정리
        </p>
      </header>
      {guide.sections.map((section) => (
        <section key={section.heading} className="space-y-3">
          <h2 className="text-lg font-medium">{section.heading}</h2>
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-pretty text-sm leading-relaxed">
              {p}
            </p>
          ))}
        </section>
      ))}
      <footer className="space-y-2 border-t border-border pt-5">
        <h2 className="text-sm font-medium">출처</h2>
        <ul className="space-y-2">
          {guide.sources.map((src) => (
            <li key={src.href} className="flex items-center gap-2">
              <SourceBadge kind={src.kind} />
              <a
                href={src.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm underline-offset-2 hover:underline"
              >
                {src.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}
