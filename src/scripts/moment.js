import moment from 'moment';

moment.updateLocale('en', {
  relativeTime: {
    s: '1s',
    ss: '%ds',
    m: '1min',
    mm: '%dmin',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1mo',
    MM: '%dmo',
    y: '1y',
    yy: '%dy',
  },
});
