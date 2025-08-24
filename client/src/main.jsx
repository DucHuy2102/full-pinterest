import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import AuthPage from './pages/logged-in/authPage.jsx';
import CreatePage from './pages/logged-in/createPage.jsx';
import HomePage from './pages/logged-in/homePage.jsx';
import DefaultLayout from './layout.jsx';
import PostPage from './pages/logged-in/postPage.jsx';
import ProfilePage from './pages/logged-in/profilePage.jsx';
import SearchPage from './pages/logged-in/searchPage.jsx';
import Settings from './pages/logged-in/settings.jsx';
import ResetPassword from './pages/not-logged-in/reset-password.jsx';
import NotificationPage from './pages/logged-in/notificationPage.jsx';
import ChatPage from './pages/logged-in/chatPage.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/pin/:id' element={<PostPage />} />
                        <Route path='/search' element={<SearchPage />} />
                        <Route path='/create' element={<CreatePage />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/notifications' element={<NotificationPage />} />
                        <Route path='/chat' element={<ChatPage />} />
                        <Route path='/:username' element={<ProfilePage />} />
                    </Route>
                    <Route path='/auth' element={<AuthPage />} />
                    <Route path='/reset-password/:token' element={<ResetPassword />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>
);
