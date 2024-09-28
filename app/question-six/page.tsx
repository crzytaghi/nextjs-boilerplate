import Link from "next/link";
import {
  linkStyles,
  listStyle,
  questionListStyle,
  responseStyles,
} from "../appStyles";

const QuestionSix = () => {
  return (
    <div>
      <div style={responseStyles}>
        <h1>Question Six</h1>
        <h1>
          A customer, new to Next.js and Vercel, asks about a high usage bill
          related to fast origin transfer and fast data transfer. Write a
          response on how to mitigate this issue, offering Vercel or Next.js
          resources if necessary.
        </h1>
        <h2>
          To optimize fast data transfer, you must optimize the assets that are
          being transferred. You can do this by using vercels image optimization
          which uses advanced compression and modern file formats to reduce
          image and video file sizes. This decreases page load times and reduces
          FDT costs by serving optimized media tailored to the requesting
          device. You can also analyze your bundles and use the Bundle Analyzer
          guide.
        </h2>
        <h2>
          You can optimize fast origin transfer by reducing the size of the
          response and ensure that your function is only responding with
          relevant data and no extraneous API fields. You can also add caching
          headers to the function response, where future requests are served
          from the edge network cache rather than invoking the function again
          which reduces fast origin transfer usage and improves performance.
        </h2>
        <div style={linkStyles}>
          <Link
            style={listStyle}
            href={
              "https://vercel.com/docs/pricing/networking#optimizing-fast-data-transfer"
            }
            target="blank"
          >
            Fast Data Transfer
          </Link>
          <Link
            style={listStyle}
            href={
              "https://vercel.com/docs/pricing/networking#optimizing-fast-origin-transfer"
            }
            target="blank"
          >
            Fast Origin Transfer
          </Link>
        </div>
      </div>
      <div>
        <ul style={questionListStyle}>
          <li>
            <Link style={listStyle} href={"../question-five"}>
              Prev Question
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../"}>
              Home
            </Link>
          </li>
          <li>
            <Link style={listStyle} href={"../question-seven"}>
              Next Question
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuestionSix;
