import "./Timeline.css";
import { ReactComponent as WorkIcon } from "../../media/work.svg"
import { ReactComponent as SchoolIcon } from "../../media/school.svg"
import React, { useRef, useEffect } from "react";
import timelineElements from "../../data/timeline";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"

const Timeline = () => {
    const scrollableDivRef = useRef(null);

    const uniqueId = () => {
        let chars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
        let id = '';
        for(let i = 0; i < 10; i++) {
            let index = Math.round(Math.random() * (chars.length - 1));
            id += chars[index];
        }
        return id;
    };

    useEffect(() => {
        const scrollHandler = () => {
        const scrollY = scrollableDivRef.current.scrollTop;
        if (scrollY > 0) {
            scrollableDivRef.current.classList.add("fade-from-left");
        } else {
            scrollableDivRef.current.classList.remove("fade-from-left");
        }
        };
        scrollableDivRef.current.addEventListener("scroll", scrollHandler);
        return () => {
        scrollableDivRef.current.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    let workIconStyles = { background: "#06D6A0" }
    let schoolIconStyles = { background: "#f9c74f" }
    return (
        <div id="time_div" ref={scrollableDivRef}>
            <h1 className="title">Career</h1>
            <VerticalTimeline>
                {timelineElements.map(element => {
                    let isWorkIcon = element.icon === "work"
                    
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== ""
                    return (
                        <VerticalTimelineElement
                            key={`${uniqueId()}-${element.key}`}
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