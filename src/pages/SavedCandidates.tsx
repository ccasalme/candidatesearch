import { useState, useEffect } from "react";
import { Candidate } from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    setSavedCandidates(storedCandidates);
  }, []);

  const handleRemoveCandidate = (id: number) => {
    const updatedCandidates = savedCandidates.filter(candidate => candidate.id !== id);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
  };

  return (
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <ul>
          {savedCandidates.map(candidate => (
            <li key={candidate.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <img src={candidate.avatar_url} alt={candidate.login} width={50} style={{ borderRadius: "50%", marginRight: "10px" }} />
              <div>
                <h3>{candidate.name || "No Name Provided"}</h3>
                <p>Username: {candidate.login}</p>
                <p>Location: {candidate.location || "Unknown"}</p>
                <p>Company: {candidate.company || "No Company Listed"}</p>
                <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                <button onClick={() => handleRemoveCandidate(candidate.id)} style={{ marginLeft: "10px", cursor: "pointer" }}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No candidates have been saved yet.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
