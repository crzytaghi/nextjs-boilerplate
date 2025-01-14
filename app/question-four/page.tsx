import Link from "next/link";
import {
  linkStyles,
  listStyle,
  questionListStyle,
  responseStyles,
} from "../appStyles";

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
          Hi Clara, welcome to Vercel! Vercel is a platform that helps teams
          build and deliver fast, engaging websites and web applications. We
          handle the heavy lifting of hosting, scaling, and optimizing your web
          projects, ensuring they&apos;re lightning-fast and reliable for your
          audience. Whether you&apos;re creating marketing pages or interactive
          experiences, Vercel makes it easy to update and manage your content
          while providing top-tier performance. If you&apos;d like, I&apos;d be
          happy to walk you through how it can help elevate Acme
          University&apos;s online presence!
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
