import { Link } from "@remix-run/react";
import { DiaryFormFields } from "~/features/diary/DiaryFormFields";

export default function DiaryNewRoute() {
  return (
    <form>
      <div className="header">
        <h1>New Entry</h1>
        <div>
          <Link to={".."}>Cancel</Link>
          <button style={{ marginLeft: "20px" }}>Save</button>
        </div>
      </div>
      <DiaryFormFields />
    </form>
  );
}
