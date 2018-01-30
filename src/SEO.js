import React from 'react';
import { Helmet } from 'react-helmet';

const seoImagesURL = {
  aboutMe: 'https://www.dropbox.com/s/h4q29os7sg1z042/about-me.png?dl=0',
  contact: 'https://www.dropbox.com/s/fvrhuhaujhpm6gv/contact.png?dl=0',
  cv: 'https://www.dropbox.com/s/k1uttra3prcktj4/cv.png?dl=0',
  publications:
    'https://www.dropbox.com/s/63uyeplv77zu3yw/publications.png?dl=0'
};

const getImage = image => {
  return seoImagesURL[image];
};

const seoURL = () => window.location.href;

const getMetaTags = ({
  title,
  description,
  url,
  contentType,
  published,
  updated,
  category,
  tags,
  keywords,
  image
}) => {
  const metaTags = [
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: description },
    { itemprop: 'image', content: getImage(image) },
    { name: 'author', content: 'Michael Wright' },
    { name: 'description', content: description },
    {
      name: 'keywords',
      content:
        keywords ||
        'Michael Wright, Software Engineer, Web Design, Development, Consulting'
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@wright1michael1' },
    { name: 'twitter:title', content: `${title} | Michael Wright` },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: '@wright1michael1' },
    { name: 'twitter:image:src', content: getImage(image) },
    { name: 'og:title', content: `${title} | Michael Wright` },
    { name: 'og:type', content: contentType },
    { name: 'og:url', content: url },
    { name: 'og:image', content: getImage(image) },
    { name: 'og:description', content: description },
    { name: 'og:site_name', content: 'Michael Wright' },
    { name: 'fb:app_id', content: undefined }
  ];

  if (published)
    metaTags.push({ name: 'article:published_time', content: published });
  if (updated)
    metaTags.push({ name: 'article:modified_time', content: updated });
  if (category) metaTags.push({ name: 'article:section', content: category });
  if (tags) metaTags.push({ name: 'article:tag', content: tags });

  return metaTags;
};

const SEO = ({
  schema,
  title,
  description,
  contentType,
  published,
  updated,
  category,
  tags,
  keywords,
  image
}) => (
  <Helmet
    htmlAttributes={{
      lang: 'en',
      itemscope: undefined,
      itemtype: `http://schema.org/${schema}`
    }}
    titleTemplate="Michael Wright - %s"
    title={title}
    link={[{ rel: 'canonical', href: seoURL() }]}
    meta={getMetaTags({
      title,
      description,
      contentType,
      url: seoURL(),
      published,
      updated,
      category,
      tags,
      keywords,
      image
    })}
  />
);

export default SEO;
