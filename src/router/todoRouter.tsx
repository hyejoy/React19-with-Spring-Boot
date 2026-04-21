import { lazy, Suspense } from "react";
import { Loading } from "./router";
import { Navigate } from "react-router";

const TodoIndex = lazy(() => import("../pages/todo/indexPage"));
const TodoList = lazy(() => import("../pages/todo/listPage"));
const TodoRead = lazy(() => import("../pages/todo/readPage"));
const TodoAdd = lazy(() => import("../pages/todo/addPage"));
const TodoModify = lazy(() => import("../pages/todo/modifyPage"));

const todoRouter = () => ({
  path: "todo",
  Component: TodoIndex,
  children: [
    {
      path: "list",
      element: (
        <Suspense fallback={<Loading />}>
          <TodoList />
        </Suspense>
      ),
    },
    {
      path: "read/:tno",
      element: (
        <Suspense fallback={<Loading />}>
          <TodoRead />
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={<Loading />}>
          <TodoAdd />
        </Suspense>
      ),
    },
    {
      path: "modify/:tno",
      element: (
        <Suspense fallback={<Loading />}>
          <TodoModify />
        </Suspense>
      ),
    },
    {
      path: "",
      //자동으로 todo/list로 이동
      element: <Navigate to={"/todo/list"}></Navigate>,
    },
  ],
});

export default todoRouter;
