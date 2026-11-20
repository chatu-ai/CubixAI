import type { LocalizedContent } from '@/i18n/useContent'

/** 咨询培训页（/training）正文：zh 为中文原文，en 为英文译文 */
const zh = {
  hero: {
    title: '模块化 AI 实训：打通业务与营收闭环',
    subtitle: '一套为「业务落地」与「收入变现」而设计的模块化培训体系',
    stats: [
      { value: '89+', label: '核心课时' },
      { value: '6', label: '大行业纵深' },
      { value: '40+', label: '实战场景' },
      { value: '16+', label: '可选模块自由组合' },
    ],
  },
  problems: {
    title: '我们解决什么问题',
    statusHeader: '你的现状',
    solutionHeader: '我们的解法',
    rows: [
      { status: '买了AI工具，不知道业务怎么用', solution: '从赚钱场景讲起，不是从技术原理' },
      { status: '团队培训完，还是不会落地', solution: '场景驱动，40+实战案例，学完当天就能用' },
      { status: '通用课程不适用我们行业', solution: '电商/教育/医疗/金融/法律/房产，6大行业专属方案' },
      { status: '学完了，变不了现', solution: '课程体系围绕一个核心：学完就能赚钱' },
    ],
  },
  architecture: {
    title: '课程架构：积木式组合',
    subtitle1: '课程不是一条线，而是一盒积木。',
    subtitle2: '初中高三阶主线 + 6大行业纵深 + 5大前沿扩展，像搭积木一样自由组合你的学习路径。',
    cards: [
      {
        title: '三层主线',
        items: ['初级 — AI副业变现入门', '中级 — API转售、短视频矩阵、自动化工作流', '高级 — SaaS产品化、政企项目交付'],
      },
      {
        title: '六大行业纵深',
        items: ['电商', '教育', '医疗', '金融', '法律', '房产'],
      },
      {
        title: '五大前沿扩展',
        items: ['AI+创意', 'AI+数据分析', 'AI+自动化', 'AI+出海', 'AI+企业级部署'],
      },
    ],
  },
  differences: {
    title: '六大核心差异',
    pointHeader: '差异点',
    descHeader: '说明',
    rows: [
      { title: '积木式架构', desc: '自由组合学习路径，16+可选模块' },
      { title: '变现优先', desc: '5+变现路径，从副业到企业级交付' },
      { title: '先教学习法', desc: '费曼学习法×AI，掌握方法后学习提速3倍' },
      { title: '自带工具栈', desc: '配套OpenClaw AI网关、Hermes零代码助手、ChatU企业级系统' },
      { title: '场景驱动', desc: '不写小红书文案、搭智能客服、分析销售数据……每招都能直接用' },
      { title: '行业专属', desc: '6大行业合规框架+落地方案，直接对标你的业务' },
    ],
  },
  paths: {
    title: '全赛道 AI 能力进阶',
    routeLabel: '路径：',
    resultLabel: '成果：',
    items: [
      {
        role: '企业管理者',
        route: '初级模块 → 高级全修 → 对应行业 AI 专项实战课程',
        result: '6个月后：主导公司AI中台建设，团队效率提升3倍',
      },
      {
        role: '业务负责人',
        route: '初级全修 → 中级模块1-3 → 所属赛道 AI 数字化运营课',
        result: '3个月后：用AI管3家店客服+营销，人力成本省40%',
      },
      {
        role: '自由职业者/创业者',
        route: '初级全修 → 中级全修 → 垂直领域 AI 能力拓展课程',
        result: '2个月后：AI接单月入2万+，服务12个中小企业客户',
      },
    ],
  },
  formats: {
    title: '三大授课形式',
    items: [
      {
        title: '线下名师面授',
        items: [
          '行业资深导师实地驻场授课，面对面深度答疑',
          '实地案例沙盘实操，现场拆解企业真实业务难题',
          '线下圈层资源对接，同步链接同行产业人脉',
        ],
      },
      {
        title: '线上随心点播课',
        items: [
          '下单即刻解锁全量课程，无时间地点观看限制',
          '课程永久回放，可反复复盘知识点、实操步骤',
          '轻量化碎片化学习，适配通勤、间隙自主提升',
        ],
      },
      {
        title: '沉浸式互动 AI 训练营',
        items: [
          '全程助教伴学，实时答疑纠偏，杜绝自学断层',
          '阶段性实战任务输出，配套点评打磨落地能力',
          '学员社群同步交流，组队完成 AI 商业实战项目',
        ],
      },
    ],
  },
  cta: {
    title: 'AI 赋能成长，沉淀可落地的企业生产力',
    subtitle: '89+课时 · 40+实战场景 · 6大行业方向',
    tagline: '学完即用 · 用完即赚',
    button: '预约咨询 →',
  },
}

