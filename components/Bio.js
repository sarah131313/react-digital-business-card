import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Button() {
    return (
        <main class="bio">
            <div className="bio-btn">
                
                    <button className="email">
                        <a href="#"><i className="fa-solid fa-envelope"></i></a>
                        Email
                    </button>
              
                
                    <button className="linkedin">
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        LinkedIn
                    </button>
               
            </div>
            <div className="info">
                <h2>About</h2>
                <p>
                        I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                
               
                <h2>Interests</h2>
                <p>
                        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
                
            </div>
        </main>
    )
}
