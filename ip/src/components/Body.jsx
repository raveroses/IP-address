import { useEffect, useState } from "react";

const Body = (datas) => {
  const [save, setSave] = useState("");
  useEffect(() => {
    for (let [keys, value] of Object.entries(datas)) {
      setSave(value);
    }
  }, []);
  console.log(save?.ip);

  return (
    <>
      <main>
        <div className="first">
          <p>IP ADDRESS</p>
          <h3>{save?.ip}</h3>
        </div>
        <div className="second">
          <p>LOCATION</p>
          <h3>
            {`${save?.location?.country}, ${save?.location?.region}, ${save?.as?.asn}`}
          </h3>
        </div>
        <div className="third">
          <p>TIMEZONE</p>
          <h3>{save?.location?.timezone}</h3>
        </div>
        <div className="fouth">
          <p>ISP</p>
          <h3>{save?.isp}</h3>
        </div>
      </main>
      ;
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214893.9423994353!2d-117.14521148394344!3d32.6935476490803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95308292167f3%3A0x1d2a53b73db1296e!2s3123%20Boston%20Ave%2C%20San%20Diego%2C%20CA%2092113%2C%20USA!5e0!3m2!1sen!2sng!4v1734585939235!5m2!1sen!2sng"
          style={{
            width: "100%",
            height: "650px",
            style: "border:0;",
            allowfullscreen: "",
            loading: "lazy",
            maxWidth: "100%",
            referrerpolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </section>
    </>
  );
};

export default Body;
