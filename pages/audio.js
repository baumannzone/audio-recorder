import Head from 'next/head';
import BaseHeader from '../components/baseHeader';
import { useState, useEffect, useCallback, useRef } from 'react';

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
  const [isRecording, setIsRecording] = useState(false);
  const [canRecord, setCanRecord] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(undefined);
  // const [chunks, setChunks] = useState([]);
  const [audios, setAudios] = useState([]);
  const chunks = useRef([]);

  const onDataAvailable = useCallback((e) => {
    console.log('onDataAvailable', 111111);
    if (e.data.size > 0) {
      console.log('onDataAvailable', 22222);
      // setChunks((chunks) => [...chunks, e.data]);
      chunks.current.push(e.data);
    }
  }, []);

  const onStop = useCallback(() => {
    // const audio = new Audio();
    // audio.src = URL.createObjectURL(
    //   new Blob(chunks, { type: 'audio/ogg; codecs=opus' })
    // );

    // console.log({ chunks });

    const blob = new Blob(chunks.current, { type: 'audio/ogg; codecs=opus' });
    const audioURL = window.URL.createObjectURL(blob);

    setAudios((audios) => [...audios, { src: audioURL }]);
    // setChunks([]);
    chunks.current = [];

    window.URL.revokeObjectURL(blob);
  }, [chunks]);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      setCanRecord(true);
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          console.log('<<<<<<<<<<<<<<<stream>>>>>>>>>>>>>>>', stream);
          const mediaRecorder = new MediaRecorder(stream);
          setMediaRecorder(mediaRecorder);

          mediaRecorder.addEventListener('dataavailable', onDataAvailable);
          mediaRecorder.addEventListener('stop', onStop);
        })
        .catch((err) => {
          console.log({ err });
        });
    } else {
      console.log('getUserMedia not supported on your browser!');
    }
  }, [chunks, onDataAvailable, onStop]);

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

          {canRecord && (
            <>
              <div className="flex justify-start">
                <button
                  className="btn border-white text-white bg-fuchsia-700 hover:bg-white hover:text-fuchsia-700 focus:ring-fuchsia-200"
                  onClick={() => {
                    mediaRecorder.start();
                    setIsRecording(true);
                  }}
                  disabled={isRecording}
                >
                  Grabar
                </button>
                <button
                  className="btn border-white text-white bg-fuchsia-700 hover:bg-white hover:text-fuchsia-700 focus:ring-fuchsia-200"
                  onClick={() => {
                    mediaRecorder.stop();
                    setIsRecording(false);
                  }}
                  disabled={!isRecording}
                >
                  Detener
                </button>
              </div>
            </>
          )}

          <hr />

          <ul role="list" className="divide-y divide-gray-200">
            {audios.map((audio, index) => (
              <li key={index} className="py-4 flex items-center">
                <audio controls src={audio.src} />

                <button
                  className="btn inline-flex justify-center border-white text-white bg-fuchsia-700 hover:bg-white hover:text-fuchsia-700 focus:ring-fuchsia-200"
                  onClick={() => {
                    setAudios((audios) => audios.filter((a, i) => i !== index));
                  }}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
