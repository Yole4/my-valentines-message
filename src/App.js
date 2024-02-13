import { useState } from "react";
import "./index.css";

function App() {

  const [message, setMessage] = useState(false);
  return (
    <>
      <div onClick={() => setMessage(false)}>
        {/* <div style={{textAlign: 'center'}}>
          <a style={{ zIndex: '5', position: 'absolute' }} href="sample.com" target="_blank">View Message</a>
        </div> */}
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <h1 >Happy Valentine's Day!</h1>
        </div>
        <div className="envelope-wrapper">
          <div id="envelope" className="close" >
            <div className="front flap" />
            <div className="front pocket" />
            <div className="letter">
            <a style={{position: 'absolute', top: '2px', right: '2px', fontSize: '12px'}} href="#" onClick={(e) => {setMessage(true); e.stopPropagation()}} >View Message</a>
              <div style={{ padding: '20px 20px 14px 14px' }}>
                <span>Dear: </span><a href="https://www.facebook.com/maracrislumactod.ugdal" target="_blank">Mara Cris L. Ugdal</a>
              </div>
              <div style={{ fontSize: '15px', paddingLeft: '14px' }}>
                <span>
                  Hi bb Happy Valentines Day😊❤️
                </span>
              </div>
              {/* <p className="words line2">Hi, it's me eloy hahaha unsaon pag start? hahaha wait sa huna2x sako.. ays mmmmm i love you hehehe, btaw bb happy valentines day i do hope nga happy ka even nga wala ko sa valentines day.. bawi rako pag naay chance hehehe.. anyway thank you so much sa tanan2x speacially sa pag stay nako even feel nako dle ko deserve e love hahaha, but ni stay ra ghapon ka, and thank sad nga naa kay anytime nga naa koy problema ka share-ran or nag need kog tabang ect. basta thank you, thank you sa tanan.. and i do hope nga dle ka ma usob og dle ta ma usob kung unsa ta karon even dle kaayo ko maka reply nmo i hope nga maka sabot raka, i know daghan kag naa sa mind nmo like "nag unsa kaha ni cya dle man ka reply?", "asa kaha ni cya?", "love paba kaha ko ani nya?", "murag g baliwala raman ko" ect. bb all i can say is i love you more and more sorry kung dle ko ka reply or update nmo sorry kung napasakitan tka sorry kung nag overthink ka, basta bb keep in you mind nga love tka.. ayaw og ka hadlok nga ma wala ko kay mo stay rako nmo for the rest of your life hehehe.. ako gani ang nakabahan kay bacn nyag ikaw ang ma change hahaha, basta bb as long as where you happy or where you can see your self happy then goo i will support you always what i always said.. but i hope nga you know the limitations hehehe.. and again happy happy valentines bb.. more valentines day to come and enjoy your day without me hehehe.. i love you so much bb</p> */}

              <div style={{textAlign: 'center', padding: '10px'}}>
                <span>Eloy</span>
                <hr style={{width: '50px', marginTop: '0', marginBottom: '0'}} />
                <span>From</span>
              </div>
            </div>
            <div className="hearts">
              <div className="heart a1" />
              <div className="heart a2" />
              <div className="heart a3" />
            </div>
          </div>
        </div>
        <div className="reset">
          <button id="open">Open</button>
          <button id="reset">Reset</button>
        </div>
      </div>
      {message && (
        <div onClick={(e) => e.stopPropagation()} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', height: '260px', width: '400px', overflow: 'auto', zIndex: '99999', backgroundColor: 'white', borderRadius: '10px' }}>
          
          <div style={{ padding: '20px 20px 5px 20px' }}>
            <span>Eloy's Message</span>
          </div>
          <div style={{ padding: '0px 20px 5px 30px' }}>
            <p style={{ textAlign: 'justify' }}>Hi, it's me eloy hahaha unsaon pag start? hahaha wait sa huna2x sako.. ays mmmmm i love you hehehe, btaw bb happy valentines day i do hope nga happy ka even nga wala ko sa valentines day.. bawi rako pag naay chance hehehe.. anyway thank you so much sa tanan2x speacially sa pag stay nako even feel nako dle ko deserve e love hahaha, but ni stay ra ghapon ka, and thank sad nga naa kay anytime nga naa koy problema ka share-ran or nag need kog tabang ect. basta thank you, thank you sa tanan.. and i do hope nga dle ka ma usob og dle ta ma usob kung unsa ta karon even dle kaayo ko maka reply nmo i hope nga maka sabot raka, i know daghan kag naa sa mind nmo like "nag unsa kaha ni cya dle man ka reply?", "asa kaha ni cya?", "love paba kaha ko ani nya?", "murag g baliwala raman ko" ect. bb all i can say is i love you more and more sorry kung dle ko ka reply or update nmo sorry kung napasakitan tka sorry kung nag overthink ka, basta bb keep in you mind nga love tka.. ayaw og ka hadlok nga ma wala ko kay mo stay rako nmo for the rest of your life hehehe.. ako gani ang nakabahan kay bacn nyag ikaw ang ma change hahaha, basta bb as long as where you happy or where you can see your self happy then goo i will support you always what i always said.. but i hope nga you know the limitations hehehe.. and again happy happy valentines bb.. more valentines day to come and enjoy your day without me hehehe.. i love you so much bb</p>
          </div>

          <div style={{ textAlign: 'right', paddingRight: '20px' }}>
            <a href="https://www.facebook.com/eloy.paglinawan">Shelo Mora Paglinawan</a><br />
            <span style={{ marginRight: '65px' }}>From</span>
          </div>

          <button onClick={() => setMessage(false)} style={{ background: '#007bff', border: 'none', padding: '10px', borderRadius: '5px', marginLeft: '20px' }}>Close</button>
        </div>
      )}
    </>
  );
}

export default App;
