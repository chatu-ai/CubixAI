import type { SupportedLocale } from '@/i18n'

/**
 * 网站隐私政策内容（中/英/日/韩）。
 * 按网站实际情况编写：没有注册和自建表单；统计用百度统计；托管在腾讯云（字体随网站自托管，不经过第三方）。
 * 网站收集的数据或使用的服务变化时，需要同步更新这里和 lastUpdated。
 * 第 3 条固定为 Cookie 说明，正文里「第 3 条 / Section 3」的引用依赖这个顺序。
 */

export const PRIVACY_EMAIL = 'support@cubixai.com'
/** 中文版写北京地址，海外版（英/日/韩）写新加坡地址 */
const BEIJING_ADDRESS = '北京市海淀区中关村 AI 北纬社区D2-1'
const SINGAPORE_ADDRESS = "139 PASIR RIS GROVE, #05-43, D'NEST, SINGAPORE"

export type PolicyBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: { lead?: string; text: string }[] }
  | { type: 'cookies' }
  | { type: 'settings' }

export interface PolicySection {
  id: string
  title: string
  blocks: PolicyBlock[]
}

export interface CookieEntry {
  name: string
  storage: string
  category: string
  purpose: string
  duration: string
}

export interface PrivacyPolicyContent {
  title: string
  lastUpdated: string
  intro: string
  sections: PolicySection[]
  cookies: CookieEntry[]
  cookieLabels: { storage: string; category: string; duration: string }
  settings: {
    title: string
    statusLabel: string
    on: string
    off: string
    allow: string
    reject: string
    saved: string
  }
}

