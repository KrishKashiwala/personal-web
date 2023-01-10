import "../css/experience.css";
const Experience = ({ name, location, duration, points }: any) => {
  return (
    <main className="CV-page">
      <div className="CV-grid">
        <div className="CV-grid-column">
          <div className="CV-jobs">
            <h2 className="CV-secondaryHeading CV-jobs-heading">
              Relevant Experience
            </h2>
            <section className="CV-timeline CV-job">
              <h3 className="CV-timeline-heading">
                <span className="CV-timeline-heading-title">{name} </span>
                &#8211;{" "}
                <span className="CV-timeline-heading-location">
                  {location}{" "}
                </span>
                <small className="CV-timeline-heading-duration">
                  {duration}
                </small>
              </h3>
              <ul className="CV-timeline-details">
                {points?.map((point: string) => {
                  return <li className="CV-job-timeline-item">{point}</li>;
                })}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Experience;
