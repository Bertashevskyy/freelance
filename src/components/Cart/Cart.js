import styles from './Cart.module.css';
import {Modal} from "../UI/Modal/Modal";

export const Cart = (props) => {
    const tempData = [{
        id: 'c1',
        name: 'Sushi',
        amount: 2,
        price: 12.99
    }];
    return (
        <Modal modalVisible={props.modalVisible}>
            <ul className={styles['cart-items']}>
                {tempData.map(meal =>
                    <li>
                        {meal.name}
                    </li>
                )}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>12.99</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.modalVisible}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
};