import { useQuery } from "@tanstack/react-query";
import { getHosts, getHostsInfo } from "../services/apiHosts";

export function useHosts() {
  const {
    isLoading,
    data: hosts,
    error,
  } = useQuery({
    queryKey: ["hosts"],
    queryFn: getHosts,
  });
  return { isLoading, error, hosts };
}

export function useHostsInfo() {
  const {
    isLoading,
    data: hostsWithStations,
    error,
  } = useQuery({
    queryKey: ["hosts-info"],
    queryFn: getHostsInfo,
  });
  return { isLoading, error, hostsWithStations };
}