const en: typeof zh = {
  hero: {
    title: 'Practical Modular AI Training: Close the Loop from Business to Revenue',
    subtitle: 'A modular training system built for two goals: putting AI to work in your business and turning it into revenue',
    stats: [
      { value: '89+', label: 'Core Lessons' },
      { value: '6', label: 'Industry Deep Dives' },
      { value: '40+', label: 'Hands-on Scenarios' },
      { value: '16+', label: 'Mix-and-Match Modules' },
    ],
  },
  problems: {
    title: 'The Problems We Solve',
    statusHeader: 'Where You Are Now',
    solutionHeader: 'How We Solve It',
    rows: [
      {
        status: 'We bought AI tools but don\'t know how to use them in our business',
        solution: 'We start from money-making scenarios, not technical theory',
      },
      {
        status: 'Our team finished training but still can\'t put AI into practice',
        solution: 'Scenario-driven, with 40+ hands-on cases you can apply the same day',
      },
      {
        status: 'Generic courses don\'t fit our industry',
        solution: 'Dedicated programs for 6 industries: e-commerce, education, healthcare, finance, legal and real estate',
      },
      {
        status: 'We finished the course but can\'t turn it into revenue',
        solution: 'The entire curriculum is built around one goal: earning from what you learn',
      },
    ],
  },
  architecture: {
    title: 'Course Architecture: Modular Building Blocks',
    subtitle1: 'The curriculum isn\'t a single straight line. It\'s a box of building blocks.',
    subtitle2: 'Beginner, intermediate and advanced core tracks + 6 industry deep dives + 5 frontier extensions. Combine them freely to build your own learning path.',
    cards: [
      {
        title: 'Three-Tier Core Tracks',
        items: [
          'Beginner — Getting started with monetizing AI side hustles',
          'Intermediate — API reselling, short-video account networks, automated workflows',
          'Advanced — SaaS productization, government and enterprise project delivery',
        ],
      },
      {
        title: 'Six Industry Deep Dives',
        items: ['E-commerce', 'Education', 'Healthcare', 'Finance', 'Legal', 'Real Estate'],
      },
      {
        title: 'Five Frontier Extensions',
        items: ['AI + Creativity', 'AI + Data Analytics', 'AI + Automation', 'AI + Global Expansion', 'AI + Enterprise Deployment'],
      },
    ],
  },
  differences: {
    title: 'Six Key Differentiators',
    pointHeader: 'Differentiator',
    descHeader: 'Details',
    rows: [
      { title: 'Modular Architecture', desc: 'Build your own learning path from 16+ optional modules' },
      { title: 'Monetization First', desc: '5+ monetization paths, from side hustles to enterprise-grade delivery' },
      { title: 'Learning How to Learn', desc: 'The Feynman Technique × AI: master the method first and learn 3x faster' },
      {
        title: 'Built-in Tool Stack',
        desc: 'Comes with the OpenClaw AI gateway, the Hermes no-code assistant and the ChatU enterprise system',
      },
      {
        title: 'Scenario-Driven',
        desc: 'Writing RedNote (Xiaohongshu) posts, building AI customer service, analyzing sales data… every technique is ready to use',
      },
      {
        title: 'Industry-Specific',
        desc: 'Compliance frameworks and implementation plans for 6 industries, mapped directly to your business',
      },
    ],
  },
  paths: {
    title: 'AI Upskilling Paths for Every Role',
    routeLabel: 'Path: ',
    resultLabel: 'Outcome: ',
    items: [
      {
        role: 'Business Executives',
        route: 'Beginner modules → Full advanced track → Hands-on AI course for your industry',
        result: 'Within 6 months, lead your company\'s AI platform build-out and triple team efficiency',
      },
      {
        role: 'Business Leads',
        route: 'Full beginner track → Intermediate modules 1–3 → AI digital operations course for your sector',
        result: 'Within 3 months, run customer service and marketing for 3 stores with AI, cutting labor costs by 40%',
      },
      {
        role: 'Freelancers / Entrepreneurs',
        route: 'Full beginner track → Full intermediate track → AI skills extension course for your niche',
        result: 'Within 2 months, earn ¥20,000+ a month from AI client work, serving 12 SMB clients',
      },
    ],
  },
  formats: {
    title: 'Three Learning Formats',
    items: [
      {
        title: 'In-Person Classroom Sessions with Expert Mentors',
        items: [
          'Seasoned industry mentors teach on-site and answer your questions face to face, in depth',
          'Hands-on case simulations that break down real business challenges on the spot',
          'In-person networking that connects you with peers and industry contacts',
        ],
      },
      {
        title: 'On-Demand Online Courses',
        items: [
          'Unlock the full course library as soon as you enroll, and watch anytime, anywhere',
          'Lifetime replay access to review key concepts and hands-on steps as often as you like',
          'Bite-sized lessons that fit into your commute and spare moments',
        ],
      },
      {
        title: 'Immersive Interactive AI Bootcamp',
        items: [
          'Teaching assistants support you throughout, answering questions and correcting course in real time so you never get stuck',
          'Stage-by-stage hands-on assignments with feedback to sharpen your real-world skills',
          'A learner community where you team up to complete hands-on AI business projects',
        ],
      },
    ],
  },
  cta: {
    title: 'Grow with AI and Build Productivity Your Business Can Put to Work',
    subtitle: '89+\u00a0lessons · 40+\u00a0hands-on scenarios · 6\u00a0industry tracks',
    tagline: 'Apply what you learn · Earn from what you apply',
    button: 'Book a Consultation →',
  },
}

