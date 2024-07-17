

async function HackerTermina () {

     document.getElementById("demo").style.color = "green";
    document.body.style.backgroundColor = "black"
    document.getElementById("demo").style.fontSize = "20px"
  
  function getRandomDelay() {
     return Math.floor(1000+Math.random()*7000)
  }
       
       
    function getRndomTime(message,delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            document.getElementById("demo").innerHTML +=message+ "<br>"
                resolve(message)
            }, delay);
        })
    }

   const delay1= getRandomDelay();
   const delay2= getRandomDelay();
   const delay3= getRandomDelay();

    const msg1 = await getRndomTime("Initializing hacker...",`${delay1}`)
    const msg2 = await getRndomTime("Reading Your files...." ,`${delay2}`)
    const msg3 = await getRndomTime("Initializing hacker...",`${delay3}`)

    return [msg1,msg2,msg3]
}

HackerTermina();


