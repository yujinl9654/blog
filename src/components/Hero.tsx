import Image from 'next/image';
import tulipImage from '../../public/images/tulip.png';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        priority
        className="mx-auto rounded-full"
        src={tulipImage}
        alt="Picture of tulip"
        width={250}
        height={250}
      ></Image>
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm Tulip!"}</h2>
      <h3 className="text-xl font-semibold">Full-stack engineer</h3>
      <p>이 화면은 NEXT.js 클론코딩 화면입니다.</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
