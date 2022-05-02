import {runInContext as hide_tab_bar_screens} from 'yarn/lib/cli';

const MainScreenNavigator = () => {
  const getTabBarVisibility = route => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (hide_tab_bar_screens.includes(routeName)) {
      return false;
    }
    return true;
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#0d5794',
        activeBackgroundColor: '#0d5794',
        keyboardHidesTabBar: Platform.OS == 'ios' ? true : false,
        style: {
          position: 'absolute',
          alignSelf: 'center',
          bottom: Platform.OS == 'ios' ? 4 : 10,
          left: Platform.OS == 'ios' ? 4 : 10,
          right: Platform.OS == 'ios' ? 4 : 10,
          borderRadius: Platform.OS == 'ios' ? 40 : 0,
          borderTopLeftRadius: Platform.OS == 'ios' ? 10 : 0,
          borderTopRightRadius: Platform.OS == 'ios' ? 10 : 0,
          borderWidth: 2,
          borderColor: '#1111',
          elevation: 5,
          backgroundColor: '#f2f2f3',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
        },
      }}>
      <Tab.Screen
        name="דף הבית"
        component={MainScreen}
        initialParams={{categories_id: '122'}}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({color}) => (
            <IconFW name="home" size={25} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="מעט לעת"
        component={GenericFeed}
        initialParams={{category_id: '402'}}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({color}) => (
            <Icon name="book-open" size={25} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="צ׳אט הכתבים"
        component={GenericChat}
        initialParams={{
          id: 'reporters',
          show_input: false,
          chat_name: 'צ׳אט הכתבים',
        }}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({color}) => (
            <IconIC name="ios-chatbubbles-sharp" size={25} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="דוברות"
        component={GenericFeed}
        initialParams={{category_id: '404'}}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({color}) => (
            <Icon name="torah" size={25} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="נוספים"
        component={OtherScreen}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({color}) => <Icon name="bars" size={25} color={color} />,
        })}
      />
    </Tab.Navigator>
  );
};
