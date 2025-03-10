export default function LoadingSpnner() {
  return (
    <>
      <div className="d-flex justify-content-center loading">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
