import { PopUpImages } from "./PopUpImages.jsx";


let imagensrenda=[
    'https://i.imgur.com/R4JCb9k.jpg',
    'https://i.imgur.com/Bj3tANj.jpg',
    'https://i.imgur.com/vVLBiJa.jpg',
    'https://i.imgur.com/X8wVKRm.jpg',
    'https://i.imgur.com/qcnKDSC.jpg',
    'https://i.imgur.com/HQbAMxp.jpg',
    'https://i.imgur.com/b3drtMl.jpg'
];
let imagensrestazero=[
    'https://i.imgur.com/wzKIpBU.png',
    'https://i.imgur.com/TtogsQa.png',
    'https://i.imgur.com/aWDswR2.png',
    'https://i.imgur.com/nGZlzRe.png',
    'https://i.imgur.com/0DaktGF.png'
];
let imagensstampet=[
    'https://i.imgur.com/mJ1ouOs.png',
    'https://i.imgur.com/sjSvT6L.png',
    'https://i.imgur.com/2upZ6Tz.png',
    'https://i.imgur.com/NeDrDpZ.png',
    'https://i.imgur.com/aArLYIj.png',
    'https://i.imgur.com/PMeKTrt.png',
    'https://i.imgur.com/V58KWsQ.png',
    'https://i.imgur.com/19mLzB4.png',
    'https://i.imgur.com/UBVYgIL.png',
    'https://i.imgur.com/Gpe1bwr.jpg',
    'https://i.imgur.com/4ES0Ikk.jpeg'
];
let imagensim=[
    'https://imgur.com/AjFlVXy.jpg',
    'https://imgur.com/GHaWRhx.jpg',
    'https://imgur.com/6VF7h7O.jpg',
    'https://imgur.com/6FYQmno.jpg',
    'https://imgur.com/i6c1gXD.jpg',
    'https://imgur.com/6ALUUKL.jpg'
];
let imagensinfodesign=[
    'https://imgur.com/dd8lMoP.png',
    'https://imgur.com/5rHR5yt.png',
    'https://imgur.com/ncESXny.png'
];

function MainContent(){
    return(
        <main id="main" className="main">
            <section>
                <h2 id="skillstitle">Skills</h2>
                <div id="skillscontainer" className="skillscontainer">
                    <div className="skillsitem" id="skillhtml5">HTML5</div>
                    <div className="skillsitem" id="skillcss3">CSS3</div>
                    <div className="skillsitem" id="skilljavascript">Javascript</div>
                    <div className="skillsitem" id="skillreact">React</div>
                    <div className="skillsitem" id="skilladobe">Adobe suite</div>
                </div>
            </section>

            <section>
                <h2>Experience</h2>
                <div id="experiencecontainer" className="experiencecontainer maincontainer">
                    {/* <div className="experienceitem">Junior Front-End Developer</div>
                    <div className="experienceitem">Teaching Assistant</div>
                    <div className="experienceitem"></div>
                    <div className="experienceitem">Graphic Designer IM</div>
                    <div className="experienceitem">Graphic Designer 42</div> */}
                    <details className="experiencedetails" >
                        <summary>Front-End Development</summary>
                        <p>
                            Experience as junior developer writing websites and web apps with HTML, CSS and Javascript as well as its libraries such as React. <br />
                        </p>
                    </details>
                    
                    <details className="experiencedetails" >
                        <summary>Design</summary>
                        <p>
                            My experience as graphic designer includes planning and creation of:
                            <ul>
                                <li>Websites;</li>
                                <li>Logos;</li>
                                <li>Digital illustration;</li>
                                <li>Advertising and communication pieces for print and digital media.</li>
                            </ul>
                        </p>
                    </details>
                    
                    <details className="experiencedetails" >
                        <summary>Tutoring</summary>
                        <p>
                            I've been a teaching assistant and tutor in classes dealing with digital literacy for the elderly, encompassing:
                            <ul>
                                <li>Digital media introduction;</li>
                                <li>Internet browsing and safety;</li>
                                <li>Working with colaborative tools;</li>
                                <li>Media manipulation and creation.</li>
                            </ul>  
                        </p>
                    </details>
                    
                    <details className="experiencedetails" >
                        <summary>Etc.</summary>
                        <p style={{textAlign:'left',paddingBottom:0,}}>
                        In my previous role I worked in a dynamic office environment alongside diverse teams. As the main responsible for my department, I restructured it, streamlining workflows and designing tools that significantly enhanced tracking tasks.
                        </p>
                        <p style={{textAlign:'left',paddingBottom:0,paddingTop:0}}>
                        Furthermore, working without a set routine made me hone my problem-solving skills and embrace the fast-paced nature of modern workspaces. 
                        </p>
                        <p style={{textAlign:'left',paddingTop:0}}>
                        My passion for technology and my ability to optimize processes make me a valuable candidate for IT-related positions.
                        </p>
                    </details>
                </div>
            </section>

            <section>
                <h2>Portfolio</h2>
                <div id="portfoliocontainer" className="portfoliocontainer maincontainer">
                    <details className="maindetails" >
                        <summary>GitHub</summary>
                        <p><a href="https://github.com/zerocordeiro/" target="_blank">Click here to go to my GitHub page</a> <br /><sup>(opens in new tab).</sup></p>
                    </details>
                    <details className="maindetails" >
                        <summary>Resta-Zero</summary>
                        <p>
                            A browser-based "Lights Out" style game made with React. <br /><br />
                            <PopUpImages id="imgrz" array={imagensrestazero} /> <br />
                            <a href="https://zerocordeiro.github.io/resta-zero/" target="_blank">Click here and check it now!</a> <br /><sup>(opens in new tab)</sup> <br />
                            <a href="https://github.com/zerocordeiro/resta-zero" target="_blank">See code on github.</a>
                        
                        </p>
                    </details>
                    <details className="maindetails" >
                        <summary>Renda Floripa</summary>
                        <p>
                            Website concept for a group of artisans.
                        </p>
                        <PopUpImages id="imgr"
                        array={imagensrenda}/>
                    </details>
                    <details className="maindetails" >
                        <summary>Design</summary>
                        <p>
                            Graphic Design and Visual Communication works.
                        </p>
                        <h3>Stampet</h3>
                        <p>Creation of logo, patterns for website and social media, icons and illustrations for a custom t-shirt seller.</p>
                        <PopUpImages id="imgstampet" array={imagensstampet} />
                        
                        <h3>IM Agência do Atleta</h3>
                        <p>Layout and image editing for social media advertisement, mail marketing and merchandise for a travel agency focused on sports events.</p>
                        <PopUpImages id="imgim" array={imagensim} />

                        <h3>Infodesign</h3>
                        <p>Custom fluxograms and infographics for science publications.</p>
                        <PopUpImages id="imginfodesign" array={imagensinfodesign}/>
                    </details>
                </div>
            </section>



            <section id="additionalinfo">
                <h2>Additional info</h2>
                <div id="infocontainer" className="infocontainer maincontainer">
                <p>
                    <b>Links:</b> <br />
                    <a href="http://lattes.cnpq.br/0392527294105054" target="_blank">Academical</a> <br />
                    <a href="https://forms.gle/FxRDgcStsw5HvreL9" target="_blank">Contact Form</a><br />
                    <a href="https://www.linkedin.com/in/zerocordeiro/" target="_blank">LinkedIn</a><br />
                    <a href="https://github.com/zerocordeiro/" target="_blank">My GitHub</a><br />
                </p>
                </div>
            </section>


        </main>
    );
}

export {MainContent};