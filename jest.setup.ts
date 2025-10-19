
// Optional but recommended if you use react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';

// Mock the Appearance API (so NativeWind doesn't crash)
jest.mock('react-native/Libraries/Utilities/Appearance', () => ({
  getColorScheme: () => 'light',
  addChangeListener: jest.fn(),
  removeChangeListener: jest.fn(),
}));
