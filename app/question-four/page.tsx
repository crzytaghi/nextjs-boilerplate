import Link from "next/link";
import { listStyle } from "../page";
import {
  responseStyles,
  linkStyles,
  questionListStyle,
} from "../question-one/page";

const QuestionFour = () => {
  return (
    <div>
      <div style={responseStyles}>
        <h1>Question Four</h1>
        <h1>
          A customer, sold Vercel through a reseller, has reached out for
          information about the product. Write a 2-5 sentence introduction that
          showcases what Vercel does.
        </h1>
        <h2>
          Vercels Frontend Cloud offers support for deploying complex and
          dynamic web applications with managed infrastructure so you have
          control and flexibility without having to worry about configuration
          and maintenance. Vercel allows for every PR to have its own, fully
          operational, staging environment for more efficient testing, allowing
          for team members to review and leave comments directly on the UI.
          Vercel also allows for seamless API and database integrations with
          MySQL, Postgres, MongoDB, and Redis. Finally, Vercel offers a robust
          authentication system that allows developers to manage user auth with
          third party services like Okta, AWS Cognito, and Google Sign-in to
          ensure you can easily integrate with the most popular identity
          providers.
        </h2>
        <div style={linkStyles}>
          <Link
            style={listStyle}
            href={
              "https://vercel.com/blog/building-secure-and-performant-web-applications-on-vercel"
            }
            target="blank"
          >
            Vercel
          </Link>
        </div>
      </div>
      <div>
        <ul style={questionListStyle}>
          <li>
            <Link style={listStyle} href={"../question-three"}>
              Prev Question
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../"}>
              Home
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../question-five"}>
              Next Question
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuestionFour;
