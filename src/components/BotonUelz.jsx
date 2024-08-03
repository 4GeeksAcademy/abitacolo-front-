import React, { useContext, useEffect } from "react";
import { Context } from "../context/appContext";

const BotonUelz = () => {
  const { store } = useContext(Context);

  return (
    <div className="flex justify-center">
      {" "}
      <button
        className="uelz-button uelz-button-styles"
        id="uelz-button"
        data-service-name="Conferencias"
        data-plan-name="Regional"
        data-plan-description="Descripción del servicio"
        data-plan-amount={store.precioCarrito}
        data-plan-currency="EUR"
        data-plan-type="Subscription"
        data-plan-frequency="month"
        data-plan-billing-cycles="2"
        data-plan-payment-day="25"
        data-type-subscription="fixed"
        data-future-charge-action="last_charge"
        data-consume-units="6"
        data-external-usage-id={store.user.id}
        data-address={store.user.address}
        data-customer-email={store.user.email}
        data-name={store.user.name}
      >
        Comprar
      </button>
    </div>
  );
};

export default BotonUelz;
