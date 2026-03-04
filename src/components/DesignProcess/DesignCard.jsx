function DesignCard({ cardIcon, cardTitle, cardDescription }) {
  return (
    <div className="design-card">
      <span className="design-card-icon">{cardIcon}</span>
      <h2 className="design-card-title">{cardTitle}</h2>
      <hr />
      <p className="design-card-description">{cardDescription}</p>
    </div>
  );
}

export default DesignCard;
