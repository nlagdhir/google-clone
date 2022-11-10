const SearchResults = ({results}) => {
    return (
        <>
            <div className="w-full mx-auto p-x-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
                <p className="text-gray-600 text-sm mb-5 mt-3">About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)</p>
            </div>
        </>
    )
}

export default SearchResults;