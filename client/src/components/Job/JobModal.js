import React, { useRef, useState } from "react";
// company_id,desc,ctc,requirements

const JobModal = (props) => {
  const desc = useRef();
  const ctc = useRef();
  const requirements = useRef();
  const [req, setReq] = useState([]);
  //const { user } = useContext(AuthContext);

  function addReq(e) {
    e.preventDefault();
    setReq([...req, requirements.current.value]);
    requirements.current.value = "";
  }

  return (
    <>
      {props.showModal && (
        <>
          <input type="text" placeholder="desc" ref={desc} />
          <input type="text" placeholder="ctc" ref={ctc} />
          <input type="text" placeholder="requirements" ref={requirements} />
          <button onClick={addReq}>ADD</button>
          <br />
          <ol>
            {req.map((r) => {
              return <li>{r}</li>;
            })}
          </ol>
          <button onClick={(e) => props.submitHandler(e, desc, ctc, req)}>
            Submit
          </button>
        </>
      )}
    </>
  );
};

export default JobModal;
