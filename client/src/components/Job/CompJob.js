import axios from 'axios';
import React, { useState,useEffect,useContext,useRef } from 'react'
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import JobModal from './JobModal'

function CompJob() {
  const [jobs,setJobs] = useState([]);
  const { user } = useContext(AuthContext);
const naviagte = useNavigate();
  useEffect(()=>{
    const data = async()=>{
      await axios.get(`http://localhost:8800/api/jobs/${user._id}`)
      .then(res=>{
        setJobs(res.data)
      })
      .catch(e=>console.log(e))
    }

    data();
  },[])

  const submitHandler = async(e,desc,ctc,req)=>{
    e.preventDefault();
    const newJob = {
        company_id: user._id,
        desc:desc.current.value,
        ctc:ctc.current.value,
        requirements:req
    }
    await axios.post("/jobs",newJob).then(res=>{
        window.location.reload();
    }).catch(e=>console.log(e))
}
  return (
    <div>
        <JobModal showModal={true} submitHandler={submitHandler}/>
        <ol>
          {jobs.map(job=>{
            return <li onClick={(e)=>naviagte(`/jobs/details/${job._id}`)}>
              {job.desc}
              <ul>
                {job.requirements.map(req=>{
                  return <li>{req}</li>
                })}
              </ul>
              </li>
          })}
        </ol>
    </div>
  )
}

export default CompJob