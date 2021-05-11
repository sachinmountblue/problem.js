function problem1(inventory)
{
   for(let i of inventory)
   {
     if(i.id===33)
     {
       return ('Car 33 is a '+i.car_year+' '+i.car_make+' '+i.car_model)
     }
   }
}

module.exports = problem1;