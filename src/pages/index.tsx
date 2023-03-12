import { useEffect } from "react";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              <img src="/icon/logo.png" className="img-fluid" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                <li className="nav-item my-auto">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item my-auto">
                  <a className="nav-link" href="#">
                    Menus
                  </a>
                </li>
                <li className="nav-item my-auto">
                  <a className="nav-link" href="#">
                    Rewards
                  </a>
                </li>

                <li className="nav-item my-auto">
                  <a className="nav-link" href="#">
                    Discover
                  </a>
                </li>
                <li className="nav-item my-auto me-lg-20">
                  <a className="nav-link" href="#">
                    Our Outlets
                  </a>
                </li>
                <li className="nav-item my-auto">
                  <a
                    className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                    href="./src/sign-in.html"
                    role="button"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <section className="header pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row gap-lg-0 gap-5">
            <div className="col-lg-6 col-12 my-auto">
              <p className="text-support text-lg color-palette-2">
                Halo members,
              </p>
              <h1 className="header-title color-palette-1 fw-bold">
                Topup & Get <span className="d-sm-inline d-none">a</span>
                <span className="d-sm-none d-inline">a</span>
                <span className="underline-blue"> New</span>{" "}
                <br className="d-sm-block d-none" />{" "}
                <span className="underline-blue">Experience</span> in Business
              </h1>
              <p className="mt-30 mb-40 text-lg color-palette-1">
                Kami menyediakan jutaan cara untuk membantu
                <br className="d-md-block d-none" /> Members menjadi pemenang
                sejati
              </p>
              <div className="d-flex flex-lg-row flex-column gap-4">
                <a
                  className="btn btn-get text-lg text-white rounded-pill"
                  href="#feature"
                  role="button"
                >
                  Get Started
                </a>
                <a
                  className="btn-learn text-lg color-palette-1 my-auto text-center"
                  href="#"
                  role="button"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-lg-block d-none">
              <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
                <div className="position-relative" data-aos="zoom-in">
                  <img src="/img/Header-1.png" className="img-fluid" alt="" />
                  <div className="card left-card position-absolute border-0">
                    <div className="d-flex align-items-center mb-16 gap-3">
                      <img
                        src="/img/Header-2.png"
                        width="40"
                        height="40"
                        className="rounded-pill"
                        alt=""
                      />
                      <div>
                        <p className="text-sm fw-medium color-palette-1 m-0">
                          Shayna Anne
                        </p>
                        <p className="text-xs fw-light color-palette-2 m-0">
                          Professional Members
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="card right-card position-absolute border-0">
                    <div className="position-relative d-flex flex-row justify-content-center mb-24">
                      <img
                        src="/img/Header-3.png"
                        className="rounded-pill"
                        alt=""
                      />
                      <p className="right-card-support text-white text-xxs text-center position-absolute m-0">
                        New
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-center m-0 fw-medium color-palette-1">
                        Lann Knight
                      </p>
                      <p className="fw-light text-center m-0 color-palette-2 text-xs">
                        Dota 2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
            It’s Really That
            <br /> Easy to Win the Business
          </h2>
          <div className="row gap-lg-0 gap-4" data-aos="fade-up">
            <div className="col-lg-4">
              <div className="card feature-card border-0">
                <svg
                  className="mb-30"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0-icon1"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                  </mask>
                  <g mask="url(#mask0-icon1)">
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                    <mask
                      id="mask1"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="-12"
                      y="23"
                      width="67"
                      height="73"
                    >
                      <path
                        d="M-12 23H33C45.1503 23 55 32.8497 55 45V96H-12V23Z"
                        fill="#4D17E2"
                      />
                    </mask>
                    <g mask="url(#mask1)">
                      <path
                        d="M-12 23H33C45.1503 23 55 32.8497 55 45V96H-12V23Z"
                        fill="#7B3F00"
                      />
                      <path
                        d="M37 55H-4"
                        stroke="white"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M23 64L-4 64"
                        stroke="#B7B0F4"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <rect
                        x="23"
                        y="13"
                        width="52"
                        height="34"
                        rx="13"
                        fill="#352620"
                      />
                    </g>
                    <rect
                      x="27"
                      y="16"
                      width="41"
                      height="27"
                      rx="13"
                      fill="#4D2E07"
                    />
                    <circle
                      cx="47.5"
                      cy="29.5"
                      r="5.5"
                      stroke="white"
                      stroke-width="4"
                    />
                  </g>
                </svg>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">
                  1. Start
                </p>
                <p className="text-lg color-palette-1 mb-0">
                  Pilih salah satu menu
                  <br />
                  yang ingin kamu top up
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card feature-card border-0">
                <svg
                  className="mb-30"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0-icon2"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                  </mask>
                  <g mask="url(#mask0-icon2)">
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                    <rect
                      x="-14"
                      y="16"
                      width="62"
                      height="82"
                      rx="16"
                      fill="#7B3F00"
                    />
                    <path
                      d="M32 36H5"
                      stroke="white"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27 45L9 45"
                      stroke="#B7B0F4"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <rect
                      x="56"
                      y="37"
                      width="49"
                      height="75"
                      rx="16"
                      fill="#4D2E07"
                    />
                    <path
                      d="M97 50H70"
                      stroke="white"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M92 59L74 59"
                      stroke="#6B63AC"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">
                  2. Fill Up
                </p>
                <p className="text-lg color-palette-1 mb-0">
                  Top up sesuai dengan
                  <br />
                  nominal yang sudah tersedia
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card feature-card border-0">
                <svg
                  className="mb-30"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0-icon3"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                  </mask>
                  <g mask="url(#mask0-icon3)">
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                    <rect
                      x="13"
                      y="25"
                      width="54"
                      height="61"
                      rx="16"
                      fill="#903B0D"
                    />
                    <path
                      d="M50 46L50 68"
                      stroke="white"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M40 54L40 68"
                      stroke="#B7B0F4"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M30 60L30 68"
                      stroke="#B7B0F4"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle cx="40" cy="26" r="14" fill="#4D2E07" />
                    <path
                      d="M39.0489 18.927C39.3483 18.0057 40.6517 18.0057 40.9511 18.9271L42.0206 22.2188C42.1545 22.6309 42.5385 22.9098 42.9717 22.9098H46.4329C47.4016 22.9098 47.8044 24.1494 47.0207 24.7188L44.2205 26.7533C43.87 27.0079 43.7234 27.4593 43.8572 27.8713L44.9268 31.1631C45.2261 32.0844 44.1717 32.8506 43.388 32.2812L40.5878 30.2467C40.2373 29.9921 39.7627 29.9921 39.4122 30.2467L36.612 32.2812C35.8283 32.8506 34.7739 32.0844 35.0732 31.1631L36.1428 27.8713C36.2766 27.4593 36.13 27.0079 35.7795 26.7533L32.9793 24.7188C32.1956 24.1494 32.5984 22.9098 33.5671 22.9098H37.0283C37.4615 22.9098 37.8455 22.6309 37.9794 22.2188L39.0489 18.927Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">
                  3. Be a Winner
                </p>
                <p className="text-lg color-palette-1 mb-0">
                  Siap digunakan untuk
                  <br />
                  improve bisnis kamu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Our Featured
            <br /> Menus This Year
          </h2>
          <div
            className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
            data-aos="fade-up"
          >
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  <img
                    src="/img/Thumbnail-1.png"
                    width="205"
                    height="270"
                    alt=""
                  />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto">
                      <svg
                        width="50"
                        height="50"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        fill="#ffffff"
                        stroke="#ffffff"
                      >
                        <path
                          className="st0"
                          d="M474.803,351.766l-41.189-136.924c-1.557-5.06-6.256-8.554-11.553-8.554h-14.387V38.4 C407.665,17.176,390.48,0.009,369.265,0H141.674c-21.215,0.009-38.4,17.176-38.4,38.4v171.866h-9.38 c-4.998,0-9.512,3.124-11.263,7.823L37.474,338.523c-1.452,3.846-0.845,8.131,1.627,11.44c2.402,3.256,6.318,5.06,10.41,4.813 l44.384-3.009v129.462c0,16.983,13.788,30.771,30.709,30.771h261.75c16.912,0,30.709-13.788,30.709-30.771V362.246l44.858,4.998 c3.968,0.414,8.008-1.206,10.594-4.276S475.947,355.62,474.803,351.766z M311.411,23.362h57.855 c4.189,0.009,7.884,1.664,10.638,4.408c2.746,2.754,4.4,6.442,4.408,10.63v61.99h-72.901V23.362z M311.411,117.909h72.901v78.27 h-72.901V117.909z M311.411,213.698h70.253l-6.459,2.587l-62.07,24.814l-1.725,0.687V213.698z M217.435,23.362h76.448v77.028 h-76.448V23.362z M217.435,117.909h76.448v78.27h-76.448V117.909z M217.435,213.698h76.448v35.091l-53.851,21.568l-22.596-12.011 V213.698z M126.636,38.4c0-4.188,1.663-7.875,4.4-10.63c2.762-2.744,6.45-4.399,10.638-4.408h58.242v77.028h-73.28V38.4z M126.636,117.909h73.28v78.27h-73.28V117.909z M199.916,213.698v35.355l-1.734-0.914l-59.914-31.854l-4.866-2.587H199.916z M239.732,317.81l-24.629,1.68l-121.208,8.192l-27.34,1.804l35.708-95.137h18.724l98.754,52.505l15.715,8.306l3.194,1.69 l3.731,1.988l25.949,13.789l5.42,2.886L239.732,317.81z M417.063,337.916l-64.173-7.179l-30.41-16.551 c-0.052-0.036-0.079-0.08-0.132-0.106l-2.71-1.452l-51.722-27.463l136.986-54.792h8.184l33.357,110.861L417.063,337.916z"
                        ></path>{" "}
                      </svg>
                    </div>
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">
                        Chocolate Mousse
                      </p>
                      <p className="fw-light text-white m-0">Heavy Cream</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  <img
                    src="/img/Thumbnail-2.png"
                    width="205"
                    height="270"
                    alt=""
                  />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto">
                      <svg
                        width="50"
                        height="50"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        fill="#ffffff"
                        stroke="#ffffff"
                      >
                        <path
                          className="st0"
                          d="M474.803,351.766l-41.189-136.924c-1.557-5.06-6.256-8.554-11.553-8.554h-14.387V38.4 C407.665,17.176,390.48,0.009,369.265,0H141.674c-21.215,0.009-38.4,17.176-38.4,38.4v171.866h-9.38 c-4.998,0-9.512,3.124-11.263,7.823L37.474,338.523c-1.452,3.846-0.845,8.131,1.627,11.44c2.402,3.256,6.318,5.06,10.41,4.813 l44.384-3.009v129.462c0,16.983,13.788,30.771,30.709,30.771h261.75c16.912,0,30.709-13.788,30.709-30.771V362.246l44.858,4.998 c3.968,0.414,8.008-1.206,10.594-4.276S475.947,355.62,474.803,351.766z M311.411,23.362h57.855 c4.189,0.009,7.884,1.664,10.638,4.408c2.746,2.754,4.4,6.442,4.408,10.63v61.99h-72.901V23.362z M311.411,117.909h72.901v78.27 h-72.901V117.909z M311.411,213.698h70.253l-6.459,2.587l-62.07,24.814l-1.725,0.687V213.698z M217.435,23.362h76.448v77.028 h-76.448V23.362z M217.435,117.909h76.448v78.27h-76.448V117.909z M217.435,213.698h76.448v35.091l-53.851,21.568l-22.596-12.011 V213.698z M126.636,38.4c0-4.188,1.663-7.875,4.4-10.63c2.762-2.744,6.45-4.399,10.638-4.408h58.242v77.028h-73.28V38.4z M126.636,117.909h73.28v78.27h-73.28V117.909z M199.916,213.698v35.355l-1.734-0.914l-59.914-31.854l-4.866-2.587H199.916z M239.732,317.81l-24.629,1.68l-121.208,8.192l-27.34,1.804l35.708-95.137h18.724l98.754,52.505l15.715,8.306l3.194,1.69 l3.731,1.988l25.949,13.789l5.42,2.886L239.732,317.81z M417.063,337.916l-64.173-7.179l-30.41-16.551 c-0.052-0.036-0.079-0.08-0.132-0.106l-2.71-1.452l-51.722-27.463l136.986-54.792h8.184l33.357,110.861L417.063,337.916z"
                        ></path>{" "}
                      </svg>
                    </div>
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">
                        Chocolate Bombs Lava
                      </p>
                      <p className="fw-light text-white m-0">Heavy Cream</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  <img
                    src="/img/Thumbnail-3.png"
                    width="205"
                    height="270"
                    alt=""
                  />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto">
                      <svg
                        width="50"
                        height="50"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        fill="#ffffff"
                        stroke="#ffffff"
                      >
                        <path
                          className="st0"
                          d="M474.803,351.766l-41.189-136.924c-1.557-5.06-6.256-8.554-11.553-8.554h-14.387V38.4 C407.665,17.176,390.48,0.009,369.265,0H141.674c-21.215,0.009-38.4,17.176-38.4,38.4v171.866h-9.38 c-4.998,0-9.512,3.124-11.263,7.823L37.474,338.523c-1.452,3.846-0.845,8.131,1.627,11.44c2.402,3.256,6.318,5.06,10.41,4.813 l44.384-3.009v129.462c0,16.983,13.788,30.771,30.709,30.771h261.75c16.912,0,30.709-13.788,30.709-30.771V362.246l44.858,4.998 c3.968,0.414,8.008-1.206,10.594-4.276S475.947,355.62,474.803,351.766z M311.411,23.362h57.855 c4.189,0.009,7.884,1.664,10.638,4.408c2.746,2.754,4.4,6.442,4.408,10.63v61.99h-72.901V23.362z M311.411,117.909h72.901v78.27 h-72.901V117.909z M311.411,213.698h70.253l-6.459,2.587l-62.07,24.814l-1.725,0.687V213.698z M217.435,23.362h76.448v77.028 h-76.448V23.362z M217.435,117.909h76.448v78.27h-76.448V117.909z M217.435,213.698h76.448v35.091l-53.851,21.568l-22.596-12.011 V213.698z M126.636,38.4c0-4.188,1.663-7.875,4.4-10.63c2.762-2.744,6.45-4.399,10.638-4.408h58.242v77.028h-73.28V38.4z M126.636,117.909h73.28v78.27h-73.28V117.909z M199.916,213.698v35.355l-1.734-0.914l-59.914-31.854l-4.866-2.587H199.916z M239.732,317.81l-24.629,1.68l-121.208,8.192l-27.34,1.804l35.708-95.137h18.724l98.754,52.505l15.715,8.306l3.194,1.69 l3.731,1.988l25.949,13.789l5.42,2.886L239.732,317.81z M417.063,337.916l-64.173-7.179l-30.41-16.551 c-0.052-0.036-0.079-0.08-0.132-0.106l-2.71-1.452l-51.722-27.463l136.986-54.792h8.184l33.357,110.861L417.063,337.916z"
                        ></path>{" "}
                      </svg>
                    </div>
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">
                        Square Assorted
                      </p>
                      <p className="fw-light text-white m-0">Light Cream</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  <img
                    src="/img/Thumbnail-4.png"
                    width="205"
                    height="270"
                    alt=""
                  />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto">
                      <svg
                        width="50"
                        height="50"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        fill="#ffffff"
                        stroke="#ffffff"
                      >
                        <path
                          className="st0"
                          d="M474.803,351.766l-41.189-136.924c-1.557-5.06-6.256-8.554-11.553-8.554h-14.387V38.4 C407.665,17.176,390.48,0.009,369.265,0H141.674c-21.215,0.009-38.4,17.176-38.4,38.4v171.866h-9.38 c-4.998,0-9.512,3.124-11.263,7.823L37.474,338.523c-1.452,3.846-0.845,8.131,1.627,11.44c2.402,3.256,6.318,5.06,10.41,4.813 l44.384-3.009v129.462c0,16.983,13.788,30.771,30.709,30.771h261.75c16.912,0,30.709-13.788,30.709-30.771V362.246l44.858,4.998 c3.968,0.414,8.008-1.206,10.594-4.276S475.947,355.62,474.803,351.766z M311.411,23.362h57.855 c4.189,0.009,7.884,1.664,10.638,4.408c2.746,2.754,4.4,6.442,4.408,10.63v61.99h-72.901V23.362z M311.411,117.909h72.901v78.27 h-72.901V117.909z M311.411,213.698h70.253l-6.459,2.587l-62.07,24.814l-1.725,0.687V213.698z M217.435,23.362h76.448v77.028 h-76.448V23.362z M217.435,117.909h76.448v78.27h-76.448V117.909z M217.435,213.698h76.448v35.091l-53.851,21.568l-22.596-12.011 V213.698z M126.636,38.4c0-4.188,1.663-7.875,4.4-10.63c2.762-2.744,6.45-4.399,10.638-4.408h58.242v77.028h-73.28V38.4z M126.636,117.909h73.28v78.27h-73.28V117.909z M199.916,213.698v35.355l-1.734-0.914l-59.914-31.854l-4.866-2.587H199.916z M239.732,317.81l-24.629,1.68l-121.208,8.192l-27.34,1.804l35.708-95.137h18.724l98.754,52.505l15.715,8.306l3.194,1.69 l3.731,1.988l25.949,13.789l5.42,2.886L239.732,317.81z M417.063,337.916l-64.173-7.179l-30.41-16.551 c-0.052-0.036-0.079-0.08-0.132-0.106l-2.71-1.452l-51.722-27.463l136.986-54.792h8.184l33.357,110.861L417.063,337.916z"
                        ></path>{" "}
                      </svg>
                    </div>
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">
                        Choco Tiramisu
                      </p>
                      <p className="fw-light text-white m-0">Heavy Cream</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="featured-game-card position-relative">
              <a href="./src/detail.html">
                <div className="blur-sharp">
                  <img
                    src="/img/Thumbnail-5.png"
                    width="205"
                    height="270"
                    alt=""
                  />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto">
                      <svg
                        width="50"
                        height="50"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        fill="#ffffff"
                        stroke="#ffffff"
                      >
                        <path
                          className="st0"
                          d="M474.803,351.766l-41.189-136.924c-1.557-5.06-6.256-8.554-11.553-8.554h-14.387V38.4 C407.665,17.176,390.48,0.009,369.265,0H141.674c-21.215,0.009-38.4,17.176-38.4,38.4v171.866h-9.38 c-4.998,0-9.512,3.124-11.263,7.823L37.474,338.523c-1.452,3.846-0.845,8.131,1.627,11.44c2.402,3.256,6.318,5.06,10.41,4.813 l44.384-3.009v129.462c0,16.983,13.788,30.771,30.709,30.771h261.75c16.912,0,30.709-13.788,30.709-30.771V362.246l44.858,4.998 c3.968,0.414,8.008-1.206,10.594-4.276S475.947,355.62,474.803,351.766z M311.411,23.362h57.855 c4.189,0.009,7.884,1.664,10.638,4.408c2.746,2.754,4.4,6.442,4.408,10.63v61.99h-72.901V23.362z M311.411,117.909h72.901v78.27 h-72.901V117.909z M311.411,213.698h70.253l-6.459,2.587l-62.07,24.814l-1.725,0.687V213.698z M217.435,23.362h76.448v77.028 h-76.448V23.362z M217.435,117.909h76.448v78.27h-76.448V117.909z M217.435,213.698h76.448v35.091l-53.851,21.568l-22.596-12.011 V213.698z M126.636,38.4c0-4.188,1.663-7.875,4.4-10.63c2.762-2.744,6.45-4.399,10.638-4.408h58.242v77.028h-73.28V38.4z M126.636,117.909h73.28v78.27h-73.28V117.909z M199.916,213.698v35.355l-1.734-0.914l-59.914-31.854l-4.866-2.587H199.916z M239.732,317.81l-24.629,1.68l-121.208,8.192l-27.34,1.804l35.708-95.137h18.724l98.754,52.505l15.715,8.306l3.194,1.69 l3.731,1.988l25.949,13.789l5.42,2.886L239.732,317.81z M417.063,337.916l-64.173-7.179l-30.41-16.551 c-0.052-0.036-0.079-0.08-0.132-0.106l-2.71-1.452l-51.722-27.463l136.986-54.792h8.184l33.357,110.861L417.063,337.916z"
                        ></path>{" "}
                      </svg>
                    </div>
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">
                        Chocobars Mints
                      </p>
                      <p className="fw-light text-white m-0">Light Cream</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="reached pt-50 pb-50">
        <div className="container-fluid">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
            <div className="me-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                290M+
              </p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                Members Top Up
              </p>
            </div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                12.500
              </p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                Menus Available
              </p>
            </div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                99,9%
              </p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                Happy Members
              </p>
            </div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                4.7
              </p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                Rating Our Brands
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="story pt-50 pb-50">
        <div className="container-xxl container-fluid"/>
            <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
                <div className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60" data-aos="zoom-in">
                    <img src="/img/Header-9.png" width="612" height="452" className="img-fluid" alt=""/>
                </div>
                <div className="col-lg-5 col-12 ps-lg-60">
                    <div className="">
                        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Win the battle.<br/> Be the Champion.
                        </h2>
                        <p className="text-lg color-palette-1 mb-30">Kami menyediakan jutaan cara untuk<br
                                className="d-sm-block d-none">
                            membantu Members menjadi<br className="d-sm-block d-none"> pemenang sejati</p>
                        <div className="d-md-block d-flex flex-column w-100">
                            <a className="btn btn-read text-lg rounded-pill" href="#" role="button">Read Story</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

      <section className="footer pt-50">
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 text-lg-start text-center">
                <a href="" className="mb-30">
                  {/* <img src="/icon/logo.png" className="img-fluid" alt="" /> */}

                  {/* <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="60"
                      height="60"
                    >
                      <circle cx="30" cy="30" r="30" fill="#3546AB" />
                    </mask>
                    <g mask="url(#mask0)">
                      <circle cx="30" cy="30" r="30" fill="#00BAFF" />
                      <path
                        d="M41.5001 35.0001C52.3001 38.2001 49.6668 48.0001 47.0001 52.5001L71.0001 60.5001L79.5001 -12.9999C63.6667 -13.8333 29.5001 -14.9999 19.5001 -12.9999C7.00007 -10.4999 13.5001 4.00006 12.0001 14.0001C10.5001 24.0001 28.0001 31.0001 41.5001 35.0001Z"
                        fill="#4D17E2"
                      />
                      <path
                        d="M54.495 47.785C54.495 51.285 53.655 54.54 51.975 57.55C50.295 60.56 47.74 63.01 44.31 64.9C40.88 66.79 36.645 67.735 31.605 67.735C26.705 67.735 22.33 66.86 18.48 65.11C14.7 63.29 11.655 60.84 9.345 57.76C7.105 54.61 5.81 51.04 5.46 47.05H15.645C15.855 49.15 16.555 51.215 17.745 53.245C19.005 55.205 20.755 56.85 22.995 58.18C25.305 59.44 28.07 60.07 31.29 60.07C35.49 60.07 38.71 58.95 40.95 56.71C43.19 54.47 44.31 51.6 44.31 48.1C44.31 45.09 43.505 42.64 41.895 40.75C40.355 38.86 38.43 37.39 36.12 36.34C33.81 35.22 30.66 34.03 26.67 32.77C21.98 31.23 18.2 29.795 15.33 28.465C12.53 27.065 10.115 25 8.085 22.27C6.125 19.54 5.145 15.935 5.145 11.455C5.145 7.60499 6.055 4.20999 7.875 1.27C9.765 -1.67 12.425 -3.945 15.855 -5.555C19.355 -7.165 23.45 -7.97 28.14 -7.97C35.42 -7.97 41.195 -6.185 45.465 -2.615C49.735 0.884996 52.22 5.365 52.92 10.825H42.63C42.07 7.885 40.565 5.295 38.115 3.055C35.665 0.814997 32.34 -0.305003 28.14 -0.305003C24.29 -0.305003 21.21 0.709996 18.9 2.73999C16.59 4.69999 15.435 7.5 15.435 11.14C15.435 14.01 16.17 16.355 17.64 18.175C19.18 19.925 21.07 21.325 23.31 22.375C25.55 23.355 28.63 24.475 32.55 25.735C37.31 27.275 41.125 28.745 43.995 30.145C46.935 31.545 49.42 33.68 51.45 36.55C53.48 39.35 54.495 43.095 54.495 47.785Z"
                        fill="white"
                      />
                    </g>
                  </svg> */}
                </a>
                <p className="mt-30 text-lg color-palette-1 mb-30">
                  CoPlanet membantu members
                  <br /> untuk menjadi pemenang sejati
                </p>
                <p className="mt-30 text-lg color-palette-1 mb-30">
                  Copyright 2023. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-8 mt-lg-0 mt-20">
                <div className="row gap-sm-0">
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">
                      Company
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Press Release
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Terms of Use
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Privacy & Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">
                      Support
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Refund Policy
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Unlock Rewards
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Live Chatting
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">
                      Connect
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a
                          href="mailto: hi.coplanet@gmail.com"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          hi.coplanet@gmail.com
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="mailto: team.coplanet@gmail.com"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          team.coplanet@gmail.com
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="http://maps.google.com/?q=Cikarang,
                                        Kabupaten Bekasi"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Cikarang, Kabupaten Bekasi
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="tel: 02188239090"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          021 - 8823 - 9090
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
