import {allBreakers, updateBreakerCreator,deleteBreakerCreator,addBreakerCreator} from "../actionCreators/breakerActionsCreator";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:56550/api";

export const getAllBreakers = () => async(dispatch) =>
{
    const {data} = await axios.get("/Breaker").catch((err) =>{
        console.log("Error",err);
    });
    console.log(data);
    
    dispatch(allBreakers(data));
}

export const updateBreaker = (breaker) => async(dispatch) =>
{
    await axios.put(`/Breaker/${breaker.id}`,breaker).catch((err) =>{
        console.log("Error",err);
    });
    dispatch(updateBreakerCreator(breaker));
}

export const deleteBreaker = (id) => async(dispatch) =>
{
     await axios.delete(`/Breaker/${id}`).catch((err) =>{
        console.log("Error",err);
    });
    dispatch(deleteBreakerCreator(id));
}

export const addBreaker = (breaker) => async(dispatch) => {
   console.log(breaker);
    await axios.post("/Breaker", breaker).catch((err) =>{
        console.log("Error",err);
    });

    dispatch(addBreakerCreator(breaker));
    
}
