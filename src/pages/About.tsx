import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ParallaxHero from '../components/ParallaxHero';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Clients Transformed' },
    { number: '12', label: 'Years Experience' },
    { number: '100K+', label: 'Social Followers' }
  ];

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ariankanani.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://ariankanani.com/about'
      }
    ]
  };

  return (
    <>
      <SEO 
        title="About Arian Kanani - The Man Behind the Movement"
        description="Discover the story of Arian Kanani, movement & mindset coach with 15+ years experience in martial arts, rehabilitation, and functional fitness. Creator of Sensei Academy."
        jsonLd={breadcrumbJsonLd}
      />

      {/* Hero Section */}
      <div className="relative h-48 sm:h-48 md:h-64 bg-gradient-to-br from-shadow via-bronze to-yellow overflow-hidden pt-16 sm:pt-0">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-bebas text-3xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-none text-center mt-2 md:mt-8"
              style={{ display: 'block', visibility: 'visible', opacity: 1 }}
            >
              <h1 className="font-bebas text-3xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-none text-center mt-2 md:mt-8">
                About Arian Kanani
              </h1>
            </motion.h1>
          </div>
        </div>
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto mt-4 px-2">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl leading-relaxed font-normal"
            style={{ display: 'block', visibility: 'visible', opacity: 1 }}
          >
            <h2 className="text-base sm:text-lg md:text-xl leading-relaxed font-normal">
              More than a coach. A lifelong athlete, warrior of discipline, and speaker of truths.
            </h2>
          </motion.h2>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-sandstone/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center"
              >
                <h3 className="font-bebas text-3xl sm:text-4xl tracking-tighter uppercase text-shadow mb-1 sm:mb-2" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                  {stat.number}
                </h3>
                <h4 className="text-gray-600 font-medium text-sm sm:text-base" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                  {stat.label}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Man Behind the Movement */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none text-center"
            style={{ display: 'block', visibility: 'visible', opacity: 1 }}
          >
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none text-center">
              The Man Behind the Movement
            </h2>
          </motion.h2>
            
          {/* Arian's Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12 text-center"
          >
            <img
              src="https://i.imgur.com/nuXWrN3.jpeg"
              alt="Arian Kanani"
              className="w-64 sm:w-80 md:w-96 h-auto object-contain rounded-lg shadow-lg mx-auto"
              loading="lazy"
            />
          </motion.div>
            
          <div className="prose prose-base sm:prose-lg max-w-none text-gray-700 space-y-6 sm:space-y-8">
            <p>
              Since the age of five, movement has been his language. From martial arts to boxing, from underage gym sessions at twelve to a lifetime of relentless training, Arian has lived every chapter of his life through the body. But over time, he realized something profound: most approaches to fitness were incomplete. Bodybuilding builds strength but lacks flow. Yoga gives flexibility but no grit. Calisthenics teaches control, but not capacity. So he created his own system—his own code.
            </p>

            <div className="bg-sandstone/20 p-6 sm:p-8 rounded-lg">
              <h3 className="font-bebas text-xl sm:text-2xl tracking-tighter uppercase text-bronze mb-3 sm:mb-4" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                The 5 Pillars of Fitness:
              </h3>
              <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                <div>Strength & Explosive Power</div>
                <div>Mobility & Flexibility</div>
                <div>Endurance & Agility</div>
                <div>Balance</div>
                <div>And the hidden sixth: Neuromuscular Connection—the mind-body link that separates movement from mastery.</div>
              </div>
            </div>

            <p>
              For over 12 years, Arian has trained hundreds of people across the world. But his mission runs deeper than reps and sets. His goal is not just to build bodies—but to awaken souls. His coaching is not just physical—it's spiritual. Because fitness, to him, is the anchor of the warrior. It's where we show up under every emotion—grief, joy, rage, doubt—and meet ourselves in motion.
            </p>

            <div className="bg-yellow/10 p-6 sm:p-8 rounded-lg italic text-center text-lg sm:text-xl leading-relaxed">
              "You lost someone? You train.<br />
              You made money? You train.<br />
              You're sad, you're tired, you're in love, you're in pain?<br />
              You show up.<br />
              Because self-mastery begins in the body."
            </div>

            <p>
              Arian believes life is art. To live it well is a dance—a constant rhythm between strength and surrender. And just like music, life plays different tunes. Some days it's war drums. Other days it's jazz. The key is learning how to move with whatever rhythm life gives you.
            </p>

            <p>
              That's why fitness is at the core of his philosophy. Because the body is how we experience this world—how we carry our pain, how we pursue our dreams, how we connect with our people. And if the body is weak, the rest of life stumbles with it.
            </p>

            <p>
              Through every challenge, Arian remains a student of life. A man at war with his own comfort, his lusts, his procrastinations. A man who doesn't just preach discipline—he pursues it. Every day, he strives to be the commander-in-chief of his life.
            </p>

            <div className="bg-bronze/10 p-6 sm:p-8 rounded-lg italic text-center text-lg sm:text-xl leading-relaxed">
              "When I say move—I move.<br />
              When I say sit—I sit.<br />
              When it's time for war, I rise.<br />
              When it's time for love, I soften.<br />
              That's the art of life."
            </div>

            <p>
              This is what Arian brings to the world.<br />
              Not just a method.<br />
              Not just a workout.<br />
              But a movement—<br />
              one rooted in power, presence, and purpose.
            </p>

            <hr className="border-bronze/20" />

            <p>
              Today, Arian's mission is simple:<br />
              To move the world—<br />
              one person,<br />
              one breath,<br />
              one rep at a time.<br />
              To help people remember what it means to fall in love with movement again—<br />
              not for vanity,<br />
              but for vitality.<br />
              The way we did when we were kids—<br />
              when movement was joy,<br />
              not obligation.<br />
              When the body wasn't a burden,<br />
              but a vessel of freedom.
            </p>

            <p>
              And to help people redefine what working out really is—<br />
              not punishment,<br />
              but self-respect.<br />
              Not vanity,<br />
              but self-love.<br />
              A declaration of gratitude.<br />
              A raising of one's standard.<br />
              A daily reminder that I am alive, and I am able.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;