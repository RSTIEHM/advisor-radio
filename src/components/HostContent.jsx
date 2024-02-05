import { useEffect, useState } from "react";
import { useHostsInfo } from "../features/useHosts";
import Loader from "./Loader";
import StationContent from "./StationContent";

const HostContent = () => {
  const [selectedHostId, setSelectedHostId] = useState(null);
  const { isLoading, error, hostsWithStations } = useHostsInfo();
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }
  const filtered = hostsWithStations?.find((host) => host.id == selectedHostId);
  let parsedComments;

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      setSelectedHostId(parseInt(hash, 10));
    };

    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (isLoading) return <Loader />;
  if (error) {
    throw new Error("ERROR");
  }

  if (filtered !== undefined) {
    parsedComments = filtered.comments?.replace(/;/g, "\n");
  }

  if (!selectedHostId) {
    return (
      <div className="no-advisor-container">
        <div className="no-advisor-content">
          <img src="./sig-logo.png" alt="" />
        </div>
      </div>
    );
  }

  return (
    <div className="host-content-container">
      {filtered !== undefined && (
        <>
          <div className="host-content-info-header">
            <div className="host-content-info">
              <h2>{filtered.name}</h2>
              <img src={filtered.img} alt="logo" />
              <div className="grid-content-container grid-content-container--header">
                <p>Station</p>
                <p>Day</p>
                <p>Time</p>
                <p>Rating</p>
                <p>On Air Schedule</p>
                <p>Wattage</p>
                <p>Demographic</p>
              </div>
            </div>

            <div className="grid-content-container">
              {filtered.stations.map((station, i) => (
                <StationContent station={station} key={i} />
              ))}
            </div>
          </div>
        </>
      )}

      {open ? (
        <div>
          {" "}
          <textarea className="text-edit">{parsedComments}</textarea>
          {/* <button onClick={toggleOpen} className="btn">
            Save
          </button> */}
        </div>
      ) : (
        <pre className="pre-tag">
          <h2>Show Comments</h2>
          <br />
          <div>{parsedComments}</div>
          {/* <button onClick={toggleOpen} className="btn">
            Edit
          </button> */}
        </pre>
      )}
    </div>
  );
};

export default HostContent;
