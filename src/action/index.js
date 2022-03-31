export const addToDo=(value)=>{
    return{
        type:"addToDo",
        value:value
    }
}

export const editToDo=(event)=>{
    return{
        type:"editToDo",
        index:event
    }
}
export const active=(event,type)=>{
    return{
        type:type,
        value:event
    }
}

export const deleteToDo=(value)=>{
    
    return{
        type:"deleteToDo",
        value:value

    }
}