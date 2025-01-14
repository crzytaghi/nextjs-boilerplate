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
        <h2>
          MIUs are monthly usage entitlements allocated to cover a portion of
          your usage, such as data transfer and function execution. However,
          these units are specific to the billing month and do not roll over to
          subsequent months. If you didn&apos;t use all your MIUs last month,
          those unused units cannot be applied to the current billing period.
          This ensures predictable usage caps and billing cycles.
        </h2>
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
        <h2>
          Here are some additional resources that might be helpful:{" "}
          <Link
            style={listStyle}
            href={"https://vercel.com/docs/pricing/manage-and-optimize-usage"}
            target="blank"
          >
            Manage & Optimize Usage
          </Link>
        </h2>
        <h2>
          I&apos;d be happy to schedule a call to discuss this further and walk
          through some optimizations and explore how we can better support your
          growth
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
