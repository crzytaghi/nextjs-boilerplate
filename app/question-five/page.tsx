import Link from "next/link";
import {
  linkStyles,
  listStyle,
  questionListStyle,
  responseStyles,
} from "../appStyles";

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
          Hi Travis, I hope you&apos;re doing well! I noticed a recent increase
          in your Vercel usage, with costs rising from $900 to $2,100 this
          billing period due to higher data transfer. Additionally, I spotted
          that your main website is showing poor Core Web Vitals performance,
          particularly with a failed Largest Contentful Paint (LCP) score. I
          wanted to reach out to offer guidance and explore solutions to
          optimize your usage and performance. Areas to Explore Together
          Increased Data Transfer: Has there been a recent spike in website
          traffic or changes to your app that might be contributing to higher
          data transfer? We can look at analytics and caching strategies to help
          reduce these costs. Improving LCP Performance: A failed LCP score can
          impact user experience and SEO. I&apos;d love to help identify
          bottlenecks and share best practices—such as optimizing image loading
          and leveraging Vercel&apos;s built-in performance tools—to get your
          website performing at its best. Future Growth: As your business
          scales, we can explore how Vercel&apos;s features and even Enterprise
          options could better support your growing team and ensure cost
          efficiency moving forward. If you&apos;re open to it, I&apos;d love to
          schedule a call to dive into these topics and work toward a tailored
          solution that benefits your team. Let me know your availability, and
          we can get started! Looking forward to hearing from you.
        </h2>
        <div style={linkStyles}>
          <Link
            style={listStyle}
            href={
              "https://vercel.com/guides/optimizing-core-web-vitals-in-2024"
            }
            target="blank"
          >
            Optimizing Web Core Vitals
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
