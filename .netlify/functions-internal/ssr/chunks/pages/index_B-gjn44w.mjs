import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_C82wo8L6.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './_id__BsHoNK13.mjs';
import { S as Search } from './_search__CABjgYAV.mjs';

const $$Astro$1 = createAstro();
const $$Movies = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Movies;
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=51b1043b2de7feb0defa5074cc511564&language=es-MX&page=1%27"
  );
  const data = await res.json();
  const detail = "/detail/";
  const poster_url = "https://image.tmdb.org/t/p/w500/";
  return renderTemplate`${maybeRenderHead()}<div class="row"> ${data.results.map((item) => renderTemplate`<div class="col-lg-3"> <div class="card mt-4" style="width: 18 rem;"> <a${addAttribute(detail + item.id, "href")}> <img${addAttribute(poster_url + item.poster_path, "src")} alt="poster" class="card-img-top"> </a> <div class="card-body"> <h5 class="card-title">${item.title}</h5> </div> </div> </div>`)} </div>`;
}, "/Users/antoniotorres/Sites/ProtoMovies/src/components/Movies.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Search", Search, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Search.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "Movies", $$Movies, {})} ` })}`;
}, "/Users/antoniotorres/Sites/ProtoMovies/src/pages/index.astro", void 0);

const $$file = "/Users/antoniotorres/Sites/ProtoMovies/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
