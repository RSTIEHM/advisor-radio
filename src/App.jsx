import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useHostsInfo } from "./features/useHosts";

import Hosts from "./components/Hosts";
import HostContent from "./components/HostContent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000
      staleTime: 0,
    },
  },
});

function App() {
  // const { isLoading, error, hostsWithStations } = useHostsInfo();
  // console.log(hostsWithStations);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <Hosts />
        <HostContent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
