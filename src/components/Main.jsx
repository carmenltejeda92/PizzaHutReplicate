import React from 'react'

function Main() {
  return (
    <div className='main'>
        <div className='AD'>
            <a href="">
                <div className='firstAd'></div>
            </a>
        </div>
        <div className='findStore'>
            <a href="">
                <div className='gps'>
                    <div><img src="https://cdn.icon-icons.com/icons2/3106/PNG/96/location_pin_gps_placeholder_map_marker_icon_191619.png"
                        width="50px" height="50px"></img></div>
                    <div>Start here</div>
                </div>
                <div className='find'>
                    <div>Find your store to see local deals</div>
                </div>
                <div>
                    <div className='btnLK'>FIND DEALS</div>
                </div>
            </a>
        </div>
        <div className='othfeat'>

            <div className='fOne'>
                <div>Featured</div>
                <div><a href="">SEE MORE</a></div>
            </div> 

        </div>
        <div className='featured'>         
            <div className='fTwo'>
                <a href="">
                    <div className='fstFeat'>
                        <div className='fFeat'>
                            <h4>$12.99 Original Stuffed Crust®</h4> 
                            <p>Nothing beats the original</p>
                        </div>
                    </div>
                </a>
                <a href="">
                <div className='sndFeat'>
                    <div className='fFeat'>
                        <h4>$9.99 Large 1-Topping Pizza</h4>
                        <p>Our best delivery deal</p>
                    </div>
                </div>
                </a>
                <a href="">
                    <div className='thrdFeat'>
                        <div className='fFeat'>
                            <h4>The Big New Yorker</h4>
                            <p>6 XL, Foldable Slices</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className='sndFeatured'>
            <a href="">
                <div className='melts'>
                    <div className='fFeat'>
                        <h4>$6.99 Pizza Hut Melts</h4>
                        <p>Crispy. Dippable. Loaded with toppings & cheese.</p>
                    </div>
                </div>
            </a>
            <a href="">
                <div className='wings'>
                    <div className='fFeat'>
                        <h4>Boneless & Traditional Wings</h4>
                        <p>Choose from 9 signature sauces & rubs</p>
                    </div>
                </div>
            </a>
        </div>
        <div className='popular'>
            <div id='topPop'></div>
            <div className='popTxt'>
                <div className='popText'>
                    <div className='txtPop'>Popular pizzas</div>
                    <div className='popLink'><a href="">PIZZA MENU</a></div>
                </div>
                <div className='popPizza'>
                    <a href="">
                        <div className='pop'>
                            <img src="https://www.pizzahut.com/assets/w/images/PopularPizzas_LargeOriginalPanSupreme_73x132.jpg"
                                    width="50px" height="100px"></img>
                            <div className='fFeat'>
                                <h4>Supreme pizza</h4>
                                <p>Large Original Pan®</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className='pop'>
                            <img src="https://www.pizzahut.com/assets/w/images/web2_poppizzas_cheese_132x73.jpg"
                                width="50px" height="100px"></img>
                            <div className='fFeat'>
                                <h4>Cheese pizza</h4>
                                <p>Large Hand Tosssed</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className='pop'>
                            <img src="https://www.pizzahut.com/assets/w/images/web2_poppizzas_meatlovers_132x73.jpg"
                                width="50px" height="100px"></img>
                            <div className='fFeat'>
                                <h4>Meat Lover's®<br></br>pizza</h4>
                                <p>Large Original Pan®</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className='pop'>
                            <img src="https://www.pizzahut.com/assets/w/images/web2_popularpizzas_pepperoni_73x132.jpg"
                                width="50px" height="100px"></img>
                            <div className='fFeat'>
                                <h4>Pepperoni Pizza</h4>
                                <p>Large Original Pan®</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div id='btmPop'></div>
        </div>
        <div className='bttmLinks'>
            <div className='lfLink'></div>
            <div className='rtLink'></div>
        </div>
    </div>
  )
}

export default Main
