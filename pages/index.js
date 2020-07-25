import Link from "next/link";
import axios from "axios";

export default function Index({ data }) {
  console.log(process.env.BACKEND_URL, "jjjjjj");
  return (
    <>
      <p>Hello I am home page</p>
      <Link href="/about" as={"blogs/about"}>
        <a>About</a>
      </Link>
      <h1>Series</h1>

      <ul>
        {data.map((data, index) => {
          console.log(typeof data.title);
          return (
            <li key={data.id}>
              <Link
                href="/show/[id]"
                as={`${process.env.BACKEND_URL}/show/${data.id}`}
              >
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
