import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function MainContainer() {
  let url = "https://minga-back-vyqy.onrender.com/categories";
  let [categories, setCategories] = useState([]);

  function getData() {
    axios(url)
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }
  console.log(categories);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-center gap-12 flex-wrap p-10 min-h-screen  ">
      {categories.map((info) => (
        <Card
          key={info._id}
          text={info.name}
          description={info.description}
          img={info.cover_photo}
        />
      ))}
    </div>
  );
}
