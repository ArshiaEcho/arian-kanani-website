export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  videoEmbed?: string;
  quote: string;
  result: string;
  timeline: string;
  challenge: string;
  process: string;
  metrics: Array<{
    label: string;
    before: string;
    after: string;
  }>;
}

export const testimonials: Testimonial[] = [
  {
    id: 'ernie-6weeks',
    name: 'Ernie',
    location: 'Miami, Florida',
    image: 'https://i.imgur.com/DhuV0Og.png',
    videoEmbed: 'https://vimeo.com/1120663237',
    quote: 'Six weeks in, I\'m faster, stronger, and more agile than I\'ve been in 20 years. The workouts hurt — but in the best way — and with results like this, you welcome the pain. Arian\'s program is 1,000% worth it.',
    result: 'Within two weeks, started seeing and feeling results. After six weeks, reports being faster, stronger, and more agile than in 20 years — feeling two decades younger. Friends and family noticed the transformation and asked about the change.',
    timeline: '6 weeks',
    challenge: 'Wanted a serious transformation. Needed structure, accountability, and a program that could deliver visible results.',
    process: 'Committed to Arian\'s program for six weeks, following every workout plan and embracing the intensity. Focused on progressive overload, consistency, and mindset shifts toward embracing discomfort as part of growth.',
    metrics: [
      { label: 'Performance', before: 'Seeking improvement', after: 'Strength, speed, and agility dramatically improved' },
      { label: 'Appearance', before: 'Starting transformation', after: 'Visible body composition changes, compliments from friends and family' },
      { label: 'Mindset', before: 'Needed structure', after: 'Welcomes challenging workouts and the "good hurt" knowing results follow' }
    ]
  },
  {
    id: 'darius-7months',
    name: 'Darius',
    location: 'Chicago, USA',
    image: 'https://i.imgur.com/ZB8l83m.png',
    videoEmbed: 'https://vimeo.com/1120663227',
    quote: 'I stepped into this very scared, but Arian made it super easy to lock in. Not only did we hit my goals — we created a better life. I\'m looking good, feeling good, and loving every minute of it.',
    result: 'Lost a significant amount of weight, feels healthier, more confident, and mentally clearer. Reports that the program improved not only fitness but also relationships and overall life satisfaction.',
    timeline: '7 months',
    challenge: 'First-time working with a trainer, felt nervous and unsure what to expect. Wanted to lose weight, get healthier, and improve life beyond just fitness goals.',
    process: 'Worked with Arian for six to seven months, following his tailored workout plans and guidance. Training focused on more than just exercise — it incorporated mindset, mental clarity, and lifestyle habits designed for long-term success.',
    metrics: [
      { label: 'Weight Loss', before: 'Significant weight loss', after: 'Feeling fit, healthy, and confident' },
      { label: 'Lifestyle', before: 'Nervous and unsure', after: 'Clearer mind, stronger relationships, better quality of life' },
      { label: 'Training', before: 'First-time trainee', after: 'Consistent, goal-focused, and thriving' }
    ]
  },
  {
    id: 'tanner-2months',
    name: 'Tanner',
    location: 'Los Angeles, California',
    image: 'https://i.imgur.com/gg6axTp.png',
    videoEmbed: 'https://vimeo.com/1120663252',
    quote: 'After just seven weeks, I\'m stronger, faster, and more flexible. This isn\'t just workouts — Arian cares about you as a person. He\'s helped me improve physically, mentally, and even in my relationship with my wife. I\'m excited to finish this 90-day program and see how far I can go.',
    result: 'Stronger, faster, and more flexible after seven weeks. Enjoying training, staying consistent, and holding himself accountable. Even his kids have noticed the positive changes. Reports better communication, improved health, and benefits in his marriage and day-to-day life.',
    timeline: '2 months',
    challenge: 'Wanted a coach who matched his energy, not just someone to chase PRs. His goal was to build everyday strength, stay healthy for his wife and kids, and create sustainable habits.',
    process: 'Worked with Arian for two months, including weekly calls, daily check-ins, and personalized feedback. Received a mix of strength, mobility, and lifestyle guidance — from diet adjustments to mindset coaching. Program included unique recommendations like nutrition tweaks, recovery tools, and mental strategies to improve overall well-being.',
    metrics: [
      { label: 'Physical Changes', before: 'Seeking improvement', after: 'Stronger, faster, more flexible' },
      { label: 'Lifestyle Impact', before: 'Wanting better health for family', after: 'Better health for family life, improved mindset, positive marriage impact' },
      { label: 'Coach Relationship', before: 'Looking for right coach', after: 'Describes weekly calls as "therapeutic," appreciates Arian\'s care and holistic approach' }
    ]
  },
  {
    id: 'hooch-vancouver',
    name: 'Hooch',
    location: 'Vancouver, Canada',
    image: 'https://i.imgur.com/BJmdNJm.png',
    videoEmbed: 'https://vimeo.com/1120663273',
    quote: 'I just turned 59, but thanks to Ari\'s training, I feel like I\'m 30 again. He\'s professional, kind, positive, and extremely knowledgeable. I\'ll never hesitate to refer him to anyone.',
    result: 'Feels decades younger — "like a 30-year-old" at age 59. Reports complete transformation, renewed energy, and confidence. Strongly recommends Arian to others seeking meaningful change.',
    timeline: '1 year',
    challenge: 'Dealing with the physical effects of aging and wanted to feel youthful and strong again. Needed a trusted coach to guide a long-term transformation.',
    process: 'Trained with Arian for many years, following his professional, structured approach. Sessions were designed to be challenging yet safe, with a focus on total body transformation and sustainable results.',
    metrics: [
      { label: 'Age Impact', before: '59 years old', after: 'Feels like 30' },
      { label: 'Coach Quality', before: 'Seeking guidance', after: 'Professional, kind, and highly knowledgeable' },
      { label: 'Outcome', before: 'Aging effects', after: 'Complete physical and mental transformation' }
    ]
  },
  {
    id: 'lucas-vancouver',
    name: 'Lucas',
    location: 'Vancouver, Canada',
    image: 'https://i.imgur.com/6pTPVRX.png',
    videoEmbed: 'https://vimeo.com/1120663246',
    quote: 'In two years with Arian, my physique and athletic abilities have transformed — but just as importantly, I\'ve grown mentally. He\'s not just a trainer, he\'s a mentor.',
    result: 'Major improvements in physique and athletic performance, plus significant mental growth. Credits Arian for being a wise and intelligent coach who elevates both physical results and personal development.',
    timeline: '2 years',
    challenge: 'Wanted to improve physique, athletic ability, and overall growth — both physically and mentally.',
    process: 'Trained with Arian for two years with structured, progressive programming focused on strength, conditioning, and mindset development. Benefited from Arian\'s guidance not only as a trainer but also as a mentor.',
    metrics: [
      { label: 'Physical Results', before: 'Starting physique', after: 'Stronger physique, improved athletic capability' },
      { label: 'Mental Growth', before: 'Seeking growth', after: 'Grew in mindset, discipline, and knowledge through training' },
      { label: 'Coach Impact', before: 'Looking for trainer', after: 'Describes Arian as wise and highly skilled beyond just physical training' }
    ]
  },
];