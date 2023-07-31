<script setup>
    import { RouterLink } from "vue-router"
</script>


<template>
    <div class="container-fluid" style="padding:2% 2%;">
        <h1>
            Miscellaneous
        </h1>
        <div v-for="topic in topics" style="margin-top: 2.5%;">
            <h3>
                {{ topic["title"] }}
            </h3>
            <ul style="padding-top: 1%;">

                <li >
                    <RouterLink v-bind:to="{name: 'notes', params:{nweek: 0}}">
                        Notes
                    </RouterLink> 
                </li>
                <li v-if="topic['slides']">
                    <a v-bind:href="`/weeks/slides/${topic['slides']}.pdf`" @click="dowload_file">
                        Slides
                    </a>
                </li>
                <li v-if="topic['source_codes']">
                    <a v-bind:href="`/weeks/source_codes/${topic['source_codes']}.zip`" @click="dowload_file">
                        Source Code
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                topics: [{title: "Conditional client side routing", slides: null, source_codes: "miscellaneous"},
            
                ]
            }
        },
        methods: {
            dowload_file(event){
                event.preventDefault();
                open(event.target.href);
            }
        }
    }
</script>