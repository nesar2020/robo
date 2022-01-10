import React from "react";

const  SearchBox = ({searchChange})=>{
    return(
        <div className='pa2'>
            <input type='search'
                   onChange={searchChange}
                   className='pa3 ba b--green bg-lightest-blue'
                   placeholder='Search Robots'
            />
        </div>
    )
}
export default SearchBox;