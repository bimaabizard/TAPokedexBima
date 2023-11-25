import React from 'react'





const DropDownItem = ({query, setSearchVal}) => (
     <li 
        className='drop-down-itm'
        onClick={() => setSearchVal(query)}
        >
        {query}
    </li>
)


export default DropDownItem
