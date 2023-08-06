import React, { useState } from "react";
import { debounce } from "lodash";
import {
  BanksTypes,
  NominalsTypes,
  PaymentTypes,
} from "../../../services/data-types";
import NominalItem from "./NominalItem";
import PaymentItem from "./PaymentItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

interface TopupFormProps {
  nominals: NominalsTypes[];
  payments: PaymentTypes[];
}

export default function TopupForm(props: TopupFormProps) {
  const [verifyID, setVerifyID] = useState("");
  const { nominals, payments } = props;
  const [bankAccountName, setBankAccountName] = useState("");
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});
  const router = useRouter();

  const onNominalItemSelected = (data: NominalsTypes) => {
    setNominalItem(data);
  };

  const onPaymentItemSelected = (payment: PaymentTypes, bank: BanksTypes) => {
    const data = {
      payment,
      bank,
    };
    setPaymentItem(data);
  };

  const onSubmit = () => {
    if (
      verifyID === "" ||
      bankAccountName === "" ||
      Object.keys(nominalItem).length === 0 ||
      Object.keys(paymentItem).length === 0
    ) {
      toast.error("Silahkan isi semua detail");
    } else {
      const data = {
        verifyID,
        bankAccountName,
        nominalItem,
        paymentItem,
      };
      localStorage.setItem("data-topup", JSON.stringify(data));
      router.push("/checkout");
    }
  };
  return (
    <>
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
            value={verifyID}
            onChange={debounce((event) => setVerifyID(event.target.value))}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((e: NominalsTypes) => {
            return (
              <NominalItem
                key={e._id}
                _id={e._id}
                coinQuantity={e.coinQuantity}
                coinName={e.coinName}
                price={e.price}
                onChange={debounce(() => onNominalItemSelected(e))}
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
            {payments.map((payment: PaymentTypes) =>
              payment.banks.map((bank: BanksTypes) => (
                <PaymentItem
                  bankID={bank._id}
                  name={bank.bankName}
                  type={payment.type}
                  onChange={debounce(() =>
                    onPaymentItemSelected(payment, bank)
                  )}
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
          value={bankAccountName}
          onChange={debounce((event) => setBankAccountName(event.target.value))}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Continue
        </button>
      </div>
    </>
  );
}
