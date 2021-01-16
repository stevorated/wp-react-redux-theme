import { combineReducers } from 'redux';

import posts from './posts.reducer';
import menu from './menu.reducer';
import tags from './tag.reducer';
import cat from './cat.reducer';
import comments from './comments.reducer';
import routerMatch from './routerMatch.reducer';
import totalPosts from './totalPosts.reducer';

export default combineReducers({
    posts,
    totalPosts,
    menu,
    tags,
    cat,
    comments,
    routerMatch,
});
