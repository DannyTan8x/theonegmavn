"use client";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import AnimatedSection from "@/components/AnimatedSection";

export default function Contact() {
  return (
    <AnimatedSection delay={0.1}>
      <section id="contactus">
        <div className="container contactus">
          <h2 className="title-sm">Contact Us</h2>
          <div className="flex flex-dynamic">
            <ul className="fontGold">
              <li>
                <LocationOnIcon className="text-textGolden" />:
                <span className="text-foreground">
                  V3-37 Vinhomes Grand Park, 512 Nguyễn Xiển, Phường Long Bình,
                  Thành Phố Thủ Đức
                </span>
              </li>
              <li>
                <LocalPhoneIcon className="text-textGolden" />:
                <span className="text-foreground">0369-614-293</span>
              </li>
              <li className="flex">
                <EmailIcon className="text-textGolden" />:
                <span className="text-foreground ">
                  <p>sofia.trang@theone-gma.vn / service@theone-gma.vn</p>
                </span>
              </li>
              <li className="flex gap-5">
                <div className="flex flex-column">
                  <img
                    src="assets/zaloicon.jpg"
                    alt="Zalo"
                    className="object-contain h-5"
                  />
                  :
                  <img
                    src="assets/Zalo.png"
                    alt="Zalo"
                    className="object-contain h-15"
                  />
                </div>
                <div className="flex flex-column">
                  <img
                    src="assets/lineicon.png"
                    alt="lineicon"
                    className="object-contain h-5"
                  />
                  :
                  <img
                    src="assets/Line.jpg"
                    alt="Line"
                    className="object-contain h-15"
                  />
                </div>
                <div className="flex flex-column">
                  <img
                    src="assets/wechaticon.png"
                    alt="wechaticon"
                    className="object-contain h-5"
                  />
                  :
                  <img
                    src="assets/Wechat.png"
                    alt="Wechat"
                    className="object-contain h-15"
                  />
                </div>
              </li>
              <li>
                <span>Follow us online</span>
                <div className="flex gap-2  ">
                  <img
                    src="assets/facebook.svg"
                    alt="facebook"
                    className="object-contain h-10"
                  />
                  <img
                    src="assets/linkedin.svg"
                    alt="linkedin"
                    className="object-contain h-10"
                  />
                </div>
              </li>
            </ul>
            <div className="flex items-center justify-center widh-dynamic margin-dynamic">
              <a
                href="https://maps.app.goo.gl/KdrM4bfd48fNoKPL7"
                className="map"
                target="_blank"
              >
                {" "}
                <img
                  src="assets/map.png"
                  alt="map"
                  className="object-contain w-100"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
