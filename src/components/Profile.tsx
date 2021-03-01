import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return(
    <div className={styles.profileContainer}>
        <img src="https://avatars.githubusercontent.com/u/54548466?s=460&u=5fdbdf9c3f26222b533ff0bf614cd39e96ae0cab&v=4" 
        alt="Victória Almeida>" />
        <div> 
            <strong>Victória Almeida</strong>
            <p>
                <img src="icons/level.svg" alt="lvl" />
                Level { level }
                </p>
        </div>
    </div>
    );
}