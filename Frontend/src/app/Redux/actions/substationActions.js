import {allSubstations,getByNameSubCreator, updateSubstationCreator,deleteSubstationCreator,addSubstationCreator,changeStateCreator} from "../actionCreators/substationActionsCreator";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:56550/api";

export const getAllSubstations = () => async(dispatch) =>
{
    const {data} = await axios.get("/Substation").catch((err) =>{
        console.log("Error",err);
    });
    //const data = [{mrId:'12',name:'neki',description:'neko',state:false}]
    console.log(data);
    
    dispatch(allSubstations(data));
}

export const updateSubstation = (substation) => async(dispatch) =>
{
    await axios.put(`/Substation/${substation.id}`,substation).catch((err) =>{
        console.log("Error",err);
    });
    dispatch(updateSubstationCreator(substation));
}

export const deleteSubstation = (id) => async(dispatch) =>
{
     await axios.delete(`/Substation/${id}`).catch((err) =>{
        console.log("Error",err);
    });
    dispatch(deleteSubstationCreator(id));
}

export const addSubstation = (substation) => async(dispatch) => {
    const SubSlati = {name:substation.name, mrid: substation.mrId, description: substation.description, id:substation.id, state:substation.state}
    await axios.post("/Substation", SubSlati).catch((err) =>{
        console.log("Error",err);
    });
    console.log(substation);
    dispatch(addSubstationCreator(SubSlati));
    
}

export const changeState = (subName,state) => async(dispatch) => {

    dispatch(changeStateCreator(subName,state));
    
}

export const getByNameSub = (subId) => async(dispatch) => {
    const {data} = await axios.get(`/Substation/${subId}`).catch((err) =>{
        console.log("Error",err);
    });
    console.log(data);
    dispatch(getByNameSubCreator(data));
}