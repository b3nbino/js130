class Meetup {
  static DAY_NAMES = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  static NUMERIC_DAY_FINDER(year, month, weekday, timing) {
    let date;
    let counter = 0;
    for (let currDay = 1; currDay <= 31; currDay++) {
      let currDate = new Date(year, month - 1, currDay);
      if (Meetup.DAY_NAMES[currDate.getDay()] === weekday) {
        counter += 1;
        if (counter === timing) {
          date = currDay;
          break;
        }
      }
    }

    return date;
  }

  static SCHEDULE_ALGORITHMS = {
    first(year, month, weekday) {
      return Meetup.NUMERIC_DAY_FINDER(year, month, weekday, 1);
    },
    second(year, month, weekday) {
      return Meetup.NUMERIC_DAY_FINDER(year, month, weekday, 2);
    },
    third(year, month, weekday) {
      return Meetup.NUMERIC_DAY_FINDER(year, month, weekday, 3);
    },
    fourth(year, month, weekday) {
      return Meetup.NUMERIC_DAY_FINDER(year, month, weekday, 4);
    },
    fifth(year, month, weekday) {
      let date = null;
      let counter = 0;
      for (let currDay = 1; currDay <= 31; currDay++) {
        let currDate = new Date(year, month - 1, currDay);
        if (Meetup.DAY_NAMES[currDate.getDay()] === weekday) {
          counter += 1;
          if (counter === 5) {
            if (currDate.getMonth() === month) {
              date = null;
              break;
            } else {
              date = currDay;
              break;
            }
          }
        }
      }

      return date;
    },
    last(year, month, weekday) {
      let date;
      for (let currDay = 31; currDay >= 1; currDay--) {
        let currDate = new Date(year, month - 1, currDay);
        if (
          Meetup.DAY_NAMES[currDate.getDay()] === weekday &&
          currDate.getMonth() === month - 1
        ) {
          date = currDay;
          break;
        }
      }

      return date;
    },
    teenth(year, month, weekday) {
      let date;
      let possibleDates = [13, 14, 15, 16, 17, 18, 19];
      for (let currDay = 1; currDay <= 31; currDay++) {
        let currDate = new Date(year, month - 1, currDay);
        if (
          Meetup.DAY_NAMES[currDate.getDay()] === weekday &&
          possibleDates.includes(currDay)
        ) {
          date = currDay;
          break;
        }
      }

      return date;
    },
  };

  constructor(year, month) {
    this.month = month;
    this.year = year;
  }

  day(dayOfWeek, schedule) {
    let foundDate = this.findDate(
      dayOfWeek.toLowerCase(),
      schedule.toLowerCase()
    );

    if (foundDate === null) {
      return null;
    } else {
      return new Date(this.year, this.month - 1, foundDate);
    }
  }

  findDate(dayOfWeek, schedule) {
    return Meetup.SCHEDULE_ALGORITHMS[schedule](
      this.year,
      this.month,
      dayOfWeek
    );
  }
}

module.exports = Meetup;
