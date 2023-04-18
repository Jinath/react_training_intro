import React, { useState } from 'react'
import PropTypes from 'prop-types'

function ItemList({items,title,onSelected}) {
   // const items = ['Colombo', 'Galle', 'Jaffna', 'Kandy'];
    //let selectedItem=0;

    const [selectedItem, setSelectedItem] = useState(-1);

    const onclickItem=(e,index,selectedItem)=>{
        setSelectedItem(index);
        onSelected(selectedItem);
    }



    return (
        <>
            <h1>
               {title}
            </h1>
            <ul className="list-group">
                {items&& items.map((city,index) =>
                    <li key={index} className= {index===selectedItem? 'list-group-item active':'list-group-item'} onClick={((e)=> onSelected(city))}>{city}</li>
                )}
            </ul>
        </>
    )
}

ItemList.propTypes = {
    items:PropTypes.array,
    title:PropTypes.string,
    onSelected:PropTypes.func
}

export default ItemList