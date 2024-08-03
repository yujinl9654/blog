import Hero from '@/components/Hero';

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who am I?</h2>
        <p>
          NEXT.js를 공부하는 중인 <br />
          프론트엔드 개발자
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          네버 (-Now)
          <br />
          다움(-2020)
          <br />
          카카오빈(-2018)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Vue, Node
          <br />
          Git, Clean Code
          <br />
          VSC, IntelliJ, Oracle
        </p>
      </section>
    </>
  );
}
