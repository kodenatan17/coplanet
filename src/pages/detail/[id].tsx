import Navbar from "../../../components/organisms/navbar";
import React, { useCallback, useEffect, useState } from "react";
import Footer from "../../../components/organisms/Footer";
import TopupForm from "../../../components/organisms/TopupForm";
import TopupItem from "../../../components/organisms/TopupItem";
import { useRouter } from "next/router";
import { getDetailVoucher } from "../../../services/player";

export default function Detail() {
  const { query, isReady } = useRouter();
  const [dataItem, setDataItem] = useState({
    name: "",
    thumbnail: "",
    category: {
      name: "",
    },
  });

  const getVoucherDetailAPI = useCallback(async (id: any) => {
    const data = await getDetailVoucher(id);
    console.log("data: ", data);
    setDataItem(data.detail);
  }, []);

  useEffect(() => {
    if (isReady) {
      console.log("routes ready", query.id);
      getVoucherDetailAPI(query.id);
    } else {
      console.log("routes not ready");
    }
  }, [isReady]);
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopupItem data={dataItem} type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopupItem data={dataItem} type="desktop" />
              <hr />
              <TopupForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
