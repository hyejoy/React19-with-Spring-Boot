import { useNavigate, useParams } from "react-router";

export default function ReadPage() {
  const nav = useNavigate();

  const { tno } = useParams();
  console.log("obj", tno);

  const handleModifyPage = () => {
    nav(`/todo/modify/${tno}`);
  };
  return (
    <div className="bg-white w-full">
      <div className="text-4xl">Todo Read Page{tno}</div>
      <div onClick={handleModifyPage}>go to modify</div>
    </div>
  );
}
