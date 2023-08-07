import React from "react";
import Sidebar from "../../../../components/organisms/Sidebar";
import TransactionContents from "../../../../components/organisms/TranscationContents";
import { JWTPayloadTypes, UserTypes } from "../../../../services/data-types";

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

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
