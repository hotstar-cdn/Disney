const quizzes = [
  {
    id: "quiz1",
    category: "Botany",
    title: "Plant Kingdom",
    totalQuestions: 60,
    mistakes: 2,
    questions: [
      {
        id: 1,
        question: "Which of the following is a non-vascular plant?",
        image: "images/question1.jpg", // optional
        options: [
          { text: "Moss", image: "images/option1a.jpg" },
          { text: "Fern", image: "images/option1b.jpg" },
          { text: "Pine", image: "" },
          { text: "Mango", image: "" }
        ],
        correctAnswer: 0,
        explanation: "Mosses are bryophytes and non-vascular.",
        explanationImage: "images/explain1.jpg"
      },
      {
        id: 2,
        question: "Identify the type of algae shown.",
        image: "images/question2.jpg",
        options: [
          { text: "Red Algae", image: "images/option2a.jpg" },
          { text: "Green Algae", image: "images/option2b.jpg" },
          { text: "Brown Algae", image: "images/option2c.jpg" },
          { text: "Blue-Green Algae", image: "images/option2d.jpg" }
        ],
        correctAnswer: 1,
        explanation: "Green algae contain chlorophyll a and b.",
        explanationImage: "images/explain2.jpg"
      }
    ]
  },
  {
    id: "quiz2",
    category: "Chemistry",
    title: "Organic Compounds",
    totalQuestions: 45,
    mistakes: 0,
    questions: [
      {
        id: 1,
        question: "What is the IUPAC name of CH3-CH2-OH?",
        options: [
          { text: "Methanol", image: "" },
          { text: "Ethanol", image: "" },
          { text: "Propanol", image: "" },
          { text: "Butanol", image: "" }
        ],
        correctAnswer: 1,
        explanation: "Ethanol has two carbon atoms with OH group on the 2nd.",
        explanationImage: ""
      }
    ]
  }
];
