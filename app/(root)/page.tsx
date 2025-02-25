import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="home" className="@container ">
        <div className="blue hidden md:block absolute left-0 top-0 p-16 "></div>
        <div className="container home  @md:flex-row">
          <h2 className="titel">
            Product Certification <br />
            Expert
          </h2>
          <p className="responsive-font">
            We provide one-stop professional services in the field of product
            compliance, bringing your products to market in Vietnam and
            Southeast Asia.
          </p>
          <a className="btn" href="#featured_service">
            LEARN MORE
          </a>
        </div>
      </section>
      <section id="featured_service">
        <div className="container featured_service ">
          <h2 className=" m-3 responsive-font fs-1">
            Featured service —— MIC ICT type approval certificate
          </h2>
          <div className="row flex-column flex-md-row my-md-2 responsive-font">
            <div className="col d-flex justify-content-around">
              <div className="d-flex flex-md-column justify-content-around align-items-center ">
                <img
                  className="img-thumbnail m-2"
                  src="assets/ICT.png"
                  alt="ICT with code"
                />
                <img
                  className="img-thumbnail m-2"
                  src="assets/ICT2.png"
                  alt="ICT"
                />
              </div>
            </div>
            <div className="col d-flex flex-column align-items-end ">
              <ul className="fs-1">
                <li className="m-md-3">
                  To enter Vietnam’s market, ICT manufacturers must obtain
                  <br />
                  <span className="text-danger font-weight-bold">
                    -Type Approval Certificate (TAC);{" "}
                  </span>
                  and/or
                  <br />
                  <span className="text-danger font-weight-bold">
                    -Declaration of Conformity (DoC)
                  </span>
                </li>
                <li className="m-md-3">
                  TAC is issued by VNTA based on MIC regulations, while DoC is
                  required for import clearance. Certification follows different
                  systems, including factory audits and shipment-based
                  approvals.
                </li>
                <li className="m-md-3">
                  After TAC and DoC, products need to be put on ICT Mark (ICT
                  label) as shown on the left also.
                </li>
              </ul>
              <div className="d-flex   position-absolute bottom-0 end-0">
                <span>Want to know more about the process? ➡️</span>
                <Link className="btn position-relative" href="/contact">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="equipment">
        <div className="container equipment ">
          <h2 className=" m-3 responsive-font fs-1">
            Equipment Required to Comply
          </h2>
          <div className="row flex-column flex-md-row my-5">
            <div className="col">
              <ul>
                <li className="m-md-3">
                  Mobile phones, including feature phones and smartphones with
                  2G, 3G, 4G LTE, 5G, WLAN, and NFC.
                </li>
                <li className="m-md-3">
                  WLAN WiFi transmitters, such as access points, routers,
                  laptops, tablets, etc.
                </li>
                <li className="m-md-3">
                  2G, 3G, 4G LTE, and 5G NR terminals, RFID-enabled scanners,
                  and RFID readers.
                </li>
                <li className="m-md-3">
                  Smart TVs, WiFi-enabled set-top boxes, and wireless
                  receiver-enabled translators.
                </li>
                <li className="m-md-3">
                  And more. Get in touch with us to understand your products.
                </li>
              </ul>
              <a className="btn" href="#contactus">
                GET IN TOUCH
              </a>
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="assets/equipment.jpg"
                alt="Equipment required"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="service">
        <div className="container service">
          <div className="row flex-column-reverse  flex-md-row">
            <div className="col">
              <div className="d-flex justify-content-center">
                <img
                  className="img-fluid"
                  src="assets/services.jpg"
                  alt="Services"
                />
              </div>
            </div>
            <div className="col">
              <h2 className=" responsive-font fs-1">Our Services</h2>
              <p className="responsive-font">
                We provide one-stop professional services in the field of
                product compliance, making product certification faster and
                simpler.
              </p>
              <ul className="">
                <li>
                  <span className="serviceicon"></span>EMC /Safety/RF/Energy
                  efficiency
                </li>
                <li>In Country Test / MRA</li>
                <li>Local Representative</li>
                <li>And More.</li>
              </ul>
              <div className="d-flex flex-column justify-content-center align-items-center position-absolute bottom-0 end-0">
                <p>over 200 countries</p>
                <Link
                  className="btn position-relative text-center"
                  href="/service-couintries"
                >
                  Our service countries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="news">
        <div className="container news justify-content-center ">
          <h2 className="responsive-font text-center  fs-1 ">News</h2>
          <p className="-italic responsive-font text-center fs-4">
            What’s New in Vietnam Certification
          </p>
          <div className=" newscontainer">
            <div className="newsbox">
              <p>- 1</p>
              <ul className="text-white">
                <li>
                  MIC has issued Circular No. 04/2023 in which the new QCVN
                  117:2023/BTTTT.
                </li>
                <li>For more details, please visit:</li>
                <li>
                  <a href="https://www.glodacert.co/post/vietnam-mic-releases-new-notice-related-to-qcvn-117-2023-btttt-2024-jan-4">
                    Vietnam MIC releases new notice related to QCVN
                    117:2023/BTTTT (2024-Jan.-4) (glodacert.co){" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className=" newsbox">
              <p>- 2</p>
              <ul className="text-white">
                <li>
                  Vietnam enforces ITC- Safety in 2024 and MEPS in 2025
                  (2023-Dec.-14)
                </li>
                <li>For more details, please visit:</li>
                <li>
                  <a href="https://www.glodacert.co/post/vietnam-enforces-itc-safety-in-2024-and-meps-in-2025-2023-dec-14">
                    Vietnam-enforces-itc-safety-in-2024-and-meps-in-2025-2023-dec-14
                  </a>
                </li>
              </ul>
            </div>
            <div className=" newsbox">
              <p>- 3</p>
              <ul className="text-white">
                <li>
                  MIC has introduced Circular 20/2023/TT-BTTTT and the
                  corresponding National Technical Regulation (QCVN
                  117:2023/BTTTT)
                </li>
                <li>For more details, please visit:</li>
                <li>
                  <a href="https://www.glodacert.co/post/vietnam-circular-20-2023-tt-btttt">
                    vietnam-circular-20-2023-tt-btttt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
