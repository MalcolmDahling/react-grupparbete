import './Home.scss';

export function Home(){

    return(
        <>
        <hr></hr>
            <h1 className="Meny-text">- MENY -</h1>
            <div className='Food'>
            
            <div className="Food-text">
            <h1>- Hamburgare -</h1>
                <img src="img/Hamburgare.png" alt="hamburgare" />
                <br></br>
                <p>text</p>
            </div>
            
            <br></br>
           
            <div className="Food-text">
            <h1>- Plankstek -</h1>
                <img src="img/plankstek.png" alt="plankstek" />
                <br></br>
                <p>text</p>
            </div>
            <br></br>
            
            <div className="Food-text">
            <h1>- Köttfärsås -</h1>
                <img src="/img/Köttfärsås.png" alt="kottfarssas" />
                <br></br>
                <p>text</p>
            </div>
            <br></br>
            
            <div className="Food-text">
            <h1>- Sushi -</h1>
                <img src="/img/Sushi.png" alt="sushi" />
                <br></br>
                <p>text</p>
            </div></div>
          
        </>
    );
}