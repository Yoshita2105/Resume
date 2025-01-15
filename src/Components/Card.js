// src/Card.js
import React from 'react';
import './Card.css';
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt } from 'react-icons/fa';  // Import specific icons from react-icons

const Card = ({ title, content, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">
        {icon}
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
      </div>
    </div>
  );
};

export default Card;
