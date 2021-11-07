import './App.scss';
import Content from './components/Content';
import Header from './components/Header';
import Input from './components/Input';
import InputContextProvider from './context/InputContext';

const App = () => {
    return (
        <div className="App">
            <InputContextProvider>
                <Header />
                <Content />
            </InputContextProvider>
        </div>
    );
};

export default App;
