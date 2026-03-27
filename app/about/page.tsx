import Image from "next/image";
import { philosophy } from "@/app/lib/brands";

export default function AboutPage() {
  return (
    <main>
      <section className="about-hero">
        <p className="eyebrow" data-reveal>
          About OVER SERIES
        </p>
        <h1 data-reveal>One Typographic DNA. Ten Strategic Directions.</h1>
        <p data-reveal>
          OVER SERIES는 동일한 구조적 원칙을 공유하면서, 각 도메인에 맞는 표현 언어로
          확장되는 브랜드 시스템입니다.
        </p>
      </section>

      <section className="about-list">
        {philosophy.map((line) => (
          <article key={line} data-reveal>
            <p>{line}</p>
          </article>
        ))}
      </section>

      <section className="about-luma" data-reveal>
        <Image src="/luma-symbol.svg" width={84} height={84} alt="luma symbol" />
        <h2>luma</h2>
        <p>
          luma는 브랜드, 콘텐츠, 전략을 연결하는 운영형 크리에이티브 파트너입니다.
          OVER SERIES는 luma의 실전 프로젝트 스택을 하나의 포트폴리오 시스템으로 통합한 결과물입니다.
        </p>
      </section>
    </main>
  );
}
