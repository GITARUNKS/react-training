import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { CartProvider } from './contexts/CartContext';
import MainRoutes from './routes/MainRoutes';
import { AuthProvider } from './contexts/AuthContext';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json'
import frTranslation from './locales/fr/translation.json'
import enUKTranslation from './locales/en-UK/translation.json';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector/cjs';

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources: {
      "en": { translation: enTranslation },
      "fr": { translation: frTranslation },
      "en-UK": { translation: enUKTranslation }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  })

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Header></Header>

            <main className='container mt-5 pt-2'>
              <MainRoutes />
            </main>
          </CartProvider>

          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
