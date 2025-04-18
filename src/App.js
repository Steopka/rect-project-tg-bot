import React, { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []); // Добавлены пустые зависимости

    const onClose = () => {
        tg.close();
    }

    return (
        <div className="App">
            work
            <button onClick={onClose}>закрыть</button> {/* Исправлено: закрывающий тег */}
        </div>
    );
}

export default App;