export const siteConfig = {
  name: 'AUTO-Z',
  nameSuffix: 'TECH',
  tagline: 'Automatize o Seu Stand Automóvel com IA',
  description: 'Qualifique Leads 24/7 em Portugal',
  mainMessage:
    'O seu stand perde leads todos os dias. Nós garantimos que nenhum fica sem resposta.',
  whatsapp: 'https://wa.me/351000000000',
  year: '2024',
}

export const navLinks = [
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Preços', href: '#precos' },
  { label: 'Skills', href: '#skills' },
]

export const heroPropositions = [
  'Respondemos em menos de 30 segundos',
  'Qualificação de cada lead',
  'Contactos com intenção real de compra',
]

export const heroTrust = [
  'Sem compromisso',
  '15 minutos',
  'Implementação assistida',
  'Cancele quando quiser',
]

export const heroBenefits = [
  { icon: '⚡', label: 'Resposta 24/7' },
  { icon: '🎯', label: 'Score HOT/WARM/COLD' },
  { icon: '🔗', label: 'Standvirtual + AutoSapo' },
  { icon: '🚀', label: 'Implementação assistida' },
]

export const problemStats = [
  {
    value: 100,
    suffix: '+',
    label: 'Leads/dia',
    description: 'em stands médios e grandes',
    color: 'blue',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Sem resposta',
    description: 'dos leads ficam ignorados em 24h',
    color: 'red',
  },
  {
    value: 7,
    suffix: '×',
    label: 'Mais conversões',
    description: 'com resposta em menos de 1 hora',
    color: 'cyan',
  },
  {
    value: 6,
    suffix: 'h',
    label: 'Por dia',
    description: 'gastas apenas a responder mensagens',
    color: 'violet',
  },
] as const

export const howItWorksSteps = [
  {
    number: '01',
    title: 'Captura',
    description:
      'Centralização automática de todos os leads — portais, WhatsApp, redes sociais e formulários — num único ponto de controlo.',
    detail: 'Standvirtual · OLX · AutoSapo · Facebook · Instagram · Email',
  },
  {
    number: '02',
    title: 'Resposta Imediata',
    description:
      'O ATZ Agent responde em menos de 30 segundos, 24/7. Às 3h da manhã ou ao domingo — nenhum lead fica sem resposta.',
    detail: 'Tempo de resposta < 30 segundos',
  },
  {
    number: '03',
    title: 'Qualificação Inteligente',
    description:
      'A IA faz perguntas reais sobre orçamento, urgência, veículo e retoma. Cada lead recebe um score automático de 0 a 100.',
    detail: 'Score HOT / WARM / COLD',
  },
  {
    number: '04',
    title: 'Roteamento',
    description:
      'Leads qualificados vão automaticamente para o vendedor certo. Leads frios entram em follow-up automático. Zero ruído para a equipa.',
    detail: 'Vendedores recebem apenas intenção real',
  },
]

export const howItWorksResults = [
  { value: '24/7', label: 'Resposta Automática' },
  { value: '89%', label: 'Leads Qualificados' },
  { value: '3×', label: 'Mais Conversões' },
]

export const integrations = [
  { name: 'Standvirtual', category: 'Portal', color: '#FF6B35' },
  { name: 'OLX', category: 'Portal', color: '#6C2DC7' },
  { name: 'AutoSapo', category: 'Portal', color: '#E11D48' },
  { name: 'Facebook', category: 'Social', color: '#1877F2' },
  { name: 'WhatsApp', category: 'Messaging', color: '#25D366' },
  { name: 'Instagram', category: 'Social', color: '#E1306C' },
  { name: 'Email', category: 'Email', color: '#64748B' },
]

export const problemsResolved = [
  {
    problem: '70% dos leads perdidos',
    solution: 'IA responde em 30 segundos',
  },
  {
    problem: 'Vendedores sobrecarregados',
    solution: 'IA qualifica, vendedor só fecha',
  },
  {
    problem: 'Leads espalhados por canais',
    solution: 'Tudo centralizado',
  },
  {
    problem: 'Sem visibilidade do funil',
    solution: 'Dashboard em tempo real',
  },
]

export const caseStudy = {
  company: 'GTBauto',
  before: [
    '+100 leads/dia sem controlo',
    '6 horas/dia gastas a responder mensagens',
    'Leads misturados: compra, venda, curiosos',
    'Vendedores recebiam contactos frios',
  ],
  after: [
    '0% de leads sem resposta',
    '90% dos leads qualificados automaticamente',
    'Gestora libertada para marketing e estratégia',
    '+25% de conversão em 30 dias',
  ],
  testimonial:
    'Hoje os vendedores só recebem leads com intenção real de compra.',
  author: 'Gestão GTBauto',
  metric: '+25%',
  metricLabel: 'conversão em 30 dias',
}

