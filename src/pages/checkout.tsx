import jwtDecode from "jwt-decode";
import Image from "next/image";
import React from "react";
import CheckoutConfirmation from "../../components/organisms/CheckoutConfirmation";
import CheckoutItems from "../../components/organisms/CheckoutItems";
import CheckoutDetails from "../../components/organisms/ChekoutDetails";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";
import { GetServerSidePropsContext } from "next";

interface CheckoutProps {
  user: UserTypes;
}
export default function Checkout(props: CheckoutProps) {
  const { user } = props;
  return (
    <>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <a className="" href="#">
              <Image
                src="/icon/logo.png"
                width={60}
                height={60}
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>
          <CheckoutItems />
          <hr />
          <CheckoutDetails />
          <CheckoutConfirmation />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
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

  return {
    props: {
      user: { userPayload },
    },
  };
}
