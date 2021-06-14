import React from "react";

const OrderComplete = (props) => {
  const { formValues } = props;
  console.log(formValues);
  return (
    <div>
      <h1>{`Hooray, ${formValues.name}! Your Pizza is on the way!`}</h1>

    </div>
  );
};

export default OrderComplete;
