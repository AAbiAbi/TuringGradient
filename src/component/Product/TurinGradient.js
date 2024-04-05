import * as React from "react";
import '../../css/TurinGradient.css';

const TurinGradient  = () => {
    return (

        
        <div id="AboutUsRoot" className="AboutUsRoot">
            <div id="prefix" className="prefix" >
                At <span className="Highlight">TurinGradient</span>, we blend cutting-edge AI with deep financial expertise to offer unparalleled solutions. Our products are designed to empower financial institutions, hedge funds, and investment professionals, providing them with the insights and automation they need to excel in today's market.
            </div>
                      
            {/* Title section */}
          <div id="Title" className="Title">
            <span className="Highlight">TuringTitan</span>
          </div>
    
          {/* Content sections */}
          {/* ... Similar structure for each content section */}
          
          {/* Example for one section */}
          <div className="ContentSection1">
            <div className="ContentText">
              <h2 className="ContentHeading">
              The bedrock of our product suite, TuringTitan is a Large Language Model (LLM) trained on an extensive array of financial data. It delivers deep understanding and insights into the financial world, serving as the core intelligence for our specialized tools.
              </h2>
              <h2 className="ContentHeading">
              Deep Financial Domain Knowledge
              </h2>
              <h2 className="ContentHeading">
              Foundation For Specialized AI Tools
              </h2>
              <h2 className="ContentHeading">
              Real-Time Data Processing
              </h2>

              
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7e3a88c1a9074c8742d67db44a31352a83ec6c2a006b3535ed9eb58317086d8?placeholderIfAbsent=true"
              alt="TuringTitan"
              className="ContentImage"
            />
          </div>

          <div id="Title" className="Title">
            <span className="Highlight">TuringRadar</span>
          </div>

          <div className="ContentSection">
            <div className="ContentText">
              <h2 className="ContentHeading">
              Built on TuringTitan's intelligence, TuringRadar offers advanced analytics capabilities, transforming how financial data is analyzed and visualized. It provides real-time insights, trend predictions, and in-depth visualizations.
              </h2>
              <h2 className="ContentHeading">
              Real-Time Analytics And Insights
              </h2>
              <h2 className="ContentHeading">
              Advanced Trend Prediction
              </h2>
              <h2 className="ContentHeading">
              Comprehensive Data Exploration Platform
              </h2>


              
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd795bb91bf16723591003c198ceeda5d80bc705e773bbeea81491abde18e2bc?placeholderIfAbsent=true"
              alt="TuringRadar"
              className="ContentImage"
            />
          </div>
          
          {/* ... Other sections would follow a similar pattern */}

          <div id="Title" className="Title">
            <span className="Highlight">TuringTrading</span>
          </div>



          <div className="ContentSection1">
            <div className="ContentText">
              <h2 className="ContentHeading">
              Integrating TuringTitan's intelligence and advanced AI techniques, TuringTrading is an autonomous trading system that redefines algorithmic trading. It leverages market data and financial news to execute strategic trades.
              </h2>
              <h2 className="ContentHeading">
              Autonomous Trading System
              </h2>
              <h2 className="ContentHeading">
              Strategic Investment Alignment
              </h2>
              <h2 className="ContentHeading">
              Market Data Synthesis
              </h2>
              
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfd2dcfbe4b971378567a307c0d42a2ab89462bf4a93e63b19e2c21a218caa5e?placeholderIfAbsent=true"
              alt="TuringTrading"
              className="ContentImage"
            />
          </div>

          <div id="Title" className="Title">
            <span className="Highlight">TuringCrystal</span>
          </div>


            <div className="ContentSection">
            <div className="ContentText">
              <h2 className="ContentHeading">
              TuringCrystal specializes in mining insights from financial documents. Leveraging TuringTitan, it provides a deep understanding of textual content, highlighting actionable insights and key information.
              </h2>
              <h2 className="ContentHeading">
              Financial Text Analysis
              </h2>
              <h2 className="ContentHeading">
              Actionable Insights Extraction
              </h2>
              <h2 className="ContentHeading">
              Strategic Decision-Making Support
              </h2>
              </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7d73fc6f84facd69effa342dbc04a6014559210b29e6590ad7503a51e48f06d?placeholderIfAbsent=true"
              alt="TuringCrystal"
              className="ContentImage"
            />
          </div>
          
        </div>
      );
};

export default TurinGradient;