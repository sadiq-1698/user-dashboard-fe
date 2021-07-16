import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import CalendarIcon from "../../static/images/calendar.svg";

import PropTypes from "prop-types";
import "./styles.scss";

const DatePickerField = ({ date, setFieldValue }) => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState();

  const toggleCalendar = () => setOpen(s => !s);
  const handleDateChange = date => {
    setStartDate(date);
    setFieldValue(date);
    setOpen(false);
  };

  useEffect(() => {
    if (date) setStartDate(new Date(date));
  }, [date]);

  return (
    <div className="date-picker-field-wrapper">
      <DatePicker
        open={open}
        selected={startDate}
        onChange={handleDateChange}
        readOnly
        dateFormat="d MMMM yyyy"
        wrapperClassName="datePicker"
        placeholderText="Choose a date"
        maxDate={new Date()}
      />
      <button className="icon" onClick={toggleCalendar} type="button">
        <img src={CalendarIcon} alt="calendar" width="20px" height="17px" />
      </button>
    </div>
  );
};

DatePickerField.propTypes = {
  date: PropTypes.string
};

DatePickerField.defaultProps = {
  date: null
};

export default DatePickerField;
