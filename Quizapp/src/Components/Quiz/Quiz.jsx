import React, { useRef, useState, useEffect } from "react";
import { data } from "../../assets/data";

const Quiz = () => {
  const [category, setCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [lock, setLock] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);
  const option_array = [Option1, Option2, Option3, Option4];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "lofi",
    "coffee",
    "cyberpunk",
  ];

  const startQuiz = (selectedCategory) => {
    setCategory(selectedCategory);
    setQuestions(data[selectedCategory]);
    setIndex(0);
    setScore(0);
    setResult(false);
  };

  const checkAns = (element, ans) => {
    if (!lock) {
      if (questions[index].ans === ans) {
        element.target.classList.add("bg-green-500", "text-white");
        setScore((prev) => prev + 1);
      } else {
        element.target.classList.add("bg-red-500", "text-white");
        option_array[questions[index].ans - 1].current.classList.add(
          "bg-green-500",
          "text-white"
        );
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === questions.length - 1) {
        setResult(true);
        return;
      }
      setIndex(index + 1);
      setLock(false);
      option_array.forEach((option) => {
        option.current.classList.remove(
          "bg-red-500",
          "bg-green-500",
          "text-white"
        );
      });
    }
  };

  const resetQuiz = () => {
    setCategory(null);
    setQuestions([]);
    setIndex(0);
    setScore(0);
    setResult(false);
    setLock(false);
  };

  const handleCategorySelect = (cat) => {
    const allQuestions = data[cat]; // Get all questions from the selected category
    const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5); // Shuffle
    const selectedQuestions = shuffledQuestions.slice(0, 5); // Pick 5 random questions

    setCategory(cat);
    setQuestions(selectedQuestions);
    setIndex(0);
    setScore(0);
    setResult(false);
    setLock(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-100">
      <div className="w-full max-w-xl p-6 bg-base-200 rounded-lg shadow-lg">
        {/* Theme Selector */}
        <div className="mb-4 text-center">
          <label className="block text-lg font-semibold mb-2">
            Select Theme
          </label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="select select-bordered w-full"
          >
            {themes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {!category ? (
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Select a Category
            </h2>
            <div className="grid gap-4">
              {Object.keys(data).map((cat) => (
                <div key={cat}>
                  <button
                    onClick={() => handleCategorySelect(cat)}
                    className="btn btn-primary"
                  >
                    {cat}
                  </button>
                  <p className="mt-2 text-gray-600">
                    {data[cat].length} questions available
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : result ? (
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Quiz Completed!
            </h2>
            <p className="text-xl text-gray-700">
              Your score: {score} / {questions.length}
            </p>
            <button onClick={resetQuiz} className="btn btn-warning w-full mt-4">
              Reset Quiz
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {index + 1}. {questions[index].question}
            </h2>
            <ul className="space-y-4">
              <li
                ref={Option1}
                className="p-4 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 transition"
                onClick={(e) => checkAns(e, 1)}
              >
                {questions[index].option1}
              </li>
              <li
                ref={Option2}
                className="p-4 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 transition"
                onClick={(e) => checkAns(e, 2)}
              >
                {questions[index].option2}
              </li>
              <li
                ref={Option3}
                className="p-4 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 transition"
                onClick={(e) => checkAns(e, 3)}
              >
                {questions[index].option3}
              </li>
              <li
                ref={Option4}
                className="p-4 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 transition"
                onClick={(e) => checkAns(e, 4)}
              >
                {questions[index].option4}
              </li>
            </ul>
            <button onClick={next} className="btn btn-primary w-full mt-4">
              Next
            </button>
            <div className="mt-4 text-center text-gray-600">
              {index + 1} of {questions.length} questions
            </div>
          </>
        )}
        {!result && category && (
          <button onClick={resetQuiz} className="btn btn-warning w-full mt-4">
            Reset Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
