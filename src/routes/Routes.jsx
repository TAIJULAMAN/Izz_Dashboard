import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/auth/SignInPage";
import ForgetPassword from "../pages/auth/ForgetPassword";
import VerificationCode from "../pages/auth/VerificationCode";
import ResetPassword from "../pages/auth/ResetPassword";
import MainLayout from "../layout/MainLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import PrivacyPolicy from "../pages/Privacy Policy/PrivacyPolicy";
import TermsCondition from "../pages/Terms Condition/TermsCondition";
import UserDetails from "../pages/userDetails/UserDetails";
import CreateUser from "../pages/userDetails/CreateUser";
import AddClinic from "../pages/Add Clinic/AddClinic";
import Notifications from "../pages/Notifications/Notifications";
import ProfilePage from "../pages/profile/ProfilePage";
import Chat from "../pages/Chat/Chat";
import MediaSocial from "../pages/Media&Social/MediaSocial";
import EventManagement from "../pages/eventManagement/eventManagement";
import Reports from "../pages/Reports/Reports";
import Interactivity from "../pages/Interactivity/Interactivity";
import Settings from "../pages/Settings/Settings";
import ChangePass from "../pages/profile/ChangePass";
import AboutUs from "../pages/optional/AboutUs";
import EditProfile from "../pages/profile/EditProfile";
import CreateAdmin from "../pages/Create Admin/CreateAdmin";
import AddAdmin from "../pages/Add Admin/AddAdmin";
import LabManagment from "../pages/LabManagment/LabManagment";
import ClinicManagement from "../pages/ClinicManagement/ClinicManagement";
import AddLab from "../pages/Add Lab/AddLab";
import CaseManagment from "../pages/CaseManagment/CaseManagment";
import Product from "../pages/Product/Product";
import Earnings from "../pages/Earnings/Earnings";
import Coupon from "../pages/Coupon/Coupon";
import Gamification from "../pages/Gamification/Gamification";
import Categories from "../pages/Categories/Categories";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/verification-code",
    element: <VerificationCode />,
  },
  {
    path: "/new-password",
    element: <ResetPassword />,
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/user-details",
        element: <UserDetails />,
      },
      {
        path: "/earnings",
        element: <Earnings />,
      },
      {
        path: "/coupon",
        element: <Coupon />,
      },
      {
        path: "/gamification",
        element: <Gamification />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/create-user",
        element: <CreateUser />,
      },
      {
        path: "/event-management",
        element: <EventManagement />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },

      // media and social
      {
        path: "/media-social",
        element: <MediaSocial />,
      },
      {
        path: "/interactivity",
        element: <Interactivity />,
      },

      // settings
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-condition",
        element: <TermsCondition />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
      },
      {
        path: "/change-password",
        element: <ChangePass />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/create-admin",
        element: <CreateAdmin />,
      },
      {
        path: "/add-admin",
        element: <AddAdmin />,
      },
      {
        path: "/lab-management",
        element: <LabManagment />,
      },
      {
        path: "/add-lab",
        element: <AddLab />,
      },
      {
        path: "/clinic-management",
        element: <ClinicManagement />,
      },
      {
        path: "/add-clinic",
        element: <AddClinic />,
      },
      {
        path: "/case-management",
        element: <CaseManagment />,
      },
      {
        path: "/product",
        element: <Product />,
      },

      //  navbar profile

      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
