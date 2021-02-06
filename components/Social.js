
let count = 0;

function countProp (prop) {
  if (prop !== undefined) {
    count++;
  }
  return prop;
}

const Social = props => {
  
  let facebook = countProp(props.facebook);
  let twitter = countProp(props.twitter);
  let instagram = countProp(props.instagram);
  console.log(count);
  return (
    <>
    <div className="social">
      { (count == 1) ? <span>Follow us on:</span> : `` }
      
      { (!props.dark) ?
                ( facebook ? 
                  <a href={facebook.url}>
                      <img src="./assets/social/facebook.svg" alt="facebook"></img>
                  </a> 
                  : null )
                : ( facebook ? 
                  <a href={facebook.url}>
                      <img src="./assets/social/facebook_white.svg" alt="facebook"></img>
                  </a> 
                  : null ) }

      { (!props.dark) ?
                ( twitter ? 
                  <a href={twitter.url}>
                      <img src="./assets/social/twitter.svg" alt="twitter"></img>
                  </a> 
                  : null )
                : ( twitter ? 
                  <a href={twitter.url}>
                      <img src="./assets/social/twitter_white.svg" alt="twitter"></img>
                  </a> 
                  : null ) }

      { (!props.dark) ?
                ( instagram ? 
                  <a href={instagram.url}>
                      <img src="./assets/social/instagram.svg" alt="instagram"></img>
                  </a> 
                  : null )
                : ( instagram ? 
                  <a href={instagram.url}>
                      <img src="./assets/social/instagram_white.svg" alt="instagram"></img>
                  </a> 
                  : null ) }


      {/* { twitter ? 
        <a href={twitter.url}>
            <img src="./assets/social/twitter.svg" alt="twitter"></img>
        </a>
        : null }

      { instagram ? 
        <a href={instagram.url}>
            <img src="./assets/social/instagram.svg" alt="instagram"></img>
        </a>
        : null } */}

    </div>

    <style type="text/css"> {
          `
      .social {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
      }

      .social img {
        max-height: 25px;
        margin: 0 15px;
      }

      .social img:hover {
        // filter: drop-shadow(0 0px 2px pink) saturate(2);
      }

    `
    }
    </style>
    </>
    
)};

export default Social;