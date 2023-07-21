import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            weeks: [{title: "Vue"},
                {title: "Vue Routing, Store, RBAC and Token Authentication"},
                {title: "Backend Jobs and Caching"}
            ]
        }
    }
})

export default store;