import supabase from "./supaBase";

export async function getHosts() {
  const { data, error } = await supabase.from("hosts").select("*");
  if (error) {
    console.log(error);
    throw new Error("Could not load Data");
  }
  return data;
}

export async function getHostsInfo() {
  let { data: hosts, error: hostsError } = await supabase
    .from("hosts")
    .select("*");
  let { data: stations, error: stationsError } = await supabase
    .from("stations")
    .select("*");
  const hostsWithStations = hosts.map((host) => {
    const hostStations = stations.filter(
      (station) => station.host_id === host.id
    );
    return { ...host, stations: hostStations };
  });

  console.log(hostsWithStations);

  if (hostsError || stationsError) {
    console.log(hostsError || stationsError);
    throw new Error("Could not load Data");
  }

  return hostsWithStations;
}
