function bankRobbery() {
    const heros = ["spiderman", "batman", "superman"]
  
  
    function whoHelps(){
      
      // lexial scope
  
      const hero = heros[2]
      
      // console.log(test)
      
      function whoWins(){
        // lexical scope
        const test = 'we just want to test'
        console.log(hero)
        console.log(heros[0])
      }
      
      console.log(heros[1])
  
      whoWins()
  
    }
  
  
  
    whoHelps()
    // let's write our codes here
  }
  
  
  bankRobbery()