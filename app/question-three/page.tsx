import Link from "next/link";
import { listStyle } from "../page";
import {
  responseStyles,
  linkStyles,
  questionListStyle,
} from "../question-one/page";

const QuestionThree = () => {
  return (
    <div>
      <div style={responseStyles}>
        <h1>Question Three</h1>
        <h1>
          A customer with a project on Vercel wants to know best practices
          regarding redirects. Write a response explaining best practices for
          handling redirects.
        </h1>
        <h2>
          Test thoroughly: Test your redirects thoroughly to ensure they work as
          expected. Use a preview deployment to test redirects before deploying
          them to production
        </h2>
        <h2>
          Use relative paths: Use relative paths in your destination field to
          avoid hardcoding your domain name
        </h2>
        <h2>
          Use permanent redirects: Use permanent redirects for permanent URL
          changes and temporary redirects for temporary changes
        </h2>
        <h2>
          Use wildcards carefully: Wildcards can be powerful but should be used
          with caution. For example, if you use a wildcard in a source rule that
          matches any URL path, you could inadvertently redirect all incoming
          requests to a single destination, effectively breaking your site.
        </h2>
        <h2>
          Prioritize HTTPS: Use redirects to enforce HTTPS for all requests to
          your domain
        </h2>
        <div style={linkStyles}>
          <Link
            style={listStyle}
            href={"https://vercel.com/docs/edge-network/redirects#redirects"}
            target="blank"
          >
            Redirects
          </Link>
        </div>
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
