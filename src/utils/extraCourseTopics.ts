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
    },
    {
      id: 't9_en_past_regular',
      title: 'Past Simple: правильні дієслова',
      description: 'Як розповідати про минулі події: форми, маркери часу та типові помилки',
      order: 9,
      progress: 0,
      subtopics: [
        {
          id: 'st29_en',
          title: 'Коли вживаємо Past Simple',
          type: 'theory',
          order: 1,
          content: '## Призначення часу\n\nPast Simple (простий минулий час) описує **завершені дії в минулому**. Ми вживаємо його, коли подія вже відбулася і має чіткі часові межі.\n\n- I **watched** a film yesterday. — Учора я дивився фільм.\n- She **visited** her grandmother last week. — Минулого тижня вона відвідала бабусю.\n- We **moved** to Kyiv in 2020. — Ми переїхали до Києва у 2020 році.\n\n## Ключові ознаки\n\nЯкщо в реченні є **часовий маркер минулого**, майже завжди потрібен Past Simple.\n\n> Часові маркери: yesterday, last week/month/year, ago, in 2010, when I was a child, at that moment.\n\n## Відмінність від теперішнього\n\n- Present Simple: I **work** every day. (звичка, зараз і завжди)\n- Past Simple: I **worked** yesterday. (одна конкретна дія вчора)'
        },
        {
          id: 'st30_en',
          title: 'Як утворюється форма',
          type: 'theory',
          order: 2,
          content: '## Правильні дієслова\n\nДля більшості дієслів минулий час утворюється додаванням **-ed** до базової форми.\n\n| Дієслово | Past Simple | Переклад |\n|---|---|---|\n| work | worked | працював |\n| play | played | грав |\n| watch | watched | дивився |\n| study | studied | вчився |\n| stop | stopped | зупинився |\n| travel | travelled | подорожував |\n\n## Правила написання -ed\n\n1. Більшість дієслів: просто додаємо **-ed** — work → worked.\n2. Дієслова на **-e**: додаємо лише **-d** — live → lived, like → liked.\n3. Короткі дієслова «приголосна + голосна + приголосна»: подвоюємо останню приголосну — stop → stopped, plan → planned.\n4. Дієслова на **приголосна + y**: **-y → -ied** — study → studied, carry → carried.\n5. Дієслова на **голосна + y**: просто **-ed** — play → played, stay → stayed.\n\n## Вимова закінчення -ed\n\n- **[t]** після глухих приголосних: walked, watched, stopped.\n- **[d]** після дзвінких і голосних: played, lived, opened.\n- **[ɪd]** після t/d: wanted, needed, decided.'
        },
        {
          id: 'st31_en',
          title: 'Заперечення та питання',
          type: 'theory',
          order: 3,
          content: '## Заперечна форма\n\nВикористовуємо допоміжне дієслово **did not (didn\'t)** + базова форма дієслова (без -ed!).\n\n- I **did not watch** the film. = I **didn\'t watch** it.\n- She **did not visit** her grandma. = She **didn\'t visit** her.\n\n> Увага: після didn\'t дієслово завжди в інфінітиві — «didn\'t watched» ❌, правильно «didn\'t watch» ✅.\n\n## Питальна форма\n\n**Did + підмет + базове дієслово?**\n\n- **Did** you **watch** the film? — Так.\n- **Did** she **visit** her grandma? — Ні.\n- **Did** they **play** football? — Так.\n\n## Короткі відповіді\n\n- Yes, I **did**. / No, I **didn\'t**.\n- Yes, she **did**. / No, she **didn\'t**.\n\n## Типова помилка\n\n❌ Did you watched it?\n✅ Did you watch it?\n\n❌ I didn\'t went there.\n✅ I didn\'t go there.'
        },
        {
          id: 'st32_en',
          title: 'Практика: перевір себе',
          type: 'practice',
          order: 4,
          content: '## Вправа 1. Поставте дієслова в Past Simple\n\n1. Yesterday I **___** (play) football with friends.\n2. She **___** (watch) a great film last night.\n3. We **___** (visit) our grandparents on Sunday.\n4. He **___** (not / call) me yesterday.\n5. **___** you **___** (study) English last week?\n\n## Вправа 2. Оберіть правильний варіант\n\n1. I ___ to school yesterday.\n   - a) go  - b) went  - c) gone\n2. She ___ not watch TV last night.\n   - a) did  - b) does  - c) was\n3. ___ they ___ the museum?\n   - a) Did / visit  - b) Do / visited  - c) Did / visited\n\n## Відповіді\n\nВправа 1: 1. played, 2. watched, 3. visited, 4. didn\'t call, 5. Did you study\nВправа 2: 1. b) went, 2. a) did, 3. a) Did / visit'
        }
      ]
    },
    {
      id: 't10_en_past_irregular',
      title: 'Past Simple: неправильні дієслова',
      description: 'Топ найуживаніших irregular verbs та як не плутати їх у мовленні',
      order: 10,
      progress: 0,
      subtopics: [
        {
          id: 'st33_en',
          title: 'Що таке неправильні дієслова',
          type: 'theory',
          order: 1,
          content: '## Суть явища\n\nНевелика група найчастіших англійських дієслів **не додає -ed** у минулому часі, а змінює форму повністю. Їх називають **irregular verbs** (неправильні дієслова).\n\n- go → **went** (не *goed*)\n- buy → **bought** (не *buyed*)\n- see → **saw** (не *seed*)\n\nЦі слова треба **вчити напам\'ять** — правил немає. Хороша новина: найуживаніші з них можна вивчити за тиждень.\n\n## Три форми дієслова\n\nКожне неправильне дієслово має три форми:\n\n1. **Infinitive** — базова (go)\n2. **Past Simple** — простий минулий (went)\n3. **Past Participle** — третя форма, потрібна для Present Perfect (gone)\n\nЗараз зосередимось на другій формі — саме вона потрібна для Past Simple.'
        },
        {
          id: 'st34_en',
          title: 'Топ-20 неправильних дієслів',
          type: 'theory',
          order: 2,
          content: '## Найуживаніші irregular verbs\n\n| Infinitive | Past Simple | Переклад |\n|---|---|---|\n| be | was / were | бути |\n| have | had | мати |\n| do | did | робити |\n| say | said | казати |\n| get | got | отримувати |\n| make | made | робити, готувати |\n| go | went | йти |\n| know | knew | знати |\n| take | took | брати |\n| see | saw | бачити |\n| come | came | приходити |\n| think | thought | думати |\n| give | gave | давати |\n| find | found | знаходити |\n| tell | told | розповідати |\n| become | became | ставати |\n| leave | left | залишати |\n| feel | felt | відчувати |\n| put | put | класти (форма не змінюється!) |\n| buy | bought | купувати |\n\n## Лайфхаки для запам\'ятовування\n\n- **put** — єдина форма однакова в усіх часах: I put, I put, I have put.\n- Групуйте за схожістю: sing–sang–sung, drink–drank–drunk, swim–swam–swum.\n- Тренуйтеся з картками або додатком: 10 слів на день дають результат за 2 тижні.\n\n## Приклади в реченнях\n\n- I **bought** a new phone last week.\n- She **took** the bus to work yesterday.\n- They **didn\'t come** to the party.'
        },
        {
          id: 'st35_en',
          title: 'Як не сплутати форми',
          type: 'practice',
          order: 3,
          content: '## Вправа 1. Вставте правильну форму\n\n1. Yesterday I **___** (buy) bread and milk.\n2. She **___** (see) a great performance last Saturday.\n3. We **___** (not / go) to the cinema yesterday.\n4. **___** he **___** (take) the train this morning?\n5. They **___** (make) dinner for us last night.\n\n## Вправа 2. Перекладіть українською\n\n1. I knew the answer.\n2. She didn\'t tell me the truth.\n3. We left home at 8 o\'clock.\n4. Did you find your keys?\n\n## Відповіді\n\nВправа 1: 1. bought, 2. saw, 3. didn\'t go, 4. Did / take, 5. made\nВправа 2:\n1. Я знав відповідь.\n2. Вона не сказала мені правди.\n3. Ми вийшли з дому о 8-й.\n4. Ти знайшов свої ключі?'
        },
        {
          id: 'st36_en_test',
          title: 'Тест: Past Simple',
          type: 'test',
          order: 4,
          testId: 'test_t8_past'
        }
      ],
      testId: 'test_t8_past'
    },
    {
      id: 't11_en_future',
      title: 'Майбутній час: will та going to',
      description: 'Два способи говорити про майбутнє та коли який вживати',
      order: 11,
      progress: 0,
      subtopics: [
        {
          id: 'st37_en',
          title: 'will — для спонтанних рішень і обіцянок',
          type: 'theory',
          order: 1,
          content: '## Конструкція will\n\n**will + базове дієслово** — однакова форма для всіх осіб. Скорочено: **\'ll**.\n\n- I **will help** you. = I**\'ll help** you. — Я тобі допоможу.\n- She **will call** you tomorrow. — Вона зателефонує тобі завтра.\n- They **will not come**. = They**\'won\'t come**. — Вони не прийдуть.\n\n## Коли вживаємо will\n\n1. **Спонтанне рішення** в момент мовлення:\n   - «The phone is ringing!» — «I **\'ll get** it!»\n2. **Обіцянки та пропозиції**:\n   - I **\'ll buy** you a gift. — Я подарую тобі подарунок.\n   - **Shall** I open the window? — Відчинити вікно?\n3. **Прогнози без доказів**:\n   - I think it **will rain** tomorrow. — Думаю, завтра буде дощ.\n4. **Факти про майбутнє** (розклад):\n   - The train **will leave** at 9 AM.\n\n## Питання та заперечення\n\n- **Will** you **help** me? — Допоможеш мені?\n- **Won\'t** he **come**? — Він не прийде?\n- I **won\'t be** late. — Я не запізнюсь.'
        },
        {
          id: 'st38_en',
          title: 'going to — для планів і намірів',
          type: 'theory',
          order: 2,
          content: '## Конструкція going to\n\n**am/is/are + going to + базове дієслово**\n\n- I **am going to study** medicine. — Я збираюся вчити медицину.\n- She **is going to visit** Paris next month. — Вона планує поїхати до Парижа наступного місяця.\n- We **are going to move** to a new flat. — Ми плануємо переїхати.\n\n## Коли вживаємо going to\n\n1. **Плани та наміри**, прийняті заздалегідь:\n   - I**\'ve decided** — I **am going to learn** Spanish.\n2. **Прогнози на основі очевидних фактів**:\n   - Look at those clouds! It **is going to rain**. — Подивись на хмари! Буде дощ.\n\n## Порівняння will vs going to\n\n| Ситуація | Приклад |\n|---|---|\n| Рішення щойно | «I\'m hungry» — I\'ll order pizza. |\n| План на вихідні | I\'m going to visit my friends. |\n| Обіцянка | I\'ll always love you. |\n| Заброньований квиток | We\'re going to fly to Spain. |\n\n> Порада: якщо рішення прийняте **до моменту розмови** — використовуємо going to. Якщо **приймається зараз** — will.'
        },
        {
          id: 'st39_en',
          title: 'Майбутній час у запитаннях і запереченнях',
          type: 'practice',
          order: 3,
          content: '## Вправа 1. Вставте will або going to\n\n1. A: I haven\'t decided where to spend holidays.\n   B: That\'s easy — you **___** visit your grandparents! (пропозиція)\n2. Look at the sky! It **___** rain. (очевидний прогноз)\n3. I **___** help you with your bags. (спонтанна пропозиція)\n4. We **___** have a party next Saturday. We already sent invitations. (план)\n5. I think robots **___** do all work in 50 years. (прогноз)\n\n## Вправа 2. Перекладіть\n\n1. Я зателефоную тобі завтра.\n2. Ми плануємо поїхати на море влітку.\n3. Обіцяю — я не запізнюся.\n4. Чи підеш ти з нами на концерт?\n\n## Відповіді\n\nВправа 1: 1. will, 2. is going to, 3. will / \'ll, 4. are going to, 5. will\nВправа 2:\n1. I\'ll call you tomorrow.\n2. We\'re going to go to the sea this summer.\n3. I promise — I won\'t be late.\n4. Will you go to the concert with us? / Are you going to go to the concert with us?'
        },
        {
          id: 'st40_en_test',
          title: 'Тест: Майбутній час',
          type: 'test',
          order: 4,
          testId: 'test_t9_future'
        }
      ],
      testId: 'test_t9_future'
    },
    {
      id: 't12_en_modals',
      title: 'Модальні дієслова',
      description: 'can, could, must, have to, should — дозвіл, обов\'язок, порада та можливість',
      order: 12,
      progress: 0,
      subtopics: [
        {
          id: 'st41_en',
          title: 'can та could — можливість і дозвіл',
          type: 'theory',
          order: 1,
          content: '## can — вміння та дозвіл\n\n**can + базове дієслово** — однакова форма для всіх осіб.\n\n- I **can swim**. — Я вмію плавати.\n- **Can** you **help** me? — Можеш допомогти?\n- You **can\'t park** here. — Тут не можна паркуватися.\n\n## could — минуле та ввічливість\n\n**could** — це «минулий can» або ввічливіша форма прохання.\n\n- I **could read** when I was five. — Я вмів читати у п\'ять років.\n- **Could** you **open** the window, please? — Не могли б ви відчинити вікно?\n\n## must vs have to\n\nОбидва означають «мусити», але:\n\n- **must** — внутрішній обов\'язок, сильна впевненість: I **must** finish this today.\n- **have to** — зовнішній обов\'язок, правила: You **have to** wear a uniform.\n\nЗаперечення різні!\n- mustn\'t = **заборонено**: You **mustn\'t** smoke here.\n- don\'t have to = **не обов\'язково**: You **don\'t have to** come. — Можеш не приходити.'
        },
        {
          id: 'st42_en',
          title: 'should — порада та рекомендації',
          type: 'theory',
          order: 2,
          content: '## should / shouldn\'t\n\n**should + базове дієслово** — «слід, варто». Це м\'яка порада, а не наказ.\n\n- You **should see** a doctor. — Тобі варто звернутися до лікаря.\n- We **should leave** now. — Нам варто йти зараз.\n- You **shouldn\'t eat** so much sugar. — Тобі не варто їсти стільки цукру.\n\n## Порівняння модальних дієслів\n\n| Дієслово | Значення | Приклад |\n|---|---|---|\n| can | вмію, можу | I can drive. |\n| could | міг / ввічливо | Could you repeat? |\n| must | повинен (сильно) | I must go now. |\n| have to | треба (правила) | I have to work on Sunday. |\n| should | варто, порада | You should rest. |\n| may / might | можливо | It may rain. |\n\n## Ввічливі формули з модальними\n\n- **May** I come in? — Можна увійти? (дуже ввічливо)\n- **Could** you help me, please? — Не могли б допомогти?\n- You **should** try this café — the coffee is great.'
        },
        {
          id: 'st43_en',
          title: 'Практика: модальні дієслова',
          type: 'practice',
          order: 3,
          content: '## Вправа 1. Виберіть правильне дієслово\n\n1. You ___ wear a helmet when cycling. (must / can / should)\n2. ___ I use your phone? — Sure, go ahead. (Can / Must / Should)\n3. She ___ speak three languages. (can / must / should)\n4. It\'s raining — you ___ take an umbrella. (should / mustn\'t / can\'t)\n5. You ___ smoke here — it\'s forbidden. (mustn\'t / don\'t have to / couldn\'t)\n\n## Вправа 2. Перекладіть\n\n1. Ти повинен вивчати англійську щодня.\n2. Мені доводиться працювати в неділю.\n3. Тобі варто більше спати.\n4. Вчора я не міг відчинити двері.\n\n## Відповіді\n\nВправа 1: 1. must, 2. Can, 3. can, 4. should, 5. mustn\'t\nВправа 2:\n1. You must study English every day.\n2. I have to work on Sunday.\n3. You should sleep more.\n4. Yesterday I couldn\'t open the door.'
        },
        {
          id: 'st44_en_test',
          title: 'Тест: Модальні дієслова',
          type: 'test',
          order: 4,
          testId: 'test_t10_modals'
        }
      ],
      testId: 'test_t10_modals'
    },
    {
      id: 't13_en_prepositions',
      title: 'Прийменники часу та місця',
      description: 'in, on, at — коли який вживати, плюс інші важливі прийменники',
      order: 13,
      progress: 0,
      subtopics: [
        {
          id: 'st45_en',
          title: 'in, on, at — час',
          type: 'theory',
          order: 1,
          content: '## Три прийменники часу\n\n**at** — точний час:\n- at 7 o\'clock, at noon, at night, at midnight, at the moment\n\n**on** — дні та дати:\n- on Monday, on Friday, on my birthday, on 1st May, on Christmas Day\n\n**in** — місяці, роки, пори року, частини дня:\n- in January, in 2024, in summer, in the morning, in five minutes\n\n## Приклади\n\n- The lesson starts **at** 9 AM **on** Tuesday **in** April.\n- I was born **in** 2000 **on** 15th March.\n- We usually go for a walk **in** the evening.\n\n## Порада для запам\'ятовування\n\nДумайте про «розмір» часу: **at** — крапка (точний час), **on** — лінія (день — ніби дата написана на лінії), **in** — об\'єм (місяць, рік, пора року).\n\n## Без прийменника\n\n- this/next/last + час: I\'ll call you **next Monday** (без on!).\n- every + час: **every day**, **every week**.'
        },
        {
          id: 'st46_en',
          title: 'in, on, at — місце',
          type: 'theory',
          order: 2,
          content: '## Прийменники місця\n\n**at** — точка, конкретне місце:\n- at the bus stop, at the door, at home, at work, at the station\n\n**on** — поверхня або вулиця/дорога:\n- on the table, on the wall, on my phone, on Main Street, on the bus/train\n\n**in** — всередині, місто, країна:\n- in the box, in my pocket, in Kyiv, in Ukraine, in the room\n\n## Часті поєднання\n\n- **at** the top/bottom — зверху/знизу\n- **on** the left/right — ліворуч/праворуч\n- **in** front of / behind — попереду/позаду\n- **next to** / **between** — поруч/між\n- **near** / **far from** — біля/далеко від\n\n## Приклади в реченнях\n\n- The keys are **on** the table **in** the kitchen.\n- She works **at** a bank **in** London.\n- The bank is **on** Shevchenko Street **next to** the park.'
        },
        {
          id: 'st47_en',
          title: 'Інші важливі прийменники',
          type: 'theory',
          order: 3,
          content: '## Прийменники напрямку\n\n- **to** — кудись: go **to** school, travel **to** Italy\n- **from** — звідкись: come **from** Ukraine, a letter **from** mom\n- **into** — всередину: go **into** the room\n- **out of** — назовні: get **out of** the car\n\n## Прийменники з дієсловами (запам\'ятати!)\n\n- listen **to** music — слухати музику\n- wait **for** me — чекати мене\n- look **at** — дивитися на\n- look **for** — шукати\n- think **about/of** — думати про\n- talk **about** — говорити про\n- depend **on** — залежати від\n- arrive **at/in** — прибувати (at — точка, in — місто/країна)\n\n## Типова помилка\n\n❌ I\'m listening music.\n✅ I\'m listening **to** music.\n\n❌ She married with him.\n✅ She married **him**. / She got married **to** him.'
        },
        {
          id: 'st48_en',
          title: 'Практика: прийменники',
          type: 'practice',
          order: 4,
          content: '## Вправа 1. Вставте in, on або at\n\n1. The meeting is ___ 3 PM ___ Friday.\n2. My birthday is ___ July.\n3. She lives ___ 15 Baker Street ___ London.\n4. I usually wake up ___ 7 o\'clock ___ weekdays.\n5. We met ___ Christmas ___ 2023.\n\n## Вправа 2. Вставте потрібний прийменник\n\n1. I\'m looking ___ my keys. (for / at / to)\n2. Listen ___ me, please. (to / for / at)\n3. She arrived ___ the airport at 6. (in / at / on)\n4. We\'re going ___ the cinema tonight. (to / in / at)\n5. He\'s good ___ mathematics. (at / in / on)\n\n## Відповіді\n\nВправа 1: 1. at / on, 2. in, 3. at / in, 4. at / on, 5. at / in\nВправа 2: 1. for, 2. to, 3. at, 4. to, 5. at'
        }
      ]
    },
    {
      id: 't14_en_travel',
      title: 'Подорожі та аеропорт',
      description: 'Англійська для подорожей: реєстрація, прикордонний контроль, готель',
      order: 14,
      progress: 0,
      subtopics: [
        {
          id: 'st49_en',
          title: 'В аеропорті: реєстрація',
          type: 'theory',
          order: 1,
          content: '## Реєстрація на рейс (Check-in)\n\n**Ключові фрази:**\n\n- **Where is the check-in desk for** flight 123? — Де стійка реєстрації на рейс 123?\n- I\'d like a **window seat**, please. — Віконне місце, будь ласка.\n- I have **one suitcase** to check in. — Одна валіза в багаж.\n- Could I get a **boarding pass**, please? — Можна посадковий талон?\n\n## Багаж\n\n- Is there a **weight limit** for luggage? — Чи є обмеження за вагою?\n- My bag is **overweight**. — Моя валіза з надлишковою вагою.\n- I\'d like to **pay for extra baggage**. — Хочу оплатити додатковий багаж.\n\n## Контроль безпеки (Security)\n\n- Please take off your **shoes and jacket**. — Зніміть взуття та куртку.\n- Put your **laptop in a separate tray**. — Покладіть ноутбук в окремий лоток.\n- Do you have any **liquids**? — Чи є у вас рідини? (обмеження 100 ml)'
        },
        {
          id: 'st50_en',
          title: 'На борту та в готелі',
          type: 'theory',
          order: 2,
          content: '## На борту літака\n\n- **Fasten your seatbelt**, please. — Пристібайтеся, будь ласка.\n- Would you like a **drink or a snack**? — Бажаєте напій чи щось перекусити?\n- What **time do we land**? — О котрій ми приземляємось?\n- Is **Wi-Fi** available? — Чи є Wi-Fi?\n- Could I have a **blanket**, please? — Можна ковдру?\n\n## У готелі: заселення\n\n- I have a **reservation** under the name Kovalenko. — У мене бронювання на прізвище Коваленко.\n- Do you have a room with a **sea view**? — Чи є кімната з видом на море?\n- What time is **breakfast** served? — О котрій сніданок?\n- Is **Wi-Fi** included? — Чи включений Wi-Fi?\n- Could I get an **extra towel**? — Можна додатковий рушник?\n\n## Корисні слова\n\nreservation — бронювання, luggage — багаж, receipt — чек, single/double room — одне-/двомісний номер, key card — картка-ключ.'
        },
        {
          id: 'st51_en',
          title: 'Практика: діалоги',
          type: 'practice',
          order: 3,
          content: '## Діалог 1. Реєстрація на рейс\n\n**Працівник:** Good morning. May I see your passport and ticket, please?\n**Ви:** Here you are. I\'d like a window seat if possible.\n**Працівник:** Certainly. Do you have any luggage to check in?\n**Ви:** Yes, one suitcase.\n**Працівник:** Please put it on the scale. It\'s 22 kilos — within the limit. Here\'s your boarding pass. Gate B12, boarding at 10:30.\n\n## Діалог 2. У готелі\n\n**Ви:** Hello, I have a reservation for two nights under the name Shevchenko.\n**Адміністратор:** Let me check... Yes, a double room for two nights. Passport, please. Breakfast is included, served from 7 to 10 AM in the restaurant on the ground floor.\n\n## Завдання\n\nСкладіть власний короткий діалог: ви заселяєтеся в готель на 3 ночі, просите номер з видом на місто та запитуєте про сніданок.'
        }
      ]
    },
    {
      id: 't15_en_restaurant',
      title: 'У ресторані та кафе',
      description: 'Замовлення їжі, рахунок і типові ситуації в закладах харчування',
      order: 15,
      progress: 0,
      subtopics: [
        {
          id: 'st52_en',
          title: 'Замовлення та спілкування з офіціантом',
          type: 'theory',
          order: 1,
          content: '## Замовлення\n\n- **A table for two, please.** — Столик на двох, будь ласка.\n- **Could I see the menu, please?** — Можна меню?\n- **What do you recommend?** — Що ви порадите?\n- **I\'ll have the grilled salmon**, please. — Я візьму лосося на грилі.\n- **Could I get a glass of water?** — Можна склянку води?\n\n## Під час їжі\n\n- **Enjoy your meal!** — Смачного!\n- This is **delicious**! — Дуже смачно!\n- Could I get some **more bread**, please? — Можна ще хліба?\n- **Check, please.** — Рахунок, будь ласка.\n\n## Рахунок і чайові\n\n- **Could we have the check, please?** — Можна рахунок?\n- Can I pay **by card**? — Можна карткою?\n- Is **service included**? — Чи включено обслуговування?\n- Keep the **change**. — Решту собі. (чайові)\n\n## Корисні слова\n\nmenu — меню, appetizer — закуска, main course — основна страва, dessert — десерт, bill/check — рахунок, tip — чайові, reservation — бронювання столика.'
        },
        {
          id: 'st53_en',
          title: 'Особливі ситуації та алергії',
          type: 'theory',
          order: 2,
          content: '## Алергії та обмеження\n\n- I\'m **allergic to nuts**. — У мене алергія на горіхи.\n- Does this dish **contain gluten**? — Чи містить ця страва глютен?\n- I **can\'t eat** dairy products. — Я не можу їсти молочні продукти.\n- Is this dish **vegetarian**? — Ця страва вегетаріанська?\n\n## Якщо щось не так\n\n- This isn\'t what I **ordered**. — Це не те, що я замовляв.\n- My **soup is cold**. — Мій суп холодний.\n- Could you **warm it up**, please? — Можна розігріти?\n\n## У кафе\n\n- **For here or to go?** — Тут чи з собою?\n- **One cappuccino and a croissant**, please.\n- **Extra shot**, please. — Подвійна порція еспресо.\n- **Decaf**, please. — Без кофеїну.\n\n## Порада\n\nУ багатьох країнах чайові ~10% від рахунку. У США — 15–20%. У Європі часто вже включено у рахунок (service included).'
        },
        {
          id: 'st54_en',
          title: 'Практика: гра в ресторан',
          type: 'practice',
          order: 3,
          content: '## Завдання 1. Складіть діалог\n\nВи двох в ресторані. Один — офіціант, другий — гість. Використайте щонайменше 6 фраз із теми.\n\n**План діалогу:**\n1. Замовлення столику / привітання\n2. Замовлення страв і напоїв\n3. Питання про рекомендацію\n4. Прохання рахунку\n5. Оплата\n\n## Завдання 2. Перекладіть фрази\n\n1. Що ви порадите на десерт?\n2. У мене алергія на морепродукти.\n3. Чи можна розплатитися готівкою?\n4. Страва була смачною, дякую!\n5. Чи включено чайові в рахунок?\n\n## Відповіді (приклади)\n\n1. What do you recommend for dessert?\n2. I\'m allergic to seafood.\n3. Can I pay in cash?\n4. The dish was delicious, thank you!\n5. Is the tip included in the bill?'
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
