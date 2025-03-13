'use client'
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Calendar, Search } from "lucide-react";


// Helper portal component that positions its children relative to the target button.
function DropdownPortal({ targetRef, direction, children }) {
  const [style, setStyle] = useState({});
  useEffect(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const newStyle = {
        position: "fixed",
        left: rect.left,
        width: rect.width,
        zIndex: 9999,
      };
      if (direction === "down") {
        newStyle.top = rect.bottom + 4;
      } else {
        newStyle.bottom = window.innerHeight - rect.top + 4;
      }
      setStyle(newStyle);
    }
  }, [targetRef, direction]);
  return createPortal(<div style={style}>{children}</div>, document.body);
}

// Custom hook to determine dropdown position ("up" or "down")
function useDropdownPosition(buttonRef, dropdownRef, isOpen) {
  const [direction, setDirection] = useState("down");
  useEffect(() => {
    if (isOpen && buttonRef.current && dropdownRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.offsetHeight;
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      if (spaceBelow < dropdownHeight + 8) {
        setDirection("up");
      } else {
        setDirection("down");
      }
    }
  }, [isOpen, buttonRef, dropdownRef]);
  return direction;
}

const PropertySearch = () => {
  // Form state
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("Any type");
  const [priceRange, setPriceRange] = useState("$0 - $5000");
  const [moveInDate, setMoveInDate] = useState("Pick a date");
  const [moreFiltersText, setMoreFiltersText] = useState("Amenities, etc.");

  // Dropdown visibility states
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  // Additional states for price range inputs
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("5000");

  // State for more filters checkboxes
  const [filters, setFilters] = useState({
    wifi: false,
    parking: false,
    airConditioning: false,
    washingMachine: false,
    kitchen: false,
    tv: false,
  });

  // Dropdown option arrays
  const propertyOptions = ["Any type", "Room", "Apartment", "House", "Commercial"];

  // Refs for dropdown containers and buttons
  const propertyButtonRef = useRef(null);
  const propertyDropdownRef = useRef(null);
  const priceButtonRef = useRef(null);
  const priceDropdownRef = useRef(null);
  const calendarButtonRef = useRef(null);
  const calendarDropdownRef = useRef(null);
  const moreFiltersButtonRef = useRef(null);
  const moreFiltersDropdownRef = useRef(null);

  // Custom hook for each dropdown position
  const propertyDirection = useDropdownPosition(propertyButtonRef, propertyDropdownRef, showPropertyDropdown);
  const priceDirection = useDropdownPosition(priceButtonRef, priceDropdownRef, showPriceDropdown);
  const calendarDirection = useDropdownPosition(calendarButtonRef, calendarDropdownRef, showCalendar);
  const moreFiltersDirection = useDropdownPosition(moreFiltersButtonRef, moreFiltersDropdownRef, showMoreFilters);

  // Outside click handling
  useEffect(() => {
    const handleClick = (event) => {
      if (
        propertyDropdownRef.current &&
        !propertyDropdownRef.current.contains(event.target) &&
        propertyButtonRef.current &&
        !propertyButtonRef.current.contains(event.target)
      ) {
        setShowPropertyDropdown(false);
      }
      if (
        priceDropdownRef.current &&
        !priceDropdownRef.current.contains(event.target) &&
        priceButtonRef.current &&
        !priceButtonRef.current.contains(event.target)
      ) {
        setShowPriceDropdown(false);
      }
      if (
        calendarDropdownRef.current &&
        !calendarDropdownRef.current.contains(event.target) &&
        calendarButtonRef.current &&
        !calendarButtonRef.current.contains(event.target)
      ) {
        setShowCalendar(false);
      }
      if (
        moreFiltersDropdownRef.current &&
        !moreFiltersDropdownRef.current.contains(event.target) &&
        moreFiltersButtonRef.current &&
        !moreFiltersButtonRef.current.contains(event.target)
      ) {
        setShowMoreFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Disable page scrolling without causing layout shift.
  useEffect(() => {
    const dropdownOpen = showPropertyDropdown || showPriceDropdown || showCalendar || showMoreFilters;
    if (dropdownOpen) {
      // Calculate scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [showPropertyDropdown, showPriceDropdown, showCalendar, showMoreFilters]);

  // Toggle filter checkbox handler
  const toggleFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Helper to get current date formatted as yyyy-mm-dd
  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <div className="grid gap-4 md:grid-cols-5 relative w-[95%] mx-auto">
      {/* Location */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Location</label>
        <input
          type="text"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="City, neighborhood..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Property Type */}
      <div className="space-y-2 relative">
        <label className="text-sm font-medium">Property Type</label>
        <button
          type="button"
          ref={propertyButtonRef}
          onClick={() => setShowPropertyDropdown((prev) => !prev)}
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="truncate">{propertyType}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </button>
        {showPropertyDropdown && (
          <DropdownPortal targetRef={propertyButtonRef} direction={propertyDirection}>
            <ul
              ref={propertyDropdownRef}
              className="w-full rounded-md border border-input bg-[#FAF9F6] text-sm"
            >
              {propertyOptions.map((option) => (
                <li
                  key={option}
                  className="cursor-pointer px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                  onClick={() => {
                    setPropertyType(option);
                    setShowPropertyDropdown(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </DropdownPortal>
        )}
      </div>

      {/* Price Range */}
      <div className="space-y-2 relative">
        <label className="text-sm font-medium">Price Range</label>
        <button
          type="button"
          ref={priceButtonRef}
          onClick={() => setShowPriceDropdown((prev) => !prev)}
          className="inline-flex items-center justify-start w-full h-10 px-4 py-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {priceRange}
        </button>
        {showPriceDropdown && (
          <DropdownPortal targetRef={priceButtonRef} direction={priceDirection}>
            <div
              ref={priceDropdownRef}
              className="w-full rounded-md border border-input bg-[#FAF9F6] p-3 text-sm"
            >
              <div className="mb-2">
                <label className="block text-xs font-medium">Min Price</label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-input px-2 py-1"
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs font-medium">Max Price</label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-input px-2 py-1"
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  setPriceRange(`$${minPrice} - $${maxPrice}`);
                  setShowPriceDropdown(false);
                }}
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 mt-2 w-full rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
              >
                Apply
              </button>
            </div>
          </DropdownPortal>
        )}
      </div>

      {/* Move-in Date */}
      <div className="space-y-2 relative">
        <label className="text-sm font-medium">Move-in Date</label>
        <button
          type="button"
          ref={calendarButtonRef}
          onClick={() => setShowCalendar((prev) => !prev)}
          className="inline-flex items-center justify-start w-full h-10 px-4 py-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Calendar className="w-4 h-4 mr-2" />
          {moveInDate}
        </button>
        {showCalendar && (
          <DropdownPortal targetRef={calendarButtonRef} direction={calendarDirection}>
            <div
              ref={calendarDropdownRef}
              className="w-full rounded-md border border-input bg-[#FAF9F6] p-3 text-sm"
            >
              <input
                type="date"
                defaultValue={getCurrentDate()}
                onChange={(e) => {
                  setMoveInDate(e.target.value);
                  setShowCalendar(false);
                }}
                className="block w-full rounded-md border border-input px-2 py-1"
              />
            </div>
          </DropdownPortal>
        )}
      </div>

      {/* More Filters */}
      <div className="space-y-2 relative">
        <label className="text-sm font-medium">More Filters</label>
        <button
          type="button"
          ref={moreFiltersButtonRef}
          onClick={() => setShowMoreFilters((prev) => !prev)}
          className="inline-flex items-center justify-start w-full h-10 px-4 py-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {moreFiltersText}
        </button>
        {showMoreFilters && (
          <DropdownPortal targetRef={moreFiltersButtonRef} direction={moreFiltersDirection}>
            <div
              ref={moreFiltersDropdownRef}
              className="w-full rounded-md border border-input bg-[#FAF9F6] p-3 text-sm"
            >
              <div className="space-y-2 grid grid-cols-2 gap-y-2 ">
                {[
                  { label: "Wi-Fi", key: "wifi" },
                  { label: "Parking", key: "parking" },
                  { label: "AC", key: "airConditioning" },
                  { label: "Washing Machine", key: "washingMachine" },
                  { label: "Kitchen", key: "kitchen" },
                  { label: "TV", key: "tv" },
                ].map((item) => (
                  <div key={item.key} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={item.key}
                      checked={filters[item.key]}
                      onChange={() => toggleFilter(item.key)}
                      className="h-4 w-4"
                    />
                    <label htmlFor={item.key} className="text-sm">
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  const active = Object.values(filters).filter(Boolean).length;
                  setMoreFiltersText(
                    active > 0
                      ? `${active} filter${active > 1 ? "s" : ""} selected`
                      : "Amenities, etc."
                  );
                  setShowMoreFilters(false);
                }}
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 mt-2 w-full rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
              >
                Apply
              </button>
            </div>
          </DropdownPortal>
        )}
      </div>

      {/* Search Button */}
      <div>
        <label className="invisible text-sm font-medium">Search</label>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 inline-flex items-center justify-center w-full h-10 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Search className="w-4 h-4 mr-2" />
          Search
        </button>
      </div>
    </div>
  );
};

export default PropertySearch;
