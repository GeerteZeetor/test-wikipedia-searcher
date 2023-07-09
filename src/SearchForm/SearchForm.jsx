import styles from './SearchForm.module.css'
import articleStore from "../stores/article-store";
import {observer} from "mobx-react-lite";

export const SearchForm = observer(() => {
    const {inputValue, setValue, getArticles, error} = articleStore;

    const searchHandle = () => {
        getArticles(inputValue)
        setValue('')
    }

    return (
        <div className={styles.searchBar}>
            <input
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && searchHandle()}
                id="input"
                type="text"
                className={styles.input}
                placeholder="Search"
                autoFocus
                required
            />
            <button id="submit" type="button" className={styles.button} onClick={searchHandle}>
                <svg
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    width="15px"
                    height="15px"
                    viewBox="0 0 25 25"
                    enableBackground="new 0 0 25 25"
                >
                    <path
                        fill="#C0C0C0"
                        d="M23.888,21.266l-5.629-5.628c1.1-1.604,1.742-3.545,1.742-5.637C20.001,4.478,15.526,0,10,0
                            C4.478,0,0,4.478,0,10.001S4.478,20,10,20c2.204,0,4.233-0.721,5.885-1.927l5.598,5.597c0.717,0.718,1.838,0.761,2.5,0.097
                            C24.647,23.104,24.604,21.983,23.888,21.266z M10,16.748c-3.728,0-6.749-3.021-6.749-6.747c0-3.728,3.021-6.749,6.749-6.749c3.729,0,6.749,3.021,6.749,6.749C16.749,13.728,13.729,16.748,10,16.748z"
                    />
                </svg>
            </button>
            {error && <p id="error" className={styles.error}>{error}</p>}
        </div>
    )
});
