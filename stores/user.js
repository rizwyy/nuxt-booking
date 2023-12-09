import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
    data: "",
    room: "",
    availableModal: false,
    notAvailableModal: false,
  }),
});

export default useUserStore;
