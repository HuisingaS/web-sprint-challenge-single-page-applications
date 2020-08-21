import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import Home from './components/Home';
import Customer from './components/Customer';
import Form from './components/Form';
import formSchema from './validation/formSchema';

const initFormValues = {
  name: '',
  pizzaSize: '',
  sausage: false,
  pepperoni: false,
  beef: false,
  chicken: false,
  bacon: false,
  veggies: false,
  extraCheese: false,
  specialOrder: ''
};

const initFormErrors = {
  name: '',
  pizzaSize: '',
  sausage: false,
  pepperoni: false,
  beef: false,
  chicken: false,
  bacon: false,
  veggies: false,
  extraCheese: false,
  specialOrder: ''
};

const initCustomers = [];
const initDisabled = true;

function App() {
  const [customers, setCustomers] = useState(initCustomers);
  const [formValues, setFormValues] = useState(initFormValues);
  const [formErrors, setFormErrors] = useState(initFormErrors);
  const [disabled, setDisabled] = useState(initDisabled);

  const postNewCustomerOrder = newCustomer => {
    axios.post('https://reqres.in/api/users', newCustomer)
      .then(res => {
        console.log(res.data)
        setCustomers([res.data, ...customers ])
        setFormValues(initFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  };

  const formChanges = event => {
    event.persist();
    event.target.type === 'checkbox' ? setFormValues({ ...formValues, [event.target.name]: event.target.checked }) : 
      setFormValues({ ...formValues, [event.target.name]: event.target.value }) 
    validateForm(event)
  };

  const validateForm = event => {
    yup
    .reach(formSchema, event.target.name)
    .validate(
      event.target.type === 'checkbox' ? event.target.checked : event.target.value
    )
    .then((valid) => {
      setFormErrors({ ...formErrors, [event.target.name]: '' })
    })
    .catch((err) => {
      setFormErrors({ ...formErrors, [event.target.name]: err.errors })
    })
  };

  const submit = () => {
    const newCustomer = {
      name: formValues.name.trim(),
      pizzaSize: formValues.pizzaSize.trim(),
      sausage: formValues.sausage,
      pepperoni: formValues.pepperoni,
      beef: formValues.beef,
      chicken: formValues.chicken,
      bacon: formValues.bacon,
      veggies: formValues.veggies,
      extraCheese: formValues.extraCheese,
      specialOrder: formValues.specialOrder.trim(),
    }
    postNewCustomerOrder(newCustomer)
  };

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues]);

  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
      </header>

      <Switch>
        <Route path='/pizza'>
          <Form 
            formValues={formValues}
            formChanges={formChanges}
            formErrors={formErrors}
            submit={submit}
            disabled={disabled}
          />
        </Route>
          <Route path='/'>
            <Home />
          </Route>
      </Switch>
      
      {
        customers.map(customer => {
          return (
            <Customer key={customer.id} customerInfo={customer} />
          )
        })
      }

    </div>
  );
};

export default App;