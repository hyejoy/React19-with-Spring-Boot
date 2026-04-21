import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import BasicLayout from "../layouts/basicLayout";
import todoRouter from "./todoRouter";

// 로딩시 잠깐 보여주는 컴포넌트
export const Loading = () => <div>Loading...</div>;
// 필요할때까지 로딩하지마 의미
const Main = lazy(() => import("../pages/mainPage"));
const About = lazy(() => import("../pages/aboutPage"));

const router = createBrowserRouter([
  {
    path: "",
    Component: BasicLayout,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      todoRouter(),
    ],
  },
]);

/**
 * <Suspense>와 <Lazy>를 이용한 코드분할 (Code Splitting)적용
 */
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
    ),
  },
]);
*/
export default router;
