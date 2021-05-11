function problem5(result)
{
    let car2000=[] 
    for(let i of result)
    {
      if(i<2000)
      {
        car2000.push(i)
      }
    }
    return(car2000)
    //console.log(carYear)
}

module.exports = problem5;




