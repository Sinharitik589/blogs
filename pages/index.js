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
        {data.map((data) => {
          console.log(data);
          return (
            <li key={data.id}>
              <Link href="/show/[id]" as={`/show/${data.show.id}`}>
                <a>{data.show.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

Index.getInitialProps = async () => {
  const res = await axios.get("https://api.tvmaze.com/search/shows?q=sherlock");
  const data = await res.data;
  console.log(data);
  return {
    data,
  };
};
