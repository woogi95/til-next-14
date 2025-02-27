# Pages Router

## http://localhost:3000

- src/pages/index.tsx

```tsx
export default function Home() {
  return <h1>홈</h1>;
}
```

## http://localhost:3000/search?keyword=아이유

- 쿼리스트링 처리하기
- /src/pages/search.tsx

```tsx
export default function Page() {
  return <div>검색페이지</div>;
}
```

## http://localhost:3000/good/1

- params
- /src/pages/good/[id].tsx

```tsx
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <b>{id}</b>번 제품정보
    </div>
  );
}
```

## http://localhost:3000/notfound

- 없는 라우터로 이동시 Not Found 페이지
- /src/pages/404.tsx

```tsx
export default function Page() {
  return <div>404</div>;
}
```

# Navigation

## Link 를 이용해서 라우터를 이동하는 주 메뉴

- Link 로 연결된 주소는 사전에 서버에서 랜더링으로 html 이 만들어져 있다.
- `주 메뉴`는 `모든 페이지에 보여야 한다.`
- `_app.tsx` 최적의 장소가 된다.

```tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <header>
        <Link href={"/"}>홈</Link>
        &nbsp;
        <Link href={"/search?keyword=아이유"}>검색</Link>
        &nbsp;
        <Link href={"/good/1"}>제품상세</Link>
        &nbsp;
        <button onClick={handleClick}>홈으로 이동하기</button>
      </header>
      <main>
        <p>안녕하세요.</p>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </>
  );
}
```
