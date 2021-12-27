import logo from "./logo.svg";
import me from "./me.jpg";
import mycv from "./mycv.pdf";
import "./App.css";
import { myInfo } from "./data";
import Language from "./components/Language";
import Experience from "./components/Experience";
import Item from "./components/Item";

function App() {
    const {
        programingLanguage,
        info,
        database,
        experiences,
        education,
        certifications,
        skills,
        hobbies
    } = myInfo;

    return (
        <div className="col-lg-8 mx-auto p-3 py-md-5">
            <div className="container">
                <div className="cover shadow-lg bg-white">
                    <div className="cover-bg p-3 p-lg-4 text-white">
                        <div className="row">
                            <div className="col-lg-4 col-md-5">
                                <div className="avatar hover-effect shadow-sm p-1">
                                    <img
                                        style={{ height: 200, width: 200 }}
                                        src={me}
                                        className="img-thumbnail"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 text-center text-md-start">
                                <h2 className="h1 mt-2">{info.name}</h2>
                                <p>{info.major}</p>
                                <div className="d-print-none">
                                    <a
                                        className="btn btn-light text-dark shadow-sm mt-1 me-2 rounded-pill"
                                        href={mycv}
                                        target="_blank"
                                    >
                                        Download CV
                                    </a>
                                    <a
                                        className="btn btn-success shadow-sm mt-1 rounded-pill"
                                        href="#contact"
                                    >
                                        Hire Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4 px-3 px-lg-4 mt-1">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="h3 mb-3">About Me</h2>
                                <p>{info.description}</p>
                            </div>
                            <div className="col-md-6">
                                <div className="row mt-2">
                                    <div className="col-sm-4">
                                        <div className="pb-1">Birthday</div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="pb-1 text-secondary">
                                            {info.birthday}
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="pb-1">Email</div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="pb-1 text-secondary">
                                            {info.email}
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="pb-1">Phone</div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="pb-1 text-secondary">
                                            {info.phone}
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="pb-1">Address</div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="pb-1 text-secondary">
                                            {info.address}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="px-3 px-lg-4">
                        <h2 className="h3 mb-3">Programing Language</h2>
                        <div className="row">
                            <div className="col-md-6">
                                {programingLanguage.map((item, index) => (
                                    <Language key={index} item={item} />
                                ))}
                            </div>
                            <div className="col-md-6">
                                {database.map((item, index) => (
                                    <Language
                                        className={"bg-success"}
                                        key={index}
                                        item={item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="px-3 px-lg-4">
                        <h2 class="h3 mb-4">Work Experience</h2>
                        <div class="timeline">
                            {experiences.map((item, index) => (
                                <Experience key={index} item={item} />
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className="px-3 px-lg-4">
                        <h2 className="h3 mb-3">Education And Training</h2>
                        <div>
                            <div class="h5 mb-1">{education.school}</div>
                            <div class="text-muted text-small mb-2">
                                {education.time}
                            </div>
                            <div>{education.major}</div>
                        </div>
                    </div>
                    <hr />
                    <div className="px-3 px-lg-4">
                        <h2 className="h3 mb-3">Certifications</h2>
                        <Item left={certifications[0]} right={certifications[1]}/>
                    </div>
                    <hr />
                    <div className="px-3 px-lg-4">
                        <h2 className="h3 mb-3">Skills</h2>
                        <Item left={skills[0]} right={skills[1]}/>
                        <Item left={skills[2]} right={skills[1]}/>
                    </div>
                    <hr />
                    <div className="px-3 px-lg-4 pb-4">
                        <h2 className="h3 mb-3">Hobbies</h2>
                        <Item left={hobbies[0]} right={hobbies[1]}/>
                        <Item left={hobbies[2]} right={hobbies[1]}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
