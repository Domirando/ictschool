let state = {
    navbar: [
        {
            title: "Bosh sahifa",
            items: null
        },
        {
            title: "Maktab haqida",
            items: [
                {
                    title: "Maktab haqida",
                    items: ["Maktab hayoti", "Maktab yutuqlari", "Maktab logosi", "Qonun hujjatlari"]
                },
                {
                    title: "Tuzilma",
                    items: ["Rahbariyat", "Ilmiy kengash", "O'qituvchilar"]
                },
                {
                    title: "logo",
                    items: null
                }
            ]
        },
        {
            title: "Qabul",
            items: ["Qabul haqida", "Onlayn hujjat topshirish", "2021/2022 o'quv yili qabul natijalari"]
        },
        {
            title: "Yangiliklar",
            items: null
        },
        {
            title: "Maktab hayoti",
            items: ["E'lonlar", "Tadbirlar", "Olimpiadalar",
              {
                title: "Tanlov & Konkurslar",
                items: [{
                    title: "Al-Xorazmiy izdoshlari",
                    items: ["Kirish"]
                }]},
              {
                    title: "Loyihalar",
                    items: ["Digital Generation Uzbekistan", "Olimpiada Assotsatsiyasi", "Hour of Code"]
                },
              {
                title: "Hamkorlar",
                items: ["Huawei", "Artel", "DGUzbekistan", "UzCard", "Ucell", "Hamkor bo'lish"]
              },
              "Onlayn darslar", "Ota-onalarga", "O'quvchilar yotoqxonasi"
            ]
        },
        {
          title: "Onlayn darslar",
          items: null
        },
        {
          title: "Maktab bilan a'loqa",
          items: null
        }
    ],
    footerColumnData: [
        {
            title: "Bizning maktab",
            items: [
                {title: "Bosh sahifa", url: "/"},
                {title: "Maktab haqida", url: "/"},
                {
                    title: "Galereya",
                    url: "/",
                },
                {title: "Qabul", url: "/"},
                {title: "Maktab hayoti", url: "/"},
                {
                    title: "Yangiliklar",
                    url: "/",
                },
                {title: "Bog'lanish", url: "/"},
            ],
        },
        {
            title: "Onlayn darslar",
            items: [
                {title: "Matematika", url: "/"},
                {title: "Fizika", url: "/"},
                {
                    title: "Informatika",
                    url: "/",
                },
                {title: "Robototexnika", url: "/"},
            ],
        },
        {
            title: "Ijtimoiy tarmoqlar",
            items: [
                {title: "Telegram", url: "/"},
                {title: "Instagram", url: "/"},
                {
                    title: "YouTube",
                    url: "/",
                },
                {title: "Facebook", url: "/"},
            ],
        },
    ],
};

export default state;
