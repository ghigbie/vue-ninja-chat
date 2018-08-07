<template>
    <div class="chat container">
        <h2 class="center teal-text">Ninja Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages">
                    <li>
                        <span class="teal-text">Name</span>
                        <span class="grey-text text-darken-3">Message</span>
                        <span class="grey-text time">Time</span>
                    </li>
                </ul>
            </div>
            <dic class="card-action">
                <input type="text">
            </dic>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chat',
    props: ['name'],
    data(){
        return {

        };
    }

}
</script>

<style scoped>
    .chat h2{
        font-size: 2.6em;
        margin-bottom: 40px;
    }
    .chat span{
        font-size: 1.4em;
    }
    .chat .time{
        display: block;
        font-size: 1.2em;
    }
    li{
        list-style-type: none;
    }
</style>
