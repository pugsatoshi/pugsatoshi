export interface PubLink { label: string; href: string }
export interface Pub {
  year: number;
  order: number;
  authors: string;
  title: string;
  venue: string;
  type: string;
  links: PubLink[];
  note?: string;
}

export const publications: Pub[] = [
  {
    year: 2025,
    order: 0,
    authors: 'Satoshi Ito, T. Sato, T. Nagai, S. Hasegawa, K. Fukunaka, T. Umeda',
    title: 'Investigating the Application of Nested NFTs on Consortium Blockchain for Enterprise Supply Chain Traceability Management',
    venue: 'Proc. 25th Asia-Pacific Network Operations and Management Symposium (APNOMS), pp. 1–4, Kaohsiung, Taiwan',
    type: 'Conference',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.23919/APNOMS67058.2025.11181346' },
      { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org/document/11181346' },
    ],
  },
  {
    year: 2022,
    order: 2,
    authors: 'Mao Nishira, Satoshi Ito, Hiroki Nishikawa, Xiangbo Kong, Hiroyuki Tomiyama',
    title: 'An ILP-based Approach to Delivery Drone Routing under Load-dependent Flight Speed',
    venue: 'Proc. International Conference on Electronics, Information, and Communication (ICEIC), pp. 497–500, Jeju, Korea',
    type: 'Conference',
    links: [
      { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org/abstract/document/9748803' },
    ],
  },
  {
    year: 2022,
    order: 1,
    authors: 'Satoshi Ito, Keishi Akaiwa, Yusuke Funabashi, Hiroki Nishikawa, Xiangbo Kong, Ittetsu Taniguchi, Hiroyuki Tomiyama',
    title: 'Load and Wind Aware Routing of Delivery Drones',
    venue: 'Drones, MDPI, vol. 6, no. 2',
    type: 'Journal',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.3390/drones6020050' },
    ],
  },
  {
    year: 2021,
    order: 8,
    authors: '伊藤哲, 赤岩慧士, 舟橋勇佑, 西川広記, 孔祥博, 谷口一徹, 冨山宏之',
    title: '荷重と風による飛行速度の変化を考慮したドローン配送計画',
    venue: '電子情報通信学会 VLD/DC/RECONF/ICD・情報処理学会 SLDM 研究会, オンライン',
    type: 'Workshop (JP)',
    links: [
      { label: 'IEICE', href: 'https://ken.ieice.org/ken/paper/20211202uCGb/' },
    ],
    note: '2021年12月',
  },
  {
    year: 2021,
    order: 7,
    authors: '伊藤哲, 根來俊介, 孔祥博, 谷口一徹, 冨山宏之',
    title: '配送用ドローンの消費エネルギーモデリングの改良',
    venue: '情報処理学会 組込みシステム研究会, 横浜',
    type: 'Workshop (JP)',
    links: [
      { label: 'IPSJ', href: 'https://www.ipsj.or.jp/kenkyukai/event/emb58.html' },
    ],
    note: '2021年11月',
  },
  {
    year: 2021,
    order: 6,
    authors: '西羅真央, 伊藤哲, 西川広記, 孔祥博, 冨山宏之',
    title: '荷重により速度変化する荷物配送ドローンの経路計画に対する近似解法',
    venue: '情報処理学会 組込みシステム研究会, 横浜',
    type: 'Workshop (JP)',
    links: [
      { label: 'IPSJ', href: 'https://www.ipsj.or.jp/kenkyukai/event/emb58.html' },
    ],
    note: '2021年11月',
  },
  {
    year: 2021,
    order: 5,
    authors: '徳雄帆, 伊藤哲, 嶋田知泰, 西川広記, 孔祥博, 冨山宏之',
    title: 'OpenCVとDlibライブラリを用いた瞬き検出プログラムの開発',
    venue: '情報処理学会 組込みシステム研究会, 横浜',
    type: 'Workshop (JP)',
    links: [
      { label: 'IPSJ', href: 'https://www.ipsj.or.jp/kenkyukai/event/emb58.html' },
    ],
    note: '2021年11月',
  },
  {
    year: 2021,
    order: 4,
    authors: 'Satoshi Ito, Keishi Akaiwa, Yusuke Funabashi, Hiroki Nishikawa, Xiangbo Kong, Ittetsu Taniguchi, Hiroyuki Tomiyama',
    title: 'Routing of Delivery Drones Considering Load and Wind Effects',
    venue: 'Proc. International Symposium on Advanced Technologies and Applications in the Internet of Things (ATAIT), pp. 116–125, Online',
    type: 'Conference',
    links: [
      { label: 'CEUR-WS', href: 'https://ceur-ws.org/Vol-3131/paper14.pdf' },
    ],
  },
  {
    year: 2021,
    order: 3,
    authors: 'Satoshi Ito, Hiroki Nishikawa, Xiangbo Kong, Yusuke Funabashi, Atsuya Shibata, Shunsuke Negoro, Ittetsu Taniguchi, Hiroyuki Tomiyama',
    title: 'Energy-aware Routing of Delivery Drones under Windy Conditions',
    venue: 'IPSJ Transactions on System LSI Design Methodology, vol. 14, pp. 30–39',
    type: 'Journal',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.2197/ipsjtsldm.14.30' },
    ],
  },
  {
    year: 2021,
    order: 2,
    authors: 'Yuho Toku, Satoshi Ito, Tomoyasu Shimada, Hiroki Nishikawa, Xiangbo Kong, Hiroyuki Tomiyama',
    title: 'Accuracy and Speed Evaluation of Eye Blink Detection Algorithms via OpenCV and Dlib Libraries',
    venue: 'Proc. International Workshop on Nonlinear Circuits, Communications and Signal Processing (NCSP), pp. 57–60, Online',
    type: 'Conference',
    links: [
      { label: 'NCSP', href: 'https://ncsp.jp/NCSP21/' },
    ],
  },
  {
    year: 2021,
    order: 1,
    authors: 'Satoshi Ito, Shunsuke Negoro, Xiangbo Kong, Ittetsu Taniguchi, Hiroyuki Tomiyama',
    title: 'Improved Modeling of Energy Consumption of Delivery Drones',
    venue: 'Proc. Workshop on Synthesis And System Integration of Mixed Information Technologies (SASIMI), pp. 56–60, Online',
    type: 'Conference',
    links: [
      { label: 'SASIMI', href: 'https://sasimi.jp/new/sasimi2021/index.html' },
    ],
  },
  {
    year: 2021,
    order: 0,
    authors: 'Satoshi Ito, Shunsuke Negoro, Xiangbo Kong, Ittetsu Taniguchi, Hiroyuki Tomiyama',
    title: 'A Methodology for Measuring Flight Speed of Drones in Indoor Environments',
    venue: 'Procedia Computer Science, Elsevier, vol. 187, pp. 322–328',
    type: 'Journal',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1016/j.procs.2021.04.069' },
      { label: 'ScienceDirect', href: 'https://www.sciencedirect.com/science/article/pii/S1877050921008620' },
    ],
  },
  {
    year: 2020,
    order: 0,
    authors: 'Satoshi Ito, Shunsuke Negoro, Xiangbo Kong, Ittetsu Taniguchi, Hiroyuki Tomiyama',
    title: 'A Methodology for Measuring Flight Speed of Drones in Indoor Environments',
    venue: 'International Conference on Identification, Information and Knowledge in the Internet of Things (IIKI), Zhuhai, China',
    type: 'Conference',
    links: [
      { label: 'ScienceDirect', href: 'https://www.sciencedirect.com/science/article/pii/S1877050921008620' },
    ],
  },
];
