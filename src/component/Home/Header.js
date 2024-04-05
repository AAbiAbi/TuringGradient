
import { useNavigate } from "react-router-dom";
import "../../css/Header.css";



const Header = () => {
  // Hook for navigation
  const navigate = useNavigate();
  // Function to handle click event
  const handleLearnMoreClick = () => {
    navigate("/products");
  };
  return (
    <main className="main-container">
      <div id="HeaderRoot" className="HeaderRoot">
      <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/391bab79b352af5b130c5e68ebfd20c9574ef31484f0a1142765d47d566ba47c?apiKey=ce9f1772788049bbaa17db58c8666c79&"
          alt=""
          style={{
            position: "absolute",
            inset: " 0",
            height: "165%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: "0",
          }}
        />
        <h1 id="ProductsTitle" className="ProductsTitle">
          TuringGradient
        </h1>
        <p className="H1Span">Advanced Financial AI Solutions</p>

        <p id="Body" className="Body">
          Revolutionize your approach to financial decisions and strategy
          optimization with our cutting-edge AI-driven solutions, tailored for
          the financial industry.
        </p>
        <button id="Btnsubscribe" className="Btnsubscribe" onClick={handleLearnMoreClick}>
          Learn More
        </button>
        {/* ... rest of your component */}
        <div className="trustedSection">
          <h3 className="trustedHeading">
            Trusted by the world’s top financial institutions
          </h3>

          <div className="trustedLogos">
            <img
              src="https://file.rendit.io/n/eq6Dzi7JNHSm6ezEd6Wl.svg"
              alt="Group"
              className="logoImage1"
            />
            <img
              src="https://file.rendit.io/n/Ibhytv6a3AjEd2cH6HIu.svg"
              alt="Group1"
              className="logoImage"
            />
            <img
              src="https://file.rendit.io/n/9VyenZGxSMxiVzyVBkeb.svg"
              alt="Bridgewater Logo"
              className="h-12"
            />
            <img
              src="https://file.rendit.io/n/bSBcZLhMOcCw40sI76eD.svg"
              alt="Two Sigma Logo"
              className="h-12"
            />
            <img
              src="https://file.rendit.io/n/s16MKXGetpXJkrio0diw.svg"
              alt="Group2"
              className="h-12"
            />
            <img
              src="https://file.rendit.io/n/VJMm30EFZx38gZEwI2IE.svg"
              alt="Vector"
              className="h-12"
            />
            {/* ... more images */}
          </div>
        </div>
        
      </div>
    </main>
  );
};

export default Header;
