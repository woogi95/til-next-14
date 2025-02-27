// 앱 라우터 버전 import { useRouter } from "next/navigation";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { keyword } = router.query;
  return (
    <div>
      검색 <b>{keyword}</b> 페이지
    </div>
  );
}
