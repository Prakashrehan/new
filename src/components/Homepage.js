// import React, { useEffect, useState } from "react";
// import { signOut, onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "../firebase";
// import { useNavigate } from "react-router-dom";
// import { uid } from "uid";
// import {set , ref, onValue, remove, update } from "firebase/database";
// import './Homepage.css';
// import AddIcon from "@mui/icons-material/Add";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import LogoutIcon from '@mui/icons-material/Logout';
// import CheckIcon from '@mui/icons-material/Check';



// export default function Homepage() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [tempUidd, setTempUidd] = useState("");
//   const navigate = useNavigate();

//     useEffect (() => {
//       auth.onAuthStateChanged((user) => {
//         if(user){
//         onValue(ref(db, `/${auth.currentUser.uid}`), snapshot => {
//           setTodos([]);
//           const data = snapshot.val();
//           if (data !== null){
//             Object.values(data).map((todo) => {
//             setTodos((oldArray) => [...oldArray,todo]);
//             });
//           }

//         });
//         } else if(!user){
//             navigate("/");
//         }
//       });  
//     },[]);

//     const handleSignOut = () => {
//       signOut(auth)
//       .then(() => {
//          navigate("/");
//     })
//      .catch((err) => {
//         alert(err.message);  
//     });
//     };

//     const writeToDatabase = () => {
//       const uidd = uid();
//       set(ref(db, `${auth.currentUser.uid}/${uidd}`), {
//       todo: todo,
//       uidd: uidd
//       });

//      setTodo("");
//      };

//     // console.log(auth.currentUser);

//     // update
//     const handleUpdate = (todo) => {
//     setIsEdit(true)
//     setTodo(todo.todo);
//     setTempUidd(todo.uidd);
//     };

//     const handleEditConfirm = () => {
//       update(ref(db, `/${auth.currentUser.uid}/${tempUidd}`),{
//         todo:todo,
//         tempUidd:tempUidd
//       });
//       setTodo("");
//       setIsEdit(false);
//     };

//     // delete
//     const handleDelete= (uid) => {
//       remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
      
//     };

//     return (
//         <div className="homepage">
//          <input 
//          className="add-edit-input"
//          type="text" 
//          placeholder="Add todo..."
//          value={todo}
//          onChange={(e) => setTodo(e.target.value)}
//          />

//          {
//           todos.map((todo) => (
//             <div className="todo">
//             <h1>{todo.todo}</h1>

//             <EditIcon
//             fontSize="large"
//              onClick={() => handleUpdate(todo)} 
//              className="edit-button"
//              />

//              <DeleteIcon
//              fontSize="large"
//             onClick={() => handleDelete(todo.uidd)}
//             className="delete-button"
//             />
//             </div>
//           ))}

//          {isEdit ? (
//           <div>
//           <CheckIcon onClick={handleEditConfirm} className="add-confirm-icon" />
//           </div>

//           ):(
//           <div>
//           <AddIcon onClick={writeToDatabase}className="add-confirm-icon" />
//           </div>
//           )}
//           <LogoutIcon onClick={handleSignOut} className="logout-icon" />
          
//           </div>
//           );
//           }



// import React, { useEffect, useState } from "react";
// import { signOut, onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "../firebase.js";
// import { useNavigate } from "react-router-dom";
// import { uid } from "uid";
// import { set, ref, onValue, remove, update } from "firebase/database";
// import "./Homepage.css";
// import AddIcon from "@mui/icons-material/Add";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import LogoutIcon from '@mui/icons-material/Logout';
// import CheckIcon from '@mui/icons-material/Check';

// export default function Homepage() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [tempUidd, setTempUidd] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         // read
//         onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
//           setTodos([]);
//           const data = snapshot.val();
//           if (data !== null) {
//             Object.values(data).map((todo) => {
//               setTodos((oldArray) => [...oldArray, todo]);
//             });
//           }
//         });
//       } else if (!user) {
//         navigate("/");
//       }
//     });
//   }, []);

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         navigate("/");
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//   };

//   // add
//   const writeToDatabase = () => {
//     const uidd = uid();
//     set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
//       todo: todo,
//       uidd: uidd
//     });

//     setTodo("");
//   };

//   // update
//   const handleUpdate = (todo) => {
//     setIsEdit(true);
//     setTodo(todo.todo);
//     setTempUidd(todo.uidd);
//   };

//   const handleEditConfirm = () => {
//     update(ref(db, `/${auth.currentUser.uid}/${tempUidd}`), {
//       todo: todo,
//       tempUidd: tempUidd
//     });

//     setTodo("");
//     setIsEdit(false);
//   };

//   // delete
//   const handleDelete = (uid) => {
//     remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
//   };

//   return (
//     <div className="homepage">
//       <input
//         className="add-edit-input"
//         type="text"
//         placeholder="Add todo..."
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//       />

