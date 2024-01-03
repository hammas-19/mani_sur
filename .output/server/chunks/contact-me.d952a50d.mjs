import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig } from './server.mjs';
import { _ as _imports_0, a as _imports_1$1 } from './arrow.13000919.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import 'aos';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$2 = {
  name: "ContactForm",
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  mounted() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault();
      document.querySelector('input[name="name"]').value;
      document.querySelector('input[name="email"]').value;
      document.querySelector('textarea[name="message"]').value;
    });
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(mergeProps({
    id: "contact-form",
    class: "text-sm"
  }, _attrs))}><div class="flex flex-col"><label for="name" class="mb-3">_name:</label><input type="text" id="name-input" name="name"${ssrRenderAttr("placeholder", $props.name)} class="p-2 mb-5 placeholder-slate-600" required></div><div class="flex flex-col"><label for="email" class="mb-3">_email:</label><input type="email" id="email-input" name="email"${ssrRenderAttr("placeholder", $props.email)} class="p-2 mb-5 placeholder-slate-600" required></div><div class="flex flex-col"><label for="message" class="mb-3">_message:</label><textarea id="message-input" name="message"${ssrRenderAttr("placeholder", $props.message)} class="placeholder-slate-600" required></textarea></div><button id="submit-button" type="submit" class="py-2 px-4">submit-message</button></form>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      date: new Date().toDateString(),
      lines: 0
    };
  },
  props: {
    name: String,
    email: String,
    message: String
  },
  mounted() {
    this.updateLines();
    window.addEventListener("resize", this.updateLines);
    window.addEventListener("input", this.updateLines);
    window.addEventListener("click", this.updateLines);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateLines);
    window.removeEventListener("click", this.updateLines);
    window.addEventListener("input", this.updateLines);
  },
  methods: {
    updateLines() {
      const textContainer = this.$el.querySelector(".text-container");
      const style = window.getComputedStyle(textContainer);
      parseInt(style.fontSize);
      const lineHeight = parseInt(style.lineHeight);
      const maxHeight = textContainer.offsetHeight;
      this.lines = Math.ceil(maxHeight / lineHeight);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "code-container flex font-fira_retina text-menu-text" }, _attrs))}><div class="line-numbers lg:flex flex-col w-16 hidden"><!--[-->`);
  ssrRenderList($data.lines, (n) => {
    _push(`<div class="grid grid-cols-2 justify-end"><span class="col-span-1 mr-3">${ssrInterpolate(n)}</span></div>`);
  });
  _push(`<!--]--></div><div class="font-fira_retina text-white text-container"><p><span class="tag"> const </span><span class="tag-name"> button </span> = <span class="tag-name"> document.querySelector <span class="text-menu-text"> ( <span class="text-codeline-link"> &#39;#sendBtn&#39; </span> ); </span></span></p><br><p class="text-menu-text"><span class="tag"> const </span><span class="tag-name"> message </span> = { <br> \xA0\xA0 <span id="name" class="tag-name"> name </span> : <span class="text-codeline-link">&quot;</span><span id="name-value" class="text-codeline-link">${ssrInterpolate($props.name)}</span><span class="text-codeline-link">&quot;</span> , <br> \xA0\xA0 <span id="email" class="tag-name"> email </span> : <span class="text-codeline-link">&quot;</span><span id="email-value" class="text-codeline-link">${ssrInterpolate($props.email)}</span><span class="text-codeline-link">&quot;</span> , <br> \xA0\xA0 <span id="message" class="tag-name"> message </span> : <span class="text-codeline-link">&quot;</span><span id="message-value" class="text-codeline-link">${ssrInterpolate($props.message)}</span><span class="text-codeline-link">&quot;</span> , <br> \xA0\xA0 date: <span class="text-codeline-link"> &quot;${ssrInterpolate($data.date)}&quot; </span><br> } </p><br><p><span class="tag-name"> button.addEventListener <span class="text-menu-text"> ( <span class="text-codeline-link"> &#39;click&#39; </span> ), () <span class="tag"> =&gt; </span> { <br></span> \xA0\xA0form.send <span class="text-menu-text">(</span> message <span class="text-menu-text">); <br> })</span></span></p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormContentCode.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_1 = "" + globalThis.__publicAssetsURL("icons/link.svg");
const _sfc_main = {
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  setup() {
    const contact = useRuntimeConfig().dev.contacts;
    return {
      contact
    };
  },
  methods: {
    open(elementId) {
      const element = document.getElementById(elementId);
      const arrow = element.querySelector(".arrow");
      const links = element.querySelector("#links");
      if (links.style.display === "block") {
        links.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
      } else {
        links.style.display = "block";
        arrow.style.transform = "rotate(90deg)";
      }
    }
  },
  mounted() {
    const nameInput = document.getElementById("name-input");
    const emailInput = document.getElementById("email-input");
    const messageInput = document.getElementById("message-input");
    nameInput.addEventListener("input", (event) => {
      const nameValue = document.getElementById("name-value");
      nameValue.innerHTML = event.target.value;
    });
    emailInput.addEventListener("input", (event) => {
      const emailValue = document.getElementById("email-value");
      emailValue.innerHTML = event.target.value;
    });
    messageInput.addEventListener("input", (event) => {
      const messageValue = document.getElementById("message-value");
      messageValue.innerHTML = event.target.value;
    });
    const links = document.getElementsByClassName("submenu");
    for (let i = 0; i < links.length; i++) {
      if (window.innerWidth > 1024) {
        links[i].querySelector("#links").style.display = "block";
        links[i].querySelector(".arrow").style.transform = "rotate(90deg)";
      } else {
        links[i].querySelector("#links").style.display = "none";
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactForm = __nuxt_component_0;
  const _component_FormContentCode = __nuxt_component_1;
  _push(`<main${ssrRenderAttrs(mergeProps({
    id: "contact-me",
    class: "page"
  }, _attrs))}><div id="mobile-page-title"><h2>_contact-me</h2></div><div id="page-menu" class="w-full h-full flex flex-col border-right"><div id="contacts" class="submenu"><div class="title"><img class="arrow"${ssrRenderAttr("src", _imports_0)}><h3> contacts </h3></div><div id="links"><!--[-->`);
  ssrRenderList($setup.contact.direct.sources, (source, key) => {
    _push(`<div class="link"><img${ssrRenderAttr("src", "/icons/" + key + ".svg")}><a href="/" class="font-fira_retina text-menu-text hover:text-white">${source}</a></div>`);
  });
  _push(`<!--]--></div></div><div id="find-me-in" class="submenu border-top"><div class="title"><img class="arrow"${ssrRenderAttr("src", _imports_0)}><h3> also-find-me-in </h3></div><div id="links"><!--[-->`);
  ssrRenderList($setup.contact.find_me_also_in.sources, (source, key) => {
    _push(`<div class="link"><img${ssrRenderAttr("src", _imports_1)}><a${ssrRenderAttr("href", source.url + source.user)} class="font-fira_retina text-menu-text hover:text-white" target="_blank">${ssrInterpolate(source.title)}</a></div>`);
  });
  _push(`<!--]--></div></div></div><div class="flex flex-col w-full"><div class="tab-height w-full hidden lg:flex border-right border-bot items-center"><div class="flex items-center border-right h-full"><p class="font-fira_regular text-menu-text text-sm px-3">contacts</p><img${ssrRenderAttr("src", _imports_1$1)} alt="" class="m-3"></div></div><div class="flex lg:grid lg:grid-cols-2 h-full w-full"><div id="left" class="h-full w-full flex flex-col border-right items-center">`);
  _push(ssrRenderComponent(_component_ContactForm, {
    name: $data.name,
    email: $data.email,
    message: $data.message
  }, null, _parent));
  _push(`</div><div id="right" class="h-full w-full hidden lg:flex"><div class="form-content">`);
  _push(ssrRenderComponent(_component_FormContentCode, {
    name: $data.name,
    email: $data.email,
    message: $data.message
  }, null, _parent));
  _push(`</div><div id="scroll-bar" class="h-full border-left flex justify-center py-1"><div id="scroll"></div></div></div></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-me.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactMe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contactMe as default };
//# sourceMappingURL=contact-me.d952a50d.mjs.map
