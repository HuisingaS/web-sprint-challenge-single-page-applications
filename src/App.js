import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './validation/formSchema';
import Home from './components/Home';
import Customer from './components/Customer';
import Form from './components/Form';

const initFormValues = {
  name: '',
  pizzaSize: '',
  pepperoni: false,
  sausage: false,
  anchovies: false,
  extraCheese: false,
  specialOrder: ''
};

const initFormErrors = {
  name: '',
  pizzaSize: '',
  pepperoni: false,
  sausage: false,
  anchovies: false,
  extraCheese: false,
  specialOrder: ''
};

const initCustomers = []
const initDisabled = true


function App() {
  const [customers, setCustomers] = useState(initCustomers)
  const [formValues, setFormValues] = useState(initFormValues)
  const [formErros, setFormErrors] = useState(initFormErrors)
  const [disabled, setDisabled] = useState(initDisabled)
  console.log(formValues)

  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
          {/* <Link to='/form'>Form</Link> */}
        </nav>
      </header>

      <Switch>
        <Route path='/form'>
          <Form />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      
      {/* {
        customers.map(customer => {
          return (
            <Customer key={customer.id} info={customer} />
          )
        })
      } */}
    
    </div>
  );
};
export default App;