import {CartIcon} from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css'
import {useContext} from "react";
import {CartContent} from "../../store/CartContent/cart-content";
export const HeaderCartButton = (props) => {

    const ctx = useContext(CartContent);

    const totalItemAmount = ctx.items.reduce((curItem, item) => {
        return curItem + item.amount;
    }, 0);

    return (
        <button className={styles.button} onClick={props.modalVisible}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{totalItemAmount}</span>
        </button>
    );
};