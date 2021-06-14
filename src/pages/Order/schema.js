import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().min(2,"name must be at least 2 characters").required("name is required"),
    size: yup.string().required(),
    sauce: yup.string().required(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    mushrooms: yup.boolean(),
    onions: yup.boolean(),
    olives: yup.boolean(),
    bellpeppers: yup.boolean(),
    glutenfree: yup.boolean(),
    cauliflower: yup.boolean(),
    special: yup.string(),
    quantity: yup.string().required()
})

export default schema;