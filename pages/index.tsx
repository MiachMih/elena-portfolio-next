import Link from "next/link";

export default function Home() {
  return (
    <div>
      Choose your language
      <Link href="/ru">Русский</Link>
      <Link href="/en">English</Link>
    </div>
  );
}
