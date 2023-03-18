import React from "react";
import Sidebar from "../../../../components/organisms/Sidebar";
import TransactionContents from "../../../../components/organisms/TranscationContents";

export default function Transactions() {
  return (
    <>
      <section className="transactions overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionContents />
      </section>
    </>
  );
}
