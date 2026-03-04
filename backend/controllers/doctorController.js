import doctorModel from '../models/doctorModel.js'

const changeAvailability = async(req,res)=>{
    try {
        const {docId} = req.body
        const doctor = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId,{available:!doctor.available})
        res.json({success:true,message:"Availabilty Updated"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export default changeAvailability