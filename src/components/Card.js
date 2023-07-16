import React, { useState, useEffect } from 'react';


function Card({itemInfo, count, changeQuantity}) {
    const [hovering, setHovering] = useState(false);
    const styles = {
        backgroundImage: hovering? `url(${itemInfo.url_front})` : `url(${itemInfo.url_back})`,
        backgroundSize: "contain",
        backgroundPosition: (itemInfo.pos === undefined)? "center": itemInfo.pos,
        height: "100%",
        backgroundRepeat: "no-repeat",
        transition: "0.5s ease-in-out",
    }

    const costStyles = {"textDecoration": hovering? "none" : "underline"};
    const nameStyles = {"textDecoration": hovering? "none" : "underline",
                        "color": hovering? "red" : "",
                        "transitionProperty": "color",
                        "transitionDuration": "1.2s",
                        "transitionTimingFunction": "ease-in-out"};


    return (
        <>
          <div className="card" id={itemInfo.name} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <div>
                {!hovering && count > 0 && <span className='display-item-count'>{count}</span>}
                {!hovering && count === 0 && <div className='filler'></div>}
                {hovering && (
                    <>
                        <button style={{"backgroundColor": "red"}} onClick={() => changeQuantity(count-1, itemInfo.name, parseFloat(itemInfo.price.slice(1)))}>-</button>
                        <input type='number' value={count} min='0' onChange={(e) => changeQuantity(+e.target.value, itemInfo.name, parseFloat(itemInfo.price.slice(1)))} />
                        <button style={{"backgroundColor": "green"}} onClick={() => changeQuantity(count+1, itemInfo.name, parseFloat(itemInfo.price.slice(1)))}>+</button>
                    </>
                        )}
            </div>
            <div style={styles}></div>
            <span className='price' style={costStyles}>{itemInfo.price}</span>
            <span className='item-name' style={nameStyles}>{itemInfo.name}</span>
          </div>
        </>
      );
      
}

export default Card;