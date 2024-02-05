// import { useHostsInfo } from "../features/useHosts";

import Loader from "./Loader";
import HostsList from "./HostsList";
import { useHostsInfo } from "../features/useHosts";

function Hosts() {
  let { isLoading, error, hostsWithStations } = useHostsInfo();
  // LOAD ==============
  if (isLoading) return <Loader />;
  // ERR ======================
  if (error) {
    throw new Error("ERROR");
  }
  if (!isLoading && !error && hostsWithStations !== undefined) {
    return (
      <div>
        <HostsList hosts={hostsWithStations} />
      </div>
    );
  }
}

export default Hosts;
