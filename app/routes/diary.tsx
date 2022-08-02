import { Link, Outlet, useLoaderData, useParams } from "@remix-run/react";
import type { DiaryEntry } from "~/features/diary/diary.types";

export const loader = () => {
  return fetch(`${process.env.API_URL}/diary`);
};

export default function DiaryRoute() {
  let entries = useLoaderData() as DiaryEntry[];
  let { date: activeDate } = useParams();
  return (
    <main className="left-pane-layout">
      <div>
        <div className="header">
          <h2>Diary Entries</h2>
          <div>
            <Link to="new" className="button">
              + Add
            </Link>
          </div>
        </div>
        <ul>
          {entries
            .sort((a, b) => (a.date > b.date ? -1 : 1))
            .map((entry) => (
              <li
                key={entry.date}
                className={entry.date === activeDate ? "active" : ""}
              >
                <Link prefetch="intent" to={entry.date}>
                  {entry.date}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </main>
  );
}
