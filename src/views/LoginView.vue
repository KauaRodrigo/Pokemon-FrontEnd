<script setup>
import { ref } from 'vue'
import Login from '../components/Login.vue'
import Registrar from '../components/Registrar.vue'


let login = $ref()

function signin(){
    login = false
}

function signup(){
    login = true
}

</script>
<template>
    <section class="login">
        <Login @set="signup" :class="{'show': login}" />
        <Registrar @set="signin" :class="{'show': !login}" />
        <div :class="{'active-login': login, 'active-registro': !login}" class="active" />        
    </section>    
</template>
<style>

.login {
    width: 100vw;
    height: 100vh;   
    display: flex; 
}

.active {
    background-color: rgb(216, 32, 32);    
    width: 50vw;
    height: 100vh;
    position: absolute;
    z-index: 1000;    
    left: 0;
}

.active-login {
    transition: margin-left 1s;
    margin-left: 0%;
}

.active-registro {
    transition: margin-left 1s;
    margin-left: 50%;
}

.show {
    opacity: 0;
    transition: opacity 0.5s;
}

button {    
    background-color: rgb(235,235,235);
    border: 2px solid black;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 600;    
    font-family: sans-serif;    
    cursor: pointer;   
    transition: color 0.5s, background-color 0.5s; 
}


</style>