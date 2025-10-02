import { useTheme } from '@/hooks/theme';
import { sequenceStore } from '@/store/sequence-store';
import { storedSequenceToCalendar } from '@/utils/stored-sequence-to-calendar';
import { useMemo } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import twColors, { transparent } from 'tailwindcss/colors';
import StrikeCalendarHeader, { StrikeCalendarHeaderProps } from './strike-calendar-header';
;

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
  const {themeVars} = useTheme()
  const {days} = sequenceStore()
  const markedDates = useMemo(() => storedSequenceToCalendar(days),[days])
  
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

      markingType={'period'}
      markedDates={markedDates}
      theme={{
        calendarBackground: transparent,
        selectedDayBackgroundColor: twColors.yellow[200],
        selectedDayTextColor: twColors.yellow[800],
        selectedDotColor: '#000',
        dayTextColor: themeVars.primary
      }}
    />
  )
}