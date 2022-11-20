<template>
    <section>
        <base-card>
            <header>
                <h2>requests Received</h2>
            </header>
            <ul v-if="hasRequest">
                <request-item v-for="req in receivedRequest" 
                :key="req.id" 
                :message="req.message" 
                :email="req.userEmail"></request-item>
            </ul>
            <h3 v-else>you have not Received any requests yet</h3>
        </base-card>
    </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue'
    export default {
        components:{
            RequestItem
        },
        computed:{
            receivedRequest(){
                return this.$store.getters['requests/request']
            },
            hasRequest(){
                return this.$store.getters['requests/hasRequests']
            }
        }
    }
</script>


<style  scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>