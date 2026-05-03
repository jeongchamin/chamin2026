import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme  } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { Toaster } from 'react-hot-toast'
import useSettingsStore from './store/useSettingsStore';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {

  const {isDarkMode} = useSettingsStore();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle/>
       <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: isDarkMode ? '#1D2130' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#3A3838',
            border: `1px solid ${isDarkMode ? '#262A45' : '#E5E5E5'}`,
          }
        }}
      />
      <Routes>

        {/* this Layout group = 헤더+풋터 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        

      </Routes>
  </ThemeProvider>
  );
}

export default App;