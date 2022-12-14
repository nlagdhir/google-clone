import Head from "next/head";
import SearchHeader from "../components/search-header";
import SearchResults from "../components/search-results";
import response from "../response";
import { useRouter } from "next/router";
import ImageResults from "../components/image-results";

const Search = ({ results }) => {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search page</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search web and images Results */}

      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const startIndex = context.query.start || "1";
  const mockData = false;
  const data = mockData
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
};
