import {allFuses, updateFuseCreator,deleteFuseCreator,addFuseCreator} from "../actionCreators/fuseActionsCreator";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:56550/api";

export const getAllFuses = () => async(dispatch) =>
{
    const {data} = await axios.get("/Fuse").catch((err) =>{
        console.log("Error",err);
    });
    console.log(data);
    
    dispatch(allFuses(data));
}

export const updateFuse = (fuse) => async(dispatch) =>
{
    await axios.put(`/Fuse/${fuse.id}`,fuse).catch((err) =>{
        console.log("Error",err);
    });
    dispatch(updateFuseCreator(fuse));
}

export const deleteFuse = (id) => async(dispatch) =>
{
     await axios.delete(`/Fuse/${id}`).catch((err) =>{
        console.log("Error",err);
    });
    dispatch(deleteFuseCreator(id));
}

export const addFuse = (fuse) => async(dispatch) => {
   console.log(fuse);
    const newFuse = {mrId:'GFAS21',name:'NazivNeki',description:'fsa',costPerUnitL:22,failureRate:23,IsUnderground:true,Phases:1,RatedVoltage:1,NormalOpen:true,Retained:true,SwitchOnCount:1,SubstationId:30,RatingCurrent:23,Cutout:true,MaxFaultCurrent:21}
    await axios.post("/Fuse", newFuse).catch((err) =>{
        console.log("Error",err);
    });

    dispatch(addFuseCreator(newFuse));
    
}
