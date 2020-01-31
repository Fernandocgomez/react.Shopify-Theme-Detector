import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      name: '',
      urlParamsShopify: '', 
      urlParamsEnvatoMarket: '', 
      siwtch: true,
      urlName: '' 
    }
  }

  findOutMethod = () => {
    fetch('http://localhost:3000/get_theme_name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: this.state.url
      })
    })
      .then(res => res.json())
      .then(name => {
        this.setState({
          name: name.theme_name, 
          urlParamsShopify: name.url_params_shopify,
          urlName: this.state.url, 
          urlParamsEnvatoMarket: name.url_params_envatomarket
        }, () => {this.setState({
          siwtch: false
        })})
      })
      .catch(console.log)


  }

  handelTex = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

    
  }


  render() {

    return (

      <div className="search-bar">

        
        <div className='search-h1-container'>
          <h1 className='search-h1'>Find The Name Of The Theme Your Competitors Are Using To Steal Your Sales!</h1>
          
        </div>    

        <div className='search-form'>
        
          <input className='search-input' name='url' type='text' onChange={(e) => { this.handelTex(e) }}></input>

          
          <button className='search-btn' onClick={this.findOutMethod}>Find Out!</button>

        </div>

        {this.state.siwtch ? (<>

          <div className='search-line'>

          </div>

          <div className='search-h2'>
            <h2>Shopify Theme Detector - What Shopify Theme is that?</h2>
            <p>Have you ever seen a Shopify site (or store) and wondered what Shopify theme was used to build it? You are not alone. Thousands of people try detecting website themes on a daily basis, on several types of website systems. Shopify is no different. Now with our Shopify Detector, you can just enter the URL of the Shopify site you saw and we will let you know the Shopify theme that was used to build it.</p>
            <p>As web developers, designers, dropshippers, Amazon or Ebay sellers, internet marketers or anyone else in the arena, we often see an interesting Shopify store and wonder how it was built. With our new "What Shopify Theme" tool you no longer have to wonder what Shopify theme was used to build a specific website. All you need to do is find a Shopify store that you really like, come to the "What Shopify Theme" tool, enter the site's URL and we will let you know what Shopify theme that site uses, so you can purchase it yourself and build a brand new Shopify eCommerce store.</p>
          </div>

          <div className='search-line'>

          </div>

        </>) : (<>

          <div className='search-line'>

          </div>

          <div className='search-h2'>
            <h2>{this.state.urlName}</h2>
            <h2>is using <span style={{color: 'green'}}>{this.state.name}</span> </h2>
            
            <h2>You can buy this theme on:</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <h2 ><a href={`https://themes.shopify.com/themes?q=` + this.state.urlParamsShopify} target="_blank">The Shopify Theme Store</a></h2>
              <h2 style={{marginLeft: '5px', marginRight: '5px'}}>or</h2>
              <h2><a href={`https://themeforest.net/search/` + this.state.urlParamsEnvatoMarket} target="_blank">The Envato Market</a></h2>
            </div>
            
          </div>

          <div className='search-line'>

          </div>
        </>)}



      </div>

    );
  }

}

export default SearchBar;