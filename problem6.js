function problem6(inventory)
 {
   let audiBmw=[]

   for(let i of inventory)
   {
     if(i.car_make==="Audi"||i.car_make==='BMW')
     {
       audiBmw.push(i)
     }
   }
  return JSON.stringify(audiBmw)

 }

 module.exports = problem6;