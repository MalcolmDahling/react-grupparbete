import './Home.scss';

export function Home(){

    return(
        <>
        <hr></hr>
            <h1 className="Meny-text">-MENY-</h1>
            <div className='Food'>
            
            <h1 className="Title-text">-Hamburgare-</h1>
            <div className="bordern">
            <div className="Food-text">
                <img src="img/Hamburgare.png" alt="hamburgare" />
                <br></br>
                <p className="description">En burgare med 150 gr högrevsburgare, ost, bacon, smörgåsgurka, picklad rödlök, 4Guys hamburgerdressing, sallad och tomat. </p>
                <p><b>Pris: 175 kr</b></p>
                </div>
            </div>
            <br></br>
            <div className="Food-text">
            <h1>-Plankstek-</h1>
            <div className="bordern">
                <img src="img/Plankstek.png" alt="plankstek" />
                <br></br>
                <p className="description">Duchesspotatis, 250gr oxfile serveras med baconlindadsparris, bearnaisesås och tomat </p>
                <p><b>Pris: 225 kr</b></p>
            </div></div>
            <br></br>
            <div className="Food-text">
            <h1>-Köttfärsås-</h1>
            <div className="bordern">
                <img src="img/Köttfärssås.png" alt="köttfärssås" />
                <br></br>
                <p className='description'>En klassisk pastarätt som serveras med 4Guys egna recept på köttfärssås, och riven permesan.</p>
                <p><b>Pris: 159 kr</b></p>
            </div></div>
            <br></br>
            
            <div className="Food-text">
            <h1>-Sushi-</h1>
            <div className="bordern">
                <img src="img/Sushi.png" alt="sushi" />
                <br></br>
                
                <p className="description">2 lax, 1 halstrad lax, 1 lax-ål-avokado, 1 räka, 1 hiramasa, 1avokado, 1 maki, 1 maki med laxröra12 bitar </p>
                <p><b>Pris: 9 bitar 159 kr</b></p>
                
                <p className="description"> 2 lax, 1 halstrad lax, 1 lax-ål-avokado, 1 räka, 1 hiramasa, 1avokado, 1 maki, 1 maki med laxröra12 bitar </p> 
                <p><b>Pris: 12 bitar 199 kr</b></p>
                </div>
                <br></br>
            </div></div>
            <h1 className='drycks-meny'>-Drycker-</h1>
            <div className="bordern">
            <div className='drycker'>
            <p>Fanta Apelsin<br></br>Exotic<br></br>FreeLemon</p>	
            <img src="img/fanta.jpg" className="fanta" alt="Fanta"/>
            <p>50cl <b>25 kr</b> </p>
            </div>
            <br></br>
            <div className="bordern">
            <p>Cocacola/zero</p>	
            <img src="img/cocacola.jpg" alt="Coca-cola"/>	
            <p>50 cl <b>25 kr</b> </p>
            </div><br></br>
            <div className="bordern">
            <p>Champagne (Pol Roger Brut Réserve)</p>
            <img src="img/champange.jpg" alt="Champange"/>	
            <p>1 glas <b>159 kr</b></p> 
            </div>
            <br></br>
            <div className="bordern">
            <p>Bourbone</p>		
            <img src="img/bourbon.jpg" alt="Bourbon"/>
            <p>6cl <b>100kr</b></p>
            </div>
            <br></br>
            </div>
          
        </>
    );
}