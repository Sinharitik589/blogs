import Link from "next/link";
import axios from "axios";

export default function Index({ data }) {
  return (
    <>
      <p>Hello I am home page</p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <h1>Series</h1>

      <ul>
        {data.map((data, index) => {
          console.log(typeof data.title);
          return (
            <li key={data.id}>
              <Link href="/show/[id]" as={`/show/${data.id}`}>
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
  ];

  console.log(data);
  return {
    data,
  };
};
