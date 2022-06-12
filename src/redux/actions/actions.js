import axios from 'axios'

  export function getAllDogs(){

    return async function(dispatch){

        return axios.get('https://pi-dogs-pedro.herokuapp.com/home')
        .then(res => dispatch({type:'GET_All_DOGS', payload:res.data }))

    }
}

export const getDogyDetail = (id) => {

        return async function(dispatch){
            var json = await axios.get(`https://pi-dogs-pedro.herokuapp.com/home/${id}`);
    
            return dispatch({
                type:'GET_DOGY_DETAIL',
                payload: json.data,
            })
        }
 }

 export function resetState(){
    return {
        type:"RES_STATE",
    }
}

 export const filterByName = (name) => {

    return async function(dispatch){

    try {
        var json = await axios.get(`https://pi-dogs-pedro.herokuapp.com/home?name=${name}`);
        return dispatch({
            type:'FILTER_BY_NAME',
            payload: json.data
        })
    } catch (error) {
            let err = error.response.data
            return alert(err)
        }
    }
 }
  
 export const sortName = (payload) => {
    return {
        type:"SORT_NAME",
        payload,
    }
}

export const sortWeightMin = (payload) => {
    return {
        type:"SORT_WEIGHT_MIN",
        payload,
    }
}

export const sortWeightMax = (payload) => {
    return {
        type:"SORT_WEIGHT_MAX",
        payload,
    }
}

export const dogAPI = (payload) => {
    return {
        type:"DOG_API",
        payload,
    }
}

export const dogDB = (payload) => {
    return {
        type:"DOG_DB",
        payload,
    }
}

export const getTemperaments = () => {

    return async function (dispatch){
        return axios.get("https://pi-dogs-pedro.herokuapp.com/home/temperament")
        .then(res => dispatch({type:"GET_TEMPERAMENTS", payload:res.data}))

    }
}

export function filterTemperament(payload){
    return {
        type:"FILTER_TEMPERAMENT",
        payload,
    }
}

export function postDogs(payload){
    return async function(){
        try{
            const createDogy = await axios.post('https://pi-dogs-pedro.herokuapp.com/dog',payload);
            alert(createDogy.data.data)
            return createDogy;
        }catch (error) {
            let err = error.response.data
            return alert(err)
        }
    }
}

export function deleteDogy(id){
    return async function(){
        try{
            const deleteDogynho = await axios.delete(`https://pi-dogs-pedro.herokuapp.com/home/delete/${id}`);
            alert(deleteDogynho.data.data)
        }catch (error) {
            let err = error.response.data
            return alert(err)
        }
    }
}
