import {makeAutoObservable} from "mobx";
import axios from "axios";

class ArticleStore {
    titles = [];
    links = [];
    inputValue = '';
    error = ''
    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    getArticles = async (value) => {
        this.setIsLoading(true)
        this.setError('')

        if (!value || value === '') {
            this.setIsLoading(false)
            return
        }

        try {
            const {data} = await axios.get(`https://ru.wikipedia.org/w/api.php?action=opensearch&search=${value}&format=json`);

            if (!Array.isArray(data)) {
                this.setIsLoading(false);
                throw new Error('Упсс.. Что-то пошло не так..')
            }

            if (data[1].length === 0) {
                this.setIsLoading(false);
                this.setTitles([])
                this.setLinks([])
                throw new Error('Ничего не найдено')

            }

            this.setTitles(data[1])
            this.setLinks(data[3])
            // Сделал так, только чтобы показать обработку загрузки.
            setTimeout(() => {
                this.setIsLoading(false);
            }, 800)
        } catch (error) {
            this.setError(error.message)
        }
    }

    setValue = (value) => {
        this.inputValue = value;
    }

    setTitles = (value) => {
        this.titles = value
    }

    setLinks = (value) => {
        this.links = value
    }

    setError = (value) => {
        this.error = value
    }

    setIsLoading = (value) => {
        this.isLoading = value
    }

}

export default new ArticleStore()
