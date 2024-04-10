import React, { createContext, useContext, useState } from 'react';

const VoteContext = createContext();

export const useVoteContext = () => useContext(VoteContext);

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState({
    john: { count: 0, voters: [] },
    sam: { count: 0, voters: [] },
    harry: { count: 0, voters: [] }
  });
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const voteForCandidate = (candidate, voterName) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [candidate]: {
        count: prevVotes[candidate].count + 1,
        voters: [...prevVotes[candidate].voters, voterName]
      }
    }));
  };

  const removeVote = (candidate, voterName) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [candidate]: {
        ...prevVotes[candidate],
        count: prevVotes[candidate].count - 1,
        voters: prevVotes[candidate].voters.filter(name => name !== voterName)
      }
    }));
  };

  const getTotalCount = () => {
    let totalCount = 0;
    for (const candidate in votes) {
      totalCount += votes[candidate].count;
    }
    return totalCount;
  };



  return (
    <VoteContext.Provider value={{ votes, modalOpen, openModal, closeModal, voteForCandidate, removeVote, getTotalCount }}>
      {children}
    </VoteContext.Provider>
  );
};