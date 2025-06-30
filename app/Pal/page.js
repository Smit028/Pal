import Head from 'next/head';
import FoldableHeart from './Foldedheart';

export default function Page() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4 space-y-6">
        <h1
          className="text-5xl text-rose-600 text-center"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          I Love You 💖
        </h1>

        <p
          className="text-center text-rose-500 text-lg max-w-xs leading-relaxed"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Every fold holds a feeling. Tap to unfold my heart.
        </p>

<FoldableHeart centerImage="/img/Card1.png" heartColor="#ccd5ae" />  
<FoldableHeart centerImage="/img/Card2.png" heartColor="#f4acb7" />  {/* Rose Pink */}
<FoldableHeart centerImage="/img/Card3.png" heartColor="#cdb4db" />  {/* Soft Violet */}
<FoldableHeart centerImage="/img/Card4.png" heartColor="#ffb3c1" />  {/* Blush Pink */}
<FoldableHeart centerImage="/img/Card5.jpg" heartColor="#ff4d4d" />


        <p
          className="text-xs text-rose-400 italic mt-4"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Made with ❤️ just for you
        </p>
      </div>
      <div className="mt-8 text-center space-y-4">
  <p
    className="text-rose-500 text-lg"
    style={{ fontFamily: "'Great Vibes', cursive" }}
  >
    If you liked this... send me your sweetest photo 🥺💕
  </p>

  <div className="flex justify-center gap-6">
    <button className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-full shadow-md transition duration-300 ease-in-out text-lg">
      Yes 😚
    </button>
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-full shadow-md transition duration-300 ease-in-out text-lg">
      No 😒
    </button>
  </div>
</div>

    </>
  );
}
