import UserContext from './context/userProvider';
import HistoryContext from './context/historyProvider';

import Header from './components/Header';
import Banner from './components/Banner';
import ProductsContainer from './components/ProductsContainer';
import './App.scss';

function App() {
  return (
    <>
    <UserContext>
      <Header />
    </UserContext>
    <Banner />
    <ProductsContainer />
    </>
  );
}

export default App;
