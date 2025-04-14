import React, { useState } from 'react';
import './App.css';

const sides = ['🐑', '🐐', '🐫', '🐎']; // Sheep, Goat, Camel, Horse
const rareSide = '🐂'; // Ox

function rollBone() {
  if (Math.random() < 0.01) return rareSide;
  return sides[Math.floor(Math.random() * sides.length)];
}

function FourDifficult() {
  const [bones, setBones] = useState([]);
  const [message, setMessage] = useState('');

  const rollBones = () => {
    const result = [rollBone(), rollBone(), rollBone(), rollBone()];
    setBones(result);

    const unique = new Set(result);
    const hasAllFour = sides.every(side => unique.has(side));
    const fourHorses = result.every(side => side === 'Horse');

    if (fourHorses) {
      setMessage('Lucky! 🐎🐎🐎🐎');
    } else if (hasAllFour) {
      setMessage('You win! 🎉');
    } else if (result.includes(rareSide)) {
      setMessage('Rare Ox! 🐂');
    } else {
      setMessage('');
    }
  };

  return (
    <div className="game">
      <h1>4 Difficult</h1>
      <button onClick={rollBones}>Roll</button>
      <div className="bones">
        {bones.map((bone, idx) => (
          <div key={idx} className="bone">{bone}</div>
        ))}
      </div>
      <h2>{message}</h2>
    </div>
  );
}

export default FourDifficult;
