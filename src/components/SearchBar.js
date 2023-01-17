import React from "react";


function SearchBar({searchValue, setSearchValue}){
    return(
    <form className="formSearch">
        <input className='searcher' type="text" placeholder="Search..." name="searchValue" value={searchValue} onChange={(event) => {
            setSearchValue(event.target.value)
        }}/>
    </form>
)
}

export default SearchBar;