import Head from 'next/head';
import Image from 'next/image';

import BaseHeader from '../components/baseHeader';

import baumannzone from '../public/baumann.jpg';
const social = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/baumannzone',
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/baumannzone',
  },
  {
    name: 'Twitch',
    link: 'https://twitch.com/baumannzone',
  },
  {
    name: 'YouTube',
    link: 'https://youtube.com/rambitoJS',
  },
];

const playPopSound = () => {
  new Audio('/pop.mp3').play();
};

const igIcon = () => (
  <svg
    className="h-5 w-5 mr-2"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Instagram Baumannzone</title>
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>🎙 Audio Recorder - Baumannzone</title>
        <meta
          name="description"
          content="Turn your browser into an audio recorder using native JavaScript functions of your browser"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseHeader
        title="🎙 Convierte tu navegador en una grabadora de audio 🎤"
        subtitle="Usando funciones nativas de JavaScript de tu navegador"
      >
        <a
          href="https://instagram.com/baumannzone"
          target="_blank"
          rel="noopener noreferrer"
          className="btn inline-flex justify-center border-white text-white bg-fuchsia-700 hover:bg-white hover:text-fuchsia-700 focus:ring-fuchsia-200"
        >
          {igIcon()}
          Sígueme
        </a>
      </BaseHeader>

      <div className="bg-white py-16 px-4">
        <div className="prose prose-xl mx-auto prose-fuchsia">
          <p>
            ¿Alguna vez te has preguntado cómo puedes acceder al{' '}
            <span className="underline decoration-sky-500 cursor-none">
              micrófono
            </span>{' '}
            de tu PC usando{' '}
            <span className="underline decoration-pink-500 cursor-none">
              JavaScript
            </span>{' '}
            desde un navegador? Con la llegada de la API de{' '}
            <code>MediaRecorder</code> a los navegadores web, hacer esto es
            posible.
          </p>
          <p>
            En este taller en vivo veremos cómo acceder al micrófono desde el
            navegador y crear nuestra grabadora,{' '}
            <span
              className="has-tooltip cursor-help"
              onMouseOver={playPopSound}
            >
              <span className="tooltip rounded shadow-lg text-sm font-bold px-2 py-1 bg-fuchsia-700 text-white -mt-4">
                #Gracias JavaScript 🔑
              </span>
              gracias
            </span>{' '}
            a JavaScript del lado del navegador de manera{' '}
            <span className="underline decoration-teal-500 cursor-none">
              nativa
            </span>
            .
          </p>
        </div>
      </div>

      <div className="bg-gray-200 py-16">
        <div className="container">
          <div className="rounded-lg bg-white overflow-hidden shadow">
            <h2 className="sr-only" id="profile-overview-title">
              Perfil Jorge Baumann
            </h2>

            {/* nuevo */}
            <div className="bg-white p-6">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex sm:space-x-5">
                  <div className="flex-shrink-0 flex justify-center">
                    <Image
                      className="mx-auto rounded-full contrast-125 hover:invert hover:rotate-[360deg] -scale-x-100 transition-all duration-200 ease-in cursor-cell"
                      width="100px"
                      height="100px"
                      src={baumannzone}
                      alt="Jorge Baumann aka Baumannzone"
                    />
                  </div>
                  <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                    <p className="text-sm font-medium text-gray-600">
                      @baumannzone
                    </p>
                    <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                      Jorge Baumann
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      Full Stack JavaScript Developer
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex justify-center sm:mt-0">
                  <a
                    href="https://baumannzone.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    baumannzone.dev
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:divide-x">
              {social.map(({ name, link }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 focus:outline-none focus:ring focus:ring-fuchsia-200 ring-inset transition-all duration-200 hover:text-fuchsia-700"
                >
                  <div className="px-6 py-5 text-sm font-medium text-center border-t border-gray-200 sm:border-r md:border-r-0">
                    {name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
