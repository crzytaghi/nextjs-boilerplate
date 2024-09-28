import Link from "next/link";
import { listStyle } from "../page";
import {
  linkStyles,
  questionListStyle,
  responseStyles,
} from "../question-one/page";

const QuestionTwo = () => {
  return (
    <div>
      <div style={responseStyles}>
        <h1>Question Two</h1>
        <h1>
          A customer has asked, When should I choose Edge Functions, Serverless
          Functions, or Edge Middleware with Vercel?
        </h1>
        <h2>
          Edge functions are more efficiently used when being run in the
          geographical location near the user. Edge functions are built on the
          edge runtime and are more cost effective when you need lightweight
          javascript functions.
        </h2>
        <h2>
          Serverless functions are better utilized for backend queries such as
          API integrations, database queries, or data processing. Serverless
          functions utilize the Node.js runtime and give you access to all of
          the node.js APIs that you would expect for writing on the web.
        </h2>
        <h2>
          Edge Middleware is code that executes before a request is processed on
          a site. Based on the request, you can modify the response. Because it
          runs before the cache, using Middleware is an effective way of
          providing personalization to statically generated content. Depending
          on the incoming request, you can execute custom logic, rewrite,
          redirect, add headers and more, before returning a response.
        </h2>
        <div style={linkStyles}>
          <Link
            style={listStyle}
            href={"https://vercel.com/docs/functions"}
            target="blank"
          >
            Functions
          </Link>
          <Link
            style={listStyle}
            href={"https://vercel.com/docs/functions/edge-middleware"}
            target="blank"
          >
            Edge Middleware
          </Link>
        </div>
      </div>
      <div>
        <ul style={questionListStyle}>
          <li>
            <Link style={listStyle} href={"../question-one"}>
              Prev Question
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../"}>
              Home
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../question-three"}>
              Next Question
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuestionTwo;
