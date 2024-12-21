import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, useRef } from "react";

const Body = ({ datas }) => {
  const [save, setSave] = useState({});
  const mapRef = useRef(null);

  useEffect(() => {
    if (datas) {
      setSave(datas);
    }
  }, [datas]);
  console.log(save);

  const { latitude, longitude, ip, country, region, asn, timezone, org } = save;

  useEffect(() => {
    if (latitude && longitude) {
      if (!mapRef.current) {
        mapRef.current = L.map("map").setView([latitude, longitude], 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapRef.current);
      } else {
        mapRef.current.setView([latitude, longitude], 13);
      }
    }
  }, [latitude, longitude]);

  return (
    <>
      <main>
        <div className="first">
          <p>IP ADDRESS</p>
          <h3>{ip || "Loading..."}</h3>
        </div>
        <div className="second">
          <p>LOCATION</p>
          <h3>{`${country || ""}, ${region || ""}, ${asn || ""}`}</h3>
        </div>
        <div className="third">
          <p>TIMEZONE</p>
          <h3>UTC{timezone || ""}</h3>
        </div>
        <div className="fourth">
          <p>ISP</p>
          <h3>{org || ""}</h3>
        </div>
      </main>

      <section>
        <div id="map" style={{ height: "500px" }}></div>
      </section>
    </>
  );
};

export default Body;
