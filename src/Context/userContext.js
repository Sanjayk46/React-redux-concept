import React,{useState,useContext,createContext} from 'react'; 

const UserContext = createContext({
  });
const UserNoteContext = createContext({

}) 
  
  export const useAuthentication = () => useContext(UserContext);
  // export const useNoteAuthentication = ()=>useContext(UserNoteContext);

  // export default function AuthenticationNoteContextProvider({ childrenNote }) {
  //   const[task,setTask] = useState([]); 
  //   const[text,setText] = useState('');
  //   const[textArea,setTextarea] = useState('');
  //   const propsNote = {
  //     task,
  //     setTask,
  //     text,
  //     setText,
  //     textArea,
  //     setTextarea,
  //   };
  
  //   return <UserNoteContext.Provider value={propsNote}>{childrenNote}</UserNoteContext.Provider>;
  // }
  export default function AuthenticationContextProvider({ children }) {
    const[task,setTask] = useState([]); 
    const[note,setNote]=useState([]);
    const[title,setTitle] = useState('');
    const[time,setTime] = useState('');
    const[text,setText] = useState('');
    const[textArea,setTextarea] = useState('');
    const deleteNote =(id)=>{
      setNote(note.filter((node,index)=>index !==id))
     
    }
    const props = {
      task,
      setTask,
      note,
      setNote,
      title,
      setTitle,
      time,
      setTime,
      text,
      setText,
      textArea,
      setTextarea,
      deleteNote,
    };
  
    return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
  }