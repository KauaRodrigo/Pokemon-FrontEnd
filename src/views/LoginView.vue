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
        <div :class="{'active-login': login, 'active-registro': !login}" class="active" >        
            <img v-if="!login" :class="{'active-img': !login, 'charizard': true}" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="">
            <img v-else src="https://seeklogo.com/images/C/charmander-logo-AC289C2CDD-seeklogo.com.png" :class="{'active-img': login, 'charmander': true}" />
        </div>
    </section>    
</template>
<style>

.login {
    width: 100%;
    height: 100%;   
    display: flex; 
}

.active {
    background-color: rgb(216, 32, 32);    
    width: 50vw;
    height: 100%;
    position: absolute;
    z-index: 1000;    
    left: 0;
    display: grid;
    place-items: center;
}

.active-login {
    transition: margin-left 1s;
    margin-left: 0%;
}

.active-registro {
    transition: margin-left 1s;
    margin-left: 50%;
}

.charmander { 
    filter: drop-shadow(8px 8px 10px black);    
    transition: filter 1s;
    position: absolute;
    top: 30%;
    left: 30%;
    width: 40%;      
    opacity: 0;
    height: 40%;
}

.charizard {     
    filter: drop-shadow(8px 8px 10px black);    
    transition: filter 1s;
    position: absolute;
    top: 25%;
    left: 25%;    
    width: 50%;    
    opacity: 0;
    height: 50%;
    transition: filter 1s;
}

.active-img {    
    transition: opacity 1s;
    opacity: 1;
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