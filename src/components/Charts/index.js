import numeral from 'numeral';
import './g2';
import ChartCard from './ChartCard';
import Bar from './Bar';
import MiniProgress from './MiniProgress';

const yuan = val => `¥ ${numeral(val).format('0,0')}`;

const Charts = {
  yuan,
  Bar,
  MiniProgress,
  ChartCard,
};

export {
  Charts as default,
  yuan,
  Bar,
  MiniProgress,
  ChartCard,
};
