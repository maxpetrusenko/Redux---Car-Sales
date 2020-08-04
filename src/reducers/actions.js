export const ADD_TYPE = 'ADD'
export const REMOVE_TYPE = 'REMOVE'

export const AddReducer = (obj) =>{
    console.log('add reducer action')
    return ({
        type: ADD_TYPE,
        payload: obj
    })
}

export const RemoveReducer = (cost) => {
    console.log('remove reducer action')
    return ({
        type : REMOVE_TYPE,
        payload : cost
    })
}