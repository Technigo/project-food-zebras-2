
const apiData = `https://developers.zomato.com/api/v2.1/search?entity_id=109&entity_type=city&cuisines=143`
const apiKey = `cbcee325a3269e2c9a64a70beb91d113`

//Header
const request = new Request(apiData, {
  headers: new Headers({
    Accept: 'application/json',
    'user-key': apiKey
  })
})

fetch(request)
  .then((response) => {
    return response.json()
  })
  .then((json) => {
    console.log(json);
    // console.log(json.restaurants[0].restaurant.name)
    json.forEach((item) => {
      document.querySelector('.rest-picture').src = item.image
      })

    // json.forEach((results) => {
    //   document.getElementById('restaurantsContainer').innerHTML += results.restaurants[0].restaurant.name;
  })
    
    


    // console.log(newArray)
    // .forEach((item, index) => {
    //   restaurants[index].querySelector('.rest-name').innerText = item.restName
    //   restaurants[index].querySelector('.rest-address').innerText = item.restAddress
    //   restaurants[index].querySelector('.rest-average-cost').innerText = item.averageCost
    //   restaurants[index].querySelector('.rest-rating').innerText = item.averageRating
      // restaurants[index].querySelector('.rest-picture').src = item.image
    // })
  // })

  
  const restaurantInformation = (information) => {
    const restName = information.restaurant.name
    console.log(restName);
    const restAddress = information.restaurant.location.address
    const averageCost = information.restaurant.average_cost_for_two + " " + information.restaurant.currency
    const averageRating = information.restaurant.user_rating.aggregate_rating
    const image = information.restaurant.featured_image
    //console.log(image);
    return {restName, restAddress, averageRating, averageCost, image}
  }
  