import { format, formatDistanceToNow, parseISO } from "date-fns";
import { ko } from "date-fns/locale";

export function formatDate(iso: string) {
  try {
    return format(parseISO(iso), "yyyy.MM.dd", { locale: ko });
  } catch {
    return iso.slice(0, 10);
  }
}

export function formatWhen(iso: string) {
  try {
    const d = parseISO(iso);
    if (Number.isNaN(d.getTime())) return iso.slice(0, 10);
    const diff = Date.now() - d.getTime();
    if (diff < 1000 * 60 * 60 * 36) {
      return formatDistanceToNow(d, { addSuffix: true, locale: ko });
    }
    return format(d, "M월 d일", { locale: ko });
  } catch {
    return iso.slice(0, 10);
  }
}
