// 앱 라우터 버전 import { useRouter } from "next/navigation";
import { useRouter } from "next/router";
import styles from "@/pages/search.module.css";
import goods from "@/mock/goods.json";
import GoodItem from "@/components/good-item";
import { ReactNode } from "react";
import SearchLayout from "@/components/search-layout";
export default function Page() {
  const router = useRouter();
  const { keyword } = router.query;
  return (
    <div className={styles.container}>
      <h4>
        <strong>{keyword} : 검색 결과 페이지</strong>
      </h4>

      <div>
        {goods.map((item) => (
          <GoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
