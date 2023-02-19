<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["set"]);

function set() {
  emits("set");
}
</script>
<template>
  <div class="signup">
    <form>
        <label>Name</label>
        <input class="input" type="text" name="name" placeholder="What's your name?">
        <label>E-mail</label>
        <input class="input" type="email" name="email" placeholder="What's your email address">        
        <label>Password</label>
        <input class="input" type="password" name="password" placeholder="shhhhhhhh!">        
        <div class="birthday">
            <div>
                <label>Day</label>                        
                <select name="" id=""></select>
            </div>
            <div>
                <label>Month</label>
                <select name="" id=""></select>
            </div>
            <div>
                <label>Year</label>
                <select name="" id=""></select>
            </div>
        </div>
        <button type="button" >Registrar-se</button>
        <a class="haveAccount" @click="set">Já tem uma conta?</a>
    </form>
  </div>
</template>
<style scoped>
.signup {
  min-height: 100vh;
  width: 50vw;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 8px solid black;
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

.birthday {
    display: flex;    
    gap: 50px;    
}

select {
    width: 80px;    
    padding: 0.4rem;
    border: 2px solid rgba(0,0,0, 0.5);
    border-radius: 20px;
}


</style>
