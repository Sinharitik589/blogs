import Link from "next/link";

export default function Index() {
  return (
    <>
      <Link href="/" as={"blogs/"}>
        <a>Home</a>
      </Link>
      <p>Hello!</p>
    </>
  );
}
