const alphabet = [
  {
    index: 1,
    isolated_form: "أ",
    reading: "Alif",
    letter_highlight: {
      first_letter: {
        text: "أسد",
        start: 0,
        end: 30
      },
      middle_letter: {
        text: "فـأس",
        start: 25,
        end: 45
      },
      last_letter: {
        text: "سبـأ",
        start: 60,
        end: 80
      },
    },
  },

  {
    index: 2,
    isolated_form: "ب",
    reading: "Ba'",
    letter_highlight: {
      first_letter: {
        text: "بـئر",
        start: 0,
        end: 45
      },
      middle_letter: {
        text: "كـبـر",
        start: 45,
        end: 70
      },
      last_letter: {
        text: "كلـب",
        start: 50,
        end: 100
      },
    },
  },

  {
    index: 3,
    isolated_form: "ت",
    reading: "Ta'",
      letter_highlight: {
        first_letter: {
          text: "تـمر",
          start: 0,
          end: 40
        },
        middle_letter: {
          text: "كـتب",
          start: 40,
          end: 57
        },
        last_letter: {
          text: "بنت",
          start: 40,
          end: 90
        },
      },
  },

  {
    index: 4,
    isolated_form: "ث",
    reading: "Tha'",
    letter_highlight: {
      first_letter: {
        text: "ثـوم",
        start: 0,
        end: 35
      },
      middle_letter: {
        text: "كـثـير",
        start: 45,
        end: 60
      },
      last_letter: {
        text: "بحـث",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 5,
    isolated_form: "ج",
    reading: "Jim",
    letter_highlight: {
      first_letter: {
        text: "جـمل",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "نـجـم",
        start: 25,
        end: 60
      },
      last_letter: {
        text: "نسيـج",
        start: 55,
        end: 100
      },
    },
  },

  {
    index: 6,
    isolated_form: "ح",
    reading: "Hha'",
    letter_highlight: {
      first_letter: {
        text: "حبل",
        start: 0,
        end: 45
      },
      middle_letter: {
        text: "الـحـج",
        start: 25,
        end: 60
      },
      last_letter: {
        text: "بـلـح",
        start: 45,
        end: 90
      },
    },
  },

  {
    index: 7,
    isolated_form: "خ",
    reading: "Kha'",
    letter_highlight: {
      first_letter: {
        text: "خـبز",
        start: 0,
        end: 50
      },
      middle_letter: {
        text: "بـخار",
        start: 30,
        end:60
      },
      last_letter: {
        text: "مريـخ",
        start: 60,
        end: 100
      },
    },
  },

  {
    index: 8,
    isolated_form: "د",
    reading: "Dal",
    letter_highlight: {
      first_letter: {
        text: "دار",
        start: 0,
        end: 45
      },
      middle_letter: {
        text: "بـدر",
        start: 30,
        end: 60
      },
      last_letter: {
        text: "بلـد",
        start: 45,
        end: 90
      },
    },
  },

  {
    index: 9,
    isolated_form: "ذ",
    reading: "Dhal",
    letter_highlight: {
      first_letter: {
        text: "ذئب",
        start: 0,
        end: 35
      },
      middle_letter: {
        text: "مذاق",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "لذيـذ",
        start: 60,
        end: 90
      },
    },
  },

  {
    index: 10,
    isolated_form: "ر",
    reading: "Ra'",
    letter_highlight: {
      first_letter: {
        text: "رمل",
        start: 0,
        end: 37
      },
      middle_letter: {
        text: "كـرة",
        start: 50,
        end: 73
      },
      last_letter: {
        text: "كبيـر",
        start: 70,
        end: 100
      },
    },
  },

  {
    index: 11,
    isolated_form: "ز",
    reading: "Zay",
    letter_highlight: {
      first_letter: {
        text: "زبيب",
        start: 0,
        end: 30
      },
      middle_letter: {
        text: "مـنـزل",
        start: 45,
        end: 71
      },
      last_letter: {
        text: "موز",
        start: 61,
        end: 90
      },
    },
  },

  {
    index: 12,
    isolated_form: "س",
    reading: "Sin",
    letter_highlight: {
      first_letter: {
        text: "سفر",
        start: 0,
        end: 45
      },
      middle_letter: {
        text: "مسجد",
        start: 22,
        end: 47
      },
      last_letter: {
        text: "شمـس",
        start: 45,
        end: 100
      },
    },
  },

  {
    index: 13,
    isolated_form: "ش",
    reading: "Chin",
    letter_highlight: {
      first_letter: {
        text: "شباب",
        start: 0,
        end: 30
      },
      middle_letter: {
        text: "خشب",
        start: 30,
        end: 60
      },
      last_letter: {
        text: "كبش",
        start: 50,
        end: 100
      },
    },
  },

  {
    index: 14,
    isolated_form: "ص",
    reading: "Sad",
    letter_highlight: {
      first_letter: {
        text: "صباح",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "مصر",
        start: 30,
        end: 60
      },
      last_letter: {
        text: "فحص",
        start: 38,
        end: 100
      },
    },
  },

  {
    index: 15,
    isolated_form: "ض",
    reading: "Dad",
    letter_highlight: {
      first_letter: {
        text: "ضوء",
        start: 0,
        end: 45
      },
      middle_letter: {
        text: "أخضر",
        start: 46,
        end: 75
      },
      last_letter: {
        text: "بيض",
        start: 32,
        end: 100
      },
    },
  },

  {
    index: 16,
    isolated_form: "ط",
    reading: "Ta'",
    letter_highlight: {
      first_letter: {
        text: "طـبل",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بـطـل",
        start: 25,
        end: 55
      },
      last_letter: {
        text: "خـط",
        start: 48,
        end: 90
      },
    },
  },

  {
    index: 17,
    isolated_form: "ظ",
    reading: "Dha'",
    letter_highlight: {
      first_letter: {
        text: "ظبـي",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "عظـيم",
        start: 30,
        end: 60
      },
      last_letter: {
        text: "حـظ",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 18,
    isolated_form: "ع",
    reading: "Aayn",
    letter_highlight: {
      first_letter: {
        text: "عـنب",
        start: 0,
        end: 35
      },
      middle_letter: {
        text: "لـعـبة",
        start: 25,
        end: 55
      },
      last_letter: {
        text: "رائــع",
        start: 55,
        end: 90
      },
    },
  },

  {
    index: 19,
    isolated_form: "غ",
    reading: "Ghayn",
    letter_highlight: {
      first_letter: {
        text: "غـسق",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "لـغـة",
        start: 30,
        end: 60
      },
      last_letter: {
        text: "صمــغ",
        start: 55,
        end: 100
      },
    },
  },

  {
    index: 20,
    isolated_form: "ف",
    reading: "Fa'",
    letter_highlight: {
      first_letter: {
        text: "فـيـل",
        start: 0,
        end: 30
      },
      middle_letter: {
        text: "مـفـيد",
        start: 30,
        end: 55
      },
      last_letter: {
        text: "سيـف",
        start: 50,
        end: 100
      },
    },
  },

  {
    index: 21,
    isolated_form: "ق",
    reading: "Qhaf",
    letter_highlight: {
      first_letter: {
        text: "قبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بقب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببق",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 22,
    isolated_form: "ك",
    reading: "Kaf",
    letter_highlight: {
      first_letter: {
        text: "كبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بكب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببك",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 23,
    isolated_form: "ل",
    reading: "Lam",
    letter_highlight: {
      first_letter: {
        text: "لبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بلب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببل",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 24,
    isolated_form: "م",
    reading: "mim",
    letter_highlight: {
      first_letter: {
        text: "مبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بمب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببم",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 25,
    isolated_form: "ن",
    reading: "noun",
    letter_highlight: {
      first_letter: {
        text: "نبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بنب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببن",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 26,
    isolated_form: "ه",
    reading: "Ha'",
    letter_highlight: {
      first_letter: {
        text: "هبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بهب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببه",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 27,
    isolated_form: "و",
    reading: "Waw",
    letter_highlight: {
      first_letter: {
        text: "وبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بوب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببو",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 28,
    isolated_form: "ي",
    reading: "Ya'",
    letter_highlight: {
      first_letter: {
        text: "يبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بيب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببي",
        start: 50,
        end: 90
      },
    },
  },

];

export default alphabet;
