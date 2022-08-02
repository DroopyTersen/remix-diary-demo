import { Link, Outlet } from "@remix-run/react";
import { fakeDiaryEntries } from "~/fakeDiaryEntries";

export default function DiaryRoute() {
  return (
    <main className="diary-layout">
      <div className="left-panel">
        <div className="header">
          <h2>Diary Entries</h2>
          <div>
            <Link to="new" className="button">
              + Add
            </Link>
          </div>
        </div>
        <ul className="diaries-list">
          {fakeDiaryEntries.map((entry) => (
            <li key={entry.date}>
              <Link to={entry.date}>{entry.date}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </main>
  );
}
