<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { v4 as uuidv4 } from 'uuid'
import { useUserStore } from '../stores/userStore'
import { storeToRefs } from 'pinia';

onMounted(() => {
    console.log(userStore)
})

const router = useRouter()
const emits = defineEmits(['set'])

const userStore = useUserStore()

const { email, password } = storeToRefs(userStore)

const emailInput = ref()
const passwordInput = ref()
const emailErr = ref()
const passwordErr = ref()

function login(){    
    emailErr.value = ''
    passwordErr.value = ''
    emailInput.value ? emailInput.value == userStore.userTest.email ? userStore.getEmail(emailInput.value) : emailErr.value = 'O e-mail informado não é valido!' : emailErr.value = 'Email não informado!'
    passwordInput.value ? passwordInput.value == userStore.userTest.password ? userStore.getPassword(passwordInput.value) : passwordErr.value = 'A senha informada está incorreta' : passwordErr.value = 'Senha não informada!'    
    if(!passwordErr.value && !emailErr.value) {
        localStorage.setItem('access-key', uuidv4())
        router.push({name: 'Inicio'})
    }
}

function set(){
    emits('set')
}

</script>
<template>
    <div id="signin-section">
        <form>            
            <label>E-mail</label>
            <input class="input" id="email-input" type="email" v-model="emailInput" name="email" placeholder="What's your email address">        
            <p class="messages" id="emailError">{{ emailErr }}</p>
            <label>Password</label>
            <input class="input" id="password-input" type="password" v-model="passwordInput" name="password" placeholder="shhhhhhhh!">                    
            <p class="messages" id="passwordError">{{ passwordErr }}</p>
            <button id="login-btn" @click="login" type="button">Logar</button>            
            <a id="have-account-link" @click="set">Não tem uma conta?</a>
        </form>        
    </div>
</template>
<style scoped>

#signin-section{
    min-height: 100vh;
    width: 50vw;
    margin-left: auto;    
    display: grid;
    border-right: 8px solid black;
    place-items: center;
}

.messages {    
    color: red;
    font-size: 14px;    
}

b {
    font-weight: 700;
    color: black;
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
  
  #have-account-link {
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