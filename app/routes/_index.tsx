import { useLoaderData } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { getServerState } from "react-instantsearch";
import { MultiFilterSearch } from "./components/multi-filter-search";

export function loader() {
  return getServerState(<MultiFilterSearch />, { renderToString });
}

export default function Index() {
  const serverState = useLoaderData<typeof loader>();

  return (
    <main>
      <section>
        <h1>Client-side rendered only</h1>
        <MultiFilterSearch />
      </section>
      <section suppressHydrationWarning>
        <h1>Server-side rendered</h1>
        <MultiFilterSearch serverState={serverState} />
      </section>
    </main>
  );
}
