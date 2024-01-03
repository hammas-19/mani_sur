globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{"apiBase":"/api","dev":{"name":"Hammas Masood,","logo_name":"hammas-masood","role":"A Front-end Developer","about":{"sections":{"professional-info":{"title":"professional-info","icon":"icons/info-professional.svg","info":{"experience":{"title":"experience","description":"<b>Nuxt.js Developer | Alnafi (October 2022 - Present):</b><br>Currently contributing as a Nuxt.js developer at Alnafi, where I actively participate in the development and enhancement of web applications. My role involves leveraging Vue.js with Nuxt.js to create dynamic and interactive user interfaces,Inetgrating API's and ensuring a seamless user experience. <br><br> <b> Nuxt.js Developer Intern | AL Nafi (July 2022 - October 2022):</b> <br> Initiated my journey in web development as an intern at AL Nafi. During this transformative period, I acquired foundational knowledge in Tailwind CSS, and Functional JavaScript, Vue.js and Nuxt.js laying the groundwork for my subsequent roles as a frontend developer.<br>"},"hard-skills":{"title":"hard-skills","description":"<br>As a dedicated front-end developer, I bring a robust skill set to the table, proficient in crafting dynamic and responsive web applications. My foundation lies in HTML, CSS, and JavaScript, forming the backbone of my development capabilities. I have a solid understanding of Vue.js and its server-side renderer, Nuxt, enhancing my ability to build intuitive user interfaces. Additionally, I am actively expanding my expertise in React and Next.js, exploring their potential and honing my skills to contribute effectively in these frameworks. My toolkit also includes the efficient styling approach of Tailwind CSS, enabling me to streamline the design process and deliver modern, visually appealing web applications."},"soft-skills":{"title":"soft-skills","description":"<br>Proficient in presentation and content writing, I excel at articulating complex ideas clearly. I thrive in group settings, fostering collaboration for shared goals. When working independently, I am self-motivated and deliver high-quality results. With strong leadership qualities, I guide others effectively. I'm a problem solver, using innovative strategies, and my typing speed of 60 WPM ensures efficient task handling. These skills underscore my adaptability and effectiveness in diverse professional scenarios."}}},"personal-info":{"title":"personal-info","icon":"icons/info-personal.svg","info":{"bio":{"title":"bio","description":"<br> As a versatile Front-end Web Developer, I possess a solid foundation in front-end development principles, which allows me to adapt quickly and be a perfect fit for any application. My ability to grasp new concepts rapidly and my aptitude for problem-solving enable me to tackle various challenges and requirements effectively. With a strong focus on user experience and attention to detail, I can create seamless and responsive web solutions that cater to diverse audiences."},"interests":{"title":"interests","description":"<br>I am constantly learning the latest tools and frameworks to stay at the forefront of technology. <br> In my free time, I engage in a dynamic array of hobbies that intertwine my passion for frontend development with a creative flair. While my professional journey excels in crafting seamless user interfaces and captivating user experiences, I find joy in blending these skills with artistic pursuits. As a seasoned gamer, I immerse myself in the captivating worlds of video games, appreciating the artistry and design behind interactive experiences. Additionally, my creative side flourishes through graphic design, where I leverage tools like Adobe Photoshop and Illustrator to experiment with visual concepts. These pursuits, whether honing my coding expertise, orchestrating delightful UI/UX experiences, or crafting digital art, serve as not just professional skills but as passions that drive my continuous growth and innovation."}}},"hobbies-info":{"title":"hobbies-info","icon":"icons/info-hobbies.svg","info":{"favorite-games":{"title":"games","description":"<br>I am a passionate gamer"}}}}},"contacts":{"direct":{"title":"contacts","sources":{"email":"hammasmasood@gmail.com","phone":"+92 336 2244842"}},"social":{"github":{"title":"Github profile","url":"https://github.com/","user":"hammas-19"},"facebook":{"title":"Facebook profile","url":"https://www.facebook.com/","user":"hammasmasoodi"},"linkedin":{"title":"LinkedIn account","url":"https://www.linkedin.com/in/","user":"hammas-masood"}},"find_me_also_in":{"title":"also-find-me-in","sources":{"instagram":{"title":"Instagram account","url":"https://www.instagram.com/","user":"hammas_masood/"}}}},"gists":{"1":"83861a67e377633ee8368df01ee3a355","2":"694c1f32332788a2ac7f37b09e5aa40e"},"projects":{"1":{"title":"_alnafi.com","description":"E learning platform new website using 3-Tier Architecture. Deployed on AWS with load balancing for autoscaling. Tailwind and Nuxt.js on the front end, with Django and MySql powering the backend Microservices Architecture, Vue3, Nuxt, Tailwindcss, Strapi, Django Python, Google Tag Manager, Sentry and Swipper","img":"/images/projects/alnafi.png","tech":["Vue"],"url":"https://alnafi.com/"},"2":{"title":"_alnafi-cloud","description":"Cloud Labs platform website using 3-Tier Architecture. Deployed on AWS with load balancing for autoscaling. Tailwind and Nuxt.js on the front end, with Django and MySql powering the backend Microservices Architecture, Vue3, Nuxt, Tailwindcss, Django Python and Sentry","img":"/images/projects/alnafi.cloud.png","tech":["Vue"],"url":"https://alnafi.cloud/"},"3":{"title":"_alnafi-academy","description":"O level academy website using 3-Tier Architecture. Deployed on AWS with load balancing for autoscaling. Tailwind and Nuxt.js on the front end, with Django and MySql powering the backend Microservices Architecture, Vue3, Nuxt, Tailwindcss, Strapi, Django Python, Google Tag Manager and Matoma Analytics","img":"/images/projects/alnafi.academy.png","tech":["Vue"],"url":"https://alnafi.academy/"},"4":{"title":"_knowgistic","description":"A web Application for exams preparation includes pre-made mocks and custom mocks with a pool of Authentic Data source.","img":"/images/projects/knowgistic2.png","tech":["Vue"],"url":"https://knowgistic.netlify.app/"},"5":{"title":"_tiffon","description":"An e-commerce website called Tiffon offering daily lunch options to office going people using Vue.js, Nuxt.js, and Strapi. <br>Check out GitHub repo here: <a target='_blank' href='https://github.com/hammas-19/tiffon'>https://github.com/hammas-19/tiffon</a></br>","img":"/images/projects/Tiffon5.png","tech":["Vue"],"url":"https://github.com/hammas-19/tiffon"},"6":{"title":"_alnafi-epay","description":"EPAY website using 3-Tier Architecture. Deployed on AWS with load balancing for autoscaling. Tailwind and Nuxt.js on the front end, with Django and MySql powering the backend Microservices Architecture, Vue3, Nuxt, Tailwindcss, Django Python, Google Tag Manager and Matoma Analytics","img":"/images/projects/epay.png","tech":["Vue"],"url":"https://epay.com.pk/"}}}},"apiSecret":"123"};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/demo-share.jpg": {
    "type": "image/jpeg",
    "etag": "\"1788c-/Jkr0WvVnoFS9xeJzZzelEARy4c\"",
    "mtime": "2023-11-16T07:51:07.564Z",
    "size": 96396,
    "path": "../public/demo-share.jpg"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"27d5b-/0qCmIueoww8+zisAg2RMs8wv3c\"",
    "mtime": "2023-12-15T07:12:57.351Z",
    "size": 163163,
    "path": "../public/favicon.ico"
  },
  "/Hammas-Masood.jpg": {
    "type": "image/jpeg",
    "etag": "\"56a0-2S+hp3rMq17ga5tpnVS5n473Ztg\"",
    "mtime": "2023-11-21T11:17:23.192Z",
    "size": 22176,
    "path": "../public/Hammas-Masood.jpg"
  },
  "/junaid-ahemd.png": {
    "type": "image/png",
    "etag": "\"21c267-o5keIKD/u5Z6sAAhbVF/Q47oK2U\"",
    "mtime": "2023-11-16T07:51:07.836Z",
    "size": 2212455,
    "path": "../public/junaid-ahemd.png"
  },
  "/logo.png": {
    "type": "image/png",
    "etag": "\"21c38-S1vIICQDPW005ZQ5O2iSk2i//dM\"",
    "mtime": "2023-11-16T07:51:07.839Z",
    "size": 138296,
    "path": "../public/logo.png"
  },
  "/README.md": {
    "type": "text/markdown; charset=utf-8",
    "etag": "\"1ee-4v8O3SpixpI+K4o9jLYjkPmH2Ss\"",
    "mtime": "2023-11-16T07:51:07.561Z",
    "size": 494,
    "path": "../public/README.md"
  },
  "/sasas.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"8ae6-ejR/vzyddXQO8cvdSgrtZnqVL0A\"",
    "mtime": "2023-11-16T07:51:07.566Z",
    "size": 35558,
    "path": "../public/sasas.ico"
  },
  "/sss.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"4203e-+T4PvfARJW8qFz+BcNNq3618F10\"",
    "mtime": "2024-01-03T08:36:48.032Z",
    "size": 270398,
    "path": "../public/sss.ico"
  },
  "/worker.js": {
    "type": "application/javascript",
    "etag": "\"2bb-1NMNUQ3FvwfSOHcB6egEbaAHxw0\"",
    "mtime": "2023-11-16T07:51:07.856Z",
    "size": 699,
    "path": "../public/worker.js"
  },
  "/images/demo-share.png": {
    "type": "image/png",
    "etag": "\"35027-9gBXEJw4PO5VSYv5ZL6QfZR2NmY\"",
    "mtime": "2023-11-16T07:51:07.622Z",
    "size": 217127,
    "path": "../public/images/demo-share.png"
  },
  "/images/demo.png": {
    "type": "image/png",
    "etag": "\"7e626-4K3t7fFLtT4xQvfHGjfWBLOu/xQ\"",
    "mtime": "2023-11-16T07:51:07.635Z",
    "size": 517670,
    "path": "../public/images/demo.png"
  },
  "/icons/arrow-button.svg": {
    "type": "image/svg+xml",
    "etag": "\"b8-OTecWE3mEy4hYYxvIN+4wf2RclE\"",
    "mtime": "2023-11-16T07:51:07.567Z",
    "size": 184,
    "path": "../public/icons/arrow-button.svg"
  },
  "/icons/arrow-down.svg": {
    "type": "image/svg+xml",
    "etag": "\"be-kZSoF/lSQhL6/yLPbsCf9KFPgVs\"",
    "mtime": "2023-11-16T07:51:07.568Z",
    "size": 190,
    "path": "../public/icons/arrow-down.svg"
  },
  "/icons/arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"b6-yrPkTanmJq0Dx12CZEp2XgmfsL8\"",
    "mtime": "2023-11-16T07:51:07.569Z",
    "size": 182,
    "path": "../public/icons/arrow.svg"
  },
  "/icons/burger-close.svg": {
    "type": "image/svg+xml",
    "etag": "\"104-S2/Ft0twJBw9CiTHlAwyvb/r8iA\"",
    "mtime": "2023-11-16T07:51:07.570Z",
    "size": 260,
    "path": "../public/icons/burger-close.svg"
  },
  "/icons/burger.svg": {
    "type": "image/svg+xml",
    "etag": "\"b3-e4SyVlNGhSShL5xjfrHnZRG+4VQ\"",
    "mtime": "2023-11-16T07:51:07.571Z",
    "size": 179,
    "path": "../public/icons/burger.svg"
  },
  "/icons/check.svg": {
    "type": "image/svg+xml",
    "etag": "\"f5-VnzkxnVBhyzx7H9yjYqTHEBxc24\"",
    "mtime": "2023-11-16T07:51:07.571Z",
    "size": 245,
    "path": "../public/icons/check.svg"
  },
  "/icons/close.svg": {
    "type": "image/svg+xml",
    "etag": "\"215-1tKNzOBRLihmEC+C4j7hGu5XoAs\"",
    "mtime": "2023-11-16T07:51:07.573Z",
    "size": 533,
    "path": "../public/icons/close.svg"
  },
  "/icons/diple.svg": {
    "type": "image/svg+xml",
    "etag": "\"f7-VUpSuv/WPOUXz0CmclbZQG2aIOc\"",
    "mtime": "2023-11-16T07:51:07.580Z",
    "size": 247,
    "path": "../public/icons/diple.svg"
  },
  "/icons/email.svg": {
    "type": "image/svg+xml",
    "etag": "\"29a-AHpg2LgMyx7fwZEyJ3fZsWj++2w\"",
    "mtime": "2023-11-16T07:51:07.581Z",
    "size": 666,
    "path": "../public/icons/email.svg"
  },
  "/icons/folder.svg": {
    "type": "image/svg+xml",
    "etag": "\"941-JV45VlPcTE+BBIAdeQeAxPDgMZY\"",
    "mtime": "2023-11-16T07:51:07.582Z",
    "size": 2369,
    "path": "../public/icons/folder.svg"
  },
  "/icons/folder1.svg": {
    "type": "image/svg+xml",
    "etag": "\"27a-lhATVNAu09ecNvPbxqvU900OuRs\"",
    "mtime": "2023-11-16T07:51:07.583Z",
    "size": 634,
    "path": "../public/icons/folder1.svg"
  },
  "/icons/folder2.svg": {
    "type": "image/svg+xml",
    "etag": "\"27b-tK75MxRWtgxHLC2szZ/sF2tDgNE\"",
    "mtime": "2023-11-16T07:51:07.584Z",
    "size": 635,
    "path": "../public/icons/folder2.svg"
  },
  "/icons/folder3.svg": {
    "type": "image/svg+xml",
    "etag": "\"279-QgqUtFEfjCebugNAwtFKQ2Cnh58\"",
    "mtime": "2023-11-16T07:51:07.585Z",
    "size": 633,
    "path": "../public/icons/folder3.svg"
  },
  "/icons/github.svg": {
    "type": "image/svg+xml",
    "etag": "\"323-jn6RQDbhT107L/XyT7SDyML1WJs\"",
    "mtime": "2023-11-16T07:51:07.588Z",
    "size": 803,
    "path": "../public/icons/github.svg"
  },
  "/icons/info-hobbies.svg": {
    "type": "image/svg+xml",
    "etag": "\"356-rBx1vX6lJ0e4JEpw2onMKpiFWuE\"",
    "mtime": "2023-11-16T07:51:07.589Z",
    "size": 854,
    "path": "../public/icons/info-hobbies.svg"
  },
  "/icons/info-personal.svg": {
    "type": "image/svg+xml",
    "etag": "\"2c5-6ElYTMQr2+AbJG1lgzvlUq9626k\"",
    "mtime": "2023-11-16T07:51:07.590Z",
    "size": 709,
    "path": "../public/icons/info-personal.svg"
  },
  "/icons/info-professional.svg": {
    "type": "image/svg+xml",
    "etag": "\"34e-Lw4EpO/UGBIkevnCnRSxm5chevo\"",
    "mtime": "2023-11-16T07:51:07.591Z",
    "size": 846,
    "path": "../public/icons/info-professional.svg"
  },
  "/icons/link.svg": {
    "type": "image/svg+xml",
    "etag": "\"24a-m/IkfbO7GAqrV+hzKk9MTOA4ynA\"",
    "mtime": "2023-11-16T07:51:07.592Z",
    "size": 586,
    "path": "../public/icons/link.svg"
  },
  "/icons/markdown.svg": {
    "type": "image/svg+xml",
    "etag": "\"329-k3G/PtDSCjFLPxAcFiSn6xPFFAc\"",
    "mtime": "2023-11-16T07:51:07.593Z",
    "size": 809,
    "path": "../public/icons/markdown.svg"
  },
  "/icons/nuxt.svg": {
    "type": "image/svg+xml",
    "etag": "\"393-wwJjM2+OwTKNw+s6jaahjrXdh00\"",
    "mtime": "2023-11-16T07:51:07.594Z",
    "size": 915,
    "path": "../public/icons/nuxt.svg"
  },
  "/icons/phone.svg": {
    "type": "image/svg+xml",
    "etag": "\"452-Uh2+r07LOt/uhBAN/PPdCsOyapA\"",
    "mtime": "2023-11-16T07:51:07.596Z",
    "size": 1106,
    "path": "../public/icons/phone.svg"
  },
  "/pwa/manifest.json": {
    "type": "application/json",
    "etag": "\"4bb-bik3+KBYz8ConINyhOZXdw6fgvU\"",
    "mtime": "2023-11-16T07:51:07.855Z",
    "size": 1211,
    "path": "../public/pwa/manifest.json"
  },
  "/_nuxt/about-me.67a2bd75.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"99f-kn0jHj3jeY9duqcsMDfqHhKIm3o\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 2463,
    "path": "../public/_nuxt/about-me.67a2bd75.css"
  },
  "/_nuxt/about-me.72849ee7.js": {
    "type": "application/javascript",
    "etag": "\"8608-cbqIx8mGSBlsXCNmbrzyEvfahFc\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 34312,
    "path": "../public/_nuxt/about-me.72849ee7.js"
  },
  "/_nuxt/arrow.13000919.js": {
    "type": "application/javascript",
    "etag": "\"87-kcD6+crYPyuStKtbHR6Ou5ZqlsA\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 135,
    "path": "../public/_nuxt/arrow.13000919.js"
  },
  "/_nuxt/composables.2bea14ba.js": {
    "type": "application/javascript",
    "etag": "\"61-ruBXHcii/CFD5OpVmuNkxgJuFHQ\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 97,
    "path": "../public/_nuxt/composables.2bea14ba.js"
  },
  "/_nuxt/contact-me.350563cd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"85a-hpP968r9XmMWuJ4rlCJ/pLl5Fxg\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 2138,
    "path": "../public/_nuxt/contact-me.350563cd.css"
  },
  "/_nuxt/contact-me.f4680887.js": {
    "type": "application/javascript",
    "etag": "\"1df4-TL7+WnXSzp735p/PecJqCOBOwmI\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 7668,
    "path": "../public/_nuxt/contact-me.f4680887.js"
  },
  "/_nuxt/entry.0af3e8aa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ac62-ciNaG4nA2Tw/lvbiCLN6AaoJBvI\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 44130,
    "path": "../public/_nuxt/entry.0af3e8aa.css"
  },
  "/_nuxt/entry.4777285d.js": {
    "type": "application/javascript",
    "etag": "\"25e4e-hroECoVSAakR5FnlGDRq8QgJYxw\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 155214,
    "path": "../public/_nuxt/entry.4777285d.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.60630dd2.js": {
    "type": "application/javascript",
    "etag": "\"8ca-gZzLnbwXGun7Ym4AAutTwbmaKYA\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 2250,
    "path": "../public/_nuxt/error-404.60630dd2.js"
  },
  "/_nuxt/error-500.386782a7.js": {
    "type": "application/javascript",
    "etag": "\"773-fl4LCMB676dI+xCUVwDZhrgnCF4\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 1907,
    "path": "../public/_nuxt/error-500.386782a7.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.2755a019.js": {
    "type": "application/javascript",
    "etag": "\"4ad-2LJj+LM+55+iqYk7Su1BDYJNfcI\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 1197,
    "path": "../public/_nuxt/error-component.2755a019.js"
  },
  "/_nuxt/FiraCode-Bold.cb8eb487.ttf": {
    "type": "font/ttf",
    "etag": "\"2e1cc-orOqYo5RBo4T3r9k4u16yXAJ9kA\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 188876,
    "path": "../public/_nuxt/FiraCode-Bold.cb8eb487.ttf"
  },
  "/_nuxt/FiraCode-Light.9a0ab96c.ttf": {
    "type": "font/ttf",
    "etag": "\"2e034-pNxR376ejEPU+10mpcKXAs54b0M\"",
    "mtime": "2024-01-03T11:02:09.669Z",
    "size": 188468,
    "path": "../public/_nuxt/FiraCode-Light.9a0ab96c.ttf"
  },
  "/_nuxt/FiraCode-Medium.e6130d9c.ttf": {
    "type": "font/ttf",
    "etag": "\"2df54-l7JwhdRewdcrAv+BDZpXCDnZHV4\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 188244,
    "path": "../public/_nuxt/FiraCode-Medium.e6130d9c.ttf"
  },
  "/_nuxt/FiraCode-Regular.d6641a9a.ttf": {
    "type": "font/ttf",
    "etag": "\"2df5c-heLz1vuG9DrczSZqitBnWXigGXU\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 188252,
    "path": "../public/_nuxt/FiraCode-Regular.d6641a9a.ttf"
  },
  "/_nuxt/FiraCode-Retina.2353fa3f.ttf": {
    "type": "font/ttf",
    "etag": "\"35cc4-wMH6Gnn8EC0rZ1M5axecGQGgSMI\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 220356,
    "path": "../public/_nuxt/FiraCode-Retina.2353fa3f.ttf"
  },
  "/_nuxt/FiraCode-SemiBold.acc523d8.ttf": {
    "type": "font/ttf",
    "etag": "\"2e0bc-MqnexoPc2ZtERrfNGxkHUg0T50g\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 188604,
    "path": "../public/_nuxt/FiraCode-SemiBold.acc523d8.ttf"
  },
  "/_nuxt/FiraCode-Variable.0ed78a6a.ttf": {
    "type": "font/ttf",
    "etag": "\"3f53c-KvDSPhDq42erfT+bm0gUs1jCtfA\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 259388,
    "path": "../public/_nuxt/FiraCode-Variable.0ed78a6a.ttf"
  },
  "/_nuxt/index.27b42e8f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1103-zRM+P9P1oDQalZXCoffkbAHF7UQ\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 4355,
    "path": "../public/_nuxt/index.27b42e8f.css"
  },
  "/_nuxt/index.fcbd7f1b.js": {
    "type": "application/javascript",
    "etag": "\"2252-OfYYykGIrYBXct/rIjs3K/duxvg\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 8786,
    "path": "../public/_nuxt/index.fcbd7f1b.js"
  },
  "/_nuxt/projects.26545ff0.js": {
    "type": "application/javascript",
    "etag": "\"138f-pYWht3LF+EZKjwG/Jrnd3U8XywE\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 5007,
    "path": "../public/_nuxt/projects.26545ff0.js"
  },
  "/_nuxt/projects.de832e29.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"931-KzXJkogttYNT0MBZhw9qtPm+S3Y\"",
    "mtime": "2024-01-03T11:02:09.670Z",
    "size": 2353,
    "path": "../public/_nuxt/projects.de832e29.css"
  },
  "/images/projects/alnafi.academy.png": {
    "type": "image/png",
    "etag": "\"c4703-CoBcudk7+vpc0HGQI8pqrpP9Z6g\"",
    "mtime": "2023-11-16T07:51:07.676Z",
    "size": 804611,
    "path": "../public/images/projects/alnafi.academy.png"
  },
  "/images/projects/alnafi.cloud.png": {
    "type": "image/png",
    "etag": "\"68768-L4bnzQjsHC55c+f723A0UhaEUVQ\"",
    "mtime": "2023-11-16T07:51:07.688Z",
    "size": 427880,
    "path": "../public/images/projects/alnafi.cloud.png"
  },
  "/images/projects/alnafi.png": {
    "type": "image/png",
    "etag": "\"96e7e-O1P4O9N+2ifvwheufBWkqNHDH/0\"",
    "mtime": "2023-11-16T07:51:07.703Z",
    "size": 618110,
    "path": "../public/images/projects/alnafi.png"
  },
  "/images/projects/data-lake.png": {
    "type": "image/png",
    "etag": "\"17cfc-YCoX8QaVSbd14AeaPGhymWbpy8Q\"",
    "mtime": "2023-11-16T07:51:07.706Z",
    "size": 97532,
    "path": "../public/images/projects/data-lake.png"
  },
  "/images/projects/epay.png": {
    "type": "image/png",
    "etag": "\"75315-FiLXro71bwVoy8DLzB+u6C2Hrtk\"",
    "mtime": "2023-11-16T07:51:07.719Z",
    "size": 480021,
    "path": "../public/images/projects/epay.png"
  },
  "/images/projects/knowgistic2.png": {
    "type": "image/png",
    "etag": "\"4126c-6NnQ8Ru4UCXCwDpZa0zIN2rgEtQ\"",
    "mtime": "2023-12-15T07:12:57.381Z",
    "size": 266860,
    "path": "../public/images/projects/knowgistic2.png"
  },
  "/images/projects/mind-smack.png": {
    "type": "image/png",
    "etag": "\"14311d-fy9A5FuZ78rB3pVQYQq64JdMus0\"",
    "mtime": "2023-11-16T07:51:07.745Z",
    "size": 1323293,
    "path": "../public/images/projects/mind-smack.png"
  },
  "/images/projects/Tiffon5.png": {
    "type": "image/png",
    "etag": "\"198a2f-FGolyvFsyg7rTmju3acuTlCVmMk\"",
    "mtime": "2023-12-15T07:37:05.836Z",
    "size": 1673775,
    "path": "../public/images/projects/Tiffon5.png"
  },
  "/icons/console/arrow-button.svg": {
    "type": "image/svg+xml",
    "etag": "\"b8-OTecWE3mEy4hYYxvIN+4wf2RclE\"",
    "mtime": "2023-11-16T07:51:07.574Z",
    "size": 184,
    "path": "../public/icons/console/arrow-button.svg"
  },
  "/icons/console/bolt-down-left.svg": {
    "type": "image/svg+xml",
    "etag": "\"6e4-aPMoiVO7fzLMVMx/Eb+ltxgVxuk\"",
    "mtime": "2023-11-16T07:51:07.575Z",
    "size": 1764,
    "path": "../public/icons/console/bolt-down-left.svg"
  },
  "/icons/console/bolt-down-right.svg": {
    "type": "image/svg+xml",
    "etag": "\"6e4-4kGaC6XzPaluVY3oIvffCaKV1y0\"",
    "mtime": "2023-11-16T07:51:07.576Z",
    "size": 1764,
    "path": "../public/icons/console/bolt-down-right.svg"
  },
  "/icons/console/bolt-up-left.svg": {
    "type": "image/svg+xml",
    "etag": "\"6df-r7D0r5ZU7ZskkbjEH76McGd9RRA\"",
    "mtime": "2023-11-16T07:51:07.577Z",
    "size": 1759,
    "path": "../public/icons/console/bolt-up-left.svg"
  },
  "/icons/console/bolt-up-right.svg": {
    "type": "image/svg+xml",
    "etag": "\"6de-fii/T0Zxh+QFVF25uVoRHFT9Nic\"",
    "mtime": "2023-11-16T07:51:07.579Z",
    "size": 1758,
    "path": "../public/icons/console/bolt-up-right.svg"
  },
  "/icons/gist/comments.svg": {
    "type": "image/svg+xml",
    "etag": "\"328-1drNuB0u/AWQVe8bPQ9Xq5Buq+g\"",
    "mtime": "2023-11-16T07:51:07.586Z",
    "size": 808,
    "path": "../public/icons/gist/comments.svg"
  },
  "/icons/gist/star.svg": {
    "type": "image/svg+xml",
    "etag": "\"1f3-MgBc7LeUw7x5Fm4m33vTGB7x08M\"",
    "mtime": "2023-11-16T07:51:07.587Z",
    "size": 499,
    "path": "../public/icons/gist/star.svg"
  },
  "/icons/social/facebook.svg": {
    "type": "image/svg+xml",
    "etag": "\"100-Cy0W5OAyVUuviM+rFOwxIv2o3Nc\"",
    "mtime": "2023-11-16T07:51:07.598Z",
    "size": 256,
    "path": "../public/icons/social/facebook.svg"
  },
  "/icons/social/github.svg": {
    "type": "image/svg+xml",
    "etag": "\"5ab-MpoSZo1Bki2p20whey6mQnfGi8w\"",
    "mtime": "2023-11-16T07:51:07.599Z",
    "size": 1451,
    "path": "../public/icons/social/github.svg"
  },
  "/icons/social/linkedin.svg": {
    "type": "image/svg+xml",
    "etag": "\"1db-f71J5jdUq/CJ2TLh6g+ICYUqbhY\"",
    "mtime": "2023-11-16T07:51:07.600Z",
    "size": 475,
    "path": "../public/icons/social/linkedin.svg"
  },
  "/icons/social/whatsapp.svg": {
    "type": "image/svg+xml",
    "etag": "\"3f8-VxpTLy+GY2dWOB03px9sQTLplSA\"",
    "mtime": "2023-12-07T10:29:06.942Z",
    "size": 1016,
    "path": "../public/icons/social/whatsapp.svg"
  },
  "/icons/techs/angular.svg": {
    "type": "image/svg+xml",
    "etag": "\"190-NeLQCaBzUiD44NQVEIXpj0RcNlA\"",
    "mtime": "2023-11-16T07:51:07.602Z",
    "size": 400,
    "path": "../public/icons/techs/angular.svg"
  },
  "/icons/techs/css.svg": {
    "type": "image/svg+xml",
    "etag": "\"15a-TFqO2rMQbKBe/iXTGim6I9Ee0RI\"",
    "mtime": "2023-11-16T07:51:07.603Z",
    "size": 346,
    "path": "../public/icons/techs/css.svg"
  },
  "/icons/techs/flutter.svg": {
    "type": "image/svg+xml",
    "etag": "\"139-IPj1TdjIHfy4KkhgMNPY8KQPbcY\"",
    "mtime": "2023-11-16T07:51:07.611Z",
    "size": 313,
    "path": "../public/icons/techs/flutter.svg"
  },
  "/icons/techs/gatsby.svg": {
    "type": "image/svg+xml",
    "etag": "\"358-gPr6qSUkXZTEEvNh6jH1d3vWTjw\"",
    "mtime": "2023-11-16T07:51:07.612Z",
    "size": 856,
    "path": "../public/icons/techs/gatsby.svg"
  },
  "/icons/techs/html.svg": {
    "type": "image/svg+xml",
    "etag": "\"1cc-lE/rMMrjGqU/7gcIS/FSkvPywu0\"",
    "mtime": "2023-11-16T07:51:07.613Z",
    "size": 460,
    "path": "../public/icons/techs/html.svg"
  },
  "/icons/techs/react.svg": {
    "type": "image/svg+xml",
    "etag": "\"1041-EmvDamWSG20A+5GpTtc3M5e6Usk\"",
    "mtime": "2023-11-16T07:51:07.614Z",
    "size": 4161,
    "path": "../public/icons/techs/react.svg"
  },
  "/icons/techs/vue.svg": {
    "type": "image/svg+xml",
    "etag": "\"14a-7GEat9GBzPHAKSM7Q0Ly4vop1+M\"",
    "mtime": "2023-11-16T07:51:07.615Z",
    "size": 330,
    "path": "../public/icons/techs/vue.svg"
  },
  "/pwa/icons/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"70ff-dKqzQbXvg02HZtWBsr6TAlLZeGg\"",
    "mtime": "2023-11-16T07:51:07.846Z",
    "size": 28927,
    "path": "../public/pwa/icons/apple-touch-icon.png"
  },
  "/pwa/icons/icon144.png": {
    "type": "image/png",
    "etag": "\"5716-eX54sEp0wzeVqfwfVMHgVnbwZ9I\"",
    "mtime": "2023-11-16T07:51:07.847Z",
    "size": 22294,
    "path": "../public/pwa/icons/icon144.png"
  },
  "/pwa/icons/icon168.png": {
    "type": "image/png",
    "etag": "\"65ac-/4uxhIiC8YrwA+8AYGcoKCpJJkE\"",
    "mtime": "2023-11-16T07:51:07.850Z",
    "size": 26028,
    "path": "../public/pwa/icons/icon168.png"
  },
  "/pwa/icons/icon192.png": {
    "type": "image/png",
    "etag": "\"70ff-dKqzQbXvg02HZtWBsr6TAlLZeGg\"",
    "mtime": "2023-11-16T07:51:07.851Z",
    "size": 28927,
    "path": "../public/pwa/icons/icon192.png"
  },
  "/pwa/icons/Icon48.png": {
    "type": "image/png",
    "etag": "\"159b-bIgxPcK+rCQAeoPTgh0cuDGkLUY\"",
    "mtime": "2023-11-16T07:51:07.841Z",
    "size": 5531,
    "path": "../public/pwa/icons/Icon48.png"
  },
  "/pwa/icons/icon512.png": {
    "type": "image/png",
    "etag": "\"21c51-qnVGyCBlHMkXvBDEwu5R1llhw/4\"",
    "mtime": "2023-11-16T07:51:07.854Z",
    "size": 138321,
    "path": "../public/pwa/icons/icon512.png"
  },
  "/pwa/icons/Icon72.png": {
    "type": "image/png",
    "etag": "\"232c-SH2402xakez3F7dx16MDm6C1T5I\"",
    "mtime": "2023-11-16T07:51:07.842Z",
    "size": 9004,
    "path": "../public/pwa/icons/Icon72.png"
  },
  "/pwa/icons/Icon96.png": {
    "type": "image/png",
    "etag": "\"2fb7-ehIcRbDO+jrp5x2ux/RFMVgQl8U\"",
    "mtime": "2023-11-16T07:51:07.844Z",
    "size": 12215,
    "path": "../public/pwa/icons/Icon96.png"
  },
  "/icons/techs/filled/angular.svg": {
    "type": "image/svg+xml",
    "etag": "\"293-uPHJsW61UbvYJExSpoF3oYEe87s\"",
    "mtime": "2023-11-16T07:51:07.604Z",
    "size": 659,
    "path": "../public/icons/techs/filled/angular.svg"
  },
  "/icons/techs/filled/css.svg": {
    "type": "image/svg+xml",
    "etag": "\"25e-oI+VfSFkfFOGTwNAdrFT9LhvNlo\"",
    "mtime": "2023-11-16T07:51:07.605Z",
    "size": 606,
    "path": "../public/icons/techs/filled/css.svg"
  },
  "/icons/techs/filled/flutter.svg": {
    "type": "image/svg+xml",
    "etag": "\"233-kT7jigv3O1P6BL0qxaye0EW8b+Q\"",
    "mtime": "2023-11-16T07:51:07.606Z",
    "size": 563,
    "path": "../public/icons/techs/filled/flutter.svg"
  },
  "/icons/techs/filled/gatsby.svg": {
    "type": "image/svg+xml",
    "etag": "\"370-cH9XknawEnWQni40/nQmYVUH3/E\"",
    "mtime": "2023-11-16T07:51:07.607Z",
    "size": 880,
    "path": "../public/icons/techs/filled/gatsby.svg"
  },
  "/icons/techs/filled/html.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b5-UinJPnCYT0OYGtfyyYzIdo9YawU\"",
    "mtime": "2023-11-16T07:51:07.608Z",
    "size": 693,
    "path": "../public/icons/techs/filled/html.svg"
  },
  "/icons/techs/filled/react.svg": {
    "type": "image/svg+xml",
    "etag": "\"11ac-/AtPM3JvN/fyo0efBJU4bPwdN24\"",
    "mtime": "2023-11-16T07:51:07.609Z",
    "size": 4524,
    "path": "../public/icons/techs/filled/react.svg"
  },
  "/icons/techs/filled/vue.svg": {
    "type": "image/svg+xml",
    "etag": "\"25e-izQoTlaUw1GOZuYx6jD4TvieaqA\"",
    "mtime": "2023-11-16T07:51:07.610Z",
    "size": 606,
    "path": "../public/icons/techs/filled/vue.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_GYzXui = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_GYzXui, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_GYzXui, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
