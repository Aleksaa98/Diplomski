import {allDisconnector, updateDisconnectorCreator,deleteDisconnectorCreator,addDisconnectorCreator} from "../actionCreators/disconnectorActionCreator";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:56550/api";

export const getAllDisconnectors = () => async(dispatch) =>
{
    const {data} = await axios.get("/Disconnector").catch((err) =>{
        console.log("Error",err);
    });

    console.log(data);
    
    dispatch(allDisconnector(data));
}

export const updateDisconnector = (discnonnector) => async(dispatch) =>
{
    await axios.put(`/Disconnector/${discnonnector.id}`,discnonnector).catch((err) =>{
        console.log("Error",err);
    });
    dispatch(updateDisconnectorCreator(discnonnector));
}

export const deleteDisconnector = (id) => async(dispatch) =>
{
     await axios.delete(`/Disconnector/${id}`).catch((err) =>{
        console.log("Error",err);
    });
    dispatch(deleteDisconnectorCreator(id));
}

export const addDisconnector = (discnonnector) => async(dispatch) => {
   console.log(discnonnector);
    await axios.post("/Disconnector", discnonnector).catch((err) =>{
        console.log("Error",err);
    });

    dispatch(addDisconnectorCreator(discnonnector));
    
}
