import "../css/experience.css";

import { Timeline, TimelineEvent } from "react-event-timeline";
const Experience = ({ name, location, duration, points }: any) => {
  return (
    <div
      style={{
        marginLeft: "20em",
        marginRight: "20em",
      }}
    >
      <Timeline
        style={{
          background: "#0a192f",
        }}
      >
        <TimelineEvent
          bubbleStyle={{
            height: "2rem",
            width: "2rem",
          }}
          contentStyle={{
            backgroundColor: "0a192f",
            color: "#fff",
          }}
          subtitle={
            <>
              <span className="CV-timeline-heading-location">{location} </span>
              <small className="CV-timeline-heading-duration">{duration}</small>
            </>
          }
          subtitleStyle={{
            color: "#fff",
            fontSize: "20px",
          }}
          style={{
            fontSize: "17px",
          }}
          title={<span className="CV-timeline-heading-title">{name} </span>}
        >
          <div>
            <ul>
              {points?.map((point: string) => {
                return (
                  <li
                    style={{
                      listStyleType: "circle",
                    }}
                  >
                    {point}
                  </li>
                );
              })}
            </ul>
          </div>
        </TimelineEvent>
      </Timeline>
    </div>
  );
};
export default Experience;
