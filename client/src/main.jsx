import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import AuthPage from './pages/authPage.jsx';
import CreatePage from './pages/createPage.jsx';
import HomePage from './pages/homePage.jsx';
import DefaultLayout from './pages/layout.jsx';
import PostPage from './pages/postPage.jsx';
import ProfilePage from './pages/profilePage.jsx';
import SearchPage from './pages/searchPage.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/create' element={<CreatePage />} />
                    <Route path='/pin/:id' element={<PostPage />} />
                    <Route path='/search' element={<SearchPage />} />
                    <Route path='/:username' element={<ProfilePage />} />
                </Route>
                <Route path='/auth' element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
