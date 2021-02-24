import styles from '../styles/components/ChallendBox.module.css';

export function ChallendBox() {
    const hasActiveChallenge = true;

    return (
        <div className={styles.challendBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challendActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minuntos.</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challendFailedButton}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challendSucceededButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challendNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de level completando desafios.
                </p>
                    </div>
                )}
        </div>
    );
}