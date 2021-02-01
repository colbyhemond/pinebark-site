import styles from "./imgrow.module.css";

const ImgRow = props => (
    <div className="container d-flex flex-wrap justify-content-center">
        <div className="col-sm-4 d-flex justify-content-center my-2">
            <div className={styles.img}>
                <img className="img-fluid" src={props.img1}></img>
            </div>
        </div>
        <div className="col-sm-4 d-flex justify-content-center my-2">
            <div className={styles.img}>
                <img className="img-fluid" src={props.img2}></img>
            </div>
        </div>
        <div className="col-sm-4 d-flex justify-content-center my-2">
            <div className={styles.img}>
                <img className="img-fluid" src={props.img3}></img>
            </div>
        </div>
    </div>
);

export default ImgRow;