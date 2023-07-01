import RouterLink from "vue-router"

<template>
    <div class="container-fluid" style="padding:2% 2%;">
        <h2>
            Vue
        </h2>
        <ul style="padding-top: 1%;">
            <li >
                <RouterLink v-bind:to="{name: 'Week1Notes'}">
                    Notes
                </RouterLink>
            </li>
            <li>
                <a href="/weeks/slides/week0.pdf">
                    Slides
                </a>
            </li>
            <li>
                <a href="/weeks/source_codes/week0.zip">
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
            weeks:{
                n: 2,
                headings: ['Vue', 'Flask']
            }
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