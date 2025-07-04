import React, { useState } from "react";
import scss from "./Header.module.scss";
import imgLogo from "../../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import Button from "../../../ui/button/Button";
import { useMainContext } from "../../../context/MainContext";
import DropdownCategories from "../drop/DropdownCategories";
import { useAuth } from "../../../context/AuthContext";

const language = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
];

const Header = () => {
  const { setBoolHeader, setDropModal } = useMainContext();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showLangModal, setShowLangModal] = useState(false);
  const [selectedLang, setSelectedLang] = useState(language[0].code);

  const handleLangSelect = (code) => {
    setSelectedLang(code);
    setShowLangModal(false);
  };

  return (
    <div className={scss.header}>
      <div className="container">
        <div className={scss.headerMain}>
          <div className={scss.logo}>
            <Link to="/">
              <img
                onClick={() => setBoolHeader(false)}
                src={imgLogo}
                alt="Logo"
              />
            </Link>
          </div>

          <nav onMouseLeave={() => setDropModal(false)}>
            <DropdownCategories />
            <Link to="/courses">
              <p>Курсы</p>
            </Link>
            <Link to="/">
              <p>Новости</p>
            </Link>
            <Link to="/">
              <p>Hello Uni</p>
            </Link>
          </nav>
          <div className={scss.headerBtns}>
            {!user ? (
              <Button
                onClick={() => navigate("/login")}
                text="Войти"
                contain="variant1"
              />
            ) : (
              <Link to="/profile">
                <div className={scss.profile}>
                  <img
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://cdn-icons-png.flaticon.com/512/8105/8105555.png"
                    }
                    alt=""
                  />
                </div>
              </Link>
            )}
            <div style={{ position: "relative" }}>
              <LanguageIcon
                sx={{ fontSize: "35px", cursor: "pointer" }}
                onClick={() => setShowLangModal((prev) => !prev)}
              />
              {showLangModal && (
                <div className={scss.langModal}>
                  <div className={scss.langTitle}>Выберите язык</div>
                  <ul>
                    {language.map((lang) => (
                      <li
                        key={lang.code}
                        className={
                          selectedLang === lang.code ? scss.selectedLang : ""
                        }
                        onClick={() => handleLangSelect(lang.code)}
                      >
                        {lang.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div
            className={scss.burgerMenu}
            onMouseOver={() => setShowModal(true)}
            onMouseLeave={() => setShowModal(false)}
          >
            <span></span>
            <span></span>
            <span></span>
            {showModal && (
              <div
                className={scss.burgerMenuModal}
                onMouseLeave={() => setDropModal(false)}
              >
                <nav>
                  <DropdownCategories />
                  <Link to="/courses">
                    <p>Курсы</p>
                  </Link>
                  <Link to="/">
                    <p>Новости</p>
                  </Link>
                  <Link to="/">
                    <p>Hello Uni</p>
                  </Link>
                </nav>
                <div className={scss.headerBtns}>
                  {!user ? (
                    <Button
                      onClick={() => navigate("/login")}
                      text="Войти"
                      contain="variant1"
                    />
                  ) : (
                    <Link to="/profile">
                      <div className={scss.profile}>
                        <img
                          src={
                            user.photoURL
                              ? user.photoURL
                              : "https://cdn-icons-png.flaticon.com/512/8105/8105555.png"
                          }
                          alt=""
                        />
                      </div>
                    </Link>
                  )}
                  <div style={{ position: "relative" }}>
                    <LanguageIcon
                      sx={{ fontSize: "35px", cursor: "pointer" }}
                      onClick={() => setShowLangModal((prev) => !prev)}
                    />
                    {showLangModal && (
                      <div className={scss.langModal}>
                        <div className={scss.langTitle}>Выберите язык</div>
                        <ul>
                          {language.map((lang) => (
                            <li
                              key={lang.code}
                              className={
                                selectedLang === lang.code
                                  ? scss.selectedLang
                                  : ""
                              }
                              onClick={() => handleLangSelect(lang.code)}
                            >
                              {lang.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
