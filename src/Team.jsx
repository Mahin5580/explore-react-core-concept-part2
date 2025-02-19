import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(0);
    const handleAdd=()=>{
        // const newTeam=team+1;
        // setTeam(newTeam)
        setTeam(team+1);
    }
    const handleRemove=()=>{
        // const newTeam=team-1;
        // setTeam(newTeam);
        // 
        setTeam((prevState)=>prevState-1)//prevent error 
    }

    const teamStyle={
        border:"2px solid red",
        backgroundColor:"lime",
        padding:"10px"
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}