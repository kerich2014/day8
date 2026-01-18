import styles from './Profile.module.css'
import Button from '../ui/Button/Button'
import { useState } from 'react';

const Profile = () => {

    const [count, setCount] = useState(0);
    const buttonClick = () => {
        setCount(count + 1)
    }

    return(
        <>
            <div className={styles.profileDiv}>
                <div className={styles.imageDiv}>
                    <img className={styles.profileImage} src='/10.jpg'/>
                </div>
                <div className={styles.textDiv}>
                    <h1>Марат</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio velit dicta reprehenderit itaque necessitatibus deleniti at, et laboriosam voluptatibus fugit nesciunt totam hic ratione reiciendis ab minima sint odit?</p>
                </div>
                <Button onClick = {buttonClick}/>
                <h1>{count}</h1>
                </div>
                
        </>
    )
}
export default Profile