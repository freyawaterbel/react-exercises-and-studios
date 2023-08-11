import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [ {label: "soup", value: "soup"}, {label: "vegan", value: "vegan"}, {label: "curry", value: "curry"}];

   const [ boardName, setBoardName ] = useState('no boards yet!');

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         <option value="">Select a board</option>
         {boards.map((boards) => {
            return <option key={boards.value} value={boards.value}>{boards.label}</option>
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}