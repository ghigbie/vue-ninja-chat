<template>
    <div class="new-message">
        <h2>New Message</h2>
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to add)</label>
            <input type="text" name="new-message" />
        </form>

    </div>
</template>

<script>
export default {
    name: 'NewMessage',
    props: ['name'],
    data(){
        return{
            newMessage: null,
        };
    },
    methods:{
        addMessage(){
            console.log('Add message called');
            console.log(this.message);
            console.log(this.name);
            console.log(Date.now());
        }
    }
}
</script>

<style scoped>

</style>


