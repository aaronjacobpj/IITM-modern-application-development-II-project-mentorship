<script setup>
    import { RouterLink } from "vue-router"
</script>


<template>
    <div class="container-fluid" style="padding:2% 2%;">
        <h2>
            {{ week["title"] }}
        </h2>
        <ul style="padding-top: 1%;">
            <li >
                <RouterLink v-bind:to="{name: 'notes'}">
                    Notes
                </RouterLink>
            </li>
            <li v-if="week['slides']">
                <a v-bind:href="`/weeks/slides/week${$route.params.nweek}.pdf`" @click="dowload_file">
                    Slides
                </a>
            </li>
            <li v-if="week['source_codes']">
                <a v-bind:href="`/weeks/source_codes/week${$route.params.nweek}.zip`" @click="dowload_file">
                    Source Code
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
            }
        },
        methods: {
            dowload_file(event){
                event.preventDefault();
                open(event.target.href);
            }
        },
        computed: {
            week(){
                return this.$store.state.weeks[this.$route.params.nweek]
            }
        }
    }
</script>