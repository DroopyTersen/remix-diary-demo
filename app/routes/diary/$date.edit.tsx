import { Link, useParams } from "@remix-run/react";
import { fakeDiaryEntries } from "~/fakeDiaryEntries";

export default function DiaryEntryRoute() {
  let { date } = useParams();
  let entry = fakeDiaryEntries.find((entry) => entry.date === date);
  return (
    <form>
      <div className="header">
        <h1>Edit: {date}</h1>
        <div>
          <Link to={"../" + date}>Cancel</Link>
          <button style={{ marginLeft: "20px" }}>Save</button>
        </div>
      </div>
      <div>
        <label>
          Date
          <input type="date" name="date" defaultValue={date} />
        </label>
        <label>
          Entry
          <textarea name="content" defaultValue={entry.content} />
        </label>
      </div>
    </form>
  );
}
