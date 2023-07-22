import jwtDecode from "jwt-decode";
import React from "react";
import Sidebar from "../../../../components/organisms/Sidebar";
import TransactionDetailContents from "../../../../components/organisms/TransactionDetailContents";
import {
  HistoryTransactionTypes,
  JWTPayloadTypes,
  UserTypes,
} from "../../../../services/data-types";
import { getTransactionDetail } from "../../../../services/member";

interface TransactionDetailProps {
  transactionDetail: HistoryTransactionTypes;
}
export default function TransactionsDetails(props: TransactionDetailProps) {
  const { transactionDetail } = props;
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionDetailContents data={transactionDetail} />
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
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idTrx } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userPayload.avatar = `${IMG}/${userPayload.avatar}`;

  const response = await getTransactionDetail(idTrx, jwtToken);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
