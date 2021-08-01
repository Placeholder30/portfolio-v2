import React from "react";

function Card({ title, summary, stacks, github, liveLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <div className="summary">
        <p>{summary}</p>
      </div>
      <ul className="tech-stack">
        {stacks.map((stack) => (
          <li> {stack}</li>
        ))}
      </ul>
      <div className="buttons">
        <a
          target="_blank"
          rel="noreferrer"
          href={liveLink}
          className="live-link"
        >
          Live Link
        </a>
        <a target="_blank" rel="noreferrer" href={github} className="github">
          github
        </a>
      </div>
    </div>
  );
}

export default Card;
