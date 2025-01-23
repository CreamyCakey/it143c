import images from './../assets/images/images.jpg'


 function Hero(){
    return(
        <div className="hero">
            <div className="hero-container">
                <div className="content">
                <h1>Hi I'm <span className='name'> Dave</span> Lamoste</h1>
                <h3>a Software Developer</h3>
                </div>
            </div>
            <div className="hero-containters">
                <div className="content-container">
                    <div className="img-content">
                        <img src = {images}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero