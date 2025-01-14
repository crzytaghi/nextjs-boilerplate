import Link from "next/link";
import { listStyle, questionListStyle, responseStyles } from "../appStyles";

const QuestionOne = () => {
  return (
    <div>
      <div style={responseStyles}>
        <h1>Question One</h1>
        <h1>
          An Enterprise customer has come to you to ask about the difference
          between React and Next.js and what the benefits are of using Next.js
          for her team.
        </h1>
        <h2>
          Next.js provides a suite of differences between react that will
          benefit you and your team. Specifically for SEO, Next.js utilizes
          server side rendering, SSR, which essentially means that the content
          of the page is being loaded by the backend server, which is much more
          efficient and scores higher for SEO. Additional efficiency is realized
          through code-splitting, which loads only the necessary javascript code
          for each route which improves performance by reducing initial load
          times. Next.js also optimizes the loading of third party libraries
          like Google Tag Manager, which are important for tracking the
          analytics and success of marketing campaigns.
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

export default QuestionOne;
