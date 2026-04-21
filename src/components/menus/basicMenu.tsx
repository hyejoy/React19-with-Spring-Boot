import { NavLink } from "react-router";

export default function BasicMenu() {
  return (
    <nav id="navbar" className="flex bg-blue-500">
      <div className="w-4/5 bg-gray-500">
        <ul className="flex p-4 text-white font-bold">
          <li className="pr-6 text-2xl">
            <NavLink to={"/"}>Main</NavLink>
          </li>
          <li className="pr-6 text-2xl">
            <NavLink to={"/about"}>about</NavLink>
          </li>
          <li className="pr-6 text-2xl">
            <NavLink to={"/todo"}>todo</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