const en: PrivacyPolicyContent = {
  title: 'Privacy Policy',
  lastUpdated: 'Last updated: November 18, 2026',
  intro:
    'This Privacy Policy explains how CubixAI Technology Co., Ltd. ("CubixAI", "we" or "us") handles information when you visit our website www.cubixai.com (the "Website"). Services you reach through links on the Website, such as the ChatU platform or online forms hosted by third parties, are governed by their own privacy policies.',
  sections: [
    {
      id: 'who-we-are',
      title: 'Who we are',
      blocks: [
        {
          type: 'p',
          text: `The Website is operated by CubixAI Technology Co., Ltd., ${SINGAPORE_ADDRESS}. If you have any questions about this policy or your personal information, contact us at ${PRIVACY_EMAIL}.`,
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: 'Information we collect',
      blocks: [
        {
          type: 'list',
          items: [
            {
              lead: 'Information you choose to send us.',
              text: 'The Website has no account or sign-up function and no forms of its own. If you contact us by email, phone, WeChat or a third-party form linked from the Website, we receive the information you provide, such as your name, company, contact details and message.',
            },
            {
              lead: 'Usage data from analytics.',
              text: 'If analytics cookies are enabled (see Section 3), Baidu Analytics collects information about your visit, such as the pages you view, the referring page, the time of your visit, your browser and device type, screen resolution, and an approximate location derived from your IP address.',
            },
            {
              lead: 'Technical data.',
              text: 'When your browser loads the Website, our hosting and content delivery provider receives your IP address and standard request information, such as your browser type and the requested address, as needed to deliver the content.',
            },
          ],
        },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and similar technologies',
      blocks: [
        { type: 'p', text: 'The Website uses the following cookies and browser storage:' },
        { type: 'cookies' },
        {
          type: 'p',
          text: 'On the English, Japanese and Korean versions of the Website, we ask for your consent before setting analytics cookies. On the Chinese version, Baidu Analytics is enabled by default. You can allow or reject analytics cookies at any time below. Necessary storage cannot be switched off because the Website needs it to work, but you can clear it in your browser.',
        },
        { type: 'settings' },
      ],
    },
    {
      id: 'how-we-use',
      title: 'How we use information',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'To deliver the Website and remember your preferences.' },
            { text: 'To understand how the Website is used and improve its content (only when analytics cookies are enabled).' },
            { text: 'To respond to your inquiries and communicate with you about our products and services.' },
            { text: 'To keep the Website secure and comply with legal obligations.' },
          ],
        },
      ],
    },
    {
      id: 'legal-bases',
      title: 'Legal bases (for visitors in the EEA, the UK and similar jurisdictions)',
      blocks: [
        {
          type: 'list',
          items: [
            { lead: 'Consent:', text: 'analytics cookies. You can withdraw your consent at any time.' },
            { lead: 'Legitimate interests:', text: 'delivering and securing the Website, remembering your settings, and responding to business inquiries.' },
            { lead: 'Legal obligation:', text: 'where the law requires us to keep or disclose information.' },
          ],
        },
      ],
    },
    {
      id: 'sharing',
      title: 'How we share information',
      blocks: [
        { type: 'p', text: 'We do not sell your personal information. We share it only with:' },
        {
          type: 'list',
          items: [
            { text: 'Baidu (Baidu Analytics), when analytics cookies are enabled;' },
            { text: 'Tencent Cloud, which hosts the Website and delivers its content;' },
            { text: 'authorities or other parties where required by law or necessary to protect our rights.' },
          ],
        },
        {
          type: 'p',
          text: 'These providers handle information under their own privacy policies and, where applicable, our instructions.',
        },
      ],
    },
    {
      id: 'transfers',
      title: 'International transfers',
      blocks: [
        {
          type: 'p',
          text: 'CubixAI operates in China, and Baidu Analytics processes data in mainland China. If you visit the Website from outside China, your information may be transferred to and processed in China and in other countries where our providers operate, whose data protection laws may differ from those where you live. Where required, we take steps to protect your information in line with this policy and applicable law.',
        },
      ],
    },
    {
      id: 'retention',
      title: 'How long we keep information',
      blocks: [
        {
          type: 'list',
          items: [
            { lead: 'Cookies and browser storage:', text: 'for the periods listed in Section 3.' },
            { lead: 'Inquiries:', text: 'for as long as needed to respond and maintain our business relationship, unless the law requires a longer period.' },
            { lead: 'Analytics data:', text: 'kept in Baidu Analytics reports under Baidu’s retention rules.' },
          ],
        },
      ],
    },
    {
      id: 'your-rights',
      title: 'Your rights and choices',
      blocks: [
        {
          type: 'p',
          text: `Depending on where you live, you may have the right to access, correct or delete your personal information, to object to or restrict certain processing, to data portability, and to withdraw your consent at any time without affecting processing carried out before the withdrawal. To exercise these rights, contact us at ${PRIVACY_EMAIL}. You also have the right to lodge a complaint with your local data protection authority.`,
        },
        {
          type: 'p',
          text: 'You can change your cookie choice at any time in the cookie settings in Section 3, and you can delete cookies and browser storage in your browser settings.',
        },
      ],
    },
    {
      id: 'children',
      title: 'Children',
      blocks: [
        {
          type: 'p',
          text: 'The Website is intended for businesses and professionals and is not directed at children. We do not knowingly collect personal information from children.',
        },
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      blocks: [
        {
          type: 'p',
          text: 'We may update this policy from time to time. The "Last updated" date at the top of this page shows when it was last changed.',
        },
      ],
    },
  ],
  cookies: [
    { name: 'locale', storage: 'Browser storage', category: 'Necessary', purpose: 'Remembers the language you choose.', duration: 'Until you clear it' },
    { name: 'cookie-consent', storage: 'Browser storage', category: 'Necessary', purpose: 'Remembers your cookie choice.', duration: 'Until you clear it' },
    { name: 'Hm_lvt_*', storage: 'Cookie (Baidu Analytics)', category: 'Analytics', purpose: 'Records the times of your visits so repeat visits can be counted.', duration: '1 year' },
    { name: 'Hm_lpvt_*', storage: 'Cookie (Baidu Analytics)', category: 'Analytics', purpose: 'Records the time of your current visit.', duration: 'Until you close your browser' },
    { name: 'HMACCOUNT', storage: 'Third-party cookie (Baidu, hm.baidu.com)', category: 'Analytics', purpose: 'Used by Baidu, together with other cookies it sets on hm.baidu.com, to tell browsers apart for its statistics.', duration: 'Set by Baidu' },
  ],
  cookieLabels: { storage: 'Type', category: 'Category', duration: 'Duration' },
  settings: {
    title: 'Cookie settings',
    statusLabel: 'Analytics cookies',
    on: 'On',
    off: 'Off',
    allow: 'Allow analytics cookies',
    reject: 'Reject analytics cookies',
    saved: 'Your choice has been saved.',
  },
}

