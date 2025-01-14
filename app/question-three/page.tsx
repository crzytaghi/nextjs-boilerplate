import Link from "next/link";
import {
  linkStyles,
  listStyle,
  questionListStyle,
  responseStyles,
} from "../appStyles";

const QuestionThree = () => {
  return (
    <div>
      <div style={responseStyles}>
        <h1>Question Three</h1>
        <h2>
          Hi Alex, I hope this email finds you well. I wanted to reach out as
          we've noticed some changes in your team's usage of Vercel, with a
          reduction in builds and overall activity. I also understand that
          Tanner, who previously led this project, is no longer with the
          company. As the engineering manager, I would love to reconnect and
          understand how we can best support your goals moving forward.
        </h2>
        <h2>
          Some areas of concern that I noticed were in the build phase, I'd love
          to chat more about this and see if we can get to the root cause to
          alleviate these issues and ensure you are optimized moving forward.
          Additionally, I would love to understand how we can help align your
          web performance with you team's goals, like increasing engagement or
          optimizing conversions.
        </h2>
        <h2>
          If you are available, I would like to schedule a quick call to discuss
          your goals and challenges. Our aim is to ensure your team gets the
          most out of our product while continuing to elevate your online
          presence.
        </h2>
      </div>
      <div>
        <ul style={questionListStyle}>
          <li>
            <Link style={listStyle} href={"../question-two"}>
              Prev Question
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../"}>
              Home
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../question-four"}>
              Next Question
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuestionThree;
