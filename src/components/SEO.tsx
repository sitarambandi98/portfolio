import { Helmet } from 'react-helmet-async';
import { profile } from '../data/portfolio';

export default function SEO() {
  return (
    <Helmet>
      <title>{profile.name} - {profile.title}</title>
      <meta name="description" content={profile.introduction} />
      <meta name="keywords" content="Video Editor, Content Creator, Premiere Pro, After Effects, CapCut, Social Media, Instagram Reels, YouTube Shorts, Motion Graphics" />
      <meta name="author" content={profile.name} />
      
      <meta property="og:title" content={`${profile.name} - ${profile.title}`} />
      <meta property="og:description" content={profile.introduction} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${profile.name} - ${profile.title}`} />
      <meta name="twitter:description" content={profile.introduction} />
      
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://sitarambandi98.github.io/portfolio/" />
    </Helmet>
  );
}
