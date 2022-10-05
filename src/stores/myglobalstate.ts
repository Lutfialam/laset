import { defineStore } from 'pinia';

export const useMyGlobalState = defineStore('myglobalstate', {
  state: () => ({
    myangka: 0,
  }),
  getters: {
    propAngkaDikali2: (state) => state.myangka * 2,
    propAngkaAkar2: (state) => state.myangka ** 2,
  },
  actions: {
    fnTambahinAngka() {
      this.myangka++;
    },
  },
});
