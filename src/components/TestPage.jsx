import React from 'react'

function TestPage() {
  const deals = [
    { id: 1, title: 'Big Dinner Box', description: 'Feeding the family just got a whole lot easier. Get 2 medium 1-topping pizzas, 5 breadsticks and your choice of pasta or wings. Or skip the sides and get 3 medium 1-topping pizzas.', imageUrl: 'https://www.pizzahut.com/assets/w/tile/thor/Deals_BDB_WSBOWings.png' },
    { id: 2, title: 'Dinner Box', description: "Don’t know what to get? We've made it easy. Get a medium 1-topping pizza, 5 breadsticks with marinara and 10 cinnamon sticks with icing—all in one convenient box.", imageUrl: 'https://www.pizzahut.com/assets/w/tile/thor/A24_deals_10DinnerBox.png' },
    { id: 3, title: "Cinnabon® Mini Rolls", description: '10 mini cinnamon rolls, topped with signature cream cheese frosting, are the perfect way to end pizza night. Or you can eat \'em first. Don\'t worry, we won\'t tell.', imageUrl: 'https://www.pizzahut.com/assets/w/tile/thor/Desserts_NEWCinnabonMiniRolls.png' },
    { id: 4, title: '$6.99 NEW Pizza Hut Melts', description: "Our signature Thin 'N Crispy® crust loaded with toppings and cheese, folded over and baked to melty perfection, then sprinkled with a parmesan and oregano blend. Comes with sauce for dipping, no substitutions.", imageUrl: 'https://www.pizzahut.com/assets/w/tile/thor/Melts_DealTile_Web_175x203.jpg' },
    { id: 5, title: "NEW $7 Deal Lover's Menu", description: "Treat yourself to 2 or more of your faves for $7 each - 7 days a week. Product avail., prices & partic. vary. Add’l. Charges may apply. Excl. apply.", imageUrl: 'https://www.pizzahut.com/assets/w/tile/thor/Web_Deal_Tile_valuelineup_dt_175x203_nolegal.jpg' },
    { id: 6, title: 'PEPSI-COLA® 4-Pack', description: "All that's missing are the classic Pizza Hut cups. Get four refreshing, individual-sized beverages to wash your meal down.", imageUrl: 'https://www.pizzahut.com/assets/w/tile/thor/deals_pepsi4pack_175x203.png' },
  ];

  const dealJSX = deals.map((deal) => (
    <div key={deal.id} className='d'>
      <div className='img'>
        <img src={deal.imageUrl} alt={deal.title} className='img' />
      </div>
      <div className='detail'>
        <h3 className='t'>{deal.title}</h3>
        <p className='des'>{deal.description}</p>
      </div>
    </div>
  ));

  return (
    <div className='main'>
      <div className='title'>
        <h1 className='main-title'>Deals</h1>
        <h1>Find a restaurant near you for local deals and pricing</h1>
        <button className='button'>GET STARTED</button>
      </div>

      <div className='deal'>{dealJSX}</div>
      <span>2000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request.

</span>
    </div>
  );
}

export default TestPage