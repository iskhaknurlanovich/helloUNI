import React from "react";
import scss from "./Profile.module.scss";
import { useAuth } from "../context/AuthContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../ui/button/Button";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  return user ? (
    <div className={scss.profile}>
      <div className="container">
        <div className={scss.profileMain}>
          <img
            src={
              user.photoURL
                ? user.photoURL
                : "https://cdn-icons-png.flaticon.com/512/8105/8105555.png"
            }
            alt=""
          />
          <div className={scss.profileInfo}>
            <h2>{user.displayName ? user.displayName : "Имя пользователя"}</h2>
            <p>{user.email}</p>
            <Link to="/edit-profile">
              <Button
                text="Редактировать"
                contain="variant2"
                p="5px 10px"
                w="160px"
              />
            </Link>
          </div>
        </div>
        <div className={scss.tabs}>
          <div className={scss.select}>
            <h4>
              <FavoriteIcon />
              Избранное
            </h4>
            <ArrowForwardIosIcon />
          </div>
          <div className={scss.select}>
            <h4>
              <NotificationsIcon />
              Уведомления
            </h4>
            <ArrowForwardIosIcon />
          </div>
          <div className={scss.select} onClick={() => logout()}>
            <h4>
              <DeleteIcon />
              Удалить аккаунт
            </h4>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h3 style={{ padding: "30px" }}>Вы не зарегистрировались</h3>
  );
};

export default Profile;
