import react from 'react';

import '../../css/AboutUs.css';

const AboutUs = () => {
    return (
        <div id="AboutUsRoot" className="AboutUsRoot">
          <div id="Title" className="Title">
            About <span className="Highlight">TurinGradient</span>
          </div>
          <div className="StatsSection">
            <div className="StatsBlock">
              <div className="StatsTitle">Financial Institution Partners</div>
              <div className="StatsNumber">50+</div>
            </div>
            <div className="StatsBlock">
              <div className="StatsTitle">Real Time Trading Strategies</div>
              <div className="StatsNumber">510+</div>
            </div>
            <div className="StatsBlock">
              <div className="StatsTitle">Winning Strategies Rate</div>
              <div className="StatsNumber">89%</div>
            </div>
          </div>
          <div className="AboutDescription">
            At <span className="Highlight">TurinGradient</span>, we harness the most advanced AI techniques to develop Large
            Language Models (LLMs) and applications specifically tailored for the financial sector.
            <br /><br />
            Our mission is to empower financial institutions, hedge funds, and investment professionals with AI-driven tools that enhance decision-making, optimize strategies, and uncover insights from vast financial data landscapes.
          </div>
          <div className="ServiceSection">
            <div className="ServiceBlock">
              <img src="https://file.rendit.io/n/6txldtZgoRrJUPFpgpF7.svg" alt="Icon" className="ServiceIcon" />
              <div>Pioneering AI in Finance</div>
              <div className="ServiceDescription">TurinGradient leads in merging AI with finance, developing specialized Large Language Models (LLMs) for financial insights</div>
            </div>
            <div className="ServiceBlock">
              <img src="https://file.rendit.io/n/6txldtZgoRrJUPFpgpF7.svg" alt="Icon" className="ServiceIcon" />
              <div>Strategic Decision-Making</div>
              <div className="ServiceDescription">TurinGradient equips financial professionals with AI tools for actionable insights and automated decisions, positioning itself as a strategic partner for financial market complexities with confidence.</div>
            </div>
            <div className="ServiceBlock">
              <img src="https://file.rendit.io/n/6txldtZgoRrJUPFpgpF7.svg" alt="Icon" className="ServiceIcon" />
              <div>Tailored Financial Intelligence</div>
              <div className="ServiceDescription">TurinGradient's TuringTitan offers unmatched financial intelligence, trained on vast data to deeply understand and predict market trends, giving clients a unique competitive advantage.</div>
            </div>
          </div>
        </div>
      );
};

export default AboutUs;