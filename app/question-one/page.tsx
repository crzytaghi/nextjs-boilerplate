import Link from "next/link";
import { listStyle } from "../page";

const QuestionOne = () => {
  return (
    <div>
      <div style={responseStyles}>
        <h1>Question One</h1>
        <h1>
          Compare the similarities and differences between Next.js and React
        </h1>
        <h2>
          Similarities: Next.js is a javascript framework that is built on top
          of react. That means that you can write your next.js components as you
          would your react components using the same component based
          architecture, JSX syntax, and react ecosystems. They also both utilize
          the virtual DOM, only updating portions of the DOM that are being
          changed, for more efficient page rendering.
        </h2>
        <h2>
          Differences: React is a javascript library while next.js, built on top
          of react, is a full-fledged framework for building web applications.
          Next.js utilizes server side rendering (SSR), which means that the
          HTML of the page is loaded by the server, allowing for faster page
          loading and search engine optimization SEO. Next.js also provides in
          house file-based routing that handles pre-fetching routes for better
          optimization and efficiency loading pages whereas react does not
          handle routing and requires third party libraries such as react-router
          to handle routing. React also allows for mobile development through
          React Native, which is an open source platform that handles optimizing
          the code to render either native iOS or Android applications without
          having to utilize Swift, Flutter, or Kotlin. Next.js also offers
          code-splitting, which loads only the necessary javascript code for
          each route which improves performance by reducing initial load times
        </h2>
        <div>
          <Link
            style={listStyle}
            href={
              "https://prismic.io/blog/nextjs-vs-react#advantages-of-nextjs"
            }
            target="blank"
          >
            Source
          </Link>
        </div>
      </div>
      <div>
        <ul style={questionListStyle}>
          <li>
            <Link style={listStyle} href={"../question-eight"}>
              Prev Question
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../"}>
              Home
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../question-two"}>
              Next Question
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const responseStyles = {
  display: "flex",
  "flex-direction": "column",
  margin: 40,
  gap: 20,
};

export const linkStyles = {
  display: "flex",
  gap: 20,
};

export const questionListStyle = {
  display: "flex",
  justifyContent: "center",
  gap: 30,
};

export default QuestionOne;
