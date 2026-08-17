import { CaseStudy } from "../../types";

export const ja: CaseStudy = {
  card: {
    title: "Web App Redesign",
    skills: ["Frontend Dev", "UI/UX Design", "B2B SaaS"],
    imgSrc: "/images/projects/staplecard.jpg",
  },
  meta: {
    articleTitle: "Corporate Payments",
    heroImageSrc: "/images/projects/s-expenses.jpg",
    heroImageAlt: "Staple Card",
    clientName: "Staple",
    year: "2022",
    role: "Product Designer & Frontend Developer",
    stack: ["Figma", "React", "CSS"],
    themes: [
      "UI/UX design",
      "Frontend development",
      "Design system",
      "SaaS design",
      "FinTech",
    ],
    h1Title: "キャッシュレスな法人決済の未来をデザインする",
    timeline: "6 months",
    introduction: [
      "Stapleは、従業員が決済、領収書の記録、経費精算の申請を手軽に行える法人決済ソリューションです。リアルカードとバーチャルカードの両方に対応し、経費管理を効率化するとともに、経理担当者が会社全体の支出を一元的に把握できる環境を提供します。",
      "ワークフローをデジタル化することで、Stapleは日本に根強く残る紙ベースの仕組みに向き合い、旧来のプロセスに現代的な解を届けています。",
    ],
  },
  seo: {
    title: "Staple 法人決済プラットフォームのリデザイン | Geoffrey Wu",
    description:
      "Stapleの経費管理プラットフォームを再設計し、デザインシステムを構築した事例。日本の紙中心の経費処理を、役割に応じたキャッシュレスなプロダクトへと置き換えました。",
  },
  blocks: [
    { type: "h2", text: "課題" },
    {
      type: "p",
      text: "日本の法人経費管理には、次のような大きな課題があります。",
    },
    {
      type: "ol",
      items: [
        "**紙ベースの仕組み：** 多くの企業がいまだ紙の領収書や帳票に依存しており、記入ミスや紛失、さらには不正の温床にもなりかねません。厳格な法定報告要件がこの非効率さに拍車をかけ、企業はデジタル化への移行に二の足を踏んでいます。",
        "**法人カードの利用ハードル：** 法人カードは、十分な資本を持たない中小企業やスタートアップには発行されにくいのが実情です。この制約が経費管理を複雑にしており、とりわけ通勤費のように必ず発生する精算業務で負担となっています。",
        "**複雑な業務フロー：** 経費の登録、領収書のアップロード、支払いの確認、会計ソフトとの連携まで、経費管理には専門的なタスクが数多く含まれ、しかもその内容は利用者の役割（従業員か管理者か）によって大きく異なります。",
      ],
    },
    { type: "h2", text: "担当した役割" },
    {
      type: "p",
      text: "私は事業が急成長するフェーズでチームに参画し、次の領域を担当しました。",
    },
    {
      type: "ul",
      items: [
        "**ユーザー体験の再設計：** 使いやすく、アクセシブルで、今後の機能追加にも耐えうるプラットフォームにすること。",
        "**ビジュアルアイデンティティの強化：** Staple Cardのデザイン、プロダクトサイト、各種ビジュアルアセットの刷新。",
        "**情報アーキテクチャの改善：** 多様な役割とユースケースに対応できるよう、複雑な構造を整理すること。",
        "**デザインシステムの構築：** 拡張性の高いフロントエンド開発を支える、一貫したデザインシステムと独自CSSフレームワークの整備。",
      ],
    },
    {
      type: "image",
      src: "/images/projects/staplecard-transactions.png",
      alt: "Staple Cardの取引一覧画面",
      width: 1440,
      height: 900,
    },
    { type: "h2", text: "難しかった点" },
    {
      type: "p",
      text: "このプロジェクトの複雑さは、機能の幅広さと、ユーザー層の多様さにありました。",
    },
    {
      type: "ul",
      items: [
        "**専門性の高い機能群：** Stapleは、経費の作成、領収書のアップロード、支払いの確認、会計ソフトとの連携、ユーザー権限の管理、経費の承認、財務データの書き出しなど、多岐にわたる業務に対応しています。",
        "**役割ごとに異なるユースケース：** 従業員には直感的に支払いを管理できる仕組みが必要な一方、管理者には統制、承認、レポーティングのための堅牢なツールが求められます。この両者のバランスを取ることが大きな課題でした。",
      ],
    },
    { type: "h2", text: "プロセス" },
    { type: "p", variant: "subheading", text: "エンジニアとの協働" },
    {
      type: "p",
      text: "エンジニアと密に連携しながら、技術要件とビジネス要件の双方を満たしつつ、全体のユーザー体験を高める直感的なインターフェースを設計・実装しました。",
    },
    {
      type: "image",
      src: "/images/projects/s-workflows.png",
      alt: "Stapleの承認ポリシーとワークフロー設定画面",
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      variant: "subheading",
      text: "情報アーキテクチャの再構築",
    },
    { type: "p", text: "使いやすさを高めるために、次のことを行いました。" },
    {
      type: "ul",
      items: [
        "プラットフォームの情報アーキテクチャを再構築し、従業員と管理者の双方に明確な導線を用意しました。",
        "機能をユーザーの業務フローに沿って論理的にグループ化し、手戻りを減らして、最小限の手間でタスクを完了できるようにしました。",
      ],
    },
    {
      type: "image",
      src: "/images/projects/staplecard-add.png",
      alt: "新しいStaple Cardを追加する画面",
      width: 1440,
      height: 900,
    },
    { type: "p", variant: "subheading", text: "デザインシステムの構築" },
    {
      type: "p",
      text: "デザインと開発の両方を効率化するために、次のことに取り組みました。",
    },
    {
      type: "ul",
      items: [
        "再利用可能なコンポーネントと詳細なドキュメントを備えたデザインシステムを作成し、プラットフォーム全体の一貫性を担保しました。",
        "[アトミックデザインの考え方](https://bradfrost.com/blog/post/atomic-web-design/)と[Sarah Dayan氏によるこの記事](https://frontstuff.io/generate-all-your-utility-classes-with-sass-maps)から着想を得て、その概念を独自のCSSフレームワークへと落とし込み、チームが素早く効率的にページを構築・拡張できるようにしました。",
      ],
    },
    {
      type: "image",
      src: "/images/projects/s-expenses.jpg",
      alt: "Stapleの経費一覧画面",
      width: 1800,
      height: 1200,
    },
    { type: "h2", text: "解決策" },
    {
      type: "p",
      text: "最終的なデザインは、当初の課題に的確に応えるものとなりました。",
    },
    {
      type: "ol",
      items: [
        {
          text: "**経費管理の効率化**",
          items: [
            "従業員は直感的なインターフェースから、経費の作成、領収書のアップロード、支払いの管理を素早く行えるようになりました。",
            "管理者は、業務フローの把握、承認プロセスの設定、レポートの作成を容易に行えるツールを手にしました。",
          ],
        },
        {
          text: "**統一されたデザインシステム**",
          items: [
            "デザインシステムが今後の機能開発に向けた一貫性と拡張性のある土台となり、フロントエンドの実装時間を大幅に短縮しました。",
          ],
        },
        {
          text: "**ブランドプレゼンスの向上**",
          items: [
            "刷新したStaple Cardのデザインとプロダクトサイトにより、ブランドのビジュアルアイデンティティと市場での存在感が強化されました。",
          ],
        },
        {
          text: "**財務管理の負担軽減**",
          items: [
            "従業員が法令要件を満たしながら自律的に支払いを扱えるようになり、経理担当者の管理負担が軽くなりました。",
          ],
        },
      ],
    },
    { type: "h2", text: "成果" },
    {
      type: "p",
      text: "丁寧な設計とチームでの協働を通じて、日本特有のビジネス環境に合わせたキャッシュレスな法人決済ソリューションという目標を実現できました。刷新されたプラットフォームは、あらゆる規模の企業にとって経費管理を効率化し、拡張性とアクセシビリティ、そして従業員と管理者の双方にとって使いやすい体験を実現しています。",
    },
    {
      type: "image",
      src: "/images/projects/s-addexpense.png",
      alt: "新しい経費を登録する画面",
      width: 1440,
      height: 900,
    },
    {
      type: "image",
      src: "/images/projects/s-account.png",
      alt: "アカウント管理画面",
      width: 1440,
      height: 900,
    },
    {
      type: "image",
      src: "/images/projects/s-exports.png",
      alt: "財務データの書き出し画面",
      width: 1440,
      height: 900,
    },
    {
      type: "image",
      src: "/images/projects/s-receipts.png",
      alt: "領収書の管理画面",
      width: 1440,
      height: 900,
    },
  ],
};
