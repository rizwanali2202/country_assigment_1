import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Link href="/country/pakistan">Pakistan</Link>&nbsp;|
      <Link href="/country/india">India</Link>&nbsp;|
      <Link href="/country/japan">Japan</Link>&nbsp;|
      <Link href="/country/afghanistan">Afghanistan</Link>&nbsp;|

    </div>
  );
}
