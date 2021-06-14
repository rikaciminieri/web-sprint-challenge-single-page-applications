import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import schema from './schema';

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  bacon: false,
  mushrooms: false,
  onions: false,
  olives: false,
  bellpeppers: false,
  glutenfree: false,
  cauliflower: false,
  special: "",
  quantity: "",
};

const initialFormErrors = {
  name: "",
};

const initialDisabled = true;
const initialOrders = [];

const Form = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postOrder = (newOrder) => {
    axios
      .post(`https://reqres.in/api/orders`, newOrder)
      .then((res) => {
        console.log(newOrder);
        setOrders([...orders, newOrder]);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const inputChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({ ...formErrors, [name]: "" });
    })
    .catch((err) => {
      setFormErrors({ ...formErrors, [name]: err.message });
    });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      bacon: formValues.bacon,
      mushrooms: formValues.mushrooms,
      onions: formValues.onions,
      olives: formValues.olives,
      bellpeppers: formValues.bellpeppers,
      glutenfree: formValues.glutenfree,
      cauliflower: formValues.cauliflower,
      special: formValues.special.trim(),
      quantity: "",
    };
    postOrder(newOrder);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    formSubmit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;

    inputChange(name, valueToUse);
  };

  return (
    <div>
      <div>{formErrors.name}</div>
      <form id="pizza-form" onSubmit={onSubmit}>
        <label>
          Name
          <input type="text" name="name" placeholder="Name is required" onChange={onChange} value={formValues.name}/>
        </label>
        <p>Build your own pizza</p>
        <div>
          <label>
            Choice of size (required):
            <select id="size-dropdown" name="size" onChange={onChange} value={formValues.size}>
              <option value="small">Small (Feeds 1)</option>
              <option value="medium">Medium (Feeds 2-3)</option>
              <option value="large">Large (Feeds 4-6)</option>
              <option value="xtralarge">Xtra Large (Feeds 6-8)</option>
            </select>
          </label>
        </div>
        <div>
          <label>Choice of Sauce (required): </label>
          <label>
            Marinara
            <input type="radio" id="marinara" name="sauce" value={formValues.sauce === "marinara"} onChange={onChange}/>
          </label>
          <label>
            Alfredo
            <input type="radio" id="alfredo" name="sauce" value={formValues.sauce === "alfredo"} onChange={onChange}/>
          </label>
          <label>
            Pesto
            <input type="radio" id="pesto" name="sauce" value={formValues.sauce === "pesto"} onChange={onChange}/>
          </label>
          <label>
            Barbeque
            <input type="radio" id="barbeque" name="sauce" value={formValues.sauce === "barbeque"} onChange={onChange}/>
          </label>
        </div>
        <div>
          <label>Add Toppings: </label>
          <label>
            Pepperoni
            <input type="checkbox" id="pepperoni" name="pepperoni" onChange={onChange} checked={formValues.pepperoni}/>
          </label>
          <label>
            Sausage
            <input type="checkbox" id="sausage" name="sausage" onChange={onChange} checked={formValues.sausage}/>
          </label>
          <label>
            Bacon
            <input type="checkbox" id="bacon" name="bacon" onChange={onChange} checked={formValues.bacon}/>
          </label>
          <label>
            Mushrooms
            <input type="checkbox" id="mushrooms" name="mushrooms" onChange={onChange} checked={formValues.mushrooms}/>
          </label>
          <label>
            Onions
            <input type="checkbox" id="onions" name="onions" onChange={onChange} checked={formValues.onions}/>
          </label>
          <label>
            Olives
            <input type="checkbox" id="olives" name="olives" onChange={onChange} checked={formValues.olives}/>
          </label>
          <label>
            Bell Peppers
            <input type="checkbox" id="bellpeppers" name="bellpeppers" onChange={onChange} checked={formValues.bellpeppers}/>
          </label>
        </div>
        <div>
          <label>Substitutes:</label>
          <label>
            Gluten Free Crust (+ $1.00)
            <input type="checkbox" id="glutenfree" name="glutenfree" onChange={onChange} checked={formValues.glutenfree}/>
          </label>
          <label>
            Cauliflower Crust (+ $2.00)
            <input type="checkbox" id="cauliflower" name="cauliflower" onChange={onChange} checked={formValues.cauliflower}/>
          </label>
        </div>
        <div>
          <label>
            Special Instructions:
            <input
              type="text"
              name="special"
              id="special-text"
              placeholder="Need something else? Let us know!"
              onChange={onChange}
              value={formValues.special}
            />
          </label>
        </div>
        <div>
          <label htmlFor="quantity">Quantity (between 1 and 5):</label>
          <input type="number" id="quantity" name="quantity" min="1" max="5" onChange={onChange} value={formValues.quantity}/>
          <button id="order-button">Add to Order</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
