<template>
<section>
    <base-card>
        <h2>{{ fulName }}</h2>
        <h3>${{ rate }}/hour</h3>
    </base-card>
    <!-- <div>
       Details for Coaches
       <router-view></router-view>
       <router-link to="/coaches/d/contact">Contact</router-link>
    </div> -->
    </section>
    <section>
        <base-card>
            <header>
                <h2>Interested? Reach Out Now</h2>
                <base-button link :to="contactLink">Contact</base-button>
            </header>
            <router-view></router-view>
        </base-card>
    </section>
    <section>
        <base-card>
        <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        <p>{{description}}</p>
        </base-card>
    </section>
</template>

<script>
    export default {
        props:['id'],
        data() {
            return {
                selectedCoach:null
            }
        },
        computed:{
            contactLink(){
                return this.$route.path + '/' + this.id + '/contact'
            },
            fullName(){
                return this.selectedCoach.firsName + " " + this.selectedCoach.lastName
            },
            areas(){
                return this.selectedCoach.areas
            },
            rate(){
                return this.selectedCoach.hourlyRate
            },
            description(){
                return this.selectedCoach.description
            },
        },
        
        created(){
            this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach=>coach.id === this.id)
        }
    }
</script>

<style scoped>

</style>