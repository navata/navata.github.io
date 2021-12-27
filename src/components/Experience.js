import React from "react";

const Experience = ({ item }) => {
    const { title, dateTime, projects } = item;
    return (
        <div class="timeline-card timeline-card-primary card shadow-sm">
            <div class="card-body">
                <div class="text-muted text-small">{dateTime}</div>
                <div class="h5 mb-2">
                    {title}
                    {/* <span class="text-muted h6">at Creative Agency</span> */}
                </div>
                <div class="list-group">
                    {projects.map((project, index) => (
                        <a
                            href="#"
                            class="list-group-item list-group-item-action"
                            aria-current="true"
                        >
                            <div class="d-flex w-100 justify-content-between">
                                <h6 style={{flex: 1}} class="mb-1">{project.name}</h6>
                                <small>{project.dateTime}</small>
                            </div>
                            <p class="mb-1">
                                {project.languages}
                            </p>
                            <small>{project.time}</small>
                        </a>
                    ))}
                </div>
                {/* {projects.map((project, index) => (
                    <div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{project.name}</h5>
                                <p class="card-text">{project.languages}</p>
                                <p class="card-text">
                                    <small class="text-muted">
                                        {project.time}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default Experience;