export const differentiators = [
  {
    title: 'Treinado para Portugal',
    description:
      'ATZ Agent treinado especificamente para o mercado automóvel português',
  },
  {
    title: 'Implementação Assistida',
    description: 'Equipa disponível do onboarding ao primeiro resultado',
  },
  {
    title: 'Skills Personalizadas',
    description: 'Adaptadas ao processo comercial do seu stand',
  },
  {
    title: 'Recuperação de Vendas',
    description: 'Foco em leads que já estavam perdidos',
  },
  {
    title: 'Construído para Stands',
    description: 'Não um chatbot genérico adaptado — desenvolvido de raiz',
  },
]

export type SkillStatus = 'Ativo' | 'Add-on'
export type SkillType = 'Principal' | 'Extensão'

export interface Skill {
  name: string
  status: SkillStatus
  type: SkillType
  description: string
}

export const skills: Skill[] = [
  {
    name: 'Qualify',
    status: 'Ativo',
    type: 'Principal',
    description: 'Qualificação inteligente com score 0–100',
  },
  {
    name: 'Sell',
    status: 'Ativo',
    type: 'Principal',
    description: 'Fluxo de venda e apresentação de stock',
  },
  {
    name: 'Finance',
    status: 'Add-on',
    type: 'Extensão',
    description: 'Simulação de financiamento e condições',
  },
  {
    name: 'Service',
    status: 'Add-on',
    type: 'Extensão',
    description: 'Agendamento de serviços e manutenção',
  },
  {
    name: 'Buy',
    status: 'Add-on',
    type: 'Extensão',
    description: 'Gestão de pedidos de retoma e avaliação',
  },
  {
    name: 'Post-Sale',
    status: 'Add-on',
    type: 'Extensão',
    description: 'Acompanhamento pós-venda e fidelização',
  },
  {
    name: 'Prospect',
    status: 'Add-on',
    type: 'Extensão',
    description: 'Campanhas automáticas para leads frios',
  },
]

export interface Plan {
  name: string
  price: string
  period: string | null
  badge: string | null
  target: string
  focus: string
  features: string[]
  limitation?: string
  insight?: string
  cta: string
  highlighted: boolean
  ctaVariant: 'primary' | 'whatsapp' | 'outline'
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '79',
    period: 'mês',
    badge: null,
    target: 'Stands pequenos ou em fase inicial',
    focus: 'Não deixar leads sem resposta',
    features: [
      'Resposta automática',
      'Centralização básica de leads',
      'Integrações essenciais',
      'Relatórios simples',
    ],
    limitation:
      'Não separa leads quentes de frios. Não organiza o trabalho dos vendedores. Serve para não perder contactos.',
    cta: 'Começar com o essencial',
    highlighted: false,
    ctaVariant: 'outline',
  },
  {
    name: 'Pro',
    price: '289',
    period: 'mês',
    badge: 'Mais Escolhido',
    target: 'Stands com volume diário de leads',
    focus: 'Controlo total dos leads',
    features: [
      'Resposta automática em < 30 segundos',
      'Qualificação inteligente com score 0–100',
      'Separação automática por tipo de lead',
      'Roteamento para o vendedor certo',
      'Dashboard completo em tempo real',
      'Follow-ups automáticos',
      'Integrações com portais e redes sociais',
      'Suporte na configuração inicial',
    ],
    insight:
      "Este é o plano onde a maioria dos stands deixa de 'responder mensagens' e passa a gerir vendas.",
    cta: 'Quero controlar os meus leads',
    highlighted: true,
    ctaVariant: 'primary',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: null,
    badge: null,
    target: 'Stands médios e grandes',
    focus: 'Escalar com previsibilidade',
    features: [
      'Tudo do plano Pro',
      'Skills avançadas do ATZ Agent',
      'Implementação assistida aprofundada',
      'Fluxos personalizados por tipo de lead',
      'Campanhas automáticas para leads frios',
      'Skill Post-Sale ativada',
      'Integrações específicas',
      'Suporte prioritário',
    ],
    insight:
      'Nem todos os stands precisam deste plano. Mas quando o volume cresce, este plano evita o caos.',
    cta: 'Falar com a equipa AUTO-Z',
    highlighted: false,
    ctaVariant: 'whatsapp',
  },
]

export const roiData = {
  costs: [
    { label: 'Assistente de Vendas', value: '€1.200/mês' },
    { label: 'Tempo desperdiçado em qualificação', value: '60%' },
    { label: 'Leads perdidos fora de horas', value: '45%' },
  ],
  benefits: [
    'Vendedores focam 100% em vender',
    'IA qualifica 24/7 automaticamente',
    'Zero leads perdidos',
    'ROI positivo desde o dia 1',
  ],
}

export const footerLinks = {
  produto: [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Preços', href: '#precos' },
    { label: 'Skills', href: '#skills' },
  ],
  empresa: [
    { label: 'Sobre', href: '#' },
    { label: 'Contacto', href: '#contacto' },
  ],
  legal: [
    { label: 'Privacidade', href: '#' },
    { label: 'Termos', href: '#' },
  ],
}
