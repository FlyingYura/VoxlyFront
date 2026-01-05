import type { Course, Instructor, ScheduleItem, LearningMaterial, Test, CourseTopic } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Англійська мова для початківців',
    language: 'Англійська',
    level: 'Початковий',
    duration: '3 місяці',
    price: 550,
    description: 'Основи англійської мови, граматика, розмовна практика',
    instructor: 'Яджак Роксолана',
    studentsCount: 45,
    schedule: [
      { id: 's1', courseId: '1', dayOfWeek: 'Понеділок', time: '18:00', duration: 90, type: 'Лекція' },
      { id: 's2', courseId: '1', dayOfWeek: 'Середа', time: '18:00', duration: 90, type: 'Практика' },
      { id: 's3', courseId: '1', dayOfWeek: 'П\'ятниця', time: '18:00', duration: 60, type: 'Консультація' }
    ],
    roadmap: [
      {
        id: 't1',
        title: 'Вступ до англійської мови',
        description: 'Основи та загальна інформація про англійську мову',
        order: 1,
        progress: 100,
        subtopics: [
          {
            id: 'st1',
            title: 'Що таке англійська мова?',
            type: 'theory',
            content: 'Англійська мова належить до західногерманської групи індоєвропейської мовної сім\'ї. Це рідна мова для близько 400 мільйонів людей, а понад 1.5 мільярда використовують її як другу мову. Англійська є офіційною або однією з офіційних мов у більш ніж 50 країнах світу, включаючи Великобританію, США, Канаду, Австралію, Нову Зеландію та багато інших.\n\nІсторія англійської мови почалася в V столітті, коли германські племена (англи, сакси, юти) вторглися на Британські острови. Староанглійська мова (450-1100) була схожа на німецьку та інші германські мови. Після норманського завоювання в 1066 році англійська вбрала в себе багато французьких слів, що створило середньоанглійську мову (1100-1500).\n\nСучасна англійська мова розвинулася в ранньосучасний період (1500-1800) і продовжує еволюціонувати. Вона має найбільший словниковий запас серед усіх мов світу - понад 1 мільйон слів. Англійська стала міжнародною мовою бізнесу, науки, технологій, авіації та розваг.',
            order: 1
          },
          {
            id: 'st2',
            title: 'Алфавіт та вимова',
            type: 'theory',
            content: 'Англійський алфавіт складається з 26 букв латинського алфавіту: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.\n\nВимова англійської мови може бути складною для новачків, оскільки правопис та вимова часто не збігаються. Наприклад, слово "through" (через) вимовляється як [θruː], а не так, як написано.\n\nВажливі правила вимови:\n- Голосні букви мають довгі та короткі звуки\n- Буквосполучення "th" вимовляється як [θ] (think) або [ð] (this)\n- Буква "r" в кінці слова не вимовляється в британській англійській, але вимовляється в американській\n- Буквосполучення "ough" може вимовлятися по-різному в різних словах (though, through, cough, rough)\n\nДля покращення вимови важливо слухати носіїв мови та практикуватися щодня. Використання фонетичної транскрипції допомагає краще розуміти правильну вимову.',
            order: 2
          },
          {
            id: 'st3',
            title: 'Базові фрази та привітання',
            type: 'theory',
            content: 'Вміння вітатися та прощатися - це основа будь-якої мови. Ось основні фрази англійською:\n\nПривітання:\n- Hello! / Hi! - Привіт!\n- Good morning! - Доброго ранку! (до 12:00)\n- Good afternoon! - Доброго дня! (12:00-17:00)\n- Good evening! - Добрий вечір! (після 17:00)\n- Nice to meet you! - Приємно познайомитися!\n\nПитання про стан справ:\n- How are you? - Як справи?\n- How are you doing? - Як твої справи?\n- How\'s it going? - Як справи? (неформально)\n- What\'s up? - Що нового? (дуже неформально)\n\nВідповіді:\n- I\'m fine, thank you. - Я добре, дякую.\n- Very well, thanks. - Дуже добре, дякую.\n- Not bad. - Не погано.\n- So-so. - Так собі.\n\nПрощання:\n- Goodbye! - До побачення!\n- Bye! / Bye-bye! - Бувай! (неформально)\n- See you! - До зустрічі!\n- See you later! - Побачимось пізніше!\n- Have a nice day! - Гарного дня!\n\nВвічливі слова:\n- Please - Будь ласка (прохання)\n- Thank you / Thanks - Дякую\n- You\'re welcome - Будь ласка (відповідь на дяку)\n- Excuse me - Вибачте (звернути увагу)\n- Sorry - Вибачте (вибачення)\n- Pardon me - Вибачте',
            order: 3
          },
          {
            id: 'st4_test1',
            title: 'Тест: Вступ до англійської мови',
            type: 'test',
            order: 4,
            testId: 'test_t1'
          }
        ]
      },
      {
        id: 't2',
        title: 'Дієслово "to be"',
        description: 'Вивчення дієслова "to be" та його форм',
        order: 2,
        progress: 75,
        subtopics: [
          {
            id: 'st5',
            title: 'Визначення та використання дієслова "to be"',
            type: 'theory',
            content: 'Дієслово "to be" (бути) - це найважливіше дієслово в англійській мові. Воно використовується для:\n1. Опису стану або характеристики: "I am happy" (Я щасливий)\n2. Вказання місця: "She is in London" (Вона в Лондоні)\n3. Вказання віку: "I am 25 years old" (Мені 25 років)\n4. Опису професії: "He is a teacher" (Він вчитель)\n5. Вказання національності: "We are Ukrainian" (Ми українці)\n6. Опису погоди: "It is sunny" (Сонячно)\n\nДієслово "to be" є неправильним дієсловом - воно не додає -s, -ed, -ing, а має свої унікальні форми.',
            order: 1
          },
          {
            id: 'st6',
            title: 'Форми дієслова "to be" в Present Simple',
            type: 'theory',
            content: 'У теперішньому часі (Present Simple) дієслово "to be" має три форми:\n\nАФФІРМАТИВНА ФОРМА (стверджувальна):\n- I am (я є)\n- You are (ти є)\n- He/She/It is (він/вона/воно є)\n- We are (ми є)\n- You are (ви є)\n- They are (вони є)\n\nПриклади:\n- I am a student. (Я студент)\n- You are my friend. (Ти мій друг)\n- He is a doctor. (Він лікар)\n- She is beautiful. (Вона красива)\n- It is a book. (Це книга)\n- We are happy. (Ми щасливі)\n- They are teachers. (Вони вчителі)\n\nЗАПЕРЕЧНА ФОРМА (negative):\nДодаємо "not" після дієслова:\n- I am not\n- You are not (aren\'t)\n- He/She/It is not (isn\'t)\n- We are not (aren\'t)\n- They are not (aren\'t)\n\nПриклади:\n- I am not tired. (Я не втомлений)\n- You aren\'t late. (Ти не запізнився)\n- He isn\'t at home. (Його немає вдома)\n\nПИТАЛЬНА ФОРМА (interrogative):\nВиносимо дієслово на початок речення:\n- Am I?\n- Are you?\n- Is he/she/it?\n- Are we/you/they?\n\nПриклади:\n- Am I right? (Я правий?)\n- Are you ready? (Ти готовий?)\n- Is she your sister? (Вона твоя сестра?)',
            order: 2
          },
          {
            id: 'st7',
            title: 'Форми дієслова "to be" в Past Simple',
            type: 'theory',
            content: 'У минулому часі (Past Simple) дієслово "to be" має дві форми:\n\nАФФІРМАТИВНА ФОРМА:\n- I was (я був/була)\n- You were (ти був/була)\n- He/She/It was (він/вона/воно був/була/було)\n- We were (ми були)\n- You were (ви були)\n- They were (вони були)\n\nПриклади:\n- I was at home yesterday. (Я був вдома вчора)\n- You were late. (Ти запізнився)\n- He was a teacher. (Він був вчителем)\n- We were friends. (Ми були друзями)\n\nЗАПЕРЕЧНА ФОРМА:\n- I was not (wasn\'t)\n- You were not (weren\'t)\n- He/She/It was not (wasn\'t)\n- We/You/They were not (weren\'t)\n\nПриклади:\n- I wasn\'t there. (Мене там не було)\n- They weren\'t happy. (Вони не були щасливі)\n\nПИТАЛЬНА ФОРМА:\n- Was I/he/she/it?\n- Were you/we/they?\n\nПриклади:\n- Was he at school? (Він був у школі?)\n- Were you tired? (Ти був втомлений?)',
            order: 3
          },
          {
            id: 'st8_test2',
            title: 'Тест: Дієслово "to be"',
            type: 'test',
            order: 4,
            testId: 'test_t2'
          }
        ],
        testId: 'test_t2'
      },
      {
        id: 't3',
        title: 'Present Simple',
        description: 'Вивчення теперішнього простого часу',
        order: 3,
        progress: 0,
        subtopics: [
          {
            id: 'st9',
            title: 'Визначення та використання Present Simple',
            type: 'theory',
            content: 'Present Simple (Теперішній простий час) використовується для:\n\n1. Регулярних дій та звичок:\n- "I wake up at 7 AM every day." (Я прокидаюся о 7 ранку кожного дня)\n- "She drinks coffee in the morning." (Вона п\'є каву вранці)\n\n2. Фактів та загальних істин:\n- "The sun rises in the east." (Сонце сходить на сході)\n- "Water boils at 100 degrees." (Вода кипить при 100 градусах)\n\n3. Постійних станів:\n- "I live in Kyiv." (Я живу в Києві)\n- "She works at a hospital." (Вона працює в лікарні)\n\n4. Розкладу та розпорядку:\n- "The train leaves at 9 PM." (Поїзд відходить о 9 вечора)\n- "Classes start at 8 AM." (Заняття починаються о 8 ранку)\n\n5. Коментарів під час спорту або шоу:\n- "He kicks the ball." (Він б\'є по м\'ячу)\n- "She sings beautifully." (Вона співає красиво)',
            order: 1
          },
          {
            id: 'st10',
            title: 'Утворення Present Simple',
            type: 'theory',
            content: 'АФФІРМАТИВНА ФОРМА (стверджувальна):\n\nДля більшості дієслів використовується базова форма (інфінітив без "to"):\n- I/You/We/They + дієслово: "I work", "You play", "We study"\n\nДля третьої особи однини (he, she, it) додається -s або -es:\n- He/She/It + дієслово + s/es: "He works", "She plays", "It starts"\n\nПравила додавання -s/-es:\n1. Більшість дієслів: додаємо -s (work → works, play → plays)\n2. Дієслова на -s, -ss, -sh, -ch, -x, -o: додаємо -es (go → goes, watch → watches)\n3. Дієслова на -y після приголосної: -y → -ies (study → studies, fly → flies)\n4. Дієслова на -y після голосної: додаємо -s (play → plays, stay → stays)\n\nЗАПЕРЕЧНА ФОРМА:\nВикористовуємо do/does + not + базова форма дієслова:\n- I/You/We/They + do not (don\'t) + дієслово\n- He/She/It + does not (doesn\'t) + дієслово\n\nПриклади:\n- "I don\'t like coffee." (Я не люблю каву)\n- "She doesn\'t speak French." (Вона не розмовляє французькою)\n\nПИТАЛЬНА ФОРМА:\nDo/Does + підмет + базова форма дієслова?\n- Do I/you/we/they + дієслово?\n- Does he/she/it + дієслово?\n\nПриклади:\n- "Do you speak English?" (Ви розмовляєте англійською?)\n- "Does he work here?" (Він працює тут?)',
            order: 2
          },
          {
            id: 'st11',
            title: 'Часові маркери для Present Simple',
            type: 'theory',
            content: 'З Present Simple часто використовуються часові маркери (adverbs of frequency):\n\nЧастотні прислівники:\n- always (завжди) - 100%\n- usually (зазвичай) - 90%\n- often (часто) - 70%\n- sometimes (іноді) - 50%\n- rarely (рідко) - 20%\n- never (ніколи) - 0%\n\nПриклади:\n- "I always brush my teeth in the morning." (Я завжди чищу зуби вранці)\n- "She usually arrives on time." (Вона зазвичай приходить вчасно)\n- "They sometimes go to the cinema." (Вони іноді ходять в кіно)\n\nІнші часові маркери:\n- every day/week/month/year (кожного дня/тижня/місяця/року)\n- on Mondays (по понеділках)\n- in the morning/afternoon/evening (вранці/вдень/ввечері)\n- at night (вночі)\n- once/twice/three times a week (раз/двічі/тричі на тиждень)\n\nПриклади:\n- "I go to the gym three times a week." (Я ходжу в спортзал тричі на тиждень)\n- "They visit their parents every Sunday." (Вони відвідують батьків кожну неділю)',
            order: 3
          },
          {
            id: 'st12_test3',
            title: 'Тест: Present Simple',
            type: 'test',
            order: 4,
            testId: 'test_t3'
          }
        ],
        testId: 'test_t3'
      },
      {
        id: 't4',
        title: 'Артиклі (a, an, the)',
        description: 'Вивчення визначених та невизначених артиклів',
        order: 4,
        progress: 0,
        subtopics: [
          {
            id: 'st13',
            title: 'Невизначені артиклі: a та an',
            type: 'theory',
            content: 'Невизначені артиклі "a" та "an" використовуються перед іменниками однини, які є загальними та неконкретними.\n\nПРАВИЛА ВИКОРИСТАННЯ:\n\n"a" - використовується перед словами, які починаються з приголосного звуку:\n- a book (книга)\n- a car (машина)\n- a university (університет) - слово починається з букви "u", але звук [ju:] є приголосним\n- a one-way street (одностороння вулиця) - "one" починається з звуку [w]\n\n"an" - використовується перед словами, які починаються з голосного звуку:\n- an apple (яблуко)\n- an hour (година) - "h" не вимовляється\n- an honest man (чесна людина) - "h" не вимовляється\n- an umbrella (парасолька)\n\nВАЖЛИВО: Керуємося ЗВУКОМ, а не буквою!\n\nВИКОРИСТАННЯ:\n1. Перша згадка предмета: "I saw a cat." (Я бачив кішку)\n2. Професія: "She is a teacher." (Вона вчитель)\n3. Одиниця виміру: "twice a week" (двічі на тиждень)\n4. Перед числівниками: "a hundred" (сто)\n\nНЕ використовується:\n- Перед множиною: "cats" (не "a cats")\n- Перед незлічуваними іменниками: "water" (не "a water")\n- Перед конкретними іменниками: "Kyiv" (не "a Kyiv")',
            order: 1
          },
          {
            id: 'st14',
            title: 'Визначений артикль: the',
            type: 'theory',
            content: 'Визначений артикль "the" використовується перед іменниками, коли ми говоримо про конкретну, відому річ або особу.\n\nВИКОРИСТАННЯ:\n\n1. Конкретний предмет (який вже згадувався):\n- "I saw a cat. The cat was black." (Я бачив кішку. Кішка була чорною)\n\n2. Єдиний в своєму роді предмет:\n- "the sun" (сонце)\n- "the moon" (місяць)\n- "the Earth" (Земля)\n\n3. Географічні назви:\n- Океани, моря: "the Atlantic Ocean", "the Black Sea"\n- Ріки: "the Dnipro", "the Thames"\n- Гори (множина): "the Alps", "the Carpathians"\n- Країни (множина або зі словами): "the United States", "the Netherlands"\n- Регіони: "the Middle East", "the Far East"\n\n4. Музичні інструменти:\n- "I play the piano." (Я граю на піаніно)\n\n5. Прикметники у значенні множини:\n- "the rich" (багаті), "the poor" (бідні)\n\n6. Театри, музеї, готелі:\n- "the National Opera", "the Louvre"\n\nНЕ використовується:\n- Перед іменами власними: "John", "Mary", "Kyiv"\n- Перед назвами країн (одиничними): "Ukraine", "Poland"\n- Перед назвами мов: "English", "French"\n- Перед назвами спорту: "football", "tennis"\n- Перед назвами їжі (загалом): "I like bread." (Я люблю хліб)',
            order: 2
          },
          {
            id: 'st15',
            title: 'Випадки відсутності артикля (Zero Article)',
            type: 'theory',
            content: 'Іноді артикль не використовується взагалі. Це називається "zero article".\n\nВИПАДКИ БЕЗ АРТИКЛЯ:\n\n1. Незлічувані іменники (загалом):\n- "Water is important." (Вода важлива)\n- "I like coffee." (Я люблю каву)\n- "She has long hair." (У неї довге волосся)\n\n2. Множина (загалом):\n- "Cats are independent." (Кішки незалежні)\n- "Children play outside." (Діти грають на вулиці)\n\n3. Назви мов:\n- "I speak English." (Я розмовляю англійською)\n- "She studies French." (Вона вивчає французьку)\n\n4. Назви країн, міст:\n- "I live in Ukraine." (Я живу в Україні)\n- "They visited Paris." (Вони відвідали Париж)\n\n5. Назви днів тижня, місяців:\n- "Monday is the first day." (Понеділок - перший день)\n- "January is cold." (Січень холодний)\n\n6. Назви їжі (загалом):\n- "Breakfast is ready." (Сніданок готовий)\n- "I don\'t like fish." (Я не люблю рибу)\n\n7. Назви професій (з дієсловом be):\n- "He is doctor." (Він лікар) - але "He is a doctor" також правильно\n\n8. Вирази з "to go/to be + місце":\n- "go to school/church/hospital" (ходити в школу/церкву/лікарню)\n- "at home/work" (вдома/на роботі)',
            order: 3
          },
          {
            id: 'st16_test4',
            title: 'Тест: Артиклі',
            type: 'test',
            order: 4,
            testId: 'test_t4'
          }
        ],
        testId: 'test_t4'
      },
      {
        id: 't5',
        title: 'Множина іменників',
        description: 'Вивчення правил утворення множини іменників',
        order: 5,
        progress: 0,
        subtopics: [
          {
            id: 'st17',
            title: 'Правильна множина: додавання -s та -es',
            type: 'theory',
            content: 'Більшість іменників утворюють множину шляхом додавання -s до однини.\n\nОСНОВНІ ПРАВИЛА:\n\n1. Більшість іменників: додаємо -s\n- cat → cats (кішки)\n- book → books (книги)\n- table → tables (столи)\n- dog → dogs (собаки)\n\n2. Іменники на -s, -ss, -sh, -ch, -x, -o: додаємо -es\n- bus → buses (автобуси)\n- class → classes (класи)\n- dish → dishes (тарілки)\n- watch → watches (годинники)\n- box → boxes (коробки)\n- potato → potatoes (картопля)\n- tomato → tomatoes (помідори)\n\nВИНЯТОК: Деякі слова на -o додають лише -s:\n- photo → photos (фотографії)\n- piano → pianos (піаніно)\n- radio → radios (радіо)\n\n3. Іменники на -y після приголосної: -y → -ies\n- city → cities (міста)\n- baby → babies (немовлята)\n- country → countries (країни)\n- party → parties (вечірки)\n\n4. Іменники на -y після голосної: додаємо -s\n- boy → boys (хлопці)\n- toy → toys (іграшки)\n- key → keys (ключі)\n\n5. Іменники на -f або -fe: -f/-fe → -ves\n- leaf → leaves (листя)\n- knife → knives (ножі)\n- wife → wives (дружини)\n- life → lives (життя)\n\nВИНЯТКИ (додають -s):\n- roof → roofs (дахи)\n- belief → beliefs (переконання)\n- chief → chiefs (начальники)',
            order: 1
          },
          {
            id: 'st18',
            title: 'Неправильна множина (irregular plurals)',
            type: 'theory',
            content: 'Деякі іменники мають неправильну форму множини - вони змінюються повністю або залишаються незмінними.\n\nНЕПРАВИЛЬНА МНОЖИНА:\n\n1. Зміна голосної (vowel change):\n- man → men (чоловіки)\n- woman → women (жінки)\n- foot → feet (ноги)\n- tooth → teeth (зуби)\n- goose → geese (гуси)\n- mouse → mice (миші)\n\n2. Додавання -en:\n- child → children (діти)\n- ox → oxen (воли) - рідко вживається\n\n3. Однакова форма однини та множини:\n- sheep → sheep (вівці)\n- deer → deer (олені)\n- fish → fish (риби) - але "fishes" можливо для різних видів\n- aircraft → aircraft (літаки)\n- species → species (види)\n\n4. Слова латинського походження:\n- criterion → criteria (критерії)\n- phenomenon → phenomena (явища)\n- curriculum → curricula (навчальні програми)\n- analysis → analyses (аналізи)\n- basis → bases (основи)\n- thesis → theses (тези)\n\n5. Слова грецького походження:\n- crisis → crises (кризи)\n- diagnosis → diagnoses (діагнози)',
            order: 2
          },
          {
            id: 'st19',
            title: 'Незлічувані іменники (Uncountable nouns)',
            type: 'theory',
            content: 'Незлічувані іменники (uncountable nouns) не мають множини та завжди вживаються в однині.\n\nКАТЕГОРІЇ НЕЗЛІЧУВАНИХ ІМЕННИКІВ:\n\n1. Речовини та матеріали:\n- water (вода)\n- milk (молоко)\n- sugar (цукор)\n- rice (рис)\n- gold (золото)\n- wood (деревина)\n\n2. Абстрактні поняття:\n- love (кохання)\n- happiness (щастя)\n- information (інформація)\n- advice (порада)\n- knowledge (знання)\n- music (музика)\n\n3. Види діяльності:\n- work (робота)\n- homework (домашнє завдання)\n- research (дослідження)\n- progress (прогрес)\n\n4. Природа та погода:\n- weather (погода)\n- rain (дощ)\n- snow (сніг)\n- thunder (грім)\n\n5. Поля знань:\n- English (англійська мова)\n- mathematics (математика)\n- physics (фізика)\n\nВАЖЛИВО:\nЩоб порахувати незлічувані іменники, використовуємо слова-лічильники:\n- a cup of coffee (чашка кави)\n- a piece of advice (порада)\n- a bottle of water (пляшка води)\n- a loaf of bread (хлібина)\n- a bar of chocolate (плитка шоколаду)\n\nДеякі слова можуть бути злічуваними та незлічуваними залежно від значення:\n- time (час) - незлічуване, але "times" (рази) - злічуване\n- paper (папір) - незлічуване, але "papers" (документи) - злічуване',
            order: 3
          },
          {
            id: 'st20_test5',
            title: 'Тест: Множина іменників',
            type: 'test',
            order: 4,
            testId: 'test_t5'
          }
        ],
        testId: 'test_t5'
      },
      {
        id: 't6',
        title: 'Прикметники та ступені порівняння',
        description: 'Вивчення прикметників та їх порівняння',
        order: 6,
        progress: 0,
        subtopics: [
          {
            id: 'st21',
            title: 'Визначення та використання прикметників',
            type: 'theory',
            content: 'Прикметник (adjective) - це слово, яке описує іменник або займенник. В англійській мові прикметник зазвичай стоїть ПЕРЕД іменником.\n\nПРИКЛАДИ:\n- "a beautiful flower" (красива квітка)\n- "a big house" (великий дім)\n- "an interesting book" (цікава книга)\n- "tall people" (високі люди)\n\nПрикметник може також стояти ПІСЛЯ дієслова "to be" або інших дієслів-зв\'язок:\n- "The flower is beautiful." (Квітка красива)\n- "I am happy." (Я щасливий)\n- "She looks tired." (Вона виглядає втомленою)\n\nВИДИ ПРИКМЕТНИКІВ:\n\n1. Якісні прикметники (описують якість):\n- big, small, beautiful, ugly, good, bad, happy, sad\n\n2. Кількісні прикметники (описують кількість):\n- many, few, much, little, some, any\n\n3. Порядкові прикметники (описують порядок):\n- first, second, third, last, next\n\n4. Вказівні прикметники:\n- this, that, these, those\n\n5. Присвійні прикметники:\n- my, your, his, her, its, our, their',
            order: 1
          },
          {
            id: 'st22',
            title: 'Порівняльний та найвищий ступінь',
            type: 'theory',
            content: 'ПОРІВНЯЛЬНИЙ СТУПІНЬ (Comparative):\n\n1. Односкладові прикметники: -er\n- tall → taller (вищий), big → bigger (більший), nice → nicer (кращий)\n\n2. Двоскладові на -y: -er\n- easy → easier (легший), happy → happier (щасливіший)\n\n3. Двоскладові та багатоскладові: more + прикметник\n- beautiful → more beautiful (красивіший)\n\n4. Неправильні: good → better, bad → worse, far → farther\n\nНАЙВИЩИЙ СТУПІНЬ (Superlative):\n\n1. Односкладові: the + -est\n- tall → the tallest (найвищий)\n\n2. Двоскладові на -y: the + -est\n- easy → the easiest (найлегший)\n\n3. Багатоскладові: the most + прикметник\n- beautiful → the most beautiful (найкрасивіший)\n\n4. Неправильні: good → the best, bad → the worst',
            order: 2
          },
          {
            id: 'st23_test6',
            title: 'Тест: Прикметники',
            type: 'test',
            order: 3,
            testId: 'test_t6'
          }
        ],
        testId: 'test_t6'
      },
      {
        id: 't7',
        title: 'Основний словник та фрази',
        description: 'Базові слова та фрази для спілкування',
        order: 7,
        progress: 0,
        subtopics: [
          {
            id: 'st24',
            title: 'Числа, кольори, родина',
            type: 'theory',
            content: 'ЧИСЛА: 1-10 (one, two, three...), 11-19 (eleven, twelve...), десятки (twenty, thirty...), hundred, thousand\n\nКОЛЬОРИ: red, blue, green, yellow, orange, purple, pink, black, white, gray\n\nРОДИНА: father, mother, son, daughter, brother, sister, grandfather, grandmother, uncle, aunt, cousin, husband, wife',
            order: 1
          },
          {
            id: 'st25',
            title: 'Їжа та місто',
            type: 'theory',
            content: 'ЇЖА: bread, butter, cheese, milk, meat, chicken, fish, egg, apple, banana, rice, pasta, soup, salad\n\nМІСТО: city, street, building, house, shop, supermarket, bank, school, hospital, park, museum\n\nТРАНСПОРТ: bus, train, car, taxi, bicycle, plane, metro\n\nФРАЗИ: "How do I get to...?", "Where is...?", "What time...?", "Turn left/right", "Go straight ahead"',
            order: 2
          },
          {
            id: 'st26_test7',
            title: 'Тест: Словник',
            type: 'test',
            order: 3,
            testId: 'test_t7'
          }
        ],
        testId: 'test_t7'
      }
    ],
    tests: [
      {
        id: 'test_t1',
        courseId: '1',
        title: 'Тест: Вступ до англійської мови',
        description: 'Перевірте знання основ англійської мови, алфавіту та базових фраз',
        timeLimit: 25,
        questions: [
          {
            id: 'q_en_t1_1',
            question: 'Скільки букв в англійському алфавіті?',
            type: 'single',
            options: ['24', '25', '26', '27'],
            correctAnswer: '26',
            points: 10
          },
          {
            id: 'q_en_t1_2',
            question: 'Як правильно привітатися англійською вранці?',
            type: 'single',
            options: ['Good night', 'Good morning', 'Good evening', 'Good afternoon'],
            correctAnswer: 'Good morning',
            points: 10
          },
          {
            id: 'q_en_t1_3',
            question: 'Як сказати "Приємно познайомитися"?',
            type: 'single',
            options: ['Nice to meet you', 'Nice meeting you', 'Nice to see you', 'Nice to know you'],
            correctAnswer: 'Nice to meet you',
            points: 10
          },
          {
            id: 'q_en_t1_4',
            question: 'Як відповісти на "How are you?"?',
            type: 'multiple',
            options: ['I\'m fine, thank you', 'Very well, thanks', 'So-so', 'Not bad'],
            correctAnswer: ['I\'m fine, thank you', 'Very well, thanks', 'Not bad'],
            points: 15
          },
          {
            id: 'q_en_t1_5',
            question: 'Як сказати "Дякую" англійською?',
            type: 'single',
            options: ['Please', 'Thank you', 'You\'re welcome', 'Excuse me'],
            correctAnswer: 'Thank you',
            points: 10
          },
          {
            id: 'q_en_t1_6',
            question: 'Скільки людей розмовляють англійською як другою мовою (приблизно)?',
            type: 'single',
            options: ['500 мільйонів', '1 мільярд', '1.5 мільярди', '2 мільярди'],
            correctAnswer: '1.5 мільярди',
            points: 10
          },
          {
            id: 'q_en_t1_7',
            question: 'Як сказати "Будь ласка" у відповідь на дяку?',
            type: 'single',
            options: ['Please', 'You\'re welcome', 'Thanks', 'Excuse me'],
            correctAnswer: 'You\'re welcome',
            points: 10
          },
          {
            id: 'q_en_t1_8',
            question: 'Перекладіть: "До побачення"',
            type: 'text',
            correctAnswer: 'Goodbye',
            points: 10
          },
          {
            id: 'q_en_t1_9',
            question: 'Як сказати "Вибачте" коли хочете звернути увагу?',
            type: 'single',
            options: ['Sorry', 'Excuse me', 'Pardon me', 'I beg your pardon'],
            correctAnswer: 'Excuse me',
            points: 10
          },
          {
            id: 'q_en_t1_10',
            question: 'До якої мовної сім\'ї належить англійська мова?',
            type: 'single',
            options: ['Романська', 'Слов\'янська', 'Германська', 'Кельтська'],
            correctAnswer: 'Германська',
            points: 10
          }
        ]
      },
      {
        id: 'test_t2',
        courseId: '1',
        title: 'Тест: Дієслово "to be"',
        description: 'Перевірте знання дієслова to be в різних формах',
        timeLimit: 30,
        questions: [
          {
            id: 'q_en_t2_1',
            question: 'Яка форма "to be" для "I" в Present Simple?',
            type: 'single',
            options: ['is', 'am', 'are', 'be'],
            correctAnswer: 'am',
            points: 10
          },
          {
            id: 'q_en_t2_2',
            question: 'Оберіть правильні форми "to be" для he/she/it',
            type: 'multiple',
            options: ['is', 'am', 'are', 'was'],
            correctAnswer: ['is', 'was'],
            points: 15
          },
          {
            id: 'q_en_t2_3',
            question: 'Яка заперечна форма: "I ___ tired"?',
            type: 'single',
            options: ['am not', 'is not', 'are not', 'not am'],
            correctAnswer: 'am not',
            points: 10
          },
          {
            id: 'q_en_t2_4',
            question: 'Яка форма "to be" в минулому часі для "we"?',
            type: 'single',
            options: ['was', 'were', 'are', 'is'],
            correctAnswer: 'were',
            points: 10
          },
          {
            id: 'q_en_t2_5',
            question: 'Перекладіть: "Вони були студентами"',
            type: 'text',
            correctAnswer: 'They were students',
            points: 10
          },
          {
            id: 'q_en_t2_6',
            question: 'Яка питальна форма: "___ you ready?"',
            type: 'single',
            options: ['Am', 'Is', 'Are', 'Was'],
            correctAnswer: 'Are',
            points: 10
          },
          {
            id: 'q_en_t2_7',
            question: 'Для чого використовується "to be"?',
            type: 'multiple',
            options: ['Опис стану', 'Вказання місця', 'Вказання віку', 'Опис професії'],
            correctAnswer: ['Опис стану', 'Вказання місця', 'Вказання віку', 'Опис професії'],
            points: 15
          },
          {
            id: 'q_en_t2_8',
            question: 'Яка скорочена форма "she is not"?',
            type: 'single',
            options: ['she\'sn\'t', 'she isn\'t', 'she not', 'she\'s not'],
            correctAnswer: 'she isn\'t',
            points: 10
          },
          {
            id: 'q_en_t2_9',
            question: 'Перекладіть: "Він був лікарем"',
            type: 'text',
            correctAnswer: 'He was a doctor',
            points: 10
          },
          {
            id: 'q_en_t2_10',
            question: 'Яка форма "to be" для "it" в Present Simple?',
            type: 'single',
            options: ['am', 'is', 'are', 'was'],
            correctAnswer: 'is',
            points: 10
          }
        ]
      },
      {
        id: 'test_t3',
        courseId: '1',
        title: 'Тест: Present Simple',
        description: 'Перевірте знання Present Simple',
        timeLimit: 30,
        questions: [
          {
            id: 'q_en_t3_1',
            question: 'Яка форма дієслова "work" для "he" в Present Simple?',
            type: 'single',
            options: ['work', 'works', 'working', 'worked'],
            correctAnswer: 'works',
            points: 10
          },
          {
            id: 'q_en_t3_2',
            question: 'Як утворити заперечне речення: "I ___ like coffee"?',
            type: 'single',
            options: ['do not', 'does not', 'am not', 'is not'],
            correctAnswer: 'do not',
            points: 10
          },
          {
            id: 'q_en_t3_3',
            question: 'Яка форма дієслова "go" для "she"?',
            type: 'single',
            options: ['go', 'goes', 'going', 'went'],
            correctAnswer: 'goes',
            points: 10
          },
          {
            id: 'q_en_t3_4',
            question: 'Коли використовується Present Simple?',
            type: 'multiple',
            options: ['Регулярні дії', 'Звички', 'Факти', 'Дії зараз'],
            correctAnswer: ['Регулярні дії', 'Звички', 'Факти'],
            points: 15
          },
          {
            id: 'q_en_t3_5',
            question: 'Яка форма дієслова "study" для "they"?',
            type: 'single',
            options: ['study', 'studies', 'studying', 'studied'],
            correctAnswer: 'study',
            points: 10
          },
          {
            id: 'q_en_t3_6',
            question: 'Перекладіть: "Вона працює в лікарні"',
            type: 'text',
            correctAnswer: 'She works at a hospital',
            points: 10
          },
          {
            id: 'q_en_t3_7',
            question: 'Яка питальна форма: "___ she speak English?"',
            type: 'single',
            options: ['Do', 'Does', 'Is', 'Are'],
            correctAnswer: 'Does',
            points: 10
          },
          {
            id: 'q_en_t3_8',
            question: 'Яка форма дієслова "watch" для "it"?',
            type: 'single',
            options: ['watch', 'watches', 'watching', 'watched'],
            correctAnswer: 'watches',
            points: 10
          },
          {
            id: 'q_en_t3_9',
            question: 'Який часовий маркер використовується з Present Simple?',
            type: 'single',
            options: ['now', 'yesterday', 'every day', 'tomorrow'],
            correctAnswer: 'every day',
            points: 10
          },
          {
            id: 'q_en_t3_10',
            question: 'Перекладіть: "Ми не живемо в місті"',
            type: 'text',
            correctAnswer: 'We don\'t live in a city',
            points: 10
          }
        ]
      },
      {
        id: 'test_t4',
        courseId: '1',
        title: 'Тест: Артиклі',
        description: 'Перевірте знання артиклів a, an, the',
        timeLimit: 30,
        questions: [
          {
            id: 'q_en_t4_1',
            question: 'Оберіть правильний артикль: "___ apple"',
            type: 'single',
            options: ['a', 'an', 'the', 'без артикля'],
            correctAnswer: 'an',
            points: 10
          },
          {
            id: 'q_en_t4_2',
            question: 'Оберіть правильний артикль: "___ book"',
            type: 'single',
            options: ['a', 'an', 'the', 'без артикля'],
            correctAnswer: 'a',
            points: 10
          },
          {
            id: 'q_en_t4_3',
            question: 'Оберіть правильний артикль: "___ sun rises in the east"',
            type: 'single',
            options: ['a', 'an', 'the', 'без артикля'],
            correctAnswer: 'the',
            points: 10
          },
          {
            id: 'q_en_t4_4',
            question: 'Оберіть правильний артикль: "___ university"',
            type: 'single',
            options: ['a', 'an', 'the', 'без артикля'],
            correctAnswer: 'a',
            points: 10
          },
          {
            id: 'q_en_t4_5',
            question: 'Коли використовується артикль "the"?',
            type: 'multiple',
            options: ['Конкретний предмет', 'Єдиний предмет', 'Назви рік', 'Перша згадка'],
            correctAnswer: ['Конкретний предмет', 'Єдиний предмет', 'Назви рік'],
            points: 15
          },
          {
            id: 'q_en_t4_6',
            question: 'Оберіть правильний артикль: "___ hour"',
            type: 'single',
            options: ['a', 'an', 'the', 'без артикля'],
            correctAnswer: 'an',
            points: 10
          },
          {
            id: 'q_en_t4_7',
            question: 'Оберіть правильний артикль: "I speak ___ English"',
            type: 'single',
            options: ['a', 'an', 'the', 'без артикля'],
            correctAnswer: 'без артикля',
            points: 10
          },
          {
            id: 'q_en_t4_8',
            question: 'Оберіть правильний артикль: "___ United States"',
            type: 'single',
            options: ['a', 'an', 'the', 'без артикля'],
            correctAnswer: 'the',
            points: 10
          },
          {
            id: 'q_en_t4_9',
            question: 'Оберіть правильний артикль: "She is ___ teacher"',
            type: 'single',
            options: ['a', 'an', 'the', 'без артикля'],
            correctAnswer: 'a',
            points: 10
          },
          {
            id: 'q_en_t4_10',
            question: 'Оберіть правильний артикль: "___ Dnipro is a long river"',
            type: 'single',
            options: ['a', 'an', 'the', 'без артикля'],
            correctAnswer: 'the',
            points: 10
          }
        ]
      },
      {
        id: 'test_t5',
        courseId: '1',
        title: 'Тест: Множина іменників',
        description: 'Перевірте знання правил утворення множини',
        timeLimit: 30,
        questions: [
          {
            id: 'q_en_t5_1',
            question: 'Яка множина від "cat"?',
            type: 'single',
            options: ['cats', 'cates', 'caties', 'cat'],
            correctAnswer: 'cats',
            points: 10
          },
          {
            id: 'q_en_t5_2',
            question: 'Яка множина від "child"?',
            type: 'single',
            options: ['childs', 'children', 'childrens', 'child'],
            correctAnswer: 'children',
            points: 10
          },
          {
            id: 'q_en_t5_3',
            question: 'Яка множина від "box"?',
            type: 'single',
            options: ['boxs', 'boxes', 'boxies', 'box'],
            correctAnswer: 'boxes',
            points: 10
          },
          {
            id: 'q_en_t5_4',
            question: 'Яка множина від "man"?',
            type: 'single',
            options: ['mans', 'men', 'mens', 'man'],
            correctAnswer: 'men',
            points: 10
          },
          {
            id: 'q_en_t5_5',
            question: 'Оберіть правильні форми множини',
            type: 'multiple',
            options: ['cities', 'citys', 'babies', 'babys'],
            correctAnswer: ['cities', 'babies'],
            points: 15
          },
          {
            id: 'q_en_t5_6',
            question: 'Яка множина від "tooth"?',
            type: 'single',
            options: ['tooths', 'teeth', 'teeths', 'tooth'],
            correctAnswer: 'teeth',
            points: 10
          },
          {
            id: 'q_en_t5_7',
            question: 'Яка множина від "sheep"?',
            type: 'single',
            options: ['sheeps', 'sheep', 'sheepes', 'sheepies'],
            correctAnswer: 'sheep',
            points: 10
          },
          {
            id: 'q_en_t5_8',
            question: 'Яка множина від "wife"?',
            type: 'single',
            options: ['wifes', 'wives', 'wife', 'wivs'],
            correctAnswer: 'wives',
            points: 10
          },
          {
            id: 'q_en_t5_9',
            question: 'Яка множина від "mouse"?',
            type: 'single',
            options: ['mouses', 'mice', 'mices', 'mouse'],
            correctAnswer: 'mice',
            points: 10
          },
          {
            id: 'q_en_t5_10',
            question: 'Яка множина від "photo"?',
            type: 'single',
            options: ['photos', 'photoes', 'photies', 'photo'],
            correctAnswer: 'photos',
            points: 10
          }
        ]
      },
      {
        id: 'test_t6',
        courseId: '1',
        title: 'Тест: Прикметники та ступені порівняння',
        description: 'Перевірте знання прикметників та їх порівняння',
        timeLimit: 30,
        questions: [
          {
            id: 'q_en_t6_1',
            question: 'Який порівняльний ступінь від "tall"?',
            type: 'single',
            options: ['taller', 'more tall', 'tallest', 'tall'],
            correctAnswer: 'taller',
            points: 10
          },
          {
            id: 'q_en_t6_2',
            question: 'Який найвищий ступінь від "good"?',
            type: 'single',
            options: ['gooder', 'better', 'best', 'the best'],
            correctAnswer: 'the best',
            points: 10
          },
          {
            id: 'q_en_t6_3',
            question: 'Який порівняльний ступінь від "beautiful"?',
            type: 'single',
            options: ['beautifuler', 'more beautiful', 'beautifulest', 'beautiful'],
            correctAnswer: 'more beautiful',
            points: 10
          },
          {
            id: 'q_en_t6_4',
            question: 'Який найвищий ступінь від "big"?',
            type: 'single',
            options: ['bigger', 'biggest', 'the biggest', 'most big'],
            correctAnswer: 'the biggest',
            points: 10
          },
          {
            id: 'q_en_t6_5',
            question: 'Оберіть правильні форми порівняння',
            type: 'multiple',
            options: ['easier', 'easyer', 'more easy', 'the easiest'],
            correctAnswer: ['easier', 'the easiest'],
            points: 15
          },
          {
            id: 'q_en_t6_6',
            question: 'Який порівняльний ступінь від "bad"?',
            type: 'single',
            options: ['badder', 'worse', 'worst', 'more bad'],
            correctAnswer: 'worse',
            points: 10
          },
          {
            id: 'q_en_t6_7',
            question: 'Перекладіть: "Ця книга цікавіша, ніж та"',
            type: 'text',
            correctAnswer: 'This book is more interesting than that one',
            points: 10
          },
          {
            id: 'q_en_t6_8',
            question: 'Який найвищий ступінь від "happy"?',
            type: 'single',
            options: ['happier', 'happiest', 'the happiest', 'most happy'],
            correctAnswer: 'the happiest',
            points: 10
          },
          {
            id: 'q_en_t6_9',
            question: 'Який порівняльний ступінь від "little" (малий)?',
            type: 'single',
            options: ['littler', 'less', 'least', 'more little'],
            correctAnswer: 'less',
            points: 10
          },
          {
            id: 'q_en_t6_10',
            question: 'Перекладіть: "Він найвищий у класі"',
            type: 'text',
            correctAnswer: 'He is the tallest in the class',
            points: 10
          }
        ]
      },
      {
        id: 'test_t7',
        courseId: '1',
        title: 'Тест: Основний словник',
        description: 'Перевірте знання базового словника',
        timeLimit: 25,
        questions: [
          {
            id: 'q_en_t7_1',
            question: 'Як англійською "чорний"?',
            type: 'single',
            options: ['black', 'white', 'red', 'blue'],
            correctAnswer: 'black',
            points: 10
          },
          {
            id: 'q_en_t7_2',
            question: 'Як англійською "мама"?',
            type: 'single',
            options: ['father', 'mother', 'sister', 'brother'],
            correctAnswer: 'mother',
            points: 10
          },
          {
            id: 'q_en_t7_3',
            question: 'Як англійською "хліб"?',
            type: 'single',
            options: ['bread', 'butter', 'cheese', 'milk'],
            correctAnswer: 'bread',
            points: 10
          },
          {
            id: 'q_en_t7_4',
            question: 'Оберіть правильні слова для транспорту',
            type: 'multiple',
            options: ['bus', 'train', 'apple', 'car'],
            correctAnswer: ['bus', 'train', 'car'],
            points: 15
          },
          {
            id: 'q_en_t7_5',
            question: 'Як англійською "школа"?',
            type: 'single',
            options: ['school', 'hospital', 'bank', 'shop'],
            correctAnswer: 'school',
            points: 10
          },
          {
            id: 'q_en_t7_6',
            question: 'Перекладіть: "Як дістатися до...?"',
            type: 'text',
            correctAnswer: 'How do I get to...?',
            points: 10
          },
          {
            id: 'q_en_t7_7',
            question: 'Як англійською "помаранчевий" (колір)?',
            type: 'single',
            options: ['orange', 'purple', 'pink', 'brown'],
            correctAnswer: 'orange',
            points: 10
          },
          {
            id: 'q_en_t7_8',
            question: 'Як англійською "дід"?',
            type: 'single',
            options: ['grandfather', 'grandmother', 'uncle', 'aunt'],
            correctAnswer: 'grandfather',
            points: 10
          },
          {
            id: 'q_en_t7_9',
            question: 'Як англійською "чай"?',
            type: 'single',
            options: ['tea', 'coffee', 'water', 'juice'],
            correctAnswer: 'tea',
            points: 10
          },
          {
            id: 'q_en_t7_10',
            question: 'Перекладіть: "Поверніть праворуч"',
            type: 'text',
            correctAnswer: 'Turn right',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Німецька мова - середній рівень',
    language: 'Німецька',
    level: 'Середній',
    duration: '4 місяці',
    price: 600,
    description: 'Поглиблене вивчення німецької мови, бізнес-комунікація',
    instructor: 'Криворучко Микола',
    studentsCount: 32,
    schedule: [
      { id: 's4', courseId: '2', dayOfWeek: 'Вівторок', time: '19:00', duration: 90, type: 'Лекція' },
      { id: 's5', courseId: '2', dayOfWeek: 'Четвер', time: '19:00', duration: 90, type: 'Практика' }
    ],
    roadmap: [
      {
        id: 't4',
        title: 'Вступ до німецької мови',
        description: 'Основи німецької мови та граматики',
        order: 1,
        progress: 100,
        subtopics: [
          {
            id: 'st11',
            title: 'Що таке німецька мова?',
            type: 'theory',
            content: 'Німецька мова належить до західногерманської групи мов індоєвропейської сім\'ї. Це одна з найпоширеніших мов у Європі та офіційна мова Німеччини, Австрії, Швейцарії та інших країн. Німецька мова має багату граматичну структуру з складними правилами відмінків та артиклів.',
            order: 1,
            materials: [
              {
                id: 'm7',
                courseId: '2',
                topicId: 't4',
                subtopicId: 'st11',
                title: 'Вступ до німецької мови',
                type: 'PDF',
                url: '#',
                description: 'Підручник з основами німецької мови',
                uploadDate: '2024-01-20',
                content: 'Детальна інформація про німецьку мову та її історію.',
                xp: 2
              }
            ]
          },
          {
            id: 'st12_de',
            title: 'Алфавіт та вимова',
            type: 'theory',
            content: 'Німецький алфавіт містить 26 стандартних букв латинського алфавіту плюс додаткові символи: ä, ö, ü та ß. Вимова німецької мови має чіткі правила та відрізняється від англійської.',
            order: 2,
            materials: [
              {
                id: 'm8',
                courseId: '2',
                topicId: 't4',
                subtopicId: 'st12_de',
                title: 'Правила вимови німецької',
                type: 'PDF',
                url: '#',
                description: 'Посібник з вимови німецьких звуків',
                uploadDate: '2024-01-21',
                content: 'Детальний посібник з правил вимови в німецькій мові.',
                xp: 2
              },
              {
                id: 'm9',
                courseId: '2',
                topicId: 't4',
                subtopicId: 'st12_de',
                title: 'Відео: Вимова німецьких звуків',
                type: 'Відео',
                url: '#',
                description: 'Відео урок з вимови',
                uploadDate: '2024-01-22',
                content: 'Практика вимови німецьких звуків.',
                xp: 2
              }
            ]
          },
          {
            id: 'st13_de',
            title: 'Тест: Вступ до німецької мови',
            type: 'test',
            order: 3,
            testId: 't3'
          }
        ]
      },
      {
        id: 't5',
        title: 'Граматика: Артиклі',
        description: 'Вивчення артиклів в німецькій мові',
        order: 2,
        progress: 50,
        subtopics: [
          {
            id: 'st14_de',
            title: 'Визначення артиклів',
            type: 'theory',
            content: 'В німецькій мові є три визначені артиклі: der (чоловічий рід), die (жіночий рід), das (середній рід). Також існує невизначений артикль ein/eine. Артиклі змінюються за відмінками та множиною.',
            order: 1,
            materials: [
              {
                id: 'm10',
                courseId: '2',
                topicId: 't5',
                subtopicId: 'st14_de',
                title: 'Артиклі в німецькій мові',
                type: 'PDF',
                url: '#',
                description: 'Теоретичний матеріал про артиклі',
                uploadDate: '2024-01-23',
                content: 'Детальне пояснення артиклів та їх використання.',
                xp: 2
              }
            ]
          },
          {
            id: 'st15_de',
            title: 'Відмінки та артиклі',
            type: 'theory',
            content: 'В німецькій мові є чотири відмінки: Nominativ (називний), Akkusativ (знахідний), Dativ (давальний), Genitiv (родовий). Артиклі змінюються залежно від відмінка.',
            order: 2,
            materials: [
              {
                id: 'm11',
                courseId: '2',
                topicId: 't5',
                subtopicId: 'st15_de',
                title: 'Таблиця відмінків',
                type: 'PDF',
                url: '#',
                description: 'Таблиця зміни артиклів за відмінками',
                uploadDate: '2024-01-24',
                content: 'Повна таблиця відмінків та артиклів.',
                xp: 2
              }
            ]
          },
          {
            id: 'st16_de',
            title: 'Практика: Вправи з артиклів',
            type: 'practice',
            content: 'Практичні вправи для закріплення знань про артиклі та відмінки',
            order: 3,
            materials: [
              {
                id: 'm12',
                courseId: '2',
                topicId: 't5',
                subtopicId: 'st16_de',
                title: 'Вправи з артиклів',
                type: 'PDF',
                url: '#',
                description: 'Практичні вправи',
                uploadDate: '2024-01-25',
                content: 'Вправи для практики артиклів.',
                xp: 3
              }
            ]
          },
          {
            id: 'st17_de',
            title: 'Тест: Артиклі та відмінки',
            type: 'test',
            order: 4,
            testId: 't4'
          }
        ],
        testId: 't4'
      },
      {
        id: 't6_de',
        title: 'Дієслово "sein" та "haben"',
        description: 'Вивчення основних дієслів німецької мови',
        order: 3,
        progress: 0,
        subtopics: [
          {
            id: 'st18_de',
            title: 'Дієслово "sein" (бути)',
            type: 'theory',
            content: 'Дієслово "sein" - це одне з найважливіших дієслів в німецькій мові. Воно неправильне та має унікальні форми для кожної особи. Форми: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie sind.',
            order: 1
          },
          {
            id: 'st19_de',
            title: 'Дієслово "haben" (мати)',
            type: 'theory',
            content: 'Дієслово "haben" також є важливим та неправильним. Форми: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie haben.',
            order: 2
          },
          {
            id: 'st20_de',
            title: 'Тест: Дієслова sein та haben',
            type: 'test',
            order: 3,
            testId: 't5'
          }
        ],
        testId: 't5'
      }
    ],
    materials: [
      { id: 'm7', courseId: '2', title: 'Основи німецької граматики', type: 'PDF', url: '#', description: 'Підручник з граматики', uploadDate: '2024-01-20' },
      { id: 'm8', courseId: '2', title: 'Відео урок 1', type: 'Відео', url: '#', description: 'Вступний урок', uploadDate: '2024-01-21' }
    ],
    tests: [
      {
        id: 't3',
        courseId: '2',
        title: 'Тест: Вступ до німецької мови',
        description: 'Перевірте знання основ німецької мови',
        timeLimit: 25,
        questions: [
          {
            id: 'q5',
            question: 'Скільки відмінків в німецькій мові?',
            type: 'single',
            options: ['2', '3', '4', '5'],
            correctAnswer: '4',
            points: 10
          },
          {
            id: 'q6',
            question: 'Оберіть правильні артиклі',
            type: 'multiple',
            options: ['der', 'die', 'das', 'den'],
            correctAnswer: ['der', 'die', 'das'],
            points: 15
          }
        ]
      },
      {
        id: 't4',
        courseId: '2',
        title: 'Тест: Артиклі та відмінки',
        description: 'Перевірте знання артиклів та відмінків',
        timeLimit: 30,
        questions: [
          {
            id: 'q7',
            question: 'Яка форма артикля der в Akkusativ?',
            type: 'single',
            options: ['der', 'die', 'das', 'den'],
            correctAnswer: 'den',
            points: 10
          }
        ]
      },
      {
        id: 't5',
        courseId: '2',
        title: 'Тест: Дієслова sein та haben',
        description: 'Перевірте знання дієслів sein та haben',
        timeLimit: 20,
        questions: [
          {
            id: 'q8',
            question: 'Яка форма дієслова sein для "ich"?',
            type: 'single',
            options: ['bist', 'bin', 'ist', 'sind'],
            correctAnswer: 'bin',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Французька мова для подорожей',
    language: 'Французька',
    level: 'Початковий',
    duration: '2 місяці',
    price: 500,
    description: 'Швидкий курс для тих, хто планує подорож до Франції',
    instructor: 'Кіліан Мбаппе',
    studentsCount: 28,
    schedule: [
      { id: 's6', courseId: '3', dayOfWeek: 'Понеділок', time: '18:30', duration: 60, type: 'Лекція' },
      { id: 's7', courseId: '3', dayOfWeek: 'Середа', time: '18:30', duration: 60, type: 'Практика' }
    ],
    roadmap: [
      {
        id: 't6',
        title: 'Базові фрази для подорожей',
        description: 'Основні фрази для спілкування під час подорожі',
        order: 1,
        progress: 0,
        subtopics: [
          {
            id: 'st13',
            title: 'Привітання та знайомство',
            type: 'theory',
            content: 'Базові фрази для привітання та знайомства: Bonjour (Добрий день), Bonsoir (Добрий вечір), Comment allez-vous? (Як справи?), Enchanté (Приємно познайомитись). Ці фрази допоможуть вам легко спілкуватись з французами.',
            order: 1,
            materials: [
              {
                id: 'm13',
                courseId: '3',
                topicId: 't6',
                subtopicId: 'st13',
                title: 'Фрази привітання',
                type: 'PDF',
                url: '#',
                description: 'Список фраз для привітання',
                uploadDate: '2024-02-01',
                content: 'Базові французькі фрази для привітання.',
                xp: 2
              }
            ]
          },
          {
            id: 'st21_fr',
            title: 'В ресторані та кафе',
            type: 'theory',
            content: 'Корисні фрази для замовлення їжі та напоїв: Je voudrais... (Я хотів би...), L\'addition, s\'il vous plaît (Рахунок, будь ласка), Une table pour deux (Стіл на двох).',
            order: 2,
            materials: [
              {
                id: 'm14',
                courseId: '3',
                topicId: 't6',
                subtopicId: 'st21_fr',
                title: 'Фрази для ресторану',
                type: 'PDF',
                url: '#',
                description: 'Корисні фрази для ресторану',
                uploadDate: '2024-02-02',
                content: 'Фрази для спілкування в ресторані.',
                xp: 2
              }
            ]
          },
          {
            id: 'st22_fr',
            title: 'В готелі та транспорту',
            type: 'theory',
            content: 'Фрази для бронювання готелю та орієнтування в місті: Une chambre (кімната), Où est...? (Де знаходиться...?), Le métro (метро), La gare (вокзал).',
            order: 3
          },
          {
            id: 'st23_fr',
            title: 'Тест: Базові фрази',
            type: 'test',
            order: 4,
            testId: 't6'
          }
        ]
      },
      {
        id: 't7_fr',
        title: 'Граматика: Артиклі та артикльні форми',
        description: 'Вивчення артиклів у французькій мові',
        order: 2,
        progress: 0,
        subtopics: [
          {
            id: 'st24_fr',
            title: 'Визначені та невизначені артиклі',
            type: 'theory',
            content: 'У французькій мові є визначені артиклі: le (чоловічий), la (жіночий), les (множина). Невизначені: un (чоловічий), une (жіночий), des (множина).',
            order: 1
          },
          {
            id: 'st25_fr',
            title: 'Тест: Артиклі',
            type: 'test',
            order: 2,
            testId: 't7'
          }
        ],
        testId: 't7'
      }
    ],
    materials: [
      { id: 'm13', courseId: '3', title: 'Фрази для подорожей', type: 'PDF', url: '#', description: 'Підручник з фраз', uploadDate: '2024-02-01' }
    ],
    tests: [
      {
        id: 't6',
        courseId: '3',
        title: 'Тест: Базові фрази для подорожей',
        description: 'Перевірте знання базових фраз',
        timeLimit: 20,
        questions: [
          {
            id: 'q9',
            question: 'Як сказати "Добрий день" французькою?',
            type: 'single',
            options: ['Bonjour', 'Bonsoir', 'Salut', 'Au revoir'],
            correctAnswer: 'Bonjour',
            points: 10
          }
        ]
      },
      {
        id: 't7',
        courseId: '3',
        title: 'Тест: Артиклі у французькій мові',
        description: 'Перевірте знання артиклів',
        timeLimit: 15,
        questions: [
          {
            id: 'q10',
            question: 'Який визначений артикль для чоловічого роду?',
            type: 'single',
            options: ['la', 'le', 'les', 'un'],
            correctAnswer: 'le',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Іспанська мова - продвинутий рівень',
    language: 'Іспанська',
    level: 'Продвинутий',
    duration: '5 місяців',
    price: 600,
    description: 'Поглиблене вивчення іспанської мови та культури',
    instructor: 'Степанова Ірина',
    studentsCount: 18,
    schedule: [
      { id: 's8', courseId: '4', dayOfWeek: 'Вівторок', time: '19:30', duration: 120, type: 'Лекція' },
      { id: 's9', courseId: '4', dayOfWeek: 'Четвер', time: '19:30', duration: 120, type: 'Практика' }
    ],
    roadmap: [
      {
        id: 't7',
        title: 'Продвинута граматика',
        description: 'Складні граматичні конструкції',
        order: 1,
        progress: 0,
        subtopics: [
          {
            id: 'st26_es',
            title: 'Складні часові форми',
            type: 'theory',
            content: 'Вивчення складних часових форм: Pretérito Perfecto Compuesto, Pretérito Pluscuamperfecto, Futuro Compuesto. Ці форми дозволяють точно виражати час та послідовність подій.',
            order: 1,
            materials: [
              {
                id: 'm15',
                courseId: '4',
                topicId: 't7',
                subtopicId: 'st26_es',
                title: 'Часові форми',
                type: 'PDF',
                url: '#',
                description: 'Підручник з часових форм',
                uploadDate: '2024-02-10',
                content: 'Детальний посібник з складних часових форм.',
                xp: 3
              }
            ]
          },
          {
            id: 'st27_es',
            title: 'Суб\'юнктив (Subjuntivo)',
            type: 'theory',
            content: 'Subjuntivo - це особлива форма дієслова для вираження сумнівів, бажань, емоцій. Використовується в залежних реченнях та має свої особливості.',
            order: 2
          },
          {
            id: 'st28_es',
            title: 'Тест: Продвинута граматика',
            type: 'test',
            order: 3,
            testId: 't8'
          }
        ],
        testId: 't8'
      },
      {
        id: 't8_es',
        title: 'Література та культура',
        description: 'Вивчення іспанської літератури та культурного контексту',
        order: 2,
        progress: 0,
        subtopics: [
          {
            id: 'st29_es',
            title: 'Класична іспанська література',
            type: 'theory',
            content: 'Знайомство з творами Сервантеса, Лорки, Гарсіа Маркеса та інших великих письменників іспаномовного світу.',
            order: 1
          },
          {
            id: 'st30_es',
            title: 'Тест: Література та культура',
            type: 'test',
            order: 2,
            testId: 't9'
          }
        ],
        testId: 't9'
      }
    ],
    materials: [
      { id: 'm15', courseId: '4', title: 'Продвинута граматика', type: 'PDF', url: '#', description: 'Підручник', uploadDate: '2024-02-10' }
    ],
    tests: [
      {
        id: 't8',
        courseId: '4',
        title: 'Тест: Продвинута граматика',
        description: 'Перевірте знання складних граматичних конструкцій',
        timeLimit: 40,
        questions: [
          {
            id: 'q11',
            question: 'Яка форма використовується для вираження сумнівів?',
            type: 'single',
            options: ['Indicativo', 'Subjuntivo', 'Imperativo', 'Infinitivo'],
            correctAnswer: 'Subjuntivo',
            points: 15
          }
        ]
      },
      {
        id: 't9',
        courseId: '4',
        title: 'Тест: Література та культура',
        description: 'Перевірте знання іспанської культури',
        timeLimit: 25,
        questions: [
          {
            id: 'q12',
            question: 'Хто написав "Дон Кіхот"?',
            type: 'single',
            options: ['Лорка', 'Сервантес', 'Гарсіа Маркес', 'Неруда'],
            correctAnswer: 'Сервантес',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Польська мова для роботи',
    language: 'Польська',
    level: 'Середній',
    duration: '3 місяці',
    price: 550,
    description: 'Спеціалізований курс для працевлаштування в Польщі',
    instructor: 'Курило Володимир',
    studentsCount: 40,
    schedule: [
      { id: 's10', courseId: '5', dayOfWeek: 'Понеділок', time: '18:00', duration: 90, type: 'Лекція' },
      { id: 's11', courseId: '5', dayOfWeek: 'Середа', time: '18:00', duration: 90, type: 'Практика' }
    ],
    roadmap: [
      {
        id: 't8',
        title: 'Бізнес-польська',
        description: 'Польська мова для бізнесу та роботи',
        order: 1,
        progress: 0,
        subtopics: [
          {
            id: 'st31_pl',
            title: 'Ділова кореспонденція',
            type: 'theory',
            content: 'Вивчення правил написання ділових листів, email-ів та офіційної документації польською мовою. Стандартні формули та ввічливі звернення.',
            order: 1,
            materials: [
              {
                id: 'm16',
                courseId: '5',
                topicId: 't8',
                subtopicId: 'st31_pl',
                title: 'Шаблони ділових листів',
                type: 'PDF',
                url: '#',
                description: 'Шаблони для ділової кореспонденції',
                uploadDate: '2024-02-15',
                content: 'Готові шаблони ділових листів.',
                xp: 3
              }
            ]
          },
          {
            id: 'st32_pl',
            title: 'Співбесіда та CV',
            type: 'theory',
            content: 'Фрази та вирази для проходження співбесіди, написання резюме (CV) та листів мотиваційних. Типові питання на співбесіді та відповіді на них.',
            order: 2,
            materials: [
              {
                id: 'm17',
                courseId: '5',
                topicId: 't8',
                subtopicId: 'st32_pl',
                title: 'Питання на співбесіді',
                type: 'PDF',
                url: '#',
                description: 'Типові питання та відповіді',
                uploadDate: '2024-02-16',
                content: 'Питання для співбесіди та відповіді.',
                xp: 3
              }
            ]
          },
          {
            id: 'st33_pl',
            title: 'Тест: Бізнес-польська',
            type: 'test',
            order: 3,
            testId: 't10'
          }
        ],
        testId: 't10'
      },
      {
        id: 't9_pl',
        title: 'Працева термінологія',
        description: 'Спеціалізована лексика для різних професій',
        order: 2,
        progress: 0,
        subtopics: [
          {
            id: 'st34_pl',
            title: 'Термінологія в офісі',
            type: 'theory',
            content: 'Вивчення термінів, пов\'язаних з офісною роботою: spotkanie (зустріч), prezentacja (презентація), raport (звіт), deadline (термін).',
            order: 1
          },
          {
            id: 'st35_pl',
            title: 'Тест: Працева термінологія',
            type: 'test',
            order: 2,
            testId: 't11'
          }
        ],
        testId: 't11'
      }
    ],
    materials: [
      { id: 'm16', courseId: '5', title: 'Бізнес-польська', type: 'PDF', url: '#', description: 'Підручник', uploadDate: '2024-02-15' }
    ],
    tests: [
      {
        id: 't10',
        courseId: '5',
        title: 'Тест: Бізнес-польська',
        description: 'Перевірте знання ділової польської',
        timeLimit: 30,
        questions: [
          {
            id: 'q13',
            question: 'Як польською сказати "зустріч"?',
            type: 'single',
            options: ['spotkanie', 'prezentacja', 'raport', 'deadline'],
            correctAnswer: 'spotkanie',
            points: 10
          }
        ]
      },
      {
        id: 't11',
        courseId: '5',
        title: 'Тест: Працева термінологія',
        description: 'Перевірте знання робочих термінів',
        timeLimit: 20,
        questions: [
          {
            id: 'q14',
            question: 'Як польською сказати "презентація"?',
            type: 'single',
            options: ['spotkanie', 'prezentacja', 'raport', 'deadline'],
            correctAnswer: 'prezentacja',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: '6',
    title: 'Італійська мова - початковий рівень',
    language: 'Італійська',
    level: 'Початковий',
    duration: '3 місяці',
    price: 500,
    description: 'Основи італійської мови та культури',
    instructor: 'Ільницький Денис',
    studentsCount: 22,
    schedule: [
      { id: 's12', courseId: '6', dayOfWeek: 'Вівторок', time: '18:00', duration: 90, type: 'Лекція' },
      { id: 's13', courseId: '6', dayOfWeek: 'Четвер', time: '18:00', duration: 90, type: 'Практика' }
    ],
    roadmap: [
      {
        id: 't9',
        title: 'Основи італійської',
        description: 'Вступ до італійської мови',
        order: 1,
        progress: 0,
        subtopics: [
          {
            id: 'st36_it',
            title: 'Алфавіт та вимова',
            type: 'theory',
            content: 'Італійський алфавіт має 21 букву (без j, k, w, x, y, які використовуються лише в запозичених словах). Вимова італійської дуже чітка та фонетична - кожна буква читається однаково.',
            order: 1,
            materials: [
              {
                id: 'm18',
                courseId: '6',
                topicId: 't9',
                subtopicId: 'st36_it',
                title: 'Правила вимови',
                type: 'PDF',
                url: '#',
                description: 'Посібник з вимови',
                uploadDate: '2024-03-01',
                content: 'Правила вимови італійської мови.',
                xp: 2
              }
            ]
          },
          {
            id: 'st37_it',
            title: 'Привітання та базові фрази',
            type: 'theory',
            content: 'Базові фрази: Ciao (Привіт/Бувай), Buongiorno (Добрий день), Buonasera (Добрий вечір), Come sta? (Як справи?), Grazie (Дякую), Prego (Будь ласка).',
            order: 2,
            materials: [
              {
                id: 'm19',
                courseId: '6',
                topicId: 't9',
                subtopicId: 'st37_it',
                title: 'Базові фрази',
                type: 'PDF',
                url: '#',
                description: 'Список базових фраз',
                uploadDate: '2024-03-02',
                content: 'Базові італійські фрази.',
                xp: 2
              }
            ]
          },
          {
            id: 'st38_it',
            title: 'Артиклі',
            type: 'theory',
            content: 'В італійській мові є визначені артиклі: il, lo, la (однина), i, gli, le (множина). Невизначені: un, uno, una. Вибір артикля залежить від роду та початкової літери слова.',
            order: 3
          },
          {
            id: 'st39_it',
            title: 'Тест: Основи італійської',
            type: 'test',
            order: 4,
            testId: 't12'
          }
        ],
        testId: 't12'
      },
      {
        id: 't10_it',
        title: 'Дієслово "essere" та "avere"',
        description: 'Вивчення основних дієслів',
        order: 2,
        progress: 0,
        subtopics: [
          {
            id: 'st40_it',
            title: 'Дієслово essere (бути)',
            type: 'theory',
            content: 'Форми дієслова essere: io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono. Використовується для опису стану та характеристик.',
            order: 1
          },
          {
            id: 'st41_it',
            title: 'Дієслово avere (мати)',
            type: 'theory',
            content: 'Форми дієслова avere: io ho, tu hai, lui/lei ha, noi abbiamo, voi avete, loro hanno.',
            order: 2
          },
          {
            id: 'st42_it',
            title: 'Тест: Дієслова essere та avere',
            type: 'test',
            order: 3,
            testId: 't13'
          }
        ],
        testId: 't13'
      }
    ],
    materials: [
      { id: 'm18', courseId: '6', title: 'Основи італійської', type: 'PDF', url: '#', description: 'Підручник', uploadDate: '2024-03-01' }
    ],
    tests: [
      {
        id: 't12',
        courseId: '6',
        title: 'Тест: Основи італійської',
        description: 'Перевірте знання основ',
        timeLimit: 25,
        questions: [
          {
            id: 'q15',
            question: 'Як сказати "Привіт" італійською?',
            type: 'single',
            options: ['Ciao', 'Buongiorno', 'Buonasera', 'Grazie'],
            correctAnswer: 'Ciao',
            points: 10
          }
        ]
      },
      {
        id: 't13',
        courseId: '6',
        title: 'Тест: Дієслова essere та avere',
        description: 'Перевірте знання дієслів',
        timeLimit: 20,
        questions: [
          {
            id: 'q16',
            question: 'Яка форма essere для "io"?',
            type: 'single',
            options: ['sei', 'è', 'sono', 'siamo'],
            correctAnswer: 'sono',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: '7',
    title: 'Українська мова для іноземців',
    language: 'Українська',
    level: 'Початковий',
    duration: '3 місяці',
    price: 500,
    description: 'Основи української мови для тих, хто хоче вивчити українську',
    instructor: 'Оксана Мельник',
    studentsCount: 35,
    schedule: [
      { id: 's14', courseId: '7', dayOfWeek: 'Понеділок', time: '17:00', duration: 90, type: 'Лекція' },
      { id: 's15', courseId: '7', dayOfWeek: 'Середа', time: '17:00', duration: 90, type: 'Практика' },
      { id: 's16', courseId: '7', dayOfWeek: 'П\'ятниця', time: '17:00', duration: 60, type: 'Консультація' }
    ],
    roadmap: [
      {
        id: 't10',
        title: 'Вступ до української мови',
        description: 'Основи української мови',
        order: 1,
        progress: 0,
        subtopics: [
          {
            id: 'st14',
            title: 'Що таке українська мова?',
            type: 'theory',
            content: 'Українська мова належить до східнослов\'янської групи індоєвропейської мовної сім\'ї. Це державна мова України, яку розмовляє понад 40 мільйонів людей. Українська мова має багату історію та унікальну граматичну структуру.',
            order: 1,
            materials: [
              {
                id: 'm20',
                courseId: '7',
                topicId: 't10',
                subtopicId: 'st14',
                title: 'Вступ до української мови',
                type: 'PDF',
                url: '#',
                description: 'Підручник з основами',
                uploadDate: '2024-03-10',
                content: 'Детальна інформація про українську мову.',
                xp: 2
              }
            ]
          },
          {
            id: 'st43_ua',
            title: 'Алфавіт та вимова',
            type: 'theory',
            content: 'Український алфавіт має 33 літери. Він заснований на кирилиці та містить унікальні українські літери: і, ї, є, ґ. Вимова української мови фонетична - слова читаються так, як пишуться.',
            order: 2,
            materials: [
              {
                id: 'm21',
                courseId: '7',
                topicId: 't10',
                subtopicId: 'st43_ua',
                title: 'Український алфавіт',
                type: 'PDF',
                url: '#',
                description: 'Повний алфавіт з вимовою',
                uploadDate: '2024-03-11',
                content: 'Алфавіт та правила вимови.',
                xp: 2
              },
              {
                id: 'm22',
                courseId: '7',
                topicId: 't10',
                subtopicId: 'st43_ua',
                title: 'Відео: Вимова українських звуків',
                type: 'Відео',
                url: '#',
                description: 'Відео урок з вимови',
                uploadDate: '2024-03-12',
                content: 'Практика вимови звуків.',
                xp: 2
              }
            ]
          },
          {
            id: 'st44_ua',
            title: 'Базові фрази',
            type: 'theory',
            content: 'Основні фрази для повсякденного спілкування: Привіт, Добрий день, Дякую, Будь ласка, Вибачте, До побачення. Ці фрази допоможуть вам легко спілкуватись з українцями.',
            order: 3
          },
          {
            id: 'st45_ua',
            title: 'Тест: Вступ до української мови',
            type: 'test',
            order: 4,
            testId: 't14'
          }
        ],
        testId: 't14'
      },
      {
        id: 't11_ua',
        title: 'Граматика: Роди та відмінки',
        description: 'Вивчення граматичної структури української мови',
        order: 2,
        progress: 0,
        subtopics: [
          {
            id: 'st46_ua',
            title: 'Роди іменників',
            type: 'theory',
            content: 'В українській мові є три роди: чоловічий, жіночий та середній. Рід визначає закінчення слова та форму артикля (якщо він використовується).',
            order: 1,
            materials: [
              {
                id: 'm23',
                courseId: '7',
                topicId: 't11_ua',
                subtopicId: 'st46_ua',
                title: 'Роди в українській мові',
                type: 'PDF',
                url: '#',
                description: 'Правила визначення роду',
                uploadDate: '2024-03-15',
                content: 'Детальне пояснення родів.',
                xp: 2
              }
            ]
          },
          {
            id: 'st47_ua',
            title: 'Відмінки',
            type: 'theory',
            content: 'Українська мова має сім відмінків: Називний, Родовий, Давальний, Знахідний, Орудний, Місцевий, Кличний. Кожен відмінок має свої закінчення та використовується в певних граматичних конструкціях.',
            order: 2,
            materials: [
              {
                id: 'm24',
                courseId: '7',
                topicId: 't11_ua',
                subtopicId: 'st47_ua',
                title: 'Таблиця відмінків',
                type: 'PDF',
                url: '#',
                description: 'Повна таблиця відмінків',
                uploadDate: '2024-03-16',
                content: 'Таблиця з закінченнями для всіх відмінків.',
                xp: 3
              }
            ]
          },
          {
            id: 'st48_ua',
            title: 'Практика: Вправи з відмінками',
            type: 'practice',
            content: 'Практичні вправи для закріплення знань про відмінки та роди',
            order: 3,
            materials: [
              {
                id: 'm25',
                courseId: '7',
                topicId: 't11_ua',
                subtopicId: 'st48_ua',
                title: 'Вправи з відмінків',
                type: 'PDF',
                url: '#',
                description: 'Практичні вправи',
                uploadDate: '2024-03-17',
                content: 'Вправи для практики відмінків.',
                xp: 3
              }
            ]
          },
          {
            id: 'st49_ua',
            title: 'Тест: Роди та відмінки',
            type: 'test',
            order: 4,
            testId: 't15'
          }
        ],
        testId: 't15'
      },
      {
        id: 't12_ua',
        title: 'Дієслово та часові форми',
        description: 'Вивчення дієслів та часових форм',
        order: 3,
        progress: 0,
        subtopics: [
          {
            id: 'st50_ua',
            title: 'Теперішній час',
            type: 'theory',
            content: 'Теперішній час в українській мові виражає дії, що відбуваються зараз або регулярно. Дієслова змінюються за особами та числами: я йду, ти йдеш, він/вона йде, ми йдемо, ви йдете, вони йдуть.',
            order: 1
          },
          {
            id: 'st51_ua',
            title: 'Минулий та майбутній час',
            type: 'theory',
            content: 'Минулий час утворюється за допомогою закінчень, що змінюються за родом та числом. Майбутній час може бути простим або складним (з допоміжним дієсловом).',
            order: 2
          },
          {
            id: 'st52_ua',
            title: 'Тест: Дієслово та часові форми',
            type: 'test',
            order: 3,
            testId: 't16'
          }
        ],
        testId: 't16'
      }
    ],
    materials: [
      { id: 'm20', courseId: '7', title: 'Основи української мови', type: 'PDF', url: '#', description: 'Підручник з основами', uploadDate: '2024-03-10' },
      { id: 'm21', courseId: '7', title: 'Відео урок 1', type: 'Відео', url: '#', description: 'Вступний урок', uploadDate: '2024-03-11' }
    ],
    tests: [
      {
        id: 't14',
        courseId: '7',
        title: 'Тест: Вступ до української мови',
        description: 'Перевірте знання основ української мови',
        timeLimit: 25,
        questions: [
          {
            id: 'q17',
            question: 'Скільки букв в українському алфавіті?',
            type: 'single',
            options: ['30', '32', '33', '35'],
            correctAnswer: '33',
            points: 10
          },
          {
            id: 'q18',
            question: 'Як сказати "Дякую" українською?',
            type: 'single',
            options: ['Будь ласка', 'Дякую', 'Вибачте', 'До побачення'],
            correctAnswer: 'Дякую',
            points: 10
          }
        ]
      },
      {
        id: 't15',
        courseId: '7',
        title: 'Тест: Роди та відмінки',
        description: 'Перевірте знання граматики',
        timeLimit: 30,
        questions: [
          {
            id: 'q19',
            question: 'Скільки відмінків в українській мові?',
            type: 'single',
            options: ['5', '6', '7', '8'],
            correctAnswer: '7',
            points: 15
          }
        ]
      },
      {
        id: 't16',
        courseId: '7',
        title: 'Тест: Дієслово та часові форми',
        description: 'Перевірте знання дієслів',
        timeLimit: 25,
        questions: [
          {
            id: 'q20',
            question: 'Яка форма теперішнього часу для "я йду"?',
            type: 'single',
            options: ['йдеш', 'йде', 'йду', 'йдемо'],
            correctAnswer: 'йду',
            points: 10
          }
        ]
      }
    ]
  }
];

export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Олена Петренко',
    specialization: 'Англійська мова',
    experience: '8+ років',
    rating: 4.9,
    students: 120,
    description: 'Сертифікований викладач з 8-річним досвідом. Спеціалізується на викладанні англійської для дорослих.',
    bio: 'Сертифікований викладач з 8-річним досвідом. Спеціалізується на викладанні англійської для дорослих.'
  },
  {
    id: '2',
    name: 'Марія Коваленко',
    specialization: 'Німецька мова',
    experience: '10+ років',
    rating: 4.8,
    students: 95,
    description: 'Досвідчений викладач німецької мови, має ступінь магістра з германістики.',
    bio: 'Досвідчений викладач німецької мови, має ступінь магістра з германістики.'
  },
  {
    id: '3',
    name: 'Анна Сидоренко',
    specialization: 'Французька мова',
    experience: '6+ років',
    rating: 4.7,
    students: 85,
    description: 'Носій французької культури, викладає французьку мову з акцентом на практичне застосування.',
    bio: 'Носій французької культури, викладає французьку мову з акцентом на практичне застосування.'
  },
  {
    id: '4',
    name: 'Олександр Мельник',
    specialization: 'Іспанська мова',
    experience: '12+ років',
    rating: 5.0,
    students: 150,
    description: 'Професор іспанської мови з багаторічним досвідом викладання в університеті.',
    bio: 'Професор іспанської мови з багаторічним досвідом викладання в університеті.'
  },
  {
    id: '5',
    name: 'Тетяна Лисенко',
    specialization: 'Польська мова',
    experience: '7+ років',
    rating: 4.9,
    students: 110,
    description: 'Спеціалізується на польській мові для бізнесу та працевлаштування.',
    bio: 'Спеціалізується на польській мові для бізнесу та працевлаштування.'
  },
  {
    id: '6',
    name: 'Вікторія Гриценко',
    specialization: 'Італійська мова',
    experience: '5+ років',
    rating: 4.8,
    students: 75,
    description: 'Молодий та енергійний викладач італійської мови з сучасними методиками навчання.',
    bio: 'Молодий та енергійний викладач італійської мови з сучасними методиками навчання.'
  }
];

export const languages = ['Англійська', 'Німецька', 'Французька', 'Іспанська', 'Польська', 'Італійська', 'Українська'];

export const levels = ['Початковий', 'Середній', 'Продвинутий'];
