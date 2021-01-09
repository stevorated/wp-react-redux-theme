import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const SEARCH_POSTS = 'SEARCH_POSTS';
export const CATEGORY_POSTS = 'CATEGORY_POSTS';
export const FETCH_CAT_INFO = 'FETCH_CAT_INFO';
export const FETCH_TAG_INFO = 'FETCH_TAG_INFO';
export const FETCH_MENU = 'FETCH_MENU';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const ROUTER = 'ROUTER';

console.log(RRT_API);

const WP_API_ENDPOINT = `${RRT_API.root}${RRT_API.apiRoute}`;
const PRETTYPERMALINK_ENDPOINT = `${RRT_API.root}${RRT_API.pluginNamespace}/prettyPermalink/`;
const MENU_ENDPOINT = `${RRT_API.root}${RRT_API.pluginNamespace}/menu-locations/`;

export const fetchPosts = (
    pageNum = 1,
    post_type = 'posts',
    postsPerPage = 10
) => dispatch => {
    axios
        .get(
            `${WP_API_ENDPOINT}/${post_type}?_embed&page=${pageNum}&per_page=${postsPerPage}`
        )
        .then(response => {
            dispatch({
                type: FETCH_POSTS,
                payload: response.data,
            });
        });
};

export const fetchPostsFromTax = (
    tax = 'categories',
    taxId = 0,
    pageNum = 1,
    post_type = 'posts'
) => dispatch => {
    const url = `${WP_API_ENDPOINT}/${post_type}?_embed&${tax}=${taxId}&page=${pageNum}`;
    axios.get(url).then(response => {
        dispatch({
            type: CATEGORY_POSTS,
            payload: response.data,
        });
    });
};

export const getTaxIdFromSlug = (tax, slug) => dispatch => {
    axios.get(`${WP_API_ENDPOINT}/${tax}?slug=${slug}`).then(response => {
        switch (tax) {
            case 'tags':
                dispatch({
                    type: FETCH_TAG_INFO,
                    payload: response.data,
                });
                break;
            case 'categories':
                dispatch({
                    type: FETCH_CAT_INFO,
                    payload: response.data,
                });
                break;
        }
    });
};

export const fetchPost = prettyPermalink => dispatch => {
    axios
        .get(`${PRETTYPERMALINK_ENDPOINT}${prettyPermalink}`)
        .then(response => {
            dispatch({
                type: FETCH_POST,
                payload: [response.data],
            });
        });
};

export const fetchTaxInfo = (tax, tagIds) => dispatch => {
    axios.get(`${WP_API_ENDPOINT}/${tax}/?include=${tagIds}`).then(response => {
        dispatch({
            type: FETCH_TAG_INFO,
            payload: response.data,
        });
    });
};

export const fetchMenu = menu => dispatch => {
    axios.get(`${MENU_ENDPOINT}${menu}`).then(response => {
        dispatch({
            type: FETCH_MENU,
            payload: { items: response.data, name: menu },
        });
    });
};

export const searchSite = (term, post_type = 'posts') => dispatch => {
    axios
        .get(`${WP_API_ENDPOINT}/${post_type}?_embed&search=${term}`)
        .then(response => {
            dispatch({
                type: SEARCH_POSTS,
                payload: response.data,
            });
        });
};

export const fetchComments = postId => dispatch => {
    axios
        .get(
            `${WP_API_ENDPOINT}/comments?post=${postId}&orderby=parent&per_page=100`
        )
        .then(response => {
            dispatch({
                type: FETCH_COMMENTS,
                payload: response.data,
            });
        });
};

export const createComment = (
    params = {
        post: 0,
        parent: 0,
        author_name: '',
        author_email: '',
        content: '',
    }
) => dispatch => {
    axios({
        method: 'post',
        url: `${WP_API_ENDPOINT}/comments`,
        headers: { 'X-WP-Nonce': RRT_API.nonce },
        data: params,
    }).then(response => {
        dispatch({
            type: CREATE_COMMENT,
            payload: response.data,
        });
    });
};
