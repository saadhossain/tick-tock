import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Roturs/Routers";

const App = () => {
  const queryClient = new QueryClient()
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster/>
    </div>
  );
};

export default App;