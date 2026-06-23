export interface TalkLink {
  label: string;
  href: string;
}

export type TalkType = 'Speaker' | 'Lightning Talk' | 'Conference';

export interface Talk {
  date: string;
  title: string;
  venue: string;
  type: TalkType;
  link?: TalkLink;
}

export const talks: Talk[] = [
  {
    date: '2026.06.16',
    title: 'AAIF に入ってみた 〜内から見えるコミュニティ動向〜',
    venue: 'Agentic Tokyo #1、TSUNAGU BASE（KDDI 高輪本社）',
    type: 'Speaker',
    link: { label: 'slides', href: 'https://speakerdeck.com/sato4/aaifniru-tutemita-nei-karajian-erukomiyuniteidong-xiang' },
  },
  {
    date: '2026.02.20',
    title: 'New Standards Supporting Agentic AI Interoperability: A2A and MCP',
    venue: 'LF AI & Data Japan RUG Meetup #3, Fujitsu Kawasaki Tower',
    type: 'Speaker',
    link: { label: 'event report', href: 'https://lfaidata.foundation/blog/2026/04/09/event-report-lf-ai-data-japan-rug-meetup-3/' },
  },
  {
    date: '2025.12.09',
    title: 'Hybrid LLM Inference with LangChain and Agent2Agent',
    venue: 'Open Source Summit + AI_dev Japan 2025, Tokyo',
    type: 'Lightning Talk',
    link: { label: 'sched', href: 'https://ossjapan2025.sched.com/event/29Fnq/lightning-talk-hybrid-llm-inference-with-langchain-and-agent2agent-satoshi-ito-hitachi-ltd' },
  },
  {
    date: '2025.06.20',
    title: 'Project Insights from LF AI & Data',
    venue: 'LF AI & Data Japan RUG Meetup #2, Fujitsu Yokohama Hub',
    type: 'Speaker',
    link: { label: 'event report', href: 'https://lfaidata.foundation/blog/2025/06/27/event-report-lf-ai-data-japan-rug-meetup-2-the-future-at-the-intersection-of-ai-and-open-infrastructure/' },
  },
];
