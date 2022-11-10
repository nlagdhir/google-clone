import Head from "next/head";
import SearchHeader from "../components/search-header";

const Search = () => {
    return (
        <div>
            <Head>
                <title>Search Page</title>
            </Head>

            {/* Search Header */}
            <SearchHeader />
           
            {/* Search Results */}
        </div>
    )
}

export default Search;