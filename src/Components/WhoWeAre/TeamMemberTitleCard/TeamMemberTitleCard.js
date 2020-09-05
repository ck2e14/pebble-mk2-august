import React from "react";
import "./TeamMemberTitleCard-style.css";

const TeamMemberTitleCard = props => {
   const { person, setActiveCard } = props;

   return (
      <div className='title-card-container' onClick={() => setActiveCard(person)}>
         {person.name}
      </div>
   );
};

export default TeamMemberTitleCard;
