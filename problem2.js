function problem2(inventory)
{
    let i=(inventory.length-1)
    //console.log(inventory[i].id)
    return ('Last car is a '+inventory[i].car_make+' '+ inventory[i].car_model) 
}

module.exports = problem2;