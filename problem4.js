function problem4(inventory)
{
    let carYear=[] 
    for(let i of inventory)
    {
      carYear.push(i.car_year)

    }
   // console.log(carYear)
    return carYear
}
module.exports = problem4;