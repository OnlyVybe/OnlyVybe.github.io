export const siteConfig = {
  name: 'ONLY',
  handle: 'OnlyVybe',
  title: 'ONLY — программные инструменты и цифровые системы',
  description: 'Независимый разработчик: программные инструменты, AI-эксперименты, автоматизация и цифровая приватность.',
  tagline: 'Практичные инструменты. Продуманные системы.',
  url: 'https://onlyvybe.github.io',
  avatar: '/images/only-personal-avatar.png',
};

export type ProjectCategory = 'Software' | 'AI' | 'Automation' | 'Bots' | 'Smart TV' | 'Privacy' | 'Experiments';

export const projects = [
  {
    slug: 'cleanyourtv-kivi-24h600gr',
    title: 'CleanYourTV для KIVI 24H600GR',
    category: 'Smart TV' as ProjectCategory,
    description: 'Набор инструментов для настройки Android TV 7.1.1: обратимые изменения, резервное копирование и восстановление.',
    technologies: ['Android TV', 'Shell', 'Documentation'],
    status: 'Публичный проект',
    github: 'https://github.com/OnlyVybe/cleanyourtv-kivi-24h600gr',
    featured: true,
    preview: 'https://raw.githubusercontent.com/OnlyVybe/cleanyourtv-kivi-24h600gr/main/screenshots/before-after.png',
    previewAlt: 'До и после: стоковый лончер KIVI и новый домашний экран Apple TV-style',
    previewKind: 'image',
    previewNote: 'Реальный screenshot из публичного README проекта.',
    functionality: ['Документация модели и платформы', 'Инструкции по обратимым настройкам', 'Резервное копирование и восстановление'],
    limitations: 'Совместимость и результат зависят от конкретной модели и версии прошивки; актуальные условия описаны в репозитории.'
  },
  {
    slug: 'cleanyourtv-samsung-ue32n5300',
    title: 'CleanYourTV для Samsung UE32N5300',
    category: 'Privacy' as ProjectCategory,
    description: 'Руководство по настройке приватности телевизора Samsung UE32N5300 на Tizen 4.0.',
    technologies: ['Tizen', 'DNS', 'Privacy'],
    status: 'Публичный проект',
    github: 'https://github.com/OnlyVybe/cleanyourtv-samsung-ue32n5300',
    featured: true,
    previewKind: 'device',
    previewLabel: 'TIZEN 4.0',
    previewMeta: 'UE32N5300 / Full HD',
    previewNote: 'Screenshots не публикуются в upstream README из соображений privacy.',
    problem: 'Нужна документированная настройка приватности Samsung UE32N5300 без root и установки дополнительного ПО.',
    functionality: ['Настройки ACR и необязательных согласий', 'DNS-подход к блокировке телеметрии', 'Пошаговая публичная документация'],
    limitations: 'Доступные параметры зависят от версии Tizen и настроек конкретного телевизора.'
  },
  {
    slug: 'cleanyourtv-lg-43lj595v',
    title: 'CleanYourTV для LG 43LJ595V-ZD',
    category: 'Privacy' as ProjectCategory,
    description: 'Практическая настройка приватности и ограничение рекламного отслеживания на webOS.',
    technologies: ['webOS', 'DNS', 'Documentation'],
    status: 'Публичный проект',
    github: 'https://github.com/OnlyVybe/cleanyourtv-lg-43lj595v',
    featured: true,
    previewKind: 'device',
    previewLabel: 'webOS 3.9.3',
    previewMeta: '43LJ595V-ZD / Full HD',
    previewNote: 'Screenshots не публикуются в upstream README из соображений privacy.',
    problem: 'Нужна понятная настройка приватности LG 43LJ595V-ZD с учетом возможностей webOS и DNS.',
    functionality: ['Описание доступных пунктов меню', 'Ограничение рекламного отслеживания', 'Инструкции по DNS и проверке изменений'],
    limitations: 'Набор доступных пунктов зависит от версии webOS и региональных настроек.'
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/OnlyVybe', group: 'Разработка и технологии', icon: 'github', available: true },
  { label: 'Telegram', href: '', group: 'Общение', icon: 'telegram', available: false },
  { label: 'ВКонтакте', href: '', group: 'Общение', icon: 'vk', available: false },
];

export const focusAreas = [
  { number: '01', title: 'Software', text: 'Инструменты и системы, которые решают конкретную задачу.' },
  { number: '02', title: 'AI & Local Models', text: 'Исследование локальных моделей и практичных сценариев применения.' },
  { number: '03', title: 'Automation', text: 'Скрипты, боты и процессы, которые экономят время.' },
  { number: '04', title: 'Privacy', text: 'Настройки, документация и контроль цифровой среды.' },
];

export const technologies = ['Python', 'Java', 'PowerShell', 'Bash', 'AI / LLM', 'Telegram Bots', 'Android TV', 'Tizen', 'webOS', 'Technical Writing'];
