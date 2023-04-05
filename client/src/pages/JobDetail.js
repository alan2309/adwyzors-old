import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import axiosInstance from "../axios";

function JobDetail() {
  const [job, setJob] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //  const handleShow = () => setShow(true);

  const { jid } = useParams();
  useEffect(() => {
    const getDetail = async (id) => {
      await axiosInstance
        .get(`/jobs/details/${id}`)
        .then((res) => {
          setJob(res.data);
          console.log(res.data);
        })
        .catch((e) => console.log(e));
    };
    getDetail(jid);
  }, [jid]);

  const submitHandler = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div>
      <h3>{job.desc}</h3>
      <p>
        likes:{job.upvotes} dislikes:{job.downvotes}
      </p>
      <button onClick={submitHandler}>Apply</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default JobDetail;
