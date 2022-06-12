let state = {
  navbar: [
    {
      title: "Bosh sahifa",
      url: "/",
      submenu: null,
    },
    {
      title: "Maktab haqida",
      url: "/smth",
      submenu: [
        {
          title: "Maktab haqida",
          url: "/smth",
          submenu: [
            {
              title: "Maktab hayoti",
              url: "/smth",
              submenu: null,
            },
            { title: "Maktab yutuqlari", url: "/smth", submenu: null },
            { title: "Maktab logosi", url: "/smth", submenu: null },
            { title: "Qonun hujjatlari", url: "/smth", submenu: null },
          ],
        },
        {
          title: "Tuzilma",
          url: "/smth",
          submenu: [
            { title: "Rahbariyat", url: "/smth", submenu: null },
            { title: "Ilmiy kengash", url: "/smth", submenu: null },
            { title: "O'qituvchilar", url: "/smth", submenu: null },
          ],
        },
        {
          title: "Ta`lim tizimi",
          url: "/smth",
          submenu: [
            { title: "O'quv tizimi", url: "/smth", submenu: null },
            { title: "STEAM ta'lim", url: "/smth", submenu: null },
            { title: "Qo'shimcha ta'lim", url: "/smth", submenu: null },
            { title: "Qo'shimcha imkoniyatlar", url: "/smth", submenu: null },
          ],
        },
        {
          title: "logo",
          url: "/smth",
          submenu: null,
        },
      ],
    },
    {
      title: "Qabul",
      url: "/qabul",
      submenu: [
        { title: "Qabul haqida", url: "/qabul", submenu: null },
        {
          title: "Onlayn hujjat topshirish",
          url: "https://ariza.piima.uz/",
          submenu: null,
        },
        {
          title: "2021/2022 o'quv yili qabul natijalari",
          url: "https://ariza.piima.uz/",
          submenu: null,
        },
      ],
    },
    {
      title: "Yangiliklar",
      url: "/smth",
      submenu: null,
    },
    {
      title: "Maktab hayoti",
      url: "/smth",
      submenu: [
        { title: "E'lonlar", url: "/smth", submenu: null },
        { title: "Tadbirlar", url: "/smth", submenu: null },
        { title: "Olimpiadalar", url: "/smth", submenu: null },
        {
          title: "Tanlov & Konkurslar",
          url: "/smth",
          submenu: [
            {
              title: "Al-Xorazmiy izdoshlari",
              url: "/smth",
              submenu: [{ title: "Kirish", url: "/smth", submenu: null }],
            },
            {
              title: "Digital Camp",
              url: "/",
              submenu: null,
            },
            {
              title: "GG Girls",
              url: "/",
              submenu: null,
            },
            {
              title: "Startup Weekend",
              url: "/",
              submenu: null,
            },
          ],
        },
        {
          title: "Loyihalar",
          url: "/smth",
          submenu: [
            {
              title: "Digital Generation Uzbekistan",
              url: "/smth",
              submenu: null,
            },
            { title: "Olimpiada Assotsatsiyasi", url: "/smth", submenu: null },
            { title: "Hour of Code", url: "/smth", submenu: null },
          ],
        },
        {
          title: "Hamkorlar",
          url: "/smth",
          submenu: [
            { title: "Huawei", url: "/smth", submenu: null },
            { title: "Artel", url: "/smth", submenu: null },
            { title: "DGUzbekistan", url: "/smth", submenu: null },
            { title: "UzCard", url: "/smth", submenu: null },
            { title: "Ucell", url: "/smth", submenu: null },
            { title: "Hamkor bo'lish", url: "/smth", submenu: null },
          ],
        },
        { title: "Onlayn darslar", url: "/smth", submenu: null },
        { title: "Ota-onalarga", url: "/smth", submenu: null },
        { title: "O'quvchilar yotoqxonasi", url: "/smth", submenu: null },
      ],
    },
    {
      title: "Onlayn darslar",
      url: "/smth",
      submenu: null,
    },
    {
      title: "Bog'lanish",
      url: "/smth",
      submenu: [
        {
          title: "Maktab bilan a'loqa",
          url: "/smth",
          submenu: null,
        },
      ],
    },
  ],
  footerColumnData: [
    {
      title: "Bizning maktab",
      items: [
        { title: "Bosh sahifa", url: "/" },
        { title: "Maktab haqida", url: "/" },
        {
          title: "Galereya",
          url: "/",
        },
        { title: "Qabul", url: "/" },
        { title: "Maktab hayoti", url: "/" },
        {
          title: "Yangiliklar",
          url: "/",
        },
        { title: "Bog'lanish", url: "/" },
      ],
    },
    {
      title: "Onlayn darslar",
      items: [
        { title: "Matematika", url: "/" },
        { title: "Fizika", url: "/" },
        {
          title: "Informatika",
          url: "/",
        },
        { title: "Robototexnika", url: "/" },
      ],
    },
    {
      title: "Ijtimoiy tarmoqlar",
      items: [
        { title: "Telegram", url: "/" },
        { title: "Instagram", url: "/" },
        {
          title: "YouTube",
          url: "/",
        },
        { title: "Facebook", url: "/" },
      ],
    },
  ],
};

export default state;
