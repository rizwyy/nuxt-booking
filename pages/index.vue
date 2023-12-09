<template>
  <div
    class="h-[20vh] flex items-center justify-between gap-[2vh] bg-blue-950 px-[4vw]"
  >
    <h2 class="text-yellow-100 text-[4vh]">Riz Carlton</h2>
    <span class="text-[#ffffff61] tracking-widest">BOOKING</span>
  </div>
  <div
    class="h-[80vh] w-screen max-[800px]:flex-col max-[800px]:gap-[5vh] flex items-center justify-center bg-blue-900"
  >
    <p class="text-white">
      → &nbsp;
      {{
        userStore.room === ""
          ? "Please select a room"
          : userStore.room === "TRV"
          ? "The Riz Villa"
          : "The Royal Orchid"
      }}
      <br />
    </p>
    <form
      class="max-[800px]:flex-col max-[800px]:gap-[8vh] flex justify-evenly w-[40%] text-[#fffffc]"
      method="POST"
    >
      <select class="bg-inherit border-b-2" v-model="userStore.room">
        <option value="TRV">The Riz Villa</option>
        <option value="TRO">The Royal Orchid</option>
      </select>
      <button
        class="bg-blue-400 text-yellow-100 py-[2vh] px-[4vw] hover:bg-blue-500 hover:scale-[.9] duration-150 ease-in-out rounded-md"
        @click.prevent="handleSubmit"
      >
        Check
      </button>
    </form>
    <Transition v-show="userStore.availableModal">
      <UModal
        class="absolute h-[10vh] max-[800px]:w-screen w-[40vw] bg-green-500 right-0 top-[20vh] rounded-md flex justify-evenly"
      >
        <div class="h-full w-[25%] flex items-center pl-[10%]">
          <img
            @click="resetStateOnClick"
            src="/IcRoundDoneOutline.svg"
            class="h-[40%]"
            alt="done"
          />
        </div>
        <div class="h-full w-[75%] flex items-center pr-[10%] text-yellow-50">
          <span>Your Room is Available</span>
        </div></UModal
      ></Transition
    >
    <Transition v-show="userStore.notAvailableModal">
      <UModal
        class="absolute h-[10vh] max-[800px]:w-screen w-[40vw] bg-red-500 right-0 top-[20vh] rounded-md flex justify-evenly"
      >
        <div class="h-full w-[25%] flex items-center pl-[10%]">
          <img
            @click="resetStateOnClick"
            src="/closeIcon.svg"
            class="h-[40%]"
            alt="done"
          />
        </div>
        <div class="h-full w-[75%] flex items-center pr-[10%] text-yellow-50">
          <span>Sorry, Not Available</span>
        </div></UModal
      ></Transition
    >
  </div>
</template>

<script setup>
import { Transition } from "vue";
import useUserStore from "../stores/user";

const userStore = useUserStore();
function resetStateOnClick() {
  userStore.availableModal = false;
  userStore.notAvailableModal = false;
}

async function handleSubmit() {
  resetStateOnClick();
  try {
    const data = await useFetch(`https://nuxtbooking.vercel.app/api/users`, {
      method: "POST",
      body: {
        room: userStore.room,
      },
      server: false,
    });
    userStore.data = data;
    if (data.data._value === "ERR404") {
      alert("please select a room to check");
      return;
    }
    if (data.data._value) {
      userStore.availableModal = true;
    } else {
      userStore.notAvailableModal = true;
    }
  } catch (e) {
    console.log("🔴", e);
  }
}
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
