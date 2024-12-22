import { PiCaretRightBold } from "react-icons/pi";

export default function Header({
  handleSubmission,
  handleOnchange,
  searchInput,
}) {
  return (
    <>
      <div className="heading">
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
