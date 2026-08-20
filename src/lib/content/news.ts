export type NewsItem = {
  id: string;
  date: string;
  title: string;
  body: string;
  tags: string[];
  sourceId: "play" | "appstore" | "facebook" | "discord";
  href: string;
};

export const OFFICIAL_NEWS: NewsItem[] = [
  {
    id: "freezing-core-2026-08",
    date: "2026-08-15",
    title: "신무기 보급 — 프리징 코어",
    body: "S급 냉기 소총 프리징 코어 이벤트가 8월 15일 00:00 (UTC+0)에 시작됐습니다. 개설 30일 이상 서버가 대상입니다. 공식 Facebook 공지 기준.",
    tags: ["무기", "이벤트"],
    sourceId: "facebook",
    href: "https://www.facebook.com/ZombieWavesGame/",
  },
  {
    id: "blazing-summer-2026-05",
    date: "2026-05-15",
    title: "블레이징 서머 로켓 런처",
    body: "스토어 업데이트: 신규 로켓 런처 블레이징 서머, 헬파이어 스킨 블레이징 윙스, 장식 시리즈 Peculiar Architecture. Play 스토어 2026년 5월 15일 기록.",
    tags: ["패치", "무기", "스킨"],
    sourceId: "play",
    href: "https://play.google.com/store/apps/details?id=com.ddup.zombiewaves.zw",
  },
  {
    id: "electrosaw-2026-02",
    date: "2026-02-06",
    title: "전기톱 석궁 · 기계 좀비",
    body: "신규 무기 Electrosaw Crossbow와 기계 좀비(Mechanical Zombie) 시스템이 추가됐습니다. App Store 2.1.9 기록.",
    tags: ["패치", "시스템"],
    sourceId: "appstore",
    href: "https://apps.apple.com/us/app/zombie-waves-shooting-game/id6443760593",
  },
  {
    id: "guild-gift-2025-12",
    date: "2025-12-15",
    title: "길드 선물 · 히어로 스위티 · 스테이지 150",
    body: "길드 기프트 기능, 신규 히어로 ZW48 Sweetie(스위티), 캠페인 스테이지 150 확장. App Store 2.1.7 및 공식 그룹 공지.",
    tags: ["길드", "히어로", "캠페인"],
    sourceId: "appstore",
    href: "https://apps.apple.com/us/app/zombie-waves-shooting-game/id6443760593",
  },
];
