import { _ as _export_sfc, u as useRuntimeConfig } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './arrow.13000919.mjs';
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

const _sfc_main = {
  setup() {
    const config = useRuntimeConfig();
    return {
      config
    };
  },
  data() {
    return {
      techs: ["Vue"],
      filters: ["all"],
      projects: "",
      loading: true
    };
  },
  mounted() {
    this.projects = this.config.public.dev.projects;
    this.loading = false;
  },
  methods: {
    filterProjects(tech) {
      document.getElementById("icon-tech-" + tech).classList.toggle("active");
      document.getElementById("title-tech-" + tech).classList.toggle("active");
      const check = document.getElementById(tech);
      if (check.checked) {
        this.filters = this.filters.filter((item) => item !== "all");
        this.filters.push(tech);
      } else {
        this.filters = this.filters.filter((item) => item !== tech);
        this.filters.length === 0 ? this.filters.push("all") : null;
      }
      this.filters[0] == "all" ? this.projects = this.config.public.dev.projects : this.projects = this.filterProjectsBy(this.filters);
      if (this.projects.length === 0) {
        document.getElementById("projects-case").classList.remove("grid");
        document.getElementById("not-found").classList.remove("hidden");
      } else {
        document.getElementById("projects-case").classList.add("grid");
        document.getElementById("not-found").classList.add("hidden");
      }
    },
    hiddeSection() {
      document.getElementById("filter-menu").classList.toggle("hidden");
      document.getElementsByClassName("section-arrow")[0].classList.toggle("rotate-90");
    },
    filterProjectsBy(filters) {
      const projectArray = Object.values(this.config.public.dev.projects);
      return projectArray.filter((project) => {
        return filters.some((filter) => project.tech.includes(filter));
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (!$data.loading) {
    _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-col flex-auto lg:flex-row overflow-hidden" }, _attrs))}><div id="mobile-page-title"><h2>_projects</h2></div><div id="section-content-title" class="flex lg:hidden"><img class="section-arrow"${ssrRenderAttr("src", _imports_0)}><p class="font-fira_regular text-white text-sm">projects</p></div><div id="filter-menu" class="w-full flex-col border-right font-fira_regular text-menu-text hidden lg:flex"><div id="section-content-title" class="hidden lg:flex items-center min-w-full"><img id="section-arrow-menu"${ssrRenderAttr("src", _imports_0)} alt="" class="section-arrow mx-3 open"><p class="font-fira_regular text-white text-sm">projects</p></div><nav id="filters" class="w-full flex-col"><!--[-->`);
    ssrRenderList($data.techs, (tech) => {
      _push(`<div class="flex items-center py-2"><input type="checkbox"${ssrRenderAttr("id", tech)}><img${ssrRenderAttr("id", "icon-tech-" + tech)}${ssrRenderAttr("src", "/icons/techs/" + tech + ".svg")} alt="" class="tech-icon w-5 h-5 mx-4"><span${ssrRenderAttr("id", "title-tech-" + tech)}>${ssrInterpolate(tech)}</span></div>`);
    });
    _push(`<!--]--></nav></div><div class="flex flex-col w-full overflow-hidden"><div class="tab-height w-full hidden lg:flex border-bot items-center"><div class="flex items-center border-right h-full"><!--[-->`);
    ssrRenderList($data.filters, (filter) => {
      _push(`<p class="font-fira_regular text-menu-text text-sm px-3">${ssrInterpolate(filter)}; </p>`);
    });
    _push(`<!--]--><img${ssrRenderAttr("src", _imports_1)} alt="" class="m-3"></div></div><div id="tab" class="flex lg:hidden items-center"><span class="text-white"> // </span><p class="font-fira_regular text-white text-sm px-3">projects</p><span class="text-menu-text"> / </span><!--[-->`);
    ssrRenderList($data.filters, (filter) => {
      _push(`<p class="font-fira_regular text-menu-text text-sm px-3">${ssrInterpolate(filter)}; </p>`);
    });
    _push(`<!--]--></div><div id="projects-case" class="grid grid-cols-1 lg:grid-cols-2 max-w-full h-full overflow-scroll lg:self-center"><div id="not-found" class="hidden flex flex-col font-fira_retina text-menu-text my-5 h-full justify-center items-center"><span class="flex justify-center text-4xl pb-3"> X__X </span><span class="text-white flex justify-center text-xl"> No matching projects </span><span class="flex justify-center"> for these technologies </span></div><!--[-->`);
    ssrRenderList($data.projects, (project, key, index) => {
      _push(`<div id="project" class="lg:mx-5"><span class="flex text-sm my-3">`);
      if (index == null) {
        _push(`<h3 class="text-glitch-mine font-fira_bold mr-3"> Project ${ssrInterpolate(key + 1)}</h3>`);
      } else {
        _push(`<h3 class="text-glitch-mine font-fira_bold mr-3"> Project ${ssrInterpolate(index + 1)}</h3>`);
      }
      _push(`<h4 class="font-fira_retina text-menu-text"> // ${ssrInterpolate(project.title)}</h4></span><div id="project-card" class="flex flex-col h-[490px]"><div id="window"><div class="absolute flex right-3 top-3"><!--[-->`);
      ssrRenderList(project.tech, (tech) => {
        _push(`<img${ssrRenderAttr("src", "/icons/techs/filled/" + tech + ".svg")} alt="" class="w-6 h-6 mx-1 hover:opacity-75">`);
      });
      _push(`<!--]--></div><img id="showcase"${ssrRenderAttr("src", project.img)} alt="alnafi"></div><div class="pb-8 pt-6 px-6 border-top flex flex-col justify-between h-full"><div><p class="text-menu-text font-fira_retina text-sm mb-5">${project.description}</p></div><div><a id="view-button"${ssrRenderAttr("href", project.url)} target="_blank" class="text-white font-fira_retina py-2 px-4 w-fit text-xs rounded-lg"> view-project </a></div></div></div></div>`);
    });
    _push(`<!--]--></div></div></main>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { projects as default };
//# sourceMappingURL=projects.41822d7b.mjs.map
