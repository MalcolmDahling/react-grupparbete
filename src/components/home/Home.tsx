import './Home.scss';

export function Home(){

    return(
        <>
        <hr></hr>
            <h1 className="Meny-text">-MENY-</h1>
            <div className='Food'>
            <h1 className="Title-text">-Hamburgare-</h1>
            <div className="Food-text">
                <img src="img/Hamburgare.png" alt="hamburgare" />
                <br></br>
                <p className="description">En burgare med 150 gr högrevsburgare, ost, bacon, smörgåsgurka, picklad rödlök, 4Guys hamburgerdressing, sallad och tomat. </p>
                <p><b>Pris: 175 kr</b></p>
            </div>
            <br></br>
            <div className="Food-text">
            <h1>-Plankstek-</h1>
                <img src="img/Plankstek.png" alt="plankstek" />
                <br></br>
                <p className="description">Duchesspotatis, 250gr oxfile serveras med baconlindadsparris, bearnaisesås och tomat </p>
                <p><b>Pris: 225 kr</b></p>
            </div>
            <br></br>
            <div className="Food-text">
            <h1>-Köttfärsås-</h1>
                <img src="img/Köttfärssås.png" alt="köttfärssås" />
                <br></br>
                <p className='description'>En klassisk pastarätt som serveras med 4Guys egna recept på köttfärssås, och riven permesan.</p>
                <p><b>Pris: 159 kr</b></p>
            </div>
            <br></br>
            
            <div className="Food-text">
            <h1>-Sushi-</h1>
                <img src="img/Sushi.png" alt="sushi" />
                <br></br>
                
                <p className="description">2 lax, 1 halstrad lax, 1 lax-ål-avokado, 1 räka, 1 hiramasa, 1avokado, 1 maki, 1 maki med laxröra12 bitar </p>
                <p><b>9 bitar </b></p>
                <p> <b>159 kr</b></p>
                
                <p className="description"> 2 lax, 1 halstrad lax, 1 lax-ål-avokado, 1 räka, 1 hiramasa, 1avokado, 1 maki, 1 maki med laxröra12 bitar </p> 
                <p><b>12 bitar </b></p>
                <p><b>199 kr</b></p>
            </div></div>
          
        </>
    );
}