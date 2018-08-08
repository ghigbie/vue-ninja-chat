<template>
    <div class="new-message">
        <h2>New Message</h2>
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to add)</label>
            <input type="text" name="new-message" />
            <p class="red-text" v-if="feedback">{{ feedback }}</p>
            <button class="btn teal">Send Message</button>
        </form>

    </div>
</template>

<script>
import db from '@/firebase/init';

export default {
    name: 'NewMessage',
    props: ['name'],
    data(){
        return{
            newMessage: null,
            feedback: null
        };
    },
    methods:{
        addMessage(){
            if(this.newMessage){
                this.feedback = null;
                db.collection('message').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err);
                });
                this.newMessage = null;
            }else{
                this.feedback = 'Please enter a message to chat : )'
            }
        }
    }
}
</script>

<style scoped>

</style>


