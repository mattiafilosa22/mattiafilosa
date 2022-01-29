import "./Timeline.css";
import { ReactComponent as WorkIcon } from "../../media/work.svg"
import { ReactComponent as SchoolIcon } from "../../media/school.svg"

import timelineElements from "../../data/timeline";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"

const Timeline = () => {
    let workIconStyles = { background: "#06D6A0" }
    let schoolIconStyles = { background: "#f9c74f" }
    return (
        <div id="time_div">
            <h1 className="title">My Career</h1>
            <VerticalTimeline>
                {timelineElements.map(element => {
                    let isWorkIcon = element.icon === "work"
                    
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== ""
                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.location}
                            </h5>
                            <p id="description">{element.description}</p>
                            {showButton && (
                                
                                <a
                                    className={`button ${isWorkIcon ? "workButton" : "schoolButton"
                                        }
`}
                                    href={element.url}
                                    target='_blank'
                                >
                                    {element.buttonText}
                                </a>
                            )}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline;    