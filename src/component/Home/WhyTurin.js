

import '../../css/WhyTurin.css';

const WhyTurin = () => {
    return (
        <div id="AboutUsRoot" className="AboutUsRoot">
          {/* Title section */}
          <div id="Title" className="Title">
            Why <span className="Highlight">TurinGradient</span>
          </div>
    
          {/* Content sections */}
          {/* ... Similar structure for each content section */}
          
          {/* Example for one section */}
          <div className="ContentSection">
            <div className="ContentText">
              <h2 className="ContentHeading">
                Delivering a clear view in a complex world.
              </h2>
              <p className="ContentParagraph">
                <span className="Highlight">TurinGradient’s </span>
                products give decision makers access to a network of information, people
                and ideas — all built on cutting-edge technology and best-in-class data.
              </p>
            </div>
            <img
              src="https://file.rendit.io/n/zvB72GGGgY7ChIeFgxh3.png"
              alt="Global network"
              className="ContentImage"
            />
          </div>

          <div className="ContentSection1">
            <div className="ContentText">
              <h2 className="ContentHeading">
              Adapt to Evolving Markets Quickly.
              </h2>
              <p className="ContentParagraph">
                Staying ahead of fast-moving markets requires buy-side firms to sustain incredible agility.
                <span className="Highlight">TurinGradient’s </span>
                helps you do exactly that.
              </p>
            </div>
            <img
              src="https://file.rendit.io/n/bZGQ35UxOcf0MM7d3lqu.png"
              alt="Market adaptation"
              className="ContentImage"
            />
          </div>
          
          {/* ... Other sections would follow a similar pattern */}

          <div className="ContentSection">
            <div className="ContentText">
              <h2 className="ContentHeading">
                Make smarter decisions faster
              </h2>
              <p className="ContentParagraph">
                Make smarter decisions faster with the world’s best financial data.
                <span className="Highlight">TurinGradient’s </span>
                provides top-quality financial data that seamlessly integrates into the tools your firm uses to make critical decisions.
              </p>
            </div>
            <img
              src="https://file.rendit.io/n/tbUEGzVsR82GFrfo8c3k.png"
              alt="Data integration"
              className="ContentImage"
            />
          </div>


            <div className="ContentSection1">
            <div className="ContentText">
              <h2 className="ContentHeading">
              Create innovative, tailored financial markets
              </h2>
              <p className="ContentParagraph">
              In today’s rapidly evolving markets, where change is the only constant and uncertainty abounds like never before. Financial institutions need a technology partner that can help them thrive in the new era of more responsive, personalized digital wealth management.              </p>
            </div>
            <img
              src="https://file.rendit.io/n/t2YQRg03JGbNWq8uc3VS.png"
              alt="Financial innovation"
              className="ContentImage"
            />
          </div>
          
        </div>
      );
};

export default WhyTurin;