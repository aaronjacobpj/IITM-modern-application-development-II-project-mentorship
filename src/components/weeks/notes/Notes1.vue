<template>
    <div style="display:flex;align-items:center;justify-content:center;height:92vh">
        <h1> {{ message }} </h1>
    </div>
</template>
<script>

export default {

    data(){
        return {
            message: "Working on it",
            count: 0
        }
    },

    created(){
        setInterval(()=>{
            this.count++;
            this.message += ".";

            if(this.count == 1){
                this.message += "😁"
            }
            if(this.count > 5){
                this.message = "Working on it";
                this.count = 0;
            }
        }, 500)
    }
}
</script>