import { HeadConfig } from "vitepress";
import { DESCRIPTION, DOMAIN, KEYWORDS, META_TITLE, TITLE, URL } from "./info";
const markdownkatex: HeadConfig[] = [
  ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css', crossorigin: '' }]
]
const script: HeadConfig[] = [
  [
    "script",
    {
      src: "/js/google.js"
    }
  ], [
    "script",
    {
      src: "/js/baidu.js"
    }
  ]
];
const meta: HeadConfig[] = [
  [
    "meta",
    {
      name: "title",
      content: META_TITLE
    }
  ],
  [
    "meta",
    {
      name: "keywords",
      href: KEYWORDS
    }
  ]
];
const facebook: HeadConfig[] = [
  [
    "meta",
    {
      property: "og:url",
      content: URL
    }
  ], [
    "meta",
    {
      property: "og:type",
      content: "website"
    }
  ], [
    "meta",
    {
      property: "og:title",
      content: TITLE
    }
  ], [
    "meta",
    {
      property: "og:description",
      content: DESCRIPTION
    }
  ], [
    "meta",
    {
      property: "og:image",
      content: `${URL}/images/og.png`
    }
  ]
];
const twitter: HeadConfig[] = [
  [
    "meta",
    {
      property: "twitter:card",
      content: "summary_large_image"
    }
  ],
  [
    "meta",
    {
      property: "twitter:domain",
      content: DOMAIN
    }
  ],
  [
    "meta",
    {
      property: "twitter:url",
      content: URL
    }
  ],
  [
    "meta",
    {
      property: "twitter:title",
      content: TITLE
    }
  ],
  [
    "meta",
    {
      property: "twitter:description",
      content: DESCRIPTION
    }
  ],
  [
    "meta",
    {
      property: "twitter:image",
      content: `${URL}/images/og.png`
    }
  ]
];
const headConfig: HeadConfig[] = [
  ...markdownkatex,
  ...script,
  ...meta,
  ...facebook,
  ...twitter
];

export default headConfig;
