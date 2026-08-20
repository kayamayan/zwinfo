export type GiftCode = {
  code: string;
  status: "active" | "expired";
  note?: string;
};

/** GameRant 공개 목록 기준 (2026-03-02). 라이브 프로브가 덮어쓸 수 있음. */
export const CURATED_CODES: GiftCode[] = [
  { code: "yuanxiao2026", status: "active", note: "2026 원소절" },
  { code: "rsdef23", status: "active" },
  { code: "loveinzw2026", status: "active" },
  { code: "festivity2026zw", status: "active" },
  { code: "rustore2026", status: "active" },
  { code: "Newyear26zw", status: "active", note: "신년" },
  { code: "Jingle25bellzw", status: "active" },
  { code: "rustore2025", status: "active" },
  { code: "zw25candy", status: "active" },
  { code: "dig2win25zw", status: "active" },
  { code: "oktoberfest25zw", status: "active" },
  { code: "QIXIZW2025", status: "active" },
  { code: "zw25bk2school", status: "active" },
  { code: "duanwuk25zw", status: "active" },
  { code: "HBDZW2025", status: "active" },
  { code: "ANNIV2ZW25", status: "active", note: "2주년" },
  { code: "DYZBZS", status: "active" },
  { code: "DYZB666", status: "active" },
  { code: "DYZB888", status: "active" },
  { code: "ZWgood", status: "active" },
  { code: "ZWfun", status: "active" },
  { code: "SJFKTBXD", status: "active" },
  { code: "SJFKtap", status: "active" },
  { code: "sjfkgzh", status: "active" },
  { code: "VIP666", status: "active", note: "상시 VIP" },
  { code: "VIP777", status: "active", note: "상시 VIP" },
  { code: "VIP888", status: "active", note: "상시 VIP" },
  { code: "VIP999", status: "active", note: "상시 VIP" },
  { code: "DSWK25ZW", status: "expired" },
  { code: "sonkran25zw", status: "expired" },
  { code: "shamrock25zw", status: "expired" },
  { code: "loveinzw2025", status: "expired" },
  { code: "festivity2025zw", status: "expired" },
  { code: "Thanksgiving24zw", status: "expired" },
  { code: "HWZW8888", status: "expired" },
  { code: "newyear2025", status: "expired" },
  { code: "zw2024xmas", status: "expired" },
  { code: "Halloween24zw", status: "expired" },
  { code: "MOONCAKE2024", status: "expired" },
];

export const CODES_CURATED_AT = "2026-03-02";
export const CODES_AGGREGATOR_HREF = "https://gamerant.com/zombie-waves-codes/";
