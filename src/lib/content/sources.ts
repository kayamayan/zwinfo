export type SourceKind = "official" | "community" | "aggregator" | "editor";

export type Source = {
  id: string;
  label: string;
  href: string;
  kind: SourceKind;
  note: string;
};

export const SOURCES: Source[] = [
  {
    id: "play",
    label: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.ddup.zombiewaves.zw",
    kind: "official",
    note: "패치노트·스토어 설명. Fun Formula 배포.",
  },
  {
    id: "appstore",
    label: "App Store",
    href: "https://apps.apple.com/us/app/zombie-waves-shooting-game/id6443760593",
    kind: "official",
    note: "iOS 버전 기록과 업데이트 로그.",
  },
  {
    id: "facebook",
    label: "공식 Facebook",
    href: "https://www.facebook.com/ZombieWavesGame/",
    kind: "official",
    note: "이벤트·신무기 공지. 운영사 페이지.",
  },
  {
    id: "fbgroup",
    label: "공식 Facebook 그룹",
    href: "https://www.facebook.com/groups/zombiewaves/",
    kind: "official",
    note: "운영진이 관리하는 글로벌 그룹.",
  },
  {
    id: "discord",
    label: "공식 Discord",
    href: "https://discord.gg/zombiewaves",
    kind: "official",
    note: "쿠폰·점검 공지의 1차 창구. 로그인 없이 전체 로그를 가져오지는 않습니다.",
  },
  {
    id: "reddit",
    label: "Reddit r/ZombieWaves",
    href: "https://www.reddit.com/r/ZombieWaves/",
    kind: "community",
    note: "플레이어 공략·빌드 토론. 공식 채널이 아닙니다.",
  },
  {
    id: "gamerant",
    label: "GameRant 코드 목록",
    href: "https://gamerant.com/zombie-waves-codes/",
    kind: "aggregator",
    note: "공개 쿠폰을 모아 두는 미디어. 공식은 아니며 만료가 잣습니다.",
  },
];

export const KIND_LABEL: Record<SourceKind, string> = {
  official: "공식",
  community: "커뮤니티",
  aggregator: "애그리게이터",
  editor: "에디터 정리",
};
