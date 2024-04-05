import  { useState } from "react";

import "../../css/OurProduct.css";

const DropdownNavItem = ({ product, isActive, onClick }) => {
  return (
    <div className="nav-item">
      <button className={`drop-button ${isActive ? 'active' : ''}`} onClick={onClick}>
        0{product.id}
        {product.title}
      </button>
      {isActive && (
        <div className="dropdown-content">
          <img src={product.imageUrl} alt={product.subTitle} className="product-image" />
          <div className="product-details">
            <h3>{product.title}</h3>
            <p>{product.details}</p>
            <button className="learnMoreBtn">Learn More</button>
          </div>
        </div>
      )}
    </div>
  );
};

const OurProduct = () => {
  // Assuming you have an array of product data
  const products = [
    {
      id: 1,
      imageUrl: "https://file.rendit.io/n/NpfT7nCGo9Sjq2Jh1Efo.png",
      title: "TuringTitan",
      subTitle: "LLM for the financial Market",
      details:
        "At the heart of our product suite is TuringTitan, a foundational LLM developed specifically for the financial domain. TuringTitan is not just a model; it’s an ecosystem of financial intelligence, trained on a diverse and extensive set of financial data.",
    },

    // ... your product objects
    {
      id: 2,
      imageUrl: "../../assest/2.png",
      title: "TuringRadar",
      subTitle: "Data Analysis for  Financial Market",
      details:
        "TuringRadar is an advanced analytics application designed to transform the way financial data is analyzed and visualized. This tool offering real-time insights, trend predictions, and in-depth visualizations that help financial professionals make informed decisions quickly and efficiently. ",
    },
    {
      id: 3,
      imageUrl: "https://file.rendit.io/n/NpfT7nCGo9Sjq2Jh1Efo.png",
      title: "TuringTrading",
      subTitle: "Autonomous trading system",
      details:
        "TuringTrading is an autonomous trading system that redefines algorithmic trading. This product synthesizes vast arrays of market data, economic indicators, and financial news to execute trades that align with strategic investment goals. ",
    },
    {
      id: 4,
      imageUrl: "https://file.rendit.io/n/NpfT7nCGo9Sjq2Jh1Efo.png",
      title: "TuringCrystal",
      subTitle: "Real Time Trading Strategy",
      details:
        "TuringCrystal is another application that leverages the fine-tuned capabilities of TuringTitan. This tool is designed to mine insights from a myriad of financial documents, including reports, filings, and news articles. ",
    },
  ];

  const baseSpacing = 100;

  const [activeIndex, setActiveIndex] = useState(-1);





  const handleDropdownClick = (index) => {
    // Toggle the active index on click, closing if the same index is clicked again
    setActiveIndex(activeIndex === index ? -1 : index);
  };


  return (
    <div id="AboutUsRoot" className="AboutUsRoot">
      <div className="contentWrapper">
        <div id="Title" className="Title">
          Our <span className="highlight">Products</span>
        </div>
        <div className="OurProductsdescription">
          Welcome to <span className="highlight">TurinGradient</span>, where
          innovation meets finance through the power of artificial intelligence.
        </div>
      </div>
      <div className="sliderContainer">
        <nav className="navigationBar">
          {products.map((product, index) => (
            <DropdownNavItem
              key={product.id}
              product={product}
              isActive={index === activeIndex}
              onClick={() => handleDropdownClick(index)}
            />
          ))}
        </nav>
      </div>
      
    </div>
  );
};

export default OurProduct;
