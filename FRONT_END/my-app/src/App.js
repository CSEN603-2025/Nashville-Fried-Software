import logo from './logo.svg';
import './App.css';
import './Appointments.tsx';
import AppointmentsPage from './Appointments.tsx';
import ContactBook from './Components/Appointments/ContactBook.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppointmentsPage/>
      </header>
    </div>
  );
}

export default App;
