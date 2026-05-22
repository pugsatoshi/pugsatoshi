export interface NewsItem {
  date: string;
  text: string;
  textJa: string;
}

export const news: NewsItem[] = [
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
  },
  {
    date: '2025.06.20',
    text: 'Spoke at LF AI & Data Japan RUG Meetup #2 (Fujitsu Yokohama Hub).',
    textJa: 'LF AI & Data Japan RUG Meetup #2（富士通 横浜 Hub）にて講演。',
  },
];
