import { Global, ThemeProvider } from "@emotion/react";
import { adminRoutes, homeRoutes, orderInfoRoutes } from "@routes";
import GlobalStyle from "@styles/global";
import theme from "@styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const allRoutes = [...homeRoutes, ...orderInfoRoutes, ...adminRoutes];
const router = createBrowserRouter([...allRoutes]);

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
