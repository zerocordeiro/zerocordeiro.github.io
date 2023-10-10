function Header(){
    return(
        <header id="header" className="header">
            <h1 className="headertitle">
                ZeroCordeiro'<sup>s</sup><br/><small>webpage</small>
            </h1>
            <div id="imageheader"></div>
            <div id="presentationtext" className="presentationtext">
                <p>
                    Hi, I'm José Cordeiro.<br/>
                    I'm creating solutions for the web.<br/>
                    <br/>
                    Let's work together! <br />
                    Learn more about me here and get in touch.
                </p>
                <div className="presentationdetail" id="presentationdetail"></div>
            </div>

        </header>
    );
}

export {Header};