<template>
    <div class="chat container">
        <h2 class="center teal-text">Ninja Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages">
                    <li v-for="(message, index) in messages" 
                        key="index">
                        <span class="teal-text">{{ messaage.name }}</span>
                        <span class="grey-text text-darken-3">{{ message.content }}</span>
                        <span class="grey-text time">{{ message.timestamp }}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name" />
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from './NewMessage';

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data(){
        return {
            messages: []
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
