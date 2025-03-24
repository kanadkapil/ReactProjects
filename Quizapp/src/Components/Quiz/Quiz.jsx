import React, { useRef, useState } from "react";
import { data } from "../../assets/data";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestions] = useState(data[index]);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [lock, setLock] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (element, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        element.target.classList.add("bg-green-500", "text-white");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        element.target.classList.add("bg-red-500", "text-white");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("bg-green-500", "text-white");
      }
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);  // Set result to true when quiz is finished
        return;
      }

      // Correct way to increment state
      setIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        setQuestions(data[nextIndex]);
        return nextIndex;
      });
      setLock(false);

      // Reset classes on options for the next question
      option_array.forEach((option) => {
        option.current.classList.remove("bg-red-500", "bg-green-500", "text-white");
      });
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setQuestions(data[0]);
    setScore(0);
    setResult(false);
    setLock(false);

    option_array.forEach((option) => {
      option.current.classList.remove("bg-red-500", "bg-green-500", "text-white");
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
        {result ? (
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Quiz Completed!</h2>
            <p className="text-xl text-gray-700">Your score: {score} / {data.length}</p>
            <button
              onClick={resetQuiz}
              className="mt-6 w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
            >
              Reset Quiz
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {index + 1}. {question.question}
            </h2>
            <ul className="space-y-4">
              <li
                ref={Option1}
                className="p-4 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 transition"
                onClick={(element) => checkAns(element, 1)}
              >
                {question.option1}
              </li>
              <li
                ref={Option2}
                className="p-4 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 transition"
                onClick={(element) => checkAns(element, 2)}
              >
                {question.option2}
              </li>
              <li
                ref={Option3}
                className="p-4 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 transition"
                onClick={(element) => checkAns(element, 3)}
              >
                {question.option3}
              </li>
              <li
                ref={Option4}
                className="p-4 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 transition"
                onClick={(element) => checkAns(element, 4)}
              >
                {question.option4}
              </li>
            </ul>
            <button
              onClick={next}
              className="mt-6 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Next
            </button>
            <div className="mt-4 text-center text-gray-600">
              {index + 1} of {data.length} questions
            </div>
          </>
        )}
        {!result && (
          <button
            onClick={resetQuiz}
            className="mt-4 w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
          >
            Reset Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
