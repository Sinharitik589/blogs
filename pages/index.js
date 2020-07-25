import Link from "next/link";
import { useState } from "react";

export default function Index({ data }) {
  const [add, changeadd] = useState("right");
  return (
    <>
      <p>Hello I am home page</p>
      <Link href="about">
        <a>About</a>
      </Link>
      <button
        onClick={() => {
          console.log("id");
        }}
      >
        {add}
      </button>

      <ul>
        {data.map((data, index) => {
          console.log(typeof data.title);
          return (
            <li key={data.id}>
              <Link href="show/[id]" as={`show/${data.id}`}>
                <a>{data.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

Index.getInitialProps = async () => {
  const data = [
    {
      id: "1",
      title: "one",
    },
    {
      id: "2",
      title: "two",
    },
    {
      id: "3",
      title: "three",
    },
    {
      id: "4",
      title: "four",
    },
  ];

  console.log(data);
  return {
    data,
  };
};
