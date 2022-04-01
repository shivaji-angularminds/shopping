import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, editToDo, active ,deleteToDo} from "../action";

function Home() {
  const [todo, setToDo] = useState("");
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const todoArray = useSelector((state) => state.toDoArray);
  const array = useSelector((state) => state.active);
  const state=useSelector((state)=>state)
  const [buttonStatus, setButtonStatus] = useState({
    active: false,
    completed: false,
    all: true,
  });
  let check= JSON.stringify(todoArray)!==JSON.stringify([]) && todoArray.filter(prev=>{if(prev.flag){return prev}})

  useEffect(() => {
    if (buttonStatus.all) {
      setData(todoArray);
    } else if (buttonStatus.active) {
      setData(array ? array : []);
    } else if (buttonStatus.completed) {
      setData(array ? array : []);
    }
  }, [todoArray, buttonStatus]);

  return (
    <div className="container  ">
      <div className="input-group mb-3">
        <input
          value={todo}
          onChange={(event) => {
            setToDo(event.target.value);
          }}
          type="text"
          className="form-control "
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <button
          onClick={() => {
            if (todo) {
              dispatch(addToDo(todo));
              setToDo("");
            } else {
            }
          }}
          className="input-group-text bg-black  "
          id="basic-addon2"
        >
          Add Todo
        </button>
      </div>
      <ul>
        {data &&
          data.map((prev, index) => {
            return (
              <div    >
                <li
                key={prev.index }
                  className={prev.flag && "lineT"}
                  onClick={() => {
                    dispatch(editToDo(index));
                  }}
                >
                  {prev.value}
                </li>
              </div>
            );
          })}
      </ul>
      <div className="table">
        <button className="btn bg-dark text-light disable ">Show :</button>
        <button
          className=" btn text-dark bg-white "
          onClick={() => {
            setData(todoArray);

            setButtonStatus({
              active: false,
              completed: false,
              all: true,
            });
          }}
        >All
        </button>
        <button
          className=" btn bg-danger"
          onClick={() => {
            setData(array);

            setButtonStatus({
              active: true,
              completed: false,
              all: false,
            });
            dispatch(active(todoArray, "active"));
          }}
        >
          Active
        </button>
        <button
          className=" btn bg-success text-white"
          onClick={() => {
            setData(array);

            setButtonStatus({
              active: false,
              completed: true,
              all: false,
            });

            dispatch(active(todoArray, "completed"));
          }}
        >
          Completed
        </button>
        { check && <button  
       
        className=" btn bg-primary text-white" onClick={() => {
            dispatch(deleteToDo(todoArray));
          }}
 >Clear Completed</button>}
      </div>

      
    </div>
  );
}

export default Home;
