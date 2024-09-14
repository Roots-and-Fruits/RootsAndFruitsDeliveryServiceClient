import { Global, ThemeProvider } from "@emotion/react";
import { homeRoutes, orderInfoRoutes } from "@routes";
import GlobalStyle from "@styles/global";
import theme from "@styles/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const allRoutes = [...homeRoutes, ...orderInfoRoutes];
const router = createBrowserRouter([...allRoutes]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