const ja: typeof zh = {
  hero: {
    title: 'モジュール型AI実践トレーニング：業務活用から収益化までを一気通貫で',
    subtitle: '「業務へのAI活用」と「収益化」という2つの目標のために設計した、モジュール型のトレーニング体系',
    stats: [
      { value: '89+', label: 'コアレッスン' },
      { value: '6', label: '業界特化コース' },
      { value: '40+', label: '実践シナリオ' },
      { value: '16+', label: '組み合わせ自由なモジュール' },
    ],
  },
  problems: {
    title: '私たちが解決する課題',
    statusHeader: '現状の課題',
    solutionHeader: '私たちの解決策',
    rows: [
      {
        status: 'AIツールを導入したものの、業務での使い方がわからない',
        solution: '技術理論からではなく、収益につながるシナリオから始めます',
      },
      {
        status: 'チームで研修を受けても、実務に落とし込めない',
        solution: 'シナリオ起点の40+の実践事例で、学んだその日から活用できます',
      },
      {
        status: '汎用的な講座では、自社の業界に合わない',
        solution: 'EC・教育・医療・金融・法務・不動産の6業界向けに、専用プログラムをご用意しています',
      },
      {
        status: '講座を修了しても、収益につなげられない',
        solution: 'カリキュラム全体を「学んだことで稼ぐ」というひとつの目標を軸に設計しています',
      },
    ],
  },
  architecture: {
    title: 'カリキュラム構成：ブロックのように組み合わせるモジュール設計',
    subtitle1: 'カリキュラムは一本道ではなく、ブロックが詰まった箱のようなものです。',
    subtitle2: '初級・中級・上級のコアトラック＋6つの業界特化コース＋5つの先端拡張コース。ブロックを組むように自由に組み合わせて、自分だけの学習パスを設計できます。',
    cards: [
      {
        title: '3段階のコアトラック',
        items: [
          '初級 — AI副業で収益化を始める入門編',
          '中級 — APIリセール、ショート動画のマルチアカウント運用、ワークフロー自動化',
          '上級 — SaaSプロダクト化、官公庁・企業向けプロジェクトの納品',
        ],
      },
      {
        title: '6つの業界特化コース',
        items: ['EC', '教育', '医療', '金融', '法務', '不動産'],
      },
      {
        title: '5つの先端拡張コース',
        items: ['AI + クリエイティブ', 'AI + データ分析', 'AI + 自動化', 'AI + 海外展開', 'AI + 企業向け導入'],
      },
    ],
  },
  differences: {
    title: '6つの差別化ポイント',
    pointHeader: 'ポイント',
    descHeader: '詳細',
    rows: [
      { title: 'モジュール型設計', desc: '16+の選択モジュールから、自分だけの学習パスを組み立てられます' },
      { title: '収益化ファースト', desc: '副業からエンタープライズ級の納品まで、5+の収益化ルート' },
      { title: '学び方から学ぶ', desc: 'ファインマン・テクニック × AI：まず学び方を身につけ、学習スピードを3倍に' },
      {
        title: 'ツールスタック付き',
        desc: 'OpenClaw AIゲートウェイ、ノーコードアシスタントのHermes、企業向けシステムのChatUを標準装備',
      },
      {
        title: 'シナリオ起点',
        desc: 'RedNote（小紅書）の投稿作成、AIカスタマーサービスの構築、売上データの分析……どの手法もすぐに実務で使えます',
      },
      {
        title: '業界特化',
        desc: '6業界のコンプライアンスフレームワークと導入プランを、貴社のビジネスに直結する形で提供します',
      },
    ],
  },
  paths: {
    title: '職種別AIスキルアップパス',
    routeLabel: '学習パス：',
    resultLabel: '成果：',
    items: [
      {
        role: '経営層',
        route: '初級モジュール → 上級トラック全修了 → 自社業界向けAI実践コース',
        result: '6か月以内に、自社のAIプラットフォーム構築を主導し、チームの生産性を3倍に',
      },
      {
        role: '事業責任者',
        route: '初級トラック全修了 → 中級モジュール1〜3 → 担当分野向けAIデジタル運用コース',
        result: '3か月以内に、AIで3店舗のカスタマーサービスとマーケティングを運営し、人件費を40%削減',
      },
      {
        role: 'フリーランス／起業家',
        route: '初級トラック全修了 → 中級トラック全修了 → 専門分野向けAIスキル拡張コース',
        result: '2か月以内に、AI関連の受託案件で月20,000元以上を稼ぎ、中小企業12社を支援',
      },
    ],
  },
  formats: {
    title: '3つの受講スタイル',
    items: [
      {
        title: '専門講師による対面授業',
        items: [
          '業界経験豊富な講師が現地で指導し、対面で質問にじっくりお答えします',
          'ケーススタディのシミュレーション演習で、企業が抱えるリアルな課題をその場で読み解きます',
          '対面ならではの交流の場で、同業者や業界関係者とのつながりが広がります',
        ],
      },
      {
        title: 'オンデマンド型オンライン講座',
        items: [
          'お申し込み後すぐに全コースを解放。いつでも、どこでも視聴できます',
          '動画は無期限で繰り返し視聴可能。重要な概念や実践手順を何度でも復習できます',
          '短時間で学べるレッスン構成で、通勤時間やスキマ時間を有効に活用できます',
        ],
      },
      {
        title: '没入型インタラクティブAIブートキャンプ',
        items: [
          'アシスタント講師が全期間を通じて伴走し、質問への回答や軌道修正をリアルタイムで行うため、途中でつまずきません',
          '段階ごとの実践課題とフィードバックで、現場で通用するスキルを磨きます',
          '受講者コミュニティでチームを組み、AIビジネスの実践プロジェクトに取り組みます',
        ],
      },
    ],
  },
  cta: {
    title: 'AIとともに成長し、ビジネスで活かせる生産性を築く',
    subtitle: '89+レッスン · 40+実践シナリオ · 6業界に対応',
    tagline: '学んですぐ使える · 使ってすぐ稼げる',
    button: 'ご相談を予約 →',
  },
}

