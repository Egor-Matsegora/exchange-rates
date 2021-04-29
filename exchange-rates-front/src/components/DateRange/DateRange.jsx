import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import { setDateRange } from "pages/CurrencyPage/store/actions";
import { formatDate } from 'helpers/currentDateHelper';

const mapStateToProps = (state) => ({
  startDate: state.currencyRange.startDate,
  endDate: state.currencyRange.endDate,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ setDateRange }, dispatch);

const DateRangeComponent = ({ startDate, endDate, setDateRange }) => {
  const [localeDateRange, setLocaleDateRange] = useState([new Date(startDate), new Date(endDate)]);
  const [maxDate, setMaxDate] = useState(new Date());
  const [minDate, setMinDate] = useState(new Date(moment().subtract(365, 'days')));

  useEffect(() => {
    const [start, end] = localeDateRange || [new Date(startDate), new Date(endDate)];
    const formatedStart = formatDate(start, 'YYYY-MM-DD');
    const formatedEnd = formatDate(end, 'YYYY-MM-DD');

    !localeDateRange && setLocaleDateRange([start, end])
    if(formatedStart === startDate && formatedEnd === endDate) return;

    setDateRange({
      startDate: formatedStart,
      endDate: formatedEnd
    });
  }, [setDateRange, localeDateRange, startDate, endDate]);

  const handleRangeChange = (e) => {
    const [start, end] = e;
    const maxRangeDate = moment(start).add(8, 'd').format('YYYY-MM-DD');
    const resultRange = moment(end).isSameOrBefore(maxRangeDate) ? e : [start, new Date(maxRangeDate)];
    setLocaleDateRange(resultRange);
  };

  return (
    <div className="date-range">
      <h3>
        Выбран курс за период
      </h3>
      <DateRangePicker
        onChange={handleRangeChange}
        value={localeDateRange}
        maxDate={maxDate}
        minDate={minDate}
        clearIcon={null}
        // onClick={e => console.log(e)}
      />
    </div>
  )
};

export const DateRange = connect(mapStateToProps, mapDispatchToProps)(DateRangeComponent);