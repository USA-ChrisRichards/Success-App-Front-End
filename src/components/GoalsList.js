import React from "react";

const GoalsList = props => {
  const goalsList = props.goals.map(goal => {
    return (
      <div>
        <li key={goal.id}>
          <b>{goal.title}</b>
          <br></br>
          {goal.content}
        </li>
        <div className="content">
          <div className="meta">
            <span className="date">{goal.created_at}</span>
          </div>
        </div>
        <br></br>
      </div>
    );
  });

  return (
    <div className="">
      <ul>
        <h4>Goals List</h4>
        {goalsList}
      </ul>
    </div>
  );
};

export default GoalsList;
