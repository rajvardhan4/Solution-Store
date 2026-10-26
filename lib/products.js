export const products = [
  {
    slug: 'chat-pilot', name: 'Chat Pilot', kind: 'chat',
    categories: ['apps', 'plugins', 'software'],
    category: 'AI software · WordPress plugin',
    summary: 'Turn website conversations into a connected customer experience, with AI, a knowledge base and a WordPress connector.',
    tagline: ['Better conversations.', 'Smarter connections.'],
    overview: 'Chat Pilot brings an AI chat experience to your website. Its product system includes a hosted workspace, a WordPress connector, knowledge management, conversation records and analytics.',
    tags: ['AI chat', 'WordPress', 'Knowledge base'], price: 999,
    url: 'https://appchatpilot.vercel.app/login',
    features: [
      { icon: '◈', title: 'AI-powered conversations', copy: 'Connect AI providers and shape responses with instructions and a knowledge base.' },
      { icon: '⌘', title: 'WordPress connection', copy: 'Connect a WordPress website through the Chat Pilot plugin and embedded chat widget.' },
      { icon: '↗', title: 'Conversation insights', copy: 'Explore conversations, transcripts, lead capture and usage analytics within the product.' },
    ],
  },
  {
    slug: 'hrm', name: 'HRM Pilot', kind: 'hrm',
    categories: ['portals', 'apps', 'software'],
    category: 'HR portal · Business software',
    summary: 'Bring attendance, leave management and payroll into a focused workspace built around your people.',
    tagline: ['Your people.', 'One connected workspace.'],
    overview: 'HRM Pilot is a Human Resource Management web application for attendance, leave management and payroll. Open the live portal to sign in to your organisation’s workspace.',
    tags: ['Attendance', 'Leave', 'Payroll'], price: 1499,
    url: 'https://mediumvioletred-fox-353008.hostingersite.com/',
    features: [
      { icon: '▦', title: 'Attendance management', copy: 'A dedicated portal for managing attendance, including biometric attendance capabilities.' },
      { icon: '◷', title: 'Leave management', copy: 'Bring leave management into the same HR workspace as attendance and payroll.' },
      { icon: '◎', title: 'Payroll workspace', copy: 'Keep payroll alongside your team’s HR operations in a connected web application.' },
    ],
  },
];
export const priceLabel = (amount) => `₹${amount.toLocaleString('en-IN')}`;
export const findProduct = (slug) => products.find((product) => product.slug === slug);
