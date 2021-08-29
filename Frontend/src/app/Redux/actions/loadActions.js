import {allLoad, updateLoadCreator,deleteLoadCreator,addLoadCreator} from "../actionCreators/loadActionsCreator";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:56550/api";

export const getAllLoad = () => async(dispatch) =>
{
    const {data} = await axios.get("/LoadBreakSwitch").catch((err) =>{
        console.log("Error",err);
    });
    console.log(data);
    
    dispatch(allLoad(data));
}

export const updateLoad = (load) => async(dispatch) =>
{
    await axios.put(`/LoadBreakSwitch/${load.id}`,load).catch((err) =>{
        console.log("Error",err);
    });
    dispatch(updateLoadCreator(load));
}

export const deleteLoad = (id) => async(dispatch) =>
{
     await axios.delete(`/LoadBreakSwitch/${id}`).catch((err) =>{
        console.log("Error",err);
    });
    dispatch(deleteLoadCreator(id));
}

export const addLoad = (load) => async(dispatch) => {
   console.log(load);
    const newLoad = {mrId:'1ff12',name:'DrugiNaziv',description:'fsa',costPerUnitL:22,failureRate:23,IsUnderground:true,Phases:1,RatedVoltage:1,NormalOpen:true,Retained:true,SwitchOnCount:1,SubstationId:28,RatedCurrent:21}
    await axios.post("/LoadBreakSwitch", newLoad).catch((err) =>{
        console.log("Error",err);
    });

    dispatch(addLoadCreator(newLoad));
    
}
