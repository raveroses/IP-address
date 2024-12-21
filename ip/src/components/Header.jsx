import { PiCaretRightBold } from "react-icons/pi";

export default function Header({
  handleSubmission,
  handleOnchange,
  searchInput,
}) {
  return (
    <>
      <div
        className="heading"
        style={{ backgroundImage: "/images/pattern-bg-desktop.png" }}
      >
        <h2>IP Address Tracker </h2>
        <form onSubmit={handleSubmission}>
          <input
            type="text"
            placeholder="Search for any IP-address"
            name="search"
            value={searchInput}
            onChange={handleOnchange}
          />
          <button>
            <PiCaretRightBold />
          </button>
        </form>
      </div>
    </>
  );
}