const zhCN: PrivacyPolicyContent = {
  title: '隐私政策',
  lastUpdated: '更新日期：2026 年 11 月 18 日',
  intro:
    '本隐私政策说明软积木（北京）科技有限公司（以下简称“软积木”或“我们”）在您访问我们的网站 www.cubixai.com（以下简称“本网站”）时如何处理相关信息。您通过本网站链接访问的 ChatU 平台、第三方在线表单等服务，适用其各自的隐私政策。',
  sections: [
    {
      id: 'who-we-are',
      title: '运营者与联系方式',
      blocks: [
        {
          type: 'p',
          text: `本网站由软积木（北京）科技有限公司运营，地址：${BEIJING_ADDRESS}。如您对本政策或您的个人信息有任何疑问，请发送邮件至 ${PRIVACY_EMAIL} 与我们联系。`,
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: '我们收集的信息',
      blocks: [
        {
          type: 'list',
          items: [
            {
              lead: '您主动提供的信息：',
              text: '本网站没有注册账号功能，也没有自建的信息填写表单。如果您通过邮件、电话、微信或本网站链接的第三方表单联系我们，我们会收到您提供的信息，例如姓名、公司、联系方式和留言内容。',
            },
            {
              lead: '统计分析产生的访问数据：',
              text: '在启用统计分析 Cookie 的情况下（见第 3 条），百度统计会收集您的访问信息，例如浏览的页面、来源页面、访问时间、浏览器和设备类型、屏幕分辨率，以及根据 IP 地址推断的大致地区。',
            },
            {
              lead: '技术数据：',
              text: '您的浏览器加载本网站时，我们的网站托管与内容分发服务商会为传输内容接收您的 IP 地址和浏览器类型、请求地址等常规请求信息。',
            },
          ],
        },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookie 及类似技术',
      blocks: [
        { type: 'p', text: '本网站使用以下 Cookie 和浏览器本地存储：' },
        { type: 'cookies' },
        {
          type: 'p',
          text: '英文、日文、韩文版本会在设置统计分析 Cookie 前征得您的同意；中文版本默认启用百度统计。您可以随时在下方允许或拒绝统计分析 Cookie。必要的本地存储是网站正常运行所需，无法关闭，但您可以在浏览器中清除。',
        },
        { type: 'settings' },
      ],
    },
    {
      id: 'how-we-use',
      title: '我们如何使用信息',
      blocks: [
        {
          type: 'list',
          items: [
            { text: '提供本网站，并记住您的偏好设置；' },
            { text: '了解本网站的使用情况并改进内容（仅在启用统计分析 Cookie 时）；' },
            { text: '回复您的咨询，并就我们的产品和服务与您沟通；' },
            { text: '保障本网站安全，并履行法定义务。' },
          ],
        },
      ],
    },
    {
      id: 'legal-bases',
      title: '处理依据（适用于欧洲经济区、英国等地区的访客）',
      blocks: [
        {
          type: 'list',
          items: [
            { lead: '同意：', text: '统计分析 Cookie。您可以随时撤回同意。' },
            { lead: '正当利益：', text: '提供和保障本网站、记住您的设置、回复商务咨询。' },
            { lead: '法定义务：', text: '法律要求我们保存或披露信息的情形。' },
          ],
        },
      ],
    },
    {
      id: 'sharing',
      title: '信息共享',
      blocks: [
        { type: 'p', text: '我们不会出售您的个人信息，仅在以下情况下共享：' },
        {
          type: 'list',
          items: [
            { text: '百度（百度统计）：在启用统计分析 Cookie 时；' },
            { text: '腾讯云：托管本网站并分发内容；' },
            { text: '法律要求或为保护我们的合法权益所必需时，向有关部门或其他第三方提供。' },
          ],
        },
        { type: 'p', text: '上述服务商按照其各自的隐私政策，以及在适用时按照我们的要求处理信息。' },
      ],
    },
    {
      id: 'transfers',
      title: '跨境传输',
      blocks: [
        {
          type: 'p',
          text: '软积木位于中国，百度统计在中国大陆处理数据。如果您在中国境外访问本网站，您的信息可能会被传输到中国以及我们的服务商所在的其他国家或地区处理，这些地方的数据保护法律可能与您所在地不同。在需要时，我们会按照本政策和适用法律采取措施保护您的信息。',
        },
      ],
    },
    {
      id: 'retention',
      title: '保存期限',
      blocks: [
        {
          type: 'list',
          items: [
            { lead: 'Cookie 和本地存储：', text: '见第 3 条所列期限。' },
            { lead: '咨询信息：', text: '在回复咨询和维护业务往来所需的期限内保存，法律要求更长保存期限的除外。' },
            { lead: '统计数据：', text: '按百度的保存规则保存在百度统计报表中。' },
          ],
        },
      ],
    },
    {
      id: 'your-rights',
      title: '您的权利与选择',
      blocks: [
        {
          type: 'p',
          text: `根据您所在地的法律，您可能有权查阅、更正、删除您的个人信息，反对或限制某些处理，获取您的个人信息副本，以及随时撤回同意（撤回不影响撤回前处理的合法性）。如需行使上述权利，请发送邮件至 ${PRIVACY_EMAIL}。您也有权向所在地的个人信息保护监管机构投诉。`,
        },
        { type: 'p', text: '您可以随时在第 3 条的 Cookie 设置中更改选择，也可以通过浏览器设置删除 Cookie 和本地存储。' },
      ],
    },
    {
      id: 'children',
      title: '未成年人',
      blocks: [
        { type: 'p', text: '本网站面向企业和专业人士，并非针对儿童。我们不会故意收集儿童的个人信息。' },
      ],
    },
    {
      id: 'changes',
      title: '政策更新',
      blocks: [
        { type: 'p', text: '我们可能会不时更新本政策。页面顶部的“更新日期”显示最近一次修改的时间。' },
      ],
    },
  ],
  cookies: [
    { name: 'locale', storage: '本地存储', category: '必要', purpose: '记住您选择的语言。', duration: '直到您清除' },
    { name: 'cookie-consent', storage: '本地存储', category: '必要', purpose: '记住您的 Cookie 选择。', duration: '直到您清除' },
    { name: 'Hm_lvt_*', storage: 'Cookie（百度统计）', category: '统计分析', purpose: '记录您的访问时间，用于统计回访。', duration: '1 年' },
    { name: 'Hm_lpvt_*', storage: 'Cookie（百度统计）', category: '统计分析', purpose: '记录您本次访问的时间。', duration: '关闭浏览器时失效' },
    { name: 'HMACCOUNT', storage: '第三方 Cookie（百度，hm.baidu.com）', category: '统计分析', purpose: '百度在其域名 hm.baidu.com 下设置的 Cookie（及其他同类 Cookie），用于区分不同浏览器以进行统计。', duration: '由百度设定' },
  ],
  cookieLabels: { storage: '类型', category: '类别', duration: '有效期' },
  settings: {
    title: 'Cookie 设置',
    statusLabel: '统计分析 Cookie',
    on: '已开启',
    off: '已关闭',
    allow: '允许统计分析 Cookie',
    reject: '拒绝统计分析 Cookie',
    saved: '已保存您的选择。',
  },
}

const ja: PrivacyPolicyContent = {
  title: 'プライバシーポリシー',
  lastUpdated: '最終更新日：2026年11月18日',
  intro:
    'このプライバシーポリシーは、CubixAI Technology Co., Ltd.（以下「CubixAI」または「当社」）が、当社ウェブサイト www.cubixai.com（以下「本サイト」）をご利用の際に情報をどのように取り扱うかを説明するものです。本サイトのリンクからアクセスする ChatU プラットフォームや第三者が提供するオンラインフォームなどのサービスには、それぞれのプライバシーポリシーが適用されます。',
  sections: [
    {
      id: 'who-we-are',
      title: '運営者とお問い合わせ先',
      blocks: [
        {
          type: 'p',
          text: `本サイトは CubixAI Technology Co., Ltd.（所在地：${SINGAPORE_ADDRESS}）が運営しています。本ポリシーまたはお客様の個人情報に関するご質問は、${PRIVACY_EMAIL} までご連絡ください。`,
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: '収集する情報',
      blocks: [
        {
          type: 'list',
          items: [
            {
              lead: 'お客様からご提供いただく情報：',
              text: '本サイトにはアカウント登録機能や独自の入力フォームはありません。メール、電話、WeChat、または本サイトからリンクされた第三者のフォームで当社にご連絡いただいた場合、氏名、会社名、連絡先、お問い合わせ内容など、お客様がご提供になった情報を受け取ります。',
            },
            {
              lead: 'アクセス解析による利用データ：',
              text: '分析用 Cookie が有効な場合（第3条参照）、Baidu Analytics（百度統計）が、閲覧したページ、参照元ページ、アクセス日時、ブラウザや端末の種類、画面解像度、IP アドレスから推定されるおおよその地域など、お客様の訪問に関する情報を収集します。',
            },
            {
              lead: '技術的なデータ：',
              text: 'お客様のブラウザが本サイトを読み込む際、当社のホスティング・コンテンツ配信事業者は、コンテンツを配信するために、お客様の IP アドレスと、ブラウザの種類やリクエスト先のアドレスなどの標準的なリクエスト情報を受け取ります。',
            },
          ],
        },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookie および類似の技術',
      blocks: [
        { type: 'p', text: '本サイトでは、次の Cookie およびブラウザストレージを使用しています。' },
        { type: 'cookies' },
        {
          type: 'p',
          text: '英語版・日本語版・韓国語版の本サイトでは、分析用 Cookie を設定する前にお客様の同意を求めます。中国語版では Baidu Analytics が初期設定で有効になっています。分析用 Cookie はいつでも下記で許可または拒否できます。必須のストレージは本サイトの動作に必要なためオフにできませんが、ブラウザから削除することができます。',
        },
        { type: 'settings' },
      ],
    },
    {
      id: 'how-we-use',
      title: '情報の利用目的',
      blocks: [
        {
          type: 'list',
          items: [
            { text: '本サイトを提供し、お客様の設定を記憶するため' },
            { text: '本サイトの利用状況を把握し、内容を改善するため（分析用 Cookie が有効な場合のみ）' },
            { text: 'お問い合わせに回答し、当社の製品・サービスについてご連絡するため' },
            { text: '本サイトの安全を確保し、法令上の義務を遵守するため' },
          ],
        },
      ],
    },
    {
      id: 'legal-bases',
      title: '法的根拠（EEA、英国など該当する地域のお客様）',
      blocks: [
        {
          type: 'list',
          items: [
            { lead: '同意：', text: '分析用 Cookie。同意はいつでも撤回できます。' },
            { lead: '正当な利益：', text: '本サイトの提供と安全確保、設定の記憶、ビジネス上のお問い合わせへの対応。' },
            { lead: '法的義務：', text: '法令により情報の保存または開示が求められる場合。' },
          ],
        },
      ],
    },
    {
      id: 'sharing',
      title: '情報の共有',
      blocks: [
        { type: 'p', text: '当社はお客様の個人情報を販売しません。共有するのは次の場合に限られます。' },
        {
          type: 'list',
          items: [
            { text: 'Baidu（Baidu Analytics）：分析用 Cookie が有効な場合' },
            { text: 'Tencent Cloud：本サイトのホスティングとコンテンツ配信' },
            { text: '法令に基づく場合、または当社の権利を守るために必要な場合の関係当局その他の第三者' },
          ],
        },
        { type: 'p', text: 'これらの事業者は、それぞれのプライバシーポリシー、および該当する場合は当社の指示に従って情報を取り扱います。' },
      ],
    },
    {
      id: 'transfers',
      title: '国外への移転',
      blocks: [
        {
          type: 'p',
          text: 'CubixAI は中国で事業を行っており、Baidu Analytics は中国本土でデータを処理します。中国国外から本サイトをご利用の場合、お客様の情報は中国および当社の委託先が事業を行うその他の国に移転され、処理されることがあります。これらの国のデータ保護法は、お客様がお住まいの国と異なる場合があります。必要に応じて、本ポリシーおよび適用法令に沿ってお客様の情報を保護するための措置を講じます。',
        },
      ],
    },
    {
      id: 'retention',
      title: '保存期間',
      blocks: [
        {
          type: 'list',
          items: [
            { lead: 'Cookie とブラウザストレージ：', text: '第3条に記載の期間' },
            { lead: 'お問い合わせ：', text: '回答および取引関係の維持に必要な期間。ただし、法令でより長い期間が求められる場合を除きます。' },
            { lead: 'アクセス解析データ：', text: 'Baidu の保存ルールに従い、Baidu Analytics のレポートに保存されます。' },
          ],
        },
      ],
    },
    {
      id: 'your-rights',
      title: 'お客様の権利と選択',
      blocks: [
        {
          type: 'p',
          text: `お住まいの地域によっては、ご自身の個人情報へのアクセス、訂正、削除、特定の処理への異議申し立てや制限、データポータビリティを求める権利、および同意をいつでも撤回する権利（撤回前の処理の適法性には影響しません）があります。これらの権利を行使するには、${PRIVACY_EMAIL} までご連絡ください。また、お住まいの地域のデータ保護当局に苦情を申し立てる権利もあります。`,
        },
        { type: 'p', text: 'Cookie の設定は第3条の Cookie 設定でいつでも変更でき、Cookie とブラウザストレージはブラウザの設定から削除できます。' },
      ],
    },
    {
      id: 'children',
      title: '児童の個人情報',
      blocks: [
        { type: 'p', text: '本サイトは企業および専門家を対象としており、児童を対象としたものではありません。当社は児童の個人情報を故意に収集することはありません。' },
      ],
    },
    {
      id: 'changes',
      title: '本ポリシーの変更',
      blocks: [
        { type: 'p', text: '当社は本ポリシーを随時更新することがあります。ページ上部の「最終更新日」で最新の変更日を確認できます。' },
      ],
    },
  ],
  cookies: [
    { name: 'locale', storage: 'ブラウザストレージ', category: '必須', purpose: '選択した言語を記憶します。', duration: '削除するまで' },
    { name: 'cookie-consent', storage: 'ブラウザストレージ', category: '必須', purpose: 'Cookie の設定を記憶します。', duration: '削除するまで' },
    { name: 'Hm_lvt_*', storage: 'Cookie（Baidu Analytics）', category: '分析', purpose: '再訪問を集計するため、訪問日時を記録します。', duration: '1年' },
    { name: 'Hm_lpvt_*', storage: 'Cookie（Baidu Analytics）', category: '分析', purpose: '現在の訪問の日時を記録します。', duration: 'ブラウザを閉じるまで' },
    { name: 'HMACCOUNT', storage: 'サードパーティ Cookie（Baidu、hm.baidu.com）', category: '分析', purpose: 'Baidu が hm.baidu.com に設定するその他の Cookie とともに、統計のためにブラウザを識別するために使用します。', duration: 'Baidu が設定' },
  ],
  cookieLabels: { storage: '種類', category: '区分', duration: '保存期間' },
  settings: {
    title: 'Cookie 設定',
    statusLabel: '分析用 Cookie',
    on: '有効',
    off: '無効',
    allow: '分析用 Cookie を許可',
    reject: '分析用 Cookie を拒否',
    saved: '設定を保存しました。',
  },
}

const ko: PrivacyPolicyContent = {
  title: '개인정보 처리방침',
  lastUpdated: '최종 업데이트: 2026년 11월 18일',
  intro:
    '본 개인정보 처리방침은 CubixAI Technology Co., Ltd.(이하 "CubixAI" 또는 "당사")가 당사 웹사이트 www.cubixai.com(이하 "본 사이트")을 방문하는 이용자의 정보를 어떻게 처리하는지 설명합니다. 본 사이트의 링크를 통해 이용하는 ChatU 플랫폼이나 제3자가 제공하는 온라인 양식 등의 서비스에는 각 서비스의 개인정보 처리방침이 적용됩니다.',
  sections: [
    {
      id: 'who-we-are',
      title: '운영자 및 연락처',
      blocks: [
        {
          type: 'p',
          text: `본 사이트는 CubixAI Technology Co., Ltd.(주소: ${SINGAPORE_ADDRESS})가 운영합니다. 본 방침 또는 개인정보에 관한 문의는 ${PRIVACY_EMAIL}으로 연락해 주세요.`,
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: '수집하는 정보',
      blocks: [
        {
          type: 'list',
          items: [
            {
              lead: '이용자가 직접 제공하는 정보:',
              text: '본 사이트에는 회원가입 기능이나 자체 입력 양식이 없습니다. 이메일, 전화, WeChat 또는 본 사이트에 링크된 제3자 양식을 통해 당사에 연락하시면 이름, 회사명, 연락처, 문의 내용 등 이용자가 제공한 정보를 받게 됩니다.',
            },
            {
              lead: '통계 분석을 통한 이용 정보:',
              text: '분석 쿠키가 허용된 경우(제3조 참조), Baidu Analytics(바이두 통계)가 조회한 페이지, 유입 경로 페이지, 방문 시간, 브라우저 및 기기 유형, 화면 해상도, IP 주소로 추정한 대략적인 지역 등 방문 정보를 수집합니다.',
            },
            {
              lead: '기술적 정보:',
              text: '브라우저가 본 사이트를 불러올 때, 당사의 호스팅 및 콘텐츠 전송 서비스 제공업체는 콘텐츠 전송을 위해 IP 주소와 브라우저 유형, 요청한 주소 등 표준 요청 정보를 받습니다.',
            },
          ],
        },
      ],
    },
    {
      id: 'cookies',
      title: '쿠키 및 유사 기술',
      blocks: [
        { type: 'p', text: '본 사이트는 다음과 같은 쿠키와 브라우저 저장소를 사용합니다.' },
        { type: 'cookies' },
        {
          type: 'p',
          text: '영어·일본어·한국어 버전에서는 분석 쿠키를 설정하기 전에 이용자의 동의를 받습니다. 중국어 버전에서는 Baidu Analytics가 기본적으로 사용됩니다. 분석 쿠키는 아래에서 언제든지 허용하거나 거부할 수 있습니다. 필수 저장소는 본 사이트 작동에 필요하므로 끌 수 없지만, 브라우저에서 삭제할 수 있습니다.',
        },
        { type: 'settings' },
      ],
    },
    {
      id: 'how-we-use',
      title: '정보의 이용 목적',
      blocks: [
        {
          type: 'list',
          items: [
            { text: '본 사이트를 제공하고 이용자의 설정을 기억하기 위해' },
            { text: '본 사이트 이용 현황을 파악하고 콘텐츠를 개선하기 위해(분석 쿠키가 허용된 경우에만)' },
            { text: '문의에 답변하고 당사 제품 및 서비스에 관해 연락하기 위해' },
            { text: '본 사이트의 보안을 유지하고 법적 의무를 준수하기 위해' },
          ],
        },
      ],
    },
    {
      id: 'legal-bases',
      title: '처리의 법적 근거(EEA, 영국 등 해당 지역 이용자)',
      blocks: [
        {
          type: 'list',
          items: [
            { lead: '동의:', text: '분석 쿠키. 동의는 언제든지 철회할 수 있습니다.' },
            { lead: '정당한 이익:', text: '본 사이트의 제공 및 보안 유지, 설정 기억, 비즈니스 문의 응대.' },
            { lead: '법적 의무:', text: '법령에 따라 정보를 보관하거나 제공해야 하는 경우.' },
          ],
        },
      ],
    },
    {
      id: 'sharing',
      title: '정보의 공유',
      blocks: [
        { type: 'p', text: '당사는 이용자의 개인정보를 판매하지 않으며, 다음의 경우에만 공유합니다.' },
        {
          type: 'list',
          items: [
            { text: 'Baidu(Baidu Analytics): 분석 쿠키가 허용된 경우' },
            { text: 'Tencent Cloud: 본 사이트 호스팅 및 콘텐츠 전송' },
            { text: '법령에 따라 요구되거나 당사의 권리를 보호하기 위해 필요한 경우 관계 당국 및 기타 제3자' },
          ],
        },
        { type: 'p', text: '이들 업체는 각자의 개인정보 처리방침과, 해당하는 경우 당사의 지시에 따라 정보를 처리합니다.' },
      ],
    },
    {
      id: 'transfers',
      title: '국외 이전',
      blocks: [
        {
          type: 'p',
          text: 'CubixAI는 중국에서 사업을 운영하고 있으며, Baidu Analytics는 중국 본토에서 데이터를 처리합니다. 중국 외 지역에서 본 사이트를 방문하는 경우 이용자의 정보가 중국 및 당사 서비스 제공업체가 운영되는 기타 국가로 이전되어 처리될 수 있으며, 해당 국가의 개인정보 보호법은 이용자가 거주하는 국가의 법과 다를 수 있습니다. 필요한 경우 당사는 본 방침과 관련 법령에 따라 이용자의 정보를 보호하기 위한 조치를 취합니다.',
        },
      ],
    },
    {
      id: 'retention',
      title: '보유 기간',
      blocks: [
        {
          type: 'list',
          items: [
            { lead: '쿠키 및 브라우저 저장소:', text: '제3조에 기재된 기간' },
            { lead: '문의 정보:', text: '답변 및 거래 관계 유지에 필요한 기간. 단, 법령에서 더 긴 보관을 요구하는 경우는 예외로 합니다.' },
            { lead: '통계 분석 데이터:', text: 'Baidu의 보관 규정에 따라 Baidu Analytics 보고서에 보관됩니다.' },
          ],
        },
      ],
    },
    {
      id: 'your-rights',
      title: '이용자의 권리와 선택',
      blocks: [
        {
          type: 'p',
          text: `거주 지역에 따라 이용자는 자신의 개인정보에 대한 열람, 정정, 삭제, 특정 처리에 대한 이의 제기 또는 제한, 개인정보 이동을 요구할 권리와, 언제든지 동의를 철회할 권리(철회 전에 이루어진 처리의 적법성에는 영향을 주지 않음)를 가질 수 있습니다. 이러한 권리를 행사하려면 ${PRIVACY_EMAIL}으로 연락해 주세요. 또한 거주 지역의 개인정보 보호 감독기관에 민원을 제기할 권리가 있습니다.`,
        },
        { type: 'p', text: '쿠키 선택은 제3조의 쿠키 설정에서 언제든지 변경할 수 있으며, 쿠키와 브라우저 저장소는 브라우저 설정에서 삭제할 수 있습니다.' },
      ],
    },
    {
      id: 'children',
      title: '아동의 개인정보',
      blocks: [
        { type: 'p', text: '본 사이트는 기업 및 전문가를 대상으로 하며 아동을 대상으로 하지 않습니다. 당사는 아동의 개인정보를 고의로 수집하지 않습니다.' },
      ],
    },
    {
      id: 'changes',
      title: '방침의 변경',
      blocks: [
        { type: 'p', text: '당사는 본 방침을 수시로 업데이트할 수 있습니다. 페이지 상단의 "최종 업데이트" 날짜에서 마지막 변경일을 확인할 수 있습니다.' },
      ],
    },
  ],
  cookies: [
    { name: 'locale', storage: '브라우저 저장소', category: '필수', purpose: '선택한 언어를 기억합니다.', duration: '삭제할 때까지' },
    { name: 'cookie-consent', storage: '브라우저 저장소', category: '필수', purpose: '쿠키 선택을 기억합니다.', duration: '삭제할 때까지' },
    { name: 'Hm_lvt_*', storage: '쿠키(Baidu Analytics)', category: '분석', purpose: '재방문을 집계하기 위해 방문 시간을 기록합니다.', duration: '1년' },
    { name: 'Hm_lpvt_*', storage: '쿠키(Baidu Analytics)', category: '분석', purpose: '현재 방문 시간을 기록합니다.', duration: '브라우저를 닫을 때까지' },
    { name: 'HMACCOUNT', storage: '제3자 쿠키(Baidu, hm.baidu.com)', category: '분석', purpose: 'Baidu가 hm.baidu.com에 설정하는 다른 쿠키와 함께, 통계를 위해 브라우저를 구분하는 데 사용합니다.', duration: 'Baidu가 설정' },
  ],
  cookieLabels: { storage: '유형', category: '구분', duration: '보관 기간' },
  settings: {
    title: '쿠키 설정',
    statusLabel: '분석 쿠키',
    on: '사용',
    off: '사용 안 함',
    allow: '분석 쿠키 허용',
    reject: '분석 쿠키 거부',
    saved: '선택이 저장되었습니다.',
  },
}

export const privacyPolicy: Record<SupportedLocale, PrivacyPolicyContent> = {
  'zh-CN': zhCN,
  en,
  ja,
  ko,
}
