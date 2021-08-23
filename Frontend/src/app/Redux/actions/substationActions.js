import {allSubstations, updateSubstationCreator,deleteSubstationCreator,addSubstationCreator,changeStateCreator} from "../actionCreators/substationActionsCreator";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:56550/api";

export const getAllSubstations = () => async(dispatch) =>
{
    // const {data} = await axios.get("/Substation").catch((err) =>{
    //     console.log("Error",err);
    // });
    const data = [{mrId:'12',name:'neki',description:'neko',state:false}]
    console.log(data);
    
    dispatch(allSubstations(data));
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
    // const {data} = await axios.get("/substations").catch((err) =>{
    //     console.log("Error",err);
    // });
    console.log(substation);
    dispatch(addSubstationCreator(substation));
    
}

export const changeState = (subName,state) => async(dispatch) => {

    dispatch(changeStateCreator(subName,state));
    
}