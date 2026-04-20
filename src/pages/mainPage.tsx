import { NavLink } from "react-router";

export default function MainPage() {
  return (
    <>
      <h1>MainPage Component</h1>
      <NavLink to={"/about"}>About</NavLink>
    </>
  );
}
