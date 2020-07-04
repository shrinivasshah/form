import React from 'react';
import {Link} from 'react-router-dom';
function Picktopic({course, addCourse}) {

    let topics = ['Python','React','Vue','GoLang']
    return (<div className="topic container">
            <h3>Choose Your Course</h3>
            <ul>
                {topics.map((topic) => {
                    let spanClass = topic === course ? "active" : "";
                    return (
                        <li
                            key={topic}
                            onClick={() => addCourse(topic)}
                        >
                            <span className={spanClass}>{topic}</span>
                        </li>
                    );
                })}
            </ul>

            {course && (
                <div
                    className="next">
                    <Link to="/thanks">
                        <button>
                            Next
                        </button>
                    </Link>
                </div>
            )}
        </div>

        
    )
}

export default Picktopic
