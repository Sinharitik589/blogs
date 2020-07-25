import Link from "next/link";

export default function Index() {
  return (
    <>
      <Link href="/" as={process.env.BACKEND_URL + "/"}>
        <a>Home</a>
      </Link>
      <p>Hello!</p>
    </>
  );
}
