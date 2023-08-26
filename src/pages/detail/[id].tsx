import { useEffect } from "react";
import Footer from "../../../components/organisms/Footer";
import Navbar from "../../../components/organisms/navbar";
import TopupForm from "../../../components/organisms/TopupForm";
import TopupItem from "../../../components/organisms/TopupItem";
import {
  MenuItemTypes,
  NominalsTypes,
  PaymentTypes,
} from "../../../services/data-types";
import { getDetailVoucher, getFeaturedMenu } from "../../../services/player";

interface DetailProps {
  dataItem: MenuItemTypes;
  nominals: NominalsTypes[];
  payments: PaymentTypes[];
}

export default function Detail({ dataItem, nominals, payments }: DetailProps) {
  useEffect(() => {
    // Store data in localStorage
    localStorage.setItem("data-item", JSON.stringify(dataItem));
  }, [dataItem]);
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
              <TopupForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const data = await getFeaturedMenu();
  const paths = data.map((item: MenuItemTypes) => {
    return {
      params: {
        id: item._id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { id } = params;
  const data = await getDetailVoucher(id);
  return {
    props: {
      dataItem: data.detail,
      nominals: data.detail.nominals,
      payments: data.payment,
    },
  };
}
