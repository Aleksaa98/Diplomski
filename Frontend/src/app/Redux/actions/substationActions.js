import {allSubstations, updateSubstationCreator,deleteSubstationCreator,addSubstationCreator,changeStateCreator} from "../actionCreators/substationActionsCreator";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

export const getAllSubstations = () => async(dispatch) =>
{
    // const {data} = await axios.get("/substations").catch((err) =>{
    //     console.log("Error",err);
    // });

    dispatch(allSubstations());
}

export const updateSubstation = (substation) => async(dispatch) =>
{
    const {data} = await axios.get("/substations").catch((err) =>{
        console.log("Error",err);
    });
    dispatch(updateSubstationCreator(data));
}

export const deleteSubstation = (substation) => async(dispatch) =>
{
    const {data} = await axios.get("/substations").catch((err) =>{
        console.log("Error",err);
    });
    dispatch(deleteSubstationCreator(data));
}

export const addSubstation = (substation) => async(dispatch) => {
    const {data} = await axios.get("/substations").catch((err) =>{
        console.log("Error",err);
    });
    dispatch(addSubstationCreator(data));
    
}

export const changeState = (subName,state) => async(dispatch) => {

    dispatch(changeStateCreator(subName,state));
    
}