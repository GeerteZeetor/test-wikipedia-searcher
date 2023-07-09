import {SearchForm} from "./SearchForm/SearchForm";
import {ResultList} from "./ResultList/ResultList";
import {Wrapper} from "./Wrapper/Wrapper";
import {observer} from "mobx-react-lite";
import articleStore from "./stores/article-store";

const App = observer(() => {
    const { isLoading} = articleStore

    return (
        <>
            <Wrapper>
                <header>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/de/Wikipedia-logo_%28inverse%29.png"
                        alt="Wikipedia Logo"
                        width="300"
                        className="header__image"
                    />
                    <h1 className="header__title">WIKIPEDIA API</h1>
                    <SearchForm />
                </header>
            </Wrapper>
            {isLoading && <div className='loading'>Loading...</div>}
            <ResultList/>
        </>
    );
})

export default App;

