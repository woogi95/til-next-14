# api 폴더의 이해

- Next 는 서버이다.
- `흔히` FE 는 Next 구현 후 Vercel, AWS 에 배포한다.
- `흔히` BE 는 AWS 에 배포한다.
  - BE 는 API 를 제공한다. request > DB > Response
  - Postman, Swagger, Excel
  - Next 도 서버라서 API 연결이 가능하다.
    - Request / DB / Response 가능
    - 직접 DB 쿼리도 전달할 수 있다.
- `흔히` DB 는 AWS 에 배포한다.

- api 용도입니다.
- http://localhost:3000/api/hello
- https://fakestoreapi.com/

## api 만들어보기

- /src/pages/api/getallgood.ts
- http://localhost:3000/api/getallgood

```ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await fetch("https://fakestoreapi.com/products");
  const json = await data.json();
  res.status(200).json(json);
}
```
