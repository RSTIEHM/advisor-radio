function StationContent({ station }) {
  return (
    <>
      <div>
        <p>
          {station.id} {station.station_name}
        </p>
      </div>
      <div>
        <p>{station.day}</p>
      </div>
      <div>
        <p>{station.time}</p>
      </div>
      <div>
        <p>{station.rating}</p>
      </div>
      <div>
        <p>{station.rating ? "YES" : "NO"}</p>
      </div>
      <div>
        <p>{station.wattage}</p>
      </div>
      <div>
        <p>{station.demographic}</p>
      </div>
    </>
  );
}

export default StationContent;
