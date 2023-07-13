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

    useEffect(() => {
        console.log(itemInfo.name);
    })

    return (
        <>
          <div className="card" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <div>
                {!hovering && count > 0 && <span class='display-item-count'>{count}</span>}
                {!hovering && count === 0 && <div class='filler'></div>}
                {hovering && (
                    <>
                        <button onClick={() => changeQuantity(count-1, itemInfo.name)}>-</button>
                        <input type='number' value={count} min='0' onChange={(e) => changeQuantity(+e.target.value, itemInfo.name)} />
                        <button onClick={() => changeQuantity(count+1, itemInfo.name)}>+</button>
                    </>
                        )}
            </div>
            <div style={styles}></div>
            <span>{itemInfo.price}</span>
            <span>{itemInfo.name}</span>
          </div>
        </>
      );
      
}

export default Card;