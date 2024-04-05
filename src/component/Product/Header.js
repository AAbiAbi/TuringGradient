import * as React from "react";
import '../../css/ProductsHeader.css';



function Header() {
  return (
    
      <main className="main-container">
        <section className="hero-section">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/391bab79b352af5b130c5e68ebfd20c9574ef31484f0a1142765d47d566ba47c?apiKey=ce9f1772788049bbaa17db58c8666c79&" alt="" className="background-image" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d62978e7701ce8f615fc1cf6c282de6c8a5378fe593618564b0740e84819839?apiKey=ce9f1772788049bbaa17db58c8666c79&" alt="TuringProducts logo" className="logo-image" />
          <h1 className="Productssubtitle">Transform Your Financial Strategy with AI</h1>
          <h2 className="ProductsTitle">TuringProducts</h2>
          <p className="Productsdescription">AI-Driven Financial Tools</p>
        </section>
      </main>
      
  );
}

export default Header;