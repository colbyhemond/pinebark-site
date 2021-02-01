

const Social = props => (
    <>
    <div className="social">
        <a href="https://www.facebook.com/PineBarkBoarding">
            <img src="./assets/social/facebook_box_white.svg"></img>
        </a>
        {/* <a href="">
            <img src="./assets/social/twitter.svg"></img>
        </a>
        <a href="">
            <img src="./assets/social/instagram.svg"></img>
        </a> */}
    </div>

    <style type="text/css"> {
          `
      .social {
        text-align: center;
        padding: 10px 0;
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
);

export default Social;