//       {todos.map((todo) => (
//         <div className="todo">
//           <h1>{todo.todo}</h1>
//           <EditIcon
//             fontSize="large"
//             onClick={() => handleUpdate(todo)}
//             className="edit-button"
//           />
//           <DeleteIcon
//             fontSize="large"
//             onClick={() => handleDelete(todo.uidd)}
//             className="delete-button"
//           />
//         </div>
//       ))}

//       {isEdit ? (
//         <div>
//         <CheckIcon onClick={handleEditConfirm} className="add-confirm-icon"/>
//         </div>
//       ) : (
//         <div>
//           <AddIcon onClick={writeToDatabase} className="add-confirm-icon" />
//         </div>
//       )}
//         <LogoutIcon onClick={handleSignOut} className="logout-icon" />
//     </div>
//   );
// }




// import React,{ useEffect, useState } from "react";
// import { signOut, onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "../firebase.js";
// import { useNavigate } from "react-router-dom";
// import { uid } from "uid";
// import { set, ref, onValue, remove, update } from "firebase/database";
// import LogoutIcon from '@mui/icons-material/Logout';
// import { TodoForm } from "./TodoForm.js";
// import "./Homepage.css";
// import {v4 as uuidv4} from 'uuid';
// import { Todo } from "./Todo.js";
// import { EditTodoForm } from "./EditTodoForm.js";
// // uuidv4();




//     export default function Homepage() {
//     const [todo, setTodo] = useState("");
//     const [todos, setTodos] = useState([]);
//     const [isEdit, setIsEdit] = useState(false);
//     const [tempUidd, setTempUidd] = useState("");
//     const navigate = useNavigate();

//     const handleSignOut = () => {
//           signOut(auth)
//           .then(() => {
//            navigate("/");
//            })
//           .catch((err) => {
//            alert(err.message);
//            });
//            };
//         const addTodo = (todo) => {
//         setTodos([...todos, {id: uuidv4(), task: todo,
//         completed : false, isEditing: false},
//         ]);
        
//         }

//         const toggleComplete = (id) => {
//         setTodos(todos.map((todo) => 
//         todo.id === id? {...
//         todo,completed: !todo.completed} : todo));
//         }

//         const deleteTodo = (id) => 
//         setTodos(todos.filter((todo) => todo.id !== id ));
         

//          const editTodo = (id) => {
//          setTodos(
//           todos.map((todo) => todo.id === id ? {...
//         todo,isEditing: !todo.isEditing} :todo ));
//          }

//          const editTask = (task, id) => {
//           setTodos(todos.map((todo) => todo.id === id ? {...
//           todo, task, isEditing: !todo.isEditing} : todo));
//          };
    
//         return (
//         <div className='TodoWrapper'>
//         <h1>  Get Things Done!  </h1>
//         <TodoForm addTodo={addTodo}/>
//         {todos.map((todo,index) => (
//         todo.isEditing ? (
//         <EditTodoForm />
//         ) : (
//         <Todo task={todo}
//          key={index}
//         toggleComplete={toggleComplete} 
//         deleteTodo={deleteTodo} 
//         editTodo={editTodo} />
        

//           )

        
//         ))}
       
        
        
        
        
        
//         <LogoutIcon onClick={handleSignOut} className="logout-icon"/>
//         </div>
//   )
// }


import React,{ useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import LogoutIcon from '@mui/icons-material/Logout';
import { TodoForm } from "./TodoForm.js";
import "./Homepage.css";
import {v4 as uuidv4} from 'uuid';
import { Todo } from "./Todo.js";
import { EditTodoForm } from "./EditTodoForm.js";


export default function Homepage() {
      const [todo, setTodo] = useState("");
      const [todos, setTodos] = useState([]);
      const [isEdit, setIsEdit] = useState(false);
      const [tempUidd, setTempUidd] = useState("");
      const navigate = useNavigate();
  
      const handleSignOut = () => {
            signOut(auth)
            .then(() => {
             navigate("/");
             })
            .catch((err) => {
             alert(err.message);
             });
             };
      
             const addTodo = (todo) => {
              setTodos([
                ...todos,
                { id: uuidv4(), task: todo, completed: false, isEditing: false },
              ]);
            }
          
            const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
          
            const toggleComplete = (id) => {
              setTodos(
                todos.map((todo) =>
                  todo.id === id ? { ...todo, completed: !todo.completed } : todo
                )
              );
            }
          
            const editTodo = (id) => {
              setTodos(
                todos.map((todo) =>
                  todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
                )
              );
            }
          
            const editTask = (task, id) => {
              setTodos(
                todos.map((todo) =>
                  todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
                )
              );
            };
          
            return (
              <div className="TodoWrapper">
                <h1>Get Things Done !</h1>
                <TodoForm addTodo={addTodo} />
                {/* display todos */}
                {todos.map((todo) =>
                  todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                  ) : (
                    <Todo
                      key={todo.id}
                      task={todo}
                      deleteTodo={deleteTodo}
                      editTodo={editTodo}
                      toggleComplete={toggleComplete}
                    />
                  )
                )}

                <LogoutIcon onClick={handleSignOut} className="logout-icon"/> 
              </div>
            );
          };       

