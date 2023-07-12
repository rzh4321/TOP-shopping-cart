function Card({itemInfo, count}) {
    // console.log(itemInfo)
    // console.log(count)
    const styles = {
        backgroundImage: `url(${itemInfo.url_back})`,
        backgroundSize: "contain",
        backgroundPosition: (itemInfo.pos === undefined)? "center": itemInfo.pos,
        height: "100%",
        backgroundRepeat: "no-repeat"
    }
    return (
        <>
          <div className="card">
            <div className="item-bar">
                {count && <span>{count}</span>}
            </div>
            <div style={styles}></div>
            <span>{itemInfo.price}</span>
            <span>{itemInfo.name}</span>
          </div>
        </>
      );
      
}

export default Card;