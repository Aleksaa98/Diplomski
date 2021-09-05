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
    await axios.post("/Fuse", fuse).catch((err) =>{
        console.log("Error",err);
    });

    dispatch(addFuseCreator(fuse));
    
}
