import projects from "../../data/projects";
import React from "react";

export const ScreenTest: React.FC = () => {

    const HomePageItems = projects.filter((project) => project.isFeaturedHomePage);

    return (
        <div>
            <div id="section-1" className="section">
                {projects.map((project) => {
                    let title = project.title
                    let id = project.id
                    let text = project.text
                    return (

                        <div key={id}>
                            <h1>{title}</h1>
                            <p>{text}</p>
                        </div>
                    )
                })}
            </div>
            <div id="section-2" className="section">
                {HomePageItems.map((item) => {
                    let title = item.title
                    let id = item.id
                    let text = item.text
                    return (
                        <div key={id}>
                            <h2>{title}</h2>
                            <p>{text}</p>
                        </div>
                    )
                })}
            </div>
            <div id="section-3" className="section"></div>
        </div>
    )
}
