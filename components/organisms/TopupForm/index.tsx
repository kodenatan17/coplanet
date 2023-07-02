import React from "react";
import NominalItem from "./NominalItem";
import PaymentItem from "./PaymentItem";

export default function TopupForm(props: any) {
  const { nominals, payments } = props;
  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="htmlForm-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>
          <br />
          <input
            type="text"
            className="htmlForm-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((e: any) => {
            return (
              <NominalItem
                key={e._id}
                _id={e._id}
                coinQuantity={e.coinQuantity}
                coinName={e.coinName}
                price={e.price}
              />
            );
          })}
          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map((payment: any) =>
              payment.banks.map((bank: any) => (
                <PaymentItem
                  bankID={bank._id}
                  name={bank.bankName}
                  type={payment.type}
                />
              ))
            )}
            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="htmlForm-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <br />
        <input
          type="text"
          className="htmlForm-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <a
          href="/checkout"
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </a>
      </div>
    </form>
  );
}
