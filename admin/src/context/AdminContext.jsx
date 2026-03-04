import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const AdminContext = createContext()

const AdminContextProvider = (props) =>{
    const [atoken, setAtoken] = useState(localStorage.getItem("aToken")?localStorage.getItem("aToken"):'')
    const backendurl = import.meta.env.VITE_BACKEND_URL
    const [doctors, setDoctors] = useState([])
    const getAllDoctors = async() =>{
        try {
            const {data} = await axios.post(backendurl + '/api/admin/all-doctors' ,{},{headers:{atoken}})
            if(data.success){
                setDoctors(data.doctors)
                console.log(data.doctors)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const value = {
        atoken,setAtoken,backendurl,doctors,getAllDoctors
    }
    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider