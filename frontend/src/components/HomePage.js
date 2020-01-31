import React from 'react';
import NavBAr from './NavBar';
import SearchBar from './SearchBar';

class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
  
      }
    }
  
    render() {
      return ( 

        
        <div className="home-page-container">
          
        

        <SearchBar />
          
    
        </div>

      );
    }
    
  }
  
  export default HomePage;