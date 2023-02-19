<script setup>
    
</script>
<template>
    <div class="main">
        <div v-for="index in 1008" :key="index" class="card">
            <div class="head">
            
            </div>
            <!-- <div class="linha" /> -->
            <div class="foot"></div>
        </div>
    </div>
</template>
<style scoped>    
    .main {
        background: rgb(216, 32, 32, 0.7);   
        width: 100%;                        
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 50px;
        padding: 2rem 1.4rem;
        justify-content: center;
    }

    .head {
        height: 45%;
        background-color: rgba(255,255,255,0.7);       
        border-bottom: 4px solid black;         
    }

    .foot {     
        height: 55%;
        background-color: rgba(255,255,255,0.8);                
    }

    .card {
        overflow: hidden;
        height: 300px;
        width: 220px;
        border: 2px solid black;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 0;
    }    

    .linha {
        width: 100%;
        border: 2px solid black;
    }
    
</style>
