import styles from "@/pages/index.module.css";
import goods from "@/mock/goods.json";
import GoodItem from "@/components/good-item";
import { ReactNode } from "react";
import SearchLayout from "@/components/search-layout";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { fetchGoods } from "@/lib/fetch-good";
import { fetchRandomGoods } from "@/lib/fetch-random-good";
import Head from "next/head";

// Next 에는 약속이 된 함수가 있다.
export const getStaticProps = async () => {
  // 병렬로 실행하기
  const [allGoods, randomGoods] = await Promise.all([
    fetchGoods(),
    fetchRandomGoods(),
  ]);

  return {
    props: {
      allGoods: allGoods,
      randomGoods: randomGoods,
    },
    revalidate: 60, // 60 초 후 다시 생성
  };
};

export default function Home({
  allGoods,
  randomGoods,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>해외 쇼핑몰 추천 서비스</title>
        <meta name="discription" content="해외 상품 추천 서비스입니다." />
        <meta property="og:title" content="해외 쇼핑몰 추천 서비스" />
        <meta property="og:discription" content="해외 쇼핑몰 추천 서비스" />
        <meta property="og:image" content="/thumbnail.png" />
      </Head>
      <div className={styles.container}>
        <section>
          <h3>지금 추천하는 상품</h3>
          {/* 3개만 랜덤하게 출력 */}
          {randomGoods.map((item) => (
            <GoodItem key={item.id} {...item} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 상품</h3>
          {/* 전체 상품 출력 */}
          {allGoods.map((item) => (
            <GoodItem key={item.id} {...item} />
          ))}
        </section>
      </div>
    </>
  );
}

// JS 에서는 함수도 객체다.
// 객체는 속성을 추가할 수 있다.
Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
