import axios from "axios";
import endpoints from "./data";
export const getUser = async(url) =>{
    try {
        const {data} = await axios.get(endpoints.usuario);
        return data;
    } catch (error) {
        console.error(error);
        return[];
    }
}