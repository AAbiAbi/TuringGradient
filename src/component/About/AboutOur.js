import * as React from "react";


const AboutOur  = () => {
    return (
        <div id="AboutUsRoot" className="AboutUsRoot">
          {/* Title section */}
          <div id="Title" className="Title">
            Our  
            
            <span className="Highlight">Journey</span>
          </div>
    
          {/* Content sections */}
          {/* ... Similar structure for each content section */}
          
          {/* Example for one section */}
          <div className="ContentSection1">
            <div className="ContentText">
              
              <p className="ContentParagraph">
              Founded by a team of AI enthusiasts and financial experts, Turingradient  was born out of the vision to bridge the gap between artificial  intelligence and the financial industry. We recognized the potential of  AI to revolutionize financial analysis, decision-making, and strategy  optimization.   </p>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/86c02e50d661cade83b8d1f69f7949159d75c1fdd36dbdae4d28c4ba8fcd4914?apiKey=ce9f1772788049bbaa17db58c8666c79&"
              alt="Journey"
              className="ContentImage"
            />
          </div>

          <div id="Title" className="Title">
            Our  <span className="Highlight">Mission</span>
          </div>

          <div className="ContentSection">
            <div className="ContentText">
              
              <p className="ContentParagraph">
              To empower financial institutions, hedge funds, and investment  professionals with advanced AI-driven tools, enhancing decision-making,  optimizing strategies, and uncovering deep insights from vast financial  data landscapes.
              </p>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1808b57901fee7e67447a4ee4af08c4a3af434d07543ca9888331aa96bc3be?apiKey=ce9f1772788049bbaa17db58c8666c79&"
              alt="Mission"
              className="ContentImage"
            />
          </div>

          <div id="Title" className="Title">
            Our  <span className="Highlight">Vision</span>
          </div>
          
          {/* ... Other sections would follow a similar pattern */}

          <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem', // This will not work in standard inline styles
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem', /* Converted from 'gap-8' */
                // maxWidth: '90%',
            }}>
              
              <p className="ContentParagraph">
              To be at the forefront of AI innovation in the financial sector,  transforming how financial data is analyzed and utilized, and helping  our clients navigate the complexities of the market with confidence and  foresight              </p>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/21c698c36a7ae8d4b378b3cca63f932f7d9d0be6db9ab766b6d5f385b1af5588?apiKey=ce9f1772788049bbaa17db58c8666c79&"
              alt="Vision"
              className="ContentImage"
            />
          </div>

          
          
        </div>
      );
};



export default AboutOur;