import { useState ,useEffect} from "react";

export default function List() {
   
    const[tasks,setTasks] = useState(["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]);
    const[isdone,setIsDone]= useState([ false,false,false,false,false ]);
  

    const changeTaskStatus = (index) => {
      const newTaskStatuses = [...isdone];
      newTaskStatuses[index] = !newTaskStatuses[index];
      setIsDone(newTaskStatuses);
    };

    const deletetasks = () =>{
      const newtasklist = tasks.filter((_,index)=> !isdone[index]);
      const newisdone = isdone.filter((statuss)=>!statuss);
      setIsDone(newisdone);
      setTasks(newtasklist);
    }

    return (
      <div className="header">
        <h3> “List of tasks ”</h3>
        { tasks.map((task,index)=>(
            <div>
            <li
            key={index}
            className={isdone[index] ? 'done' : 'not-done'}
          >   
            <span>{task}</span>
            </li> 
            <button onClick={() => changeTaskStatus(index)}>
                 {isdone[index] ? 'Undo' : 'Done'}
             </button>
         
            
            </div>
            
        ))
        }
         <button onClick={() => deletetasks()}>
                 Delete Completed
             </button>

      </div>
    );
  }

  