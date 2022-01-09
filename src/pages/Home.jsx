import React from "react";
import Terminal from "../components/displays/Terminal";
import CardList from "../components/cards/CardList";
export default function Home() {
  return (
    <div className="page" style={{ textAlign: "center" }}>
      <p className="page-title">Simple OAuth with Node.js</p>
      <p style={{ fontSize: 20 }}>Get started.</p>
      <Terminal userData={"passport.authenticate('facebook')"} selected="All" />
      <p style={{ fontSize: 28 }}>Available Options</p>
      <CardList />
      <div style={{ marginBottom: 20 }}></div>
    </div>
  );
}
