import React from "react";


function SearchBar({searchValue, setSearchValue}){
    // setFilteredTransactions(transactions)
    return(
    <form>
        <input type="text" placeholder="Search..." name="searchValue" value={searchValue} onChange={(event) => {
            setSearchValue(event.target.value)
        }}/>
    </form>
)
}

export default SearchBar;