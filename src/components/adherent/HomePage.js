import React from "react";
import { useParams } from "react-router-dom";
import Header from "../adherent/common/Header";
function HomePage(props) {
  const { userId } = useParams();
  console.log(userId, "homePage");
  return (
    <div>
      <Header userId={userId} />
      <div className="jumbotron">
        <h1>Bienvenue chez BiblioIsamm</h1>
        Voir Plus
      </div>
    </div>
  );
}

export default HomePage;
