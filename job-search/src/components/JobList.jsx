import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

const JobList = ({ job, history }) => {
  return (
    <div>
      <p onClick={() => history.push("/jobDetails", job)}>
        <Button variant="outline-secondary">{job.company_name}</Button>
      </p>
    </div>
  );
};
export default withRouter(JobList);
