import React, { useContext, useEffect } from "react";
import { Context } from "../context/appContext";

const BotonUelz = ({formUel}) => {
  const { store, actions } = useContext(Context);
  console.log(store.carrito)
  console.log(`Vas a comprar los siguientes muebles : ${store.carrito.map((item)=> `${item.nombre} (${item.precio_mes}/mes)`).join(', ')} `)
  console.log(formUel)

  return (
    <div className="flex justify-center">
      {" "}
      <button
        className="uelz-button uelz-button-styles"
        id="uelz-button"
        data-service-name="Hola"
        data-plan-name={store.payment_data.name_plan}
        data-plan-description={`Acabas de comprar estos muebles : ${store.carrito.map((item)=> `${item.nombre} (${item.precio_mes}/mes)`).join(', ')} `}
        data-plan-amount={store.precioCarrito}
        data-plan-currency="EUR"
        data-plan-type="Subscription"
        data-plan-frequency="month"
        data-plan-billing-cycles="10"
        data-plan-payment-day="25"
        data-type-subscription="variable"
        data-future-charge-action="last_charge"
        data-consume-units="1"
        data-external-usage-id="abc3sr5tgd"
      >
        Comprar
      </button>
    </div>
  );
};

export default BotonUelz;
