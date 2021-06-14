import { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Form from "./Form";
import OrderComplete from "./OrderComplete";

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

const OrderPage = () => {
  const match = useRouteMatch();
  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <Switch>
      <Route path={match.path} exact>
        <Form formValues={formValues} setFormValues={setFormValues}/>
      </Route>
      <Route path={`${match.path}/complete`}>
        <OrderComplete formValues={formValues} />
      </Route>
    </Switch>
  );
};

export default OrderPage;
