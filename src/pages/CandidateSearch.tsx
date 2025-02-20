import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(
    JSON.parse(localStorage.getItem('savedCandidates') || '[]')
  );

  useEffect(() => {
    fetchCandidate();
  }, []);

  const fetchCandidate = async () => {
    try {
      const data = await searchGithub();
      if (data.length > 0) {
        setCandidate(data[0]);
      }
    } catch (error) {
      console.error('Error fetching candidate:', error);
    }
  };

  const handleSaveCandidate = () => {
    if (candidate) {
      const updatedCandidates = [...savedCandidates, candidate];
      setSavedCandidates(updatedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
    }
    fetchCandidate();
  };

  const handleSkipCandidate = () => {
    fetchCandidate();
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {candidate ? (
        <div>
          <img src={candidate.avatar_url} alt={candidate.login} width={100} />
          <h2>{candidate.name || 'No Name Provided'}</h2>
          <p>Username: {candidate.login}</p>
          <p>Location: {candidate.location || 'Unknown'}</p>
          <p>Company: {candidate.company || 'No Company Listed'}</p>
          <p>Email: {candidate.email || 'Not Available'}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          <div>
            <button onClick={handleSaveCandidate}>+</button>
            <button onClick={handleSkipCandidate}>-</button>
          </div>
        </div>
      ) : (
        <p>No more candidates available.</p>
      )}
    </div>
  );
};

export default CandidateSearch;
