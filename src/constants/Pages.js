import content from "./content";

export default content.pages.map((page) => {
  const block = page.blocks[0];

  return {
    title: page.title,
    path: `/${page.slug}`,
    type: block.type, // NOTE - This value is currently not used
    headline: block.headline,
    subhead: block.subhead,
    cta: block.cta,
    background: block.background,
  };
});
