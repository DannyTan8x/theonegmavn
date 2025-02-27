import Link from "next/link";

const Service = () => {
  return (
    <section id="service-couintries">
      <div className="container service-couintries text-white">
        <h2 className="title-sm">Our Service Countries</h2>
        <div className="flex flex-dynamic">
          <div className="flex justify-center items-center margin-dynamic width-dynamic">
            <img
              className="object-contain h-50"
              src="assets/countries.jpg"
              alt="Services"
            />
          </div>
          <div className="flext text-sm ml-5 md:w-2/3 ">
            <div className="flex justify-between ">
              <ul className="list-disc">
                <strong className="fs-3">Asia</strong>
                <li>Taiwan</li>
                <li>Japan</li>
                <li>China</li>
                <li>India</li>
                <li>VIETNAM</li>
                <li>Malaysia</li>
                <li>Thailand</li>
                <li>Cambodia</li>

                <li className="whitespace-nowrap">58+ countries</li>
              </ul>
              <ul className="list-disc">
                <strong className="fs-3">Americas</strong>
                <li>United States</li>
                <li>Canada</li>
                <li>Brazil</li>
                <li>Argentina</li>

                <li className="whitespace-nowrap">24+ countries</li>
              </ul>
              <ul className="list-disc">
                <strong className="fs-3">Europe</strong>
                <li>France</li>
                <li>United Kingdom</li>
                <li>Germany</li>
                <li>Finland</li>
                <li>Spain</li>
                <li>Belgium</li>

                <li className="whitespace-nowrap">51+ countries</li>
              </ul>
            </div>
            <hr className="absolute right-0 text-black w-100"></hr>
            <p>
              And Middle-East, Oceana, Afica,{" "}
              <span className="text-danger">200+countries. </span>
            </p>
          </div>
          <div className="absolute right-0 bottom-0 flex flex-col items-center">
            <Link className="btn" href="/contact" tabIndex={-1}>
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
