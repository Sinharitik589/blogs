import Link from "next/link";
import axios from "axios";

function Show({ data }) {
  return <p>{"data"}</p>;
}

Show.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  const data = await res.data;
  console.log(data);
  return {
    data: data,
  };
};

export default Show;
