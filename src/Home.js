import React from 'react'

import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
    
      {/* Product id, title, price,raating, image  */} 
       <div className="home__row">
            <Product
                id="1234"
                title="Naukar on super discount"
                price={599}
                rating={3}
                image="https://scontent.fbho1-1.fna.fbcdn.net/v/t1.18169-9/10462595_1448875972059812_6469196317908527101_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=nXEVo6G_dc4AX9m59OM&_nc_ht=scontent.fbho1-1.fna&oh=937da01808917e7f948b0018cd86ec2c&oe=60B7F6A6"
            />
            <Product
                id="1235"
                title="Tide Plus Extra Power Detergent Washing Powder - 6 kg (Jasmine and Rose) with Free Detergent Powder - 2 kg"
                price={249}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81YakxRZLzL._AC_SL1500_.jpg"
            />
       </div>
       <div className="home__row">
            <Product
                id="1236"
                title="Inspiron 3501 15.6'(39.62 cms) FHD Display Laptop  "
                price={31999}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/510u0O5aJcL._AC_SL1000_.jpg"
            />
            <Product
                id="1237"
                title="OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage)"
                price={29999}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71Lx9l3NivL._AC_SL1500_.jpg"
            />
             <Product
                id="1238"
                title="D2Q 3 Ply Disposable Surgical Face Mask Protective layer (Pack of 50) For Men And Women | Use and Throw Face Masks"
                price={279}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81x3ZwuzBXS._AC_SL1500_.jpg"
            />
       </div>
       <div className="home__row">
            <Product
                id="1239"
                title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)"
                price={16990}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71xiB7FZbRL._AC_SL1500_.jpg"
            />
            
       </div>
      </div>
    )
}

export default Home
