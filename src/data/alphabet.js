const alphabet = [
  {
    index: 1,
    isolated_form: "أ",
    reading: "Alif",
    letter_highlight: {
      first_letter: {
        text: "أبب",
        start: 0,
        end: 25
      },
      middle_letter: {
        text: "بأب",
        start: 25,
        end: 45
      },
      last_letter: {
        text: "ببأ",
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
        text: "ببب",
        start: 0,
        end: 25
      },
      middle_letter: {
        text: "ببب",
        start: 25,
        end: 40
      },
      last_letter: {
        text: "ببب",
        start: 40,
        end: 90
      },
    },
  },

  {
    index: 3,
    isolated_form: "ت",
    reading: "Ta'",
      letter_highlight: {
        first_letter: {
          text: "تبب",
          start: 0,
          end: 25
        },
        middle_letter: {
          text: "بتب",
          start: 25,
          end: 40
        },
        last_letter: {
          text: "ببت",
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
        text: "تـتـت",
        start: 0,
        end: 25
      },
      middle_letter: {
        text: "بثب",
        start: 25,
        end: 40
      },
      last_letter: {
        text: "ببث",
        start: 40,
        end: 90
      },
    },
  },

  {
    index: 5,
    isolated_form: "ج",
    reading: "Jiim",
    letter_highlight: {
      first_letter: {
        text: "جبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بجب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببج",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 6,
    isolated_form: "ح",
    reading: "Hha'",
    letter_highlight: {
      first_letter: {
        text: "حبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بحب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببح",
        start: 50,
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
        text: "خبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بخب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببخ",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 8,
    isolated_form: "د",
    reading: "Dal",
    letter_highlight: {
      first_letter: {
        text: "دبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بدب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببد",
        start: 50,
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
        text: "ذبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بذب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببذ",
        start: 50,
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
        text: "ربب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "برب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببر",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 11,
    isolated_form: "ز",
    reading: "Zay",
    letter_highlight: {
      first_letter: {
        text: "زبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بزط",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببز",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 12,
    isolated_form: "س",
    reading: "Siin",
    letter_highlight: {
      first_letter: {
        text: "سبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بسب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببس",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 13,
    isolated_form: "ش",
    reading: "Chiin",
    letter_highlight: {
      first_letter: {
        text: "شبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بشب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببش",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 14,
    isolated_form: "ص",
    reading: "Saad",
    letter_highlight: {
      first_letter: {
        text: "صبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بصب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببص",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 15,
    isolated_form: "ض",
    reading: "Daad",
    letter_highlight: {
      first_letter: {
        text: "ضبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بضب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببض",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 16,
    isolated_form: "ط",
    reading: "Taa'",
    letter_highlight: {
      first_letter: {
        text: "طبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بطب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببط",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 17,
    isolated_form: "ظ",
    reading: "Dhaa'",
    letter_highlight: {
      first_letter: {
        text: "ظبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بظب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببظ",
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
        text: "عبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بعب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببع",
        start: 50,
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
        text: "غبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بغب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببغ",
        start: 50,
        end: 90
      },
    },
  },

  {
    index: 20,
    isolated_form: "ف",
    reading: "Faa'",
    letter_highlight: {
      first_letter: {
        text: "فبب",
        start: 0,
        end: 40
      },
      middle_letter: {
        text: "بفب",
        start: 20,
        end: 50
      },
      last_letter: {
        text: "ببف",
        start: 50,
        end: 90
      },
    },
  },

];

export default alphabet;
