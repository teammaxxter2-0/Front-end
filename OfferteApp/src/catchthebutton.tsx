import { useState , useEffect} from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';

function CatchTheButton() {
    const [count, setCount] = useState(0);
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const [imageVisible, setImageVisible] = useState(false);

    const handleButtonClick = () => {
        setCount(count + 1);
        setImageVisible(true);
    };
    const handleButtonClick2 = () => {
        setImageVisible(false);
        setCount(0);
    };
    
    const handleButtonHover = () => {
        const randX = Math.floor(Math.random() * (window.innerWidth - 100));
        const randY = Math.floor(Math.random() * (window.innerHeight - 100));
        setCount(count + 1);
        setButtonPosition({ x: randX, y: randY });
    };
    useEffect(() => {
      
        const initialX = window.innerWidth / 2 - 150; 
        const initialY = window.innerHeight / 2 - - 100; 
        setButtonPosition({ x: initialX, y: initialY });
    }, []);
    return (
        <>
            <div>
                {/*<a href="https://vitejs.dev" target="_blank">*/}
                {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
                {/*</a>*/}
                {/*<a href="https://react.dev" target="_blank">*/}
                {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
                {/*</a>*/}
            </div>
            <h1>Catch the Button </h1>
            <h2>Tries: { count}</h2>
            <div className="card">
                <button
                    className="avoid-cursor-button"
                    style={{ left: buttonPosition.x, top: buttonPosition.y }}
                    onMouseEnter={handleButtonHover}
                    onClick={handleButtonClick}
                >
                    Catch me!
                </button>
                {/*<p>*/}
                {/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
                {/*</p>*/}
            </div>
            <li>
                <a href={`/`}> Go Back</a>
            </li>
            {imageVisible && (
                <button
                    onClick={handleButtonClick2}
                > RESET </button>
            )}
            {imageVisible && (
                <div className="image-container">
                    <img src="https://t3.ftcdn.net/jpg/02/13/57/00/360_F_213570061_T3X8NcaKW6n6O9Flgq3i0ZA5f0JtcAUw.jpg" alt="Displayed on button press" />
                </div>
            )}
            
        </>
    );
}

export default CatchTheButton;
