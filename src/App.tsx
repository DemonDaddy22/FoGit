import './App.scss';
import Content from './components/Content';
import Header from './components/Header';
import Input from './components/Input';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Input value="hola" />
            <Content />
        </div>
    );
};

export default App;
