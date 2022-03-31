const toDoArray=(state=[],action)=>{

    switch(action.type){
        case "addToDo":{

            return [...state,{value:action.value,flag:false}]
        }
        case "editToDo":{
        
           let array=state
          let sampleObj= array[action.index] 
          sampleObj.flag=!sampleObj.flag
          array[action.index]=sampleObj
          state=array
          return [...state]
        }
        case "deleteToDo":{
            let active = action.value.filter((prev) => {
                if (!prev.flag) {
                  return prev;
                }
              });
              state = active;

  return [...state]
        }
        default:
            return state    
    }
    

}

export default toDoArray