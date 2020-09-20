import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Language_he_IL_1x._CB430114962_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="123123123"
                        title='The lean startup'
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
                        price={29.99}
                        rating={5}
                    />
                    <Product
                        id="19347856913"
                        title="AmazonBasics Hardside Spinner, Carry-On, Expandable Suitcase Luggage with Wheels, 21 Inch, Black"
                        image="https://images-na.ssl-images-amazon.com/images/I/71s7HbyqzEL._AC_SL1500_.jpg"
                        price={54.99}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="23948670394"
                        title="Oculus Rift S PC-Powered VR Gaming Headset"
                        image="https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._SL1500_.jpg"
                        price={399.00}
                        rating={5}
                    />
                    <Product
                        id="132345986"
                        title="VIVO Dual Arm Monitor + Laptop Mount for 17 to 32 inch Screens and 10 to 15.6 inch Laptops"
                        image="https://images-na.ssl-images-amazon.com/images/I/71OfvS5g9HL._AC_SL1500_.jpg"
                        price={79.95}
                        rating={4}
                    />
                    <Product
                        id="596870454"
                        title="AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries"
                        image="https://images-na.ssl-images-amazon.com/images/I/71nDX36Y9UL._AC_SL1026_.jpg"
                        price={10.99}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="283745692386"
                        title="Samsung 34-Inch CJ791 Ultrawide Curved Gaming Monitor (LC34J791WTNXZA)"
                        image="https://images-na.ssl-images-amazon.com/images/I/91-hWcNu2yL._AC_SL1500_.jpg"
                        price={699.99}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
