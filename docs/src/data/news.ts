export interface NewsLink {
  label: string;
  href: string;
}

export interface NewsItem {
  date: string;
  text: string;
  textJa: string;
  links?: NewsLink[];
}

export const news: NewsItem[] = [
  {
    date: '2026.06.16',
    text: 'Co-organized Agentic Tokyo #1, a community meetup on AAIF / MCP / A2A, at TSUNAGU BASE (KDDI Takanawa), and gave a talk on community trends seen from inside AAIF. Slides are now published.',
    textJa: 'AAIF / MCP / A2A をテーマとしたコミュニティミートアップ Agentic Tokyo #1 を TSUNAGU BASE（KDDI 高輪本社）にて開催し、AAIF の内側から見えるコミュニティ動向について発表。スライドを公開しました。',
    links: [
      { label: 'slides', href: 'https://speakerdeck.com/sato4/aaifniru-tutemita-nei-karajian-erukomiyuniteidong-xiang' },
      { label: 'connpass', href: 'https://aibuilders.connpass.com/event/394175/' },
    ],
  },
  {
    date: '2026.05.25',
    text: 'Co-organizing Agentic Tokyo #1, a community meetup on AAIF / MCP / A2A, on June 16 at TSUNAGU BASE (KDDI Takanawa).',
    textJa: 'Agentic Tokyo #1（AAIF / MCP / A2A をテーマとしたコミュニティミートアップ）を 6 月 16 日に TSUNAGU BASE（KDDI 高輪本社）にて開催します。',
    links: [
      { label: 'connpass', href: 'https://aibuilders.connpass.com/event/394175/' },
    ],
  },
  {
    date: '2026.02.20',
    text: 'Spoke at LF AI & Data Japan RUG Meetup #3 on agentic AI interop standards (A2A / MCP).',
    textJa: 'LF AI & Data Japan RUG Meetup #3 にて、エージェンティック AI 相互運用標準（A2A / MCP）について講演。',
  },
  {
    date: '2025.12.09',
    text: 'Gave a Lightning Talk at OSS Summit + AI_dev Japan 2025 on hybrid LLM inference with LangChain and A2A.',
    textJa: 'Open Source Summit + AI_dev Japan 2025 にて、LangChain と A2A を用いたハイブリッド LLM 推論についてライトニングトーク。',
  },
  {
    date: '2025.10',
    text: 'APNOMS 2025 paper on nested NFTs for supply chain traceability published on IEEE Xplore.',
    textJa: 'APNOMS 2025 にて発表したサプライチェーン・トレーサビリティ向け Nested NFT 論文が IEEE Xplore に掲載。',
    links: [
      { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org/document/11181346' },
      { label: 'DOI', href: 'https://doi.org/10.23919/APNOMS67058.2025.11181346' },
    ],
  },
  {
    date: '2025.06.20',
    text: 'Spoke at LF AI & Data Japan RUG Meetup #2 (Fujitsu Yokohama Hub).',
    textJa: 'LF AI & Data Japan RUG Meetup #2（富士通 横浜 Hub）にて講演。',
  },
];
