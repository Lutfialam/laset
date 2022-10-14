import { defineStore } from 'pinia';

const initialState = {
  id: '',
  name: '',
  email: '',
  password: '',
  level: '',
};

export const useUserState = defineStore('userState', {
  state: () => initialState,
  getters: {
    getUser: (state) => state,
  },
  actions: {
    resetUser() {
      this.$reset;
    },
  },
});
