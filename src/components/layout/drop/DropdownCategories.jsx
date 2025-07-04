import React, { useState } from "react";
import scss from "./DropdownCategories.module.scss";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import RuleIcon from "@mui/icons-material/Rule";
import CreateIcon from "@mui/icons-material/Create";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { Link } from "react-router-dom";
import { useMainContext } from "../../../context/MainContext";

const DropdownCategories = () => {
  const { dropModal, setDropModal } = useMainContext();
  return (
    <div className={scss.mainDropdown} onMouseOver={() => setDropModal(true)}>
      <p className={scss.p}>Категории</p>
      {dropModal ? (
        <div className={scss.list}>
          <Link to="/courses">
            <div className={scss.item}>
              <LibraryBooksIcon />
              <p>Мои курсы</p>
            </div>
          </Link>
          <Link to="/ort">
            <div className={scss.item}>
              <RuleIcon />
              <p>ОРТ</p>
            </div>
          </Link>
          <Link to="/bht">
            <div className={scss.item}>
              <CreateIcon />
              <p>БЧТ</p>
            </div>
          </Link>
          <Link to="/books">
            <div className={scss.item}>
              <AutoStoriesIcon />
              <p>Книги</p>
            </div>
          </Link>
          <Link to="/schools">
            <div className={scss.item}>
              <SchoolIcon />
              <p>Школы</p>
            </div>
          </Link>
          <Link to="/online-test">
            <div className={scss.item}>
              <PlayLessonIcon />
              <p>Онлайн тест</p>
            </div>
          </Link>
          <Link to="/games">
            <div className={scss.item}>
              <PsychologyIcon />
              <p>Битва умов</p>
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DropdownCategories;
