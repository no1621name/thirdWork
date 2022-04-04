const calculatorStore = {
  namespaced: true,
  state: {
    starsIcons: {
      star1: `
        <path d="M7 0L9.1693 3.73549L13.5 4.58359L10.51 7.74035L11.0172 12L7 10.2155L2.98278 12L3.49 7.74035L0.5 4.58359L4.8307 3.73549L7 0Z" fill="#F2F5FA"/>
      `,
      star2: `
        <path d="M6.5 0L8.6693 3.73549L13 4.58359L10.01 7.74035L10.5172 12L6.5 10.2155L2.48278 12L2.99 7.74035L0 4.58359L4.3307 3.73549L6.5 0Z" fill="#523F79"/>
      `,
    },
    languages: [
      {
        name: 'original-language',
        title: 'Язык оригинала',
        option: 'originalLang',
        list: [
          {
            name: 'English',
            cost: 2,
            short: 'en',
            active: true,
          },
          {
            name: 'Русский',
            cost: 1,
            short: 'ru',
            active: false,
          },
          {
            name: 'Deutsch',
            cost: 3,
            short: 'deu',
            active: false,
          },
        ],
      },
      {
        name: 'translate-language',
        title: 'Язык перевода',
        option: 'translatedLang',
        list: [
          {
            name: 'Русский',
            cost: 1,
            short: 'ru',
            active: true,
          },
          {
            name: 'English',
            cost: 2,
            short: 'en',
            active: false,
          },
        ],
      },
    ],
    themes: [
      {
        name: 'popular',
        difficultStars: '*',
        iconSrc: 'popular-icon',
        text: 'Популярная <br> (без узкой терминологии)',
        cost: 1,
        active: true,
      },
      {
        name: 'economics',
        difficultStars: '**',
        iconSrc: 'economics-icon',
        text: 'Экономическая, <br> юридическая, сайты',
        cost: 2,
        active: false,
      },
      {
        name: 'technologies',
        difficultStars: '***',
        iconSrc: 'techno-icon',
        text: 'Техническая, медицинская, <br> нефтегазовая, <br> художественная',
        cost: 3,
        active: false,
      },
    ],
    forms: [
      {
        name: 'text',
        title: 'Текстовый',
        difficultStars: '*',
        iconSrc: 'textfile-icon',
        text: 'doc, txt, распознаваемый pdf',
        cost: 1,
        active: true,
      },
      {
        name: 'photo',
        title: 'Фото',
        difficultStars: '**',
        iconSrc: 'photofile-icon',
        text: 'jpg, jpеg, png, нераспознаваемый pdf',
        cost: 2,
        active: false,
      },
    ],
    servicesPackages: [
      {
        name: 'base',
        text: 'Базовый',
        packageStars: ['star1'],
        servicesList: [
          {
            name: 'Персональный менеджер',
            allow: true,
          },
          {
            name: 'Редактор',
            allow: false,
          },
          {
            name: 'Переводчик-специалист',
            allow: true,
          },
          {
            name: 'Консультация с носителем',
            allow: false,
          },
          {
            name: 'Корректор',
            allow: true,
          },
          {
            name: 'Приоритетное обслуживание',
            allow: false,
          },
        ],
        cost: 1,
        active: false,
      },
      {
        name: 'expert',
        text: 'Экспертный',
        packageStars: ['star2', 'star2'],
        servicesList: [
          {
            name: 'Персональный менеджер',
            allow: true,
          },
          {
            name: 'Редактор',
            allow: true,
          },
          {
            name: 'Переводчик-специалист',
            allow: true,
          },
          {
            name: 'Консультация с носителем',
            allow: true,
          },
          {
            name: 'Корректор',
            allow: true,
          },
          {
            name: 'Приоритетное обслуживание',
            allow: false,
          },
        ],
        cost: 2,
        active: false,
      },
      {
        name: 'premium',
        text: 'Премиальный',
        packageStars: ['star2', 'star2', 'star2'],
        servicesList: [
          {
            name: 'Персональный менеджер',
            allow: true,
          },
          {
            name: 'Редактор',
            allow: true,
          },
          {
            name: 'Переводчик-специалист',
            allow: true,
          },
          {
            name: 'Консультация с носителем',
            allow: true,
          },
          {
            name: 'Корректор',
            allow: true,
          },
          {
            name: 'Приоритетное обслуживание',
            allow: true,
          },
        ],
        cost: 3,
        active: false,
      },
    ],
    discounts: [
      {
        name: 'coins1',
        cost: 10,
        text: 'Первый заказ',
        active: false,
      },
      {
        name: 'coins2',
        cost: 12,
        text: 'Более 10 страниц в одном заказе',
        active: false,
      },
      {
        name: 'coins3',
        cost: 15,
        text: 'Постоянный клиент (от 100 страниц)',
        active: false,
      },
    ],

    selectedOptions: {
      theme: 1,
      form: 1,
      rangeValue: 1,
      originalLang: 2,
      translateLang: 1,
      servicePackage: null,
      discount: null,
    },
  },
  getters: {
    languages: ({ languages }) => languages,
    themes: ({ themes }) => themes,
    forms: ({ forms }) => forms,
    starsIcons: ({ starsIcons }) => starsIcons,
    servicesPackages: ({ servicesPackages }) => servicesPackages,
    discounts: ({ discounts }) => discounts,
    selectedOptions: ({ selectedOptions }) => selectedOptions,
  },
  mutations: {
    UPDATE_RANGEGLOBALVALUE(state, value) {
      state.selectedOptions.rangeValue = value;
    },
  },
  actions: {
    saveNewRangaValue({ commit }, newValue) {
      commit('UPDATE_RANGEGLOBALVALUE', newValue);
    },
  },
};

export default calculatorStore;
