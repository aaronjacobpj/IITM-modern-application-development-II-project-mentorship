<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
            Modern Application Development II
        </a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" v-bind:style="navStyle">
            <ul class="navbar-nav" v-bind:style="navStyle">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Weeks
                    </a>
                    <ul class="dropdown-menu" v-bind:style="navStyle">
                        <li>
                            <router-link class="dropdown-item" v-for="(week, index) in this.$store.state.weeks"
                                v-bind:to="'/week/'+index" v-bind:style="navStyle">
                                Week {{ index }}
                            </router-link>
                        </li>
                    </ul>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="#week1">Week 1</a>
                </li> -->
            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        data(){
            return {
                navStyle: {
                    backgroundColor: "rgb(33,37,41)",
                    color: "white"
                },
                weeks: [1, 2]
            }
        }
    }
</script>