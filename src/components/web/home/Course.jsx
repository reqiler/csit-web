import React, { useState, useEffect, useRef } from 'react';
import {
  RotateCcw,
  Send,
  LifeBuoy,
  Gift,
  Lock,
  Wifi
} from "lucide-react";

const features = [
  {
    icon: Wifi,
    th: "เครือข่ายคอมพิวเตอร์และความมั่นคงปลอดภัยไซเบอร์",
    en: "Computer Network & Cybersecurity",
  },
  {
    icon: RotateCcw,
    th: "การพัฒนาซอฟต์แวร์",
    en: "Software Development",
  },
  {
    icon: Send,
    th: "ปัญญาประดิษฐ์และวิทยาการข้อมูล",
    en: "AI & Data Science",
  },
  {
    icon: LifeBuoy,
    th: "การจัดการสารสนเทศ",
    en: "Information Management",
  },
  {
    icon: Gift,
    th: "ธุรกิจดิจิทัลและพาณิชย์อิเล็กทรอนิกส์",
    en: "Digital Business & E-Commerce",
  },

];
export default function Course() {
  const courses = [

    {
      title: "Science of Computer",
      titleTH: "สาขาวิทยาการคอมพิวเตอร์ (วท.บ.)",
      titleEN: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ เกิดจากความร่วมมืออย่างระหว่างคณาจารย์ผู้เชี่ยวชาญและภาคเอกชนชั้นนำ เพื่อบ่มเพาะนักศึกษาให้เป็นมืออาชีพที่ตอบโจทย์อุตสาหกรรม โดยมุ่งเน้นทักษะรอบด้าน ตั้งแต่การทำวิศวกรรมซอฟต์แวร์",
      image: "/img/banner-hero/CS.jpg",
      link: "/program-cs",

    },
    {
      title: "Information Technology",
      titleTH: "สาขาเทคโนโลยีสารสนเทศ (วท.บ.)",
      titleEN: "หลักสูตรวิทยาศาสตรบัณฑิตสาขาเทคโนโลยีสารสนเทศถูกพัฒนาโดยทีมอาจารย์ร่วมกับหน่วยงานซอฟต์แวร์ชั้นนำ โดยเน้นให้นักศึกษาสามารถประยุกต์ใช้ทักษะทางเทคโนโลยีสารสนเทศ ให้ตรงกับความต้องการขององค์กร มีความเชี่ยวชาญในด้าน เทคโนโลยีธุรกิจดิจิทัล การพัฒนาซอฟต์แวร์แบบฟูลสแต็ก วิทยาการข้อมูลเชิงประยุกต์",
      image: "/img/banner-hero/IT.png",
      link: "/program-it"
    }
  ];


  return (
    <section className="max-w-7xl mx-auto mt-5 px-4 sm:px-0">
      {/* Section Header */}
      <div className="mb-8 mt-10">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
          หลักสูตรที่เปิดรับสมัคร
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          เส้นทางการเรียนรู้สู่สายอาชีพดิจิทัล
        </p>
      </div>
      <div className="mb-6">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[2/1] sm:aspect-[4/1] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
            <img
              src="/img/pgmix.png"
              alt="pgmix"
              className="w-full h-full object-cover object-[11%_center]"
            />
          </div>
        </div>
      </div>
      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {courses.map((course, index) => (
          <a
            key={index}
            href={course.link}
            className={`block animate-fade-in-up animation-delay-${index + 1}`}
          >
            <CourseCard
              title={course.title}
              titleTH={course.titleTH}
              titleEN={course.titleEN}
              image={course.image}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

function CourseCard({ title, titleTH, titleEN, image }) {
  return (

    <div className="group cursor-pointer h-80 perspective">

      <div>

      </div>

      {/* Card Container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-102">

        {/* Background Image */}
        <img
          src={image}
          alt={titleTH}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-100"
        />

        {/* Gradient Overlay - Enhanced for better text visibility */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500" />

        {/* English Title Badge - Top Left */}
        <div className="absolute top-0 left-0 right-0 z-20 p-6 flex items-start justify-between">
          <h2 className="text-white/70 font-bold text-lg group-hover:text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-cyan-400">
            {title}
          </h2>
          <div className="w-12 h-12 rounded-full bg-blue-500/20 group-hover:bg-blue-500/40 transition-all duration-300 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-300 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full p-8 flex flex-col justify-end">
          {/* Thai Title */}
          <h4 className="text-white text-2xl md:text-3xl font-bold mb-4 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-cyan-400">
            {titleTH}
          </h4>

          {/* Description */}
          <p className="text-white/85 text-sm md:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-all duration-500">
            {titleEN}
          </p>

          {/* Learn More indicator */}
          <div className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <span className="text-blue-300 text-sm font-medium animate-pulse">ดูรายละเอียดเพิ่มเติม</span>
            <svg className="w-5 h-5 text-blue-300 group-hover:translate-x-2 transition-all duration-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
