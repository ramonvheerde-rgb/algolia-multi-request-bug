import { liteClient } from "algoliasearch/lite";

export const searchClient = liteClient(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76",
);

// export const searchClient = {
//   ...liteClient("latency", "6be0576ff61c053d5f9a3225e2a90f76"),
//   search(requests) {
//     const filtered = requests.filter((req) => !(req.hitsPerPage === 0));
//     return liteClient("latency", "6be0576ff61c053d5f9a3225e2a90f76").search(
//       filtered,
//     );
//   },
// };
