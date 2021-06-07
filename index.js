function superbowlWin(array) {
     let win = array.find( array=> {
         return array.result === "W"})
    if (!!win == true) {
        return win.year
    } else 
        return undefined

    }
    
    
         
     


