import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

type DayNumber = number | null;

const Calendar: React.FC = () => {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth()); // 0-11
  const [year, setYear] = useState(today.getFullYear());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sun

  const calendarData: DayNumber[] = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const changeMonth = (direction: 'prev' | 'next') => {
    setMonth((prevMonth) => {
      if (direction === 'prev') {
        if (prevMonth === 0) {
          setYear((y) => y - 1);
          return 11;
        }
        return prevMonth - 1;
      } else {
        if (prevMonth === 11) {
          setYear((y) => y + 1);
          return 0;
        }
        return prevMonth + 1;
      }
    });
  };

  const renderDay = ({ item }: { item: DayNumber }) => {
    if (!item) {
      return <View style={styles.emptyBox} />;
    }

    const isToday =
      item === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    return (
      <View style={[styles.dayBox, isToday && styles.todayBox]}>
        <Text style={styles.dateText}>{item}</Text>
        <Text style={styles.expenseText}>-₹450</Text>
        <Text style={styles.incomeText}>+₹1200</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => changeMonth('prev')}
          activeOpacity={0.7}
        >
          <Text style={styles.navText}>{'<'}</Text>
        </TouchableOpacity>

        <Text style={styles.monthText}>
          {new Date(year, month).toLocaleString('default', { month: 'long' })}{' '}
          {year}
        </Text>

        <TouchableOpacity onPress={() => changeMonth('next')}>
          <Text style={styles.navText}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      {/* Week names */}
      <View style={styles.weekRow}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <Text key={d} style={styles.weekText}>
            {d}
          </Text>
        ))}
      </View>

      {/* Calendar */}
      <FlatList
        data={calendarData}
        renderItem={renderDay}
        keyExtractor={(_, i) => i.toString()}
        numColumns={7}
        scrollEnabled={false}
      />
    </View>
  );
};

export default Calendar;

/* ✅ STYLES (THIS WAS MISSING) */
const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  navText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  monthText: {
    fontSize: 18,
    fontWeight: '600',
  },
  weekRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  weekText: {
    width: '14.28%',
    textAlign: 'center',
    fontWeight: '600',
  },
  dayBox: {
    width: '14.28%',
    height: 75,
    borderWidth: 0.5,
    borderColor: '#ccc',
    padding: 4,
  },
  emptyBox: {
    width: '14.28%',
    height: 75,
  },
  todayBox: {
    backgroundColor: '#d1f7c4',
  },
  dateText: {
    fontWeight: 'bold',
  },
  expenseText: {
    fontSize: 10,
    color: 'red',
  },
  incomeText: {
    fontSize: 10,
    color: 'green',
  },
});
