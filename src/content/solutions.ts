import { computed, type ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { solutions, type Solution } from '@/data/solutions'
import { contentKey } from '@/i18n/useContent'

/**
 * 解决方案页各行业方案的英文、日文、韩文文字。
 * 中文访客直接使用 src/data/solutions.ts 中的原始数据；英文、日文、韩文访客分别显示这里的 solutionsEn / solutionsJa / solutionsKo。
 * subtitle 原本就是英文，沿用原始数据。
 */

/** src/data/solutions.ts 中所有方案的 id（新增方案时也要在这里补上英文、日文、韩文） */
export type SolutionId =
  | 'telecom'
  | 'park_opc'
  | 'agri'
  | 'university'
  | 'enterprise-service'
  | 'media'
  | 'fin_ins'
  | 'ecommerce'
  | 'health'
  | 'psych'
  | 'design'
  | 'itdev'

/** 方案中随语言切换的文字字段；id、subtitle、图标、图片沿用原始数据 */
export type SolutionText = Pick<Solution, 'title' | 'tags' | 'scenes' | 'pain' | 'cpsm'>

export const solutionsEn: Record<SolutionId, SolutionText> = {
  telecom: {
    title: 'Telecom / Carriers',
    tags: ['Technology-Intensive', 'Heavy Documentation', 'Frequent Bids', 'Standardized Processes', 'Strict Compliance'],
    scenes: [
      'Fast drafting of technical bids and proposals',
      'Everyday office automation (task assignment, meeting minutes)',
      'Technical Q&A support for customers',
      'Version control and proofreading of project documents',
    ],
    pain: 'Shortens bid-writing cycles, standardizes documentation and frees technical staff from administrative work.',
    cpsm: 'ChatU quickly drafts technical bids, proposals and incident reports. Connected to internal OA and project management tools, it archives documents automatically, compares versions and assigns tasks, and gives front-line engineers a knowledge base Q&A assistant.',
  },
  park_opc: {
    title: 'OPC Industrial Parks / Incubators',
    tags: ['Digital Upgrade for Parks', 'Lower AI Compute Costs', 'Asset-Light Startups', 'One-Stop AI Enablement'],
    scenes: [
      'Smart upgrades for industrial parks',
      'AI adoption for companies in the park',
      'Lightweight startups for micro-businesses and individuals',
      'AI enablement for independent creators',
    ],
    pain: 'Helps parks move beyond rent-only income; tackles high compute costs, hard-to-get AI tools and the isolation of working alone; brings policy resources together into a distinctive AI ecosystem; and lowers the barrier for companies and individuals to use AI and start businesses.',
    cpsm: 'OPC Hub deploys a shared AI foundation and compute scheduling for industrial parks, incubators and individual founders, with on-premises deployment, a one-stop AI toolchain and a community collaboration network. It greatly lowers the cost of compute and the barrier to AI entrepreneurship for park companies, independent creators and small startups.',
  },
  agri: {
    title: 'Agriculture / Seed Industry',
    tags: ['Data-Driven Breeding', 'Long R&D Cycles', 'Genotype–Phenotype Linkage', 'Research-Intensive'],
    scenes: [
      'Querying and analyzing phenotype data for rice, corn and other varieties',
      'Intelligent Q&A on genotype–phenotype associations',
      'Recommendations for selecting breeding materials',
      'Automatic reports on agricultural research results',
    ],
    pain: 'Speeds up querying and analysis of breeding data and shortens the development cycle for new varieties.',
    cpsm: 'ChatU powers an industry AI agent that answers natural-language questions about variety traits, genotypes and environmental data and produces visual comparison reports. It helps draft variety registration materials and trial plans, turning data assets into a knowledge base you can talk to.',
  },
  university: {
    title: 'Universities / Training Institutions',
    tags: ['Hands-On AI Training for Universities', 'Practical Skills for Employment', 'Personalized Teaching', 'Higher Efficiency'],
    scenes: [
      'Hands-on AI courses',
      'Intelligent study support for students',
      'Faster lesson preparation for teachers',
    ],
    pain: 'University AI teaching is heavy on theory and light on practice, and faculty and compute are costly. Teachers spend a lot of time on repetitive lesson preparation and Q&A, and students lack personalized round-the-clock tutoring.',
    cpsm: 'ChatU powers an intelligent teaching assistant that generates lesson plans and exercises and grades and answers questions, easing the load on teachers. Tiered hands-on AI courses and real company projects, with skills certification for students, make graduates more competitive in the job market.',
  },
  'enterprise-service': {
    title: 'Government / State-Owned Enterprises',
    tags: ['More Efficient Financial Compliance', 'Automated Internal Operations', 'SOE Security Compliance', 'Locally Controlled Data'],
    scenes: [
      'Intelligent review of invoices and expense claims',
      'Automated office operations',
      'Intelligent analysis and visualization of business data',
      'Compliant handling of official SOE documents',
    ],
    pain: 'Solves tedious financial data entry, inefficient office operations and poor data collaboration, while meeting SOE requirements for data security, domestic IT compatibility and compliance auditing, greatly cutting labor costs and speeding up office work and decision-making.',
    cpsm: 'For general business scenarios, ChatU provides OCR invoice recognition, financial compliance review, automatic office documents and multi-source data analysis, automating operations and finance with a light footprint. For classified and compliance-sensitive SOE scenarios, AgentStation is deployed on-premises so data never leaves the physical boundary, runs on domestic IT environments, and handles official documents, policy Q&A and report consolidation with a full audit trail, meeting both the efficiency needs of general businesses and the security requirements of state-owned assets.',
  },
  media: {
    title: 'Self-Media / MCNs',
    tags: ['High-Volume Content Creation', 'Time-Sensitive', 'Multi-Channel Distribution', 'Heavy Audience Interaction'],
    scenes: [
      'Real-time tech news gathering and summaries',
      'One-click content adaptation for WeChat Official Accounts, Weibo, Douyin and more',
      'Smart replies to follower comments and topic analysis',
      'Automatic video scripts and livestream outlines',
    ],
    pain: 'Speeds up content production and distribution, enables 24/7 follower engagement and lowers operating labor costs.',
    cpsm: 'ChatU pulls in tech news in real time and writes in-depth long-form analysis, then breaks it into short copy and headlines for each platform. AI agents automatically answer common questions in the comments and analyze follower topic trends to help plan content.',
  },
  fin_ins: {
    title: 'Finance / Insurance',
    tags: ['Strict Data Compliance', 'High Volume of Documents and Reports', 'Strong Risk Control Needs', 'Standardized Reporting'],
    scenes: [
      'Intelligent asset valuation and financial statement analysis',
      'Automatic regulatory filing documents',
      'Automated insurance loss assessment and claims',
      'Policy services and fraud risk detection',
    ],
    pain: 'Reduces manual calculation and data entry errors, shortens valuation report and claims processing cycles, and strengthens end-to-end risk control and compliance across finance and insurance.',
    cpsm: 'ChatU parses financial statements and industry data to run asset valuation models, generates compliant valuation reports in one click and checks them against regulations. It also enters insurance claim reports automatically, assists with loss assessment, flags fraud risk by comparing data, and answers policy questions and pushes renewal plans, bringing digital efficiency to every part of financial valuation and insurance.',
  },
  ecommerce: {
    title: 'E-commerce / Retail',
    tags: ['High Inquiry Volume', 'Fast-Paced Promotions', 'Complex After-Sales Issues', 'Multi-Platform Management'],
    scenes: [
      'Pre-sales inquiries (product specs, promotions)',
      'Automatic answers to common after-sales questions (returns, shipping)',
      'Customer sentiment detection and escalation to human agents',
      'Product review summaries and competitor analysis',
    ],
    pain: 'Lowers customer service costs, speeds up responses at peak times and keeps service consistent.',
    cpsm: 'A ChatU-based omnichannel AI customer service connects Taobao, JD.com, WeChat Mini Programs, Douyin and other platforms in one place, handling pre-sales guidance, self-service returns and shipping inquiries. It detects customer sentiment and hands off to a human, creates tickets for unresolved issues and produces reports on frequent complaints.',
  },
  health: {
    title: 'Healthcare / Wellness',
    tags: ['High Professional Barriers', 'Rigorous Documentation', 'Diagnostic Support', 'Sensitive Data Privacy'],
    scenes: [
      'Automatic drafting of medical records and diagnostic reports',
      'Medical literature search and summaries',
      'Preliminary interpretation of imaging reports',
      'Polishing and format checks for doctors’ research papers',
    ],
    pain: 'Greatly reduces the time doctors spend on paperwork and makes medical records more standardized and knowledge easier to access.',
    cpsm: 'ChatU generates structured records such as admission notes, discharge summaries and surgical records, with voice input and transcription. Based on the hospital’s knowledge base, it provides medication guidance, clinical guideline lookups and literature summaries, and helps write research papers and describe statistical data.',
  },
  psych: {
    title: 'Mental Health / Emotional Support',
    tags: ['Emotional Interaction', 'Privacy Protection', 'Shortage of Trained Staff', 'Balancing Standardization and Personalization'],
    scenes: [
      'Assistant services for university counseling centers',
      'Initial screening and emotional companionship for clients of counseling organizations',
      'Workflow support for counselors (notes, assessments, reminders)',
      'Mental health education and self-help exercises',
    ],
    pain: 'Eases the shortage of counselors, reduces paperwork and helps non-professional counselors provide better service.',
    cpsm: 'ChatU powers a cognitive-enhanced mental health AI agent offering 24/7 emotional companionship and mental health Q&A. It scores psychological scales, grades and flags risk, and summarizes sessions automatically, and gives new counselors standardized intervention suggestions and case references.',
  },
  design: {
    title: 'Advertising / Creative Design',
    tags: ['Creativity-Driven', 'Frequent Revisions', 'Diverse Styles', 'Tight Deadlines'],
    scenes: [
      'Marketing posters and social media visuals',
      'Image style transfer (e.g. product photos to illustrations)',
      'Ad copy and slogan ideas in bulk',
      'Fast iteration on visual drafts for client proposals',
    ],
    pain: 'Speeds up creative iteration and revisions, improves design efficiency and reduces repetitive work.',
    cpsm: 'With ChatU’s text-to-image, image-to-image and style transfer, teams quickly produce options in many styles, from illustrations and posters to 3D concepts. It outputs assets in different sizes and layouts in bulk, with smart image expansion, background removal and HD restoration.',
  },
  itdev: {
    title: 'Software Development / IT',
    tags: ['Large Codebases', 'Fast Release Cycles', 'High Quality Standards', 'Hard-to-Sync Documentation'],
    scenes: [
      'Code generation and completion (many languages)',
      'Code review, style checks and vulnerability alerts',
      'Automatic unit test generation',
      'Automatic technical documentation and code comments',
    ],
    pain: 'Speeds up coding and code review, keeps documentation current and lowers the risk of missed defects.',
    cpsm: 'ChatU generates functions, classes and unit tests from comments or requirement descriptions, checks code style and flags potential bugs. It produces API documentation, database comments and changelogs, and suggests refactorings and fills in comments for legacy systems.',
  },
}

export const solutionsJa: Record<SolutionId, SolutionText> = {
  telecom: {
    title: '通信 / キャリア',
    tags: ['技術集約型', '膨大な文書量', '多数の入札案件', 'プロセスの標準化', '厳格なコンプライアンス'],
    scenes: [
      '技術入札書・提案書の迅速な作成',
      '日常業務の自動化（タスク割り当て、議事録作成）',
      '顧客向け技術Q&Aサポート',
      'プロジェクト文書のバージョン管理と校正',
    ],
    pain: '入札書類の作成期間を短縮し、文書を標準化するとともに、技術スタッフを事務作業から解放します。',
    cpsm: 'ChatUが技術入札書、提案書、障害報告書の草案をすばやく作成します。社内のOAシステムやプロジェクト管理ツールと連携して、文書の自動アーカイブ、バージョン比較、タスクの割り当てを行い、現場のエンジニアにはナレッジベースを活用したQ&Aアシスタントを提供します。',
  },
  park_opc: {
    title: 'OPC産業パーク / インキュベーター',
    tags: ['産業パークのDX', 'AI計算コストの削減', 'アセットライトな起業', 'ワンストップのAI支援'],
    scenes: [
      '産業パークのスマート化',
      '入居企業のAI導入',
      '小規模事業者・個人の身軽な起業',
      '個人クリエイターのAI活用支援',
    ],
    pain: '賃料収入に頼るだけのパーク運営からの脱却を支援します。高い計算コスト、AIツールの入手しにくさ、一人で働く孤立感といった課題を解消し、政策リソースを集約して独自性のあるAIエコシステムを築くことで、企業や個人がAIを活用し、起業するためのハードルを下げます。',
    cpsm: 'OPC Hubは、産業パーク、インキュベーター、個人起業家向けに、共有のAI基盤と計算資源のスケジューリング機能を提供します。オンプレミス展開、ワンストップのAIツールチェーン、コミュニティによる協業ネットワークを備え、入居企業や個人クリエイター、小規模スタートアップの計算コストとAI起業のハードルを大きく引き下げます。',
  },
  agri: {
    title: '農業 / 種苗',
    tags: ['データ駆動型の育種', '長い研究開発期間', '遺伝子型と表現型の関連', '研究集約型'],
    scenes: [
      'イネ・トウモロコシなど品種の表現型データの検索と分析',
      '遺伝子型と表現型の関連性に関するAI Q&A',
      '育種素材の選抜に関する提案',
      '農業研究成果のレポート自動作成',
    ],
    pain: '育種データの検索・分析をスピードアップし、新品種の開発期間を短縮します。',
    cpsm: 'ChatUで業界特化型のAIエージェントを構築し、品種の形質、遺伝子型、環境データに関する自然言語の質問に回答して、視覚的な比較レポートを作成します。品種登録の申請資料や試験計画の作成も支援し、データ資産を対話できるナレッジベースへと変えます。',
  },
  university: {
    title: '大学 / 教育機関',
    tags: ['大学向けAI実習', '就職に直結する実践力', '個別最適な指導', '効率アップ'],
    scenes: [
      '実践型AIコース',
      '学生向けのAI学習サポート',
      '教員の授業準備の効率化',
    ],
    pain: '大学のAI教育は理論に偏りがちで実践が不足しており、教員や計算資源にも多くのコストがかかります。教員は繰り返しの授業準備や質問対応に多くの時間を割かれ、学生は時間を問わず受けられる個別指導を得られていません。',
    cpsm: 'ChatUで構築したAIティーチングアシスタントが、教案や演習問題の作成、採点、質問への回答を担い、教員の負担を軽減します。段階別の実践AIコースと実際の企業プロジェクトに取り組む実習に加え、学生のスキル認定も行うことで、卒業生の就職競争力を高めます。',
  },
  'enterprise-service': {
    title: '政府 / 国有企業',
    tags: ['財務コンプライアンスの効率化', '社内業務の自動化', '国有企業のセキュリティ要件', 'データの自社内管理'],
    scenes: [
      '請求書・経費精算のAI審査',
      'オフィス業務の自動化',
      '業務データのAI分析と可視化',
      '国有企業の公文書のコンプライアンス対応',
    ],
    pain: '煩雑な財務データの入力、非効率なオフィス業務、部門間のデータ連携の難しさを解消するとともに、国有企業に求められるデータセキュリティ、中国の国産IT環境への対応、コンプライアンス監査の要件を満たし、人件費を大幅に削減して業務と意思決定のスピードを高めます。',
    cpsm: '一般的な業務シーンでは、ChatUがOCRによる請求書の読み取り、財務コンプライアンス審査、オフィス文書の自動作成、複数ソースのデータ分析を提供し、業務と財務の自動化を軽量に実現します。機密性やコンプライアンスが重視される国有企業のシーンでは、AgentStationをオンプレミスで展開し、データを物理的な境界の外に出すことなく中国の国産IT環境上で稼働させ、公文書の処理、政策に関するQ&A、報告書の取りまとめを完全な監査証跡とともに行います。一般企業の効率化ニーズと国有資産のセキュリティ要件の両方に応えます。',
  },
  media: {
    title: 'インフルエンサー / MCN',
    tags: ['コンテンツの量産', 'スピード重視', 'マルチチャネル配信', '活発なファン交流'],
    scenes: [
      'テックニュースのリアルタイム収集と要約',
      'WeChat公式アカウント、Weibo、Douyinなど向けにコンテンツをワンクリックで最適化',
      'フォロワーのコメントへのスマート返信と話題分析',
      '動画台本・ライブ配信構成案の自動作成',
    ],
    pain: 'コンテンツの制作と配信を効率化し、24時間体制のファン対応を実現して、運営にかかる人件費を削減します。',
    cpsm: 'ChatUがテックニュースをリアルタイムで収集して詳しい解説記事を作成し、各プラットフォームに合わせた短いコピーや見出しに分割します。AIエージェントがコメント欄のよくある質問に自動で回答し、フォロワーの関心トピックの傾向を分析して企画づくりを支援します。',
  },
  fin_ins: {
    title: '金融 / 保険',
    tags: ['厳格なデータ規制', '膨大な書類・帳票', '高度なリスク管理', '定型化された報告書'],
    scenes: [
      'AIによる資産評価と財務諸表分析',
      '規制当局向け報告書類の自動作成',
      '保険の損害査定・保険金請求の自動化',
      '保険契約サービスと不正リスクの検知',
    ],
    pain: '手作業による計算やデータ入力のミスを減らし、評価報告書の作成や保険金請求処理の期間を短縮するとともに、金融・保険業務全体のリスク管理とコンプライアンスを強化します。',
    cpsm: 'ChatUが財務諸表や業界データを解析して資産評価モデルを実行し、規制に準拠した評価報告書をワンクリックで作成して法令との整合性をチェックします。さらに、保険事故の報告内容を自動で入力し、損害査定を支援し、データの照合によって不正リスクを検知するほか、保険契約に関する質問への回答や更新プランの提案も行い、金融評価と保険業務のあらゆる場面でデジタルによる効率化を実現します。',
  },
  ecommerce: {
    title: 'EC / 小売',
    tags: ['大量の問い合わせ', 'スピード感のある販促', '複雑なアフターサービス', 'マルチプラットフォーム管理'],
    scenes: [
      '購入前の問い合わせ対応（製品仕様、キャンペーン）',
      'アフターサービスのよくある質問への自動回答（返品・交換、配送）',
      '顧客感情の検知と有人対応への引き継ぎ',
      '商品レビューの要約と競合分析',
    ],
    pain: 'カスタマーサービスのコストを削減し、繁忙期の応答スピードを高め、一貫したサービス品質を保ちます。',
    cpsm: 'ChatUを基盤としたオムニチャネルAIカスタマーサービスが、Taobao、JD.com、WeChatミニプログラム、Douyinなどのプラットフォームを一元的に接続し、購入前の案内、セルフサービスの返品・交換、配送状況の問い合わせに対応します。顧客の感情を検知して有人対応に切り替え、未解決の問題はチケット化し、頻出するクレームの分析レポートを作成します。',
  },
  health: {
    title: '医療 / ヘルスケア',
    tags: ['高い専門性', '厳密な文書作成', '診断支援', '厳格なプライバシー保護'],
    scenes: [
      '診療記録・診断レポートの自動作成',
      '医学文献の検索と要約',
      '画像診断レポートの初期解釈支援',
      '医師の研究論文の推敲と書式チェック',
    ],
    pain: '医師が書類作成に費やす時間を大幅に削減し、診療記録の標準化と知識へのアクセス向上を実現します。',
    cpsm: 'ChatUが入院時記録、退院時サマリー、手術記録などの構造化された診療記録を作成し、音声入力と文字起こしにも対応します。院内のナレッジベースをもとに、薬剤情報の提供、診療ガイドラインの検索、文献の要約を行い、研究論文の執筆や統計データの記述も支援します。',
  },
  psych: {
    title: 'メンタルヘルス / 心のケア',
    tags: ['感情に寄り添う対話', 'プライバシー保護', '専門人材の不足', '標準化と個別対応の両立'],
    scenes: [
      '大学の学生相談室向けアシスタント',
      'カウンセリング機関での来談者の初期スクリーニングと感情面のサポート',
      'カウンセラーの業務支援（記録、アセスメント、リマインダー）',
      'メンタルヘルスの啓発とセルフケア・トレーニング',
    ],
    pain: 'カウンセラー不足を緩和し、書類作業を減らすとともに、専門資格を持たない相談員でも質の高いサービスを提供できるよう支援します。',
    cpsm: 'ChatUで構築した認知強化型のメンタルヘルスAIエージェントが、24時間体制で気持ちに寄り添い、メンタルヘルスに関する質問に答えます。心理尺度の採点、リスクの段階評価とアラート、セッション内容の自動要約を行い、経験の浅いカウンセラーには標準化された介入方法の提案や参考事例を提供します。',
  },
  design: {
    title: '広告 / クリエイティブデザイン',
    tags: ['クリエイティブ主導', '頻繁な修正', '多様なスタイル', 'タイトな納期'],
    scenes: [
      'マーケティングポスターやSNS用ビジュアルの作成',
      '画像のスタイル変換（例：商品写真をイラスト風に）',
      '広告コピーやスローガン案の一括作成',
      'クライアント提案用ビジュアルラフのスピーディーなブラッシュアップ',
    ],
    pain: 'アイデアの試行錯誤と修正のスピードを上げ、デザイン業務を効率化して、繰り返し作業を減らします。',
    cpsm: 'ChatUのテキストからの画像生成、画像からの画像生成、スタイル変換機能により、イラストやポスターから3Dコンセプトまで、多彩なスタイルの案をすばやく作成できます。さまざまなサイズやレイアウトの素材を一括で出力でき、AIによる画像拡張、背景除去、高画質化にも対応します。',
  },
  itdev: {
    title: 'ソフトウェア開発 / IT',
    tags: ['大規模なコードベース', '速いリリースサイクル', '高い品質基準', 'ドキュメント同期の難しさ'],
    scenes: [
      'コードの生成と補完（多言語対応）',
      'コードレビュー、規約チェック、脆弱性アラート',
      'ユニットテストの自動生成',
      '技術文書とコードコメントの自動作成',
    ],
    pain: 'コーディングとコードレビューをスピードアップし、ドキュメントを常に最新に保ち、欠陥の見落としリスクを低減します。',
    cpsm: 'ChatUがコメントや要件の記述から関数、クラス、ユニットテストを生成し、コーディング規約のチェックや潜在的なバグの指摘を行います。APIドキュメント、データベースのコメント、変更履歴を作成するほか、リファクタリングの提案やレガシーシステムへのコメント追加も行います。',
  },
}

export const solutionsKo: Record<SolutionId, SolutionText> = {
  telecom: {
    title: '통신 / 통신사',
    tags: ['기술 집약형', '방대한 문서', '잦은 입찰', '표준화된 프로세스', '엄격한 컴플라이언스'],
    scenes: [
      '기술 입찰서 및 제안서 신속 작성',
      '일상 업무 자동화(업무 배정, 회의록)',
      '고객 기술 Q&A 지원',
      '프로젝트 문서 버전 관리 및 교정',
    ],
    pain: '입찰서 작성 기간을 단축하고 문서를 표준화하며, 기술 인력을 행정 업무에서 해방합니다.',
    cpsm: 'ChatU가 기술 입찰서, 제안서, 장애 보고서 초안을 빠르게 작성합니다. 사내 OA 시스템 및 프로젝트 관리 도구와 연동해 문서를 자동으로 보관하고 버전을 비교하며 업무를 배정하고, 현장 엔지니어에게는 지식 베이스 기반 Q&A 어시스턴트를 제공합니다.',
  },
  park_opc: {
    title: 'OPC 산업단지 / 인큐베이터',
    tags: ['산업단지 디지털 전환', 'AI 컴퓨팅 비용 절감', '에셋 라이트 창업', '원스톱 AI 지원'],
    scenes: [
      '산업단지 스마트화',
      '입주 기업의 AI 도입',
      '소상공인·개인의 가벼운 창업',
      '독립 크리에이터 AI 역량 강화',
    ],
    pain: '산업단지가 임대 수익에만 의존하는 구조에서 벗어나도록 돕고, 높은 컴퓨팅 비용, AI 도구 확보의 어려움, 혼자 일하는 고립감 같은 문제를 해결합니다. 정책 자원을 한데 모아 차별화된 AI 생태계를 구축하고, 기업과 개인이 AI를 활용하고 창업하는 문턱을 낮춥니다.',
    cpsm: 'OPC Hub는 산업단지, 인큐베이터, 개인 창업자를 위해 공유 AI 기반과 컴퓨팅 자원 스케줄링을 제공하며, 온프레미스 배포, 원스톱 AI 툴체인, 커뮤니티 협업 네트워크를 갖추고 있습니다. 입주 기업과 독립 크리에이터, 소규모 스타트업의 컴퓨팅 비용과 AI 창업 문턱을 크게 낮춥니다.',
  },
  agri: {
    title: '농업 / 종자 산업',
    tags: ['데이터 기반 육종', '긴 연구개발 주기', '유전형-표현형 연관', '연구 집약형'],
    scenes: [
      '벼, 옥수수 등 품종의 표현형 데이터 조회 및 분석',
      '유전형과 표현형 연관성에 대한 AI Q&A',
      '육종 소재 선발 추천',
      '농업 연구 성과 보고서 자동 생성',
    ],
    pain: '육종 데이터 조회와 분석 속도를 높이고 신품종 개발 기간을 단축합니다.',
    cpsm: 'ChatU 기반 산업 특화 AI 에이전트가 품종 형질, 유전형, 환경 데이터에 관한 자연어 질문에 답하고 시각화된 비교 보고서를 생성합니다. 품종 등록 자료와 시험 계획 작성을 지원하여 데이터 자산을 대화할 수 있는 지식 베이스로 바꿔 줍니다.',
  },
  university: {
    title: '대학 / 교육기관',
    tags: ['대학 AI 실습 교육', '취업 연계 실무 역량', '맞춤형 교육', '효율 향상'],
    scenes: [
      '실습형 AI 과정',
      '학생 맞춤 AI 학습 지원',
      '교수자 수업 준비 효율화',
    ],
    pain: '대학의 AI 교육은 이론에 치우치고 실습이 부족하며, 교수 인력과 컴퓨팅 자원에 드는 비용도 큽니다. 교수자는 반복적인 수업 준비와 질의응답에 많은 시간을 쓰고, 학생들은 언제든 받을 수 있는 맞춤형 튜터링이 부족합니다.',
    cpsm: 'ChatU 기반 AI 조교가 강의안과 연습 문제를 생성하고 채점과 질의응답을 맡아 교수자의 부담을 덜어 줍니다. 수준별 AI 실습 과정과 실제 기업 프로젝트 실습, 학생 역량 인증을 함께 제공해 졸업생의 취업 경쟁력을 높입니다.',
  },
  'enterprise-service': {
    title: '정부 / 공기업',
    tags: ['재무 컴플라이언스 효율화', '내부 운영 자동화', '공기업 보안 컴플라이언스', '데이터 로컬 통제'],
    scenes: [
      '영수증·경비 정산 AI 심사',
      '사무 운영 자동화',
      '경영 데이터 AI 분석 및 시각화',
      '공기업 공문서의 컴플라이언스 처리',
    ],
    pain: '번거로운 재무 데이터 입력, 비효율적인 사무 운영, 원활하지 않은 데이터 협업 문제를 해결하는 동시에 공기업이 요구하는 데이터 보안, 중국 국산 IT 환경 호환, 컴플라이언스 감사 요건을 충족하여 인건비를 크게 줄이고 업무 처리와 의사결정 속도를 높입니다.',
    cpsm: '일반 업무 환경에서는 ChatU가 OCR 영수증 인식, 재무 컴플라이언스 검토, 사무 문서 자동 생성, 다중 소스 데이터 분석을 제공하여 운영과 재무 자동화를 가볍게 구현합니다. 기밀성과 컴플라이언스가 중요한 공기업 환경에서는 AgentStation을 온프레미스로 배포해 데이터가 물리적 경계를 벗어나지 않도록 하고, 중국 국산 IT 환경에서 구동하며, 공문서 처리, 정책 Q&A, 보고서 취합을 전 과정 감사 기록과 함께 수행합니다. 일반 기업의 효율화 요구와 국유 자산의 보안 요건을 모두 충족합니다.',
  },
  media: {
    title: '1인 미디어 / MCN',
    tags: ['대량 콘텐츠 제작', '높은 시의성', '멀티채널 배포', '활발한 팬 소통'],
    scenes: [
      '테크 뉴스 실시간 수집 및 요약',
      'WeChat 공식 계정, Weibo, Douyin 등 플랫폼별 콘텐츠 원클릭 변환',
      '팔로워 댓글 스마트 답변 및 화제 분석',
      '영상 대본 및 라이브 방송 구성안 자동 생성',
    ],
    pain: '콘텐츠 제작과 배포 속도를 높이고, 연중무휴 24시간 팬 소통을 실현하며, 운영 인건비를 낮춥니다.',
    cpsm: 'ChatU가 테크 뉴스를 실시간으로 수집해 심층 분석 장문 콘텐츠를 작성하고, 이를 플랫폼별 짧은 카피와 헤드라인으로 나눕니다. AI 에이전트가 댓글의 자주 묻는 질문에 자동으로 답하고 팔로워 관심 주제의 흐름을 분석해 콘텐츠 기획을 돕습니다.',
  },
  fin_ins: {
    title: '금융 / 보험',
    tags: ['엄격한 데이터 규제', '방대한 서류와 보고서', '높은 리스크 관리 수요', '표준화된 보고'],
    scenes: [
      'AI 자산 평가 및 재무제표 분석',
      '규제 보고 문서 자동 생성',
      '보험 손해사정 및 보험금 청구 자동화',
      '보험 계약 서비스 및 사기 위험 탐지',
    ],
    pain: '수작업 계산과 데이터 입력 오류를 줄이고, 평가 보고서 작성과 보험금 청구 처리 기간을 단축하며, 금융·보험 전 과정의 리스크 관리와 컴플라이언스를 강화합니다.',
    cpsm: 'ChatU가 재무제표와 산업 데이터를 분석해 자산 평가 모델을 실행하고, 규정에 맞는 평가 보고서를 원클릭으로 생성한 뒤 규제 기준에 부합하는지 검증합니다. 또한 보험 사고 접수 내용을 자동으로 입력하고 손해사정을 지원하며, 데이터 대조로 사기 위험을 탐지하고, 보험 계약 문의에 답하고 갱신 플랜을 제안하여 금융 평가와 보험 업무 전반에 디지털 효율을 더합니다.',
  },
  ecommerce: {
    title: '이커머스 / 리테일',
    tags: ['많은 고객 문의', '빠른 프로모션 주기', '복잡한 사후 서비스', '멀티 플랫폼 관리'],
    scenes: [
      '구매 전 문의(제품 사양, 프로모션)',
      '구매 후 자주 묻는 질문 자동 응답(반품·교환, 배송)',
      '고객 감정 인식 및 상담원 연결',
      '상품 리뷰 요약 및 경쟁사 분석',
    ],
    pain: '고객 서비스 비용을 낮추고, 피크 시간대 응답 속도를 높이며, 일관된 서비스 품질을 유지합니다.',
    cpsm: 'ChatU 기반 옴니채널 AI 고객 서비스가 Taobao, JD.com, WeChat 미니 프로그램, Douyin 등 여러 플랫폼을 한곳에 연결해 구매 전 상담, 셀프 반품·교환, 배송 조회를 처리합니다. 고객 감정을 인식해 상담원에게 연결하고, 해결되지 않은 문제는 티켓으로 생성하며, 자주 발생하는 불만 사항에 대한 분석 보고서를 만듭니다.',
  },
  health: {
    title: '의료 / 헬스케어',
    tags: ['높은 전문성 장벽', '엄밀한 문서 작업', '진단 보조', '민감한 개인정보'],
    scenes: [
      '진료 기록 및 진단 보고서 자동 작성',
      '의학 문헌 검색 및 요약',
      '영상 판독 보고서 1차 해석 지원',
      '의사 연구 논문 교정 및 형식 검토',
    ],
    pain: '의사가 서류 작업에 쓰는 시간을 크게 줄이고, 의무 기록의 표준화와 지식 접근성을 높입니다.',
    cpsm: 'ChatU가 입원 기록, 퇴원 요약, 수술 기록 등 구조화된 의무 기록을 생성하며 음성 입력과 텍스트 변환을 지원합니다. 병원 내부 지식 베이스를 바탕으로 약물 정보, 진료 지침 조회, 문헌 요약을 제공하고 연구 논문 작성과 통계 데이터 기술을 돕습니다.',
  },
  psych: {
    title: '정신 건강 / 정서 지원',
    tags: ['정서적 상호작용', '개인정보 보호', '전문 인력 부족', '표준화와 개인화의 균형'],
    scenes: [
      '대학 학생상담센터 보조 서비스',
      '상담 기관 내담자의 초기 선별 및 정서적 지지',
      '상담사 업무 지원(기록, 평가, 알림)',
      '정신 건강 교육 및 셀프케어 훈련',
    ],
    pain: '상담사 부족을 완화하고 서류 작업을 줄이며, 비전문 상담 인력도 더 나은 서비스를 제공할 수 있도록 돕습니다.',
    cpsm: 'ChatU 기반 인지 강화형 정신 건강 AI 에이전트가 연중무휴 24시간 정서적 지지와 정신 건강 Q&A를 제공합니다. 심리 척도 채점, 위험 등급 분류와 경보, 상담 내용 자동 요약을 수행하며, 신입 상담사에게는 표준화된 개입 방안과 참고 사례를 제공합니다.',
  },
  design: {
    title: '광고 / 크리에이티브 디자인',
    tags: ['크리에이티브 중심', '잦은 수정', '다양한 스타일', '촉박한 일정'],
    scenes: [
      '마케팅 포스터 및 SNS 이미지 제작',
      '이미지 스타일 변환(예: 제품 사진을 일러스트로)',
      '광고 카피 및 슬로건 아이디어 대량 생성',
      '클라이언트 제안용 비주얼 시안의 빠른 반복 수정',
    ],
    pain: '아이디어 반복과 수정 속도를 높여 디자인 효율을 향상시키고 반복 작업을 줄입니다.',
    cpsm: 'ChatU의 텍스트-이미지 생성, 이미지-이미지 생성, 스타일 변환 기능으로 일러스트, 포스터부터 3D 콘셉트까지 다양한 스타일의 시안을 빠르게 만들 수 있습니다. 여러 크기와 레이아웃의 소재를 일괄 출력하고, AI 이미지 확장, 배경 제거, 고화질 복원도 지원합니다.',
  },
  itdev: {
    title: '소프트웨어 개발 / IT',
    tags: ['대규모 코드베이스', '빠른 릴리스 주기', '높은 품질 기준', '어려운 문서 동기화'],
    scenes: [
      '코드 생성 및 자동 완성(다양한 언어 지원)',
      '코드 리뷰, 코딩 규칙 검사 및 취약점 경고',
      '단위 테스트 자동 생성',
      '기술 문서 및 코드 주석 자동 작성',
    ],
    pain: '코딩과 코드 리뷰 속도를 높이고, 문서를 항상 최신 상태로 유지하며, 결함 누락 위험을 줄입니다.',
    cpsm: 'ChatU가 주석이나 요구사항 설명을 바탕으로 함수, 클래스, 단위 테스트를 생성하고 코드 스타일을 검사하며 잠재적 버그를 알려 줍니다. API 문서, 데이터베이스 주석, 변경 로그를 생성하고, 리팩터링을 제안하며 레거시 시스템의 주석을 보완합니다.',
  },
}

/** 各语言版方案列表：保留原始数据中的 id、subtitle、图标、图片，只替换文字字段 */
const withText = (texts: Record<SolutionId, SolutionText>): Solution[] =>
  solutions.map((s) => ({ ...s, ...texts[s.id as SolutionId] }))
const localizedSolutions: Record<'en' | 'ja' | 'ko', Solution[]> = {
  en: withText(solutionsEn),
  ja: withText(solutionsJa),
  ko: withText(solutionsKo),
}

/** 按语言取方案列表：中文返回原始 solutions（不做任何改动），英文、日文、韩文返回对应译文 */
export function localizeSolutions(locale: string): Solution[] {
  const key = contentKey(locale)
  return key === 'zh' ? solutions : localizedSolutions[key]
}

/** 当前语言的方案列表（computed） */
export function useLocalizedSolutions(): ComputedRef<Solution[]> {
  const { locale } = useI18n()
  return computed(() => localizeSolutions(locale.value))
}
