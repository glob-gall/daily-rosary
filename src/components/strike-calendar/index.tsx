;
import { Calendar, LocaleConfig } from 'react-native-calendars';
import twColors, { transparent } from 'tailwindcss/colors';
import StrikeCalendarHeader, { StrikeCalendarHeaderProps } from './strike-calendar-header';

const localePtBr = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abril', 'Maio', 'Junho', 'Julho.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dec.'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
}

LocaleConfig.locales['pt-br'] = localePtBr;
LocaleConfig.defaultLocale = 'pt-br';

export function StrikeCalendar() {

  return (
    <Calendar
      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
      monthFormat={'MMMM yyyy'}
      disableAllTouchEventsForDisabledDays={true}
      customHeader={
        ({addMonth,month}: StrikeCalendarHeaderProps) => (
          <StrikeCalendarHeader month={month} addMonth={addMonth} dayNamesShort={localePtBr.dayNamesShort}/>
        )
      }

      hideDayNames={false}
      enableSwipeMonths={true}
      markingType='period'
      markedDates={{
        '2025-09-04': {startingDay: true, endingDay:true, color: twColors.yellow[200], textColor:twColors.yellow[800]},
        '2025-09-20': {startingDay:true, endingDay:true, color: twColors.yellow[200], textColor:twColors.yellow[800]},
        '2025-09-22': {startingDay: true, color: twColors.yellow[200], textColor:twColors.yellow[800]},
        '2025-09-23': {selected: true, color: twColors.yellow[200], textColor:twColors.yellow[800]},
        '2025-09-24': {selected: true, endingDay: true, color: twColors.yellow[200], textColor:twColors.yellow[800]},
      }}
      theme={{calendarBackground: transparent}}
    />
  )
}