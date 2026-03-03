function CaseStudy({ image, size }) {
  return (
    <div className={`item ${size}`} style={{ border: "0px solid red " }}>
      <img className="case-study-img" src={image} alt="" />
    </div>
  );
}

export default CaseStudy;
