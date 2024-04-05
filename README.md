# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


import * as React from "react"; 

function ProductCard({ title, description, imageUrl, imageAlt, index, }) 

{ 
    return ( <div className={`product-card product-card-${index}`}> <img src={imageUrl} alt={imageAlt} className="product-image" /> <div className="product-details"> <div className="product-index"> <div className="index-number">{index}</div> <div className="index-label">{title}</div> </div> <h3 className="product-name">{title}</h3> </div> <div className="product-description"> <p>{description}</p> <button className="learn-more-button">Learn More</button> </div> </div> ); } 
    
    const products = [ { title: "LLM for the financial Market", description: "At the heart of our product suite is TuringTitan, a foundational LLM developed specifically for the financial domain. TuringTitan is not just a model; it's an ecosystem of financial intelligence, trained on a diverse and extensive set of financial data.", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b74c89be24b8dac72a3dc8fe000589e4ea3ce829ddef2856c863ac666d46ae98?apiKey=ce9f1772788049bbaa17db58c8666c79&", imageAlt: "LLM for the financial Market", }, { title: "Product 2", description: "Product 2 description", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac23dd7a288ef14e6b0e54005a8fc0315c145cf92e294315c2d5e13878c90d52?apiKey=ce9f1772788049bbaa17db58c8666c79&", imageAlt: "Product 2", }, { title: "Product 3", description: "Product 3 description", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac23dd7a288ef14e6b0e54005a8fc0315c145cf92e294315c2d5e13878c90d52?apiKey=ce9f1772788049bbaa17db58c8666c79&", imageAlt: "Product 3", }, { title: "Product 4", description: "Product 4 description", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac23dd7a288ef14e6b0e54005a8fc0315c145cf92e294315c2d5e13878c90d52?apiKey=ce9f1772788049bbaa17db58c8666c79&", imageAlt: "Product 4", }, ]; function ProductsSection() { return ( <section className="products-section"> <header className="section-header"> <h2 className="section-title"> Our <span className="highlight">Products</span> </h2> </header> <div className="section-description"> <p> Welcome to <span className="highlight">TurinGradient</span>, where innovation meets finance through the power of artificial intelligence. </p> </div> <div className="products-grid"> {products.map((product, index) => ( <ProductCard key={index} {...product} index={index + 1} /> ))} </div> </section> ); } function MyComponent() { return ( <> <main className="main-content"> <ProductsSection /> </main> <style jsx>{` .main-content { background-color: var(--black, #000); display: flex; flex-direction: column; padding: 80px 0 80px 80px; } @media (max-width: 991px) { .main-content { padding-left: 20px; } } .products-section { display: flex; flex-direction: column; gap: 60px; } .section-header { display: flex; justify-content: space-between; margin-top: 40px; } @media (max-width: 991px) { .section-header { max-width: 100%; } } .section-title { align-items: start; border-left: 4px solid rgba(0, 255, 255, 1); color: var(--primary-color, #0ff); letter-spacing: -2px; padding: 8px 60px; font: 500 56px/90% Inter, sans-serif; } @media (max-width: 991px) { .section-title { max-width: 100%; font-size: 40px; margin-top: 40px; } } .highlight { color: rgba(0, 255, 255, 1); } .section-description { color: var(--primary-color, #0ff); text-transform: capitalize; font: 400 24px/38px Inter, -apple-system, Roboto, Helvetica, sans-serif; } @media (max-width: 991px) { .section-description { max-width: 100%; margin-top: 40px; } } .products-grid { display: flex; gap: 0px; font-weight: 400; } @media (max-width: 991px) { .products-grid { flex-wrap: wrap; margin-top: 40px; } } .product-card { display: flex; flex-direction: column; justify-content: center; } @media (max-width: 991px) { .product-card { max-width: 100%; } } .product-card-0 { overflow: hidden; border: 1px solid rgba(78, 78, 78, 1); position: relative; min-height: 645px; width: 100%; padding-top: 80px; } @media (max-width: 991px) { .product-card-0 { max-width: 100%; } } .product-image { position: absolute; inset: 0; height: 100%; width: 100%; object-fit: cover; object-position: center; } .product-details { position: relative; display: flex; margin-top: 187px; flex-direction: column; color: var(--white, #fff); padding: 0 48px; } @media (max-width: 991px) { .product-details { max-width: 100%; margin-top: 40px; padding: 0 20px; } } .product-index { display: flex; justify-content: center; gap: 20px; } @media (max-width: 991px) { .product-index { flex-wrap: wrap; } } .index-number { font: 24px/150% Michroma, sans-serif; } .index-label { margin: auto 0; font: 18px/160% Michroma, sans-serif; } @media (max-width: 991px) { .index-label { max-width: 100%; } } .product-name { letter-spacing: -0.8px; font: 40px/120% Michroma, sans-serif; } @media (max-width: 991px) { .product-name { max-width: 100%; } } .product-description { position: relative; background-color: var(--white, #fff); display: flex; margin-top: 16px; flex-direction: column; font-size: 16px; padding: 35px 40px; } @media (max-width: 991px) { .product-description { max-width: 100%; padding: 0 20px; } } .product-description p { color: #1f1f1e; font-family: Michroma, sans-serif; line-height: 26px; } @media (max-width: 991px) { .product-description p { max-width: 100%; } } .learn-more-button { font-family: Michroma, sans-serif; border-radius: 8px; box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25); border: 2px solid rgba(0, 255, 255, 1); background-color: var(--white, #fff); align-self: start; margin-top: 30px; color: var(--black, #000); line-height: 150%; padding: 12px 32px; } @media (max-width: 991px) { .learn-more-button { max-width: 100%; padding: 0 20px; } } .product-card-1, .product-card