const ko: typeof zh = {
  hero: {
    title: '모듈형 AI 실전 교육: 업무 적용부터 매출 창출까지 한 번에',
    subtitle: '비즈니스에 AI를 적용하고 이를 매출로 연결한다는 두 가지 목표를 위해 설계된 모듈형 교육 체계',
    stats: [
      { value: '89+', label: '핵심 강의' },
      { value: '6', label: '산업별 심화' },
      { value: '40+', label: '실전 시나리오' },
      { value: '16+', label: '자유 조합 모듈' },
    ],
  },
  problems: {
    title: '우리가 해결하는 문제',
    statusHeader: '현재 상황',
    solutionHeader: '해결 방법',
    rows: [
      {
        status: 'AI 도구를 도입했지만 업무에 어떻게 활용해야 할지 모릅니다',
        solution: '기술 이론이 아니라 수익을 내는 시나리오에서 출발합니다',
      },
      {
        status: '팀 교육을 마쳤는데도 여전히 실무에 적용하지 못합니다',
        solution: '시나리오 중심의 40+ 실전 사례로, 배운 당일부터 바로 적용할 수 있습니다',
      },
      {
        status: '일반 교육 과정은 우리 업종에 맞지 않습니다',
        solution: '이커머스, 교육, 의료, 금융, 법률, 부동산 등 6개 산업별 전용 프로그램을 제공합니다',
      },
      {
        status: '교육은 마쳤지만 수익으로 연결하지 못합니다',
        solution: '모든 커리큘럼이 ‘배운 것으로 수익을 낸다’는 하나의 목표를 중심으로 설계되었습니다',
      },
    ],
  },
  architecture: {
    title: '커리큘럼 구성: 블록처럼 조합하는 모듈 설계',
    subtitle1: '커리큘럼은 한 줄로 이어진 직선이 아닙니다. 블록이 가득 담긴 상자입니다.',
    subtitle2: '초급·중급·고급 핵심 트랙 + 6개 산업 심화 과정 + 5개 첨단 분야 확장 과정. 블록을 쌓듯 자유롭게 조합해 나만의 학습 경로를 설계할 수 있습니다.',
    cards: [
      {
        title: '3단계 핵심 트랙',
        items: [
          '초급 — AI 부업 수익화 입문',
          '중급 — API 재판매, 숏폼 영상 멀티 계정 운영, 워크플로 자동화',
          '고급 — SaaS 제품화, 정부·기업 프로젝트 납품',
        ],
      },
      {
        title: '6대 산업 심화',
        items: ['이커머스', '교육', '의료', '금융', '법률', '부동산'],
      },
      {
        title: '5대 첨단 분야 확장',
        items: ['AI + 크리에이티브', 'AI + 데이터 분석', 'AI + 자동화', 'AI + 글로벌 진출', 'AI + 엔터프라이즈 배포'],
      },
    ],
  },
  differences: {
    title: '6가지 핵심 차별점',
    pointHeader: '차별점',
    descHeader: '상세 내용',
    rows: [
      { title: '모듈형 구조', desc: '16+ 선택 모듈로 나만의 학습 경로를 구성합니다' },
      { title: '수익화 우선', desc: '부업부터 엔터프라이즈급 납품까지 5+ 수익화 경로' },
      { title: '학습법부터 배우기', desc: '파인만 학습법 × AI: 방법부터 익혀 3배 빠르게 학습합니다' },
      {
        title: '전용 툴 스택 제공',
        desc: 'OpenClaw AI 게이트웨이, 노코드 어시스턴트 Hermes, 엔터프라이즈 시스템 ChatU를 함께 제공합니다',
      },
      {
        title: '시나리오 중심',
        desc: 'RedNote(샤오홍슈) 게시물 작성, AI 고객 상담 구축, 판매 데이터 분석… 모든 기법을 바로 활용할 수 있습니다',
      },
      {
        title: '산업 특화',
        desc: '6개 산업의 컴플라이언스 프레임워크와 실행 방안을 귀사 비즈니스에 바로 맞춰 제공합니다',
      },
    ],
  },
  paths: {
    title: '직무별 AI 역량 강화 경로',
    routeLabel: '경로: ',
    resultLabel: '성과: ',
    items: [
      {
        role: '기업 경영진',
        route: '초급 모듈 → 고급 트랙 전체 이수 → 해당 산업 AI 실전 과정',
        result: '6개월 안에 회사의 AI 플랫폼 구축을 주도하고 팀 효율을 3배로 높입니다',
      },
      {
        role: '사업 책임자',
        route: '초급 트랙 전체 이수 → 중급 모듈 1~3 → 담당 분야 AI 디지털 운영 과정',
        result: '3개월 안에 AI로 3개 매장의 고객 응대와 마케팅을 운영하며 인건비를 40% 절감합니다',
      },
      {
        role: '프리랜서 / 창업자',
        route: '초급 트랙 전체 이수 → 중급 트랙 전체 이수 → 전문 분야 AI 역량 확장 과정',
        result: '2개월 안에 AI 외주 작업으로 월 20,000위안 이상을 벌고, 12곳의 중소기업 고객을 지원합니다',
      },
    ],
  },
  formats: {
    title: '3가지 수업 방식',
    items: [
      {
        title: '전문 멘토의 오프라인 대면 수업',
        items: [
          '업계 경험이 풍부한 멘토가 현장에서 직접 강의하고, 질문에 대면으로 깊이 있게 답변합니다',
          '사례 기반 시뮬레이션 실습을 통해 기업이 직면한 실제 비즈니스 과제를 그 자리에서 풀어 봅니다',
          '오프라인 네트워킹으로 동료 및 업계 관계자와 인맥을 넓힐 수 있습니다',
        ],
      },
      {
        title: '온디맨드 온라인 강의',
        items: [
          '등록 즉시 전체 강의가 열리며, 언제 어디서나 시청할 수 있습니다',
          '평생 다시보기를 제공해 핵심 개념과 실습 단계를 원하는 만큼 복습할 수 있습니다',
          '짧은 단위의 강의로 출퇴근길이나 자투리 시간에도 학습할 수 있습니다',
        ],
      },
      {
        title: '몰입형 인터랙티브 AI 부트캠프',
        items: [
          '조교가 전 과정을 함께하며 실시간으로 질문에 답하고 방향을 잡아 주어 막힘 없이 학습할 수 있습니다',
          '단계별 실전 과제와 피드백으로 현장에서 통하는 실무 역량을 다듬습니다',
          '수강생 커뮤니티에서 팀을 이뤄 AI 비즈니스 실전 프로젝트를 완성합니다',
        ],
      },
    ],
  },
  cta: {
    title: 'AI와 함께 성장하고, 비즈니스에 바로 쓰는 생산성을 구축하세요',
    subtitle: '89+ 강의 · 40+ 실전 시나리오 · 6개 산업 분야',
    tagline: '배운 즉시 활용 · 활용 즉시 수익',
    button: '상담 예약 →',
  },
}

export const trainingContent: LocalizedContent<typeof zh> = { zh, en, ja, ko }
