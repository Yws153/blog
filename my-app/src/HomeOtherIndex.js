import React from 'react';
import Bundle from './Bundle';

const load = (cd) => import('./lazy').then(mod => {
    cd(mod)
})

const HomeOther = (props) => <Bundle load={load}>{(View) => <View {...props}/>}</Bundle>;

export default HomeOther


// load((mod) => {
//     const { reducer, view } = mod
//     // injectAsyncReducer(this.context.store, reducer)
//     // injectAsyncReducer(this.context, reducer)

//     if (this._isMounted) {
//         this.setState({
//             mod: view['default'] ? view['default'] : view,
//         })
//     }
// })