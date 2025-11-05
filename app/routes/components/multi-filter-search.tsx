import {
  InstantSearch,
  InstantSearchServerState,
  InstantSearchSSRProvider,
} from "react-instantsearch";
import { searchClient } from "~/algolia/search-client";
import SectionList from "./sections-list";

interface MultiFilterSearchProps {
  serverState?: InstantSearchServerState;
}

// This is a valid use case in our project, where we have a lister page with "sections", each sections shows some products based on a filter we pre-define.
const sections = [
  {
    title: "Section 1",
    algoliaFilter: `categories:"Prepaid Phones"`,
  },
  {
    title: "Section 2",
    algoliaFilter: `categories:"TV & Home Theater"`,
  },
  {
    title: "Section 3",
    algoliaFilter: `brand:"Apple"`,
  },
  {
    title: "Section 4",
    algoliaFilter: `categories:"TV & Home Theater"`,
  },
  {
    title: "Section 5",
    algoliaFilter: `categories:"Prepaid Phones"`,
  },
  {
    title: "Section 6",
    algoliaFilter: `categories:"TV & Home Theater"`,
  },
  {
    title: "Section 7",
    algoliaFilter: `categories:"Prepaid Phones"`,
  },
  {
    title: "Section 8",
    algoliaFilter: `categories:"TV & Home Theater"`,
  },
  {
    title: "Section 9",
    algoliaFilter: `categories:"Prepaid Phones"`,
  },
  {
    title: "Section 10",
    algoliaFilter: `categories:"TV & Home Theater"`,
  },
];

export function MultiFilterSearch(props: MultiFilterSearchProps) {
  const { serverState } = props;

  const contents = (
    <InstantSearch
      future={{ preserveSharedStateOnUnmount: false }}
      searchClient={searchClient}
      indexName="instant_search"
    >
      <SectionList sections={sections} />
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

// import {
//   Configure,
//   Hits,
//   Index,
//   InstantSearch,
//   RefinementList,
//   useDynamicWidgets,
//   useInstantSearch,
// } from "react-instantsearch";
// import { searchClient } from "~/algolia/search-client";

// const attributes = [
//   "brand",
//   "hierarchicalCategories.lvl0",
//   "categories",
//   "price",
// ];

// const sections = [
//   {
//     title: "Section 1",
//     algoliaFilter: `categories:"Prepaid Phones"`,
//   },
//   {
//     title: "Section 2",
//     algoliaFilter: `categories:"TV & Home Theater"`,
//   },
//   {
//     title: "Section 3",
//     algoliaFilter: `brand:"Apple"`,
//   },
//   {
//     title: "Section 4",
//     algoliaFilter: `categories:"TV & Home Theater"`,
//   },
//   {
//     title: "Section 5",
//     algoliaFilter: `categories:"Prepaid Phones"`,
//   },
//   {
//     title: "Section 6",
//     algoliaFilter: `categories:"TV & Home Theater"`,
//   },
//   {
//     title: "Section 7",
//     algoliaFilter: `categories:"Prepaid Phones"`,
//   },
//   {
//     title: "Section 8",
//     algoliaFilter: `categories:"TV & Home Theater"`,
//   },
//   {
//     title: "Section 9",
//     algoliaFilter: `categories:"Prepaid Phones"`,
//   },
//   {
//     title: "Section 10",
//     algoliaFilter: `categories:"TV & Home Theater"`,
//   },
// ];

// export function MultiFilterSearch() {
//   return (
//     <InstantSearch searchClient={searchClient} indexName="instant_search">
//       <MainIndex />
//       <SubIndexes />
//     </InstantSearch>
//   );
// }

// function MainIndex() {
//   return (
//     <Index indexName="instant_search">
//       <div>
//         {attributes.map((attribute) => {
//           return <RefinementList attribute={attribute} />;
//         })}
//       </div>
//     </Index>
//   );
// }

// function SubIndexes() {
//   const { uiState } = useInstantSearch();
//   const { attributesToRender } = useDynamicWidgets();
//   const refinements = uiState.instant_search?.refinementList ?? {};
//   console.log("refinements", refinements);

//   // // Bouw facetFilters
//   const filterString = Object.entries(refinements)
//     .map(([attribute, values]) =>
//       values.map((v) => `${attribute}:"${v}"`).join(" OR "),
//     )
//     .join(" AND ");

//   return (
//     <>
//       {sections.map((section) => {
//         return (
//           <>
//             <h3>
//               Filter: <code>{section.algoliaFilter}</code>
//             </h3>
//             <Index indexName="instant_search">
//               <Configure facets={[]} hitsPerPage={5} filters={filterString} />
//               <Hits />
//             </Index>
//           </>
//         );
//       })}

//       {/* <Index indexName="instant_search">
//         <Configure
//           hitsPerPage={5}
//           filters='categories:"TV & Home Theater"'
//           facetFilters={facetFilters}
//           facets={[]}
//         />
//         <Hits />
//       </Index> */}
//     </>
//   );
// }
