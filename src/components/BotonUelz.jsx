import React, { useContext } from "react";
import { Context } from "../context/appContext";

const BotonUelz = () => {
  const { store } = useContext(Context);
  return (
    <span>
      {" "}
      <button
        className="uelz-button uelz-button-styles"
        id="uelz-button"
        data-service-name="Conferencias"
        data-plan-name="Regional"
        data-plan-description="Descripción del servicio"
        data-plan-amount="5"
        data-plan-currency="EUR"
        data-plan-type="Subscription"
        data-plan-frequency="month"
        data-plan-billing-cycles="2"
        data-plan-payment-day="25"
        data-type-subscription="variable"
        data-future-charge-action="last_charge"
        data-consume-units="1"
        data-external-usage-id="abc2sr5tgd"
      >
        Comprar
      </button>
    </span>
  );
};

export default BotonUelz;
