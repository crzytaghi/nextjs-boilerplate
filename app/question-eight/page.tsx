import Link from "next/link";
import { listStyle } from "../page";
import { responseStyles, questionListStyle } from "../question-one/page";

const QuestionEight = () => {
  return (
    <div>
      <div style={responseStyles}>
        <h1>Question Eight</h1>
        <h1>How could we improve or alter this familiarization exercise?</h1>
        <h2>
          To improve this exercise, consider providing more scenario-based
          challenges that require interacting with actual Vercel tools or
          platforms. Additionally, incorporating more hands-on practice with key
          features like Edge Functions or Secure Middleware could deepen
          understanding.
        </h2>
      </div>
      <div>
        <ul style={questionListStyle}>
          <li>
            <Link style={listStyle} href={"../question-seven"}>
              Prev Question
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../"}>
              Home
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../question-one"}>
              Next Question
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuestionEight;
