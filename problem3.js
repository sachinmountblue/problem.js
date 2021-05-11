function problem3(inventory)
{
    let carModel=[] 
    for(let i of inventory)
    {
      carModel.push(i.car_model)

    }
    return (carModel.sort())
}
module.exports = problem3;