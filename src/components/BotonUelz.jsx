import React, { useContext, useEffect } from "react";
import { Context } from "../context/appContext";

const BotonUelz = ({ formUel }) => {
  const { store } = useContext(Context);
  console.log(store.carrito);
  console.log(
    `Vas a comprar los siguientes muebles : ${store.carrito
      .map((item) => `${item.nombre} (${item.precio_mes}/mes)`)
      .join(", ")} `
  );
  console.log(formUel);

  return (
    <div className="flex justify-center mt-3">
      <button
        className="uelz-button uelz-button-styles"
        id="uelz-button"
        data-service-name={store.carrito
          .map((item) => `${item.nombre} (${item.precio_mes}/mes)`)
          .join(", ")}
        data-plan-name={store.carrito
          .map((item) => `${item.nombre} (${item.precio_mes}/mes)`)
          .join(", ")}
        data-plan-description={`Acabas de rescatar estos muebles : ${store.carrito
          .map((item) => `${item.nombre} (${item.precio_mes}/mes)`)
          .join(", ")} `}
        data-plan-amount={store.precioCarrito}
        data-plan-currency="EUR"
        data-plan-type="Subscription"
        data-plan-frequency="month"
        data-plan-billying-cycles={formUel.plan_time}
        data-plan-payment-day={formUel.pay_day}
        data-type-subscription="variable"
        data-future-charge-action="last_charge"
        data-consume-units="1"
        data-external-usage-id="abc3sr5tgd"
        data-customer-email={store.user.email}
        data-name={store.user.name}
      >
        Completar
      </button>
    </div>
  );
};

export default BotonUelz;
