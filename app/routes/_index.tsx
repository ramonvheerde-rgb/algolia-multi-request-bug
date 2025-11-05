import { MultiFilterSearch } from "./components/multi-filter-search";

// export function loader() {
//   return getServerState(<MultiFilterSearch />, { renderToString });
// }

export default function Index() {
  // const serverState = useLoaderData<typeof loader>();

  return (
    <main>
      <section>
        <h1>Client-side rendered only</h1>
        <MultiFilterSearch />
      </section>
      {/* <section suppressHydrationWarning>
        <h1>Server-side rendered</h1>
        <MultiFilterSearch />
      </section> */}
    </main>
  );
}
