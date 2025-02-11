// FullCalendar integration for Calendar
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        { title: 'Maths Exam', date: '2025-02-15' },
        { title: 'Physics Lecture', date: '2025-02-12' },
      ],
    });
    calendar.render();
  });
  
  // Sample Timetable Data (You can fetch this from a database)
  const timetableData = [
    { day: 'Monday', time: '9:00 AM - 10:00 AM', subject: 'Mathematics' },
    { day: 'Tuesday', time: '10:30 AM - 12:00 PM', subject: 'Physics' },
    // Add more items here
  ];
  
  function loadTimetable() {
    const tableBody = document.querySelector('table tbody');
    timetableData.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${item.day}</td><td>${item.time}</td><td>${item.subject}</td>`;
      tableBody.appendChild(row);
    });
  }
  
  // Sample Meeting Reminders (You can fetch this from a database)
  const meetingReminders = [
    { title: 'Meeting with Professor', time: 'Friday 10 AM' },
    { title: 'Lab Meeting', time: 'Monday 2 PM' },
  ];
  
  function loadMeetings() {
    const list = document.querySelector('.meeting-section ul');
    meetingReminders.forEach(reminder => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.textContent = `${reminder.title} on ${reminder.time}`;
      list.appendChild(li);
    });
  }
  
  loadTimetable();
  loadMeetings();
  