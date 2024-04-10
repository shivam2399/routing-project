import React, { useState } from 'react';
import { useVoteContext } from './VoteContext';
import axios from 'axios';

const Modal = () => {
  const { modalOpen, closeModal, voteForCandidate } = useVoteContext();
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [voterName, setVoterName] = useState('');

  
  
  const handleVote = () => {
    if (selectedCandidate && voterName) {
      voteForCandidate(selectedCandidate, voterName);
      closeModal();
      setVoterName('');
      setSelectedCandidate('');
    }
    const voteData = {
        candidate: selectedCandidate,
        voterName: voterName,
    }

    axios.post('https://crudcrud.com/api/29b2d7e16f784a62a82932239b2a7503/votes', voteData)
        .then(response => {
            console.log('Success')
        })
        .catch(error => {
            console.log('Error')
        })
  };

  return (
    modalOpen && (
      <>
        <div className="modal-content">
          <h2>Vote for a Candidate</h2>
          <input type="text" placeholder="Enter your name" value={voterName} onChange={(e) => setVoterName(e.target.value)} />
          <select value={selectedCandidate} onChange={(e) => setSelectedCandidate(e.target.value)}>
            <option value="">Select a candidate</option>
            <option value="john">John</option>
            <option value="sam">Sam</option>
            <option value="harry">Harry</option>
          </select>
          <div>
            <button onClick={handleVote}>Vote</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      </>
    )
  );
};

export default Modal;