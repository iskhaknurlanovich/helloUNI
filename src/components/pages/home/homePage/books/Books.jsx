import React from "react";
import scss from "./Books.module.scss";
import Card from "../../../../../ui/card/Card";
import img from "../../../../../assets/Rectangle 2482.svg";

const Books = () => {
  const img2 =
    "https://static.hillarys.co.uk/asset/media/17481/malin-light-grey.jpg?width=620&height=620&mode=crop&cb=00010101000000&mcb=5f884e47a7424cfe86340315ccaafed0";
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Книги</h2>
      <div className={scss.books}>
        <Card
          card="variant1"
          contain="book"
          img={img}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />

        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
        <Card
          card="variant1"
          contain="book"
          img={img2}
          title="Переговоры за минуту"
          author="Роберт Куинн"
        />
      </div>
    </div>
  );
};

export default Books;
