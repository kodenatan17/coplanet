import React from "react";
import StepItems from "../../molecules/StepItems";

export default function TransactionsStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Business
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItems
            icon="step1"
            title="1. Start"
            desc1="Pilih salah satu menu"
            desc2="yang ingin kamu top up"
          />
          <StepItems
            icon="step2"
            title="2. Fill Up"
            desc1="Top up sesuai dengan"
            desc2="nominal yang sudah tersedia"
          />
          <StepItems
            icon="step3"
            title="3. Be a Winner"
            desc1="Siap digunakan untuk"
            desc2="improve bisnis kamu"
          />
        </div>
      </div>
    </section>
  );
}
