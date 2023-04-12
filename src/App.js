import logo from './logo.svg';
import './App.css';
import { BarChartRounded, DashboardRounded, TocRounded } from '@mui/icons-material';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <div className='sidebar-container'>
        <div className='sidebar'>
          <div className='line-icon'>
            <TocRounded />
          </div>
          <div className='profile'>
            <img src="https://images.freeimages.com/images/large-previews/7be/vector-4-1147260.jpg" alt='profile-img'></img>
          </div>
          <div className='groups'>
            <div className='group'>
              <h3>Analytics</h3>
              <Item icon={<DashboardRounded />} name='Dashboard' />
              <Item icon={<BarChartRounded />} name='Performance' />
            </div>
            <div className='group'>
              <h3>Analytics</h3>
              <Item icon={<DashboardRounded />} name='Dashboard' />
              <Item icon={<BarChartRounded />} name='Performance' />
            </div>
            <div className='group'>
              <h3>Analytics</h3>
              <Item icon={<DashboardRounded />} name='Dashboard' />
              <Item icon={<BarChartRounded />} name='Performance' />
            </div>

          </div>
        </div>
      </div>





      <div className='body-container'>body</div>
    </div>
  );
}

export default App;
