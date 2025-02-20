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
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ background: "black", color: "white" }}>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map(candidate => (
              <tr key={candidate.id} style={{ background: "#222", color: "white" }}>
                <td>
                  <img src={candidate.avatar_url} alt={candidate.login} width={50} style={{ borderRadius: "50%" }} />
                </td>
                <td>
                  {candidate.name || "No Name"} ({candidate.login})
                </td>
                <td>{candidate.location || "Unknown"}</td>
                <td>
                  <a href={`mailto:${candidate.email}`} style={{ color: "#6495ED" }}>
                    {candidate.email || "Not Available"}
                  </a>
                </td>
                <td>{candidate.company || "No Company Listed"}</td>
                <td>
                  <button onClick={() => handleRemoveCandidate(candidate.id)} style={{ background: "red", color: "white", borderRadius: "50%", padding: "5px 10px" }}>
                    ➖
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No candidates have been saved yet.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
