function Card({obj}) {
    const styles = {
        backgroundImage: `url(${obj.url})`,
        backgroundSize: "cover",
        backgroundPosition: (obj.pos === undefined)? "center": obj.pos,
    }
    return (
        <>
          <div className="card">
            <div style={styles}></div>
            <span>{obj.name}</span>
          </div>
        </>
      );
      
}

export default Card;