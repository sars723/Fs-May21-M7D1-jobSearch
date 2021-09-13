import React from "react";
import { useState, useEffect } from "react";
import JobList from "./JobList";
export const Home = ({ searchQuery }) => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      const response = await fetch("https://remotive.io/api/remote-jobs");
      if (response.ok) {
        const fetchedJobs = await response.json();
        console.log(fetchedJobs.jobs);
        setJobs(fetchedJobs.jobs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div>
      {jobs
        .filter(
          (job, i) =>
            job.company_name.toLowerCase().includes(searchQuery) && i < 20
        )
        .map((job) => (
          <JobList job={job} />
        ))}
    </div>
  );
};
