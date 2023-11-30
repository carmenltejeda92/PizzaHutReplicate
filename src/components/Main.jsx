import React from 'react'

function Main() {
  return (
    <div className='main'>
        <div className='AD'>
          <div className='firstAd'></div>
        </div>
        <div className='findStore'>
            <div className='gps'>
                <div>Start here</div>
            </div>
            <div className='find'>
                <div>Find your store to see local deals</div>
            </div>
            <div>
                <div className='btnLK'>FIND DEALS</div>
            </div>
        </div>
        <div className='othfeat'>
            <div className='fOne'>
                <div>Featured</div>
                <div><a href="">SEE MORE</a></div>
            </div> 
        </div>
        <div className='featured'>         
            <div className='fTwo'>
                <div className='fstFeat'></div>
                <div className='sndFeat'></div>
                <div className='thrdFeat'></div>
            </div>
        </div>
      <div className='sndFeatured'>
        <div className='melts'></div>
        <div className='wings'></div>
      </div>
      <div className='popular'>
        <div id='topPop'></div>
        <div className='popTxt'>
            <div className='txtPop'>Popular pizzas</div>
            <div className='popLink'><a href="">PIZZA MENU</a></div>
                <div className='popPizza'>
                    <div>
                        <div className='pop'>
                            <img src="https://www.pizzahut.com/assets/w/images/PopularPizzas_LargeOriginalPanSupreme_73x132.jpg"
                                width="50px" height="100px"></img>
                        </div>
                        <div className='pop'>
                            <img src="https://www.pizzahut.com/assets/w/images/web2_poppizzas_cheese_132x73.jpg"
                                width="50px" height="100px"></img>
                        </div>
                    </div>
                    <div>
                        <div className='pop'>
                            <img src="https://www.pizzahut.com/assets/w/images/web2_poppizzas_meatlovers_132x73.jpg"
                                width="50px" height="100px"></img>
                        </div>
                        <div className='pop'>
                            <img src="https://www.pizzahut.com/assets/w/images/web2_popularpizzas_pepperoni_73x132.jpg"
                                width="50px" height="100px"></img>
                        </div>
                    </div>
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
