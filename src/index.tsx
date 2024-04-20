import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './routes/main';
import reportWebVitals from './reportWebVitals';
import { GlobalContainer, GlobalStyles, MainContainer } from './styles/globalStyles';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './store';
import Footer from './components/Footer';
import SideMenu from './components/SideMenu';
import { BrowserRouter } from 'react-router-dom';


const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalContainer>
        <GlobalStyles />
        <Header />
        <MainContainer>
          <SideMenu></SideMenu>
          <Main />
        </MainContainer>
        <Footer />
      </GlobalContainer>
    </Provider>
  </BrowserRouter>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
