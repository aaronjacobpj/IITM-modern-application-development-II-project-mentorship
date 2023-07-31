import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            weeks: [{title: "Vue", slides: true, source_codes: true},
                {title: "Vue Routing, Store, RBAC and Token Authentication", slides: true, source_codes: true},
                {title: "Backend Jobs and Caching", slides: false, source_codes: true}
            ]
        }
    }
})

export default store;