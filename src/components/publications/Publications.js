import React, { useState } from "react";
import Technical from "./technical/Technical";
import NonTechnical from "./nontechnical/NonTechnical";
import "./Publications.css";

function Publications() {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <div>
      <h1>Publications</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "technical" ? "active" : ""}`}
          onClick={() => setActiveTab("technical")}
        >
          Technical
        </button>
        <button
          className={`tab-button ${
            activeTab === "non-technical" ? "active" : ""
          }`}
          onClick={() => setActiveTab("non-technical")}
        >
          Non-Technical
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "technical" && <Technical />}
        {activeTab === "non-technical" && <NonTechnical />}
      </div>
    </div>
  );
}

export default Publications;
