import styles from "./imgrow.module.css";


const ImgRow = props => (
   
    <div className="container d-flex flex-wrap justify-content-center">
        <div className="col-sm-4 d-flex justify-content-center my-2">
            <div className={styles.img}>
                <img className="img-fluid" src={props.images.imgLeft.img} alt={props.images.imgLeft.alt}></img>
            </div>
        </div>
        <div className="col-sm-4 d-flex justify-content-center my-2">
            <div className={styles.img}>
                <img className="img-fluid" src={props.images.imgMiddle.img} alt={props.images.imgMiddle.alt}></img>
            </div>
        </div>
        <div className="col-sm-4 d-flex justify-content-center my-2">
            <div className={styles.img}>
                <img className="img-fluid" src={props.images.imgRight.img} alt={props.images.imgRight.alt}></img>
            </div>
        </div>
    </div>
);


export default ImgRow;