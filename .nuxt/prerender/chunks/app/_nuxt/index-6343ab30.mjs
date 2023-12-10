import { p as publicAssetsURL } from '../../renderer.mjs';
import { resolveComponent, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/rizwin/rizboo/node_modules/vue/index.mjs';
import { ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/rizwin/rizboo/node_modules/vue/server-renderer/index.mjs';
import { d as defineStore } from '../server.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/h3/dist/index.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/devalue/index.js';
import 'file:///Users/rizwin/rizboo/node_modules/ufo/dist/index.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/destr/dist/index.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/hookable/dist/index.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/scule/dist/index.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/klona/dist/index.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/defu/dist/defu.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/ohash/dist/index.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/radix3/dist/index.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/mongoose/index.js';
import 'node:fs';
import 'node:url';
import 'file:///Users/rizwin/rizboo/node_modules/pathe/dist/index.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/unhead/dist/index.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/unctx/dist/index.mjs';
import 'file:///Users/rizwin/rizboo/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + publicAssetsURL("IcRoundDoneOutline.svg");
const _imports_1 = "" + publicAssetsURL("closeIcon.svg");
const useUserStore = defineStore("user", {
  state: () => ({
    data: "",
    room: "",
    availableModal: false,
    notAvailableModal: false
  })
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    function resetStateOnClick() {
      userStore.availableModal = false;
      userStore.notAvailableModal = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = resolveComponent("UModal");
      _push(`<!--[--><div class="h-[20vh] flex items-center justify-between gap-[2vh] bg-blue-950 px-[4vw]"><h2 class="text-yellow-100 text-[4vh]">Riz Carlton</h2><span class="text-[#ffffff61] tracking-widest">BOOKING</span></div><div class="h-[80vh] w-screen max-[800px]:flex-col max-[800px]:gap-[5vh] flex items-center justify-center bg-blue-900"><p class="text-white"> \u2192 \xA0 ${ssrInterpolate(unref(userStore).room === "" ? "Please select a room" : unref(userStore).room === "TRV" ? "The Riz Villa" : "The Royal Orchid")} <br></p><form class="max-[800px]:flex-col max-[800px]:gap-[8vh] flex justify-evenly w-[40%] text-[#fffffc]" method="POST"><select class="bg-inherit border-b-2"><option value="TRV"${ssrIncludeBooleanAttr(Array.isArray(unref(userStore).room) ? ssrLooseContain(unref(userStore).room, "TRV") : ssrLooseEqual(unref(userStore).room, "TRV")) ? " selected" : ""}>The Riz Villa</option><option value="TRO"${ssrIncludeBooleanAttr(Array.isArray(unref(userStore).room) ? ssrLooseContain(unref(userStore).room, "TRO") : ssrLooseEqual(unref(userStore).room, "TRO")) ? " selected" : ""}>The Royal Orchid</option></select><button class="bg-blue-400 text-yellow-100 py-[2vh] px-[4vw] hover:bg-blue-500 hover:scale-[.9] duration-150 ease-in-out rounded-md"> Check </button></form>`);
      _push(ssrRenderComponent(_component_UModal, { class: "absolute h-[10vh] max-[800px]:w-screen w-[40vw] bg-green-500 right-0 top-[20vh] rounded-md flex justify-evenly" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full w-[25%] flex items-center pl-[10%]"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="h-[40%]" alt="done"${_scopeId}></div><div class="h-full w-[75%] flex items-center pr-[10%] text-yellow-50"${_scopeId}><span${_scopeId}>Your Room is Available</span></div>`);
          } else {
            return [
              createVNode("div", { class: "h-full w-[25%] flex items-center pl-[10%]" }, [
                createVNode("img", {
                  onClick: resetStateOnClick,
                  src: _imports_0,
                  class: "h-[40%]",
                  alt: "done"
                })
              ]),
              createVNode("div", { class: "h-full w-[75%] flex items-center pr-[10%] text-yellow-50" }, [
                createVNode("span", null, "Your Room is Available")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, { class: "absolute h-[10vh] max-[800px]:w-screen w-[40vw] bg-red-500 right-0 top-[20vh] rounded-md flex justify-evenly" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full w-[25%] flex items-center pl-[10%]"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="h-[40%]" alt="done"${_scopeId}></div><div class="h-full w-[75%] flex items-center pr-[10%] text-yellow-50"${_scopeId}><span${_scopeId}>Sorry, Not Available</span></div>`);
          } else {
            return [
              createVNode("div", { class: "h-full w-[25%] flex items-center pl-[10%]" }, [
                createVNode("img", {
                  onClick: resetStateOnClick,
                  src: _imports_1,
                  class: "h-[40%]",
                  alt: "done"
                })
              ]),
              createVNode("div", { class: "h-full w-[75%] flex items-center pr-[10%] text-yellow-50" }, [
                createVNode("span", null, "Sorry, Not Available")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-6343ab30.mjs.map
