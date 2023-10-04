const quizData = [
    {
      question: "1. चुंबकीय फ्लक्स का एसआई गुणक है :",
      a: " ओम",
      b: " वेबर",
      c: " टेस्ला",
      d: " इनसे कोई नहीं",
      correct: "b",
    },
    {
      question:" 2. ताँबा होता है :",
      a: "अनुचुंबकीय",
      b:" लोम-चुंबकीय",
      c: "प्रति-चुंबकीय",
      d: "अर्ध-चालक",
      correct: "c",
    },
    {
      question: "3. प्रकाश तन्तु संचार किस घटना पर आधारित है",
      a: "सम्पूर्ण आंतरिक परावर्तन",
      b: "प्रकीर्णन",
      c: " विवर्तन",
      d: " अपवर्तन",
      correct: "a",
    },
    {
      question: "4. एक वस्तु के तीन प्रतिबिम्ब प्राप्त करने के लिए दो समतल दर्पण को…… कोण झुका कर रखना होता है।",
      a: "  60°",
      b: " 90°",
      c: " 120°",
      d: " 30°",
      correct: "b",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          ` // location.reload() won't work in CodePen for security reasons;
      }
    }
  });
