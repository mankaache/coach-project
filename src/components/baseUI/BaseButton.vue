<template>
<button v-if="!link" :class="mode">
    <slot></slot>
</button>
<router-link v-else :to="to" :class="mode">
    <slot></slot>
</router-link>
</template>

<script>
    export default {
        props:{             // ['link','to']
        mode:{
            type:String,
            required:false,
            default:null
        },
            link:{
                type:Boolean,
                required:false,
                default:false
            },
            to:{
             type: String,
            required:false,
            default:'/'
            }
        }
    }
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #1a8d2d;
  background-color: #1a8d2d;
  border: 1px solid ;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #8eccf5;
  color:#444;
  border-color: #064210;
}

.flat {
  background-color: transparent;
  color: #064210;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #064210;
  color: #064210;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #bed8ad;
}
</style>