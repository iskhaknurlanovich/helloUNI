import React, { useState } from "react";
import scss from "./EditProfile.module.scss";
import { useAuth } from "../../context/AuthContext";
import { useMainContext } from "../../context/MainContext";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const EditProfile = () => {
  const { user } = useAuth();
  const [editImage, setEditImage] = useState(false);
  return (
    <div className={scss.edit}>
      <div className="container">
        <div className={scss.editMain}>
          <div className={scss.profileImage}>
            <img
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://cdn-icons-png.flaticon.com/512/8105/8105555.png"
              }
              alt=""
            />
            <Button
              onClick={() => setEditImage(true)}
              contain="variant2"
              w="100px"
              p="3px 5px"
              text="Изменить"
            />
            {editImage ? (
              <div className={scss.modal}>
                <div className={scss.modalMain}>
                  <h3>URL для фото профиля</h3>
                  <Input
                    className={scss.modalInput}
                    type="text"
                    onChange={(e) =>
                      user
                        ? updateProfile(user, { photoURL: e.target.value })
                        : ""
                    }
                    input="input"
                  />
                  <button
                    onClick={() => {
                      if (user) {
                        updateProfile(user, {
                          photoURL:
                            "https://cdn-icons-png.flaticon.com/512/8105/8105555.png",
                        }).then(() => setEditImage(false));
                      }
                    }}
                  >
                    delete
                  </button>
                  <button
                    style={{
                      alignSelf: "flex-end",
                      padding: "5px",
                    }}
                    onClick={() => setEditImage(false)}
                  >
                    close
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={scss.input}>
            <p>Имя</p>
            <Input
              input="input"
              placeholder="Введите имя"
              onChange={(e) =>
                user ? updateProfile(user, { displayName: e.target.value }) : ""
              }
            />
          </div>
          <div className={scss.input}>
            <p>Номер телефона</p>
            <Input input="input" placeholder="Введите номер телефона" />
          </div>
          <div className={scss.input}>
            <p>Город</p>
            <Input input="input" placeholder="Введите город" />
          </div>
          <div className={scss.input}>
            <p>Школа</p>
            <Input input="input" placeholder="Введите школу" />
          </div>
          <Link to="/profile" style={{ width: "100%" }}>
            <Button text="Готово" contain="variant1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
