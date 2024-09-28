import Link from "next/link";
import { listStyle } from "./appStyles";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 75,
      }}
    >
      <h1>Select from one of the following questions</h1>
      <ul style={{ display: "flex", gap: 5 }}>
        <li>
          <Link style={listStyle} href={"/question-one"}>
            Question One
          </Link>
        </li>
        <li>
          <Link style={listStyle} href={"/question-two"}>
            Question Two
          </Link>
        </li>
        <li>
          <Link style={listStyle} href={"/question-three"}>
            Question Three
          </Link>
        </li>
        <li>
          <Link style={listStyle} href={"/question-four"}>
            Question Four
          </Link>
        </li>
        <li>
          <Link style={listStyle} href={"/question-five"}>
            Question Five
          </Link>
        </li>
        <li>
          <Link style={listStyle} href={"/question-six"}>
            Question Six
          </Link>
        </li>
        <li>
          <Link style={listStyle} href={"/question-seven"}>
            Question Seven
          </Link>
        </li>
        <li>
          <Link href={"/question-eight"} style={listStyle}>
            Question Eight
          </Link>
        </li>
      </ul>
    </div>
  );
}
