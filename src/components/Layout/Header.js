import {Fragment} from "react";
import styles from './Header.module.css'
import meals from '../../assets/meals.jpg'
import {HeaderCartButton} from "./HeaderCartButton";


export const Header = (props) => {
    return(
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton modalVisible={props.modalVisible}/>
            </header>
            <div className={styles['main-image']}>
                <img src={meals} alt="Meals"/>
            </div>
        </Fragment>
    );
};