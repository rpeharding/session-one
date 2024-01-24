// import React, { Component } from "react";
// // need imrc to import reac and component - likeimporting joi or axios etc

// class App extends Component {
//   state = { count: 0 };
//   // state is a place in our component that holds data

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//     // call this.setState which is a react thing. is a function, send it object with the key and what you want to do .
//     // have to call set state to get the DOM to update.
//   };
//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     );
//     // return is where we write our html
//     // in the p tag is a jsx ecpression that connects it to the state via this.
//     // we also wire the buttons to the state - not to the dom, so the p tags automaticlaly update. we just pass functions to the buttons that link to the state.
//   }
// }

// export default App;
// // basics of first component - use cc shortcut and multicursor edit for name in green that matches file name
// //when we start npm start a compiler turns jsx via babel to vanilla js, html and css

import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
