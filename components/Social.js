
let count = 0;

function countProp (prop) {
  if (prop !== undefined) {
    if (prop.url !== ``) {
      count++;
    }
  }
  return prop;
}

const Social = props => {
  count = 0;
  let facebook = countProp(props.facebook);
  let twitter = countProp(props.twitter);
  let instagram = countProp(props.instagram);
  return (
    <>
    <div className="social">
      { (count == 1) ? <span>Follow us on:</span> : `` }
      
      { (!props.dark) ?
                ( (facebook.url !== ``) ? 
                  <a href={facebook.url}>
                      <img src="./assets/social/facebook.svg" alt="facebook"></img>
                  </a> 
                  : null )
                : ( (facebook.url !== ``) ? 
                  <a href={facebook.url}>
                      <img src="./assets/social/facebook_white.svg" alt="facebook"></img>
                  </a> 
                  : null ) }

      { (!props.dark) ?
                ( (twitter.url !== ``) ? 
                  <a href={twitter.url}>
                      <img src="./assets/social/twitter.svg" alt="twitter"></img>
                  </a> 
                  : null )
                : ( (twitter.url !== ``) ? 
                  <a href={twitter.url}>
                      <img src="./assets/social/twitter_white.svg" alt="twitter"></img>
                  </a> 
                  : null ) }

      { (!props.dark) ?
                ( (instagram.url !== ``) ? 
                  <a href={instagram.url}>
                      <img src="./assets/social/instagram.svg" alt="instagram"></img>
                  </a> 
                  : null )
                : ( (instagram.url !== ``) ? 
                  <a href={instagram.url}>
                      <img src="./assets/social/instagram_white.svg" alt="instagram"></img>
                  </a> 
                  : null ) }

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