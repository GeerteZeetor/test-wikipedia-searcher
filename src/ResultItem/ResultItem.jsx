import styles from './ResultItem.module.css'
export const ResultItem = ({link, title}) => {
    return (
            <a href={link} target="_blank" rel="noreferrer" className={styles.item}>
                <h2 className={styles.title}>{title}</h2>
            </a>
    )
}
