import React, { useState, useEffect } from 'react';


function Card({itemInfo, count, changeQuantity}) {
    const [hovering, setHovering] = useState(false);
    const styles = {
        backgroundImage: `url(${itemInfo.url_back})`,
        backgroundSize: "contain",
        backgroundPosition: (itemInfo.pos === undefined)? "center": itemInfo.pos,
        height: "100%",
        backgroundRepeat: "no-repeat"
    }

    // useEffect(() => {
    //     console.log(itemInfo.name);
    // })

    return (
        <>
          <div className="card" id={itemInfo.name} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <div>
                {!hovering && count > 0 && <span className='display-item-count'>{count}</span>}
                {!hovering && count === 0 && <div className='filler'></div>}
                {hovering && (
                    <>
                        <button style={{"backgroundColor": "red"}} onClick={() => changeQuantity(count-1, itemInfo.name)}>-</button>
                        <input type='number' value={count} min='0' onChange={(e) => changeQuantity(+e.target.value, itemInfo.name)} />
                        <button style={{"backgroundColor": "green"}} onClick={() => changeQuantity(count+1, itemInfo.name)}>+</button>
                    </>
                        )}
            </div>
            <div style={styles}></div>
            <span className='price'>{itemInfo.price}</span>
            <span className='item-name'>{itemInfo.name}</span>
          </div>
        </>
      );
      
}

export default Card;