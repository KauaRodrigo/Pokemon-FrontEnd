<script setup>
import {api} from '../api.service'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const emits = defineEmits(['set'])
let pokemon = {}

onMounted(async () => {    
    pokemon = await api.get('/').then((res) => {
        return res.data
    })
    console.log(pokemon)
})

function redirect(){
    router.push('/')
}

function set(){
    emits('set')
}

</script>
<template>
    <div class="signin">
        <form>            
            <label>E-mail</label>
            <input class="input" type="email" name="email" placeholder="What's your email address">        
            <label>Password</label>
            <input class="input" type="password" name="password" placeholder="shhhhhhhh!">                    
            <button @click="redirect" type="button">Logar</button>
            <a class="haveAccount" @click="set">Não tem uma conta?</a>
        </form>        
    </div>
</template>
<style scoped>

.signin{
    min-height: 100vh;
    width: 50vw;
    margin-left: auto;    
    display: grid;
    border-right: 8px solid black;
    place-items: center;
}

button {
    width: 60%;
    padding: 0.4rem;
    margin-top: 2rem;
  }
  
  button:hover {
    color: white;
    background-color: rgb(216, 32, 32);
    transition: color 0.5s, background-color 0.5s;
  }
  
  .haveAccount {
      color: rgb(72, 72, 248);
      display: block;
      text-decoration: none;
      cursor: pointer;
  }
  
  form {    
      width: 60%;  
      border: 2px solid gray;
      border-radius: 20px;
      padding: 2rem;
  }
  
  .input {
      width: 70%;
      padding: 0.4rem;
      border: 2px solid rgba(0,0,0, 0.5);
      border-radius: 20px;
  }
  
  label {
      color: black;
      font-size: 18px;
      font-weight: 600;
      display: block;
  }

</style>