import Head from 'next/head';
import BaseHeader from '../components/baseHeader';
import { useState, useEffect } from 'react';

const docIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

export default function Audio() {
  const [canRecord, setCanRecord] = useState(false);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      setCanRecord(true);
    } else {
      console.log('getUserMedia not supported on your browser!');
    }
  }, []);

  return (
    <>
      <Head>
        <title>MediaStream Recording API - Workshop Baumannzone </title>
        <meta
          name="description"
          content="Convierte tu navegador en una grabadora "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseHeader
        title="MediaStream Recording API"
        subtitle="aka Media Recorder API"
      >
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder"
          target="_blank"
          rel="noopener noreferrer"
          className="btn inline-flex justify-center border-white text-white bg-fuchsia-700 hover:bg-white hover:text-fuchsia-700 focus:ring-fuchsia-200"
        >
          {docIcon()}
          Documentación
        </a>
      </BaseHeader>
      <div className="bg-white py-16 px-4">
        <div className="prose prose-xl mx-auto prose-fuchsia">
          <p>
            La API de MediaStream Recording nos permite capturar datos (de audio
            y/o video) que son generados por un objeto de tipo MediaStream o
            HTMLMediaElement para analizarlos, procesarlos o guardarlos.
          </p>

          <hr />
        </div>
      </div>
    </>
  );
}