import { useEffect, useState } from "react";

function HostsListItem({ host }) {
  const [toggle, setToggle] = useState(false);
  function addClass() {
    setToggle(true);
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (parseInt(hash) === host.id) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <li
      onClick={() => addClass()}
      className={`host-list-item ${toggle ? "active" : ""}`}
      key={host.id}
    >
      <a
        className={`host-list-item-anchor ${toggle ? "active" : ""}`}
        href={`#${host.id}`}
      >
        {host.name}
      </a>
    </li>
  );
}

export default HostsListItem;
