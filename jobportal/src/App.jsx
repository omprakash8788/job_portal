
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import JobCard from "./components/JobCard/JobCard";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/SearchBar/Search";
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const tempJobs = [];
    const jobsRef = query(collection(db, "job"));
    const q = query(jobsRef, orderBy('postedOn',"desc"))

    const req = await getDocs(q);
    req.forEach((job) => {
     
      tempJobs.push({
        ...job.data(),
        id:job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  };

  
  const fetchJobsCustom = async (jobCriteria) => {
    const tempJobs = [];
    const jobsRef = query(collection(db, "job"));
    const q = query(jobsRef, where("type","==",jobCriteria.type), where("title","==",jobCriteria.title) , where("experiance","==",jobCriteria.experiance) ,where("location","==",jobCriteria.location),orderBy('postedOn',"desc"))

    const req = await getDocs(q);
    req.forEach((job) => {
     
      tempJobs.push({
        ...job.data(),
        id:job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <Search fetchJobsCustom={fetchJobsCustom}/>
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;

