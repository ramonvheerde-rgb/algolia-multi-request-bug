import {
  Configure,
  Hits,
  Index,
  InstantSearch,
  InstantSearchServerState,
  InstantSearchSSRProvider,
} from "react-instantsearch";
import { Hit } from "~/algolia/hit";
import { searchClient } from "~/algolia/search-client";

interface MultiFilterSearchProps {
  serverState?: InstantSearchServerState;
}

export function MultiFilterSearch(props: MultiFilterSearchProps) {
  const { serverState } = props;

  const contents = (
    <InstantSearch
      future={{ preserveSharedStateOnUnmount: false }}
      searchClient={searchClient}
    >
      <h3>
        Filter: <code>`categories:"Prepaid Phones"`</code>
      </h3>
      <Index indexName="instant_search">
        <Configure filters={`categories:"Prepaid Phones"`} hitsPerPage={5} />
        <Hits hitComponent={Hit} />
      </Index>

      <h3>
        Filter: <code>`categories:"TV & Home Theater"`</code>
      </h3>
      <Index indexName="instant_search">
        <Configure filters={`categories:"TV & Home Theater"`} hitsPerPage={5} />
        <Hits hitComponent={Hit} />
      </Index>
    </InstantSearch>
  );

  if (serverState === undefined) {
    return contents;
  }

  return (
    <InstantSearchSSRProvider initialResults={serverState.initialResults}>
      {contents}
    </InstantSearchSSRProvider>
  );
}
