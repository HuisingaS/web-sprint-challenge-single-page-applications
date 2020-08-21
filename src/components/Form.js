import React from 'react'


function Form(props) {
    const {
        formValues,
        formChanges,
        formErrors,
        disabled,
        submit
    } = props

    return (
        <Form>
            <h2>Form</h2>
            <div className='form-group name'>
                <label>Name
                    <input
                        type="text"
                    />
                </label>
            </div>

            <div className='form-group dropdown'>
                <label>Pizza Sizes
                    <select
                    >
                        <option>--Select an option--</option>
                        <option>Personal</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Family</option>
                        <option>Gargantuan</option>
                    </select>
                </label>
            </div>

            <div className='form-group checkboxes'>
                <h3>What's on top?</h3>
                <label>Sausage
                    <input
                        type="checkbox"
                    />
                </label>
                <label>Pepperoni
                    <input
                        type="checkbox"
                    />
                </label>
                <label>Beef
                    <input
                        type="checkbox"
                    />
                </label>
                <label>Chicken
                    <input
                        type="checkbox"
                    />
                </label>
                <label>Bacon
                    <input
                        type="checkbox"
                    />
                </label>
                <label>Veggies
                    <input
                        type="checkbox"
                    />
                </label>
                <label>Extra Cheese!
                    <input
                        type="checkbox"
                    />
                </label>
            </div>

            <div className='form-group special-order'>
                <label>Special Order?
                    <input
                        type="text"
                    />
                </label>
            </div>
        </Form>
    )
}

export default Form;