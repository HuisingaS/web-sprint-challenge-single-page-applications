import React from 'react';

function Form(props) {
    const {
        formValues,
        formChanges,
        formErrors,
        disabled,
        sausage,
        pepperoni,
        beef,
        chicken,
        bacon,
        veggies,
        extraCheese,
        submit,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    };

    return (
        <form onSubmit={onSubmit}>
            <h2>Order Your Pizza</h2>
            <div className='form-group name'>
                <label>Name:
                    <input
                        type="text"
                        name='name'
                        value={formValues.name}
                        onChange={formChanges}
                        placeholder='Enter your name here'
                    />
                </label>
            </div>

            <div className='form-group dropdown'>
                <label>Pizza Sizes:
                    <select
                        name='pizzaSize'
                        value={formValues.pizzaSize}
                        onChange={formChanges}
                    >
                        <option value=''>--Select an option--</option>
                        <option>Personal</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Family</option>
                        <option>Gargantuan</option>
                    </select>
                </label>
            </div>

            <div>
                <h3>What's on top?</h3>
                    <label>Sausage
                    <input id="sausage" name="sausage" type="checkbox" checked={sausage} onChange={formChanges}/>
                    </label>
                    <label>Pepperoni
                    <input id="pepperoni" name="pepperoni" type="checkbox" checked={pepperoni} onChange={formChanges}/>
                    </label>
                    <label>Beef
                    <input id="beef" name="beef" type="checkbox" checked={beef} onChange={formChanges}/>
                    </label>
                    <label>Chicken
                    <input id="chicken" name="chicken" type="checkbox" checked={chicken} onChange={formChanges}/>
                    </label>
                    <label>Bacon
                    <input id="bacon" name="bacon" type="checkbox" checked={bacon} onChange={formChanges}/>
                    </label>
                    <label>Veggies
                    <input id="veggies" name="veggies" type="checkbox" checked={veggies} onChange={formChanges}/>
                    </label>
                    <label>Extra Cheese!
                        <input id="extraCheese" name="extraCheese" type="checkbox" checked={extraCheese} onChange={formChanges}/>
                    </label>
                </div>

            <div>
                <label>Think you're Special?
                    <input
                        type="text"
                        name='specialOrder'
                        value={formValues.specialOrder}
                        onChange={formChanges}
                        placeholder='Enter Special Instructions'
                    />
                </label>
            </div>
            <div>
                <button disabled={disabled}>Add to Order</button>
            </div>
            <div>
                 <div>{formErrors.name}</div>
                 <div>{formErrors.pizzaSize}</div>
            </div> 
        </form>
    )
};

export default Form;