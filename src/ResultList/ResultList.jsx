import styles from './ResultList.module.css'
import articleStore from "../stores/article-store";
import {ResultItem} from "../ResultItem/ResultItem";
import {observer} from "mobx-react-lite";

export const ResultList = observer(() => {

    const {links, titles, isLoading} = articleStore;


    return (
        <div className={styles.results} data-isloading={isLoading}>
            <div id="results" className={styles.items}>{links.map((link, index) => {
                return (<ResultItem key={index} link={link} title={titles[index]}/>)
            })}</div>
        </div>
    )
});
