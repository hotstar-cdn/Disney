const questions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "Which are chain isomers?",
    questionImage: "images/q1.jpg",
    options: [
      { text: "Isobutane and Butane", image: "images/opt1.jpg" },
      { text: "Ethanol and Dimethyl ether", image: "images/opt2.jpg" },
      { text: "Methane and Ethane", image: "" },
      { text: "Ethene and Ethyne", image: "" }
    ],
    answer: 0,
    solution: "Chain isomers differ in carbon chain arrangement. Isobutane and Butane are classic examples."
  },
  {
    id: 2,
    difficulty: "Medium",
    question: "Which molecule is trans form?",
    questionImage: "images/q2.jpg",
    options: [
      { text: "Cis-2-butene", image: "images/opt3.jpg" },
      { text: "Trans-2-butene", image: "images/opt4.jpg" },
      { text: "Cyclobutane", image: "" },
      { text: "Benzene", image: "" }
    ],
    answer: 1,
    solution: "Trans-2-butene has opposite groups across the double bond—this makes it trans."
  },
  {
    id: 3,
    difficulty: "Hard",
    question: "Total number of stereoisomers of the compound below?",
    questionImage: "images/q3.jpg",
    options: [
      { text: "4", image: "" },
      { text: "8", image: "" },
      { text: "2", image: "" },
      { text: "6", image: "" }
    ],
    answer: 0,
    solution: "Number of stereoisomers = 2ⁿ where n = number of chiral centers."
  },
  {
    id: 4,
    difficulty: "Hard",
    question: "If 2 moles of monoatomic gas mix with 1 mole of triatomic gas, γ will be:",
    questionImage: "",
    options: [
      { text: "2", image: "" },
      { text: "2.5", image: "" },
      { text: "1.5", image: "" },
      { text: "1", image: "" }
    ],
    answer: 2,
    solution: "γ = Cp/Cv. Monoatomic has γ = 1.67, triatomic ~1.3. Weighted average ≈ 1.5."
  }
];
