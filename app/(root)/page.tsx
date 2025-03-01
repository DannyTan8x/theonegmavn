import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const posts = [
  {
    number: "-1",
    title:
      "MIC has issued Circular No. 04/2023 in which the new QCVN 117:2023/BTTTT.",
    linkCap:
      "Vietnam MIC releases new notice related to QCVN 117:2023/BTTTT (2024-Jan.-4) (glodacert.co)",
    link: "https://www.glodacert.co/post/vietnam-mic-releases-new-notice-related-to-qcvn-117-2023-btttt-2024-jan-4",
  },
  {
    number: "-2",
    title:
      "Vietnam enforces ITC- Safety in 2024 and MEPS in 2025 (2023-Dec.-14)",
    linkCap: "Vietnam-enforces-itc-safety-in-2024-and-meps-in-2025-2023-dec-14",
    link: "https://www.glodacert.co/post/vietnam-enforces-itc-safety-in-2024-and-meps-in-2025-2023-dec-14",
  },
  {
    number: "-3",
    title:
      "MIC has introduced Circular 20/2023/TT-BTTTT and the corresponding National Technical Regulation (QCVN 117:2023/BTTTT)",
    linkCap: "vietnam-circular-20-2023-tt-btttt",
    link: "https://www.glodacert.co/post/vietnam-circular-20-2023-tt-btttt",
  },
];

export default function Home() {
  return (
    <>
      <AnimatedSection>
        <section id="home" className="@container ">
          <div className="blue hidden md:block absolute left-0 top-0 p-16 "></div>
          <div className="container home  flex flex-col justify-center">
            <h2 className="title ">
              Product Certification <br />
              Expert
            </h2>
            <p className=" md:w-[50%]">
              We provide one-stop professional services in the field of product
              compliance, bringing your products to market in Vietnam and
              Southeast Asia.
            </p>
            <div className="absolute right-0 bottom-0 flex">
              <a className="btn " href="#featured_service">
                LEARN MORE
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <section id="featured_service" className="@container ">
          <div className="container featured_service flex flex-col md:justify-center md:block ">
            <h2 className="title-sm md:title">
              Featured service <br className="hidden lg:block" /> —— MIC ICT
              type approval certificate
            </h2>
            <div className="flex flex-dynamic lg:justify-around xl:mt-20">
              <div className="flex justify-center width-dynamic   ">
                <div className="flex justify-around flex-row-dynamic lg:gap-2 xl:gap-8">
                  <img
                    className=" object-contain h-26 md:h-28 lg:h-35"
                    src="assets/ICT.png"
                    alt="ICT with code"
                  />
                  <img
                    className="object-contain h-26 md:h-28 lg:h-35"
                    src="assets/ICT2.png"
                    alt="ICT"
                  />
                </div>
              </div>
              <div className="mt-1 text-sm  md:mt-0 flex md:flex-col md:w-2/3 lg:text-xl margin-dynamic @container ">
                <ul className="text-sm flex flex-col gap-3 md:gap-2 lg:gap-10 @md:text-sm">
                  <li className="">
                    To enter Vietnam’s market, ICT manufacturers must obtain
                    <br />
                    <span className="text-red-600 font-weight-bold">
                      -Type Approval Certificate (TAC);{" "}
                    </span>
                    and/or
                    <br />
                    <span className="text-red-600 font-weight-bold">
                      -Declaration of Conformity (DoC)
                    </span>
                  </li>
                  <li className="m-md-3">
                    TAC is issued by VNTA based on MIC regulations, while DoC is
                    required for import clearance. Certification follows
                    different systems, including factory audits and
                    shipment-based approvals.
                  </li>
                  <li className="m-md-3">
                    After TAC and DoC, products need to be put on ICT Mark (ICT
                    label) as shown on the left also.
                  </li>
                </ul>
                <div className="absolute right-0 bottom-0 flex">
                  <span className="italic text-end m-2">
                    Want to know more about the process? ➡️
                  </span>
                  <Link className="btn" href="/contact">
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <section id="equipment" className="@container ">
          <div className="container equipment flex flex-col justify-center">
            <h2 className="title-sm md:title">Equipment Required to Comply</h2>
            <div className="">
              <div className="flex flex-dynamic lg:flex-row  justify-center ">
                <ul className="list-disc  md:w-2/3">
                  <li className="">
                    Mobile phones, including feature phones and smartphones with
                    2G, 3G, 4G LTE, 5G, WLAN, and NFC.
                  </li>
                  <li className="">
                    WLAN WiFi transmitters, such as access points, routers,
                    laptops, tablets, etc.
                  </li>
                  <li className="">
                    2G, 3G, 4G LTE, and 5G NR terminals, RFID-enabled scanners,
                    and RFID readers.
                  </li>
                  <li className="">
                    Smart TVs, WiFi-enabled set-top boxes, and wireless
                    receiver-enabled translators.
                  </li>
                  <li className="">
                    And more. Get in touch with us to understand your products.
                  </li>
                </ul>
                <div className="width-dynamic margin-dynamic flex justify-center">
                  <img
                    className="object-contain h-45 md:h-58 lg:h-55"
                    src="assets/equipment.jpg"
                    alt="Equipment required"
                  />
                </div>
              </div>
              <div className="absolute left-0 bottom-0 flex">
                <a className="btn" href="#contactus">
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <section id="service" className="@container ">
          <div className="container service flex flex-col justify-center">
            <div className="flex flex-dynamic-reverse">
              <div className="flex justify-center items-center width-dynamic margin-dynamic">
                <img
                  className="object-contain h-80"
                  src="assets/services.jpg"
                  alt="Services"
                />
              </div>
              <div className="flex flex-col justify-between ">
                <h2 className="title-sm">Our Services</h2>
                <p className="w-2/3">
                  We provide one-stop professional services in the field of
                  product compliance, making product certification faster and
                  simpler.
                </p>
                <br />
                <ul className="flex flex-col gap-3">
                  <li>EMC /Safety/RF/Energy efficiency</li>
                  <li>In Country Test / MRA</li>
                  <li>Local Representative</li>
                  <li>And More.</li>
                </ul>
                <div className="absolute right-0 bottom-0 flex flex-col items-center">
                  <p>over 200 countries</p>
                  <Link className="btn " href="/servicecouintries">
                    Our service countries
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection delay={0.8}>
        <section id="news" className="@container ">
          <div className="container news flex flex-col items-center @container">
            <h2 className="title-sm">News</h2>
            <p className="italic text-sm @md:text-base @lg:text-2xl ">
              What’s New in Vietnam Certification
            </p>
            <div className="grid grid-cols-1 gap-4 flex-1 @md:grid-cols-2 @lg:grid-cols-3 overflow-y-auto overflow-hidden">
              {posts?.map((item) => (
                <div
                  key={item.number}
                  className="newsbox glassmorphism hover:border-textGolden p-3 text-sm @md:text-base @lg:text-2xl "
                >
                  <p>{item.number}</p>
                  <a href={item.link} target="_blank">
                    <ul className="text-background flex flex-col gap-5">
                      <li>{item.title}</li>
                      <li>For more details, please visit:</li>
                      <li>{item.linkCap}</li>
                    </ul>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
