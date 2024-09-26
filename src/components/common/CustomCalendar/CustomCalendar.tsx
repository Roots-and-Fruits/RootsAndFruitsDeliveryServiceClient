import "react-calendar/dist/Calendar.css";
import Calendar, { CalendarProps } from "react-calendar";
import { useState } from "react";
import dayjs from "dayjs";
import { useFetchDeliveryDate } from "@apis/domains/admin/useFetchDeliveryDate";

interface CustomCalendarProps {
  onDateChange: (date: string) => void;
}

const CustomCalendar = ({ onDateChange }: CustomCalendarProps) => {
  const today = dayjs();
  const [date, setDate] = useState<Date | null>(new Date());

  const { data: deliveryDate } = useFetchDeliveryDate();

  const tileClassName = ({ date }: { date: Date }) => {
    const day = date.getDay();

    if (day === 6) return "saturday";

    return "";
  };

  const disableSundays = ({ date }: { date: Date }) => {
    return date.getDay() === 0;
  };

  const formatDay = (_locale: string | undefined, date: Date): string =>
    date.getDate().toString();

  const formatDate = (date: Date) => {
    const formattedDate = date
      .toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\./g, "-")
      .replace(/\s/g, "");
    return formattedDate.endsWith("-")
      ? formattedDate.slice(0, -1)
      : formattedDate;
  };

  const handleDateChange: CalendarProps["onChange"] = (value) => {
    if (value instanceof Date) {
      const formattedDate = formatDate(value);
      setDate(value);
      onDateChange(formattedDate);
    } else if (
      Array.isArray(value) &&
      value.length > 0 &&
      value[0] instanceof Date
    ) {
      const formattedDate = formatDate(value[0]);
      setDate(value[0]);
      onDateChange(formattedDate);
    }
  };

  const calendarStyles = {
    "span, abbr, button": {
      color: "#000",
      fontWeight: "bold",
    },
    ".saturday abbr": {
      color: "#4285F4",
    },

    ".sunday": {
      color: "#EC6732",
    },

    "button:disabled abbr": {
      color: "#d4d4d4",
      cursor: "not-allowed",
    },

    ".react-calendar": {
      width: "100%",
      border: "1px solid #000",
      borderRadius: "10px",
      padding: "1rem",
    },
    ".react-calendar__navigation": {
      justifyContent: "flex-start",
      button: {
        fontSize: "1.8rem",
      },
    },
    ".react-calendar__month-view__weekdays": {
      padding: "1rem 0",
    },
    ".react-calendar__month-view__weekdays abbr": {
      textDecoration: "none",
      fontSize: "1.2rem",
      fontWeight: 400,
      color: "#6B6F77",
    },
    ".react-calendar__tile": {
      padding: "1.4rem 6.7px",
      background: "none",
      fontSize: "1.6rem",
      fontWeight: "500",

      "&:hover": {
        color: "white",
        backgroundColor: "#EC6732",
        borderRadius: "10px",
      },
      "&.react-calendar__tile--active": {
        color: "white",
        backgroundColor: "#EC6732",
        borderRadius: "10px",
      },
      "&.react-calendar__tile--now": {
        color: "white",
        backgroundColor: "#EC6732",
        opacity: "0.4",
        borderRadius: "10px",
      },
    },
    ".react-calendar__tile--active": {
      //   color: "#4285F4",
    },
  };

  return (
    <div css={calendarStyles}>
      <Calendar
        onChange={handleDateChange}
        value={date}
        formatDay={formatDay}
        locale="ko-KR"
        minDate={today.add(3, "day").toDate()}
        maxDate={today.add(deliveryDate ?? 14, "day").toDate()}
        tileClassName={tileClassName}
        tileDisabled={disableSundays}
      />
    </div>
  );
};

export default CustomCalendar;
