import Link from "next/link";

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
          <Link style={listStyle} href={""}>
            Question Two
          </Link>
        </li>
        <li>
          <Link style={listStyle} href={""}>
            Question Three
          </Link>
        </li>
        <li>
          <Link style={listStyle} href={""}>
            Question Four
          </Link>
        </li>
        <li>
          <Link style={listStyle} href={""}>
            Question Five
          </Link>
        </li>
        <li>
          <Link style={listStyle} href={""}>
            Question Six
          </Link>
        </li>
        <li>
          <Link style={listStyle} href={""}>
            Question Seven
          </Link>
        </li>
        <li>
          <Link href={""} style={listStyle}>
            Question Eight
          </Link>
        </li>
      </ul>
    </div>
  );
}

export const listStyle = {
  padding: 5,
  border: "1px solid gold",
};
