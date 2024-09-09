export default function Container({ children }) {
  return (
    <>
      <div className="card" style={{ width: "80rem",height:"25rem" }}>
        <div className="card-body">{children}</div>
      </div>
    </>
  );
}
