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
    const newBreaker = {mrId:'fasda12',name:'NSDADA',description:'fsa',costPerUnitL:22,failureRate:23,IsUnderground:true,Phases:1,RatedVoltage:1,NormalOpen:true,Retained:true,SwitchOnCount:1,SubstationId:28,InTransitTime:12,RatedCurrent:45}
    await axios.post("/Breaker", newBreaker).catch((err) =>{
        console.log("Error",err);
    });

    dispatch(addBreakerCreator(newBreaker));
    
}
