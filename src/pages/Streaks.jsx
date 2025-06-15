import React, { useState, useEffect } from 'react';
import './streaks.css';
import Navbar from '../components/Navbar';

const Streaks = () => {
  const [habits, setHabits] = useState([]);
  const [moodEntries, setMoodEntries] = useState([]);
  const [habitInput, setHabitInput] = useState('');
  const [moodInput, setMoodInput] = useState('');
  const [sleepInput, setSleepInput] = useState('');
  const [weatherInput, setWeatherInput] = useState('');

  const addHabit = () => {
    if (!habitInput.trim()) return;
    
    const newHabit = {
      id: Date.now(),
      name: habitInput.trim(),
      days: Array(31).fill(false)
    };
    
    setHabits([...habits, newHabit]);
    setHabitInput('');
  };

  const toggleDay = (habitId, dayIndex) => {
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        const newDays = [...habit.days];
        newDays[dayIndex] = !newDays[dayIndex];
        return { ...habit, days: newDays };
      }
      return habit;
    }));
  };

  const addMoodEntry = () => {
    if (!moodInput.trim() || !sleepInput.trim() || !weatherInput.trim()) return;
    
    const newEntry = {
      id: Date.now(),
      day: moodEntries.length + 1,
      mood: moodInput.trim(),
      sleep: parseFloat(sleepInput),
      weather: weatherInput.trim()
    };
    
    setMoodEntries([...moodEntries, newEntry]);
    setMoodInput('');
    setSleepInput('');
    setWeatherInput('');
  };

  const getProgressStats = () => {
    let totalCompleted = 0;
    let totalDays = 0;
    const habitsCompletion = [];

    habits.forEach(habit => {
      const completed = habit.days.filter(day => day).length;
      totalCompleted += completed;
      totalDays += habit.days.length;
      habitsCompletion.push({ name: habit.name, completed });
    });

    const streakPercentage = totalDays > 0 ? (totalCompleted / totalDays * 100).toFixed(2) : 0;
    const topHabits = habitsCompletion
      .sort((a, b) => b.completed - a.completed)
      .slice(0, 3)
      .map(h => h.name)
      .join(', ') || 'None';

    return { totalCompleted, streakPercentage, topHabits };
  };

  const getMoodSummary = () => {
    if (moodEntries.length === 0) {
      return { commonMood: 'Neutral', avgSleep: 0, commonWeather: 'Unknown' };
    }

    const moods = moodEntries.map(entry => entry.mood);
    const sleepHours = moodEntries.map(entry => entry.sleep);
    const weathers = moodEntries.map(entry => entry.weather);

    const getMostFrequent = (arr) => {
      const counts = {};
      arr.forEach(item => counts[item] = (counts[item] || 0) + 1);
      return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    };

    const avgSleep = sleepHours.reduce((a, b) => a + b, 0) / sleepHours.length;

    return {
      commonMood: getMostFrequent(moods),
      avgSleep: avgSleep.toFixed(1),
      commonWeather: getMostFrequent(weathers)
    };
  };

  const getProgressColor = (percentage) => {
    if (percentage <= 33) return '#F44336'; // Fail/Reset Tone
    if (percentage <= 66) return '#FFD369'; // Accent Color
    return '#A3E635'; // Success Tone
  };

  const { totalCompleted, streakPercentage, topHabits } = getProgressStats();
  const { commonMood, avgSleep, commonWeather } = getMoodSummary();
  return (
    <>
      <Navbar 
        bgColor="#1B1F23" 
        textColor="#DFD0B8" 
        transparent={false}
        position="fixed"
      />
      <div className="streaks-container" style={{ paddingTop: '80px' }}>
        {/* Floating Elements */}
        <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
      <div className="cloud cloud-4"></div>

      <h1 className="main-title">Streaks Savvy</h1>
      
      <div className="streak-card">
        <div className="input-group">
          <input
            type="text"
            value={habitInput}
            onChange={(e) => setHabitInput(e.target.value)}
            placeholder="Enter habit name"
            className="habit-input"
          />
          <button className="add-button" onClick={addHabit}>
            Add Habit
          </button>
        </div>
        
        <div className="table-container">
          <table className="habits-table">
            <thead>
              <tr>
                <th>Habit</th>
                <th colSpan="31">Days</th>
                <th>Goal</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {habits.map(habit => {
                const completed = habit.days.filter(day => day).length;
                const percentage = (completed / 31) * 100;
                return (
                  <tr key={habit.id}>
                    <td className="habit-name">{habit.name}</td>
                    <td colSpan="31">
                      <div className="checkbox-group">
                        {habit.days.map((checked, index) => (
                          <label key={index} className="day-checkbox">
                            {index + 1}
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleDay(habit.id, index)}
                            />
                          </label>
                        ))}
                      </div>
                    </td>
                    <td>31</td>
                    <td>
                      <div className="progress-bar">
                        <div
                          className="progress"
                          style={{
                            width: `${percentage}%`,
                            backgroundColor: getProgressColor(percentage)
                          }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="section-title">My week was ...</h2>
      <div className="streak-card progress-summary">
        <p>Total Days Completed: <span className="highlight-text">{totalCompleted}</span></p>
        <p>Maintained Streak: <span className="highlight-text">{streakPercentage}%</span></p>
        <p>Top 3 Habits: <span className="highlight-text">{topHabits}</span></p>
      </div>

      <h2 className="section-title">Well not that moody (or I can be ... )</h2>
      <div className="streak-card">
        <div className="input-group mood-inputs">
          <input
            type="text"
            value={moodInput}
            onChange={(e) => setMoodInput(e.target.value)}
            placeholder="Enter mood (Happy, Sad, Stressed, etc.)"
            className="mood-input"
          />
          <input
            type="number"
            value={sleepInput}
            onChange={(e) => setSleepInput(e.target.value)}
            placeholder="Sleep (hrs)"
            className="sleep-input"
          />
          <input
            type="text"
            value={weatherInput}
            onChange={(e) => setWeatherInput(e.target.value)}
            placeholder="Weather (Sunny, Rainy, etc.)"
            className="weather-input"
          />
          <button className="add-button" onClick={addMoodEntry}>
            Add Mood Entry
          </button>
        </div>
        
        <div className="table-container">
          <table className="mood-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Mood</th>
                <th>Sleep (hrs)</th>
                <th>Weather</th>
              </tr>
            </thead>
            <tbody>
              {moodEntries.map(entry => (
                <tr key={entry.id}>
                  <td>{entry.day}</td>
                  <td>{entry.mood}</td>
                  <td>{entry.sleep}</td>
                  <td>{entry.weather}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="section-title">So was I moody?(it might be because of less sleep)</h2>
      <div className="streak-card summary-card">
        <p>I was mostly <span className="highlight-text">{commonMood}</span> this week.</p>
        <p>My average sleep was <span className="highlight-text">{avgSleep}</span> hours.</p>
        <p>This week's weather was mostly <span className="highlight-text">{commonWeather}</span>.</p>      </div>
    </div>
    </>
  );
};

export default Streaks;