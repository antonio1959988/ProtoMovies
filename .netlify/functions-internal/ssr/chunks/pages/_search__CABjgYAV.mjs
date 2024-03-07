import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_C82wo8L6.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './_id__BsHoNK13.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

function Search() {
  const [value, setValue] = useState("");
  const buscar = (e) => setValue(e.target.value);
  const url = "/results/";
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("center", { children: [
    /* @__PURE__ */ jsx("h1", { class: "mt-5", children: "Buscar Película" }),
    /* @__PURE__ */ jsx("form", { action: url + value, method: "POST", children: /* @__PURE__ */ jsx("input", { type: "search", class: "form-control p-3", value, onChange: buscar, placeholder: "Buscar..." }) })
  ] }) });
}

const $$Astro = createAstro();
const $$search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$search;
  const { search } = Astro2.params;
  const response = await fetch("https://api.themoviedb.org/3/search/movie?query=" + search + "&include_adult=true&language=es-MX&api_key=51b1043b2de7feb0defa5074cc511564");
  const data = await response.json();
  const detail = "/detail/";
  const poster_url = "https://image.tmdb.org/t/p/w500/";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Searche", Search, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/antoniotorres/Sites/ProtoMovies/src/components/Search.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<div class="row"> ${data.results.map((item) => renderTemplate`<div class="col-lg-3"> <div class="card mt-4" style="width: 18 rem;"> <a${addAttribute(detail + item.id, "href")}> <img${addAttribute(poster_url + item.poster_path, "src")} alt="poster" class="card-img-top"> </a> <div class="card-body"> <h5 class="card-title">${item.title}</h5> </div> </div> </div>`)} </div> ` })}`;
}, "/Users/antoniotorres/Sites/ProtoMovies/src/pages/results/[search].astro", void 0);

const $$file = "/Users/antoniotorres/Sites/ProtoMovies/src/pages/results/[search].astro";
const $$url = "/results/[search]";

const _search_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$search,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Search as S, _search_ as _ };
