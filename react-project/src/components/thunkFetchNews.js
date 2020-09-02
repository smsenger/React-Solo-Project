import { newsApiPending, newsApiSuccess, newsApiError } from '../redux/actions/newsactions';

function fetchNews(e) {
  e.preventDefault()
  return dispatch => {
    dispatch(newsApiPending());
    fetch(`http://newsapi.org/v2/everything?q=${this.state.search}&sortBy=publishedAt&apiKey=2a93b91867864809bc472f1ded214c3e`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(newsApiSuccess(res.news));
        return res.news;
      })
      .catch(error => {
        dispatch(newsApiError(error));
      })
  }
}

// function handleChange (e) {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     })
//   }

export default fetchNews;