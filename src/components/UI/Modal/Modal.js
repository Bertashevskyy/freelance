import styles from './Modal.module.css';
import {Fragment} from "react";
import {createPortal} from "react-dom";

const Backdrop = (props) => {
    return(
        <div className={styles.backdrop} onClick={props.modalVisible}/>
    );
};

const ModalOverlay = (props) => {
    return(
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};

export const Modal = (props) => {
    return(
        <Fragment>
            {createPortal(<Backdrop modalVisible={props.modalVisible}/>, document.getElementById('overlays'))}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </Fragment>
    );
};