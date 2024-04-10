import React from 'react';
import Modal from './Modal';
import { useVoteContext } from './VoteContext';

const App = () => {
  const { votes, openModal, removeVote, getTotalCount } = useVoteContext(); 

  const handleRemoveVote = (candidate, voterName) => {
    removeVote(candidate, voterName);
  };

  return (
    <div className="App">
      <h1>Class Monitor Vote</h1>
      <p>Total Count: {getTotalCount()}</p> 
      <button onClick={openModal}>Add Vote</button>
      <Modal>
        <h3>Choose your candidate</h3>
      </Modal>
      <div id="candidates">
        <div>
          <h2>John</h2>
          <p>Count: {votes.john.count}</p>
          <ul>
            {votes.john.voters.map((voter, index) => (
              <li key={index}>
                {voter}
                <button onClick={() => handleRemoveVote('john', voter)}>Delete</button> 
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Sam</h2>
          <p>Count: {votes.sam.count}</p>
          <ul>
            {votes.sam.voters.map((voter, index) => (
              <li key={index}>
                {voter}
                <button onClick={() => handleRemoveVote('sam', voter)}>Delete</button> {/* Add delete button */}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Harry</h2>
          <p>Count: {votes.harry.count}</p>
          <ul>
            {votes.harry.voters.map((voter, index) => (
              <li key={index}>
                {voter}
                <button onClick={() => handleRemoveVote('harry', voter)}>Delete</button> {/* Add delete button */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


export default App;