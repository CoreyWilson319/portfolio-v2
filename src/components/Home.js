import React from 'react'
import '../App.css'
import { Card, Button } from 'react-bootstrap'
import Resume from "../resources/Resume.pdf"

const Home = () => {
    return (
        <div>
            
                <img id="portrait" src="https://avatars.githubusercontent.com/u/72322079?s=400&u=ca5a1b6ce956fce8d8945fe18e83fb98cdba8dbc&v=4"></img>
                <h1 id="name">
                    Corey Wilson
                </h1>
                <h2 id="title">
                    Software Engineer
                </h2>
                <ul class="socials">
                    <li>
                    <a target="_blank" href={Resume}>Resume</a>
                    </li>
                    <li>
                    <a target="_blank" href="https://github.com/CoreyWilson319">Github</a>
                    </li>
                    <li>
                    <a target="_blank" href="https://www.linkedin.com/in/corey-wilson-3955441b6/">LinkedIn</a>
                    </li>
                    <li>
                    <a target="_blank" href="mailto: coreywilson319@gmail.com">Coreywilson319@gmail.com</a>
                    </li>
                </ul>
            
            <div class="projects">
                <div id="card">
                <Card
                    className="mb-2"
                    border="dark"
                    text="dark"
                >
                    <Card.Img />
                    <Card.Body>
                    <Card.Title>
                        This is Project 1
                    </Card.Title>
                    <Card.Subtitle>
                        Name of Project
                    </Card.Subtitle>
                    <Card.Text>
                        Text about Project Here
                    </Card.Text>
                    <Card.Link>
                        Link to Project here
                    </Card.Link>
                    </Card.Body>
                </Card>
                </div>
                <div id="card">
                <Card
                    className="mb-2"
                    border="dark"
                    text="dark"
                >
                    <Card.Img />
                    <Card.Body>
                    <Card.Title>
                        This is Project 1
                    </Card.Title>
                    <Card.Subtitle>
                        Name of Project
                    </Card.Subtitle>
                    <Card.Text>
                        Text about Project Here
                    </Card.Text>
                    <Card.Link>
                        Link to Project here
                    </Card.Link>
                    </Card.Body>
                </Card>
                </div>
                <div id="card">
                <Card
                    className="mb-2"
                    border="dark"
                    text="dark"
                >
                    <Card.Img />
                    <Card.Body>
                    <Card.Title>
                        This is Project 1
                    </Card.Title>
                    <Card.Subtitle>
                        Name of Project
                    </Card.Subtitle>
                    <Card.Text>
                        Text about Project Here
                    </Card.Text>
                    <Card.Link>
                        Link to Project here
                    </Card.Link>
                    </Card.Body>
                </Card>
                </div>
            </div>

        </div>
    )
}

export default Home
