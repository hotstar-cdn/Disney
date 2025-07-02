const quizData = {
  code1: {
    title: "Mixed Quiz Examples",
    questions: [
      // 1. Text question, Text options
      {
        text: "Which planet is known as the Red Planet?",
        image: "no",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        optionImages: ["no", "no", "no", "no"],
        answer: "B"
      },

      // 2. Image question, Text options
      {
        text: "Which animal is shown in the image?",
        image: "yes",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
        options: ["Tiger", "Leopard", "Lion", "Jaguar"],
        optionImages: ["no", "no", "no", "no"],
        answer: "C"
      },

      // 3. Text question, Image options
      {
        text: "Select the structure of water (H₂O):",
        image: "no",
        options: [
          "https://upload.wikimedia.org/wikipedia/commons/6/6b/Water_molecule_3D.png",   // Correct
          "https://upload.wikimedia.org/wikipedia/commons/8/83/Methane-3D-balls.png",
          "https://upload.wikimedia.org/wikipedia/commons/9/94/Ethanol-3D-vdW.png",
          "https://upload.wikimedia.org/wikipedia/commons/1/15/Carbon-dioxide-3D-vdW.png"
        ],
        optionImages: ["yes", "yes", "yes", "yes"],
        answer: "A"
      },

      // 4. Image question, Image options
      {
        text: "Which image shows glucose?",
        image: "yes",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Glucose_Haworth.png",
        options: [
          "https://upload.wikimedia.org/wikipedia/commons/f/f1/Glucose_Haworth.png",  // Correct
          "https://upload.wikimedia.org/wikipedia/commons/f/f3/Fructose_Haworth.png",
          "https://upload.wikimedia.org/wikipedia/commons/b/b3/Galactose_Haworth.png",
          "https://upload.wikimedia.org/wikipedia/commons/f/f9/Ribose_Haworth.png"
        ],
        optionImages: ["yes", "yes", "yes", "yes"],
        answer: "A"
      }
    ]
  }
};
