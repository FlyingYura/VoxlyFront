import type { CourseTopic } from '../types';

export const extraTopicsByCourse: Record<string, CourseTopic[]> = {
  '1': [
    {
      id: 't8_en_extra',
      title: 'Present Continuous',
      description: 'Дії, що відбуваються зараз, і плани на найближче майбутнє',
      order: 8,
      progress: 0,
      subtopics: [
        {
          id: 'st27_en',
          title: 'Коли вживаємо Present Continuous',
          type: 'theory',
          order: 1,
          content: 'Present Continuous описує дію в момент мовлення або тимчасову ситуацію.\n\nФормула: to be (am/is/are) + дієслово з -ing.\n- I am reading now. (Я зараз читаю)\n- She is working this week. (Вона працює цього тижня)\n- They are staying at a hotel. (Вони зупинилися в готелі)\n\nТакож час використовують для домовлених планів:\n- We are meeting at 6. (Ми зустрічаємось о 6)\n\nНе вживайте Present Continuous зі статичними дієсловами: know, like, want, believe, belong.'
        },
        {
          id: 'st28_en',
          title: 'Порівняння з Present Simple',
          type: 'theory',
          order: 2,
          content: 'Present Simple = звичка або факт. Present Continuous = зараз або тимчасово.\n\n- I live in Drohobych. (постійно)\n- I am living with friends this month. (тимчасово)\n- He speaks English. (уміння)\n- He is speaking English now. (у цей момент)\n\nМаркери Continuous: now, at the moment, currently, today, this week.\nМаркери Simple: always, usually, every day, on Mondays.'
        }
      ]
    }
  ],
  '2': [
    {
      id: 't_de_modal',
      title: 'Модальні дієслова',
      description: 'können, müssen, wollen, sollen, dürfen у повсякденному та робочому мовленні',
      order: 4,
      progress: 0,
      subtopics: [
        {
          id: 'st_de_modal_1',
          title: 'können і müssen',
          type: 'theory',
          order: 1,
          content: 'Модальні дієслова стоять на другому місці, основне дієслово — в інфінітиві в кінці.\n\nkönnen (могти):\n- Ich kann Deutsch sprechen.\n- Kannst du mir helfen?\n\nmüssen (мусити):\n- Ich muss um 8 Uhr im Büro sein.\n- Wir müssen den Bericht fertig machen.\n\nЗаперечення müssen часто замінюють на nicht müssen (не обов\'язково) або nicht dürfen (заборонено).'
        },
        {
          id: 'st_de_modal_2',
          title: 'wollen, sollen, dürfen',
          type: 'theory',
          order: 2,
          content: 'wollen — хотіти: Ich will in Berlin arbeiten.\nsollen — слід / доручення: Sie sollen den Kunden anrufen.\ndürfen — дозволено: Hier dürfen Sie parken.\n\nУ бізнес-листі часті формули:\n- Könnten Sie bitte...?\n- Ich würde gerne...\n- Wir sollten das bis Freitag klären.'
        }
      ]
    },
    {
      id: 't_de_business',
      title: 'Бізнес-комунікація',
      description: 'Листи, зустрічі, телефон і нейтральний робочий тон',
      order: 5,
      progress: 0,
      subtopics: [
        {
          id: 'st_de_biz_1',
          title: 'Структура ділового листа',
          type: 'theory',
          order: 1,
          content: 'Типова структура:\n1. Anrede: Sehr geehrte Damen und Herren / Sehr geehrte Frau Müller\n2. Anlass: ich schreibe Ihnen bezüglich...\n3. Bitte oder Information\n4. Abschluss: Mit freundlichen Grüßen\n\nКорисні фрази:\n- anbei sende ich Ihnen...\n- Ich bitte um Rückmeldung bis...\n- Vielen Dank im Voraus.'
        },
        {
          id: 'st_de_biz_2',
          title: 'Розмова на нараді',
          type: 'theory',
          order: 2,
          content: 'На нараді знадобляться:\n- Das Ziel des Meetings ist...\n- Ich stimme zu / Ich bin anderer Meinung.\n- Könnten wir das zusammenfassen?\n- Wer übernimmt die nächsten Schritte?\n\nВвічливі перебивання: Entschuldigung, darf ich kurz ergänzen?'
        }
      ]
    }
  ],
  '3': [
    {
      id: 't_fr_travel_extra',
      title: 'Місто, покупки та надзвичайні ситуації',
      description: 'Орієнтування, магазини, аптека, поліція, лікар',
      order: 3,
      progress: 0,
      subtopics: [
        {
          id: 'st_fr_city',
          title: 'Як запитати дорогу',
          type: 'theory',
          order: 1,
          content: 'Питання:\n- Où est la gare ? / Excusez-moi, pour aller à... ?\n- C\'est loin ? / C\'est à gauche ou à droite ?\n\nВідповіді:\n- Tout droit, puis à droite.\n- Au coin de la rue.\n- Prenez le métro ligne 1.\n\nКорисні слова: un plan, un billet, un arrêt, un taxi, un musée, un hôpital.'
        },
        {
          id: 'st_fr_shop',
          title: 'Покупки та ціни',
          type: 'theory',
          order: 2,
          content: 'У магазині:\n- Je cherche... / Vous avez ça en plus petit ?\n- C\'est combien ? / Je peux payer par carte ?\n- Je ne fais que regarder, merci.\n\nЧисла для цін: 12,50 — douze euros cinquante.\nНа ринку часто кажуть: Je voudrais un kilo de pommes.'
        },
        {
          id: 'st_fr_help',
          title: 'Допомога в скруті',
          type: 'theory',
          order: 3,
          content: 'Аптека: J\'ai mal à la tête. Je cherche un médicament contre...\nЛікар: J\'ai besoin d\'un médecin. J\'ai une assurance.\nПоліція / втрата: On m\'a volé le passeport. Où est le commissariat ?\nТелефон екстреної допомоги в ЄС: 112.'
        }
      ]
    }
  ],
  '4': [
    {
      id: 't_es_speech',
      title: 'Розмовні регістри та ідіоми',
      description: 'Нейтральна іспанська, розмовні звороти та типові помилки рівня B2–C1',
      order: 3,
      progress: 0,
      subtopics: [
        {
          id: 'st_es_reg',
          title: 'Tú, usted і тон розмови',
          type: 'theory',
          order: 1,
          content: 'В Іспанії tú поширене навіть у сервісі. В Латинській Америці usted частіше зберігає дистанцію.\n\nФормальні формули:\n- Le agradezco su tiempo.\n- Quedo atento/a a su respuesta.\n\nНеформальні:\n- ¿Qué tal?\n- Nos vemos luego.\n- ¿Me echas una mano?'
        },
        {
          id: 'st_es_idiom',
          title: 'Ідіоми, які варто знати',
          type: 'theory',
          order: 2,
          content: '- estar en las nubes — витати в хмарах\n- no tener ni idea — не мати поняття\n- tirar la toalla — здатися\n- hablar por los codos — багато говорити\n- costar un ojo de la cara — коштувати дуже дорого\n\nВикористовуйте їх обережно в офіційному письмі: там краще нейтральна лексика.'
        }
      ]
    }
  ],
  '5': [
    {
      id: 't_pl_office',
      title: 'Робочий день у Польщі',
      description: 'Офіс, графік, лікарняний, банківські й побутові фрази',
      order: 3,
      progress: 0,
      subtopics: [
        {
          id: 'st_pl_day',
          title: 'Графік, відпустка, лікарняний',
          type: 'theory',
          order: 1,
          content: 'Корисні слова:\n- umowa o pracę — трудовий договір\n- etat — ставка\n- urlop — відпустка\n- zwolnienie lekarskie / L4 — лікарняний\n- nadgodziny — понаднормові\n\nФрази:\n- Chciałbym wziąć urlop od... do...\n- Nie przyjdę jutro, jestem chory.\n- Gdzie mogę podpisać umowę?'
        },
        {
          id: 'st_pl_bank',
          title: 'Банк, оренда, PESEL',
          type: 'theory',
          order: 2,
          content: 'На старті часто потрібні:\n- numer PESEL\n- konto bankowe\n- umowa najmu\n- zaświadczenie o zatrudnieniu\n\nУ банку: Chciałbym otworzyć konto. Potrzebuję karty płatniczej.\nВ оренді: Czy czynsz obejmuje media? Kiedy mogę obejrzeć mieszkanie?'
        }
      ]
    }
  ],
  '6': [
    {
      id: 't_it_everyday',
      title: 'Повсякденна італійська',
      description: 'Кафе, покупки, сім\'я, час і корисні питання',
      order: 3,
      progress: 0,
      subtopics: [
        {
          id: 'st_it_cafe',
          title: 'У барі та магазині',
          type: 'theory',
          order: 1,
          content: 'В Італії каву часто п\'ють стоячи в барі.\n- Un caffè, per favore.\n- Un cappuccino, per favore. (зазвичай зранку)\n- Il conto, per favore.\n\nУ магазині:\n- Quanto costa?\n- Posso provare?\n- Lo prendo. / Ci penso.'
        },
        {
          id: 'st_it_time',
          title: 'Час, дати, зустрічі',
          type: 'theory',
          order: 2,
          content: 'Che ore sono? — Котра година?\nSono le tre. / È l\'una.\nA che ora ci vediamo?\nDomani pomeriggio va bene?\n\nДні: lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica.\nКорисне: scusi, non ho capito. Può ripetere, per favore?'
        }
      ]
    }
  ],
  '7': [
    {
      id: 't_ua_life',
      title: 'Повсякденне спілкування',
      description: 'Магазин, транспорт, дім і ввічливі формули',
      order: 4,
      progress: 0,
      subtopics: [
        {
          id: 'st_ua_shop',
          title: 'У магазині та транспорті',
          type: 'theory',
          order: 1,
          content: 'Магазин:\n- Скільки це коштує?\n- Мені, будь ласка, хліб і молоко.\n- Чи можна карткою?\n\nТранспорт:\n- Де зупинка?\n- Який автобус їде до центру?\n- Одна поїздка, будь ласка.\n- Виходьте на наступній.'
        },
        {
          id: 'st_ua_polite',
          title: 'Ввічливість і типові відповіді',
          type: 'theory',
          order: 2,
          content: 'Прохання пом\'якшують словами будь ласка, чи не могли б ви, даруйте.\n- Даруйте, де тут аптека?\n- Дякую, мені все зрозуміло.\n- На жаль, я ще погано розумію українською. Можна повільніше?\n\nВідповіді: так, ні, можливо, добре, зараз, хвилинку.'
        }
      ]
    }
  ]
};

export const extraCourseDescriptions: Record<string, string> = {
  '1': 'Основи англійської: алфавіт, to be, Present Simple і Continuous, артиклі, множина, прикметники та словник для повсякдення.',
  '2': 'Німецька середнього рівня: артиклі й відмінки, sein/haben, модальні дієслова та робоча комунікація — листи й наради.',
  '3': 'Французька для подорожі: привітання, ресторан, готель, дорога, покупки та що казати в аптеці чи поліції.',
  '4': 'Іспанська продвинутого рівня: складні часи, subjuntivo, література та жива розмовна мова з ідіомами.',
  '5': 'Польська для роботи: листи, співбесіда, офісна лексика, графік, лікарняний, банк і оренда житла.',
  '6': 'Італійська з нуля: вимова, базові фрази, essere/avere та мова кафе, магазину й зустрічей.',
  '7': 'Українська для іноземців: алфавіт, роди й відмінки, часи дієслів і фрази для магазину, транспорту та ввічливого спілкування.'
};
