import React from 'react'
import './style/filterprice.css'
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
    <details>
        <summary>Price</summary>
        <form className='form-filter' onSubmit={handleSubit}>
            <div className='form__group'>                
                <input className='form__input' placeholder=' ' min={0} type="number" id='from' />
                <label  className='form__label' htmlFor="from">From</label>
                <span className="form__line"></span>
            </div>
            <div className='form__group'>                
                <input className='form__input' placeholder=' ' min={0} type="number" id='to' />
                <label  className='form__label' htmlFor="to">To</label>
                <span className="form__line"></span>
            </div>
            <button className='form__btn'>Apply</button>
        </form>
    </details>
)
}

export default FilterPrice