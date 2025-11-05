import { Configure, Hits, Index, useDynamicWidgets } from "react-instantsearch";
import { Hit } from "~/algolia/hit";

interface Section {
  title: string;
  algoliaFilter: string;
}

interface SectionListProps {
  sections: Section[];
}

export default function SectionList(props: SectionListProps) {
  const { sections } = props;
  const { attributesToRender } = useDynamicWidgets();

  return (
    <>
      {/* <div>
        {attributesToRender.map((attribute) => {
          return <RefinementList attribute={attribute} />;
        })}
      </div> */}
      {sections.map((section) => {
        return (
          <>
            <h3>
              Filter: <code>{section.algoliaFilter}</code>
            </h3>
            <Index indexName="instant_search">
              <Configure
                facets={[]}
                filters={section.algoliaFilter}
                hitsPerPage={5}
              />
              <Hits hitComponent={Hit} />
            </Index>
          </>
        );
      })}
    </>
  );
}
