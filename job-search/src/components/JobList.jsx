import React from "react";
import { withRouter } from "react-router-dom";

const JobList = ({ job, history }) => {
  return (
    <div>
      <p onClick={() => history.push("/jobDetails", job)}>{job.company_name}</p>
    </div>
  );
};
export default withRouter(JobList);
