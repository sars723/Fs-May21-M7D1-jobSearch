import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
export const JobDetail = (props) => {
  return (
    <Container>
      <Row>
        <Col sm={6} className="mx-auto mt-5">
          <ListGroup>
            <ListGroup.Item>
              Candidate required location:-
              {props.location.state.candidate_required_location}
            </ListGroup.Item>
            <ListGroup.Item>
              Category:-
              {props.location.state.category}
            </ListGroup.Item>
            <ListGroup.Item>
              Company Name:-
              {props.location.state.company_name}
            </ListGroup.Item>
            <ListGroup.Item>
              Description:-
              {props.location.state.description}
            </ListGroup.Item>
            <ListGroup.Item>
              Job type:-
              {props.location.state.job_type}
            </ListGroup.Item>
            <ListGroup.Item>
              Salary:-
              {props.location.state.salary}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default withRouter(JobDetail);
