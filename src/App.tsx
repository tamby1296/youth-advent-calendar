import CalendarCard from "./component/CalendarCard";

const App = () => {
  const days = Array.from({ length: 24 }, (_, i) => ({
    number: i + 1,
  }));

  return (
    <div className="min-h-screen bg-teal-500 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">ADVENT CALENDAR</h1>

      <div className="grid grid-cols-4 gap-4 w-full max-w-lg">
        {days.map((day) => (
          <div
            key={day.number}
            className="bg-white rounded-lg flex items-center justify-center text-2xl font-semibold text-teal-700 h-20 w-20 shadow-md"
          >
            {day.number}
            <CalendarCard title={day.number.toString()}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
