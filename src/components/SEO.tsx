import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  jsonLd?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Arian Kanani - So you think you\'re fit?',
  description = 'This is the training ground for modern warriors. Strength. Stillness. Precision. At Sensei Academy, you don\'t just train—you evolve.',
  keywords = 'fitness, strength training, mindset coaching, martial arts, mobility, discipline, warrior training, functional fitness',
  image = 'https://i.imgur.com/R8nphs9.png',
  url = 'https://ariankanani.com',
  type = 'website',
  jsonLd
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;