import { useState } from "react";

export const projects = [
  {
    title: 'MERN AI Image Generation App',
    description: "Using React, Node.js, Express & MongoDB. You can create your dream image",
      image: '/images/1.png',
      tags: ['Mongo', 'Express', 'React', 'Node'],
    source: 'https://github.com/ergashevislomjon/image_ai',
    visit: 'https://image-ai-five.vercel.app/',
    id: 0,
  },
  {
    title: 'Chat AI application',
    description:"With an elegant user interface that resembles the Chat GPT app, communication with advanced GPT 3 model API.",
    image: '/images/2.png',
    tags: ['React', 'JavaScript'],
    source: 'https://github.com/ergashevislomjon/chat_open_ai',
    visit: 'https://chat-openai-uz.vercel.app/',
    id: 1,
  },
  {
    title: 'Google search clone',
    description: "A google clone that doesn't differ from Google. Almost all Google search functions are available.",
      image: '/images/3.jpg',
      tags: ['React', 'Javascript', 'Tailwind'],
    source: 'https://github.com/ergashevislomjon/google-clone',
    visit: 'https://google-z.netlify.app/',
    id: 2,
  },
  {
    title: 'Unichat',
    description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: '/images/4.jpg',
    tags: ['React', 'ChatEngine', 'Firebase'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2021, text: 'Started my journey', },
  { year: 2021, text: 'Worked as a freelance developer', },
  { year: 2022, text: 'I finished the Frontend course in Najot ta\'lim', },
  { year: 2022, text: 'I started working at Abutech company', },
];
