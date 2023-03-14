import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'

function JobDetail() {
    const [job,setJob] = useState({})
    const { jid } = useParams();
    useEffect(()=>{
        const getDetail = async(id)=>{
            await axios.get(`http://localhost:8800/api/jobs/details/${id}`)
            .then(res=>{
                setJob(res.data)
                console.log(res.data)
            })
            .catch(e=>console.log(e))
        }
        getDetail(jid);
    },[])
  return (
    <div>
        <h3>{job.desc}</h3>
        <p>likes:{job.upvotes} dislikes:{job.downvotes}</p>
    </div>
  )
}

export default JobDetail