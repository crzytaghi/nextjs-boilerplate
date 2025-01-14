import Link from "next/link";
import { listStyle, questionListStyle, responseStyles } from "../appStyles";

const QuestionEight = () => {
  return (
    <div>
      <div style={responseStyles}>
        <h1>Question Eight</h1>
        <h1>How could we improve or alter this familiarization exercise?</h1>
        <h2>
          Base on previous experience with this exercise, I feel as though there
          has been improvements made in incorporating more scenario-based
          challenges.
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
