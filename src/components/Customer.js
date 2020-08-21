import React from 'react';

function Customer(props) {
    const {
       customerInfo
    } = props
    console.log(props)

    return (
        <div>
            <h2>{customerInfo.name}'s Order</h2>
            <h3>Pizza Size: {customerInfo.pizzaSize}</h3>
            <h3>Toppings:
                {customerInfo.sausage === true ? 'Sausage ' : ''}
                {customerInfo.pepperoni === true ? 'Pepperoni ' : ''}
                {customerInfo.beef === true ? 'Beef ' : ''}
                {customerInfo.chicken === true ? 'Chicken ' : ''}
                {customerInfo.bacon === true ? 'Bacon ' : ''}
                {customerInfo.veggies === true ? 'Veggies ' : ''}
                {customerInfo.extraCheese === true ? 'Extra Cheese ' : ''}  
            </h3>
            <h3>Special Instructions: {customerInfo.specialOrder ?  customerInfo.specialOrder : 'none' }</h3>
        </div>
    )
};

export default Customer;