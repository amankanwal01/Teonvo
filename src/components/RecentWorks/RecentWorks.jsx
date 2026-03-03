import CaseStudy from "../Process/CaseStudy";
import "./RecentWork.css";
function RecentWorks() {
  return (
    <div>
      <h1>RecentWorks</h1>
      <section className="recent-work">
        <CaseStudy
          size={""}
          image={"/src/Images/RecentWork/jlIAaI4caPj3oVLaxetMd2RvY.avif"}
        />
        <CaseStudy
          size={""}
          image={"/src/Images/RecentWork/JGI1jOpxUUfW0IRfPmx7eMGhc.avif"}
        />{" "}
        <CaseStudy
          size={""}
          image={"/src/Images/RecentWork/fsFDlU7CKq0E96MXMN9fUXrNw.avif"}
        />
        <CaseStudy
          size={""}
          image={"/src/Images/RecentWork/bed888CTflXNK3KFX1R7VhRMtE.avif"}
        />
      </section>
    </div>
  );
}

export default RecentWorks;
