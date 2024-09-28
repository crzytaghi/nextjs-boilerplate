import Link from "next/link";
import { listStyle } from "../page";
import {
  responseStyles,
  linkStyles,
  questionListStyle,
} from "../question-one/page";

const QuestionSeven = () => {
  return (
    <div>
      <div style={responseStyles}>
        <h1>Question Seven</h1>
        <h1>
          A CISO from a firm recently signed onto Vercel Enterprise with Secure
          Compute and is preparing for an onboarding session. What resources
          would you prepare to ensure the CISO has everything they need for a
          smooth migration?
        </h1>
        <h2>
          A detailed overview of Vercel Secure Compute capabilities, focusing on
          security features like encryption, access control, and data
          protection.
        </h2>
        <h2>
          Documentation and videos on Enterprise-specific features such as
          custom security policies, compliance certifications, and monitoring.
        </h2>
        <h2>
          A guide to Secure Middleware and Edge Functions for handling data
          securely at the edge such as JWT authentication
        </h2>
        <h2>
          Migration best practices and checklists to ensure a smooth transition
          to the Enterprise platform.
        </h2>
        <div style={linkStyles}>
          <Link
            style={listStyle}
            href={"https://vercel.com/docs/security/secure-compute"}
            target="blank"
          >
            Secure Compute
          </Link>
          <Link
            style={listStyle}
            href={"https://vercel.com/docs/accounts/plans/enterprise"}
            target="blank"
          >
            Enterprise
          </Link>
          <Link
            style={listStyle}
            href={"https://vercel.com/templates/next.js/jwt-authentication"}
            target="blank"
          >
            JWT Authentication
          </Link>
        </div>
      </div>
      <div>
        <ul style={questionListStyle}>
          <li>
            <Link style={listStyle} href={"../question-six"}>
              Prev Question
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../"}>
              Home
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../question-eight"}>
              Next Question
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuestionSeven;
