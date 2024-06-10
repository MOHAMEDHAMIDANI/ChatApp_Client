<template>
  <MainLay>
    <div class="grid grid-cols-11">
      <ContactSlide />
      <div
        class="col-start-4 flex flex-col items-center justify-between col-end-13 shadow-lg rounded-lg justify-self-center w-[90%] max-h-[750px] h-[650px] py-5 mt-10"
      >
        <div class="w-full h-14 px-5 flex items-center justify-between">
          <div class="w-[20%] h-[90%] flex justify-evenly items-center">
            <div class="w-full flex justify-between items-center h-full">
              <div class="size-9 rounded-full relative">
                <span
                  class="absolute size-2 bg-green-500 top-0.5 right-0.5 rounded-full"
                ></span>
                <img
                  src="/assets/img/105168081.jpeg"
                  alt=""
                  class="rounded-full"
                />
              </div>
              <div
                class="capitalize w-[75%] h-[85%] flex flex-col justify-evenly items-start"
              >
                <h3 class="text-sm font h-5 w-full font-normal overflow-hidden">
                  mohamed hamidani
                </h3>
                <span
                  class="text-green-400 text-xs font-medium w-full capitalize"
                >
                  online
                </span>
              </div>
            </div>
          </div>
          <div class="w-[20%] h-[90%]">
            <ul
              class="w-full h-full flex justify-around items-center *:text-mainPurple *:cursor-pointer"
            >
              <li
                class="hover:text-PurpleHover border-2 p-0.5 rounded-full border-transparent hover:border-mainYellow duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"
                  />
                </svg>
              </li>
              <li
                class="hover:text-PurpleHover border-2 p-1.5 rounded-full border-transparent hover:border-mainYellow duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20z"
                  />
                </svg>
              </li>
              <li
                class="hover:text-PurpleHover border-2 p-0.5 rounded-full border-transparent hover:border-mainYellow duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <hr class="w-[95%] border-[1.5px] border-slate-200 rounded-full" />
        <div
          class="w-full h-[95%]  flex items-center justify-center  overflow-auto"
        >
        <div class="w-[95%] h-full flex flex-col">
          <div :class=" right ? '' : ''" class=" self-start text-wrap text-black h-fit min-h-10 min-w-10 w-fit max-w-[40%] after:content-[''] relative after:w-4 after:h-5 after:bg-mainGray after:absolute after:bottom-0 after:-left-4 rounded-lg  rounded-bl-none after:rounded-l-lg  bg-mainGray p-2 m-4">
            {{ message }}
          </div>
          <div :class=" right ? '' : ''" class="self-end text-wrap text-white h-fit min-h-10 min-w-10 w-fit max-w-[40%] after:content-[''] relative after:w-4 after:h-5 after:bg-mainPurple after:absolute after:bottom-0 after:-right-4 rounded-lg  rounded-br-none after:rounded-r-lg  bg-mainPurple p-2 m-4">
            {{ message }}
          </div>
        </div>
        </div>
        <div
          class="w-[95%] h-14  flex items-center justify-evenly rounded-lg"
        >
          <div
            class="w-[90%] h-[85%] flex justify-between items-center bg-mainGray px-3 rounded-lg bg-opacity-50"
          >
            <div
              class="size-8  cursor-pointer duration-200 flex text-black hover:text-mainYellow rounded-lg justify-center items-center"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6z"/></svg>
            </div>
            <div class="w-[85%] h-full flex justify-center items-center">
              <input v-model="message" name="" id="" cols="30" rows="10" class="w-full h-[90%] outline-none bg-transparent px-1" placeholder="type your message here">
            </div>
            <div class="w-[10%] h-full flex justify-around items-center">
              <div
              class="size-8 cursor-pointer duration-200 flex text-black hover:text-mainYellow rounded-lg justify-center items-center"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M15.475 9.516c.215.8-.044 1.564-.577 1.707c-.534.143-1.14-.39-1.355-1.19c-.214-.8.045-1.564.578-1.707c.534-.143 1.14.39 1.354 1.19M9.68 11.069c.214.8-.044 1.565-.578 1.708c-.533.143-1.14-.39-1.354-1.19c-.214-.8.044-1.565.578-1.708c.533-.143 1.14.39 1.354 1.19"/><path fill="currentColor" fill-rule="evenodd" d="M14.608 2.815c-1.18.152-2.677.552-4.77 1.113c-2.095.561-3.592.964-4.689 1.422c-1.077.45-1.663.911-2.02 1.529c-.356.617-.463 1.355-.314 2.513c.152 1.18.552 2.677 1.113 4.77c.561 2.095.964 3.592 1.422 4.689c.45 1.077.911 1.663 1.529 2.02c.617.356 1.355.463 2.513.314c1.18-.152 2.677-.552 4.77-1.113c2.095-.561 3.592-.964 4.689-1.422c1.077-.45 1.663-.911 2.02-1.529c.356-.617.463-1.355.314-2.513c-.152-1.18-.552-2.677-1.113-4.77c-.561-2.095-.964-3.592-1.422-4.689c-.45-1.077-.911-1.663-1.529-2.02c-.617-.356-1.355-.463-2.513-.314m-.192-1.487c1.324-.171 2.44-.084 3.455.502c1.016.587 1.65 1.51 2.163 2.741c.502 1.201.929 2.796 1.472 4.823l.03.11c.543 2.027.97 3.621 1.136 4.912c.171 1.324.084 2.44-.503 3.455c-.586 1.016-1.508 1.65-2.74 2.163c-1.201.502-2.796.929-4.823 1.472l-.11.03c-2.027.543-3.622.97-4.912 1.136c-1.324.171-2.44.084-3.455-.503c-1.016-.586-1.65-1.508-2.163-2.74c-.502-1.201-.93-2.796-1.472-4.823l-.03-.11c-.543-2.027-.97-3.622-1.136-4.912c-.171-1.324-.084-2.44.502-3.455c.587-1.016 1.51-1.65 2.741-2.163c1.201-.502 2.796-.93 4.823-1.472l.11-.03c2.027-.543 3.622-.97 4.912-1.136M17.18 13.34a.75.75 0 0 1-.017 1.06a8.24 8.24 0 0 1-.536.476l.218.444a2.25 2.25 0 0 1-4.04 1.983l-.273-.556a8.876 8.876 0 0 1-3.8-.088a.75.75 0 1 1 .364-1.454c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.277-1.815a.75.75 0 0 1 1.06.017m-3.174 3.004l.146.298a.75.75 0 0 0 1.347-.66l-.127-.259a9.294 9.294 0 0 1-1.366.62" clip-rule="evenodd"/></svg>
            </div>
            <div
              class="size-8  cursor-pointer duration-200 flex text-black hover:text-mainYellow rounded-lg justify-center items-center"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 18q2.075 0 3.538-1.462Q17 15.075 17 13q0-2.075-1.462-3.538Q14.075 8 12 8Q9.925 8 8.463 9.462Q7 10.925 7 13q0 2.075 1.463 3.538Q9.925 18 12 18Zm0-2q-1.25 0-2.125-.875T9 13q0-1.25.875-2.125T12 10q1.25 0 2.125.875T15 13q0 1.25-.875 2.125T12 16Zm6-6q.425 0 .712-.288Q19 9.425 19 9t-.288-.713Q18.425 8 18 8t-.712.287Q17 8.575 17 9t.288.712Q17.575 10 18 10ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L8.7 3.325q.15-.15.337-.238Q9.225 3 9.425 3h5.15q.2 0 .388.087q.187.088.337.238L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21Zm16-2V7h-4.05l-1.825-2h-4.25L8.05 7H4v12Zm-8-6Z"/></svg>
            </div>
            </div>
          </div>
          <div  v-if="!message.length"
            class="w-[5%] h-[85%] hover:bg-PurpleHover cursor-pointer duration-200 flex bg-mainPurple rounded-lg justify-center items-center text-mainWhite "
          >
            <svg v-motion-slide-left
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2t2.125.875T15 5v6q0 1.25-.875 2.125T12 14m-1 6v-2.075q-2.3-.325-3.937-1.95t-1.988-3.95q-.05-.425.225-.725T6 11t.713.288T7.1 12q.35 1.75 1.738 2.875T12 16q1.8 0 3.175-1.137T16.9 12q.1-.425.388-.712T18 11t.7.3t.225.725q-.35 2.275-1.975 3.925T13 17.925V20q0 .425-.288.713T12 21t-.712-.288T11 20"
              />
            </svg>
          </div>
          <div v-else
            class="w-[5%] h-[85%] hover:bg-PurpleHover cursor-pointer duration-200 flex bg-mainPurple rounded-lg justify-center items-center text-mainWhite"
          >
          <svg v-motion-slide-right xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.82 11L8 13.17a1.1 1.1 0 0 0 1.05.3a1.12 1.12 0 0 0 .81-.74L13.44 2A1.12 1.12 0 0 0 12 .56L1.27 4.14A1.12 1.12 0 0 0 .53 5a1.1 1.1 0 0 0 .3 1l2.74 2.74l-.09 3.47ZM13.12.78L3.57 8.74"/></svg>
          </div>
        </div>
      </div>
    </div>
  </MainLay>
</template>

<script setup lang="ts">
import MainLay from "~/layouts/MainLay.vue";
const message = ref('')
const right = ref(true)

</script>

<style scoped></style>
