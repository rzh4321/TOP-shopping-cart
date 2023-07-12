import Card from "./Card"

export default function Shopping({cart}) {
    const arr = cart.map((card, ind) => <Card obj={card} key={card.name} />)
    return (
        <div className="grid">
            this is the shopping page.
        </div>
    )
}