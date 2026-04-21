# React Router: 상대경로 vs 절대경로

## 핵심 차이

- 절대경로는 `/`부터 시작하는 전체 경로다.
- 상대경로는 현재 URL을 기준으로 이어 붙는 경로다.

```ts
navigate("/todo/modify/1234"); // 절대경로
navigate("modify/1234"); // 상대경로
```

## 현재 프로젝트 기준 예시

현재 URL이 아래와 같다고 가정한다.

```txt
/todo/read/1234
```

이 상태에서:

- `navigate("/todo/modify/1234")`
  - 결과: `/todo/modify/1234`
- `navigate("modify/1234")`
  - 결과: `/todo/read/1234/modify/1234`

즉, 상대경로는 현재 주소 뒤에 붙기 때문에 의도와 다르게 중첩될 수 있다.

## 왜 헷갈리나

`read/:tno`에서 `modify/:tno`로 이동할 때, 둘 다 `todo` 아래에 있으니 가까워 보여서 상대경로를 쓰기 쉽다. 하지만 `modify/:tno`는 `read/:tno`의 자식 경로가 아니라, 같은 레벨의 다른 경로다.

```ts
path: "read/:tno"
path: "modify/:tno"
```

그래서 `read/:tno` 안에서 `modify/:tno`로 갈 때는 절대경로가 더 안전하다.

## 실전 기준

- 목적지가 명확하면 절대경로를 쓴다.
- 현재 라우트의 자식 경로로 내려갈 때만 상대경로를 고려한다.
- 라우트 구조가 헷갈리면 `todoRouter.tsx`에서 실제 `path` 레벨을 먼저 확인한다.

## 지금 프로젝트에서 권장 방식

```ts
nav(`/todo/modify/${tno}`);
```

이동 대상이 분명하고, 현재 URL에 영향을 받지 않아서 실수를 줄일 수 있다.
