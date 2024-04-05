import * as React from "react";
import '../../css/Financial.css';

const Financial = () => {

    function FinancialMetric({ label, value }) {
        return (
          <div className="financial-metric">
            <div className="financial-metric-label">{label}</div>
            <div className="financial-metric-value">{value}</div>
          </div>
        );
      }

      const financialMetrics = [
        {
          id: 1,
          label: "Financial Institution Partners",
          value: "50+",
        },
        {
          id: 2,
          label: "Real Time Trading Strategies",
          value: "510+",
        },
        {
          id: 3,
          label: "Winning Strategies Rate",
          value: "89/",
        },
      ];
      
    return (
        <div className="main-container">
        <section id="AboutUsRoot" className="AboutUsRoot">
          <h1 id="prefix" className="prefix">
            <span className="Highlight">TurinGradient</span> was born out of
            the vision to bridge the gap between artificial intelligence and
            the financial industry.{" "}
          </h1>
        </section>
        <section className="banner-section">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/086b2613095c8fbd7a0ce50107d51a4625ffff99aa96d7389257e896681fe0c7?apiKey=ce9f1772788049bbaa17db58c8666c79&"
            alt="TuringGradient banner"
            className="banner-image"
          />
          <h2 className="banner-title">
            <span className="Highlight">TuringGradient</span>
            <br />
            Innovation and Excellence
          </h2>
        </section>
        <section className="metrics-section">
          <div className="metrics-container">
            {financialMetrics.map((metric) => (
              <FinancialMetric
                key={metric.id}
                label={metric.label}
                value={metric.value}
              />
            ))}
          </div>
        </section>
        <section className="mission-section">
          <p className="mission-text">
            <span>
              {" "}
              At <span className="Highlight"> TurinGradient </span>, we
              harness the most advanced AI techniques to develop Large Language
              Models (LLMs) and applications specifically tailored for the
              financial sector.{" "}
            </span>
            <br />
            <br />
            <span>
              {" "}
              Our mission is to empower financial institutions, hedge funds, and
              investment professionals with AI-driven tools that enhance
              decision-making, optimize strategies, and uncover insights from
              vast financial data landscapes.{" "}
            </span>
          </p>
        </section>
      </div>
        
    );
    

};

export default Financial