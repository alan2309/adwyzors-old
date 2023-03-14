const router = require('express').Router();
const Job = require('../models/Job');


router.get("/:userId",async(req,res)=>{
    try{
        const jobs = await Job.find({'company_id':req.params.userId}).sort({'updatedAt':-1});
        res.status(200).json(jobs);
    } catch(err){
        console.log(err);
        res.status(500).json({ message: "Error getting jobs" });
    }
});

router.get("/details/:jobId",async(req,res)=>{
  try{
    const job = await Job.findOne({'_id':req.params.jobId});
    res.status(200).json(job);
} catch(err){
    console.log(err);
    res.status(500).json({ message: "Error getting job details" });
}
})

router.post("/", async (req, res) => {
    const newJob = new Job(req.body);
  
    try {
      const savedJob = await newJob.save();
      return res.status(200).json(savedJob);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      if (job.company_id === req.body.userId) {
        await job.deleteOne();
        res.status(200).json("job has been deleted succesfully");
      } else {
        return res.status(403).send("You are not allowed to delete this job");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  });

router.get("/",async(req,res)=>{
  try{
    const jobs = await Job.find({});
    res.status(200).json(jobs)
  }catch(err){
    console.log(err);
    res.status(500).json({ message: "Error getting jobs" });
}
})  

module.exports = router;