import Link from "next/link";
import { listStyle } from "../page";
import {
  responseStyles,
  linkStyles,
  questionListStyle,
} from "../question-one/page";

const QuestionFive = () => {
  return (
    <div>
      <div style={responseStyles}>
        <h1>Question Five</h1>
        <h1>
          A customer just starting with Vercel has questions about third-party
          integrations for Monitoring or Logging. How would you recommend
          options to the customer?
        </h1>
        <h2>
          Vercel integrates well with third-party services like Datadog, Sentry,
          and Logflare for monitoring and logging. For monitoring performance
          and uptime, Datadog offers robust capabilities, while Sentry is a
          popular choice for error tracking. Logflare, which is specifically
          optimized for Vercel, provides real-time logging and analytics to help
          diagnose issues quickly.
        </h2>
        <div style={linkStyles}>
          <Link
            style={listStyle}
            href={
              "https://blog.sentry.io/enable-suspect-commits-unminify-js-and-track-releases-with-vercel-and-sentry/"
            }
            target="blank"
          >
            Sentry
          </Link>
          <Link
            style={listStyle}
            href={"https://docs.logflare.app/integrations/vercel/"}
            target="blank"
          >
            LogFlare
          </Link>
        </div>
      </div>
      <div>
        <ul style={questionListStyle}>
          <li>
            <Link style={listStyle} href={"../question-four"}>
              Prev Question
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../"}>
              Home
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../question-six"}>
              Next Question
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuestionFive;
