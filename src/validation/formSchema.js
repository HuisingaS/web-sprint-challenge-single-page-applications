import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is required'),
        pizzaSize: yup
        .string()
        .oneOf(['Personal','Small','Medium','Large','Family','Gargantuan'])
        .required('Please choose a size'),
        sausage: yup
        .boolean(),
        pepperoni: yup
        .boolean(),
        beef: yup
        .boolean(),
        chicken: yup
        .boolean(),
        bacon: yup
        .boolean(),
        veggies: yup
        .boolean(),
        extraCheese: yup
        .boolean(),
        specialOrder: yup
        .string(),
});

export default formSchema;