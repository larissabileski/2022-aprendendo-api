import { defineStore } from "pinia";
import axios from "axios";

export const useSabores = defineStore("sabores", { 
    state: () => {
        return{ 
            sabores: [],
        }
    },
    actions: {
        async getSabores(){
            let res = axios.get("http://localhost:8087/sabores");
            this.sabores = res;
        }
    }
})