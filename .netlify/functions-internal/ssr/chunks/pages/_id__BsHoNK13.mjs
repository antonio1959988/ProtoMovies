import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot } from '../astro_C82wo8L6.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav class="navbar bg-secondary"> <div class="container-fluid"> <a href="/" style="text-decoration: none;"><span class="navbar-brand mb-0 h1 text-white">ProtoMovies</span></a> </div> </nav>`;
}, "/Users/antoniotorres/Sites/ProtoMovies/src/components/Nav.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Movies Astro</title>${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <div class="container"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/antoniotorres/Sites/ProtoMovies/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/" + id + "?api_key=51b1043b2de7feb0defa5074cc511564&language=es-MX"
  );
  const data = await res.json();
  const poster_url = "https://image.tmdb.org/t/p/w500/";
  const fetchVideo = await fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?language=es-MX&api_key=51b1043b2de7feb0defa5074cc511564");
  const trailer = await fetchVideo.json();
  const resVid = trailer.results.filter((p) => p.type === "Trailer");
  const video = resVid[0];
  const youtube = "https://www.youtube.com/embed/";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="row mt-5"> <div class="col-md-4"> <img${addAttribute(poster_url + data.poster_path, "src")} alt="poster" class="img-fluid rounded-start"> </div> <div class="col-md-8"> <h1><span class="badge text-bg-dark">${data.title}</span></h1> <h4>${data.tagline}</h4> <h2>Sinópsis</h2> <p>${data.overview}</p> <p><span class="badge text-bg-secondary">${data.release_date}</span></p> <h1><span class="badge text-bg-danger">${Math.round(data.vote_average)}</span></h1> </div> </div> <br> <h1>Trailer</h1> <iframe${addAttribute(youtube + video?.key, "src")} width="1280" height="720" allowfullscreen></iframe> ` })}`;
}, "/Users/antoniotorres/Sites/ProtoMovies/src/pages/detail/[id].astro", void 0);

const $$file = "/Users/antoniotorres/Sites/ProtoMovies/src/pages/detail/[id].astro";
const $$url = "/detail/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _ };
