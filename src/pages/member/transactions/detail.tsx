import React from "react";
import Sidebar from "../../../../components/organisms/Sidebar";
import TransactionDetailContents from "../../../../components/organisms/TransactionDetailContents";

export default function TransactionsDetails() {
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionDetailContents />
      </section>
    </>
  );
}
