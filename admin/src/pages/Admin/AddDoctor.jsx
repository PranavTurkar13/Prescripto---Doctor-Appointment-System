import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import { AdminContext } from '../../context/AdminContext'
import axios from 'axios'

const AddDoctor = () => {

  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [speciality, setSpeciality] = useState('General Physician')
  const [fees, setFees] = useState('')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [about, setAbout] = useState('')

  const { atoken,backendurl } = useContext(AdminContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if(!docImg){
      toast.error("Add Doctor Picture")
      return
    }
    try {
      const formdata = new FormData()
      formdata.append("name",name)
      formdata.append("email",email)
      formdata.append("password",password)
      formdata.append("experience",experience)
      formdata.append("speciality",speciality)
      formdata.append("fees",Number(fees))
      formdata.append("address",JSON.stringify({line1:address1,line2:address2}))
      formdata.append("degree",degree)
      formdata.append("image",docImg)
      formdata.append("about",about)

      const {data} = await axios.post(backendurl + '/api/admin/add-doctor',formdata,{headers : {atoken}})
      if(data.success){
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setEmail('')
        setPassword('')
        setFees('')
        setDegree('')
        setAddress1('')
        setAddress2('')
        setAbout('')
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <form onSubmit={onSubmitHandler} action="">
      <div className="m-5 max-w-full">

      <p className="text-xl font-semibold text-gray-800 mb-6">Add Doctor</p>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">

        {/* Upload Section */}
        <div className="flex items-center gap-5  max-w-full mb-8 pb-8 border-b border-gray-100">
          <div className="flex-shrink-0">
            <label htmlFor="doc-img" className="cursor-pointer block">
              <img
                src={docImg ? URL.createObjectURL(docImg) :assets.upload_area}
                alt=""
                className="w-20 h-20 rounded-2xl object-cover border-2 border-dashed border-indigo-200 hover:border-indigo-400 transition-colors bg-indigo-50"
              />
            </label>
            <input type="file" onChange={(e)=>{console.log(e.target.files[0]),setDocImg(e.target.files[0])}} id="doc-img" hidden />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Upload doctor picture</p>
            <p className="text-xs text-gray-400 mt-1">Click the image to upload. PNG, JPG up to 5MB.</p>
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">

          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Doctor name</p>
            <input onChange={(e)=>{setName(e.target.value)}} value = {name} type="text" placeholder='Name' required className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Doctor Email</p>
            <input onChange={(e)=>{setEmail(e.target.value)}} value = {email} type="email" placeholder='Email' required className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Doctor Password</p>
            <input onChange={(e)=>{setPassword(e.target.value)}} value = {password} type="password" placeholder='Password' required className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Experience</p>
            <select onChange={(e)=>{setExperience(e.target.value)}} value = {experience} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition">
              <option value="1 Year">1 Year</option>
              <option value="2 Year">2 Year</option>
              <option value="3 Year">3 Year</option>
              <option value="4 Year">4 Year</option>
              <option value="5 Year">5 Year</option>
              <option value="6 Year">6 Year</option>
              <option value="7 Year">7 Year</option>
              <option value="8 Year">8 Year</option>
              <option value="9 Year">9 Year</option>
              <option value="10 Year">10 Year</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Speciality</p>
            <select onChange={(e)=>{setSpeciality(e.target.value)}} value={speciality} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition">
              <option value="General physician">General physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Education</p>
            <input onChange={(e)=>{setDegree(e.target.value)}} value = {degree} type="text" placeholder='Education' required className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition" />
          </div>

          <div className="flex flex-col gap-1 sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Address</p>
            <input onChange={(e)=>{setAddress1(e.target.value)}} value = {address1} type="text" placeholder='line 1' required className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition mb-2" />
            <input onChange={(e)=>{setAddress2(e.target.value)}} value = {address2} type="text" placeholder='line 2' required className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Fees</p>
            <input onChange={(e)=>{setFees(e.target.value)}} value = {fees} type="text" placeholder='Fees' required className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition" />
          </div>

          <div className="flex flex-col gap-1 sm:col-span-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">About me</p>
            <textarea onChange={(e)=>{setAbout(e.target.value)}} value={about} rows={4} placeholder="Write About Yourself" className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition resize-none" />
          </div>

        </div>

        {/* Submit */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <button className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-semibold px-8 py-2.5 rounded-xl transition-all duration-150 hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-px active:translate-y-0">
            Add doctor
          </button>
        </div>

      </div>
    </div>
    </form>
  )
}

export default AddDoctor