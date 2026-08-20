import { Badge } from "@/components/ui/badge";
import { KIND_LABEL, type SourceKind } from "@/lib/content/sources";

const VARIANT: Record<
  SourceKind,
  "official" | "community" | "editor" | "default"
> = {
  official: "official",
  community: "community",
  aggregator: "editor",
  editor: "editor",
};

export function SourceBadge({
  kind,
  className,
}: {
  kind: SourceKind;
  className?: string;
}) {
  return (
    <Badge variant={VARIANT[kind]} className={className}>
      {KIND_LABEL[kind]}
    </Badge>
  );
}
