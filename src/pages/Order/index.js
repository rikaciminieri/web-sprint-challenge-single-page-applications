import { Route, Switch, useRouteMatch } from "react-router-dom";
import Form from "./Form";

const OrderPage = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.path} exact>
        <Form />
      </Route>
      <Route path={`${match.path}/complete`}>
        <p>complete</p>
      </Route>
    </Switch>
  );
};

export default OrderPage;
