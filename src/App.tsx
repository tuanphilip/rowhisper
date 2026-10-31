import { AudioManager } from "./components/AudioManager";
import Transcript from "./components/Transcript";
import { useTranscriber } from "./hooks/useTranscriber";

function App() {
    const transcriber = useTranscriber();

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='container flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl text-center'>
                    RoWhisper AI
                </h1>
                <h2 className='mt-3 mb-5 px-4 text-center text-1xl font-semibold tracking-tight text-slate-900 sm:text-2xl'>
                    In-Browser Speech-to-Text Studio by Tuan Philip
                </h2>
                <AudioManager transcriber={transcriber} />
                <Transcript transcribedData={transcriber.output} />
            </div>

            <div className='absolute bottom-4 text-xs text-gray-500'>
                Built by{" "}
                <a
                    className='underline'
                    href='https://tuanphilip.github.io'
                    target='_blank'
                    rel='noreferrer'
                >
                    Tuan Philip
                </a>
            </div>
        </div>
    );
}

export default App;
