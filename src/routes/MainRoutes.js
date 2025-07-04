import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Main from "../components/pages/home/homePage/main/Main.jsx";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import NotFoundPage from "../components/pages/notFoundPage/NotFoundPage";
import MyCourses from "../components/pages/myCourses/MyCourses";
import Ort from "../components/pages/home/homePage/ort/Ort";
import BHT from "../components/pages/home/homePage/bht/BHT";
import BhtTest from "../components/pages/home/homePage/bht/page/bhtTest/BhtTest";
import Books from "../components/pages/home/homePage/books/Books";
import { useAuth } from "../context/AuthContext";
import Profile from "../profile/Profile";
import EditProfile from "../profile/edit/EditProfile";
import OnlineTestList from "../components/pages/home/homePage/onlineTest/OnlineTestList";
import DetailsCourse from "../components/pages/myCourses/detailsCourse/DetailsCourse";
import School from "../components/pages/home/homePage/school/School";
import SelectSchool from "../components/pages/home/homePage/school/selectschool/SelectSchool";
import Test from "../components/pages/home/homePage/onlineTest/test/Test";
import PlayGame from "../components/pages/home/homePage/play/PlayGame";

const MainRoutes = () => {
  const { user } = useAuth();
  const routes = [
    {
      link: "/",
      element: <Home />,
    },
    {
      link: "/home",
      element: <Main />,
    },
    {
      link: "/main",
      element: <Main />,
    },
    {
      link: "/register",
      element: <Register />,
    },
    {
      link: "/login",
      element: <Login />,
    },
    {
      link: "/courses",
      element: <MyCourses />,
    },
    {
      link: "/detail-course",
      element: <DetailsCourse />,
    },
    {
      link: "/ort",
      element: <Ort />,
    },
    {
      link: "/bht",
      element: <BHT />,
    },
    {
      link: "/bht-test",
      element: <BhtTest />,
    },
    {
      link: "/books",
      element: <Books />,
    },
    {
      link: "/schools",
      element: <School />,
    },
    {
      link: "/schools/select-school",
      element: <SelectSchool />,
    },
    {
      link: "/online-test",
      element: <OnlineTestList />,
    },
    {
      link: "/test",
      element: <Test />,
    },
    {
      link: "/games",
      element: <PlayGame />,
    },
    {
      link: "/profile",
      element: <Profile />,
    },
    {
      link: "/edit-profile",
      element: <EditProfile />,
    },
    {
      link: "*",
      element: <NotFoundPage />,
    },
  ];
  return (
    <Routes>
      {routes.map((item, idx) => (
        <Route key={idx} path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
