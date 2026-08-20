export type CommunityPost = {
  id: string;
  title: string;
  href: string;
  author: string;
  publishedAt: string;
};

/** Reddit RSS가 막혔을 때 쓰는 최근 스냅샷. 라이브가 아닙니다. */
export const COMMUNITY_FALLBACK: CommunityPost[] = [
  {
    id: "t3_1vtd1rm",
    title: "Help",
    href: "https://www.reddit.com/r/ZombieWaves/comments/1vtd1rm/help/",
    author: "MarkutKyler",
    publishedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "t3_1vt1ktd",
    title: "Sun God",
    href: "https://www.reddit.com/r/ZombieWaves/comments/1vt1ktd/sun_god/",
    author: "Fife901",
    publishedAt: "2026-08-19T00:00:00.000Z",
  },
  {
    id: "t3_1vsqnv0",
    title: "Darktide Antibodies",
    href: "https://www.reddit.com/r/ZombieWaves/comments/1vsqnv0/darktide_antibodies/",
    author: "Shot_Travel5104",
    publishedAt: "2026-08-19T00:00:00.000Z",
  },
  {
    id: "t3_1vsd7d3",
    title: "Apocalypse guide?",
    href: "https://www.reddit.com/r/ZombieWaves/comments/1vsd7d3/apocalypse_guide_this_shits_fucking_confusing/",
    author: "BodybuilderRegular84",
    publishedAt: "2026-08-19T00:00:00.000Z",
  },
  {
    id: "t3_1vs2omn",
    title: "Temporal Rescue",
    href: "https://www.reddit.com/r/ZombieWaves/comments/1vs2omn/temporal_rescue/",
    author: "duffusmcfrewfus",
    publishedAt: "2026-08-18T00:00:00.000Z",
  },
  {
    id: "t3_1vrqrz0",
    title: "Zero Core unlocked for a limited time",
    href: "https://www.reddit.com/r/ZombieWaves/comments/1vrqrz0/zero_core_unlocked_for_a_limited_time/",
    author: "This_Froyo_2270",
    publishedAt: "2026-08-18T00:00:00.000Z",
  },
  {
    id: "t3_1vrjr3n",
    title: "Best S-Tier weapon and hero",
    href: "https://www.reddit.com/r/ZombieWaves/comments/1vrjr3n/best_stier_weapon_and_hero/",
    author: "TimmyAbi",
    publishedAt: "2026-08-18T00:00:00.000Z",
  },
  {
    id: "t3_1vri5ms",
    title: "New player, help needed",
    href: "https://www.reddit.com/r/ZombieWaves/comments/1vri5ms/new_player_help_needed/",
    author: "FriendlyHovercraft33",
    publishedAt: "2026-08-18T00:00:00.000Z",
  },
];
