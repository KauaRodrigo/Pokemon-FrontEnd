import { defineStore } from "pinia";
import { ref } from "vue"

export const useUserStore = defineStore('user', () => {
    const email = ref('')
    const password = ref('')
    const userTest = ref({
        email: 'kaua@gmail.com',
        password: 'kaua1509'
    })

    function getEmail(data) {
        email.value = data
    }
    function getPassword(data) {
        password.value = data
    }

    return { email, password, userTest, getEmail, getPassword }
})