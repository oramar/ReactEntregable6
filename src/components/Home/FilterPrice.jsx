import React from 'react'

const FilterPrice = ({ setInputPrice }) => {

    const handleSubit = e => {
        e.preventDefault()
        const inputFrom = +e.target.from.value
        const inputTo = +e.target.to.value
        if (inputFrom && inputTo) {
            setInputPrice({
                from: inputFrom,
                to: inputTo
            })

        } else if (!inputFrom && inputTo) {
            setInputPrice({
                from: 0,
                to: inputTo
            })
        } else if (inputFrom && !inputTo) {
            setInputPrice({
                from: inputFrom,
                to: Infinity
            })
        }else{
            setInputPrice({
                from:0,
                to:Infinity
            })
        }
    }

return (
    <section>
        <h2>Price</h2>
        <form onSubmit={handleSubit}>
            <div>
                <label htmlFor="from">From</label>
                <input min={0} type="number" id='from' />
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input min={0} type="number" id='to' />
            </div>
            <button>Apply</button>
        </form>
    </section>
)
}

export default FilterPrice