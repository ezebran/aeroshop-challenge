import Provider from './context/userProvider';
import Header from './components/Header';
import './App.scss';

function App() {
  return (
    <Provider>
      <Header />
    </Provider>
  );
}

export default App;
