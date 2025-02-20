import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404: Page Not Found</h1>
      <h1>¯\_(ツ)_/¯</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <button 
        onClick={() => navigate("/")} 
        style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}>
        Go Home
      </button>
    </section>
  );
};

export default ErrorPage;
