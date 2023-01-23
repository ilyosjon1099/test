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
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 1,
  },
  {
    title: 'WebRTC App',
    description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
      image: '/images/3.jpg',
      tags: ['React', 'WebRTC'],
    source: 'https://google.com',
    visit: 'https://google.com',
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
