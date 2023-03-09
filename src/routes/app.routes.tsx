import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsMeal } from '@screens/DetailsMeal';
import { EditMeal } from '@screens/EditMeal';
import { Feedback } from '@screens/Feedback';
import { Home } from '@screens/Home';
import { NewMeal } from '@screens/NewMeal';
import { Statistic } from '@screens/Statistic';

const { Navigator, Screen } = createNativeStackNavigator();
export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistic" component={Statistic} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="detailsMeal" component={DetailsMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="editMeal" component={EditMeal} />
    </Navigator>
  )
}