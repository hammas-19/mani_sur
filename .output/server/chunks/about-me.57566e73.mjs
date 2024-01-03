import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig, a as _imports_0$1 } from './server.mjs';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import { _ as _imports_0, a as _imports_1$2 } from './arrow.13000919.mjs';
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
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      lines: 0
    };
  },
  mounted() {
    this.updateLines();
    window.addEventListener("resize", this.updateLines);
    window.addEventListener("click", this.updateLines);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateLines);
    window.removeEventListener("click", this.updateLines);
  },
  methods: {
    updateLines() {
      const textContainer = this.$el.querySelector(".text-container");
      const style = window.getComputedStyle(textContainer);
      parseInt(style.fontSize);
      const lineHeight = parseInt(style.lineHeight);
      const maxHeight = textContainer.offsetHeight;
      this.lines = Math.ceil(maxHeight / lineHeight) + 1;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "code-container flex font-fira_retina text-menu-text" }, _attrs))}><div class="line-numbers lg:flex flex-col w-32 hidden"><!--[-->`);
  ssrRenderList($data.lines, (n) => {
    _push(`<div class="grid grid-cols-2 justify-end"><span class="col-span-1 mr-3">${ssrInterpolate(n)}</span>`);
    if (n == 1) {
      _push(`<div class="col-span-1 flex justify-center">/**</div>`);
    } else {
      _push(`<!---->`);
    }
    if (n > 1 && n < $data.lines) {
      _push(`<div class="col-span-1 flex justify-center">*</div>`);
    } else {
      _push(`<!---->`);
    }
    if (n == $data.lines) {
      _push(`<div class="col-span-1 flex justify-center pl-2">*/</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="text-container"><p>${$props.text}</p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommentedText.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_1$1 = "" + globalThis.__publicAssetsURL("icons/gist/comments.svg");
const _imports_2$1 = "" + globalThis.__publicAssetsURL("icons/gist/star.svg");
const _sfc_main$1 = {
  name: "GistSnippet",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      gist: null,
      monthsAgo: null,
      content: null,
      language: null,
      dataFetched: false,
      comment: null
    };
  },
  mounted() {
    fetch(`https://api.github.com/gists/${this.id}`).then((response) => response.json()).then((data) => this.setValues(data));
  },
  methods: {
    async setValues(gist) {
      this.gist = gist;
      this.monthsAgo = this.setMonths(gist.created_at);
      this.content = this.setSnippet(gist);
      this.language = Object.values(gist.files)[0].language;
      this.dataFetched = true;
      this.comment = await this.setComments(gist.comments_url);
    },
    setMonths(date) {
      let now = new Date();
      let gistDate = new Date(date);
      let diff = now.getTime() - gistDate.getTime();
      let days = Math.floor(diff / (1e3 * 3600 * 24));
      let months = Math.floor(days / 30);
      return months;
    },
    setSnippet(gist) {
      let snippet = Object.values(gist.files)[0].content;
      return snippet;
    },
    async setComments(comments_url) {
      let response = await fetch(comments_url);
      let data = await response.json();
      try {
        let body = data[0].body;
        return body;
      } catch {
        console.log(`no comments found on ${comments_url}`);
      }
    },
    showComment(id) {
      let comment = document.getElementById("comment" + id);
      comment.classList.toggle("hidden");
    }
  },
  components: {
    highlightjs: hljsVuePlugin.component
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "gist mb-5" }, _attrs))}><div class="flex justify-between my-2"><div class="flex"><img${ssrRenderAttr("src", _imports_0$1)} alt="Hammas" class="w-8 h-8 object-cover rounded-full mr-2"><div class="flex flex-col"><a id="username" href="https://github.com/hammas-19" target="_blank" class="font-fira_bold text-[#92dfb9] text-xs pb-1 hover:cursor-pointer"> @hammas-19 </a><p class="font-fira_retina text-xs text-menu-text">Copied &amp; pasted successfully!</p></div></div><div class="flex text-menu-text font-fira_retina text-xs justify-self-end lg:mx-2"><div class="flex lg:mx-2 hover:cursor-not-allowed hover:text-white"><img${ssrRenderAttr("src", _imports_1$1)} alt="" class="w-4 h-4 mr-2"><span>details</span></div><div class="hidden lg:flex hover:cursor-not-allowed hover:text-white"><img${ssrRenderAttr("src", _imports_2$1)} alt="" class="w-4 h-4 mx-2"><span class="">stars</span></div></div></div><div class="flex flex-col gap-2"><div class="snippet-container border-[0.5px] rounded-md p-4 border-[#b1b6be] bg-[#172327]"><p class="text-[#b1b6be]"><span class="text-blue-500">while</span> ( <span class="text-green-300">true</span> ) { <br> // Browser freezer <br> } </p></div><div class="snippet-container border-[0.5px] rounded-md p-4 border-[#b1b6be] bg-[#172327]"><p class="text-[#b1b6be]"><span class="text-red-300">function</span> generateRandomEmoji() { <br><span class="text-teal-300">const</span> emojis = [&quot;\u{1F602}&quot;, &quot;\u{1F389}&quot;, &quot;\u{1F61C}&quot;, &quot;\u{1F984}&quot;, &quot;\u{1F355}&quot;, &quot;\u{1F680}&quot;]; <br><span class="text-red-300"> return </span> emojis[Math.floor(Math.random() * emojis.length)];<br> } <span class="text-red-300"> console</span>.<span class="text-blue-500">log</span> (generateRandomEmoji()); </p></div></div><div class="lg:flex hidden justify-between text-menu-text font-fira_retina mt-4 pt-4 border-top">`);
  if ($data.comment) {
    _push(`<p id="comment" class="w-5/6"> comment </p>`);
  } else {
    _push(`<p class="w-5/6">No comments.</p>`);
  }
  _push(`<img${ssrRenderAttr("src", _imports_1$2)} alt="" class="hover:cursor-not-allowed"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GistSnippet.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_1 = "" + globalThis.__publicAssetsURL("icons/diple.svg");
const _imports_2 = "" + globalThis.__publicAssetsURL("icons/markdown.svg");
const _sfc_main = {
  data() {
    return {
      currentSection: "personal-info",
      folder: "bio",
      loading: true
    };
  },
  setup() {
    const config = useRuntimeConfig();
    return {
      config
    };
  },
  computed: {
    isActive() {
      return (folder) => this.folder === folder;
    },
    isSectionActive() {
      return (section) => this.currentSection === section;
    },
    isOpen() {
      return (folder) => this.folder === folder;
    }
  },
  methods: {
    focusCurrentSection(section) {
      this.currentSection = section.title;
      this.folder = Object.keys(section.info)[0];
      document.getElementById("folders-" + section.title).classList.toggle("hidden");
      document.getElementById("section-arrow-" + section.title).classList.toggle("rotate-90");
    },
    focusCurrentFolder(folder) {
      this.folder = folder.title;
      this.currentSection = this.config.dev.about.sections[this.currentSection].info[folder.title] ? this.currentSection : Object.keys(this.config.dev.about.sections).find((section) => this.config.dev.about.sections[section].info[folder.title]);
    },
    toggleFiles() {
      document.getElementById("file-" + this.folder).classList.toggle("hidden");
    },
    showContacts() {
      document.getElementById("contacts").classList.toggle("hidden");
      document.getElementById("section-arrow").classList.toggle("rotate-90");
    }
  },
  mounted() {
    this.loading = false;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CommentedText = __nuxt_component_0;
  const _component_GistSnippet = __nuxt_component_1;
  if (!$data.loading) {
    _push(`<main${ssrRenderAttrs(mergeProps({
      id: "about-me",
      class: "page"
    }, _attrs))}><div id="mobile-page-title"><h2>_about-me</h2></div><div id="page-menu" class="w-full flex"><div id="sections"><!--[-->`);
    ssrRenderList($setup.config.dev.about.sections, (section) => {
      _push(`<div id="section-icon" class="${ssrRenderClass({ active: $options.isSectionActive(section.title) })}"><img${ssrRenderAttr("id", "section-icon-" + section.title)}${ssrRenderAttr("src", section.icon)}${ssrRenderAttr("alt", section.title + "-section")}></div>`);
    });
    _push(`<!--]--></div><div id="section-content" class="hidden lg:block w-full h-full border-right"><div id="section-content-title" class="hidden lg:flex items-center min-w-full"><img id="section-arrow-menu"${ssrRenderAttr("src", _imports_0)} alt="" class="section-arrow mx-3 open"><p class="font-fira_regular text-white text-sm">${$setup.config.dev.about.sections[$data.currentSection].title}</p></div><div><!--[-->`);
    ssrRenderList($setup.config.dev.about.sections[$data.currentSection].info, (folder, key, index) => {
      _push(`<div class="grid grid-cols-2 items-center my-2 font-fira_regular text-menu-text"><div class="flex col-span-2 hover:text-white hover:cursor-pointer"><img id="diple"${ssrRenderAttr("src", _imports_1)} alt="" class="${ssrRenderClass({ open: $options.isOpen(folder.title) })}"><img${ssrRenderAttr("src", "/icons/folder" + (index + 1) + ".svg")} alt="" class="mr-3"><p${ssrRenderAttr("id", folder.title)} class="${ssrRenderClass({ active: $options.isActive(folder.title) })}">${key}</p></div>`);
      if (folder.files !== void 0) {
        _push(`<div class="col-span-2"><!--[-->`);
        ssrRenderList(folder.files, (file, key2) => {
          _push(`<div class="hover:text-white hover:cursor-pointer flex my-2"><img${ssrRenderAttr("src", _imports_2)} alt="" class="ml-8 mr-3"><p>${ssrInterpolate(key2)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]--></div><div id="section-content-title-contact" class="flex items-center min-w-full border-top"><img id="section-arrow-menu"${ssrRenderAttr("src", _imports_0)} alt="" class="section-arrow mx-3 open"><p class="font-fira_regular text-white text-sm">${$setup.config.dev.contacts.direct.title}</p></div><div id="contact-sources" class="hidden lg:flex lg:flex-col my-2"><!--[-->`);
    ssrRenderList($setup.config.dev.contacts.direct.sources, (source, key) => {
      _push(`<div class="flex items-center mb-2"><img${ssrRenderAttr("src", "/icons/" + key + ".svg")} alt="" class="mx-2"><a class="font-fira_retina text-menu-text text-sm hover:text-white">${source}</a></div>`);
    });
    _push(`<!--]--></div></div><div id="section-content" class="lg:hidden w-full font-fira_regular"><!--[-->`);
    ssrRenderList($setup.config.dev.about.sections, (section) => {
      _push(`<div><div${ssrRenderAttr("src", section.icon)} id="section-content-title" class="flex lg:hidden mb-1"><img${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("id", "section-arrow-" + section.title)} alt="" class="section-arrow"><p class="text-white text-sm">${section.title}</p></div><div${ssrRenderAttr("id", "folders-" + section.title)} class="hidden"><!--[-->`);
      ssrRenderList($setup.config.dev.about.sections[section.title].info, (folder, key, index) => {
        _push(`<div class="grid grid-cols-2 items-center my-2 font-fira_regular text-menu-text hover:text-white hover:cursor-pointer"><div class="flex col-span-2"><img id="diple"${ssrRenderAttr("src", _imports_1)}><img${ssrRenderAttr("src", "icons/folder" + (index + 1) + ".svg")} alt="" class="mr-3"><p${ssrRenderAttr("id", folder.title)} class="${ssrRenderClass({ active: $options.isActive(folder.title) })}">${key}</p></div>`);
        if (folder.files !== void 0) {
          _push(`<div class="col-span-2"><!--[-->`);
          ssrRenderList(folder.files, (file, key2) => {
            _push(`<div class="hover:text-white hover:cursor-pointer flex my-2"><img${ssrRenderAttr("src", _imports_2)} alt="" class="ml-8 mr-3"><p>${ssrInterpolate(key2)}</p></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    });
    _push(`<!--]--><div id="section-content-title" class="flex items-center min-w-full"><img${ssrRenderAttr("src", _imports_0)} alt="" id="section-arrow" class="section-arrow"><p class="font-fira_regular text-white text-sm">${$setup.config.dev.contacts.direct.title}</p></div><div id="contacts" class="hidden"><!--[-->`);
    ssrRenderList($setup.config.dev.contacts.direct.sources, (source, key) => {
      _push(`<div class="flex items-center my-2"><img${ssrRenderAttr("src", "/icons/" + key + ".svg")} alt=""><a href="/" class="font-fira_retina text-menu-text hover:text-white ml-4">${source}</a></div>`);
    });
    _push(`<!--]--></div></div></div><div class="flex flex-col lg:grid lg:grid-cols-2 h-full w-full"><div id="left" class="w-full flex flex-col border-right"><div class="tab-height w-full hidden lg:flex border-bot items-center"><div class="flex items-center border-right h-full"><p class="font-fira_regular text-menu-text text-sm px-3">${$setup.config.dev.about.sections[$data.currentSection].title}</p><img${ssrRenderAttr("src", _imports_1$2)} alt="" class="mx-3"></div></div><div id="tab-mobile" class="flex lg:hidden font-fira_retina"><span class="text-white">// </span><h3 class="text-white px-2">${$setup.config.dev.about.sections[$data.currentSection].title}</h3><span class="text-menu-text"> / </span><h3 class="text-menu-text pl-2">${$setup.config.dev.about.sections[$data.currentSection].info[$data.folder].title}</h3></div><div id="commented-text" class="flex h-full w-full lg:border-right overflow-hidden"><div class="w-full h-full ml-5 mr-10 lg:my-5 overflow-scroll">`);
    _push(ssrRenderComponent(_component_CommentedText, {
      text: $setup.config.dev.about.sections[$data.currentSection].info[$data.folder].description
    }, null, _parent));
    _push(`</div><div id="scroll-bar" class="h-full border-left hidden lg:flex justify-center py-1"><div id="scroll"></div></div></div></div><div id="right" class="max-w-full flex flex-col"><div class="tab-height w-full h-full hidden lg:flex border-bot items-center"></div><div class="tab-height w-full h-full flex-none lg:hidden items-center"></div><div id="gists-content" class="flex"><div id="gists" class="flex flex-col lg:px-6 lg:py-4 w-full overflow-hidden"><h3 class="text-white lg:text-menu-text mb-4 text-sm">// Fun Code snippets:</h3><div class="flex flex-col overflow-scroll">`);
    _push(ssrRenderComponent(_component_GistSnippet, { "data-aos": "fade-down" }, null, _parent));
    _push(`</div></div><div id="scroll-bar" class="h-full border-left hidden lg:flex justify-center py-1"><div id="scroll"></div></div></div></div></div></main>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-me.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutMe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { aboutMe as default };
//# sourceMappingURL=about-me.57566e73.mjs.map
