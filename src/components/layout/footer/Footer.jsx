import React from "react";
import scss from "./Footer.module.scss";
import footerImage from "../../../assets/Frame 210.svg";
import footerLogo from "../../../assets/Mask group.svg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import RoomSharpIcon from "@mui/icons-material/RoomSharp";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <div id={scss.footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.footerMain}>
            <div className={scss.footerDiv}>
              <img className={scss.footerLogo} src={footerLogo} alt="" />
              <img src={footerImage} alt="" />
            </div>
            <div className={scss.footerDiv}>
              <ul>
                <li style={{ color: "white" }}>Меню</li>
                <li>О нас</li>
                <li>Категории</li>
                <li>Курсы</li>
                <li>Новости</li>
                <li>Hello Uni</li>
              </ul>
            </div>
            <div className={scss.footerDiv}>
              <ul>
                <li style={{ color: "white" }}>Наши контакты</li>
                <li>
                  <LocalPhoneIcon sx={{ color: "white" }} />
                  +996 999 060 999
                </li>
                <li>
                  <EmailIcon sx={{ color: "white" }} />
                  helloitkg@gmail.com
                </li>
                <li>
                  <RoomSharpIcon sx={{ color: "white" }} />
                  ул. Пожарского 38
                </li>
              </ul>
              <div className={scss.bottomUl}>
                <ul>
                  <li style={{ color: "white" }}>Мы в социальных сетях</li>
                </ul>
                <div className={scss.footerIcons}>
                  <FacebookSharpIcon />
                  <InstagramIcon />
                  <YouTubeIcon />
                  <TelegramIcon />
                  <WhatsAppIcon />
                </div>
              </div>
            </div>
          </div>
          <div className={scss.line}></div>
          <div className={scss.footerBottom}>
            <p>Made with by LLC HELLO IT © 2024. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
