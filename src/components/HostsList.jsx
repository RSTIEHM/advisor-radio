import HostsListItem from "./HostsListItem";
function HostsList({ hosts }) {
  return (
    <ul>
      {hosts.map((host) => (
        <HostsListItem key={host.id} host={host} />
      ))}
    </ul>
  );
}

export default HostsList;
