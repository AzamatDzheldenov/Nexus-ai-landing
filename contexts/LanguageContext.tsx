"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "ru" | "en";

export const LANGUAGE_OPTIONS: readonly {
  value: Language;
  label: "RU" | "EN";
}[] = [
  { value: "ru", label: "RU" },
  { value: "en", label: "EN" },
];

export const translations = {
  ru: {
    language: {
      switcherLabel: "Переключатель языка",
    },
    nav: [
      { label: "Возможности", href: "#features" },
      { label: "Кейсы", href: "#cases" },
      { label: "Цены", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    hero: {
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      primaryNavigation: "Основная навигация",
      tryFree: "Try for free",
      badge: "AI workspace для независимых команд",
      headlineTop: "Nexus AI для тех,",
      headlineBottom: "кто работает на себя",
      subtitle:
        "Личный AI-помощник, который разбирает входящие, готовит ответы клиентам, собирает задачи и держит финансы на виду, пока вы занимаетесь работой, а не операционкой.",
      startFree: "Начать бесплатно",
      watchDemo: "Смотреть демо",
      demoAlert: "Демо будет здесь",
      command: {
        liveWorkspace: "Live workspace",
        synced: "Synced",
        signals: "Signals",
        today: "Сегодня",
        decisions: "7 решений",
        prepared: "подготовлены до первого кофе",
        focusSaved: "Focus saved",
        control: "Control",
        cashflow: "Cashflow",
        inbox: [
          "Клиент: КП до пятницы",
          "Счёт: дизайн-система",
          "Дедлайн: лендинг v2",
        ],
        actions: [
          {
            title: "Ответ клиенту",
            copy: "Тон спокойный, срок 15 минут",
            status: "готово",
          },
          {
            title: "Задачи недели",
            copy: "5 важных, 2 можно делегировать",
            status: "собрано",
          },
          {
            title: "Оплата проекта",
            copy: "$4,820 ожидается к 31 мая",
            status: "контроль",
          },
        ],
        contracts: "Договоры",
        projects: "Проекты",
      },
      trust: [
        "Уже используют 12,450 фрилансеров",
        "4.9/5 средняя оценка",
        "Без карты на старте",
      ],
    },
    features: {
      eyebrow: "Возможности Nexus AI",
      title: "Всё, что нужно фрилансеру и независимой команде",
      subtitle:
        "Не ещё один чат с AI, а тихий операционный слой: он читает, структурирует, напоминает и готовит документы до того, как день успел расползтись.",
      inbox: {
        label: "Ответы",
        title: "Входящие превращаются в готовые решения",
        description:
          "Nexus AI не просто суммирует чат. Он понимает контекст проекта, тон клиента и сразу предлагает следующий ход.",
        beforeLabel: "До",
        afterLabel: "После Nexus",
        before: "Можно обсудить завтра? И ещё нужен новый срок.",
        after:
          "Ответ готов: подтвердить окно, предложить 2 слота и зафиксировать дедлайн.",
        draft: "Черновик ответа",
        time: "47 сек",
      },
      tasks: {
        label: "Задачи и дедлайны",
        title: "Один командный центр вместо десятка вкладок",
        description:
          "Письма, заметки и договорённости собираются в план: что сделать, кому ответить, где риск по срокам и что можно отложить без потерь.",
        badge: "live plan",
        today: "Сегодня",
        actions: "7 действий собрано",
        timeline: [
          { label: "Бриф от клиента", value: "приоритет высокий" },
          { label: "КП и сроки", value: "собрать сегодня" },
          { label: "Инвойс", value: "напомнить завтра" },
        ],
      },
      finance: {
        label: "Финансы",
        title: "Оплаты больше не теряются в переписке",
        description:
          "Счета, просрочки и мягкие follow-up напоминания видны заранее, без ручной сверки в конце месяца.",
        expected: "ожидается",
        onTime: "в срок",
      },
      proposal: {
        label: "КП и документы",
        title: "От мысли к аккуратному предложению",
        description:
          "КП, договоры и коммерческие предложения собираются из контекста проекта: с объёмом, ценой, рисками и следующим шагом.",
        ready: "готово за 38 сек",
        fileName: "proposal.md",
      },
      focus: {
        label: "Фокус",
        title: "Показывает, где день стал легче",
        description:
          "Nexus AI считает сохранённые часы, повторяющуюся рутину и моменты, где ты слишком часто переключаешься.",
        saved: "сохранено сегодня",
      },
      integrations: {
        label: "Интеграции",
        title: "Рабочий контекст собирается сам",
        description:
          "Telegram, Gmail, Notion и WhatsApp подключаются в один поток, где AI видит проект целиком, а не отдельные фрагменты.",
        note: "Один контекст для клиента, задачи, файла и оплаты.",
      },
    },
    how: {
      eyebrow: "Как это работает",
      title: "От хаоса к контролю за 3 простых шага",
      subtitle:
        "Nexus AI тихо подключается к твоему рабочему потоку и превращает разрозненные сообщения в понятные действия.",
      mockupTitle: "Nexus daily brief",
      synced: "synced",
      today: "Сегодня",
      ready: "готово к 09:00",
      morningPack: "Утренний пакет",
      packDetails: "решения, сроки, деньги",
      steps: [
        {
          number: "01",
          title: "Подключи свои инструменты",
          description:
            "Telegram, Gmail и Notion становятся одним рабочим контекстом без сложной настройки и ручного переноса данных.",
        },
        {
          number: "02",
          title: "AI работает в фоне",
          description:
            "Nexus AI читает сигналы, выделяет важное, связывает задачи со сроками и не тревожит без причины.",
        },
        {
          number: "03",
          title: "Получай готовые решения",
          description:
            "Каждый день у тебя есть ответы, задачи, документы и напоминания, собранные в аккуратный план.",
        },
      ],
      brief: [
        { title: "Ответ клиенту", detail: "тон уверенный, 2 варианта" },
        { title: "Задачи", detail: "5 важных, 2 можно отложить" },
        { title: "Документы", detail: "КП и инвойс готовы" },
      ],
    },
    testimonials: {
      eyebrow: "Отзывы",
      title: "Фрилансеры и команды, которые уже экономят часы каждый день",
      subtitle:
        "Nexus AI помогает держать клиентов, задачи и оплату в одном ясном рабочем ритме.",
      ratingLabel: "5 из 5",
      items: [
        {
          name: "Алина Морозова",
          role: "Фрилансер-дизайнер",
          initials: "АМ",
          text: "Раньше я теряла утро на сообщения, правки и напоминания клиентам. Nexus AI собирает всё в один спокойный список, а черновики ответов уже звучат как я.",
          result: "минус 6 часов рутины в неделю",
        },
        {
          name: "Илья Соколов",
          role: "Веб-разработчик",
          initials: "ИС",
          text: "Самое ценное - больше не держать в голове, кто что обещал и когда платить. Утренний brief показывает задачи, риски и деньги без лишнего шума.",
          result: "3 проекта без сорванных сроков",
        },
        {
          name: "Мария Левина",
          role: "Основательница мини-студии",
          initials: "МЛ",
          text: "У нас небольшая команда, поэтому каждый час важен. Nexus AI аккуратно связывает чаты, Notion и почту: задачи появляются там, где раньше были забытые сообщения.",
          result: "на 28% меньше ручной координации",
        },
        {
          name: "Дамир Ахметов",
          role: "Маркетолог-консультант",
          initials: "ДА",
          text: "Коммерческие предложения теперь не начинаются с пустого листа. AI берёт контекст из переписки, а мне остаётся довести формулировки и отправить клиенту.",
          result: "КП готово за 12 минут",
        },
        {
          name: "Екатерина Романова",
          role: "Продакт-дизайнер",
          initials: "ЕР",
          text: "Мне нравится, что продукт не пытается быть громким. Он просто тихо убирает операционку: ответы, follow-up, дедлайны, финансы. Стало легче фокусироваться.",
          result: "каждый день начинается с ясного плана",
        },
      ],
    },
    pricing: {
      eyebrow: "Цены",
      title: "Простые и честные цены",
      subtitle: "Начни бесплатно. Масштабируйся по мере роста.",
      popular: "Популярный",
      proValue:
        "Лучший баланс цены и пользы: документы, финансы, ответы и фокус в одном рабочем контуре.",
      alertSuffix: "скоро подключим оформление тарифа",
      plans: [
        {
          name: "Free",
          description: "Для старта и аккуратного теста на реальных клиентах.",
          price: "$0",
          cta: "Начать бесплатно",
          features: [
            "До 3 подключённых источников",
            "20 AI-действий в месяц",
            "Ежедневный brief по задачам",
            "Черновики ответов клиентам",
            "Базовые напоминания об оплатах",
          ],
        },
        {
          name: "Pro",
          description:
            "Оптимальный тариф для фрилансера, который ведёт несколько проектов.",
          price: "$19",
          period: "/мес",
          cta: "Выбрать Pro",
          features: [
            "Безлимитные AI-черновики ответов",
            "Автоматический сбор задач и дедлайнов",
            "Генерация КП, договоров и инвойсов",
            "Финансовые напоминания и follow-up",
            "Аналитика сохранённого времени",
            "Интеграции Telegram, Gmail, Notion, WhatsApp",
          ],
        },
        {
          name: "Team",
          description:
            "Для небольшой команды, студии или консультантов с общими клиентами.",
          price: "$49",
          period: "/мес",
          cta: "Выбрать Team",
          features: [
            "До 8 участников команды",
            "Общий рабочий контекст по клиентам",
            "Роли и доступы для проектов",
            "Командные briefs и статусы",
            "Приоритетная поддержка",
            "Расширенный лимит интеграций",
          ],
        },
      ],
    },
    cases: {
      eyebrow: "Кейсы",
      title: "Реальные результаты фрилансеров и команд",
      subtitle: "Как Nexus AI помогает зарабатывать больше и меньше выгорать",
      before: "До",
      after: "После",
      link: "Смотреть сценарий",
      items: [
        {
          eyebrow: "Фрилансер-дизайнер",
          name: "Алина",
          role: "бренд и UI-дизайн",
          result: "12 часов",
          metric: "сэкономлено в неделю",
          before: "Правки, брифы и сообщения жили в разных местах.",
          after:
            "Nexus AI собирает входящие, готовит ответы и превращает правки в задачи.",
        },
        {
          eyebrow: "Веб-разработчик",
          name: "Илья",
          role: "лендинги и SaaS-интерфейсы",
          result: "3 проекта",
          metric: "закрыты быстрее",
          before: "Дедлайны приходилось сверять вручную в почте и Telegram.",
          after:
            "Задачи, риски и follow-up появляются в утреннем плане без ручного разбора.",
        },
        {
          eyebrow: "Небольшая студия",
          name: "Northline Studio",
          role: "дизайн и разработка",
          result: "+34%",
          metric: "к cashflow",
          before:
            "Счета часто вспоминали только после повторного сообщения клиента.",
          after:
            "Оплаты, инвойсы и мягкие напоминания видны заранее по каждому проекту.",
        },
        {
          eyebrow: "Контент-мейкер",
          name: "Дамир",
          role: "контент и консультации",
          result: "+47%",
          metric: "к доходу за месяц",
          before:
            "Идеи, заявки и КП терялись между заметками, чатами и календарём.",
          after:
            "AI собирает заявки, предлагает следующий шаг и помогает быстрее отправлять предложения.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Часто задаваемые вопросы",
      subtitle: "Всё, что важно знать перед началом",
      items: [
        {
          question: "Как быстро начинается работа после подключения?",
          answer:
            "Обычно первый рабочий brief появляется в течение нескольких минут после подключения источников. Nexus AI сначала считывает контекст, затем аккуратно собирает входящие, задачи, дедлайны и финансовые напоминания.",
        },
        {
          question:
            "Нужно ли платить за интеграции с Telegram, Gmail и Notion?",
          answer:
            "Нет, базовые интеграции входят в тариф. На Free есть лимиты по количеству источников и AI-действий, а на Pro интеграции становятся полноценной частью ежедневного рабочего контура.",
        },
        {
          question: "Могу ли я использовать Nexus AI для команды?",
          answer:
            "Да. Для небольших студий и команд лучше подходит Team: общий контекст по клиентам, командные briefs, роли, доступы и больше лимитов для совместной работы.",
        },
        {
          question: "Что происходит с моими данными? Безопасно ли?",
          answer:
            "Nexus AI работает только с подключёнными тобой источниками и использует данные для подготовки ответов, задач, документов и напоминаний. Доступы можно отключить в любой момент, а чувствительные действия требуют подтверждения.",
        },
        {
          question: "Можно ли отменить подписку в любой момент?",
          answer:
            "Да. Подписку можно отменить без звонков и заявок в поддержку. После отмены тариф остаётся активным до конца оплаченного периода, а затем аккаунт возвращается на доступный план.",
        },
        {
          question: "Поддерживает ли Nexus AI русский язык полностью?",
          answer:
            "Да. Nexus AI понимает русскоязычную переписку, готовит ответы на русском, помогает с КП и документами, а также сохраняет естественный тон общения с клиентами.",
        },
        {
          question:
            "Что если я новичок и плохо разбираюсь в технологиях?",
          answer:
            "Это нормально. Продукт спроектирован так, чтобы старт был спокойным: подключаешь нужные инструменты, выбираешь базовые настройки, а дальше Nexus AI сам показывает первые понятные действия.",
        },
      ],
    },
    footer: {
      description:
        "Спокойный AI-помощник для фрилансеров и небольших команд: сообщения, задачи, документы и оплаты в одном рабочем контуре.",
      navigation: "Навигация",
      navigationAria: "Навигация в футере",
      social: "Соцсети",
      language: "Язык",
      currentLanguage: "Текущий язык",
      copyright: "© 2026 Nexus AI. Все права защищены.",
    },
    backToTop: {
      label: "Наверх",
    },
  },
  en: {
    language: {
      switcherLabel: "Language switcher",
    },
    nav: [
      { label: "Features", href: "#features" },
      { label: "Cases", href: "#cases" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    hero: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      primaryNavigation: "Primary navigation",
      tryFree: "Try for free",
      badge: "AI workspace for independent teams",
      headlineTop: "Nexus AI for people",
      headlineBottom: "who work for themselves",
      subtitle:
        "A personal AI assistant that triages messages, drafts client replies, turns conversations into tasks, and keeps payments visible while you focus on the work.",
      startFree: "Start for free",
      watchDemo: "Watch demo",
      demoAlert: "The demo will be here",
      command: {
        liveWorkspace: "Live workspace",
        synced: "Synced",
        signals: "Signals",
        today: "Today",
        decisions: "7 decisions",
        prepared: "prepared before the first coffee",
        focusSaved: "Focus saved",
        control: "Control",
        cashflow: "Cashflow",
        inbox: [
          "Client: proposal by Friday",
          "Invoice: design system",
          "Deadline: landing v2",
        ],
        actions: [
          {
            title: "Client reply",
            copy: "Calm tone, 15-minute deadline",
            status: "ready",
          },
          {
            title: "Weekly tasks",
            copy: "5 important, 2 can be delegated",
            status: "sorted",
          },
          {
            title: "Project payment",
            copy: "$4,820 expected by May 31",
            status: "tracking",
          },
        ],
        contracts: "Contracts",
        projects: "Projects",
      },
      trust: [
        "Trusted by 12,450 freelancers",
        "4.9/5 average rating",
        "No card required",
      ],
    },
    features: {
      eyebrow: "Nexus AI features",
      title: "Everything a freelancer or independent team needs",
      subtitle:
        "Not another AI chat, but a quiet operations layer: it reads, structures, reminds, and prepares documents before the day starts to scatter.",
      inbox: {
        label: "Replies",
        title: "Messages become ready decisions",
        description:
          "Nexus AI does not just summarize a chat. It understands project context, client tone, and the next best move.",
        beforeLabel: "Before",
        afterLabel: "After Nexus",
        before: "Can we discuss tomorrow? Also, we need a new deadline.",
        after:
          "Reply ready: confirm the window, suggest two slots, and lock the deadline.",
        draft: "Reply draft",
        time: "47 sec",
      },
      tasks: {
        label: "Tasks and deadlines",
        title: "One command center instead of ten open tabs",
        description:
          "Emails, notes, and decisions become a clear plan: what to do, who to answer, where deadlines are risky, and what can wait.",
        badge: "live plan",
        today: "Today",
        actions: "7 actions sorted",
        timeline: [
          { label: "Client brief", value: "high priority" },
          { label: "Proposal and timeline", value: "prepare today" },
          { label: "Invoice", value: "remind tomorrow" },
        ],
      },
      finance: {
        label: "Finance",
        title: "Payments stop getting lost in threads",
        description:
          "Invoices, overdue payments, and gentle follow-ups are visible early, without a manual end-of-month audit.",
        expected: "expected",
        onTime: "on time",
      },
      proposal: {
        label: "Proposals and docs",
        title: "From rough thought to polished proposal",
        description:
          "Proposals, contracts, and commercial offers are built from project context: scope, price, risks, and the next step.",
        ready: "ready in 38 sec",
        fileName: "proposal.md",
      },
      focus: {
        label: "Focus",
        title: "Shows where the day got lighter",
        description:
          "Nexus AI tracks saved hours, repetitive operations, and moments where context switching is draining your focus.",
        saved: "saved today",
      },
      integrations: {
        label: "Integrations",
        title: "Work context gathers itself",
        description:
          "Telegram, Gmail, Notion, and WhatsApp connect into one flow where AI sees the full project, not scattered fragments.",
        note: "One context for the client, task, file, and payment.",
      },
    },
    how: {
      eyebrow: "How it works",
      title: "From chaos to control in 3 simple steps",
      subtitle:
        "Nexus AI quietly connects to your workflow and turns scattered messages into clear next actions.",
      mockupTitle: "Nexus daily brief",
      synced: "synced",
      today: "Today",
      ready: "ready by 09:00",
      morningPack: "Morning pack",
      packDetails: "decisions, deadlines, money",
      steps: [
        {
          number: "01",
          title: "Connect your tools",
          description:
            "Telegram, Gmail, and Notion become one working context without complex setup or manual data transfer.",
        },
        {
          number: "02",
          title: "AI works quietly in the background",
          description:
            "Nexus AI reads signals, highlights what matters, connects tasks to deadlines, and only interrupts when needed.",
        },
        {
          number: "03",
          title: "Receive ready decisions every day",
          description:
            "Every day you get replies, tasks, documents, and reminders assembled into a calm, actionable plan.",
        },
      ],
      brief: [
        { title: "Client reply", detail: "confident tone, 2 options" },
        { title: "Tasks", detail: "5 important, 2 can wait" },
        { title: "Documents", detail: "proposal and invoice ready" },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Freelancers and teams already saving hours every day",
      subtitle:
        "Nexus AI helps keep clients, tasks, and payments in one clear working rhythm.",
      ratingLabel: "5 out of 5",
      items: [
        {
          name: "Alina Morozova",
          role: "Freelance designer",
          initials: "AM",
          text: "I used to lose my mornings to messages, revisions, and client reminders. Nexus AI puts everything into one calm list, and the draft replies already sound like me.",
          result: "6 fewer hours of routine every week",
        },
        {
          name: "Ilya Sokolov",
          role: "Web developer",
          initials: "IS",
          text: "The biggest value is not having to remember who promised what and when a payment is due. The morning brief shows tasks, risks, and money without noise.",
          result: "3 projects delivered without missed deadlines",
        },
        {
          name: "Maria Levina",
          role: "Founder of a small studio",
          initials: "ML",
          text: "We are a small team, so every hour matters. Nexus AI connects chats, Notion, and email so tasks appear where forgotten messages used to live.",
          result: "28% less manual coordination",
        },
        {
          name: "Damir Akhmetov",
          role: "Marketing consultant",
          initials: "DA",
          text: "Commercial proposals no longer start from a blank page. AI pulls context from the conversation, and I just polish the wording before sending.",
          result: "proposal ready in 12 minutes",
        },
        {
          name: "Ekaterina Romanova",
          role: "Product designer",
          initials: "ER",
          text: "I like that the product does not try to be loud. It quietly removes operations: replies, follow-ups, deadlines, payments. It is easier to focus.",
          result: "every day starts with a clear plan",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Simple, honest pricing",
      subtitle: "Start free. Scale as your work grows.",
      popular: "Popular",
      proValue:
        "The best balance of value and speed: documents, payments, replies, and focus in one workspace.",
      alertSuffix: "checkout will be connected soon",
      plans: [
        {
          name: "Free",
          description:
            "For getting started and testing Nexus AI with real clients.",
          price: "$0",
          cta: "Start for free",
          features: [
            "Up to 3 connected sources",
            "20 AI actions per month",
            "Daily task brief",
            "Draft replies for clients",
            "Basic payment reminders",
          ],
        },
        {
          name: "Pro",
          description:
            "The best plan for freelancers running multiple active projects.",
          price: "$19",
          period: "/mo",
          cta: "Choose Pro",
          features: [
            "Unlimited AI reply drafts",
            "Automatic task and deadline capture",
            "Proposal, contract, and invoice generation",
            "Payment reminders and follow-ups",
            "Saved-time analytics",
            "Telegram, Gmail, Notion, WhatsApp integrations",
          ],
        },
        {
          name: "Team",
          description:
            "For small studios and consultants managing shared clients.",
          price: "$49",
          period: "/mo",
          cta: "Choose Team",
          features: [
            "Up to 8 team members",
            "Shared client context",
            "Project roles and permissions",
            "Team briefs and statuses",
            "Priority support",
            "Expanded integration limits",
          ],
        },
      ],
    },
    cases: {
      eyebrow: "Use cases",
      title: "Real results from freelancers and teams",
      subtitle: "How Nexus AI helps people earn more and burn out less",
      before: "Before",
      after: "After",
      link: "View scenario",
      items: [
        {
          eyebrow: "Freelance designer",
          name: "Alina",
          role: "brand and UI design",
          result: "12 hours",
          metric: "saved every week",
          before: "Revisions, briefs, and messages lived in different places.",
          after:
            "Nexus AI collects incoming requests, drafts replies, and turns revisions into tasks.",
        },
        {
          eyebrow: "Web developer",
          name: "Ilya",
          role: "landing pages and SaaS interfaces",
          result: "3 projects",
          metric: "closed faster",
          before:
            "Deadlines had to be checked manually across email and Telegram.",
          after:
            "Tasks, risks, and follow-ups appear in the morning plan without manual sorting.",
        },
        {
          eyebrow: "Small studio",
          name: "Northline Studio",
          role: "design and development",
          result: "+34%",
          metric: "cashflow improvement",
          before: "Invoices were often remembered only after a client follow-up.",
          after:
            "Payments, invoices, and gentle reminders are visible early for every project.",
        },
        {
          eyebrow: "Content creator",
          name: "Damir",
          role: "content and consulting",
          result: "+47%",
          metric: "monthly revenue",
          before: "Ideas, leads, and proposals were scattered across notes and chats.",
          after:
            "AI gathers leads, suggests the next step, and helps send offers faster.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      subtitle: "Everything worth knowing before you start",
      items: [
        {
          question: "How quickly does Nexus AI start working after setup?",
          answer:
            "In most cases, your first working brief appears within a few minutes after connecting sources. Nexus AI reads the context first, then organizes incoming messages, tasks, deadlines, and payment reminders.",
        },
        {
          question: "Do I need to pay extra for Telegram, Gmail, and Notion?",
          answer:
            "No. Core integrations are included in the plan. Free has limits on sources and AI actions, while Pro turns integrations into a full daily operating layer.",
        },
        {
          question: "Can I use Nexus AI with a team?",
          answer:
            "Yes. Team is built for small studios and consultants: shared client context, team briefs, roles, permissions, and higher limits for collaborative work.",
        },
        {
          question: "What happens to my data? Is it safe?",
          answer:
            "Nexus AI works only with sources you connect and uses that data to prepare replies, tasks, documents, and reminders. You can disconnect access at any time, and sensitive actions require confirmation.",
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer:
            "Yes. You can cancel without calls or support tickets. Your plan stays active until the end of the paid period, then the account returns to the available plan.",
        },
        {
          question: "Does Nexus AI fully support English and Russian?",
          answer:
            "Yes. Nexus AI understands both Russian and English conversations, drafts replies, helps with proposals and documents, and preserves a natural client-facing tone.",
        },
        {
          question: "What if I am not technical?",
          answer:
            "That is perfectly fine. Nexus AI is designed for a calm start: connect your tools, choose basic settings, and the product will surface the first clear actions for you.",
        },
      ],
    },
    footer: {
      description:
        "A calm AI assistant for freelancers and small teams: messages, tasks, documents, and payments in one focused workspace.",
      navigation: "Navigation",
      navigationAria: "Footer navigation",
      social: "Social",
      language: "Language",
      currentLanguage: "Current language",
      copyright: "© 2026 Nexus AI. All rights reserved.",
    },
    backToTop: {
      label: "Back to top",
    },
  },
} as const;

export type TranslationDictionary = (typeof translations)[Language];

type LanguageContextValue = {
  currentLang: Language;
  language: Language;
  dict: TranslationDictionary;
  setLanguage: (language: Language) => void;
  setCurrentLang: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
};

const STORAGE_KEY = "nexus-ai-language";

function normalizeLanguage(value: unknown): Language {
  if (typeof value !== "string") {
    return "ru";
  }

  const normalized = value.toLowerCase();
  return normalized === "en" || normalized === "ru" ? normalized : "ru";
}

function getByPath(source: unknown, key: string): unknown {
  return key.split(".").reduce<unknown>((node, part) => {
    if (!node || typeof node !== "object") {
      return undefined;
    }

    return (node as Record<string, unknown>)[part];
  }, source);
}

const fallbackContext: LanguageContextValue = {
  currentLang: "ru",
  language: "ru",
  dict: translations.ru,
  setLanguage: () => undefined,
  setCurrentLang: () => undefined,
  toggleLanguage: () => undefined,
  t: (key, fallback) => fallback ?? key,
};

const LanguageContext = createContext<LanguageContextValue>(fallbackContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLangState] = useState<Language>("ru");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      setCurrentLangState(normalizeLanguage(window.localStorage.getItem(STORAGE_KEY)));
    } catch {
      setCurrentLangState("ru");
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = currentLang;

    if (!isHydrated) {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, currentLang);
    } catch {
      // The UI must keep working even when localStorage is unavailable.
    }
  }, [currentLang, isHydrated]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setCurrentLangState(normalizeLanguage(nextLanguage));
  }, []);

  const toggleLanguage = useCallback(() => {
    setCurrentLangState((language) => (language === "ru" ? "en" : "ru"));
  }, []);

  const dict = translations[currentLang] ?? translations.ru;

  const t = useCallback(
    (key: string, fallback?: string) => {
      const value = getByPath(dict, key);

      if (typeof value === "string") {
        return value;
      }

      const ruValue = getByPath(translations.ru, key);

      if (typeof ruValue === "string") {
        return ruValue;
      }

      return fallback ?? key;
    },
    [dict],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      currentLang,
      language: currentLang,
      dict,
      setLanguage,
      setCurrentLang: setLanguage,
      toggleLanguage,
      t,
    }),
    [currentLang, dict, setLanguage, toggleLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  return useContext(LanguageContext);
}

export const useLanguage = useLanguageContext;
