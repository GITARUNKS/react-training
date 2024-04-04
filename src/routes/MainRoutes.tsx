import HomePage from './../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import ProtectedRoutes from './ProtectedRoutes';
import { Navigate, Route, Routes } from 'react-router-dom';
import {Suspense, lazy} from "react";
import UnitTestingPage from '../pages/UnitTestingPage/UnitTestingPage';

const NetflixPage = lazy(() => import('./../pages/NetflixPage/NetflixPage'));
const ProductsPage = lazy(() => import('./../pages/ProductsPage/ProductsPage'));
const UsersPage = lazy(() => import('./../pages/UsersPage/UsersPage'));
const UserDetails = lazy(() => import('./../pages/UsersPage/UserDetails'));
const AddUser = lazy(() => import('./../pages/UsersPage/AddUser'));
const EditUserDetails = lazy(() => import('./../pages/UsersPage/EditUserDetails'));
const AdminPage = lazy(() => import('../pages/AdminPage/AdminPage'));
const TodosPage = lazy(() => import('../pages/TodosPage/TodosPage'));
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
const TeamPage = lazy(() => import('../pages/AboutPage/TeamPage'));
const HistoryPage = lazy(() => import('../pages/AboutPage/HistoryPage'));
const CareersPage = lazy(() => import('../pages/AboutPage/CareersPage'));

const MainRoutes = () => {
    return (
        <Suspense
        fallback={
            <div className="text-center spinner-border text-success" role="status">
            </div>
        }>
        < Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/unit-testing-demo" element={<UnitTestingPage />} />
            <Route path="/about-us" element={<AboutPage />}  >
                <Route path="team" element={<TeamPage />} />
                <Route path="careers" element={<CareersPage />} />
                <Route path="history" element={<HistoryPage />} />
            </Route>
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            {/* Redirecting /auth to /auth/login Page */}
            <Route path="/auth" element={<Navigate to="/auth/login" replace />} />

            {/* The following Routes require login -- Protected Routes */}
            <Route element={<ProtectedRoutes />}>
                <Route path="/netflix" element={<NetflixPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/users/add" element={<AddUser />} />
                {/* Setting up routing congi with url param -- userId is the url param */}
                <Route path="/users/:userId" element={<UserDetails />} />
                <Route path="/users/:userId/edit" element={<EditUserDetails />} />
                <Route path="/todos" element={<TodosPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/admin" element={<AdminPage />} />
            </Route>

        </Routes >
        </Suspense>
    )
}

export default MainRoutes