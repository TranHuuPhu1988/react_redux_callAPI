import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
class App extends Component {
  render() {
    return (
    <div className="hidden-sn animated deep-purple-skin">
      
      <Header/>
      <main id="mainContainer">
        <div className="container">
          {/* Products */}
         <ProductsContainer/>
          {/* Message */}
          <MessageContainer/>
          {/* Cart */}
          <CartContainer/>
        </div>
      </main>
      
      {/* Footer */}
      <Footer/>
    </div>
  
    );
  }
}

export default App;

