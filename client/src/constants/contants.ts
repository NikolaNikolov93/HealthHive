export const categoryData: CategoryData = {
  Лекарства: {
    "Облекчаване на болката": [
      "Мускулни и ставни болки",
      "Главоболие",
      "Травми",
    ],
    "Настинка и грип": [
      "Сиропи за кашлица",
      "Таблетки против запушване",
      "Назални спрейове",
      "Бонбони за гърло",
      "Облекчаване на симптомите на настинка",
      "Грип и настинка",
    ],
    "Антихистамини и алергии": [
      "Антихистамини",
      "Назални спрейове",
      "Капки за очи",
      "Кремове за кожни алергии",
    ],
    "Храносмилателни средства": [
      "Антиациди",
      "Лаксативи",
      "Средства против диария",
      "Таблетки против подуване",
    ],
    "Продукти за първа помощ": [
      "Антисептични кремове",
      "Превръзки",
      "Разтвори за почистване на рани",
      "Спрейове за изгаряния",
    ],
  },
  "Здраве и уелнес": {
    "Витамини и добавки": [
      "Подсилване на имунитета",
      "Мултивитамини",
      "Енергийни добавки",
      "Здравина на костите",
    ],
    "Храносмилателно здраве": [
      "Пробиотици",
      "Фибри",
      "Облекчаване на киселини",
      "Лаксативи",
    ],
    "Облекчаване на болката": [
      "Облекчаване на главоболие",
      "Облекчаване на мускулна болка",
      "Облекчаване на болки в ставите",
      "Намаляване на температура",
    ],
    "Алергии и синуси": [
      "Антихистамини",
      "Деконгестанти",
      "Назални спрейове",
      "Капки за очи",
    ],
    "Настинка и грип": [
      "Сиропи за кашлица",
      "Бонбони за гърло",
      "Таблетки против запушване",
      "Термометри",
    ],
    "Сън и стрес": [
      "Мелатонин",
      "Билкови средства за сън",
      "Масла за облекчаване на стреса",
      "Добавки за релаксация",
    ],
  },
  "Лична грижа": {
    "Грижа за кожата": [
      "Хидратиращи кремове",
      "Слънцезащитни продукти",
      "Продукти против акне",
      "Анти-ейдж кремове",
    ],
    "Грижа за косата": [
      "Шампоани и балсами",
      "Масла за коса",
      "Продукти против косопад",
      "Контрол на пърхота",
    ],
    "Орална грижа": [
      "Избелващи пасти за зъби",
      "Вода за уста",
      "Глави за електрически четки",
      "Зъбен конец",
    ],
    "Мъжка козметика": [
      "Кремове за бръснене",
      "Грижа за брада",
      "Мъжки кремове за лице",
      "Дезодоранти",
    ],
    "Грижа за жените": [
      "Феминилна хигиена",
      "Менструални продукти",
      "Интимен гел",
      "Изсветляващи продукти за кожа",
    ],
  },
  "Бебета и деца": {
    "Бебешка грижа": [
      "Пелени",
      "Бебешки кремове",
      "Бебешка формула",
      "Облекчение при никнене на зъби",
    ],
    "Лекарства за деца": [
      "Продукти за намаляване на температура",
      "Сиропи за кашлица",
      "Средства против алергии",
      "Облекчаване на болка",
    ],
    "Детски витамини": [
      "Дъвчащи мултивитамини",
      "Омега-3 за деца",
      "Калциеви добавки",
      "Имунна подкрепа",
    ],
    "Бебешка храна": [
      "Био бебешка храна",
      "Пюрета",
      "Бебешки закуски",
      "Зърнени продукти за бебета",
    ],
  },
  "Фитнес и спорт": {
    "Тренировъчни основи": [
      "Протеини",
      "Добавки преди тренировка",
      "Енергийни барове",
      "Възстановителни напитки",
    ],
    "Спортно хранене": [
      "BCAA добавки",
      "Електролити",
      "Креатин",
      "Здраве на ставите",
    ],
    "Спортни аксесоари": [
      "Ластици за тренировки",
      "Постелки за йога",
      "Ролки за разтягане",
      "Фитнес тракери",
    ],
  },
  "Пътуване и открито": {
    "Здраве при пътуване": [
      "Средства против прилошаване",
      "Травъл размери за козметика",
      "Комплекти за първа помощ",
      "Репеленти против насекоми",
    ],
    Слънцезащита: [
      "Слънцезащитни кремове",
      "Лосиони след слънце",
      "Балсами за устни със SPF",
      "Шапки за пътуване",
    ],
    "Оборудване за открито": [
      "Многократни бутилки за вода",
      "Дезинфектанти за ръце",
      "Охлаждащи кърпи",
      "Раници",
    ],
  },
};

export type CategoryData = {
  ["Здраве и уелнес"]: {
    [key: string]: string[];
  };
  ["Лична грижа"]: {
    [key: string]: string[];
  };
  ["Бебета и деца"]: {
    [key: string]: string[];
  };
  ["Лекарства"]: {
    [key: string]: string[];
  };
  ["Фитнес и спорт"]: {
    [key: string]: string[];
  };
  ["Пътуване и открито"]: {
    [key: string]: string[];
  };
};
