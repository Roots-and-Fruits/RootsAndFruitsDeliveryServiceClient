import { Global, ThemeProvider } from "@emotion/react";
import {
  experienceOrderInfoRoutes,
  homeRoutes,
  orderInfoRoutes,
  adminRoutes,
  authRoutes,
  orderCheckRoutes,
} from "@routes";
import GlobalStyle from "@styles/global";
import theme from "@styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const allRoutes = [
  ...homeRoutes,
  ...orderInfoRoutes,
  ...experienceOrderInfoRoutes,
  ...authRoutes,
  ...orderCheckRoutes,
];

const protectedRoutes = adminRoutes.map((route) => ({
  ...route,
  element: <PrivateRoute element={route.element} />,
}));

const router = createBrowserRouter([...allRoutes, ...protectedRoutes]);

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <RouterProvider router={router} />
      </ThemeProvider>
      <div style={{ fontSize: "16px" }}>
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}

export default App;
